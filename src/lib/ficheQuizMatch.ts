import type { Question } from '@/data/quizData';
import type { RevisionCard } from '@/data/revisionData';

/**
 * Apparie une fiche de cours aux questions d'examen qui portent sur elle.
 *
 * Il n'existe pas de lien éditorial fiche ↔ question : on rapproche par le
 * vocabulaire. Les mots significatifs de la fiche (titre, essentiel, points
 * clés) sont cherchés dans l'énoncé et les options de chaque question du
 * module ; les questions qui en partagent le plus sont retenues.
 */

/**
 * Modules de fiches → modules de la banque de questions.
 * Les ids coïncident presque partout ; seuls les découpages VMDTR et le
 * territoire parisien diffèrent.
 */
export const questionModulesFor = (revisionModuleId: string): string[] => {
  const mapping: Record<string, string[]> = {
    'vmdtr-commercial': ['vmdtr'],
    'vmdtr-securite': ['vmdtr'],
    'taxi-territoire': ['taxi-territoire', 'taxi'],
  };
  return mapping[revisionModuleId] ?? [revisionModuleId];
};

const STOP_WORDS = new Set([
  'avec', 'dans', 'pour', 'sans', 'sous', 'chez', 'vers', 'entre', 'depuis',
  'cette', 'cettes', 'celui', 'celle', 'ceux', 'elles', 'leur', 'leurs',
  'votre', 'notre', 'vous', 'nous', 'elle', 'sont', 'être', 'etre', 'avoir',
  'fait', 'faire', 'peut', 'doit', 'doivent', 'peuvent', 'plus', 'moins',
  'tout', 'tous', 'toute', 'toutes', 'aussi', 'ainsi', 'donc', 'mais',
  'comme', 'alors', 'quand', 'lors', 'apres', 'après', 'avant', 'pendant',
  'chaque', 'autre', 'autres', 'même', 'meme', 'dont', 'obligatoire',
  'obligatoires', 'interdit', 'interdite', 'exemple', 'examen',
]);

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

/** Mots significatifs d'un texte (≥ 4 lettres, hors mots-outils). */
export const significantWords = (text: string): Set<string> => {
  const words = normalize(text).match(/[a-z0-9]{4,}/g) ?? [];
  return new Set(words.filter((w) => !STOP_WORDS.has(w)));
};

const ficheVocabulary = (card: RevisionCard): Set<string> =>
  significantWords(
    [card.title, card.essential, ...card.keyPoints, ...(card.confusionPoints ?? [])].join(' ')
  );

const questionText = (q: Question) =>
  [q.text, ...q.options.map((o) => o.text)].join(' ');

/**
 * Les `count` questions du lot les plus proches de la fiche.
 * Ne retient que les recoupements réels (≥ 2 mots partagés) ; s'il n'y en a
 * pas assez, complète au hasard pour toujours proposer un mini-quiz.
 */
export const matchQuestionsToFiche = (
  card: RevisionCard,
  questions: Question[],
  count = 3
): Question[] => {
  const vocabulary = ficheVocabulary(card);

  const scored = questions
    .map((question) => {
      const words = significantWords(questionText(question));
      let score = 0;
      for (const word of words) if (vocabulary.has(word)) score++;
      return { question, score };
    })
    .sort((a, b) => b.score - a.score);

  const relevant = scored.filter((s) => s.score >= 2).map((s) => s.question);
  if (relevant.length >= count) return relevant.slice(0, count);

  // Trop peu de recoupements : on complète avec le reste du module, mélangé.
  const chosen = new Set(relevant.map((q) => q.id));
  const filler = scored
    .map((s) => s.question)
    .filter((q) => !chosen.has(q.id))
    .sort(() => Math.random() - 0.5);

  return [...relevant, ...filler].slice(0, count);
};
