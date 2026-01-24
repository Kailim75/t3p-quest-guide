import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface QuizResult {
  id: string;
  user_id: string;
  quiz_type: 'module' | 'exam';
  quiz_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent: number | null;
  questions_failed: string[];
  created_at: string;
}

export const useQuizResults = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: results, isLoading } = useQuery({
    queryKey: ['quiz-results', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as QuizResult[];
    },
    enabled: !!user,
  });

  const saveResult = useMutation({
    mutationFn: async (result: Omit<QuizResult, 'id' | 'user_id' | 'created_at'>) => {
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('quiz_results')
        .insert({
          user_id: user.id,
          quiz_type: result.quiz_type,
          quiz_id: result.quiz_id,
          score: result.score,
          total_questions: result.total_questions,
          percentage: result.percentage,
          passed: result.passed,
          time_spent: result.time_spent,
          questions_failed: result.questions_failed,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quiz-results', user?.id] });
    },
  });

  // Get statistics
  const stats = {
    totalQuizzes: results?.length ?? 0,
    totalExams: results?.filter(r => r.quiz_type === 'exam').length ?? 0,
    averageScore: results?.length 
      ? Math.round(results.reduce((acc, r) => acc + r.percentage, 0) / results.length)
      : 0,
    passRate: results?.length
      ? Math.round((results.filter(r => r.passed).length / results.length) * 100)
      : 0,
    // Get unique failed questions across all results
    failedQuestions: [...new Set(results?.flatMap(r => r.questions_failed) ?? [])],
  };

  // Get results by module
  const getResultsByModule = (moduleId: string) => {
    return results?.filter(r => r.quiz_id === moduleId) ?? [];
  };

  // Get best score for a module
  const getBestScore = (quizId: string) => {
    const moduleResults = results?.filter(r => r.quiz_id === quizId) ?? [];
    if (moduleResults.length === 0) return null;
    return Math.max(...moduleResults.map(r => r.percentage));
  };

  return {
    results,
    isLoading,
    saveResult,
    stats,
    getResultsByModule,
    getBestScore,
  };
};
