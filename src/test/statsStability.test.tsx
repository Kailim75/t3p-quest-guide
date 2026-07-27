import { describe, expect, it, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

/**
 * Garde-fou contre la panne survenue sur « Révision des erreurs » :
 * `stats` était recréé à chaque rendu, si bien que tout effet qui en dépendait
 * se relançait en boucle (la liste de questions était re-mélangée en
 * permanence sous les yeux de l'élève).
 *
 * Ce test vérifie que l'objet garde une identité stable tant que les
 * résultats ne changent pas — c'est exactement ce qui manquait.
 */

const fakeResults = [
  {
    id: '1',
    user_id: 'u1',
    quiz_type: 'module',
    quiz_id: 'reglementation',
    score: 8,
    total_questions: 10,
    percentage: 80,
    passed: true,
    time_spent: 300,
    created_at: '2026-07-01T10:00:00Z',
    questions_failed: ['reg-001', 'reg-002'],
  },
  {
    id: '2',
    user_id: 'u1',
    quiz_type: 'exam',
    quiz_id: 'admissibilite',
    score: 30,
    total_questions: 50,
    percentage: 60,
    passed: false,
    time_spent: 3000,
    created_at: '2026-07-02T10:00:00Z',
    questions_failed: ['reg-002', 'sec-005'],
  },
];

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({ user: { id: 'u1' }, session: { access_token: 'jeton' } }),
}));

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: () => ({
      select: () => ({
        eq: () => ({
          order: () => Promise.resolve({ data: fakeResults, error: null }),
        }),
      }),
    }),
  },
}));

import { useQuizResults } from '@/hooks/useQuizResults';

const wrapper = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false, gcTime: 0 } },
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

describe('statistiques de progression', () => {
  it('garde une identité stable entre deux rendus (pas de boucle d\'effet)', async () => {
    const { result, rerender } = renderHook(() => useQuizResults(), { wrapper });

    await waitFor(() => expect(result.current.stats.totalQuizzes).toBe(2));

    const premier = result.current.stats;
    const premieresErreurs = result.current.stats.failedQuestions;

    rerender();
    rerender();

    // Même objet exactement : un effet qui dépend de `stats` ou de
    // `stats.failedQuestions` ne doit pas se redéclencher.
    expect(result.current.stats).toBe(premier);
    expect(result.current.stats.failedQuestions).toBe(premieresErreurs);
  });

  it('calcule les statistiques attendues à partir des résultats', async () => {
    const { result } = renderHook(() => useQuizResults(), { wrapper });

    await waitFor(() => expect(result.current.stats.totalQuizzes).toBe(2));

    const { stats } = result.current;
    expect(stats.totalExams).toBe(1);
    expect(stats.averageScore).toBe(70); // (80 + 60) / 2
    expect(stats.passRate).toBe(50); // 1 réussi sur 2
    // Les questions ratées sont dédoublonnées entre les sessions.
    expect([...stats.failedQuestions].sort()).toEqual(['reg-001', 'reg-002', 'sec-005']);
  });
});
