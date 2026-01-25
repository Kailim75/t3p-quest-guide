import { Badge } from '@/hooks/useBadges';
import ShareButton from './ShareButton';
import { Card, CardContent } from '@/components/ui/card';

interface BadgeShareCardProps {
  badge: Badge & { unlocked: boolean; unlockedAt?: string };
  userName?: string;
}

const BadgeShareCard = ({ badge, userName }: BadgeShareCardProps) => {
  if (!badge.unlocked) return null;

  const shareText = userName 
    ? `🏆 ${userName} a débloqué le badge "${badge.name}" sur T3P Quest Guide ! ${badge.icon}`
    : `🏆 J'ai débloqué le badge "${badge.name}" sur T3P Quest Guide ! ${badge.icon}`;

  return (
    <ShareButton
      title={`Badge débloqué : ${badge.name}`}
      text={shareText}
      variant="ghost"
      size="sm"
    />
  );
};

export default BadgeShareCard;
