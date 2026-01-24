import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import Header from '@/components/Header';
import ExamTimer from '@/components/ExamTimer';
import ExamResults from '@/components/ExamResults';
import { getQuestionsByModule, Question } from '@/data/quizData';

interface ExamConfig {
  id: string;
  name: string;
  duration: number;
  questionCount: number;
  passingScore: number;
  modules: string[];
  icon: string;
}

const examConfigs: Record<string, ExamConfig> = {
  'admissibilite': {
    id: 'admissibilite',
    name: 'Épreuve d\'admissibilité',
    duration: 90 * 60, // 90 minutes in seconds
    questionCount: 50,
    passingScore: 70,
    modules: ['reglementation', 'securite', 'gestion', 'francais', 'anglais'],
    icon: '📝'
  },
  'admission-taxi': {
    id: 'admission-taxi',
    name: 'Épreuve d\'admission Taxi',
    duration: 30 * 60,
    questionCount: 20,
    passingScore: 70,
    modules: ['taxi'],
    icon: '🚕'
  },
  'admission-vtc': {
    id: 'admission-vtc',
    name: 'Épreuve d\'admission VTC',
    duration: 30 * 60,
    questionCount: 20,
    passingScore: 70,
    modules: ['vtc'],
    icon: '🚗'
  },
  'admission-vmdtr': {
    id: 'admission-vmdtr',
    name: 'Épreuve d\'admission VMDTR',
    duration: 30 * 60,
    questionCount: 20,
    passingScore: 70,
    modules: ['vmdtr'],
    icon: '🏍️'
  }
};

interface Answer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
}

const Exam = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  
  const config = examConfigs[examId || ''];
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [examComplete, setExamComplete] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [startTime, setStartTime] = useState<number>(0);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  useEffect(() => {
    if (!config) return;
    
    // Gather questions from all modules
    let allQuestions: Question[] = [];
    config.modules.forEach(moduleId => {
      const moduleQuestions = getQuestionsByModule(moduleId);
      allQuestions = [...allQuestions, ...moduleQuestions];
    });
    
    // Shuffle and take required number
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, config.questionCount));
  }, [config]);

  const handleStartExam = () => {
    setExamStarted(true);
    setStartTime(Date.now());
  };

  const handleTimeUp = useCallback(() => {
    setTimeTaken(config?.duration || 0);
    setExamComplete(true);
  }, [config]);

  const handleFinishExam = () => {
    if (window.confirm('Êtes-vous sûr de vouloir terminer l\'examen ? Vous ne pourrez plus modifier vos réponses.')) {
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
      setExamComplete(true);
    }
  };

  const handleQuit = () => {
    if (window.confirm('Êtes-vous sûr de vouloir abandonner l\'examen ? Votre progression sera perdue.')) {
      navigate('/exam');
    }
  };

  const handleSelectAnswer = (letter: 'A' | 'B' | 'C' | 'D') => {
    const question = questions[currentIndex];
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== question.id);
      return [...filtered, {
        questionId: question.id,
        answer: letter,
        isCorrect: letter === question.correctAnswer
      }];
    });
  };

  const toggleFlag = () => {
    const questionId = questions[currentIndex].id;
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  if (!config) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Examen non trouvé</h1>
          <button onClick={() => navigate('/exam')} className="btn-primary">
            Retour aux examens
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Pas assez de questions</h1>
          <p className="text-muted-foreground mb-6">
            Cet examen nécessite {config.questionCount} questions mais il n'y en a pas assez disponibles.
          </p>
          <button onClick={() => navigate('/exam')} className="btn-primary">
            Retour aux examens
          </button>
        </div>
      </div>
    );
  }

  if (examComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-3xl">
          <ExamResults
            examName={config.name}
            examIcon={config.icon}
            examId={config.id}
            questions={questions}
            answers={answers}
            passingScore={config.passingScore}
            timeTaken={timeTaken}
            totalTime={config.duration}
          />
        </main>
      </div>
    );
  }

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="text-center">
            <span className="text-6xl mb-6 block">{config.icon}</span>
            <h1 className="text-2xl font-bold text-foreground mb-2">{config.name}</h1>
            <p className="text-muted-foreground mb-8">
              Vous êtes sur le point de commencer l'examen blanc.
            </p>

            <div className="rounded-2xl bg-card border p-6 mb-8 text-left">
              <h2 className="font-semibold text-foreground mb-4">Rappel des conditions</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>{config.questionCount} questions</strong> à traiter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>{config.duration / 60} minutes</strong> de temps imparti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Seuil de réussite : <strong>{config.passingScore}%</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Vous pouvez naviguer entre les questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Les réponses ne sont pas affichées pendant l'examen</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/exam')} className="btn-secondary">
                Annuler
              </button>
              <button onClick={handleStartExam} className="btn-primary">
                Commencer l'examen
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const answeredCount = answers.length;
  const isFlagged = flaggedQuestions.has(currentQuestion.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Exam Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{config.icon}</span>
              <div className="hidden sm:block">
                <h1 className="text-sm font-semibold text-foreground">{config.name}</h1>
                <p className="text-xs text-muted-foreground">
                  {answeredCount}/{questions.length} répondu(s)
                </p>
              </div>
            </div>

            <ExamTimer 
              totalSeconds={config.duration} 
              onTimeUp={handleTimeUp}
            />

            <button 
              onClick={handleQuit}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="hidden sm:inline">Abandonner</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-[1fr_200px] gap-6">
          {/* Question Area */}
          <div>
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentIndex + 1} sur {questions.length}
              </span>
              <button
                onClick={toggleFlag}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isFlagged 
                    ? 'bg-warning/20 text-warning' 
                    : 'text-muted-foreground hover:bg-secondary'
                }`}
              >
                <Flag className="h-4 w-4" />
                {isFlagged ? 'Marquée' : 'Marquer'}
              </button>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {currentIndex + 1}
                </span>
                <h2 className="text-xl font-semibold text-foreground leading-relaxed">
                  {currentQuestion.text}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.letter}
                    onClick={() => handleSelectAnswer(option.letter)}
                    className={`quiz-option w-full text-left ${
                      currentAnswer?.answer === option.letter ? 'quiz-option-selected' : ''
                    }`}
                  >
                    <span className={`option-letter ${
                      currentAnswer?.answer === option.letter ? 'bg-accent text-accent-foreground' : ''
                    }`}>
                      {option.letter}
                    </span>
                    <span className="flex-1 font-medium">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => goToQuestion(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </button>

              {currentIndex === questions.length - 1 ? (
                <button onClick={handleFinishExam} className="btn-primary">
                  Terminer l'examen
                </button>
              ) : (
                <button
                  onClick={() => goToQuestion(currentIndex + 1)}
                  className="btn-primary"
                >
                  Suivant
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Question Navigator */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground mb-3">Navigation</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isAnswered = answers.some(a => a.questionId === q.id);
                  const isCurrent = idx === currentIndex;
                  const isQuestionFlagged = flaggedQuestions.has(q.id);
                  
                  return (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(idx)}
                      className={`relative w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                        isCurrent
                          ? 'bg-primary text-primary-foreground'
                          : isAnswered
                            ? 'bg-success/20 text-success'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {idx + 1}
                      {isQuestionFlagged && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-warning rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-success/20" />
                  <span>Répondu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-primary" />
                  <span>Actuel</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative w-4 h-4 rounded bg-secondary">
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-warning rounded-full" />
                  </span>
                  <span>Marqué</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Exam;
