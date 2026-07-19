import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Hourglass } from 'lucide-react';
import AuthModal from '@/components/AuthModal';
import Logo from '@/components/Logo';
import WelcomeScreen from '@/components/WelcomeScreen';

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
        .select('is_approved, access_expires_at, archived_at')
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

  // If not authenticated, show the welcome screen + auth modal
  if (!user) {
    return (
      <>
        <WelcomeScreen onSignIn={() => setShowAuthModal(true)} />
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </>
    );
  }

  // Compte archivé par le formateur : accès fermé, historique conservé.
  if (!isAdmin && profile?.archived_at) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Logo className="mx-auto mb-6 h-16 w-16 drop-shadow" />
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Accès clôturé
          </h1>
          <p className="text-muted-foreground mb-4">
            Votre formation est terminée et votre accès à l'application a été clôturé.
            Votre progression reste enregistrée.
          </p>
          <p className="text-sm text-muted-foreground">
            Besoin d'un accès à nouveau ? Contactez votre école.
          </p>
        </div>
      </div>
    );
  }

  // Fin d'accès atteinte : la désactivation est automatique, évaluée ici à
  // chaque tentative d'accès (aucune tâche planifiée nécessaire).
  if (!isAdmin && profile?.access_expires_at && new Date(profile.access_expires_at).getTime() < Date.now()) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Logo className="mx-auto mb-6 h-16 w-16 drop-shadow" />
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Accès expiré
          </h1>
          <p className="text-muted-foreground mb-4">
            Votre période d'accès à l'application a pris fin le{' '}
            {new Date(profile.access_expires_at).toLocaleDateString('fr-FR')}.
            Votre progression reste enregistrée.
          </p>
          <p className="text-sm text-muted-foreground">
            Pour prolonger votre accès, contactez votre école.
          </p>
        </div>
      </div>
    );
  }

  // If user is not approved and not admin, show pending message
  if (!isAdmin && profile && !profile.is_approved) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Logo className="mx-auto mb-6 h-16 w-16 drop-shadow" />
          <span className="inline-flex items-center gap-2 rounded-full bg-warning/10 px-4 py-1.5 text-sm font-medium text-warning">
            <Hourglass className="h-4 w-4" />
            En attente de validation
          </span>
          <h1 className="mt-4 text-2xl font-bold text-foreground mb-3">
            Bienvenue, votre compte est créé !
          </h1>
          <p className="text-muted-foreground mb-4">
            Votre école doit valider votre inscription avant de vous ouvrir l'accès.
            C'est généralement rapide.
          </p>
          <p className="text-sm text-muted-foreground">
            Reconnectez-vous un peu plus tard : vous pourrez alors commencer votre entraînement.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
