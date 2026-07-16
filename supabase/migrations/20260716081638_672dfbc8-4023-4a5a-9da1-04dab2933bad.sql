
-- 1) Restrict SELECT on questions to admins only (was: anyone true)
DROP POLICY IF EXISTS "Anyone can view questions" ON public.questions;

CREATE POLICY "Admins can view questions"
ON public.questions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 2) Attach trigger to prevent non-admin users from changing is_approved on profiles
DROP TRIGGER IF EXISTS prevent_unauthorized_approval_change_trg ON public.profiles;

CREATE TRIGGER prevent_unauthorized_approval_change_trg
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.prevent_unauthorized_approval_change();
