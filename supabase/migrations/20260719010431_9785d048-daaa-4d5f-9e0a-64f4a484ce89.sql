ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS access_expires_at timestamptz,
  ADD COLUMN IF NOT EXISTS archived_at timestamptz;

COMMENT ON COLUMN public.profiles.access_expires_at IS
  'Fin d''accès de l''apprenant. NULL = accès sans limite. Passée cette date, la connexion est refusée.';

COMMENT ON COLUMN public.profiles.archived_at IS
  'Date d''archivage manuel. NULL = actif. Un profil archivé ne peut plus se connecter ; son historique est conservé.';

CREATE INDEX IF NOT EXISTS profiles_archived_at_idx
  ON public.profiles (archived_at);

CREATE INDEX IF NOT EXISTS profiles_access_expires_at_idx
  ON public.profiles (access_expires_at);