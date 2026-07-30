import { pushFicheStatus } from '@/lib/progressPush';

/**
 * Progression de lecture des fiches de cours.
 *
 * Chaque fiche peut être déclarée « maîtrisée » ou « à revoir » par l'élève
 * (l'absence d'entrée = pas encore travaillée). Même architecture que la
 * révision espacée : le localStorage est le cache de travail, le compte est
 * la mémoire durable (voir progressSync).
 */

export type FicheStatus = 'maitrisee' | 'a-revoir';

export interface FicheProgressEntry {
  status: FicheStatus;
  updatedAt: string;
}

export const FICHES_STORAGE_KEY = 'quiz-t3p-fiches';

export const loadFicheProgress = (): Record<string, FicheProgressEntry> => {
  try {
    const raw = localStorage.getItem(FICHES_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, FicheProgressEntry>) : {};
  } catch {
    return {};
  }
};

const save = (store: Record<string, FicheProgressEntry>) => {
  localStorage.setItem(FICHES_STORAGE_KEY, JSON.stringify(store));
};

export const setFicheStatus = (ficheId: string, status: FicheStatus) => {
  const store = loadFicheProgress();
  store[ficheId] = { status, updatedAt: new Date().toISOString() };
  save(store);
  pushFicheStatus(ficheId, status);
};

export const getFicheStatus = (ficheId: string): FicheStatus | null =>
  loadFicheProgress()[ficheId]?.status ?? null;

/** Remplace le cache local par l'état du compte (connexion). */
export const replaceFicheProgress = (entries: Record<string, FicheProgressEntry>) => {
  save(entries);
};

/** Avancement d'un module : fiches travaillées / à revoir / maîtrisées. */
export const moduleFicheProgress = (
  ficheIds: string[],
  store: Record<string, FicheProgressEntry> = loadFicheProgress()
) => {
  let maitrisees = 0;
  let aRevoir = 0;
  for (const id of ficheIds) {
    const status = store[id]?.status;
    if (status === 'maitrisee') maitrisees++;
    else if (status === 'a-revoir') aRevoir++;
  }
  return {
    total: ficheIds.length,
    maitrisees,
    aRevoir,
    travaillees: maitrisees + aRevoir,
  };
};
