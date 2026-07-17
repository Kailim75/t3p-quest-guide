import { RevisionCard, RevisionModule } from '@/data/revisionData';

export interface FicheSearchResult {
  module: RevisionModule;
  card: RevisionCard;
  /** Extrait du passage où le premier terme apparaît. */
  snippet: string;
}

/** Classes de caractères pour une recherche insensible aux accents. */
const ACCENT_CLASSES: Record<string, string> = {
  a: '[aàâä]',
  c: '[cç]',
  e: '[eéèêë]',
  i: '[iîï]',
  o: '[oôö]',
  u: '[uùûü]',
  y: '[yÿ]',
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Regex insensible à la casse et aux accents pour un terme donné. */
export const accentInsensitiveRegex = (term: string): RegExp => {
  const pattern = [...term.normalize('NFD').replace(/\p{Diacritic}/gu, '')]
    .map((ch) => ACCENT_CLASSES[ch.toLowerCase()] ?? escapeRegex(ch))
    .join('');
  return new RegExp(pattern, 'gi');
};

/** Termes de recherche exploitables (2 caractères minimum). */
export const searchTerms = (query: string): string[] =>
  query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length >= 2);

const cardHaystack = (card: RevisionCard): string =>
  [
    card.title,
    card.essential,
    card.narrative ?? '',
    card.keyPoints.join(' '),
    card.examWarning ?? '',
    (card.confusionPoints ?? []).join(' '),
    card.tips.join(' '),
    card.legalRefs.join(' '),
  ].join('\n');

/** Extrait ±70 caractères autour de la première occurrence d'un terme. */
const makeSnippet = (card: RevisionCard, firstTerm: string): string => {
  const fields = [
    card.essential,
    card.narrative ?? '',
    card.keyPoints.join(' · '),
    card.examWarning ?? '',
    card.tips.join(' · '),
  ];
  const regex = accentInsensitiveRegex(firstTerm);
  for (const field of fields) {
    regex.lastIndex = 0;
    const match = regex.exec(field);
    if (match) {
      const start = Math.max(0, match.index - 70);
      const end = Math.min(field.length, match.index + match[0].length + 90);
      return (
        (start > 0 ? '… ' : '') +
        field.slice(start, end).trim() +
        (end < field.length ? ' …' : '')
      );
    }
  }
  return card.essential;
};

/**
 * Recherche plein texte dans les fiches des modules fournis.
 * Tous les termes doivent apparaître dans la fiche (ET logique).
 */
export const searchFiches = (
  modules: RevisionModule[],
  query: string,
  limit = 20
): FicheSearchResult[] => {
  const terms = searchTerms(query);
  if (terms.length === 0) return [];

  const regexes = terms.map(accentInsensitiveRegex);
  const results: FicheSearchResult[] = [];

  for (const module of modules) {
    for (const card of module.cards) {
      const haystack = cardHaystack(card);
      const matchesAll = regexes.every((r) => {
        r.lastIndex = 0;
        return r.test(haystack);
      });
      if (matchesAll) {
        results.push({ module, card, snippet: makeSnippet(card, terms[0]) });
        if (results.length >= limit) return results;
      }
    }
  }
  return results;
};
