import { supabase } from '@/integrations/supabase/client';
import { loadSrs, replaceSrs, SrsEntry, today, CHALLENGE_STORAGE_KEY } from '@/lib/spacedRepetition';
import { loadTargetExam, TargetExam, applyTargetExamFromServer } from '@/lib/targetExam';
import { pushSrsEntry, pushTargetExam, setSyncUser } from '@/lib/progressPush';

/**
 * Alignement de l'appareil sur le compte, à la connexion.
 *
 * Récupère ce que le compte contient déjà, et remonte ce que cet appareil
 * avait accumulé auparavant — les élèves qui utilisaient déjà l'application
 * ne perdent donc rien lors du passage à la progression rattachée au compte.
 */
export const pullProgress = async (userId: string) => {
  setSyncUser(userId);

  // --- Parcours (métier préparé) ---
  const { data: profile } = await supabase
    .from('profiles')
    .select('target_exam')
    .eq('id', userId)
    .maybeSingle();

  const localTarget = loadTargetExam();
  const serverTarget = (profile?.target_exam ?? null) as TargetExam | null;

  if (serverTarget) {
    applyTargetExamFromServer(serverTarget);
  } else if (localTarget) {
    // Choix fait sur cet appareil avant la synchronisation : on le remonte.
    pushTargetExam(localTarget);
  }

  // --- Révision espacée ---
  const { data: rows, error } = await supabase
    .from('user_srs_entries')
    .select('question_id, stage, due_on, fails')
    .eq('user_id', userId);

  if (error) {
    console.warn('Récupération de la révision impossible', error);
    return;
  }

  const merged: Record<string, SrsEntry> = {};
  for (const row of rows ?? []) {
    merged[row.question_id] = { stage: row.stage, due: row.due_on, fails: row.fails };
  }

  // Questions programmées sur cet appareil mais absentes du compte : on les
  // remonte (première synchronisation d'un élève déjà actif).
  for (const [questionId, entry] of Object.entries(loadSrs())) {
    if (!merged[questionId]) {
      merged[questionId] = entry;
      pushSrsEntry(questionId, entry);
    }
  }

  replaceSrs(merged);

  // --- Défi du jour ---
  const { data: challenge } = await supabase
    .from('user_daily_challenges')
    .select('challenge_date, score, total')
    .eq('user_id', userId)
    .eq('challenge_date', today())
    .maybeSingle();

  if (challenge) {
    try {
      localStorage.setItem(
        CHALLENGE_STORAGE_KEY,
        JSON.stringify({
          date: challenge.challenge_date,
          score: challenge.score,
          total: challenge.total,
        })
      );
    } catch {
      // stockage indisponible : le défi sera simplement reproposé ici
    }
  }
};
