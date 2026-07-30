import { useMemo, useRef, useState } from 'react';
import { Target, Check, X, ChevronRight, RotateCcw } from 'lucide-react';
import {
  AnswerLetter,
  Question,
  isAnswerCorrect,
  parseCorrectAnswers,
} from '@/data/quizData';
import { matchQuestionsToFiche } from '@/lib/ficheQuizMatch';
import { recordAnswer } from '@/lib/spacedRepetition';
import type { RevisionCard } from '@/data/revisionData';

interface FicheQuizProps {
  card: RevisionCard;
  /** Questions du module de la fiche (banque officielle). */
  moduleQuestions: Question[];
}

/**
 * « Vérifiez que c'est acquis » : 3 vraies questions d'examen en fin de
 * fiche. La lecture devient un aller-retour lire ↔ se tester, et chaque
 * erreur rejoint la révision espacée — la fiche travaille pour le jour J.
 */
const FicheQuiz = ({ card, moduleQuestions }: FicheQuizProps) => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<AnswerLetter[]>([]);
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(0);
  // Tirage stable pour toute la session de lecture de la fiche.
  const drawRef = useRef<Question[] | null>(null);

  const questions = useMemo(() => {
    if (!drawRef.current && moduleQuestions.length > 0) {
      drawRef.current = matchQuestionsToFiche(card, moduleQuestions, 3);
    }
    return drawRef.current ?? [];
  }, [card, moduleQuestions]);

  if (questions.length === 0) return null;

  const question = questions[current];
  const finished = current >= questions.length;

  const toggle = (letter: AnswerLetter) => {
    if (validated) return;
    setSelected((prev) =>
      prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
    );
  };

  const validate = () => {
    if (selected.length === 0) return;
    const correct = isAnswerCorrect(selected, question.correctAnswer);
    if (correct) setScore((s) => s + 1);
    recordAnswer(question.id, correct);
    setValidated(true);
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setSelected([]);
    setValidated(false);
  };

  const restart = () => {
    drawRef.current = null;
    setStarted(false);
    setCurrent(0);
    setSelected([]);
    setValidated(false);
    setScore(0);
  };

  if (!started) {
    return (
      <div className="flex items-center gap-3 rounded-xl border-2 border-cta/30 bg-cta/5 p-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta/15">
          <Target className="h-6 w-6 text-cta" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground text-sm">Vérifiez que c'est acquis</p>
          <p className="text-xs text-muted-foreground">
            {questions.length} question{questions.length > 1 ? 's' : ''} d'examen sur ce thème —
            vos erreurs reviendront en révision.
          </p>
        </div>
        <button onClick={() => setStarted(true)} className="btn-cta shrink-0 !px-4 !py-2 text-sm">
          Lancer
        </button>
      </div>
    );
  }

  if (finished) {
    const allGood = score === questions.length;
    return (
      <div className="rounded-xl border-2 border-cta/30 bg-cta/5 p-4 text-center space-y-2">
        <p className="text-2xl font-bold text-foreground">
          {score}/{questions.length}
        </p>
        <p className="text-sm text-muted-foreground">
          {allGood
            ? 'Sans faute — cette fiche est bien ancrée.'
            : 'Vos erreurs sont programmées en révision : elles reviendront au bon moment.'}
        </p>
        <button
          onClick={restart}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline underline-offset-2 hover:text-primary/80"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Refaire un tirage
        </button>
      </div>
    );
  }

  const correctLetters = parseCorrectAnswers(question.correctAnswer);

  return (
    <div className="rounded-xl border-2 border-cta/30 bg-card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-cta">
          Question {current + 1}/{questions.length}
        </span>
        <span className="text-xs text-muted-foreground">1 ou 2 bonnes réponses</span>
      </div>

      <p className="text-sm font-medium text-foreground">{question.text}</p>

      <div className="space-y-2">
        {question.options.map((option) => {
          const isSelected = selected.includes(option.letter);
          const isCorrect = correctLetters.includes(option.letter);
          const tone = !validated
            ? isSelected
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/40'
            : isCorrect
              ? 'border-success bg-success/10'
              : isSelected
                ? 'border-destructive bg-destructive/10'
                : 'border-border opacity-60';

          return (
            <button
              key={option.letter}
              onClick={() => toggle(option.letter)}
              disabled={validated}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${tone}`}
            >
              <span className="mr-2 font-bold">{option.letter}.</span>
              {option.text}
              {validated && isCorrect && (
                <Check className="ml-1.5 inline h-4 w-4 align-[-2px] text-success" />
              )}
              {validated && isSelected && !isCorrect && (
                <X className="ml-1.5 inline h-4 w-4 align-[-2px] text-destructive" />
              )}
            </button>
          );
        })}
      </div>

      {!validated ? (
        <button
          onClick={validate}
          disabled={selected.length === 0}
          className="btn-cta w-full justify-center disabled:opacity-50"
        >
          Valider
        </button>
      ) : (
        <>
          {question.explanation && (
            <p className="rounded-lg bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
              {question.explanation}
            </p>
          )}
          <button onClick={next} className="btn-cta w-full justify-center">
            {current + 1 < questions.length ? 'Question suivante' : 'Voir mon score'}
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default FicheQuiz;
