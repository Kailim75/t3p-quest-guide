import { supabase } from '@/integrations/supabase/client';
import type { SrsEntry } from '@/lib/spacedRepetition';
import type { TargetExam } from '@/lib/targetExam';

/**
 * Envois de la progression vers le compte de l'apprenant.
 *
 * Module volontairement isolé (types importés en `import type` uniquement) :
 * les librairies de progression peuvent l'appeler sans créer de dépendance
 * circulaire avec la synchronisation.
 *
 * Les écritures sont « best effort » : en cas de réseau absent, l'élève
 * continue de travailler sur le cache local et la prochaine connexion
 * rattrape l'écart.
 */

let currentUserId: string | null = null;

export const setSyncUser = (userId: string | null) => {
  currentUserId = userId;
};

export const getSyncUser = () => currentUserId;

export const pushSrsEntry = (questionId: string, entry: SrsEntry | null) => {
  const userId = currentUserId;
  if (!userId) return;

  const run = async () => {
    if (entry) {
      const { error } = await supabase.from('user_srs_entries').upsert({
        user_id: userId,
        question_id: questionId,
        stage: entry.stage,
        due_on: entry.due,
        fails: entry.fails,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
    } else {
      // Question maîtrisée : elle sort du programme de révision.
      const { error } = await supabase
        .from('user_srs_entries')
        .delete()
        .eq('user_id', userId)
        .eq('question_id', questionId);
      if (error) throw error;
    }
  };

  void run().catch((error) => console.warn('Synchronisation révision impossible', error));
};

export const pushChallenge = (date: string, score: number, total: number) => {
  const userId = currentUserId;
  if (!userId) return;

  void supabase
    .from('user_daily_challenges')
    .upsert({ user_id: userId, challenge_date: date, score, total })
    .then(({ error }) => {
      if (error) console.warn('Synchronisation défi impossible', error);
    });
};

export const pushFicheStatus = (ficheId: string, status: 'maitrisee' | 'a-revoir') => {
  const userId = currentUserId;
  if (!userId) return;

  void supabase
    .from('user_fiche_progress')
    .upsert(
      { user_id: userId, fiche_id: ficheId, status, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,fiche_id' }
    )
    .then(({ error }) => {
      if (error) console.warn('Synchronisation fiches impossible', error);
    });
};

export const pushTargetExam = (target: TargetExam) => {
  const userId = currentUserId;
  if (!userId) return;

  void supabase
    .from('profiles')
    .update({ target_exam: target })
    .eq('id', userId)
    .then(({ error }) => {
      if (error) console.warn('Synchronisation parcours impossible', error);
    });
};
