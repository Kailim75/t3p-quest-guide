-- Chantier 1 : rattacher la progression au compte de l'apprenant
--
-- Jusqu'ici, le parcours choisi (métier), la révision espacée et le défi du
-- jour vivaient dans le navigateur (localStorage) : un changement de
-- téléphone ou un vidage de cache faisait tout perdre. On les rattache au
-- compte pour qu'ils suivent l'élève partout.
--
-- La session de quiz en cours reste volontairement locale : elle est
-- éphémère (48 h) et propre à l'appareil.

-- 1) Parcours choisi (Taxi / VTC / VMDTR / tous)
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS target_exam text;

COMMENT ON COLUMN public.profiles.target_exam IS
  'Parcours choisi par l''apprenant : taxi, vtc, vmdtr ou tous. NULL = pas encore choisi.';

-- 2) Révision espacée : une ligne par question programmée
CREATE TABLE IF NOT EXISTS public.user_srs_entries (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id text NOT NULL,
  -- Étape atteinte : 0 = vient d'être ratée, puis 1 et 2 (J+1, J+3, J+7)
  stage smallint NOT NULL DEFAULT 0,
  -- Date à partir de laquelle la question doit être revue
  due_on date NOT NULL,
  fails integer NOT NULL DEFAULT 1,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, question_id)
);

CREATE INDEX IF NOT EXISTS user_srs_entries_due_idx
  ON public.user_srs_entries (user_id, due_on);

ALTER TABLE public.user_srs_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage their own SRS entries" ON public.user_srs_entries;
CREATE POLICY "Users manage their own SRS entries"
ON public.user_srs_entries
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 3) Défi du jour : une ligne par jour et par apprenant
CREATE TABLE IF NOT EXISTS public.user_daily_challenges (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_date date NOT NULL,
  score smallint NOT NULL,
  total smallint NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, challenge_date)
);

ALTER TABLE public.user_daily_challenges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage their own daily challenges" ON public.user_daily_challenges;
CREATE POLICY "Users manage their own daily challenges"
ON public.user_daily_challenges
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
