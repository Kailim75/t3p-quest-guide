import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, PlayCircle, RotateCcw, X } from 'lucide-react';
import { ModuleIcon } from '@/lib/moduleIcons';
import { recordAnswer } from '@/lib/spacedRepetition';
import Header from '@/components/Header';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResults from '@/components/QuizResults';
import { getModuleById, Question, AnswerLetter } from '@/data/quizData';
import { useQuizQuestions } from '@/hooks/useQuizQuestions';
import { loadQuizSession, saveQuizSession, clearQuizSession } from '@/lib/quizSession';

interface Answer {
  questionId: string;
  answers: AnswerLetter[];
  isCorrect: boolean;
}

const Quiz = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();

  const module = getModuleById(moduleId || '');
  const { getByModule, isLoading } = useQuizQuestions();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  // Session interrompue retrouvée, en attente du choix Reprendre / Recommencer
  const [resumePrompt, setResumePrompt] = useState<{ index: number; answers: Answer[] } | null>(null);

  useEffect(() => {
    // On attend la réponse de la base avant de mélanger, pour ne pas
    // redistribuer les questions en cours de session
    if (isLoading) return;

    const pool = getByModule(moduleId || '');

    // Une session interrompue sur ce module ? On restaure l'ordre exact des questions.
    const saved = loadQuizSession();
    if (saved && saved.moduleId === moduleId && saved.currentIndex < saved.questionIds.length) {
      const restored = saved.questionIds
        .map(id => pool.find(q => q.id === id))
        .filter((q): q is Question => !!q);
      if (restored.length === saved.questionIds.length) {
        setQuestions(restored);
        setResumePrompt({ index: saved.currentIndex, answers: saved.answers });
        return;
      }
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setStartTime(Date.now());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId, isLoading]);

  const persistSession = (index: number, currentAnswers: Answer[]) => {
    if (!module) return;
    saveQuizSession({
      moduleId: module.id,
      moduleName: module.name,
      questionIds: questions.map(q => q.id),
      currentIndex: index,
      answers: currentAnswers,
    });
  };

  const handleResume = () => {
    if (!resumePrompt) return;
    setCurrentIndex(resumePrompt.index);
    setAnswers(resumePrompt.answers);
    setShowResult(resumePrompt.answers.some(a => a.questionId === questions[resumePrompt.index]?.id));
    setStartTime(Date.now());
    setResumePrompt(null);
  };

  const handleRestart = () => {
    clearQuizSession();
    const shuffled = [...getByModule(moduleId || '')].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers([]);
    setShowResult(false);
    setStartTime(Date.now());
    setResumePrompt(null);
  };

  // Spinner tant que la base répond ou que le mélange n'a pas encore eu lieu
  const shufflePending = !!module && questions.length === 0 && getByModule(module.id).length > 0;
  if (isLoading || shufflePending) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Choix Reprendre / Recommencer
  if (resumePrompt && module) {
    const answered = resumePrompt.answers.length;
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-lg text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <ModuleIcon moduleId={module.id} className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Quiz en cours retrouvé</h1>
          <p className="text-muted-foreground mb-8">
            {module.name} — vous vous étiez arrêté à la question {resumePrompt.index + 1} sur {questions.length}
            {' '}({answered} réponse{answered > 1 ? 's' : ''} déjà donnée{answered > 1 ? 's' : ''}).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleResume} className="btn-cta">
              <PlayCircle className="h-4 w-4" />
              Reprendre où j'en étais
            </button>
            <button onClick={handleRestart} className="btn-outline">
              <RotateCcw className="h-4 w-4" />
              Recommencer à zéro
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (!module || questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {!module ? 'Module non trouvé' : 'Aucune question disponible'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {!module
              ? 'Ce module n\'existe pas.'
              : 'Ce module ne contient pas encore de questions.'
            }
          </p>
          <Link to="/modules" className="btn-primary">
            Retour aux modules
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedAnswers: AnswerLetter[], isCorrect: boolean) => {
    recordAnswer(currentQuestion.id, isCorrect);
    const newAnswers = [
      ...answers.filter(a => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, answers: selectedAnswers, isCorrect }
    ];
    setAnswers(newAnswers);
    setShowResult(true);
    persistSession(currentIndex, newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      setShowResult(false);
      persistSession(next, answers);
    } else {
      clearQuizSession();
      setQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowResult(true);
    }
  };

  const handleQuit = () => {
    if (window.confirm('Votre progression est enregistrée : vous pourrez reprendre ce quiz là où vous en êtes. Quitter ?')) {
      navigate(`/module/${moduleId}`);
    }
  };

  const timeTaken = Math.floor((Date.now() - startTime) / 1000);

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <QuizResults
            questions={questions}
            answers={answers}
            moduleName={module.name}
            moduleId={module.id}
            timeTaken={timeTaken}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Quiz Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <ModuleIcon moduleId={module.id} className="h-5 w-5 text-primary" />
              <div className="hidden sm:block">
                <h1 className="text-sm font-semibold text-foreground">{module.name}</h1>
                <p className="text-xs text-muted-foreground">Mode entraînement</p>
              </div>
            </div>

            <button
              onClick={handleQuit}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="hidden sm:inline">Quitter</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <QuizQuestion
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          showResult={showResult}
        />

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            Précédent
          </button>

          {showResult ? (
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  Suivant
                  <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                'Voir les résultats'
              )}
            </button>
          ) : (
            <span className="text-sm text-muted-foreground">
              Sélectionnez puis validez votre réponse
            </span>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
