-- Lot 10 : durée d'accès limitée et archivage des apprenants
--
-- Deux colonnes ajoutées à `profiles` :
--   * access_expires_at : date de fin d'accès de l'apprenant (fin de sa
--     formation). Au-delà, l'application refuse la connexion — la
--     désactivation est donc automatique, évaluée à chaque accès (pas de
--     tâche planifiée à maintenir).
--   * archived_at : date d'archivage manuel par le formateur. Un profil
--     archivé ne peut plus se connecter et sort des listes actives, mais
--     tout son historique (résultats, badges) est conservé.
--
-- Les deux colonnes sont NULL par défaut : les comptes existants gardent
-- exactement le comportement actuel (accès illimité, non archivés).

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS access_expires_at timestamptz,
  ADD COLUMN IF NOT EXISTS archived_at timestamptz;

COMMENT ON COLUMN public.profiles.access_expires_at IS
  'Fin d''accès de l''apprenant. NULL = accès sans limite. Passée cette date, la connexion est refusée.';

COMMENT ON COLUMN public.profiles.archived_at IS
  'Date d''archivage manuel. NULL = actif. Un profil archivé ne peut plus se connecter ; son historique est conservé.';

-- Recherche rapide des profils actifs / archivés côté administration.
CREATE INDEX IF NOT EXISTS profiles_archived_at_idx
  ON public.profiles (archived_at);

CREATE INDEX IF NOT EXISTS profiles_access_expires_at_idx
  ON public.profiles (access_expires_at);
