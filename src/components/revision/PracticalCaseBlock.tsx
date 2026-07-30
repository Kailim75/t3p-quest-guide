import { useState } from 'react';
import { Eye, ThumbsUp, RotateCcw } from 'lucide-react';
import type { PracticalCase } from '@/data/revisionData';

interface PracticalCaseBlockProps {
  practicalCase: PracticalCase;
  index: number;
  /** L'élève s'est auto-évalué « à revoir » sur ce cas. */
  onNeedsReview: () => void;
}

/**
 * Cas pratique en deux temps : l'élève lit la situation et répond dans sa
 * tête AVANT de découvrir la réponse. C'est ce petit effort de rappel qui
 * ancre la règle — une réponse lue d'avance ne laisse presque rien.
 */
const PracticalCaseBlock = ({ practicalCase: pc, index, onNeedsReview }: PracticalCaseBlockProps) => {
  const [revealed, setRevealed] = useState(false);
  const [selfAssessed, setSelfAssessed] = useState<'ok' | 'ko' | null>(null);

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-4 space-y-3">
      <div>
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mr-2">
          {index + 1}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Situation
        </span>
        <p className="text-sm text-foreground mt-1.5">{pc.situation}</p>
      </div>

      <div className="border-l-2 border-primary/40 pl-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Question</span>
        <p className="text-sm font-medium text-foreground mt-1">{pc.question}</p>
      </div>

      {!revealed ? (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground italic">
            Répondez dans votre tête avant de vérifier — c'est là que ça s'ancre.
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="w-full rounded-lg border border-primary/30 bg-card py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            <Eye className="mr-1.5 inline h-4 w-4 align-[-2px]" />
            Voir la réponse
          </button>
        </div>
      ) : (
        <>
          <div className="rounded-lg bg-success/10 border border-success/20 p-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-success">
              Réponse
            </span>
            <p className="text-sm text-foreground mt-1">{pc.answer}</p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Raisonnement
            </span>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{pc.reasoning}</p>
          </div>

          {selfAssessed === null ? (
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setSelfAssessed('ok')}
                className="flex-1 rounded-lg border py-2 text-sm font-medium text-foreground transition-colors hover:border-success/50 hover:bg-success/5"
              >
                <ThumbsUp className="mr-1.5 inline h-4 w-4 align-[-2px] text-success" />
                J'avais bon
              </button>
              <button
                onClick={() => {
                  setSelfAssessed('ko');
                  onNeedsReview();
                }}
                className="flex-1 rounded-lg border py-2 text-sm font-medium text-foreground transition-colors hover:border-warning/50 hover:bg-warning/5"
              >
                <RotateCcw className="mr-1.5 inline h-4 w-4 align-[-2px] text-warning" />
                À revoir
              </button>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground pt-1">
              {selfAssessed === 'ok'
                ? 'Bien joué — le prochain cas vous attend.'
                : 'Noté : cette fiche est marquée « à revoir ».'}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default PracticalCaseBlock;
