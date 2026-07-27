import { beforeEach, describe, expect, it, vi } from 'vitest';

// La synchronisation vers le compte est simulée : ces tests portent sur la
// logique de progression elle-même (programmation des révisions, défi du jour,
// parcours), pas sur le réseau.
const pushed: { srs: [string, unknown][]; challenges: unknown[]; targets: unknown[] } = {
  srs: [],
  challenges: [],
  targets: [],
};

vi.mock('@/lib/progressPush', () => ({
  setSyncUser: vi.fn(),
  getSyncUser: () => null,
  pushSrsEntry: (id: string, entry: unknown) => pushed.srs.push([id, entry]),
  pushChallenge: (...args: unknown[]) => pushed.challenges.push(args),
  pushTargetExam: (t: unknown) => pushed.targets.push(t),
}));

import {
  recordAnswer,
  getDueQuestionIds,
  getScheduledCount,
  loadSrs,
  replaceSrs,
  markChallengeDone,
  getTodayChallenge,
  today,
} from '@/lib/spacedRepetition';
import {
  saveTargetExam,
  loadTargetExam,
  specificModuleIdsFor,
  revisionDomainFor,
  admissionExamIdFor,
} from '@/lib/targetExam';

const daysFromToday = (iso: string) => {
  const d = new Date(`${iso}T12:00:00`);
  const t = new Date(`${today()}T12:00:00`);
  return Math.round((d.getTime() - t.getTime()) / 86_400_000);
};

beforeEach(() => {
  localStorage.clear();
  pushed.srs = [];
  pushed.challenges = [];
  pushed.targets = [];
});

describe('révision espacée', () => {
  it('programme une question ratée pour le lendemain', () => {
    recordAnswer('reg-001', false);

    const entry = loadSrs()['reg-001'];
    expect(entry).toBeDefined();
    expect(entry.stage).toBe(0);
    expect(entry.fails).toBe(1);
    expect(daysFromToday(entry.due)).toBe(1);
  });

  it('espace les revues à J+1, J+3 puis J+7 et sort la question une fois maîtrisée', () => {
    recordAnswer('reg-002', false);
    expect(daysFromToday(loadSrs()['reg-002'].due)).toBe(1);

    recordAnswer('reg-002', true);
    expect(daysFromToday(loadSrs()['reg-002'].due)).toBe(3);

    recordAnswer('reg-002', true);
    expect(daysFromToday(loadSrs()['reg-002'].due)).toBe(7);

    // Troisième succès : la question est acquise, elle quitte le programme.
    recordAnswer('reg-002', true);
    expect(loadSrs()['reg-002']).toBeUndefined();
    expect(getScheduledCount()).toBe(0);
  });

  it('ne programme rien pour une bonne réponse sur une question jamais ratée', () => {
    recordAnswer('reg-003', true);
    expect(getScheduledCount()).toBe(0);
  });

  it('compte les échecs successifs et repart à J+1 après une rechute', () => {
    recordAnswer('sec-001', false);
    recordAnswer('sec-001', true); // passe à J+3
    recordAnswer('sec-001', false); // rechute

    const entry = loadSrs()['sec-001'];
    expect(entry.stage).toBe(0);
    expect(entry.fails).toBe(2);
    expect(daysFromToday(entry.due)).toBe(1);
  });

  it('ne propose que les questions dont l\'échéance est atteinte', () => {
    replaceSrs({
      'due-hier': { stage: 0, due: '2020-01-01', fails: 1 },
      'due-aujourdhui': { stage: 1, due: today(), fails: 1 },
      'due-plus-tard': { stage: 2, due: '2999-01-01', fails: 1 },
    });

    const due = getDueQuestionIds().sort();
    expect(due).toEqual(['due-aujourdhui', 'due-hier']);
  });

  it('renvoie chaque changement vers le compte', () => {
    recordAnswer('vtc-001', false);
    recordAnswer('vtc-001', true);

    expect(pushed.srs).toHaveLength(2);
    expect(pushed.srs[0][0]).toBe('vtc-001');
  });
});

describe('défi du jour', () => {
  it('retient le score du jour et renvoie le résultat vers le compte', () => {
    expect(getTodayChallenge()).toBeNull();

    markChallengeDone(4, 5);

    expect(getTodayChallenge()).toMatchObject({ score: 4, total: 5, date: today() });
    expect(pushed.challenges).toHaveLength(1);
  });

  it('ignore le défi d\'un jour précédent', () => {
    localStorage.setItem(
      'quiz-t3p-defi',
      JSON.stringify({ date: '2020-01-01', score: 5, total: 5 })
    );
    expect(getTodayChallenge()).toBeNull();
  });
});

describe('parcours par métier', () => {
  it('mémorise le choix et le renvoie vers le compte', () => {
    saveTargetExam('taxi');
    expect(loadTargetExam()).toBe('taxi');
    expect(pushed.targets).toEqual(['taxi']);
  });

  it('filtre les modules spécifiques selon le métier', () => {
    expect(specificModuleIdsFor('taxi')).toEqual(['taxi', 'taxi-national', 'taxi-territoire']);
    expect(specificModuleIdsFor('vtc')).toEqual(['vtc']);
    expect(specificModuleIdsFor('vmdtr')).toEqual(['vmdtr']);
    // « tous » et l'absence de choix n'appliquent aucun filtre.
    expect(specificModuleIdsFor('tous')).toBeNull();
    expect(specificModuleIdsFor(null)).toBeNull();
  });

  it('associe le bon domaine de fiches et la bonne épreuve d\'admission', () => {
    expect(revisionDomainFor('vmdtr')).toBe('vmdtr');
    expect(revisionDomainFor('tous')).toBeNull();
    expect(admissionExamIdFor('taxi')).toBe('admission-taxi');
    expect(admissionExamIdFor('vtc')).toBe('admission-vtc');
    expect(admissionExamIdFor('tous')).toBeNull();
  });
});
