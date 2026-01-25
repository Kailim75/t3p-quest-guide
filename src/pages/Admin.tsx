import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin, AppRole } from '@/hooks/useAdmin';
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
  FileQuestion
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
  const { isAdmin, isCheckingAdmin, users, isLoadingUsers, addRole, removeRole, approveUser, rejectUser } = useAdmin();
  const { toast } = useToast();

  const pendingUsers = users.filter(u => !u.is_approved);
  const approvedUsers = users.filter(u => u.is_approved);

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
                    <div className="p-2 rounded-lg bg-accent">
                      <Crown className="h-5 w-5 text-accent-foreground" />
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
                              <Badge variant="default" className="bg-green-600">
                                <UserCheck className="h-3 w-3 mr-1" />
                                Approuvé
                              </Badge>
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
