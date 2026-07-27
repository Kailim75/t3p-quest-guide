import { useEffect, useState } from 'react';
import { Bell, BellOff, X, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useInstallInvite } from '@/hooks/useInstallInvite';
import { enablePush, getPushStatus, type PushStatus } from '@/lib/pushNotifications';
import { useToast } from '@/hooks/use-toast';

const DISMISSED_KEY = 't3p-reminder-prompt-dismissed';
const SNOOZE_DAYS = 30;

const isSnoozed = () => {
  const until = localStorage.getItem(DISMISSED_KEY);
  return until !== null && Date.now() < Number(until);
};

/**
 * Proposition d'activer les rappels de révision.
 *
 * On ne l'affiche pas tant que l'invitation à installer est visible : deux
 * sollicitations d'affilée sur l'accueil, c'est une de trop. Sur iPhone, les
 * rappels ne sont de toute façon possibles qu'une fois l'app installée.
 */
const ReminderPrompt = () => {
  const { user } = useAuth();
  const { visible: installInviteVisible } = useInstallInvite();
  const { toast } = useToast();

  const [status, setStatus] = useState<PushStatus | null>(null);
  const [pending, setPending] = useState(false);
  const [dismissed, setDismissed] = useState(isSnoozed);

  useEffect(() => {
    void getPushStatus().then(setStatus);
  }, []);

  if (!user || dismissed || installInviteVisible || status !== 'disabled') return null;

  const snooze = () => {
    localStorage.setItem(DISMISSED_KEY, String(Date.now() + SNOOZE_DAYS * 86_400_000));
    setDismissed(true);
  };

  const activate = async () => {
    setPending(true);
    try {
      const next = await enablePush(user.id);
      setStatus(next);
      if (next === 'enabled') {
        toast({
          title: 'Rappels activés',
          description: 'Vous recevrez une notification quand il sera temps de réviser.',
        });
      } else if (next === 'denied') {
        toast({
          title: 'Notifications bloquées',
          description:
            'Autorisez les notifications pour ce site dans les réglages de votre téléphone.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: "Impossible d'activer les rappels",
        description: error instanceof Error ? error.message : 'Réessayez dans un instant.',
        variant: 'destructive',
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="container mx-auto px-4 pt-6">
      <div className="relative flex flex-col gap-4 rounded-2xl border bg-card p-5 sm:flex-row sm:items-center">
        <button
          onClick={snooze}
          aria-label="Masquer cette proposition"
          className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Bell className="h-6 w-6 text-primary" />
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="pr-6 font-semibold text-foreground">Vos rappels de révision</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Une notification quand vos questions ratées reviennent — cinq minutes par jour
            suffisent pour ne rien perdre.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:w-44">
          <button onClick={activate} disabled={pending} className="btn-cta w-full justify-center">
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
            Activer
          </button>
          <button
            onClick={snooze}
            className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            <BellOff className="h-3.5 w-3.5" />
            Non merci
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReminderPrompt;
