import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import { getCommonModules, getSpecificModules } from '@/data/quizData';
import { useQuizQuestions } from '@/hooks/useQuizQuestions';

const Modules = () => {
  const commonModules = getCommonModules();
  const specificModules = getSpecificModules();
  const { getByModule } = useQuizQuestions();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Modules de formation</h1>
          <p className="text-muted-foreground">
            Sélectionnez un module pour commencer votre entraînement
          </p>
        </div>

        {/* Common Modules */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
              📚
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Modules communs</h2>
              <p className="text-sm text-muted-foreground">
                Tronc commun obligatoire pour Taxi, VTC et VMDTR
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commonModules.map((module) => (
              <ModuleCard key={module.id} module={module} questionCount={getByModule(module.id).length} />
            ))}
          </div>
        </section>

        {/* Specific Modules */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta/10 text-xl">
              🎯
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Modules spécifiques</h2>
              <p className="text-sm text-muted-foreground">
                Choisissez selon votre future activité professionnelle
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specificModules.map((module) => (
              <ModuleCard key={module.id} module={module} questionCount={getByModule(module.id).length} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Modules;
