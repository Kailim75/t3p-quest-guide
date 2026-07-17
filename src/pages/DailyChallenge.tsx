import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Zap, CheckCircle2, RotateCcw, Home, CalendarClock } from 'lucide-react';
import Header from '@/components/Header';
import QuizQuestion from '@/components/QuizQuestion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { useQuizQuestions } from '@/hooks/useQuizQuestions';
import { useQuizResults, QuizAnswer } from '@/hooks/useQuizResults';
import { useBadges } from '@/hooks/useBadges';
import { Question, AnswerLetter, getCommonModules, getSpecificModules } from '@/data/quizData';
import { specificModuleIdsFor, useTargetExam } from '@/lib/targetExam';
import {
  getDueQuestionIds,
  getTodayChallenge,
  markChallengeDone,
  recordAnswer,
  today,
} from '@/lib/spacedRepetition';

const CHALLENGE_SIZE = 5;

interface Answer {
  questionId: string;
  answers: AnswerLetter[];
  isCorrect: boolean;
}

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

/**
 * Défi du jour : 5 questions rapides, une fois par jour.
 * Les questions dont la révision espacée arrive à échéance passent en premier,
 * le reste est tiré au hasard dans le parcours de l'élève.
 */
const DailyChallenge = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { questions: allQuestions, isLoading } = useQuizQuestions();
  const { saveResultSecure } = useQuizResults();
  const { updateStreak } = useBadges();
  const [target] = useTargetExam();

  const [alreadyDone] = useState(() => getTodayChallenge());
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [complete, setComplete] = useState(false);
  const [startTime] = useState(() => Date.now());

  useEffect(() => {
    if (isLoading || allQuestions.length === 0 || alreadyDone) return;

    const specificIds = specificModuleIdsFor(target) ?? getSpecificModules().map(m => m.id);
    const allowed = new Set([...getCommonModules().map(m => m.id), ...specificIds]);
    const pool = allQuestions.filter(q => allowed.has(q.moduleId));

    const dueSet = new Set(getDueQuestionIds());
    const due = shuffle(pool.filter(q => dueSet.has(q.id)));
    const rest = shuffle(pool.filter(q => !dueSet.has(q.id)));

    setQuestions([...due, ...rest].slice(0, CHALLENGE_SIZE));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, allQuestions.length, target]);

  const finishChallenge = (finalAnswers: Answer[]) => {
    const score = finalAnswers.filter(a => a.isCorrect).length;
    markChallengeDone(score, questions.length);
    setComplete(true);

    // Alimente l'historique, la moyenne et la série de jours (best effort).
    if (user) {
      const serverAnswers: QuizAnswer[] = finalAnswers.map(a => ({
        questionId: a.questionId,
        answer: [...a.answers].sort().join(','),
      }));
      saveResultSecure.mutate(
        {
          quiz_type: 'module',
          quiz_id: `defi-${today()}`,
          answers: serverAnswers,
          question_ids: questions.map(q => q.id),
          time_spent: Math.floor((Date.now() - startTime) / 1000),
        },
        {
          onSuccess: () => {
            updateStreak.mutate();
          },
        }
      );
    }
  };

  // Déjà fait aujourd'hui
  if (alreadyDone && !complete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Défi du jour déjà relevé !</h1>
          <p className="text-muted-foreground mb-8">
            Score du jour : {alreadyDone.score}/{alreadyDone.total}. Revenez demain pour un
            nouveau défi — c'est la régularité qui fait progresser.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate('/revision-erreurs?mode=due')}>
              <CalendarClock className="h-4 w-4 mr-2" />
              Voir mes révisions du jour
            </Button>
            <Button onClick={() => navigate('/')}>
              <Home className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (isLoading || (!complete && questions.length === 0)) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        </main>
      </div>
    );
  }

  // Écran de fin
  if (complete) {
    const score = answers.filter(a => a.isCorrect).length;
    const perfect = score === questions.length;
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {perfect ? 'Sans faute, bravo !' : 'Défi terminé !'}
          </h1>
          <p className="text-4xl font-bold text-primary mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-muted-foreground mb-8">
            {perfect
              ? 'Revenez demain pour entretenir votre série.'
              : 'Les questions ratées reviendront automatiquement dans vos révisions (J+1, J+3, J+7).'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {!perfect && (
              <Button variant="outline" onClick={() => navigate('/revision-erreurs')}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Revoir mes erreurs
              </Button>
            )}
            <Button onClick={() => navigate('/')}>
              <Home className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedAnswers: AnswerLetter[], isCorrect: boolean) => {
    recordAnswer(currentQuestion.id, isCorrect);
    setAnswers(prev => [
      ...prev.filter(a => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, answers: selectedAnswers, isCorrect },
    ]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      finishChallenge(answers);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Zap className="h-5 w-5 text-primary" />
              Défi du jour
            </h1>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1}/{questions.length}
            </span>
          </div>
          <Progress value={((currentIndex + (showResult ? 1 : 0)) / questions.length) * 100} className="h-2" />
        </div>

        <QuizQuestion
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          showResult={showResult}
        />

        {showResult && (
          <div className="mt-8 flex justify-end">
            <Button onClick={handleNext}>
              {currentIndex < questions.length - 1 ? 'Question suivante' : 'Terminer le défi'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link to="/" className="underline underline-offset-2 hover:text-foreground">
            Quitter le défi
          </Link>
        </p>
      </main>
    </div>
  );
};

export default DailyChallenge;
