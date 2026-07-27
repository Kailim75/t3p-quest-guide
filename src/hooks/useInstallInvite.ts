import { useCallback, useState } from 'react';
import { usePWA } from '@/hooks/usePWA';

const DISMISSED_KEY = 't3p-install-banner-dismissed';

/** Durée pendant laquelle on n'importune plus après un « plus tard ». */
const SNOOZE_DAYS = 14;

const isSnoozed = () => {
  const until = localStorage.getItem(DISMISSED_KEY);
  return until !== null && Date.now() < Number(until);
};

/**
 * Faut-il afficher l'invitation à installer l'application ?
 *
 * Sert aussi à éviter d'empiler les sollicitations : tant que cette
 * invitation est visible, on ne propose pas encore les rappels
 * (voir ReminderPrompt).
 */
export const useInstallInvite = () => {
  const { canPromptInstall, isInstallable, isIOS, installApp } = usePWA();
  const [snoozed, setSnoozed] = useState(isSnoozed);

  const snooze = useCallback(() => {
    localStorage.setItem(DISMISSED_KEY, String(Date.now() + SNOOZE_DAYS * 86_400_000));
    setSnoozed(true);
  }, []);

  return {
    visible: canPromptInstall && !snoozed,
    isInstallable,
    isIOS,
    installApp,
    snooze,
  };
};
