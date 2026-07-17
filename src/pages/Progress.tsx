import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useQuizResults } from '@/hooks/useQuizResults';
import Header from '@/components/Header';
import ProgressCharts from '@/components/ProgressCharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp,
  BookOpen,
  GraduationCap,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RotateCcw
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const ProgressPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { results, isLoading, stats } = useQuizResults();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Connexion requise
            </h1>
            <p className="text-muted-foreground mb-6">
              Connectez-vous pour voir votre progression et vos statistiques.
            </p>
            <Button onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
            <BarChart3 className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Ma Progression
          </h1>
          <p className="text-muted-foreground">
            Suivez vos performances et améliorez-vous
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalQuizzes}</p>
                  <p className="text-xs text-muted-foreground">Quiz passés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <GraduationCap className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalExams}</p>
                  <p className="text-xs text-muted-foreground">Examens blancs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Target className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.averageScore}%</p>
                  <p className="text-xs text-muted-foreground">Score moyen</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.passRate}%</p>
                  <p className="text-xs text-muted-foreground">Taux réussite</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        {stats.totalQuizzes > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Objectif : 70% de réussite
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Votre score moyen</span>
                  <span className={stats.averageScore >= 70 ? 'text-green-500' : 'text-yellow-500'}>
                    {stats.averageScore}%
                  </span>
                </div>
                <Progress 
                  value={Math.min(stats.averageScore, 100)} 
                  className="h-3"
                />
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                  {stats.averageScore >= 70 ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500" />
                      Vous êtes au-dessus du seuil de réussite de l'examen !
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-3.5 w-3.5 shrink-0 text-yellow-500" />
                      Encore {70 - stats.averageScore}% pour atteindre le seuil de réussite.
                    </>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Charts Section */}
        {results && results.length >= 3 && (
          <div className="mb-8">
            <ProgressCharts results={results} />
          </div>
        )}

        {/* Recent Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Historique récent
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin h-6 w-6 border-4 border-primary border-t-transparent rounded-full" />
              </div>
            ) : results && results.length > 0 ? (
              <div className="space-y-3">
                {results.slice(0, 10).map((result) => (
                  <div 
                    key={result.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      {result.passed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <p className="flex items-center gap-1.5 font-medium text-sm">
                          {result.quiz_type === 'exam' ? (
                            <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
                          ) : (
                            <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                          )}
                          {result.quiz_type === 'exam' ? 'Examen' : 'Quiz'} : {result.quiz_id}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(result.created_at), 'dd MMM yyyy à HH:mm', { locale: fr })}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${result.passed ? 'text-green-500' : 'text-red-500'}`}>
                        {result.score}/{result.total_questions}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {result.percentage}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-4">
                  Aucun résultat pour le moment
                </p>
                <Button onClick={() => navigate('/modules')}>
                  Commencer un quiz
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Failed Questions Summary */}
        {stats.failedQuestions.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <AlertCircle className="h-5 w-5" />
                Questions à retravailler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Vous avez {stats.failedQuestions.length} question(s) à réviser.
              </p>
              <Button onClick={() => navigate('/revision-erreurs')}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Réviser mes erreurs
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default ProgressPage;
