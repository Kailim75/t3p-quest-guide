import type { ReactNode } from 'react';
import type { RevisionCard } from '@/data/revisionData';

/**
 * Habillage du texte des fiches de cours.
 *
 * Les chiffres sont ce qui rapporte des points à l'examen (45 %, 50 %,
 * 99 ans, 9 chiffres…) : on les fait ressortir du texte pour qu'ils
 * s'impriment visuellement, au lieu de rester noyés dans les phrases.
 */

const FIGURE_PATTERN =
  /\d+(?:[.,]\d+)?(?:\s?(?:%|€|km\/h|km|kW|cm³|ans?|chiffres?|jours?|mois|places?|points?|passagers?|min))?/g;

export interface TextSegment {
  text: string;
  highlight: boolean;
}

/**
 * Découpe un texte en segments, les nombres (et leur unité) marqués à part.
 * Un chiffre collé à des lettres (T3P, 49.32Z, L3124-4) reste du texte
 * ordinaire : c'est un code, pas une donnée à mémoriser.
 */
export const splitFigures = (text: string): TextSegment[] => {
  const segments: TextSegment[] = [];
  let last = 0;

  for (const match of text.matchAll(FIGURE_PATTERN)) {
    const start = match.index ?? 0;
    const end = start + match[0].length;
    const before = start > 0 ? text[start - 1] : '';
    const after = end < text.length ? text[end] : '';
    // Le tiret compte comme « collé » : L3124-4 est une référence d'article.
    if (/[A-Za-zÀ-ÿ0-9-]/.test(before) || /[A-Za-zÀ-ÿ0-9-]/.test(after)) continue;

    if (start > last) segments.push({ text: text.slice(last, start), highlight: false });
    segments.push({ text: match[0], highlight: true });
    last = end;
  }
  if (last < text.length) segments.push({ text: text.slice(last), highlight: false });

  return segments;
};

/** Met en valeur les nombres (et leur unité) d'un texte. */
export const HighlightFigures = ({ text }: { text: string }): ReactNode => (
  <>
    {splitFigures(text).map((segment, i) =>
      segment.highlight ? (
        <strong key={i} className="font-semibold text-foreground whitespace-nowrap">
          {segment.text}
        </strong>
      ) : (
        segment.text
      )
    )}
  </>
);

/**
 * Temps de lecture estimé d'une fiche, en minutes (150 mots/min : on lit
 * plus lentement un contenu technique qu'un roman).
 */
export const readingMinutes = (card: RevisionCard): number => {
  const text = [
    card.essential,
    card.narrative ?? '',
    ...card.keyPoints,
    card.fieldExample ?? '',
    ...(card.practicalCases ?? []).flatMap((c) => [c.situation, c.question, c.answer, c.reasoning]),
    card.examWarning ?? '',
    ...(card.confusionPoints ?? []),
    ...card.tips,
  ].join(' ');

  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 150));
};
