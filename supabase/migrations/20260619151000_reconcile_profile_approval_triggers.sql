-- Keep a single approval-protection trigger after overlapping migrations.
DROP TRIGGER IF EXISTS trg_prevent_unauthorized_approval_change ON public.profiles;
DROP FUNCTION IF EXISTS public.prevent_unauthorized_approval_change();

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
