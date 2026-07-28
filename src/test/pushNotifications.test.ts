import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { getPushStatus, toBase64Url } from '@/lib/pushNotifications';

/**
 * L'état des rappels décide de ce qu'on affiche à l'élève. Le cas qui compte :
 * un iPhone hors écran d'accueil n'a pas de PushManager du tout — il faut
 * l'orienter vers l'installation, et surtout pas afficher « non supporté ».
 */

const SAFARI_IPHONE =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const CHROME_ANDROID =
  'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Mobile Safari/537.36';

const setUserAgent = (value: string) =>
  Object.defineProperty(navigator, 'userAgent', { value, configurable: true });

const setStandalone = (value: boolean) => {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: value,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }) as unknown as typeof window.matchMedia;
};

/** Simule un navigateur qui gère le Web Push, avec ou sans abonnement actif. */
const enablePushApis = (subscription: unknown) => {
  vi.stubGlobal('PushManager', class {});
  vi.stubGlobal('Notification', { permission: 'default' });
  Object.defineProperty(navigator, 'serviceWorker', {
    configurable: true,
    value: {
      getRegistration: () =>
        Promise.resolve({ pushManager: { getSubscription: () => Promise.resolve(subscription) } }),
    },
  });
};

const removePushApis = () => {
  vi.stubGlobal('PushManager', undefined);
  Object.defineProperty(navigator, 'serviceWorker', { configurable: true, value: undefined });
};

beforeEach(() => setStandalone(false));

afterEach(() => {
  vi.unstubAllGlobals();
  setUserAgent(CHROME_ANDROID);
});

/**
 * Les clés d'abonnement doivent être en base64url. Encodées en base64
 * standard, le service de push d'Apple rejetait l'envoi
 * (« Cannot decode input as base64: Invalid character (/) »).
 */
describe('toBase64Url', () => {
  it("n'émet aucun caractère interdit par les services de push", () => {
    // Ces octets produisent « + », « / » et un remplissage « = » en base64 standard.
    const bytes = new Uint8Array([0xfb, 0xff, 0xbf, 0x00]).buffer;

    const encoded = toBase64Url(bytes);

    expect(btoa(String.fromCharCode(0xfb, 0xff, 0xbf, 0x00))).toMatch(/[+/=]/); // le piège existe bien
    expect(encoded).not.toMatch(/[+/=]/);
    expect(encoded).toBe('-_-_AA');
  });

  it('renvoie une chaîne vide quand le navigateur ne fournit pas la clé', () => {
    expect(toBase64Url(null)).toBe('');
  });
});

describe('getPushStatus', () => {
  it("oriente vers l'installation sur un iPhone hors écran d'accueil", async () => {
    setUserAgent(SAFARI_IPHONE);
    removePushApis();

    await expect(getPushStatus()).resolves.toBe('needs-install');
  });

  it('signale un navigateur sans Web Push comme non supporté', async () => {
    setUserAgent(CHROME_ANDROID);
    removePushApis();

    await expect(getPushStatus()).resolves.toBe('unsupported');
  });

  it('propose les rappels quand ils sont possibles mais pas encore activés', async () => {
    enablePushApis(null);

    await expect(getPushStatus()).resolves.toBe('disabled');
  });

  it('ne repropose rien quand un abonnement existe déjà', async () => {
    enablePushApis({ endpoint: 'https://push.example/abc' });

    await expect(getPushStatus()).resolves.toBe('enabled');
  });

  it("respecte un refus explicite de l'élève", async () => {
    enablePushApis(null);
    vi.stubGlobal('Notification', { permission: 'denied' });

    await expect(getPushStatus()).resolves.toBe('denied');
  });
});
