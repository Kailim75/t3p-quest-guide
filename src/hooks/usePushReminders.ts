import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Envoi des rappels par notification, côté formateur.
 *
 * Contrairement au courriel et à WhatsApp — qui ouvrent le logiciel du
 * formateur avec un message pré-rempli —, la notification part directement
 * du serveur : seuls les apprenants ayant accepté les rappels sur un
 * appareil sont joignables, d'où la liste des abonnés.
 */
export const usePushReminders = () => {
  const { session } = useAuth();
  const queryClient = useQueryClient();

  const { data: subscribedIds = new Set<string>() } = useQuery({
    queryKey: ['push-subscribers'],
    queryFn: async () => {
      const { data, error } = await supabase.from('push_subscriptions').select('user_id');
      if (error) throw error;
      return new Set((data ?? []).map((row) => row.user_id));
    },
  });

  const sendReminder = useMutation({
    mutationFn: async (params: { userIds: string[]; title?: string; body?: string }) => {
      if (!session?.access_token) throw new Error('Session expirée');

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/push-send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            user_ids: params.userIds,
            title: params.title,
            body: params.body,
            url: '/',
          }),
        }
      );

      const result = (await response.json()) as {
        sent?: number;
        failed?: number;
        expired?: number;
        /** Motif renvoyé par le service de push en cas de refus. */
        reason?: string;
        error?: string;
      };
      if (!response.ok) throw new Error(result.error ?? "L'envoi a échoué");
      return result;
    },
    onSuccess: () => {
      // Les abonnements morts sont purgés côté serveur : on rafraîchit la liste.
      void queryClient.invalidateQueries({ queryKey: ['push-subscribers'] });
    },
  });

  return { subscribedIds, sendReminder };
};
