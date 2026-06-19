-- Add the approval flag expected by the application and secure who can change it.
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS is_approved BOOLEAN NOT NULL DEFAULT false;

-- Admins need explicit profile access for the administration screens.
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles"
ON public.profiles
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Users may update their own display data, but they must not approve themselves.
CREATE OR REPLACE FUNCTION public.prevent_profile_approval_self_update()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF OLD.is_approved IS DISTINCT FROM NEW.is_approved
     AND auth.role() <> 'service_role'
     AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can change profile approval';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS prevent_profile_approval_self_update ON public.profiles;
CREATE TRIGGER prevent_profile_approval_self_update
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.prevent_profile_approval_self_update();

-- Quiz results must be written through the validated Edge Function.
DROP POLICY IF EXISTS "Users can insert their own results" ON public.quiz_results;
