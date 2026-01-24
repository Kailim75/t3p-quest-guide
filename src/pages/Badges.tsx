import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useBadges, Badge } from '@/hooks/useBadges';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  AlertCircle, 
  Flame,
  Lock,
  Loader2
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BadgeCardProps {
  badge: Badge & { unlocked: boolean; unlockedAt?: string };
}

const BadgeCard = ({ badge }: BadgeCardProps) => {
  return (
    <div 
      className={`relative p-4 rounded-xl border-2 transition-all ${
        badge.unlocked 
          ? 'bg-card border-primary/30 shadow-sm' 
          : 'bg-muted/30 border-transparent opacity-60'
      }`}
    >
      {!badge.unlocked && (
        <div className="absolute top-2 right-2">
          <Lock className="h-4 w-4 text-muted-foreground" />
        </div>
      )}
      
      <div className="text-center">
        <div className={`text-4xl mb-2 ${!badge.unlocked && 'grayscale'}`}>
          {badge.icon}
        </div>
        <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
        
        {badge.unlocked && badge.unlockedAt ? (
          <p className="text-xs text-primary">
            Débloqué le {format(new Date(badge.unlockedAt), 'dd MMM yyyy', { locale: fr })}
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">{badge.requirement}</p>
        )}
      </div>
    </div>
  );
};

const BadgesPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { badges, unlockedCount, totalBadges, streak, longestStreak, isLoading } = useBadges();

  if (authLoading || isLoading) {
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
              Connectez-vous pour voir vos badges et succès.
            </p>
            <Button onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const progressPercent = (unlockedCount / totalBadges) * 100;

  const categoryLabels: Record<string, string> = {
    progression: '📚 Progression',
    performance: '🏆 Performance',
    streak: '🔥 Régularité',
    special: '⭐ Spécial',
  };

  const badgesByCategory = badges.reduce((acc, badge) => {
    if (!acc[badge.category]) {
      acc[badge.category] = [];
    }
    acc[badge.category].push(badge);
    return acc;
  }, {} as Record<string, typeof badges>);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
            <Trophy className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Mes Badges
          </h1>
          <p className="text-muted-foreground">
            Débloquez des succès en progressant
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{unlockedCount}</p>
                <p className="text-xs text-muted-foreground">Badges débloqués</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-muted-foreground">{totalBadges - unlockedCount}</p>
                <p className="text-xs text-muted-foreground">Badges restants</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2">
                <Flame className="h-6 w-6 text-orange-500" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-500">{streak}</p>
                  <p className="text-xs text-muted-foreground">Jours de suite</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">{longestStreak}</p>
                <p className="text-xs text-muted-foreground">Record série</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progression globale</span>
              <span className="text-sm font-bold text-primary">
                {unlockedCount}/{totalBadges}
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              {progressPercent === 100 
                ? '🎉 Félicitations ! Vous avez débloqué tous les badges !'
                : `Encore ${totalBadges - unlockedCount} badge${totalBadges - unlockedCount > 1 ? 's' : ''} à débloquer`
              }
            </p>
          </CardContent>
        </Card>

        {/* Badges by Category */}
        {Object.entries(badgesByCategory).map(([category, categoryBadges]) => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{categoryLabels[category]}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categoryBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-8">
          <Button onClick={() => navigate('/modules')}>
            Continuer à réviser
          </Button>
        </div>
      </main>
    </div>
  );
};

export default BadgesPage;
