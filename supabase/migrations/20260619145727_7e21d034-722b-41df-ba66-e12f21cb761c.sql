CREATE OR REPLACE FUNCTION public.prevent_unauthorized_approval_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.is_approved IS DISTINCT FROM OLD.is_approved
     AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    NEW.is_approved := OLD.is_approved;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_prevent_unauthorized_approval_change ON public.profiles;
CREATE TRIGGER trg_prevent_unauthorized_approval_change
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_unauthorized_approval_change();