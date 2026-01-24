import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, AlertCircle, RotateCcw, CheckCircle2, Target } from 'lucide-react';
import Header from '@/components/Header';
import QuizQuestion from '@/components/QuizQuestion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { useQuizResults } from '@/hooks/useQuizResults';
import { getQuestionsByIds, Question } from '@/data/quizData';

interface Answer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
}

const ErrorRevision = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { stats, isLoading: resultsLoading } = useQuizResults();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [startTime] = useState<number>(Date.now());

  useEffect(() => {
    if (stats.failedQuestions.length > 0) {
      const failedQuestions = getQuestionsByIds(stats.failedQuestions);
      // Shuffle for variety
      const shuffled = [...failedQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
    }
  }, [stats.failedQuestions]);

  if (authLoading || resultsLoading) {
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

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Connexion requise
            </h1>
            <p className="text-muted-foreground mb-6">
              Connectez-vous pour accéder à la révision de vos erreurs.
            </p>
            <Button onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Aucune erreur à réviser !
            </h1>
            <p className="text-muted-foreground mb-6">
              Vous n'avez pas encore de questions ratées. Continuez vos quiz pour en accumuler.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/progress')}>
                Ma progression
              </Button>
              <Button onClick={() => navigate('/modules')}>
                Continuer les quiz
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
    setAnswers(prev => [
      ...prev.filter(a => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, answer, isCorrect }
    ]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      setSessionComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowResult(true);
    }
  };

  const handleQuit = () => {
    if (window.confirm('Êtes-vous sûr de vouloir quitter ? Votre progression sera perdue.')) {
      navigate('/progress');
    }
  };

  const handleRestart = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers([]);
    setShowResult(false);
    setSessionComplete(false);
  };

  // Session complete view
  if (sessionComplete) {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctCount / questions.length) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    const stillFailed = answers.filter(a => !a.isCorrect).length;

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="h-10 w-10" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Révision terminée !
            </h1>
            <p className="text-muted-foreground">
              Vous avez revu {questions.length} question{questions.length > 1 ? 's' : ''} ratée{questions.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className={`text-3xl font-bold ${percentage >= 70 ? 'text-green-500' : 'text-destructive'}`}>
                  {correctCount}/{questions.length}
                </p>
                <p className="text-sm text-muted-foreground">Bonnes réponses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {minutes}:{seconds.toString().padStart(2, '0')}
                </p>
                <p className="text-sm text-muted-foreground">Temps passé</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Score</span>
                <span className={`text-sm font-bold ${percentage >= 70 ? 'text-green-500' : 'text-destructive'}`}>
                  {percentage}%
                </span>
              </div>
              <Progress value={percentage} className="h-3" />
              
              {stillFailed > 0 ? (
                <p className="text-sm text-muted-foreground mt-3">
                  📚 Il reste {stillFailed} question{stillFailed > 1 ? 's' : ''} à maîtriser. Continuez à réviser !
                </p>
              ) : (
                <p className="text-sm text-green-600 mt-3">
                  🎉 Excellent ! Vous avez corrigé toutes vos erreurs !
                </p>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/progress')}
            >
              Voir ma progression
            </Button>
            <Button 
              className="flex-1"
              onClick={handleRestart}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Quiz Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔄</span>
              <div className="hidden sm:block">
                <h1 className="text-sm font-semibold text-foreground">Révision des erreurs</h1>
                <p className="text-xs text-muted-foreground">
                  {questions.length} question{questions.length > 1 ? 's' : ''} à revoir
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <Progress value={progressPercent} className="w-32 h-2" />
                <span className="text-xs text-muted-foreground">
                  {currentIndex + 1}/{questions.length}
                </span>
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

export default ErrorRevision;
