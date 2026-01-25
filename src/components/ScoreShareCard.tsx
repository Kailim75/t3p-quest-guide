import ShareButton from './ShareButton';

interface ScoreShareCardProps {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  quizType: 'module' | 'exam';
  quizName: string;
  userName?: string;
}

const ScoreShareCard = ({ 
  score, 
  totalQuestions, 
  percentage, 
  passed, 
  quizType,
  quizName,
  userName 
}: ScoreShareCardProps) => {
  const emoji = passed ? '🎉' : '💪';
  const resultText = passed ? 'réussi' : 'terminé';
  const typeText = quizType === 'exam' ? "l'examen" : 'le quiz';
  
  const shareText = userName 
    ? `${emoji} ${userName} a ${resultText} ${typeText} "${quizName}" avec ${percentage}% (${score}/${totalQuestions}) sur T3P Quest Guide !`
    : `${emoji} J'ai ${resultText} ${typeText} "${quizName}" avec ${percentage}% (${score}/${totalQuestions}) sur T3P Quest Guide !`;

  return (
    <ShareButton
      title={`Résultat ${quizType === 'exam' ? 'examen' : 'quiz'} : ${percentage}%`}
      text={shareText}
    />
  );
};

export default ScoreShareCard;
