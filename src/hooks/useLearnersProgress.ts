import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAdmin } from './useAdmin';

export interface LearnerProfile {
  id: string;
  email: string | null;
  display_name: string | null;
  is_approved: boolean;
  created_at: string;
}

export interface LearnerStats {
  userId: string;
  profile: LearnerProfile;
  totalQuizzes: number;
  totalExams: number;
  averageScore: number;
  passRate: number;
  currentStreak: number;
  longestStreak: number;
  badgesCount: number;
  lastActivity: string | null;
}

export const useLearnersProgress = () => {
  const { isAdmin } = useAdmin();

  // Fetch all approved profiles
  const { data: profiles, isLoading: profilesLoading } = useQuery({
    queryKey: ['admin-learners-profiles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as LearnerProfile[];
    },
    enabled: isAdmin,
  });

  // Fetch all quiz results
  const { data: allResults, isLoading: resultsLoading } = useQuery({
    queryKey: ['admin-all-quiz-results'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('quiz_results')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Array<{
        id: string;
        user_id: string;
        quiz_type: string;
        quiz_id: string;
        score: number;
        total_questions: number;
        percentage: number;
        passed: boolean;
        time_spent: number | null;
        created_at: string;
        questions_failed: string[] | null;
      }>;
    },
    enabled: isAdmin,
  });

  // Fetch all streaks
  const { data: allStreaks, isLoading: streaksLoading } = useQuery({
    queryKey: ['admin-all-user-streaks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_streaks')
        .select('*');

      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
  });

  // Fetch all badges
  const { data: allBadges, isLoading: badgesLoading } = useQuery({
    queryKey: ['admin-all-user-badges'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_badges')
        .select('*');

      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
  });

  // Compute learner stats
  const learnersStats: LearnerStats[] = profiles?.map(profile => {
    const userResults = allResults?.filter(r => r.user_id === profile.id) ?? [];
    const userStreak = allStreaks?.find(s => s.user_id === profile.id);
    const userBadges = allBadges?.filter(b => b.user_id === profile.id) ?? [];

    const examResults = userResults.filter(r => r.quiz_type === 'exam');
    const passedResults = userResults.filter(r => r.passed);

    return {
      userId: profile.id,
      profile,
      totalQuizzes: userResults.length,
      totalExams: examResults.length,
      averageScore: userResults.length > 0
        ? Math.round(userResults.reduce((acc, r) => acc + Number(r.percentage), 0) / userResults.length)
        : 0,
      passRate: userResults.length > 0
        ? Math.round((passedResults.length / userResults.length) * 100)
        : 0,
      currentStreak: userStreak?.current_streak ?? 0,
      longestStreak: userStreak?.longest_streak ?? 0,
      badgesCount: userBadges.length,
      lastActivity: userResults.length > 0 ? userResults[0].created_at : null,
    };
  }) ?? [];

  // Questions les plus ratées de la promo (tous résultats confondus)
  const failuresByQuestion = new Map<string, { students: Set<string>; occurrences: number }>();
  for (const result of allResults ?? []) {
    for (const questionId of result.questions_failed ?? []) {
      const entry = failuresByQuestion.get(questionId) ?? { students: new Set<string>(), occurrences: 0 };
      entry.students.add(result.user_id);
      entry.occurrences += 1;
      failuresByQuestion.set(questionId, entry);
    }
  }
  const hardestQuestions = [...failuresByQuestion.entries()]
    .map(([questionId, { students, occurrences }]) => ({
      questionId,
      studentCount: students.size,
      occurrences,
    }))
    .sort((a, b) => b.studentCount - a.studentCount || b.occurrences - a.occurrences)
    .slice(0, 12);

  // Moyennes par module / épreuve (les sessions « défi » sont regroupées)
  const bucketOf = (r: { quiz_type: string; quiz_id: string }) =>
    r.quiz_type === 'module' && r.quiz_id.startsWith('defi-') ? 'defi' : r.quiz_id;
  const statsByBucket = new Map<string, { sum: number; attempts: number; isExam: boolean }>();
  for (const result of allResults ?? []) {
    const bucket = bucketOf(result);
    const entry = statsByBucket.get(bucket) ?? { sum: 0, attempts: 0, isExam: result.quiz_type === 'exam' };
    entry.sum += Number(result.percentage);
    entry.attempts += 1;
    statsByBucket.set(bucket, entry);
  }
  const moduleAverages = [...statsByBucket.entries()]
    .map(([bucketId, { sum, attempts, isExam }]) => ({
      bucketId,
      isExam,
      attempts,
      averageScore: Math.round(sum / attempts),
    }))
    .sort((a, b) => a.averageScore - b.averageScore);

  // Global stats
  const globalStats = {
    totalLearners: profiles?.length ?? 0,
    activeLearners: learnersStats.filter(l => l.totalQuizzes > 0).length,
    totalQuizzesTaken: allResults?.length ?? 0,
    averageGlobalScore: allResults && allResults.length > 0
      ? Math.round(allResults.reduce((acc, r) => acc + Number(r.percentage), 0) / allResults.length)
      : 0,
    globalPassRate: allResults && allResults.length > 0
      ? Math.round((allResults.filter(r => r.passed).length / allResults.length) * 100)
      : 0,
  };

  return {
    learnersStats,
    globalStats,
    hardestQuestions,
    moduleAverages,
    allResults: allResults ?? [],
    profiles: profiles ?? [],
    isLoading: profilesLoading || resultsLoading || streaksLoading || badgesLoading,
  };
};
