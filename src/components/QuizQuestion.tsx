import { useState } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import { Question } from '@/data/quizData';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => void;
  showResult: boolean;
}

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

      {/* Explanation (shown after answer) */}
      {showResult && (
        <div className="mt-6 animate-slide-up rounded-xl border bg-secondary/50 p-4">
          <h4 className="font-semibold text-foreground mb-2">Explication</h4>
          <p className="text-sm text-muted-foreground mb-3">{question.explanation}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded bg-muted px-2 py-1">📖 {question.reference}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
