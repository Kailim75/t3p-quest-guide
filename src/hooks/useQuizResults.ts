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

// Interface for the answer format expected by the server
// Supports single ('A') or multiple ('A,B') answers
export interface QuizAnswer {
  questionId: string;
  answer: string; // Single: 'A' or Multiple: 'A,B' (comma-separated)
}

// Interface for validated result from server
export interface ValidatedQuizResult {
  id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  questions_failed: string[];
}

export const useQuizResults = () => {
  const { user, session } = useAuth();
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

  // Server-side validated quiz result saving
  const saveResultSecure = useMutation({
    mutationFn: async (params: {
      quiz_type: 'module' | 'exam';
      quiz_id: string;
      answers: QuizAnswer[];
      time_spent: number | null;
    }): Promise<ValidatedQuizResult> => {
      if (!user || !session?.access_token) {
        throw new Error('User not authenticated');
      }

      // Call the edge function for server-side validation
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/validate-quiz-result`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            quiz_type: params.quiz_type,
            quiz_id: params.quiz_id,
            answers: params.answers,
            time_spent: params.time_spent,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || 'Failed to save quiz result');
      }

      const data = await response.json();
      
      if (!data.success || !data.result) {
        throw new Error('Invalid response from server');
      }

      return data.result as ValidatedQuizResult;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quiz-results', user?.id] });
    },
  });

  // Legacy saveResult mutation (kept for backwards compatibility during migration)
  // This should eventually be removed once all components use saveResultSecure
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
    saveResultSecure,
    stats,
    getResultsByModule,
    getBestScore,
  };
};
