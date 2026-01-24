import { useState } from 'react';
import { Check, X, AlertCircle, BookOpen, Lightbulb, GraduationCap } from 'lucide-react';
import { Question, modules } from '@/data/quizData';
import { getQuestionExplanation, getDefaultModuleExplanation } from '@/data/questionExplanations';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => void;
  showResult: boolean;
}

// Récupère l'explication spécifique ou par défaut
const getCourseExplanation = (question: Question): { title: string; content: string; tip: string } => {
  const specificExplanation = getQuestionExplanation(question.id);
  const module = modules.find(m => m.id === question.moduleId);
  const moduleName = module?.name || 'Point de cours';
  
  if (specificExplanation) {
    return {
      title: moduleName,
      content: specificExplanation.content,
      tip: specificExplanation.tip
    };
  }
  
  const defaultExplanation = getDefaultModuleExplanation(question.moduleId);
  return {
    title: moduleName,
    content: defaultExplanation.content,
    tip: defaultExplanation.tip
  };
};

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  showResult 
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

  const handleSelect = (letter: 'A' | 'B' | 'C' | 'D') => {
    if (showResult) return;
    setSelectedAnswer(letter);
    onAnswer(letter, letter === question.correctAnswer);
  };

  const getOptionClass = (letter: 'A' | 'B' | 'C' | 'D') => {
    if (!showResult) {
      return selectedAnswer === letter ? 'quiz-option-selected' : '';
    }
    
    if (letter === question.correctAnswer) {
      return 'quiz-option-correct';
    }
    
    if (selectedAnswer === letter && letter !== question.correctAnswer) {
      return 'quiz-option-incorrect';
    }
    
    return 'opacity-50';
  };

  const getOptionIcon = (letter: 'A' | 'B' | 'C' | 'D') => {
    if (!showResult) return null;
    
    if (letter === question.correctAnswer) {
      return <Check className="h-5 w-5 text-success" />;
    }
    
    if (selectedAnswer === letter && letter !== question.correctAnswer) {
      return <X className="h-5 w-5 text-destructive" />;
    }
    
    return null;
  };

  const isCorrect = selectedAnswer === question.correctAnswer;
  const courseInfo = getCourseExplanation(question);
  const correctOption = question.options.find(opt => opt.letter === question.correctAnswer);

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} sur {totalQuestions}
          </span>
          <span className="text-sm font-medium text-accent">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {questionNumber}
          </span>
          <h2 className="text-xl font-semibold text-foreground leading-relaxed">
            {question.text}
          </h2>
        </div>
        
        {question.text.startsWith('[EXEMPLE]') && (
          <div className="flex items-center gap-2 rounded-lg bg-warning/10 px-4 py-2 text-sm text-warning">
            <AlertCircle className="h-4 w-4" />
            Question d'exemple - À remplacer par une question officielle
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.letter}
            onClick={() => handleSelect(option.letter)}
            disabled={showResult}
            className={`quiz-option w-full text-left ${getOptionClass(option.letter)}`}
          >
            <span className={`option-letter ${
              showResult && option.letter === question.correctAnswer
                ? 'bg-success text-success-foreground'
                : showResult && selectedAnswer === option.letter && option.letter !== question.correctAnswer
                  ? 'bg-destructive text-destructive-foreground'
                  : selectedAnswer === option.letter
                    ? 'bg-accent text-accent-foreground'
                    : ''
            }`}>
              {option.letter}
            </span>
            <span className="flex-1 font-medium">{option.text}</span>
            {getOptionIcon(option.letter)}
          </button>
        ))}
      </div>

      {/* Explication de cours détaillée (affichée après réponse) */}
      {showResult && (
        <div className="mt-6 space-y-4 animate-slide-up">
          {/* Résultat immédiat */}
          <div className={`rounded-xl border-2 p-4 ${
            isCorrect 
              ? 'border-success/30 bg-success/10' 
              : 'border-destructive/30 bg-destructive/10'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              {isCorrect ? (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success">
                    <Check className="h-5 w-5 text-success-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-success">Bonne réponse !</h4>
                    <p className="text-sm text-muted-foreground">Excellent, continuez ainsi.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive">
                    <X className="h-5 w-5 text-destructive-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-destructive">Réponse incorrecte</h4>
                    <p className="text-sm text-muted-foreground">
                      La bonne réponse était : <strong className="text-foreground">{question.correctAnswer}. {correctOption?.text}</strong>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Encadré de cours */}
          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-bold text-foreground">{courseInfo.title}</h4>
            </div>
            
            <div className="space-y-4">
              {/* Explication principale */}
              <div className="flex gap-3">
                <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {courseInfo.content}
                </p>
              </div>

              {/* Astuce mémorisation */}
              <div className="flex gap-3 rounded-lg bg-warning/10 p-3">
                <Lightbulb className="h-5 w-5 text-warning shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-warning uppercase tracking-wide">À retenir</span>
                  <p className="text-sm text-foreground mt-1">
                    {courseInfo.tip}
                  </p>
                </div>
              </div>

              {/* Référence officielle */}
              <div className="flex items-center gap-2 pt-2 border-t text-xs text-muted-foreground">
                <span className="rounded bg-muted px-2 py-1">📖 {question.reference}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;