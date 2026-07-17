import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Question, AnswerLetter } from '@/data/quizData';

interface DbQuestionRow {
  id: string;
  module_id: string;
  sub_module_id: string;
  text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
  reference: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

const mapDbQuestion = (q: DbQuestionRow): Question => ({
  id: q.id,
  moduleId: q.module_id,
  subModuleId: q.sub_module_id,
  text: q.text,
  options: [
    { letter: 'A' as AnswerLetter, text: q.option_a },
    { letter: 'B' as AnswerLetter, text: q.option_b },
    { letter: 'C' as AnswerLetter, text: q.option_c },
    { letter: 'D' as AnswerLetter, text: q.option_d },
  ],
  correctAnswer: q.correct_answer,
  explanation: q.explanation,
  reference: q.reference,
  difficulty: q.difficulty,
});

/**
 * Questions servies aux élèves : la base de données est l'unique source
 * (gérée depuis l'écran Administration). Le barème serveur lit la même
 * table : toute modification dans l'admin est immédiatement effective
 * partout, sans fichier à resynchroniser.
 */
export const useQuizQuestions = () => {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ['student-questions'],
    queryFn: async () => {
      const { data, error } = await supabase.from('questions').select('*');
      if (error) throw error;
      return (data ?? []).map(mapDbQuestion);
    },
    enabled: !!user,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const questions: Question[] = query.data ?? [];

  return {
    questions,
    /** true tant que la réponse de la base n'est pas connue (utilisateur connecté uniquement) */
    isLoading: query.isLoading,
    /** true si la base est inaccessible (les écrans affichent leur état vide) */
    isError: query.isError,
    getByModule: (moduleId: string) => questions.filter(q => q.moduleId === moduleId),
    getByModules: (moduleIds: string[]) => questions.filter(q => moduleIds.includes(q.moduleId)),
    getByIds: (ids: string[]) => questions.filter(q => ids.includes(q.id)),
  };
};
