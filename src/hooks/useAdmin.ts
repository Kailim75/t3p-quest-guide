import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export type AppRole = 'admin' | 'moderator' | 'user';

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

export interface UserWithProfile {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  roles: AppRole[];
  is_approved: boolean;
  /** Fin d'accès de l'apprenant ; null = accès sans limite. */
  access_expires_at: string | null;
  /** Date d'archivage ; null = apprenant actif. */
  archived_at: string | null;
}

/** Un accès est échu si une date de fin est passée (désactivation automatique). */
export const isAccessExpired = (accessExpiresAt: string | null): boolean =>
  !!accessExpiresAt && new Date(accessExpiresAt).getTime() < Date.now();

export const useAdmin = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Check if current user is admin
  const { data: isAdmin, isLoading: isCheckingAdmin } = useQuery({
    queryKey: ['is-admin', user?.id],
    queryFn: async () => {
      if (!user) return false;
      
      const { data, error } = await supabase
        .rpc('has_role', { _user_id: user.id, _role: 'admin' });

      if (error) {
        console.error('Error checking admin role:', error);
        return false;
      }
      return data as boolean;
    },
    enabled: !!user,
  });

  // Get all users with their profiles and roles (admin only)
  const { data: users, isLoading: isLoadingUsers, refetch: refetchUsers } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      // Get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Get all roles
      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('*');

      if (rolesError) throw rolesError;

      // Combine profiles with roles
      const usersWithRoles: UserWithProfile[] = (profiles || []).map(profile => ({
        id: profile.id,
        email: profile.email || '',
        display_name: profile.display_name,
        created_at: profile.created_at,
        is_approved: profile.is_approved,
        access_expires_at: profile.access_expires_at ?? null,
        archived_at: profile.archived_at ?? null,
        roles: (roles || [])
          .filter(r => r.user_id === profile.id)
          .map(r => r.role as AppRole),
      }));

      return usersWithRoles;
    },
    enabled: !!isAdmin,
  });

  // Add role to user
  const addRole = useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: AppRole }) => {
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  // Remove role from user
  const removeRole = useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: AppRole }) => {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', role);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  // Approve user
  const approveUser = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from('profiles')
        .update({ is_approved: true })
        .eq('id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  // Définir (ou retirer) la date de fin d'accès d'un apprenant
  const setAccessExpiry = useMutation({
    mutationFn: async ({ userId, expiresAt }: { userId: string; expiresAt: string | null }) => {
      const { error } = await supabase
        .from('profiles')
        .update({ access_expires_at: expiresAt })
        .eq('id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  // Archiver un apprenant : il ne peut plus se connecter, son historique est conservé
  const archiveUser = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from('profiles')
        .update({ archived_at: new Date().toISOString() })
        .eq('id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  // Réactiver un apprenant archivé
  const unarchiveUser = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from('profiles')
        .update({ archived_at: null })
        .eq('id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  // Reject/unapprove user
  const rejectUser = useMutation({
    mutationFn: async (userId: string) => {
      const { error } = await supabase
        .from('profiles')
        .update({ is_approved: false })
        .eq('id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
    },
  });

  return {
    isAdmin: isAdmin ?? false,
    isCheckingAdmin,
    users: users ?? [],
    isLoadingUsers,
    refetchUsers,
    addRole,
    removeRole,
    approveUser,
    rejectUser,
    setAccessExpiry,
    archiveUser,
    unarchiveUser,
  };
};
