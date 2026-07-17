/**
 * Révision espacée des questions ratées (local à l'appareil).
 *
 * Principe : une question ratée revient à J+1 ; chaque bonne réponse
 * espace la prochaine revue (J+3 puis J+7) ; après 3 succès d'affilée,
 * la question est considérée maîtrisée et sort du programme.
 */

export interface SrsEntry {
  /** Étape atteinte (0 = vient d'être ratée). */
  stage: number;
  /** Date (AAAA-MM-JJ locale) à partir de laquelle la revoir. */
  due: string;
  /** Nombre total d'échecs, pour statistiques. */
  fails: number;
}

const STORAGE_KEY = 'quiz-t3p-srs';
const INTERVALS_DAYS = [1, 3, 7];

const localDateString = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const today = (): string => localDateString(new Date());

const inDays = (days: number): string => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return localDateString(d);
};

export const loadSrs = (): Record<string, SrsEntry> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, SrsEntry>) : {};
  } catch {
    return {};
  }
};

const saveSrs = (store: Record<string, SrsEntry>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // stockage indisponible : tant pis pour cette réponse
  }
};

/** À appeler à chaque question corrigée (quiz, examen, révision, défi). */
export const recordAnswer = (questionId: string, correct: boolean) => {
  const store = loadSrs();
  const entry = store[questionId];

  if (!correct) {
    store[questionId] = {
      stage: 0,
      due: inDays(INTERVALS_DAYS[0]),
      fails: (entry?.fails ?? 0) + 1,
    };
  } else if (entry) {
    if (entry.stage >= INTERVALS_DAYS.length - 1) {
      delete store[questionId]; // maîtrisée
    } else {
      const nextStage = entry.stage + 1;
      store[questionId] = { ...entry, stage: nextStage, due: inDays(INTERVALS_DAYS[nextStage]) };
    }
  }
  // Bonne réponse sur une question jamais ratée : rien à programmer.

  saveSrs(store);
};

/** Questions à revoir aujourd'hui (échéance atteinte). */
export const getDueQuestionIds = (): string[] => {
  const t = today();
  return Object.entries(loadSrs())
    .filter(([, entry]) => entry.due <= t)
    .map(([id]) => id);
};

/** Nombre total de questions encore dans le programme de révision. */
export const getScheduledCount = (): number => Object.keys(loadSrs()).length;

// ---------------------------------------------------------------------------
// Défi du jour
// ---------------------------------------------------------------------------

const CHALLENGE_KEY = 'quiz-t3p-defi';

export interface DailyChallengeState {
  date: string;
  score: number;
  total: number;
}

export const getTodayChallenge = (): DailyChallengeState | null => {
  try {
    const raw = localStorage.getItem(CHALLENGE_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw) as DailyChallengeState;
    return state.date === today() ? state : null;
  } catch {
    return null;
  }
};

export const markChallengeDone = (score: number, total: number) => {
  try {
    localStorage.setItem(
      CHALLENGE_KEY,
      JSON.stringify({ date: today(), score, total } satisfies DailyChallengeState)
    );
  } catch {
    // stockage indisponible
  }
};
