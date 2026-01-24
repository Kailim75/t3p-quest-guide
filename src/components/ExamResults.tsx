import { Link } from 'react-router-dom';
import { Trophy, XCircle, Clock, Target, CheckCircle2, X, RotateCcw, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { Question } from '@/data/quizData';
import { useState } from 'react';

interface Answer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
}

interface ExamResultsProps {
  examName: string;
  examIcon: string;
  questions: Question[];
  answers: Answer[];
  passingScore: number;
  timeTaken: number;
  totalTime: number;
}

const ExamResults = ({
  examName,
  examIcon,
  questions,
  answers,
  passingScore,
  timeTaken,
  totalTime
}: ExamResultsProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const correctCount = answers.filter(a => a.isCorrect).length;
  const score = Math.round((correctCount / questions.length) * 100);
  const passed = score >= passingScore;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const unansweredCount = questions.length - answers.length;

  return (
    <div className="animate-fade-in">
      {/* Result Header */}
      <div className={`text-center p-8 rounded-2xl mb-8 ${
        passed 
          ? 'bg-gradient-to-br from-success/20 to-success/5 border border-success/30' 
          : 'bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/30'
      }`}>
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
          passed ? 'bg-success/20' : 'bg-destructive/20'
        }`}>
          {passed ? (
            <Trophy className="h-10 w-10 text-success" />
          ) : (
            <XCircle className="h-10 w-10 text-destructive" />
          )}
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {passed ? 'Félicitations !' : 'Examen non validé'}
        </h1>
        
        <p className="text-muted-foreground mb-4">
          {passed 
            ? 'Vous avez réussi cet examen blanc !' 
            : `Vous n'avez pas atteint le seuil de ${passingScore}% requis.`
          }
        </p>

        <div className="flex items-center justify-center gap-2 text-lg">
          <span className="text-3xl">{examIcon}</span>
          <span className="font-semibold text-foreground">{examName}</span>
        </div>
      </div>

      {/* Score */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl bg-card border p-6 text-center">
          <div className={`text-5xl font-bold mb-2 ${
            passed ? 'text-success' : 'text-destructive'
          }`}>
            {score}%
          </div>
          <p className="text-muted-foreground">Score obtenu</p>
          <p className="text-sm text-muted-foreground mt-1">
            {correctCount}/{questions.length} bonnes réponses
          </p>
        </div>

        <div className="rounded-xl bg-card border p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="h-4 w-4" />
                <span className="text-sm">Seuil de réussite</span>
              </div>
              <span className="font-semibold text-foreground">{passingScore}%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Temps utilisé</span>
              </div>
              <span className="font-semibold text-foreground">{formatTime(timeTaken)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-sm">Bonnes réponses</span>
              </div>
              <span className="font-semibold text-success">{correctCount}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <X className="h-4 w-4 text-destructive" />
                <span className="text-sm">Mauvaises réponses</span>
              </div>
              <span className="font-semibold text-destructive">{answers.length - correctCount}</span>
            </div>

            {unansweredCount > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-4 h-4 rounded border-2 border-muted-foreground" />
                  <span className="text-sm">Sans réponse</span>
                </div>
                <span className="font-semibold text-warning">{unansweredCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Details Toggle */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors mb-6"
      >
        {showDetails ? (
          <>
            <ChevronUp className="h-4 w-4" />
            Masquer le détail des réponses
          </>
        ) : (
          <>
            <ChevronDown className="h-4 w-4" />
            Voir le détail des réponses
          </>
        )}
      </button>

      {/* Detailed Results */}
      {showDetails && (
        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-foreground">Détail des réponses</h3>
          
          {questions.map((question, index) => {
            const answer = answers.find(a => a.questionId === question.id);
            const isCorrect = answer?.isCorrect;
            const wasAnswered = !!answer;
            
            return (
              <div 
                key={question.id}
                className={`rounded-xl border p-4 ${
                  !wasAnswered 
                    ? 'bg-warning/5 border-warning/30'
                    : isCorrect 
                      ? 'bg-success/5 border-success/30' 
                      : 'bg-destructive/5 border-destructive/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-bold ${
                    !wasAnswered
                      ? 'bg-warning/20 text-warning'
                      : isCorrect 
                        ? 'bg-success/20 text-success' 
                        : 'bg-destructive/20 text-destructive'
                  }`}>
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm mb-2">{question.text}</p>
                    
                    <div className="text-sm space-y-1">
                      {wasAnswered && !isCorrect && (
                        <p className="text-destructive">
                          Votre réponse : {answer.answer}. {question.options.find(o => o.letter === answer.answer)?.text}
                        </p>
                      )}
                      {!wasAnswered && (
                        <p className="text-warning">Non répondu</p>
                      )}
                      <p className="text-success">
                        Bonne réponse : {question.correctAnswer}. {question.options.find(o => o.letter === question.correctAnswer)?.text}
                      </p>
                    </div>

                    {question.explanation && (
                      <div className="mt-2 p-2 rounded bg-secondary/50 text-xs text-muted-foreground">
                        {question.explanation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/exam" className="btn-secondary flex-1 justify-center">
          <RotateCcw className="h-4 w-4" />
          Refaire un examen
        </Link>
        <Link to="/" className="btn-primary flex-1 justify-center">
          <Home className="h-4 w-4" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default ExamResults;
