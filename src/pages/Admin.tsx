import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin, AppRole } from '@/hooks/useAdmin';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Loader2
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

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
  const { isAdmin, isCheckingAdmin, users, isLoadingUsers, addRole, removeRole } = useAdmin();
  const { toast } = useToast();

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
              Gérez les utilisateurs et leurs rôles
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{users.length}</p>
                  <p className="text-xs text-muted-foreground">Utilisateurs inscrits</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <Crown className="h-5 w-5 text-yellow-500" />
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
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Shield className="h-5 w-5 text-green-500" />
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

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Liste des utilisateurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingUsers ? (
              <div className="flex items-center justify-center h-32">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : users.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilisateur</TableHead>
                      <TableHead>Rôles</TableHead>
                      <TableHead>Inscrit le</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((userItem) => (
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
                  Aucun utilisateur inscrit
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPage;
