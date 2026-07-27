import { describe, expect, it, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePWA } from '@/hooks/usePWA';

/**
 * Garde-fou : sur iPhone, Safari n'émet jamais `beforeinstallprompt`.
 * Une condition basée sur ce seul événement rendait l'invitation
 * d'installation invisible pour tous les élèves iOS.
 */

const setUserAgent = (value: string) => {
  Object.defineProperty(navigator, 'userAgent', { value, configurable: true });
};

const setStandalone = (value: boolean) => {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: value,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }) as unknown as typeof window.matchMedia;
};

const CHROME_ANDROID =
  'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Mobile Safari/537.36';
const SAFARI_IPHONE =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';

afterEach(() => {
  vi.restoreAllMocks();
  setUserAgent(CHROME_ANDROID);
});

describe('usePWA — invitation à installer', () => {
  it("propose l'installation sur iPhone même sans événement système", () => {
    setUserAgent(SAFARI_IPHONE);
    setStandalone(false);

    const { result } = renderHook(() => usePWA());

    expect(result.current.isIOS).toBe(true);
    expect(result.current.isInstallable).toBe(false); // aucun événement sur iOS
    expect(result.current.canPromptInstall).toBe(true);
  });

  it("n'invite plus une fois l'app lancée depuis l'écran d'accueil", () => {
    setUserAgent(SAFARI_IPHONE);
    setStandalone(true);

    const { result } = renderHook(() => usePWA());

    expect(result.current.isInstalled).toBe(true);
    expect(result.current.canPromptInstall).toBe(false);
  });

  it("attend l'événement système sur Android avant d'inviter", () => {
    setUserAgent(CHROME_ANDROID);
    setStandalone(false);

    const { result } = renderHook(() => usePWA());
    expect(result.current.canPromptInstall).toBe(false);

    act(() => {
      const event = new Event('beforeinstallprompt');
      window.dispatchEvent(event);
    });

    expect(result.current.isInstallable).toBe(true);
    expect(result.current.canPromptInstall).toBe(true);
  });
});
