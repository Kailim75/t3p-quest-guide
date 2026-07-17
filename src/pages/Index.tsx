import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, GraduationCap, Layers, BarChart3, PlayCircle, RotateCcw, TrendingUp, Target, Zap, CalendarClock, CheckCircle2 } from 'lucide-react';
import { ModuleIcon } from '@/lib/moduleIcons';
import Header from '@/components/Header';
import ParcoursSelector from '@/components/ParcoursSelector';
import { getCommonModules, getSpecificModules } from '@/data/quizData';
import { useQuizQuestions } from '@/hooks/useQuizQuestions';
import { useQuizResults } from '@/hooks/useQuizResults';
import { loadQuizSession } from '@/lib/quizSession';
import { specificModuleIdsFor, useTargetExam } from '@/lib/targetExam';
import { getDueQuestionIds, getTodayChallenge } from '@/lib/spacedRepetition';
import { useAuth } from '@/contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { user } = useAuth();
  const commonModules = getCommonModules();
  const specificModules = getSpecificModules();
  const { questions } = useQuizQuestions();
  const { stats } = useQuizResults();
  const savedSession = loadQuizSession();
  const showJourney = !!user;

  const [target] = useTargetExam();
  const allowedSpecific = specificModuleIdsFor(target);
  const shownSpecificModules = allowedSpecific
    ? specificModules.filter((m) => allowedSpecific.includes(m.id))
    : specificModules;

  const dueCount = getDueQuestionIds().length;
  const todayChallenge = getTodayChallenge();

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

  const quickAccess = [
    {
      icon: BookOpen,
      title: 'Entraînement',
      description: 'Quiz par module, à votre rythme',
      to: '/modules',
      color: '--primary',
    },
    {
      icon: GraduationCap,
      title: 'Examen blanc',
      description: 'Conditions réelles, chronométré',
      to: '/exam',
      color: '--cta',
    },
    {
      icon: FileText,
      title: 'Fiches de cours',
      description: "L'essentiel à connaître, sans QCM",
      to: '/revision',
      color: '--module-anglais',
    },
    {
      icon: Layers,
      title: 'Flashcards',
      description: 'Mémorisez les points clés',
      to: '/flashcards',
      color: '--module-francais',
    },
    {
      icon: BarChart3,
      title: 'Ma progression',
      description: 'Scores, points faibles, badges',
      to: '/progress',
      color: '--module-vmdtr',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              <span>👋</span>
              Bonjour, {displayName} !
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              Réussissez votre examen{' '}
              <span className="text-gradient">Taxi, VTC & VMDTR</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {questions.length} questions conformes au référentiel officiel,
              examens blancs chronométrés et corrections détaillées.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/modules" className="btn-cta">
                Commencer l'entraînement
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/exam" className="btn-outline">
                <GraduationCap className="h-4 w-4" />
                Examen blanc
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cta/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Votre parcours (élève connecté) */}
      {showJourney && (
        <section className="py-8 border-b bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <ParcoursSelector />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Votre parcours</h2>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Défi du jour */}
              <Link
                to="/defi"
                className="group flex items-center gap-4 rounded-2xl border-2 border-primary/30 bg-card p-4 transition-all hover:shadow-soft hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  {todayChallenge ? (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  ) : (
                    <Zap className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">Défi du jour</p>
                  <p className="text-sm text-muted-foreground">
                    {todayChallenge
                      ? `Réussi ${todayChallenge.score}/${todayChallenge.total} aujourd'hui — à demain !`
                      : '5 questions rapides pour entretenir vos acquis'}
                  </p>
                </div>
              </Link>

              {/* Révisions programmées (répétition espacée) */}
              {dueCount > 0 && (
                <Link
                  to="/revision-erreurs?mode=due"
                  className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:shadow-soft hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta/10">
                    <CalendarClock className="h-5 w-5 text-cta" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">À réviser aujourd'hui</p>
                    <p className="text-sm text-muted-foreground">
                      {dueCount} question{dueCount > 1 ? 's' : ''} programmée{dueCount > 1 ? 's' : ''} (J+1, J+3, J+7)
                    </p>
                  </div>
                </Link>
              )}

              {savedSession && (
                <Link
                  to={`/quiz/${savedSession.moduleId}`}
                  className="group flex items-center gap-4 rounded-2xl border-2 border-cta/30 bg-card p-4 transition-all hover:shadow-soft hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta/10">
                    <PlayCircle className="h-5 w-5 text-cta" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">Reprendre votre quiz</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {savedSession.moduleName} — question {savedSession.currentIndex + 1} sur {savedSession.questionIds.length}
                    </p>
                  </div>
                </Link>
              )}

              {stats.failedQuestions.length > 0 && (
                <Link
                  to="/revision-erreurs"
                  className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:shadow-soft hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                    <RotateCcw className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">Retravailler vos erreurs</p>
                    <p className="text-sm text-muted-foreground">
                      {stats.failedQuestions.length} question{stats.failedQuestions.length > 1 ? 's' : ''} à revoir
                    </p>
                  </div>
                </Link>
              )}

              {stats.totalQuizzes > 0 && (
                <Link
                  to="/progress"
                  className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:shadow-soft hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{stats.averageScore}% de moyenne</p>
                    <p className="text-sm text-muted-foreground">
                      {stats.totalQuizzes} quiz réalisé{stats.totalQuizzes > 1 ? 's' : ''} — voir ma progression
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Accès rapide */}
      <section className="py-10 sm:py-14 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {quickAccess.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex flex-col rounded-2xl border bg-card p-4 sm:p-5 transition-all hover:shadow-soft hover:-translate-y-0.5"
              >
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `hsl(var(${item.color}) / 0.12)` }}
                >
                  <item.icon
                    className="h-5 w-5"
                    style={{ color: `hsl(var(${item.color}))` }}
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Structure de l'examen T3P
            </h2>
            <p className="text-muted-foreground">
              Des modules communs à toutes les professions, et des modules
              spécifiques selon votre activité.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Common Modules */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Modules communs</h3>
                  <p className="text-sm text-muted-foreground">Obligatoires pour tous</p>
                </div>
              </div>
              <div className="space-y-1">
                {commonModules.map((module) => (
                  <Link
                    key={module.id}
                    to={`/module/${module.id}`}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-secondary transition-colors"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `hsl(var(--${module.color}) / 0.12)` }}
                    >
                      <ModuleIcon
                        moduleId={module.id}
                        className="h-5 w-5"
                        style={{ color: `hsl(var(--${module.color}))` }}
                      />
                    </span>
                    <span className="flex-1 font-medium text-foreground">{module.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Specific Modules */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 text-cta">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Modules spécifiques</h3>
                  <p className="text-sm text-muted-foreground">Selon votre activité</p>
                </div>
              </div>
              <div className="space-y-1">
                {shownSpecificModules.map((module) => (
                  <Link
                    key={module.id}
                    to={`/module/${module.id}`}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-secondary transition-colors"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `hsl(var(--${module.color}) / 0.12)` }}
                    >
                      <ModuleIcon
                        moduleId={module.id}
                        className="h-5 w-5"
                        style={{ color: `hsl(var(--${module.color}))` }}
                      />
                    </span>
                    <span className="flex-1 font-medium text-foreground">{module.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Quiz T3P — École T3P · Application de préparation à l'examen</p>
          <p className="mt-1">Taxi • VTC • VMDTR</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
