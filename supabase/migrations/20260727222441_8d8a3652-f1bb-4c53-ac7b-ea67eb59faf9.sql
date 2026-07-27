-- Chantier 1 : rattacher la progression au compte de l'apprenant

-- 1) Parcours choisi
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS target_exam text;

COMMENT ON COLUMN public.profiles.target_exam IS
  'Parcours choisi par l''apprenant : taxi, vtc, vmdtr ou tous. NULL = pas encore choisi.';

-- 2) Révision espacée
CREATE TABLE IF NOT EXISTS public.user_srs_entries (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id text NOT NULL,
  stage smallint NOT NULL DEFAULT 0,
  due_on date NOT NULL,
  fails integer NOT NULL DEFAULT 1,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, question_id)
);

CREATE INDEX IF NOT EXISTS user_srs_entries_due_idx
  ON public.user_srs_entries (user_id, due_on);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_srs_entries TO authenticated;
GRANT ALL ON public.user_srs_entries TO service_role;

ALTER TABLE public.user_srs_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage their own SRS entries" ON public.user_srs_entries;
CREATE POLICY "Users manage their own SRS entries"
ON public.user_srs_entries
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 3) Défi du jour
CREATE TABLE IF NOT EXISTS public.user_daily_challenges (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_date date NOT NULL,
  score smallint NOT NULL,
  total smallint NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, challenge_date)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_daily_challenges TO authenticated;
GRANT ALL ON public.user_daily_challenges TO service_role;

ALTER TABLE public.user_daily_challenges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage their own daily challenges" ON public.user_daily_challenges;
CREATE POLICY "Users manage their own daily challenges"
ON public.user_daily_challenges
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);