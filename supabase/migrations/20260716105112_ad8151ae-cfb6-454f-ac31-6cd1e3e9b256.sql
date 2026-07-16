CREATE OR REPLACE FUNCTION public.is_approved_user(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = _user_id AND p.is_approved
  );
$$;

DROP POLICY IF EXISTS "Approved users can view questions" ON public.questions;

CREATE POLICY "Approved users can view questions"
ON public.questions
FOR SELECT
TO authenticated
USING (public.is_approved_user(auth.uid()));