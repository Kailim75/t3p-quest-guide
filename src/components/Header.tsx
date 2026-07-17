import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, FileText, GraduationCap, User, LogOut, BarChart3, Shield, Trophy, Layers, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin } from '@/hooks/useAdmin';
import { usePWA } from '@/hooks/usePWA';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AuthModal from '@/components/AuthModal';
import BottomNav from '@/components/BottomNav';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';

const Header = () => {
  const location = useLocation();
  const { user, signOut, loading } = useAuth();
  const { isAdmin } = useAdmin();
  const { isInstallable, isInstalled } = usePWA();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/modules', label: 'Modules', icon: BookOpen },
    { path: '/revision', label: 'Fiches', icon: FileText },
    { path: '/flashcards', label: 'Flashcards', icon: Layers },
    { path: '/exam', label: 'Examen', icon: GraduationCap },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10 shrink-0 drop-shadow-sm" />
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">Quiz T3P</h1>
              <p className="text-xs text-muted-foreground">
                <span className="sm:hidden">École T3P</span>
                <span className="hidden sm:inline">École T3P · Préparation à l'examen</span>
              </p>
            </div>
          </Link>

          {/* Navigation desktop (mobile : barre en bas d'écran) */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle & Auth Section */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            {loading ? (
              <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <User className="h-5 w-5" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Connecté</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/progress" className="flex items-center gap-2 cursor-pointer">
                      <BarChart3 className="h-4 w-4" />
                      Ma progression
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/badges" className="flex items-center gap-2 cursor-pointer">
                      <Trophy className="h-4 w-4" />
                      Mes badges
                    </Link>
                  </DropdownMenuItem>
                  {isInstallable && !isInstalled && (
                    <DropdownMenuItem asChild>
                      <Link to="/install" className="flex items-center gap-2 cursor-pointer">
                        <Download className="h-4 w-4" />
                        Installer l'app
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center gap-2 cursor-pointer">
                        <Shield className="h-4 w-4" />
                        Administration
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => signOut()}
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setAuthMode('login');
                    setShowAuthModal(true);
                  }}
                >
                  Connexion
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuthModal(true);
                  }}
                  className="hidden sm:inline-flex"
                >
                  S'inscrire
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab={authMode}
      />
    </header>

    {/* Navigation mobile */}
    <BottomNav />
    </>
  );
};

export default Header;
