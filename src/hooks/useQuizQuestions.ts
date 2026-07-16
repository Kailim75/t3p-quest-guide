import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Question, AnswerLetter, getAllQuestions } from '@/data/quizData';

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
 * Questions servies aux élèves : la base de données fait foi
 * (gérée depuis l'écran Administration). Si la base est vide ou
 * inaccessible, repli sur le fichier statique embarqué pour que
 * l'application continue de fonctionner.
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
  });

  const dbQuestions = query.data;
  const usingDb = !!dbQuestions && dbQuestions.length > 0;
  const questions: Question[] = usingDb ? dbQuestions : getAllQuestions();

  return {
    questions,
    /** true tant que la réponse de la base n'est pas connue (utilisateur connecté uniquement) */
    isLoading: query.isLoading,
    /** 'db' si la base répond, 'static' en repli */
    source: usingDb ? ('db' as const) : ('static' as const),
    getByModule: (moduleId: string) => questions.filter(q => q.moduleId === moduleId),
    getByModules: (moduleIds: string[]) => questions.filter(q => moduleIds.includes(q.moduleId)),
    getByIds: (ids: string[]) => questions.filter(q => ids.includes(q.id)),
  };
};
