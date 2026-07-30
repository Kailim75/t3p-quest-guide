import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FicheQuiz from '@/components/revision/FicheQuiz';
import { splitFigures } from '@/lib/ficheText';
import type { Question } from '@/data/quizData';
import type { RevisionCard } from '@/data/revisionData';

vi.mock('@/lib/progressPush', () => ({
  pushFicheStatus: vi.fn(),
  pushSrsEntry: vi.fn(),
  pushChallenge: vi.fn(),
}));

const card: RevisionCard = {
  id: 'test',
  title: 'Formes juridiques',
  essential: 'Le régime social dépend de la forme juridique.',
  keyPoints: ['SARL : gérant majoritaire TNS'],
  tips: [],
  legalRefs: [],
};

const question = (id: string, text: string): Question => ({
  id,
  moduleId: 'gestion',
  subModuleId: 'ges-1',
  text,
  options: [
    { letter: 'A', text: 'Bonne réponse' },
    { letter: 'B', text: 'Mauvaise réponse' },
    { letter: 'C', text: 'Autre' },
    { letter: 'D', text: 'Encore autre' },
  ],
  correctAnswer: 'A',
  explanation: 'Parce que.',
  reference: '',
  difficulty: 'moyen',
});

beforeEach(() => localStorage.clear());

describe('FicheQuiz', () => {
  it("est absent quand la banque de questions n'est pas disponible", () => {
    const { container } = render(<FicheQuiz card={card} moduleQuestions={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('déroule un mini-quiz complet et affiche le score', () => {
    const bank = [
      question('q1', 'Question un ?'),
      question('q2', 'Question deux ?'),
      question('q3', 'Question trois ?'),
    ];
    render(<FicheQuiz card={card} moduleQuestions={bank} />);

    fireEvent.click(screen.getByText('Lancer'));
    expect(screen.getByText('Question 1/3')).toBeTruthy();

    // Trois bonnes réponses d'affilée
    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getAllByText('Bonne réponse')[0]);
      fireEvent.click(screen.getByText('Valider'));
      fireEvent.click(screen.getByText(i < 2 ? 'Question suivante' : 'Voir mon score'));
    }

    expect(screen.getByText('3/3')).toBeTruthy();
    expect(screen.getByText(/bien ancrée/)).toBeTruthy();
  });

  it('programme une erreur en révision espacée', () => {
    render(<FicheQuiz card={card} moduleQuestions={[question('q-ratee', 'Question ?')]} />);

    fireEvent.click(screen.getByText('Lancer'));
    fireEvent.click(screen.getAllByText('Mauvaise réponse')[0]);
    fireEvent.click(screen.getByText('Valider'));

    const srs = JSON.parse(localStorage.getItem('quiz-t3p-srs') ?? '{}');
    expect(srs['q-ratee']).toBeTruthy();
    expect(srs['q-ratee'].stage).toBe(0);
  });
});

describe('splitFigures', () => {
  it('met en valeur les vrais chiffres avec leur unité', () => {
    const highlighted = splitFigures('environ 45% de cotisations et 99 ans')
      .filter((s) => s.highlight)
      .map((s) => s.text);
    expect(highlighted).toEqual(['45%', '99 ans']);
  });

  it('laisse tranquilles les codes où le chiffre est collé aux lettres', () => {
    for (const code of ['le T3P officiel', 'code 49.32Z', 'article L3124-4']) {
      const highlighted = splitFigures(code).filter((s) => s.highlight);
      expect(highlighted).toEqual([]);
    }
  });

  it('reconstitue le texte à l\'identique', () => {
    const original = 'EI protégée depuis 2022, ~45% de cotisations, code APE 49.32Z.';
    const rebuilt = splitFigures(original).map((s) => s.text).join('');
    expect(rebuilt).toBe(original);
  });
});
