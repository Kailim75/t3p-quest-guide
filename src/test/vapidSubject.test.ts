import { describe, expect, it } from 'vitest';
import { vapidSubject } from '../../supabase/functions/push-send/vapidSubject';

/**
 * Le premier envoi réel a échoué sur ce détail : le secret contenait déjà
 * « mailto: » et le code le préfixait une seconde fois. Apple a répondu
 * 403 {"reason":"BadJwtToken"} sans autre explication.
 */
describe('vapidSubject', () => {
  it('ne double pas un préfixe déjà présent', () => {
    expect(vapidSubject('mailto:contact@t3pcampus.com')).toBe('mailto:contact@t3pcampus.com');
    expect(vapidSubject('MAILTO:contact@t3pcampus.com')).toBe('MAILTO:contact@t3pcampus.com');
  });

  it('ajoute le préfixe à une adresse seule', () => {
    expect(vapidSubject('contact@t3pcampus.com')).toBe('mailto:contact@t3pcampus.com');
  });

  it('accepte une adresse de contact en https', () => {
    expect(vapidSubject('https://www.t3pcampus.com')).toBe('https://www.t3pcampus.com');
  });

  it('retombe sur une valeur valide si le secret est absent ou vide', () => {
    expect(vapidSubject(undefined)).toBe('mailto:contact@t3pcampus.com');
    expect(vapidSubject('   ')).toBe('mailto:contact@t3pcampus.com');
  });

  it('produit toujours une valeur conforme au protocole', () => {
    for (const input of [undefined, '', 'contact@t3pcampus.com', 'mailto:a@b.fr', 'https://x.fr']) {
      expect(vapidSubject(input)).toMatch(/^(mailto:|https:\/\/)/i);
      expect(vapidSubject(input)).not.toMatch(/mailto:\s*mailto:/i);
    }
  });
});
