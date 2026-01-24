import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Target, Award, Clock, FileText } from 'lucide-react';
import Header from '@/components/Header';
import { getCommonModules, getSpecificModules } from '@/data/quizData';
import { useAuth } from '@/contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { user } = useAuth();
  const commonModules = getCommonModules();
  const specificModules = getSpecificModules();

  // Fetch user profile for display name
  const { data: profile } = useQuery({
    queryKey: ['user-profile-name', user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('id', user.id)
        .maybeSingle();
      return data;
    },
    enabled: !!user,
  });

  const displayName = profile?.display_name || user?.email?.split('@')[0] || 'Candidat';

  const features = [
    {
      icon: BookOpen,
      title: 'Modules officiels',
      description: 'Structure conforme au référentiel T3P',
    },
    {
      icon: Target,
      title: 'QCM réalistes',
      description: '4 options par question, format examen',
    },
    {
      icon: Award,
      title: 'Résultats détaillés',
      description: 'Corrections et explications complètes',
    },
    {
      icon: Clock,
      title: 'Mode examen',
      description: 'Conditions réelles avec chronomètre',
    },
    {
      icon: FileText,
      title: 'Fiches de cours',
      description: 'Révision théorique sans QCM',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Welcome Message */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <span>👋</span>
              Bonjour, {displayName} !
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
              <span>🎓</span>
              Préparation à l'examen T3P
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Réussissez votre examen{' '}
              <span className="text-gradient">Taxi, VTC & VMDTR</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entraînez-vous avec des quiz conformes au référentiel officiel T3P. 
              Modules communs et spécifiques, corrections détaillées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/modules" className="btn-primary">
                Mode entraînement
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/revision" className="btn-outline">
                <FileText className="h-4 w-4" />
                Fiches de cours
              </Link>
              <Link to="/exam" className="btn-outline">
                Examen blanc
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Features */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border hover:shadow-soft transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Structure de l'examen T3P
            </h2>
            <p className="text-muted-foreground">
              L'examen est composé de modules communs à toutes les professions 
              et de modules spécifiques selon votre activité.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Common Modules */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  📚
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Modules communs</h3>
                  <p className="text-sm text-muted-foreground">Obligatoires pour tous</p>
                </div>
              </div>
              <div className="space-y-3">
                {commonModules.map((module) => (
                  <Link
                    key={module.id}
                    to={`/module/${module.id}`}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-secondary transition-colors"
                  >
                    <span className="text-xl">{module.icon}</span>
                    <span className="flex-1 font-medium text-foreground">{module.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Specific Modules */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  🎯
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Modules spécifiques</h3>
                  <p className="text-sm text-muted-foreground">Selon votre activité</p>
                </div>
              </div>
              <div className="space-y-3">
                {specificModules.map((module) => (
                  <Link
                    key={module.id}
                    to={`/module/${module.id}`}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-secondary transition-colors"
                  >
                    <span className="text-xl">{module.icon}</span>
                    <span className="flex-1 font-medium text-foreground">{module.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/modules" className="btn-primary">
              Explorer tous les modules
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Quiz T3P - Application de préparation à l'examen</p>
          <p className="mt-1">Taxi • VTC • VMDTR</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
