import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin, AppRole, isAccessExpired } from '@/hooks/useAdmin';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Shield, 
  Users, 
  AlertCircle, 
  MoreHorizontal,
  UserPlus,
  UserMinus,
  Crown,
  Loader2,
  UserCheck,
  UserX,
  Clock,
  FileQuestion,
  BarChart3,
  Archive,
  ArchiveRestore
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import QuestionsManager from '@/components/admin/QuestionsManager';

const roleLabels: Record<AppRole, string> = {
  admin: 'Administrateur',
  moderator: 'Modérateur',
  user: 'Utilisateur',
};

const roleBadgeVariants: Record<AppRole, 'default' | 'secondary' | 'outline'> = {
  admin: 'default',
  moderator: 'secondary',
  user: 'outline',
};

const AdminPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, isCheckingAdmin, users, isLoadingUsers, addRole, removeRole, approveUser, rejectUser, setAccessExpiry, archiveUser, unarchiveUser } = useAdmin();
  const { toast } = useToast();

  // Les apprenants archivés sortent des listes actives (ils ne repartent pas
  // dans la file « en attente ») mais gardent tout leur historique.
  const pendingUsers = users.filter(u => !u.is_approved && !u.archived_at);
  const approvedUsers = users.filter(u => u.is_approved && !u.archived_at);
  const archivedUsers = users.filter(u => !!u.archived_at);

  const handleSetExpiry = async (userId: string, value: string) => {
    // <input type="date"> renvoie '' quand on efface : on retire alors la limite.
    // Sinon l'accès court jusqu'à la fin de la journée choisie.
    const expiresAt = value ? new Date(`${value}T23:59:59`).toISOString() : null;
    try {
      await setAccessExpiry.mutateAsync({ userId, expiresAt });
      toast({
        title: expiresAt ? 'Date de fin d\'accès enregistrée' : 'Accès sans limite',
        description: expiresAt
          ? `L'apprenant pourra utiliser l'application jusqu'au ${new Date(expiresAt).toLocaleDateString('fr-FR')} inclus.`
          : "L'apprenant garde un accès sans date de fin.",
      });
    } catch {
      toast({
        title: 'Erreur',
        description: "Impossible d'enregistrer la date de fin d'accès.",
        variant: 'destructive',
      });
    }
  };

  const handleArchive = async (userId: string, name: string) => {
    if (!window.confirm(`Archiver ${name} ? Son accès sera fermé immédiatement, mais toute sa progression sera conservée. Vous pourrez le réactiver à tout moment.`)) return;
    try {
      await archiveUser.mutateAsync(userId);
      toast({
        title: 'Apprenant archivé',
        description: `${name} ne peut plus se connecter. Son historique est conservé.`,
      });
    } catch {
      toast({ title: 'Erreur', description: "Impossible d'archiver cet apprenant.", variant: 'destructive' });
    }
  };

  const handleUnarchive = async (userId: string, name: string) => {
    try {
      await unarchiveUser.mutateAsync(userId);
      toast({
        title: 'Apprenant réactivé',
        description: `${name} peut de nouveau se connecter.`,
      });
    } catch {
      toast({ title: 'Erreur', description: 'Impossible de réactiver cet apprenant.', variant: 'destructive' });
    }
  };

  const handleAddRole = async (userId: string, role: AppRole) => {
    try {
      await addRole.mutateAsync({ userId, role });
      toast({
        title: 'Rôle ajouté',
        description: `Le rôle ${roleLabels[role]} a été attribué.`,
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible d\'ajouter le rôle.',
        variant: 'destructive',
      });
    }
  };

  const handleRemoveRole = async (userId: string, role: AppRole) => {
    try {
      await removeRole.mutateAsync({ userId, role });
      toast({
        title: 'Rôle retiré',
        description: `Le rôle ${roleLabels[role]} a été retiré.`,
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de retirer le rôle.',
        variant: 'destructive',
      });
    }
  };

  const handleApproveUser = async (userId: string) => {
    try {
      await approveUser.mutateAsync(userId);
      toast({
        title: 'Utilisateur approuvé',
        description: 'L\'utilisateur peut maintenant accéder à l\'application.',
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible d\'approuver l\'utilisateur.',
        variant: 'destructive',
      });
    }
  };

  const handleRejectUser = async (userId: string) => {
    try {
      await rejectUser.mutateAsync(userId);
      toast({
        title: 'Accès révoqué',
        description: 'L\'accès de l\'utilisateur a été révoqué.',
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de révoquer l\'accès.',
        variant: 'destructive',
      });
    }
  };

  if (authLoading || isCheckingAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
              Connectez-vous pour accéder à cette page.
            </p>
            <Button onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Accès refusé
            </h1>
            <p className="text-muted-foreground mb-6">
              Vous n'avez pas les permissions nécessaires pour accéder à cette page.
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
        <div className="flex items-center gap-4 mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
            <Shield className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Administration
            </h1>
            <p className="text-muted-foreground">
              Gérez les utilisateurs, rôles et questions
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <Button onClick={() => navigate('/admin/learners')} variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Suivi des apprenants
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Utilisateurs
            </TabsTrigger>
            <TabsTrigger value="questions" className="flex items-center gap-2">
              <FileQuestion className="h-4 w-4" />
              Questions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10">
                      <Clock className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{pendingUsers.length}</p>
                      <p className="text-xs text-muted-foreground">En attente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{approvedUsers.length}</p>
                      <p className="text-xs text-muted-foreground">Utilisateurs approuvés</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cta">
                      <Crown className="h-5 w-5 text-cta-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        {users.filter(u => u.roles.includes('admin')).length}
                      </p>
                      <p className="text-xs text-muted-foreground">Administrateurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Shield className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        {users.filter(u => u.roles.includes('moderator')).length}
                      </p>
                      <p className="text-xs text-muted-foreground">Modérateurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Approvals */}
            {pendingUsers.length > 0 && (
              <Card className="border-orange-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    <Clock className="h-5 w-5" />
                    Inscriptions en attente ({pendingUsers.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Utilisateur</TableHead>
                          <TableHead>Inscrit le</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingUsers.map((userItem) => (
                          <TableRow key={userItem.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">
                                  {userItem.display_name || 'Sans nom'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {userItem.email}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              {format(new Date(userItem.created_at), 'dd MMM yyyy à HH:mm', { locale: fr })}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleApproveUser(userItem.id)}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <UserCheck className="h-4 w-4 mr-1" />
                                  Approuver
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Approved Users Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Utilisateurs approuvés
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoadingUsers ? (
                  <div className="flex items-center justify-center h-32">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : approvedUsers.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Utilisateur</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Accès jusqu'au</TableHead>
                          <TableHead>Rôles</TableHead>
                          <TableHead>Inscrit le</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {approvedUsers.map((userItem) => (
                          <TableRow key={userItem.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">
                                  {userItem.display_name || 'Sans nom'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {userItem.email}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              {isAccessExpired(userItem.access_expires_at) ? (
                                <Badge variant="destructive">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Accès expiré
                                </Badge>
                              ) : (
                                <Badge variant="default" className="bg-green-600">
                                  <UserCheck className="h-3 w-3 mr-1" />
                                  Approuvé
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <input
                                type="date"
                                aria-label={`Fin d'accès de ${userItem.display_name || userItem.email}`}
                                defaultValue={
                                  userItem.access_expires_at
                                    ? format(new Date(userItem.access_expires_at), 'yyyy-MM-dd')
                                    : ''
                                }
                                onChange={(e) => handleSetExpiry(userItem.id, e.target.value)}
                                className="rounded-md border bg-background px-2 py-1 text-sm"
                              />
                              <p className="mt-1 text-[11px] text-muted-foreground">
                                {userItem.access_expires_at ? 'Désactivation automatique' : 'Sans limite'}
                              </p>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {userItem.roles.length > 0 ? (
                                  userItem.roles.map((role) => (
                                    <Badge 
                                      key={role} 
                                      variant={roleBadgeVariants[role]}
                                    >
                                      {roleLabels[role]}
                                    </Badge>
                                  ))
                                ) : (
                                  <span className="text-muted-foreground text-sm">
                                    Aucun rôle
                                  </span>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              {format(new Date(userItem.created_at), 'dd MMM yyyy', { locale: fr })}
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  {userItem.id !== user?.id && (
                                    <DropdownMenuItem 
                                      onClick={() => handleRejectUser(userItem.id)}
                                      className="text-destructive"
                                    >
                                      <UserX className="mr-2 h-4 w-4" />
                                      Révoquer l'accès
                                    </DropdownMenuItem>
                                  )}
                                  {userItem.id !== user?.id && (
                                    <DropdownMenuItem
                                      onClick={() => handleArchive(userItem.id, userItem.display_name || userItem.email)}
                                    >
                                      <Archive className="mr-2 h-4 w-4" />
                                      Archiver (fin de formation)
                                    </DropdownMenuItem>
                                  )}
                                  {!userItem.roles.includes('admin') && (
                                    <DropdownMenuItem
                                      onClick={() => handleAddRole(userItem.id, 'admin')}
                                    >
                                      <UserPlus className="mr-2 h-4 w-4" />
                                      Promouvoir Admin
                                    </DropdownMenuItem>
                                  )}
                                  {userItem.roles.includes('admin') && userItem.id !== user?.id && (
                                    <DropdownMenuItem 
                                      onClick={() => handleRemoveRole(userItem.id, 'admin')}
                                      className="text-destructive"
                                    >
                                      <UserMinus className="mr-2 h-4 w-4" />
                                      Retirer Admin
                                    </DropdownMenuItem>
                                  )}
                                  {!userItem.roles.includes('moderator') && (
                                    <DropdownMenuItem 
                                      onClick={() => handleAddRole(userItem.id, 'moderator')}
                                    >
                                      <UserPlus className="mr-2 h-4 w-4" />
                                      Ajouter Modérateur
                                    </DropdownMenuItem>
                                  )}
                                  {userItem.roles.includes('moderator') && (
                                    <DropdownMenuItem 
                                      onClick={() => handleRemoveRole(userItem.id, 'moderator')}
                                      className="text-destructive"
                                    >
                                      <UserMinus className="mr-2 h-4 w-4" />
                                      Retirer Modérateur
                                    </DropdownMenuItem>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">
                      Aucun utilisateur approuvé
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Apprenants archivés : accès fermé, historique conservé */}
            {archivedUsers.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Archive className="h-5 w-5 text-muted-foreground" />
                    Apprenants archivés ({archivedUsers.length})
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Formation terminée : ils ne peuvent plus se connecter, mais toute leur
                    progression est conservée. Vous pouvez les réactiver à tout moment.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Apprenant</TableHead>
                          <TableHead>Archivé le</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {archivedUsers.map((userItem) => (
                          <TableRow key={userItem.id} className="opacity-75">
                            <TableCell>
                              <div>
                                <p className="font-medium">{userItem.display_name || 'Sans nom'}</p>
                                <p className="text-sm text-muted-foreground">{userItem.email}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-muted-foreground">
                                {userItem.archived_at
                                  ? format(new Date(userItem.archived_at), 'dd MMM yyyy', { locale: fr })
                                  : '—'}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleUnarchive(userItem.id, userItem.display_name || userItem.email)}
                              >
                                <ArchiveRestore className="h-4 w-4 mr-1.5" />
                                Réactiver
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="questions">
            <QuestionsManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;
