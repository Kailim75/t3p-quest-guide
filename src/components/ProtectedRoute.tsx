import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import AuthModal from '@/components/AuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Check if user is approved
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['user-profile', user?.id],
    queryFn: async () => {
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('is_approved')
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      return data;
    },
    enabled: !!user,
  });

  // Check if user is admin (admins bypass approval)
  const { data: isAdmin, isLoading: isCheckingAdmin } = useQuery({
    queryKey: ['is-admin-bypass', user?.id],
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

  // Show loading state while checking auth
  if (loading || (user && (isLoadingProfile || isCheckingAdmin))) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not authenticated, show auth modal
  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <span className="text-3xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Connexion requise
          </h1>
          <p className="text-muted-foreground mb-6">
            Connectez-vous ou créez un compte pour accéder à l'application T3P Quest et suivre votre progression.
          </p>
          <button
            onClick={() => setShowAuthModal(true)}
            className="btn-primary"
          >
            Se connecter / S'inscrire
          </button>
        </div>
        
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </div>
    );
  }

  // If user is not approved and not admin, show pending message
  if (!isAdmin && profile && !profile.is_approved) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6">
            <span className="text-3xl">⏳</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Inscription en attente
          </h1>
          <p className="text-muted-foreground mb-4">
            Votre compte a été créé avec succès ! Un administrateur doit valider votre inscription avant que vous puissiez accéder à l'application.
          </p>
          <p className="text-sm text-muted-foreground">
            Vous serez notifié dès que votre compte sera approuvé.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
