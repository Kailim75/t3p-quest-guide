/**
 * Adresse de contact déclarée dans le jeton VAPID (claim `sub`).
 *
 * Le protocole impose une URL `mailto:` ou `https:` — un préfixe en double
 * (`mailto:mailto:…`) suffit à faire refuser l'envoi par Apple, qui répond
 * alors `403 {"reason":"BadJwtToken"}`. Le secret pouvant être renseigné
 * avec ou sans préfixe, on le normalise ici.
 */
export const vapidSubject = (value: string | undefined | null): string => {
  const trimmed = (value ?? '').trim();
  if (!trimmed) return 'mailto:contact@t3pcampus.com';
  return /^(mailto:|https:\/\/)/i.test(trimmed) ? trimmed : `mailto:${trimmed}`;
};
