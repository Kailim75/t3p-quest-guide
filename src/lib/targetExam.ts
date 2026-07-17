import { useEffect, useState } from 'react';

/** Parcours choisi par l'élève : son métier, ou « tous » pour tout afficher. */
export type TargetExam = 'taxi' | 'vtc' | 'vmdtr' | 'tous';

const STORAGE_KEY = 'quiz-t3p-parcours';
const CHANGE_EVENT = 'quiz-t3p-parcours-change';

export const targetLabels: Record<TargetExam, string> = {
  taxi: 'Taxi',
  vtc: 'VTC',
  vmdtr: 'Moto (VMDTR)',
  tous: 'Tous les métiers',
};

export const loadTargetExam = (): TargetExam | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'taxi' || v === 'vtc' || v === 'vmdtr' || v === 'tous' ? v : null;
  } catch {
    return null;
  }
};

export const saveTargetExam = (target: TargetExam) => {
  try {
    localStorage.setItem(STORAGE_KEY, target);
  } catch {
    // stockage indisponible : le choix ne sera pas persisté
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

/** Ids des modules spécifiques du métier choisi (null = pas de filtre). */
export const specificModuleIdsFor = (target: TargetExam | null): string[] | null => {
  switch (target) {
    case 'taxi':
      return ['taxi', 'taxi-national', 'taxi-territoire'];
    case 'vtc':
      return ['vtc'];
    case 'vmdtr':
      return ['vmdtr'];
    default:
      return null;
  }
};

/** Domaine des fiches de révision correspondant (null = pas de filtre). */
export const revisionDomainFor = (
  target: TargetExam | null
): 'taxi' | 'vtc' | 'vmdtr' | null =>
  target === 'taxi' || target === 'vtc' || target === 'vmdtr' ? target : null;

/** Id de l'épreuve d'admission correspondant au métier choisi. */
export const admissionExamIdFor = (target: TargetExam | null): string | null => {
  switch (target) {
    case 'taxi':
      return 'admission-taxi';
    case 'vtc':
      return 'admission-vtc';
    case 'vmdtr':
      return 'admission-vmdtr';
    default:
      return null;
  }
};

/** Hook réactif : le parcours choisi, synchronisé entre les composants. */
export const useTargetExam = (): [TargetExam | null, (t: TargetExam) => void] => {
  const [target, setTarget] = useState<TargetExam | null>(() => loadTargetExam());

  useEffect(() => {
    const sync = () => setTarget(loadTargetExam());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return [target, saveTargetExam];
};
