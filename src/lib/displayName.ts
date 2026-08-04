/**
 * Retrouver le nom d'un apprenant dans les métadonnées de son compte.
 *
 * L'inscription par e-mail remplit `display_name` ; une connexion OAuth
 * classique fournirait `full_name` ou `name` ; le connecteur Google géré
 * par Lovable ne transmet aujourd'hui rien du tout — d'où la boîte de
 * dialogue de complément de profil qui prend le relais.
 */
export const nameFromMetadata = (metadata: Record<string, unknown> | null | undefined): string | null => {
  if (!metadata) return null;

  const candidates = [
    metadata.display_name,
    metadata.full_name,
    metadata.name,
    [metadata.given_name, metadata.family_name].filter(Boolean).join(' '),
  ];

  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim().length > 1) {
      return candidate.trim();
    }
  }
  return null;
};
