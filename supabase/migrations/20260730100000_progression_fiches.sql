-- Progression de lecture des fiches de cours
--
-- L'élève peut marquer chaque fiche « maîtrisée » ou « à revoir » (depuis les
-- boutons de fin de fiche ou l'auto-évaluation des cas pratiques). Comme le
-- reste de la progression, le statut suit le compte : changer de téléphone ne
-- fait rien perdre, et les barres d'avancement par module restent justes.

CREATE TABLE IF NOT EXISTS public.user_fiche_progress (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- Identifiant de la fiche dans le contenu de l'app (ex. ges-formes-juridiques)
  fiche_id text NOT NULL,
  status text NOT NULL CHECK (status IN ('maitrisee', 'a-revoir')),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, fiche_id)
);

ALTER TABLE public.user_fiche_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage their own fiche progress" ON public.user_fiche_progress;
CREATE POLICY "Users manage their own fiche progress"
ON public.user_fiche_progress
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Le formateur voit l'avancement de lecture dans le suivi des apprenants.
DROP POLICY IF EXISTS "Admins read fiche progress" ON public.user_fiche_progress;
CREATE POLICY "Admins read fiche progress"
ON public.user_fiche_progress
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

COMMENT ON TABLE public.user_fiche_progress IS
  'Statut de chaque fiche de cours pour chaque apprenant : maîtrisée ou à revoir.';
