import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Play, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import { getModuleById } from '@/data/quizData';
import { useQuizQuestions } from '@/hooks/useQuizQuestions';

const ModuleDetail = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = getModuleById(moduleId || '');
  const { getByModule } = useQuizQuestions();
  const questions = getByModule(moduleId || '');

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Module non trouvé</h1>
          <Link to="/modules" className="btn-primary">
            Retour aux modules
          </Link>
        </div>
      </div>
    );
  }

  const totalQuestions = module.subModules.reduce((acc, sub) => acc + sub.questionCount, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back link */}
        <Link 
          to="/modules"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux modules
        </Link>

        {/* Module Header */}
        <div className="rounded-2xl border bg-card p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-3xl">
              {module.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`badge-module ${module.type === 'commun' ? 'bg-primary/10 text-primary' : 'bg-cta/10 text-cta'}`}>
                  {module.type === 'commun' ? 'Module commun' : 'Module spécifique'}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {module.name}
              </h1>
              
              <p className="text-muted-foreground mb-4">
                {module.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {module.subModules.length} sous-modules
                </span>
                <span>•</span>
                <span>{totalQuestions} questions au total</span>
                <span>•</span>
                <span>{questions.length} questions disponibles</span>
              </div>
            </div>

            <Link 
              to={`/quiz/${module.id}`}
              className="btn-primary shrink-0"
            >
              <Play className="h-4 w-4" />
              Lancer le quiz
            </Link>
          </div>
        </div>

        {/* Sub-modules */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Sous-modules</h2>
          
          <div className="space-y-3">
            {module.subModules.map((subModule, index) => (
              <div 
                key={subModule.id}
                className="flex items-center gap-4 rounded-xl border bg-card p-4 hover:shadow-soft transition-shadow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-semibold text-secondary-foreground">
                  {index + 1}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground">{subModule.name}</h3>
                  <p className="text-sm text-muted-foreground">{subModule.description}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {questions.filter(q => q.subModuleId === subModule.id).length} questions
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Banner */}
        {questions.length < totalQuestions && (
          <div className="mt-8 rounded-xl border border-warning/30 bg-warning/5 p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">📝</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Questions d'exemple
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ce module contient actuellement {questions.length} questions d'exemple sur {totalQuestions} prévues. 
                  Les vraies questions conformes au référentiel officiel doivent être ajoutées.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ModuleDetail;
