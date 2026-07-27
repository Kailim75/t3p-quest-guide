import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/** iPhone / iPad : Safari n'émet pas d'événement d'installation automatique. */
const detectIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  // iPad récent : userAgent identique au Mac, mais écran tactile
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

export const usePWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isIOS] = useState(detectIOS);

  useEffect(() => {
    // Check if already installed (standalone : lancée depuis l'écran d'accueil)
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      // Safari iOS expose l'information autrement
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    ) {
      setIsInstalled(true);
    }

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    // Listen for app installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    // Listen for online/offline
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return false;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setIsInstallable(false);
      }
      
      setDeferredPrompt(null);
      return outcome === 'accepted';
    } catch (error) {
      console.error('Error installing app:', error);
      return false;
    }
  };

  return {
    isInstallable,
    isInstalled,
    isOnline,
    isIOS,
    /**
     * Faut-il proposer l'installation ?
     * Sur Android/Chrome, on attend l'événement d'installation ; sur iPhone,
     * il n'existe pas — on propose donc les instructions manuelles tant que
     * l'application n'est pas lancée depuis l'écran d'accueil.
     */
    canPromptInstall: !isInstalled && (isInstallable || isIOS),
    installApp,
  };
};
