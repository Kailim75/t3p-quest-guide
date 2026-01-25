import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface DbQuestion {
  id: string;
  module_id: string;
  sub_module_id: string;
  text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  reference: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  created_at: string;
  updated_at: string;
}

export interface QuestionInput {
  id: string;
  module_id: string;
  sub_module_id: string;
  text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  reference: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

export const useQuestions = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch all questions
  const { data: questions, isLoading, refetch } = useQuery({
    queryKey: ['admin-questions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .order('module_id', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as DbQuestion[];
    },
    enabled: !!user,
  });

  // Add a new question
  const addQuestion = useMutation({
    mutationFn: async (question: QuestionInput) => {
      const { error } = await supabase
        .from('questions')
        .insert(question);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-questions'] });
    },
  });

  // Update a question
  const updateQuestion = useMutation({
    mutationFn: async ({ id, ...question }: QuestionInput) => {
      const { error } = await supabase
        .from('questions')
        .update(question)
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-questions'] });
    },
  });

  // Delete a question
  const deleteQuestion = useMutation({
    mutationFn: async (questionId: string) => {
      const { error } = await supabase
        .from('questions')
        .delete()
        .eq('id', questionId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-questions'] });
    },
  });

  // Get questions count by module
  const getQuestionsByModule = (moduleId: string) => {
    return questions?.filter(q => q.module_id === moduleId) || [];
  };

  return {
    questions: questions || [],
    isLoading,
    refetch,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionsByModule,
  };
};
