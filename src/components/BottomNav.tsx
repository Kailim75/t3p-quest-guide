import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, FileText, GraduationCap, Layers } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Accueil', icon: Home },
  { path: '/modules', label: 'Modules', icon: BookOpen },
  { path: '/revision', label: 'Fiches', icon: FileText },
  { path: '/flashcards', label: 'Cartes', icon: Layers },
  { path: '/exam', label: 'Examen', icon: GraduationCap },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav
      className="bottom-nav fixed inset-x-0 bottom-0 z-50 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid h-16 grid-cols-5">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <span
                className={`flex h-7 w-12 items-center justify-center rounded-full transition-colors ${
                  isActive ? 'bg-primary/10' : ''
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={isActive ? 2.4 : 2} />
              </span>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
