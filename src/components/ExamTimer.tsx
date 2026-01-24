import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface ExamTimerProps {
  totalSeconds: number;
  onTimeUp: () => void;
  isPaused?: boolean;
}

const ExamTimer = ({ totalSeconds, onTimeUp, isPaused = false }: ExamTimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    if (isPaused) return;
    
    if (secondsLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, isPaused, onTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progress = (secondsLeft / totalSeconds) * 100;
  const isWarning = secondsLeft <= 300; // 5 minutes warning
  const isCritical = secondsLeft <= 60; // 1 minute critical

  return (
    <div className={`flex items-center gap-3 rounded-lg px-4 py-2 font-mono text-lg font-bold transition-colors ${
      isCritical 
        ? 'bg-destructive/20 text-destructive animate-pulse' 
        : isWarning 
          ? 'bg-warning/20 text-warning' 
          : 'bg-secondary text-foreground'
    }`}>
      {isCritical ? (
        <AlertTriangle className="h-5 w-5" />
      ) : (
        <Clock className="h-5 w-5" />
      )}
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <div className="hidden sm:block w-24 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${
            isCritical ? 'bg-destructive' : isWarning ? 'bg-warning' : 'bg-primary'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ExamTimer;
