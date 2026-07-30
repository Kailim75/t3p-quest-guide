import { BookOpen, Lightbulb, FileText, AlertTriangle, Car, Brain, ScrollText, ClipboardCheck, Star, X, CheckCircle2, RotateCcw } from 'lucide-react';
import { RevisionCard } from '@/data/revisionData';
import { Question } from '@/data/quizData';
import { HighlightFigures } from '@/lib/ficheText';
import { FicheStatus, setFicheStatus } from '@/lib/ficheProgress';
import PracticalCaseBlock from '@/components/revision/PracticalCaseBlock';
import FicheQuiz from '@/components/revision/FicheQuiz';

interface RevisionCardContentProps {
  card: RevisionCard;
  /** Questions de la banque officielle pour le mini-quiz de fin de fiche. */
  moduleQuestions: Question[];
  status: FicheStatus | null;
  onStatusChange: (status: FicheStatus) => void;
}

const RevisionCardContent = ({ card, moduleQuestions, status, onStatusChange }: RevisionCardContentProps) => {
  const markAs = (next: FicheStatus) => {
    setFicheStatus(card.id, next);
    onStatusChange(next);
  };

  return (
    <div className="space-y-5">
      {/* ⭐ L'essentiel à retenir */}
      <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
            <Star className="h-5 w-5 text-primary" />
          </span>
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">L'essentiel</h4>
            <p className="text-foreground font-medium text-[15px] leading-relaxed">
              <HighlightFigures text={card.essential} />
            </p>
          </div>
        </div>
      </div>

      {/* 🔢 Les chiffres qui rapportent des points */}
      {card.keyFigures && card.keyFigures.length > 0 && (
        <div
          className={`grid gap-2 ${card.keyFigures.length === 1 ? 'grid-cols-1' : card.keyFigures.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}
        >
          {card.keyFigures.map((figure, idx) => (
            <div key={idx} className="rounded-xl border bg-card p-3 text-center">
              <p className="text-lg font-bold leading-tight text-primary sm:text-xl">
                {figure.value}
              </p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                {figure.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 📖 Narratif pédagogique */}
      {card.narrative && (
        <div className="rounded-xl border bg-card/50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <ScrollText className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Comprendre la règle</h4>
          </div>
          <div className="prose prose-sm max-w-none text-foreground/90 leading-relaxed space-y-3">
            {card.narrative.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-sm">{para}</p>
            ))}
          </div>
        </div>
      )}

      {/* 📌 Points importants */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-primary" />
          <h4 className="font-semibold text-foreground text-sm">Points clés</h4>
        </div>
        <ul className="space-y-2">
          {card.keyPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary mt-0.5">
                {idx + 1}
              </span>
              <span className="text-muted-foreground">
                <HighlightFigures text={point} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🚕 Exemple terrain */}
      {card.fieldExample && (
        <div className="rounded-lg bg-secondary/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Car className="h-4 w-4 text-cta" />
            <h4 className="font-semibold text-foreground text-sm">Exemple terrain</h4>
          </div>
          <p className="text-sm text-muted-foreground italic">"{card.fieldExample}"</p>
        </div>
      )}

      {/* 📝 Cas pratiques résolus */}
      {card.practicalCases && card.practicalCases.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Cas pratiques type examen</h4>
          </div>
          {card.practicalCases.map((pc, idx) => (
            <PracticalCaseBlock
              key={idx}
              practicalCase={pc}
              index={idx}
              onNeedsReview={() => markAs('a-revoir')}
            />
          ))}
        </div>
      )}


      {/* ⚠️ Attention à l'examen */}
      {card.examWarning && (
        <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <h4 className="font-semibold text-destructive text-sm">Attention examen</h4>
          </div>
          <p className="text-sm text-foreground">{card.examWarning}</p>
        </div>
      )}

      {/* 🧠 À ne pas confondre */}
      {card.confusionPoints && card.confusionPoints.length > 0 && (
        <div className="rounded-lg bg-warning/10 border border-warning/20 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-4 w-4 text-warning" />
            <h4 className="font-semibold text-foreground text-sm">À ne pas confondre</h4>
          </div>
          <ul className="space-y-1">
            {card.confusionPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <X className="h-4 w-4 shrink-0 text-warning mt-0.5" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 💡 Astuces */}
      {card.tips.length > 0 && (
        <div className="rounded-lg bg-cta/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-4 w-4 text-cta" />
            <h4 className="font-semibold text-foreground text-sm">Astuces mémo</h4>
          </div>
          <ul className="space-y-1">
            {card.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Lightbulb className="h-4 w-4 shrink-0 text-cta mt-0.5" />
                <span className="text-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🎯 Mini-quiz : vérifier que c'est acquis */}
      <FicheQuiz card={card} moduleQuestions={moduleQuestions} />

      {/* ✅ Où en êtes-vous sur cette fiche ? */}
      <div className="rounded-xl border bg-secondary/40 p-4">
        <p className="text-sm font-semibold text-foreground mb-2.5">Où en êtes-vous ?</p>
        <div className="flex gap-2">
          <button
            onClick={() => markAs('maitrisee')}
            className={`flex-1 rounded-lg border py-2.5 text-sm font-medium transition-colors ${
              status === 'maitrisee'
                ? 'border-success bg-success/15 text-foreground'
                : 'bg-card text-foreground hover:border-success/50'
            }`}
          >
            <CheckCircle2 className="mr-1.5 inline h-4 w-4 align-[-2px] text-success" />
            Fiche maîtrisée
          </button>
          <button
            onClick={() => markAs('a-revoir')}
            className={`flex-1 rounded-lg border py-2.5 text-sm font-medium transition-colors ${
              status === 'a-revoir'
                ? 'border-warning bg-warning/15 text-foreground'
                : 'bg-card text-foreground hover:border-warning/50'
            }`}
          >
            <RotateCcw className="mr-1.5 inline h-4 w-4 align-[-2px] text-warning" />
            À revoir
          </button>
        </div>
      </div>

      {/* ⚖️ Références légales */}
      {card.legalRefs.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Réf. :</span>
          {card.legalRefs.map((ref, idx) => (
            <span key={idx} className="text-xs rounded-full bg-muted px-2.5 py-1">
              {ref}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RevisionCardContent;
