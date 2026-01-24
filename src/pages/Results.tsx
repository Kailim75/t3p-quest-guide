import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Trophy } from 'lucide-react';
import Header from '@/components/Header';
import { modules } from '@/data/quizData';

const Results = () => {
  // In a real app, this would come from a state management solution or database
  // For now, we'll show a placeholder

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
              <Trophy className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Vos résultats</h1>
            <p className="text-muted-foreground">
              Suivez votre progression sur chaque module
            </p>
          </div>

          {/* Info Banner */}
          <div className="rounded-xl border bg-secondary/50 p-6 mb-8 text-center">
            <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">
              Commencez votre entraînement
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Vos résultats apparaîtront ici après avoir complété des quiz.
              La sauvegarde des résultats nécessite une base de données.
            </p>
            <Link to="/modules" className="btn-primary inline-flex">
              Explorer les modules
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Module List */}
          <div className="space-y-3">
            {modules.map((module) => (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className="flex items-center gap-4 rounded-xl border bg-card p-4 hover:shadow-soft transition-shadow"
              >
                <span className="text-2xl">{module.icon}</span>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{module.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {module.type === 'commun' ? 'Module commun' : 'Module spécifique'}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-muted-foreground">—</div>
                  <div className="text-xs text-muted-foreground">Non commencé</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
