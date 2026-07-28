import { describe, expect, it } from 'vitest';
import {
  isReminderHour,
  parisDay,
  selectDailyReminderTargets,
} from '../../supabase/functions/_shared/dailyReminder';

/**
 * La tâche planifiée tourne toutes les heures en UTC : c'est ce code qui
 * ramène tout à l'heure de Paris, pour que le rappel tombe à 19 h aussi bien
 * en été qu'en hiver.
 */
describe('créneau du rappel', () => {
  it('envoie à 19 h de Paris, heure d\'été comme heure d\'hiver', () => {
    // Juillet : Paris = UTC+2 → 19 h locales = 17 h UTC
    expect(isReminderHour(new Date('2026-07-28T17:00:00Z'))).toBe(true);
    expect(isReminderHour(new Date('2026-07-28T18:00:00Z'))).toBe(false);

    // Janvier : Paris = UTC+1 → 19 h locales = 18 h UTC
    expect(isReminderHour(new Date('2026-01-15T18:00:00Z'))).toBe(true);
    expect(isReminderHour(new Date('2026-01-15T17:00:00Z'))).toBe(false);
  });

  it('rattache une soirée à la bonne journée', () => {
    // 23 h 30 à Paris le 28 = déjà le 29 en UTC
    expect(parisDay(new Date('2026-07-28T21:30:00Z'))).toBe('2026-07-28');
  });
});

const subscription = (user_id: string, extra: Partial<{ last_reminded_at: string }> = {}) => ({
  user_id,
  endpoint: `https://push.example/${user_id}`,
  last_reminded_at: null,
  ...extra,
});

describe('sélection des apprenants à relancer', () => {
  const today = '2026-07-28';
  const profile = (id: string, access_expires_at: string | null = null) => ({
    id,
    access_expires_at,
  });

  it('relance un apprenant actif qui n\'a pas fait son défi', () => {
    const targets = selectDailyReminderTargets({
      subscriptions: [subscription('eleve-1')],
      profiles: [profile('eleve-1')],
      challengeDoneUserIds: [],
      today,
    });

    expect(targets.map((t) => t.user_id)).toEqual(['eleve-1']);
  });

  it('laisse tranquille celui qui a déjà fait son défi', () => {
    const targets = selectDailyReminderTargets({
      subscriptions: [subscription('eleve-1'), subscription('eleve-2')],
      profiles: [profile('eleve-1'), profile('eleve-2')],
      challengeDoneUserIds: ['eleve-1'],
      today,
    });

    expect(targets.map((t) => t.user_id)).toEqual(['eleve-2']);
  });

  it('ne relance pas un accès arrivé à échéance', () => {
    const targets = selectDailyReminderTargets({
      subscriptions: [subscription('parti'), subscription('en-cours')],
      profiles: [profile('parti', '2026-07-27'), profile('en-cours', '2026-08-31')],
      challengeDoneUserIds: [],
      today,
    });

    expect(targets.map((t) => t.user_id)).toEqual(['en-cours']);
  });

  it('ignore un apprenant archivé ou non approuvé (absent de la liste active)', () => {
    const targets = selectDailyReminderTargets({
      subscriptions: [subscription('archive')],
      profiles: [],
      challengeDoneUserIds: [],
      today,
    });

    expect(targets).toEqual([]);
  });

  it('n\'envoie pas deux fois le même jour', () => {
    const targets = selectDailyReminderTargets({
      subscriptions: [
        subscription('deja-relance', { last_reminded_at: '2026-07-28T17:00:00Z' }),
        subscription('relance-hier', { last_reminded_at: '2026-07-27T17:00:00Z' }),
      ],
      profiles: [profile('deja-relance'), profile('relance-hier')],
      challengeDoneUserIds: [],
      today,
    });

    expect(targets.map((t) => t.user_id)).toEqual(['relance-hier']);
  });
});
