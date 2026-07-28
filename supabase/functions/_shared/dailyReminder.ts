/**
 * Rappel quotidien : qui relancer, et à quelle heure.
 *
 * La tâche planifiée s'exécute toutes les heures et c'est ce fichier qui
 * décide d'envoyer ou non. pg_cron ne connaît que l'heure UTC : programmer
 * « 19 h » en dur enverrait à 20 h l'hiver ou à 18 h l'été. On raisonne donc
 * en heure de Paris à chaque exécution.
 */

/** 19 h : après la journée de travail, avant la soirée. */
export const REMINDER_HOUR_PARIS = 19;

const parisFormatter = new Intl.DateTimeFormat('fr-FR', {
  timeZone: 'Europe/Paris',
  hour: '2-digit',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour12: false,
});

const parisParts = (now: Date) => {
  const parts = Object.fromEntries(
    parisFormatter.formatToParts(now).map((part) => [part.type, part.value])
  );
  return parts as Record<'year' | 'month' | 'day' | 'hour', string>;
};

/** Date du jour à Paris, au format AAAA-MM-JJ (clé des défis quotidiens). */
export const parisDay = (now: Date): string => {
  const { year, month, day } = parisParts(now);
  return `${year}-${month}-${day}`;
};

export const parisHour = (now: Date): number => Number(parisParts(now).hour);

export const isReminderHour = (now: Date): boolean => parisHour(now) === REMINDER_HOUR_PARIS;

export interface SubscriptionRecord {
  user_id: string;
  endpoint: string;
  last_reminded_at: string | null;
}

export interface ProfileRecord {
  id: string;
  access_expires_at: string | null;
}

/**
 * Appareils à notifier ce soir : ceux d'un apprenant encore actif, qui n'a
 * pas fait son défi du jour et qu'on n'a pas déjà relancé aujourd'hui.
 */
export const selectDailyReminderTargets = ({
  subscriptions,
  profiles,
  challengeDoneUserIds,
  today,
}: {
  subscriptions: SubscriptionRecord[];
  profiles: ProfileRecord[];
  challengeDoneUserIds: string[];
  today: string;
}): SubscriptionRecord[] => {
  const done = new Set(challengeDoneUserIds);

  // Un accès arrivé à échéance ne doit plus déclencher de rappel : l'élève
  // ne pourrait de toute façon plus ouvrir l'application.
  const active = new Set(
    profiles
      .filter((p) => !p.access_expires_at || p.access_expires_at >= today)
      .map((p) => p.id)
  );

  return subscriptions.filter(
    (sub) =>
      active.has(sub.user_id) &&
      !done.has(sub.user_id) &&
      // Garde-fou anti-doublon : une relance par appareil et par jour.
      !(sub.last_reminded_at && parisDay(new Date(sub.last_reminded_at)) === today)
  );
};
