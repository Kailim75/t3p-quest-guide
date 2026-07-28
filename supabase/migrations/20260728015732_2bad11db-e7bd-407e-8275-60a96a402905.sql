ALTER TABLE public.push_subscriptions
  ADD COLUMN IF NOT EXISTS last_reminded_at timestamptz;

COMMENT ON COLUMN public.push_subscriptions.last_reminded_at IS
  'Dernier rappel automatique envoyé à cet appareil. Garde-fou anti-doublon : une relance par jour.';