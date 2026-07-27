import { supabase } from '@/integrations/supabase/client';

/**
 * Abonnement aux rappels de révision (Web Push).
 *
 * Sur iPhone, l'abonnement n'est possible que si l'application a été
 * installée sur l'écran d'accueil (iOS 16.4+) : Safari refuse la demande
 * de permission dans un onglet ordinaire. D'où l'invitation à installer
 * affichée en amont (voir InstallBanner).
 */

export type PushStatus =
  | 'unsupported' // navigateur sans Web Push
  | 'needs-install' // iPhone : l'app doit d'abord être sur l'écran d'accueil
  | 'denied' // l'élève a refusé (à réactiver dans les réglages du téléphone)
  | 'enabled'
  | 'disabled';

const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

export const isPushSupported = () =>
  'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;

/** État courant, sans rien demander à l'élève. */
export const getPushStatus = async (): Promise<PushStatus> => {
  if (!isPushSupported()) {
    // Safari iOS n'expose PushManager qu'une fois l'app installée.
    return isIOS() && !isStandalone() ? 'needs-install' : 'unsupported';
  }
  if (Notification.permission === 'denied') return 'denied';

  const registration = await navigator.serviceWorker.getRegistration();
  const subscription = await registration?.pushManager.getSubscription();
  return subscription ? 'enabled' : 'disabled';
};

/** La clé publique VAPID est servie par l'edge function (source unique). */
const fetchPublicKey = async (): Promise<string> => {
  const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/push-config`);
  if (!response.ok) throw new Error("Configuration des rappels indisponible");
  const { publicKey } = (await response.json()) as { publicKey?: string };
  if (!publicKey) throw new Error("Les rappels ne sont pas encore configurés");
  return publicKey;
};

/** base64url → Uint8Array, format attendu par pushManager.subscribe. */
const decodeKey = (base64: string) => {
  const padded = (base64 + '='.repeat((4 - (base64.length % 4)) % 4))
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const raw = atob(padded);
  return Uint8Array.from(raw, (char) => char.charCodeAt(0));
};

const encodeKey = (buffer: ArrayBuffer | null) =>
  buffer ? btoa(String.fromCharCode(...new Uint8Array(buffer))) : '';

/**
 * Demande la permission, souscrit et enregistre l'abonnement en base.
 * À n'appeler qu'en réponse à un geste de l'élève (bouton), sans quoi
 * les navigateurs refusent la demande de permission.
 */
export const enablePush = async (userId: string): Promise<PushStatus> => {
  const status = await getPushStatus();
  if (status === 'unsupported' || status === 'needs-install' || status === 'denied') return status;

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return permission === 'denied' ? 'denied' : 'disabled';

  const registration = await navigator.serviceWorker.ready;
  const subscription =
    (await registration.pushManager.getSubscription()) ??
    (await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: decodeKey(await fetchPublicKey()),
    }));

  const { error } = await supabase.from('push_subscriptions').upsert(
    {
      user_id: userId,
      endpoint: subscription.endpoint,
      p256dh: encodeKey(subscription.getKey('p256dh')),
      auth: encodeKey(subscription.getKey('auth')),
      user_agent: navigator.userAgent.slice(0, 300),
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: 'endpoint' }
  );
  if (error) throw error;

  return 'enabled';
};

/** Désabonne l'appareil courant (les autres appareils restent abonnés). */
export const disablePush = async (): Promise<PushStatus> => {
  const registration = await navigator.serviceWorker.getRegistration();
  const subscription = await registration?.pushManager.getSubscription();
  if (!subscription) return 'disabled';

  await supabase.from('push_subscriptions').delete().eq('endpoint', subscription.endpoint);
  await subscription.unsubscribe();
  return 'disabled';
};
