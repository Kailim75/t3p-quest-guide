import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Header from '@/components/Header';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResults from '@/components/QuizResults';
import { getModuleById, getQuestionsByModule, Question, AnswerLetter } from '@/data/quizData';

interface Answer {
  questionId: string;
  answers: AnswerLetter[];
  isCorrect: boolean;
}

const Quiz = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  
  const module = getModuleById(moduleId || '');
  const allQuestions = getQuestionsByModule(moduleId || '');
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    // Shuffle questions for variety
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setStartTime(Date.now());
  }, [moduleId]);

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
    setAnswers(prev => [
      ...prev.filter(a => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, answers: selectedAnswers, isCorrect }
    ]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowResult(false);
    } else {
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
    if (window.confirm('Êtes-vous sûr de vouloir quitter le quiz ? Votre progression sera perdue.')) {
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

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Quiz Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">{module.icon}</span>
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
              Sélectionnez une réponse
            </span>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
