import { useState, useEffect } from 'react';
import { Check, X, AlertCircle, BookOpen, Lightbulb, GraduationCap, CheckSquare } from 'lucide-react';
import { Question, modules, AnswerLetter, parseCorrectAnswers, isAnswerCorrect, hasMultipleAnswers } from '@/data/quizData';
import { getQuestionExplanation, getDefaultModuleExplanation } from '@/data/questionExplanations';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answers: AnswerLetter[], isCorrect: boolean) => void;
  showResult: boolean;
}

// Récupère l'explication spécifique ou par défaut
const getCourseExplanation = (question: Question): { title: string; content: string; tip: string; legalRef?: string } => {
  const specificExplanation = getQuestionExplanation(question.id);
  const module = modules.find(m => m.id === question.moduleId);
  const moduleName = module?.name || 'Point de cours';
  
  if (specificExplanation) {
    return {
      title: moduleName,
      content: specificExplanation.content,
      tip: specificExplanation.tip,
      legalRef: specificExplanation.legalRef
    };
  }
  
  const defaultExplanation = getDefaultModuleExplanation(question.moduleId);
  return {
    title: moduleName,
    content: defaultExplanation.content,
    tip: defaultExplanation.tip,
    legalRef: defaultExplanation.legalRef
  };
};

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  showResult 
}: QuizQuestionProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerLetter[]>([]);
  const isMultiAnswer = hasMultipleAnswers(question.correctAnswer);
  const correctAnswers = parseCorrectAnswers(question.correctAnswer);
  const requiredAnswerCount = correctAnswers.length;

  // Reset selected answers when question changes
  useEffect(() => {
    if (!showResult) {
      setSelectedAnswers([]);
    }
  }, [question.id, showResult]);

  const handleSelect = (letter: AnswerLetter) => {
    if (showResult) return;

    if (isMultiAnswer) {
      // Multi-answer mode: toggle selection
      setSelectedAnswers(prev => {
        const newSelection = prev.includes(letter)
          ? prev.filter(a => a !== letter)
          : [...prev, letter];
        
        // Auto-validate when correct number of answers selected
        if (newSelection.length === requiredAnswerCount) {
          const correct = isAnswerCorrect(newSelection, question.correctAnswer);
          // Delay to allow UI update
          setTimeout(() => onAnswer(newSelection, correct), 100);
        }
        return newSelection;
      });
    } else {
      // Single answer mode: immediate validation
      setSelectedAnswers([letter]);
      onAnswer([letter], correctAnswers.includes(letter));
    }
  };

  const getOptionClass = (letter: AnswerLetter) => {
    const isSelected = selectedAnswers.includes(letter);
    const isCorrectAnswer = correctAnswers.includes(letter);
    
    if (!showResult) {
      return isSelected ? 'quiz-option-selected' : '';
    }
    
    if (isCorrectAnswer) {
      return 'quiz-option-correct';
    }
    
    if (isSelected && !isCorrectAnswer) {
      return 'quiz-option-incorrect';
    }
    
    return 'opacity-50';
  };

  const getOptionIcon = (letter: AnswerLetter) => {
    const isSelected = selectedAnswers.includes(letter);
    const isCorrectAnswer = correctAnswers.includes(letter);
    
    if (!showResult) return null;
    
    if (isCorrectAnswer) {
      return <Check className="h-5 w-5 text-success" />;
    }
    
    if (isSelected && !isCorrectAnswer) {
      return <X className="h-5 w-5 text-destructive" />;
    }
    
    return null;
  };

  const userIsCorrect = isAnswerCorrect(selectedAnswers, question.correctAnswer);
  const courseInfo = getCourseExplanation(question);
  const correctOptionTexts = question.options
    .filter(opt => correctAnswers.includes(opt.letter))
    .map(opt => `${opt.letter}. ${opt.text}`)
    .join(' et ');

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} sur {totalQuestions}
          </span>
          <span className="text-sm font-medium text-cta">
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
        
        {/* Multi-answer indicator */}
        {isMultiAnswer && !showResult && (
          <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-4">
            <CheckSquare className="h-4 w-4" />
            <span className="font-medium">
              Sélectionnez {requiredAnswerCount} réponses 
              {selectedAnswers.length > 0 && (
                <span className="ml-1">({selectedAnswers.length}/{requiredAnswerCount} sélectionnées)</span>
              )}
            </span>
          </div>
        )}
        
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
              showResult && correctAnswers.includes(option.letter)
                ? 'bg-success text-success-foreground'
                : showResult && selectedAnswers.includes(option.letter) && !correctAnswers.includes(option.letter)
                  ? 'bg-destructive text-destructive-foreground'
                  : selectedAnswers.includes(option.letter)
                    ? 'bg-primary text-primary-foreground'
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
            userIsCorrect
              ? 'border-success/30 bg-success/10 animate-scale-in'
              : 'border-destructive/30 bg-destructive/10 animate-shake'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              {userIsCorrect ? (
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
                      {isMultiAnswer ? (
                        <>Les bonnes réponses étaient : <strong className="text-foreground">{correctOptionTexts}</strong></>
                      ) : (
                        <>La bonne réponse était : <strong className="text-foreground">{correctOptionTexts}</strong></>
                      )}
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
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t text-xs text-muted-foreground">
                <span className="rounded bg-muted px-2 py-1">📖 {question.reference}</span>
                {courseInfo.legalRef && (
                  <span className="rounded bg-primary/10 text-primary px-2 py-1 font-medium">
                    ⚖️ {courseInfo.legalRef}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;