import { Link } from 'react-router-dom';
import { Trophy, Target, Clock, RotateCcw, Home, CheckCircle2, XCircle } from 'lucide-react';
import { Question } from '@/data/quizData';

interface QuizResultsProps {
  questions: Question[];
  answers: { questionId: string; answer: string; isCorrect: boolean }[];
  moduleName: string;
  moduleId: string;
  timeTaken?: number;
}

const QuizResults = ({ questions, answers, moduleName, moduleId, timeTaken }: QuizResultsProps) => {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 70;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex h-20 w-20 items-center justify-center rounded-full mb-4 ${
          passed ? 'bg-success/10' : 'bg-destructive/10'
        }`}>
          <Trophy className={`h-10 w-10 ${passed ? 'text-success' : 'text-destructive'}`} />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {passed ? 'Félicitations !' : 'Continuez vos efforts !'}
        </h1>
        <p className="text-muted-foreground">
          {passed 
            ? 'Vous avez réussi ce quiz avec succès.' 
            : 'Vous devez obtenir au moins 70% pour valider ce module.'
          }
        </p>
      </div>

      {/* Score Card */}
      <div className={`rounded-2xl border-2 p-6 mb-8 ${
        passed ? 'border-success/30 bg-success/5' : 'border-destructive/30 bg-destructive/5'
      }`}>
        <div className="text-center">
          <div className={`text-6xl font-bold mb-2 ${passed ? 'text-success' : 'text-destructive'}`}>
            {percentage}%
          </div>
          <p className="text-lg text-muted-foreground">
            {correctCount} réponses correctes sur {totalQuestions}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="stat-card">
          <CheckCircle2 className="h-6 w-6 text-success mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{correctCount}</div>
          <div className="text-xs text-muted-foreground">Correctes</div>
        </div>
        <div className="stat-card">
          <XCircle className="h-6 w-6 text-destructive mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{totalQuestions - correctCount}</div>
          <div className="text-xs text-muted-foreground">Incorrectes</div>
        </div>
        <div className="stat-card">
          <Target className="h-6 w-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">70%</div>
          <div className="text-xs text-muted-foreground">Seuil requis</div>
        </div>
      </div>

      {/* Questions Review */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Détail des réponses</h3>
        <div className="space-y-3">
          {questions.map((question, index) => {
            const answer = answers.find(a => a.questionId === question.id);
            const isCorrect = answer?.isCorrect ?? false;
            
            return (
              <div 
                key={question.id}
                className={`flex items-start gap-3 rounded-lg border p-4 ${
                  isCorrect ? 'border-success/30 bg-success/5' : 'border-destructive/30 bg-destructive/5'
                }`}
              >
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  isCorrect ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
                }`}>
                  {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground line-clamp-2">
                    {index + 1}. {question.text.replace('[EXEMPLE] ', '')}
                  </p>
                  {!isCorrect && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Bonne réponse : {question.correctAnswer}. {question.options.find(o => o.letter === question.correctAnswer)?.text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to={`/quiz/${moduleId}`} className="btn-primary flex-1 justify-center">
          <RotateCcw className="h-4 w-4" />
          Recommencer
        </Link>
        <Link to="/modules" className="btn-secondary flex-1 justify-center">
          <Home className="h-4 w-4" />
          Retour aux modules
        </Link>
      </div>
    </div>
  );
};

export default QuizResults;
