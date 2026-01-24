import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuizResults } from './useQuizResults';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'progression' | 'performance' | 'streak' | 'special';
  requirement: string;
}

export interface UserBadge {
  id: string;
  user_id: string;
  badge_id: string;
  unlocked_at: string;
}

export interface UserStreak {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string;
  updated_at: string;
}

// Badge definitions
export const badges: Badge[] = [
  // Progression badges
  {
    id: 'first-quiz',
    name: 'Premier pas',
    description: 'Terminer votre premier quiz',
    icon: '🎯',
    category: 'progression',
    requirement: '1 quiz terminé',
  },
  {
    id: 'quiz-5',
    name: 'Apprenti',
    description: 'Terminer 5 quiz',
    icon: '📚',
    category: 'progression',
    requirement: '5 quiz terminés',
  },
  {
    id: 'quiz-10',
    name: 'Étudiant assidu',
    description: 'Terminer 10 quiz',
    icon: '🎓',
    category: 'progression',
    requirement: '10 quiz terminés',
  },
  {
    id: 'quiz-25',
    name: 'Expert en herbe',
    description: 'Terminer 25 quiz',
    icon: '🌟',
    category: 'progression',
    requirement: '25 quiz terminés',
  },
  {
    id: 'quiz-50',
    name: 'Maître quiz',
    description: 'Terminer 50 quiz',
    icon: '👑',
    category: 'progression',
    requirement: '50 quiz terminés',
  },
  
  // Performance badges
  {
    id: 'perfect-score',
    name: 'Sans faute',
    description: 'Obtenir 100% sur un quiz',
    icon: '💯',
    category: 'performance',
    requirement: '100% sur un quiz',
  },
  {
    id: 'first-pass',
    name: 'Réussite !',
    description: 'Réussir votre premier quiz (≥70%)',
    icon: '✅',
    category: 'performance',
    requirement: 'Premier quiz réussi',
  },
  {
    id: 'pass-10',
    name: 'Sur la bonne voie',
    description: 'Réussir 10 quiz avec ≥70%',
    icon: '🏆',
    category: 'performance',
    requirement: '10 quiz réussis',
  },
  {
    id: 'exam-pass',
    name: 'Examen blanc réussi',
    description: 'Réussir un examen blanc',
    icon: '🎖️',
    category: 'performance',
    requirement: 'Examen blanc ≥70%',
  },
  {
    id: 'exam-perfect',
    name: 'Excellence',
    description: 'Obtenir ≥90% sur un examen blanc',
    icon: '🏅',
    category: 'performance',
    requirement: 'Examen blanc ≥90%',
  },
  
  // Streak badges
  {
    id: 'streak-3',
    name: 'Régulier',
    description: 'Réviser 3 jours de suite',
    icon: '🔥',
    category: 'streak',
    requirement: '3 jours consécutifs',
  },
  {
    id: 'streak-7',
    name: 'Semaine parfaite',
    description: 'Réviser 7 jours de suite',
    icon: '⚡',
    category: 'streak',
    requirement: '7 jours consécutifs',
  },
  {
    id: 'streak-14',
    name: 'Détermination',
    description: 'Réviser 14 jours de suite',
    icon: '💪',
    category: 'streak',
    requirement: '14 jours consécutifs',
  },
  {
    id: 'streak-30',
    name: 'Inarrêtable',
    description: 'Réviser 30 jours de suite',
    icon: '🚀',
    category: 'streak',
    requirement: '30 jours consécutifs',
  },
  
  // Special badges
  {
    id: 'all-modules',
    name: 'Explorateur',
    description: 'Faire au moins un quiz dans chaque module',
    icon: '🗺️',
    category: 'special',
    requirement: 'Tous les modules explorés',
  },
  {
    id: 'error-revision',
    name: 'Persévérant',
    description: 'Utiliser le mode révision des erreurs',
    icon: '🔄',
    category: 'special',
    requirement: 'Révision des erreurs utilisée',
  },
];

export const useBadges = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { results, stats } = useQuizResults();

  // Fetch user's unlocked badges
  const { data: unlockedBadges, isLoading } = useQuery({
    queryKey: ['user-badges', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('user_badges')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      return data as UserBadge[];
    },
    enabled: !!user,
  });

  // Fetch user's streak
  const { data: streak } = useQuery({
    queryKey: ['user-streak', user?.id],
    queryFn: async () => {
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;
      return data as UserStreak | null;
    },
    enabled: !!user,
  });

  // Unlock badge mutation
  const unlockBadge = useMutation({
    mutationFn: async (badgeId: string) => {
      if (!user) throw new Error('User not authenticated');
      
      const { error } = await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_id: badgeId });

      if (error && error.code !== '23505') throw error; // Ignore duplicate key
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-badges', user?.id] });
    },
  });

  // Update streak mutation
  const updateStreak = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('User not authenticated');
      
      const today = new Date().toISOString().split('T')[0];
      
      if (!streak) {
        // Create new streak
        const { error } = await supabase
          .from('user_streaks')
          .insert({ 
            user_id: user.id, 
            current_streak: 1, 
            longest_streak: 1,
            last_activity_date: today 
          });
        if (error) throw error;
      } else {
        const lastDate = new Date(streak.last_activity_date);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
          // Already logged today, no update needed
          return;
        } else if (diffDays === 1) {
          // Continue streak
          const newStreak = streak.current_streak + 1;
          const { error } = await supabase
            .from('user_streaks')
            .update({ 
              current_streak: newStreak,
              longest_streak: Math.max(newStreak, streak.longest_streak),
              last_activity_date: today,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', user.id);
          if (error) throw error;
        } else {
          // Reset streak
          const { error } = await supabase
            .from('user_streaks')
            .update({ 
              current_streak: 1,
              last_activity_date: today,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', user.id);
          if (error) throw error;
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-streak', user?.id] });
    },
  });

  // Check and unlock badges based on current stats
  const checkBadges = async () => {
    if (!user || !results) return [];
    
    const unlockedIds = unlockedBadges?.map(b => b.badge_id) || [];
    const newBadges: string[] = [];

    // Progression badges
    if (!unlockedIds.includes('first-quiz') && stats.totalQuizzes >= 1) {
      newBadges.push('first-quiz');
    }
    if (!unlockedIds.includes('quiz-5') && stats.totalQuizzes >= 5) {
      newBadges.push('quiz-5');
    }
    if (!unlockedIds.includes('quiz-10') && stats.totalQuizzes >= 10) {
      newBadges.push('quiz-10');
    }
    if (!unlockedIds.includes('quiz-25') && stats.totalQuizzes >= 25) {
      newBadges.push('quiz-25');
    }
    if (!unlockedIds.includes('quiz-50') && stats.totalQuizzes >= 50) {
      newBadges.push('quiz-50');
    }

    // Performance badges
    const passedQuizzes = results.filter(r => r.passed).length;
    const perfectScores = results.filter(r => r.percentage === 100).length;
    const examsPassed = results.filter(r => r.quiz_type === 'exam' && r.passed).length;
    const examsExcellent = results.filter(r => r.quiz_type === 'exam' && r.percentage >= 90).length;

    if (!unlockedIds.includes('first-pass') && passedQuizzes >= 1) {
      newBadges.push('first-pass');
    }
    if (!unlockedIds.includes('pass-10') && passedQuizzes >= 10) {
      newBadges.push('pass-10');
    }
    if (!unlockedIds.includes('perfect-score') && perfectScores >= 1) {
      newBadges.push('perfect-score');
    }
    if (!unlockedIds.includes('exam-pass') && examsPassed >= 1) {
      newBadges.push('exam-pass');
    }
    if (!unlockedIds.includes('exam-perfect') && examsExcellent >= 1) {
      newBadges.push('exam-perfect');
    }

    // Streak badges
    const currentStreak = streak?.current_streak || 0;
    if (!unlockedIds.includes('streak-3') && currentStreak >= 3) {
      newBadges.push('streak-3');
    }
    if (!unlockedIds.includes('streak-7') && currentStreak >= 7) {
      newBadges.push('streak-7');
    }
    if (!unlockedIds.includes('streak-14') && currentStreak >= 14) {
      newBadges.push('streak-14');
    }
    if (!unlockedIds.includes('streak-30') && currentStreak >= 30) {
      newBadges.push('streak-30');
    }

    // Special badges - all modules
    const uniqueModules = new Set(results.map(r => r.quiz_id));
    if (!unlockedIds.includes('all-modules') && uniqueModules.size >= 9) {
      newBadges.push('all-modules');
    }

    // Unlock new badges
    for (const badgeId of newBadges) {
      await unlockBadge.mutateAsync(badgeId);
    }

    return newBadges;
  };

  // Get badge details with unlock status
  const getBadgesWithStatus = () => {
    const unlockedIds = unlockedBadges?.map(b => b.badge_id) || [];
    
    return badges.map(badge => ({
      ...badge,
      unlocked: unlockedIds.includes(badge.id),
      unlockedAt: unlockedBadges?.find(b => b.badge_id === badge.id)?.unlocked_at,
    }));
  };

  return {
    badges: getBadgesWithStatus(),
    unlockedCount: unlockedBadges?.length || 0,
    totalBadges: badges.length,
    streak: streak?.current_streak || 0,
    longestStreak: streak?.longest_streak || 0,
    isLoading,
    checkBadges,
    updateStreak,
    unlockBadge,
  };
};
