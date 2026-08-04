import { describe, expect, it } from 'vitest';
import { nameFromMetadata } from '@/lib/displayName';

/**
 * Les comptes Google (connexion gérée par Lovable) arrivent sans nom :
 * cette fonction décide si on peut le récupérer en silence, ou s'il faut
 * le demander à l'apprenant.
 */
describe('nameFromMetadata', () => {
  it("récupère le nom d'une inscription par e-mail", () => {
    expect(nameFromMetadata({ display_name: 'Sophie Martin' })).toBe('Sophie Martin');
  });

  it('récupère le nom fourni par un fournisseur OAuth standard', () => {
    expect(nameFromMetadata({ display_name: '', full_name: 'Karim Ben Ali' })).toBe('Karim Ben Ali');
    expect(nameFromMetadata({ name: 'Léa Dupont' })).toBe('Léa Dupont');
    expect(nameFromMetadata({ given_name: 'Abdel', family_name: 'Mebrouk' })).toBe('Abdel Mebrouk');
  });

  it("répond null pour un compte Google actuel (aucun nom transmis) — c'est là que la boîte de dialogue prend le relais", () => {
    expect(
      nameFromMetadata({ display_name: '', email: 'x@gmail.com', email_verified: true, sub: 'abc' })
    ).toBeNull();
  });

  it('ignore les valeurs vides, trop courtes ou non textuelles', () => {
    expect(nameFromMetadata({ display_name: '  ' })).toBeNull();
    expect(nameFromMetadata({ full_name: 'A' })).toBeNull();
    expect(nameFromMetadata({ name: 42 as unknown as string })).toBeNull();
    expect(nameFromMetadata(null)).toBeNull();
  });
});
