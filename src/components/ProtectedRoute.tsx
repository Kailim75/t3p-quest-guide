import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Show loading state while checking auth
  if (loading) {
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

  return <>{children}</>;
};

export default ProtectedRoute;
