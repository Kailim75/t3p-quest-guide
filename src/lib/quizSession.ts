import { AnswerLetter } from '@/data/quizData';

export interface SavedAnswer {
  questionId: string;
  answers: AnswerLetter[];
  isCorrect: boolean;
}

export interface SavedQuizSession {
  moduleId: string;
  moduleName: string;
  questionIds: string[];
  currentIndex: number;
  answers: SavedAnswer[];
  savedAt: number;
}

const STORAGE_KEY = 'quiz-t3p-session';
// Au-delà de 48 h, la session n'est plus proposée
const MAX_AGE_MS = 48 * 60 * 60 * 1000;

export const loadQuizSession = (): SavedQuizSession | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as SavedQuizSession;
    if (!session.moduleId || !Array.isArray(session.questionIds)) return null;
    if (Date.now() - session.savedAt > MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
};

export const saveQuizSession = (session: Omit<SavedQuizSession, 'savedAt'>): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...session, savedAt: Date.now() }));
  } catch {
    // stockage plein ou indisponible : la reprise est un confort, on n'interrompt pas le quiz
  }
};

export const clearQuizSession = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
};
