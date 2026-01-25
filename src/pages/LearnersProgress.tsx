import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin } from '@/hooks/useAdmin';
import { useLearnersProgress, LearnerStats } from '@/hooks/useLearnersProgress';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Users,
  GraduationCap,
  TrendingUp,
  Trophy,
  Flame,
  ArrowLeft,
  Loader2,
  CheckCircle,
  XCircle,
  Activity,
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const LearnersProgressPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, isCheckingAdmin: adminLoading } = useAdmin();
  const { learnersStats, globalStats, isLoading } = useLearnersProgress();
  const [selectedLearner, setSelectedLearner] = useState<LearnerStats | null>(null);

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">Connexion requise</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">Accès réservé aux administrateurs</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  const getScoreVariant = (score: number): 'default' | 'secondary' | 'destructive' => {
    if (score >= 70) return 'default';
    if (score >= 50) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Suivi des Apprenants</h1>
            <p className="text-muted-foreground">Suivez la progression de tous vos apprenants</p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Global Stats */}
            <div className="grid gap-4 md:grid-cols-5 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Apprenants</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{globalStats.totalLearners}</div>
                  <p className="text-xs text-muted-foreground">
                    {globalStats.activeLearners} actifs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Quiz réalisés</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{globalStats.totalQuizzesTaken}</div>
                  <p className="text-xs text-muted-foreground">Total des sessions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Score moyen</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{globalStats.averageGlobalScore}%</div>
                  <Progress value={globalStats.averageGlobalScore} className="mt-2 h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taux de réussite</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{globalStats.globalPassRate}%</div>
                  <Progress value={globalStats.globalPassRate} className="mt-2 h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Moyenne/apprenant</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {globalStats.activeLearners > 0
                      ? Math.round(globalStats.totalQuizzesTaken / globalStats.activeLearners)
                      : 0}
                  </div>
                  <p className="text-xs text-muted-foreground">quiz par apprenant</p>
                </CardContent>
              </Card>
            </div>

            {/* Learners Table */}
            <Card>
              <CardHeader>
                <CardTitle>Liste des apprenants</CardTitle>
                <CardDescription>
                  Cliquez sur un apprenant pour voir ses détails
                </CardDescription>
              </CardHeader>
              <CardContent>
                {learnersStats.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun apprenant inscrit pour le moment
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Apprenant</TableHead>
                        <TableHead className="text-center">Quiz</TableHead>
                        <TableHead className="text-center">Examens</TableHead>
                        <TableHead className="text-center">Score moyen</TableHead>
                        <TableHead className="text-center">Réussite</TableHead>
                        <TableHead className="text-center">Série</TableHead>
                        <TableHead className="text-center">Badges</TableHead>
                        <TableHead>Dernière activité</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {learnersStats.map((learner) => (
                        <TableRow 
                          key={learner.userId}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedLearner(learner)}
                        >
                          <TableCell>
                            <div>
                              <p className="font-medium">
                                {learner.profile.display_name || 'Sans nom'}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {learner.profile.email}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline">{learner.totalQuizzes}</Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline">{learner.totalExams}</Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant={getScoreVariant(learner.averageScore)}>
                              {learner.averageScore}%
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1">
                              {learner.passRate >= 70 ? (
                                <CheckCircle className="h-4 w-4 text-primary" />
                              ) : (
                                <XCircle className="h-4 w-4 text-destructive" />
                              )}
                              <span>{learner.passRate}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Flame className="h-4 w-4 text-primary" />
                              <span>{learner.currentStreak}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Trophy className="h-4 w-4 text-primary" />
                              <span>{learner.badgesCount}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {learner.lastActivity ? (
                              <span className="text-sm text-muted-foreground">
                                {format(new Date(learner.lastActivity), 'dd MMM yyyy', { locale: fr })}
                              </span>
                            ) : (
                              <span className="text-sm text-muted-foreground">Aucune</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </main>

      {/* Learner Detail Dialog */}
      <Dialog open={!!selectedLearner} onOpenChange={() => setSelectedLearner(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedLearner?.profile.display_name || 'Apprenant'}
            </DialogTitle>
            <DialogDescription>
              {selectedLearner?.profile.email}
            </DialogDescription>
          </DialogHeader>
          
          {selectedLearner && (
            <ScrollArea className="max-h-[60vh]">
              <div className="space-y-6 p-1">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">{selectedLearner.totalQuizzes}</p>
                          <p className="text-sm text-muted-foreground">Quiz réalisés</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">{selectedLearner.averageScore}%</p>
                          <p className="text-sm text-muted-foreground">Score moyen</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <Flame className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">{selectedLearner.currentStreak}</p>
                          <p className="text-sm text-muted-foreground">
                            Série actuelle (max: {selectedLearner.longestStreak})
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <Trophy className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">{selectedLearner.badgesCount}</p>
                          <p className="text-sm text-muted-foreground">Badges débloqués</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Progress Bar */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Progression vers l'objectif (70%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={selectedLearner.averageScore} className="h-3" />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>{selectedLearner.averageScore}% actuel</span>
                      <span>Objectif: 70%</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Taux de réussite</p>
                    <p className="font-medium">{selectedLearner.passRate}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Examens blancs</p>
                    <p className="font-medium">{selectedLearner.totalExams}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Inscrit le</p>
                    <p className="font-medium">
                      {format(new Date(selectedLearner.profile.created_at), 'dd MMMM yyyy', { locale: fr })}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Dernière activité</p>
                    <p className="font-medium">
                      {selectedLearner.lastActivity 
                        ? format(new Date(selectedLearner.lastActivity), 'dd MMMM yyyy', { locale: fr })
                        : 'Aucune'}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LearnersProgressPage;
