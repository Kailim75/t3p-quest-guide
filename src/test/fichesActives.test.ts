import { describe, expect, it, beforeEach, vi } from 'vitest';

// Les envois vers le compte sont testés à part : ici on isole la logique locale.
vi.mock('@/lib/progressPush', () => ({
  pushFicheStatus: vi.fn(),
}));
import { matchQuestionsToFiche, questionModulesFor, significantWords } from '@/lib/ficheQuizMatch';
import {
  FICHES_STORAGE_KEY,
  loadFicheProgress,
  moduleFicheProgress,
  setFicheStatus,
} from '@/lib/ficheProgress';
import { readingMinutes } from '@/lib/ficheText';
import type { Question } from '@/data/quizData';
import type { RevisionCard } from '@/data/revisionData';

/** Fiche minimale pour les tests. */
const fiche = (extra: Partial<RevisionCard> = {}): RevisionCard => ({
  id: 'test-fiche',
  title: 'Formes juridiques',
  essential: 'Le choix de la forme juridique détermine responsabilité, régime social et fiscalité.',
  keyPoints: [
    'EURL/SARL : gérant majoritaire = TNS',
    'SASU : président assimilé salarié',
  ],
  tips: [],
  legalRefs: [],
  ...extra,
});

const question = (id: string, text: string, options: string[] = []): Question => ({
  id,
  moduleId: 'gestion',
  subModuleId: 'ges-1',
  text,
  options: (['A', 'B', 'C', 'D'] as const).map((letter, i) => ({
    letter,
    text: options[i] ?? `option ${letter}`,
  })),
  correctAnswer: 'A',
  explanation: '',
  reference: '',
  difficulty: 'moyen',
});

describe('appariement fiche ↔ questions', () => {
  it('retient les questions qui partagent le vocabulaire de la fiche', () => {
    const proche = question('q-sarl', 'Le gérant majoritaire de SARL relève de quel régime ?', [
      'TNS',
      'Assimilé salarié',
    ]);
    const lointaine = question('q-tva', 'Quel est le taux normal de TVA en France ?');
    const autre = question('q-bilan', 'Que contient un bilan comptable ?');

    const picked = matchQuestionsToFiche(fiche(), [lointaine, proche, autre], 1);
    expect(picked[0].id).toBe('q-sarl');
  });

  it('complète avec le module quand les recoupements manquent, sans jamais rendre moins', () => {
    const bank = [question('q1', 'Question sans lien un.'), question('q2', 'Question sans lien deux.')];
    const picked = matchQuestionsToFiche(fiche(), bank, 3);
    expect(picked).toHaveLength(2);
  });

  it('ignore accents et mots-outils', () => {
    const words = significantWords('Le gérant DOIT être immatriculé, avec cette régularité');
    expect(words.has('gerant')).toBe(true);
    expect(words.has('immatricule')).toBe(true);
    expect(words.has('avec')).toBe(false);
    expect(words.has('cette')).toBe(false);
  });

  it('rattache les modules de fiches aux modules de questions', () => {
    expect(questionModulesFor('gestion')).toEqual(['gestion']);
    expect(questionModulesFor('vmdtr-commercial')).toEqual(['vmdtr']);
    expect(questionModulesFor('taxi-territoire')).toContain('taxi-territoire');
  });
});

describe('progression des fiches', () => {
  beforeEach(() => localStorage.removeItem(FICHES_STORAGE_KEY));

  it('mémorise le dernier statut posé', () => {
    setFicheStatus('f1', 'a-revoir');
    setFicheStatus('f1', 'maitrisee');
    expect(loadFicheProgress()['f1'].status).toBe('maitrisee');
  });

  it("compte l'avancement d'un module", () => {
    setFicheStatus('f1', 'maitrisee');
    setFicheStatus('f2', 'a-revoir');

    const avancement = moduleFicheProgress(['f1', 'f2', 'f3']);
    expect(avancement).toEqual({ total: 3, maitrisees: 1, aRevoir: 1, travaillees: 2 });
  });
});

describe('chiffres clés des fiches', () => {
  it('chaque vignette est complète et les fiches en ont au plus 3', async () => {
    const { getAllRevisionModules } = await import('@/data/revisionData');
    const cards = getAllRevisionModules().flatMap((m) => m.cards);
    const withFigures = cards.filter((c) => c.keyFigures?.length);

    // La majorité des fiches ont des chiffres à mémoriser (59 rédigées).
    expect(withFigures.length).toBeGreaterThanOrEqual(55);

    for (const card of withFigures) {
      expect(card.keyFigures!.length).toBeLessThanOrEqual(3);
      for (const figure of card.keyFigures!) {
        expect(figure.value.trim()).not.toBe('');
        expect(figure.label.trim()).not.toBe('');
        // Une vignette reste courte : c'est une photo mentale, pas une phrase.
        expect(figure.label.length).toBeLessThanOrEqual(45);
      }
    }
  });
});

describe('temps de lecture', () => {
  it('estime au moins une minute et grandit avec le contenu', () => {
    const courte = readingMinutes(fiche());
    const longue = readingMinutes(
      fiche({ narrative: Array(600).fill('mot').join(' ') })
    );
    expect(courte).toBeGreaterThanOrEqual(1);
    expect(longue).toBeGreaterThan(courte);
  });
});
