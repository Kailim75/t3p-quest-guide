import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin } from '@/hooks/useAdmin';
import { useLearnersProgress, LearnerStats } from '@/hooks/useLearnersProgress';
import Header from '@/components/Header';
import LearnersCharts from '@/components/admin/LearnersCharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
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
  AlertTriangle,
  Moon,
  Download,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { format, differenceInCalendarDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState } from 'react';
import { ModuleIcon } from '@/lib/moduleIcons';
import { getModuleById } from '@/data/quizData';
import { useQuizQuestions } from '@/hooks/useQuizQuestions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const INACTIVITY_DAYS = 7;

/** Libellé lisible d'un « seau » de résultats (module, examen blanc ou défi). */
const bucketLabel = (bucketId: string, isExam: boolean): string => {
  if (bucketId === 'defi') return 'Défi du jour';
  const examNames: Record<string, string> = {
    admissibilite: 'Examen blanc — Admissibilité',
    'admission-taxi': 'Examen blanc — Taxi',
    'admission-vtc': 'Examen blanc — VTC',
    'admission-vmdtr': 'Examen blanc — VMDTR',
  };
  if (isExam || examNames[bucketId]) return examNames[bucketId] ?? bucketId;
  return getModuleById(bucketId)?.name ?? bucketId;
};

/** Nombre de jours sans activité (null = jamais actif). */
const daysInactive = (lastActivity: string | null): number | null =>
  lastActivity ? differenceInCalendarDays(new Date(), new Date(lastActivity)) : null;

const LearnersProgressPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, isCheckingAdmin: adminLoading } = useAdmin();
  const { learnersStats, globalStats, hardestQuestions, moduleAverages, allResults, profiles, isLoading } = useLearnersProgress();
  const { getByIds } = useQuizQuestions();
  const [selectedLearner, setSelectedLearner] = useState<LearnerStats | null>(null);
  const [showInactiveOnly, setShowInactiveOnly] = useState(false);

  // Sélection des apprenants à relancer (cases à cocher dans la liste).
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const isInactive = (learner: LearnerStats) => {
    const days = daysInactive(learner.lastActivity);
    return days === null || days >= INACTIVITY_DAYS;
  };
  const inactiveCount = learnersStats.filter(isInactive).length;
  const shownLearners = showInactiveOnly ? learnersStats.filter(isInactive) : learnersStats;

  const toggleSelected = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
  const selectInactifs = () =>
    setSelectedIds(new Set(learnersStats.filter(isInactive).map((l) => l.userId)));
  const selectAllShown = () => setSelectedIds(new Set(shownLearners.map((l) => l.userId)));
  const clearSelection = () => setSelectedIds(new Set());

  const selectedLearners = learnersStats.filter((l) => selectedIds.has(l.userId));

  const hardestQuestionDetails = hardestQuestions.map((h) => ({
    ...h,
    question: getByIds([h.questionId])[0],
  }));

  const exportCsv = () => {
    const header = ['Apprenant', 'Email', 'Quiz', 'Examens', 'Score moyen (%)', 'Réussite (%)', 'Série', 'Badges', 'Dernière activité'];
    const rows = learnersStats.map((l) => [
      l.profile.display_name ?? 'Sans nom',
      l.profile.email ?? '',
      l.totalQuizzes,
      l.totalExams,
      l.averageScore,
      l.passRate,
      l.currentStreak,
      l.badgesCount,
      l.lastActivity ? format(new Date(l.lastActivity), 'dd/MM/yyyy HH:mm') : 'jamais',
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(';'))
      .join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `suivi-apprenants-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Relance par email de la sélection : ouvre le logiciel de messagerie du
  // formateur avec un message prêt à envoyer (destinataires en copie cachée
  // pour ne pas exposer les adresses entre élèves). Rien n'est envoyé
  // automatiquement — le formateur relit et envoie lui-même.
  const relanceEmailSelection = () => {
    const emails = selectedLearners
      .map((l) => l.profile.email)
      .filter((e): e is string => !!e);
    if (emails.length === 0) return;

    const subject = 'Reprenez votre préparation à l\'examen T3P';
    const body = [
      'Bonjour,',
      '',
      'Nous avons remarqué que vous ne vous êtes pas connecté(e) depuis quelques jours à votre application de préparation à l\'examen T3P.',
      '',
      'La régularité est la clé de la réussite : quelques minutes par jour suffisent.',
      '',
      'Reconnectez-vous dès maintenant pour :',
      '• relever votre défi du jour (5 questions rapides) ;',
      '• vous entraîner sur vos modules et refaire vos erreurs ;',
      '• relire vos fiches de cours.',
      '',
      '👉 https://www.t3pcampus.com',
      '',
      'À très vite,',
      'L\'équipe pédagogique — École T3P',
    ].join('\r\n');

    const link = `mailto:${encodeURIComponent(user?.email ?? '')}?bcc=${encodeURIComponent(emails.join(','))}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = link;
  };

  // Relance WhatsApp d'un apprenant : ouvre WhatsApp avec un message
  // pré-rempli ; le formateur choisit le contact et envoie. WhatsApp ne
  // permettant qu'une conversation à la fois, la relance est individuelle.
  const relanceWhatsApp = (learner: LearnerStats) => {
    const prenom = (learner.profile.display_name || '').split(' ')[0];
    const message = [
      `Bonjour ${prenom || ''}`.trim() + ' 👋',
      "On ne t'a pas vu sur l'application de préparation T3P depuis quelques jours.",
      'Quelques minutes par jour suffisent : relève ton défi du jour, refais tes erreurs et relis tes fiches.',
      '👉 https://www.t3pcampus.com',
      "L'équipe École T3P",
    ].join('\n\n');
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  };

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
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 mb-8">
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

              <Card className={inactiveCount > 0 ? 'border-warning/40' : ''}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inactifs {INACTIVITY_DAYS} j+</CardTitle>
                  <Moon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{inactiveCount}</div>
                  <p className="text-xs text-muted-foreground">à relancer</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <LearnersCharts allResults={allResults} profiles={profiles} />

            {/* Analyse pédagogique : questions ratées et modules faibles */}
            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Questions les plus ratées de la promo
                  </CardTitle>
                  <CardDescription>
                    À cibler en cours — une question ratée par presque tout le monde peut aussi être mal rédigée
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {hardestQuestionDetails.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-4 text-center">
                      Pas encore assez de résultats pour dégager une tendance
                    </p>
                  ) : (
                    <ol className="space-y-3">
                      {hardestQuestionDetails.map((h, idx) => (
                        <li key={h.questionId} className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-xs font-bold text-warning mt-0.5">
                            {idx + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-foreground line-clamp-2">
                              {h.question?.text ?? h.questionId}
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              {h.question && (
                                <span className="flex items-center gap-1">
                                  <ModuleIcon moduleId={h.question.moduleId} className="h-3.5 w-3.5" />
                                  {getModuleById(h.question.moduleId)?.name ?? h.question.moduleId}
                                </span>
                              )}
                              <span className="font-medium text-warning">
                                {h.studentCount} élève{h.studentCount > 1 ? 's' : ''} · {h.occurrences} échec{h.occurrences > 1 ? 's' : ''}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Modules à retravailler
                  </CardTitle>
                  <CardDescription>
                    Score moyen de la promo par module, du plus faible au plus fort
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {moduleAverages.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-4 text-center">
                      Pas encore de résultats enregistrés
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {moduleAverages.map((m) => (
                        <div key={m.bucketId}>
                          <div className="mb-1 flex items-center justify-between gap-2 text-sm">
                            <span className="flex min-w-0 items-center gap-2 font-medium text-foreground">
                              <ModuleIcon moduleId={m.bucketId} className="h-4 w-4 shrink-0 text-primary" />
                              <span className="truncate">{bucketLabel(m.bucketId, m.isExam)}</span>
                            </span>
                            <span className="shrink-0 text-xs text-muted-foreground">
                              <span className={`font-bold ${m.averageScore < 70 ? 'text-destructive' : 'text-success'}`}>
                                {m.averageScore}%
                              </span>
                              {' '}· {m.attempts} session{m.attempts > 1 ? 's' : ''}
                            </span>
                          </div>
                          <Progress value={m.averageScore} className="h-2" />
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Learners Table */}
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle>Liste des apprenants</CardTitle>
                    <CardDescription>
                      Cochez les apprenants à relancer, ou utilisez le bouton WhatsApp par ligne.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      variant={showInactiveOnly ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setShowInactiveOnly(!showInactiveOnly)}
                    >
                      <Moon className="h-4 w-4 mr-1.5" />
                      Inactifs {INACTIVITY_DAYS} j+ ({inactiveCount})
                    </Button>
                    <Button variant="outline" size="sm" onClick={exportCsv}>
                      <Download className="h-4 w-4 mr-1.5" />
                      Exporter (CSV)
                    </Button>
                  </div>
                </div>

                {/* Barre de sélection et de relance */}
                <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border bg-secondary/40 p-3">
                  <span className="text-sm font-medium text-foreground">
                    {selectedIds.size > 0
                      ? `${selectedIds.size} sélectionné${selectedIds.size > 1 ? 's' : ''}`
                      : 'Sélectionner :'}
                  </span>
                  <Button variant="ghost" size="sm" onClick={selectInactifs} disabled={inactiveCount === 0}>
                    Les inactifs ({inactiveCount})
                  </Button>
                  <Button variant="ghost" size="sm" onClick={selectAllShown} disabled={shownLearners.length === 0}>
                    Tout
                  </Button>
                  {selectedIds.size > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearSelection}>
                      Effacer
                    </Button>
                  )}
                  <div className="ml-auto">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={relanceEmailSelection}
                      disabled={selectedIds.size === 0}
                      title={selectedIds.size === 0 ? 'Cochez au moins un apprenant' : undefined}
                    >
                      <Mail className="h-4 w-4 mr-1.5" />
                      Relancer par email ({selectedIds.size})
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {shownLearners.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    {showInactiveOnly
                      ? `Aucun apprenant inactif depuis ${INACTIVITY_DAYS} jours — tout le monde travaille !`
                      : 'Aucun apprenant inscrit pour le moment'}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-10">
                          <Checkbox
                            aria-label="Tout sélectionner"
                            checked={shownLearners.length > 0 && shownLearners.every((l) => selectedIds.has(l.userId))}
                            onCheckedChange={(v) => (v ? selectAllShown() : clearSelection())}
                          />
                        </TableHead>
                        <TableHead>Apprenant</TableHead>
                        <TableHead className="text-center">Quiz</TableHead>
                        <TableHead className="text-center">Examens</TableHead>
                        <TableHead className="text-center">Score moyen</TableHead>
                        <TableHead className="text-center">Réussite</TableHead>
                        <TableHead className="text-center">Série</TableHead>
                        <TableHead className="text-center">Badges</TableHead>
                        <TableHead>Dernière activité</TableHead>
                        <TableHead className="text-center">Relancer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {shownLearners.map((learner) => (
                        <TableRow
                          key={learner.userId}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedLearner(learner)}
                        >
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Checkbox
                              aria-label={`Sélectionner ${learner.profile.display_name || learner.profile.email}`}
                              checked={selectedIds.has(learner.userId)}
                              onCheckedChange={() => toggleSelected(learner.userId)}
                            />
                          </TableCell>
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
                              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                                {format(new Date(learner.lastActivity), 'dd MMM yyyy', { locale: fr })}
                                {isInactive(learner) && (
                                  <Badge variant="destructive" className="text-[10px]">
                                    inactif {daysInactive(learner.lastActivity)} j
                                  </Badge>
                                )}
                              </span>
                            ) : (
                              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                                Aucune
                                <Badge variant="destructive" className="text-[10px]">jamais actif</Badge>
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => relanceWhatsApp(learner)}
                              title="Relancer par WhatsApp (message pré-rempli)"
                              className="text-green-600 hover:text-green-700 hover:bg-green-600/10"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span className="ml-1.5 hidden sm:inline">WhatsApp</span>
                            </Button>
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
