-- Rappels de révision par notification push
--
-- Les relances existantes (courriel, WhatsApp) supposent que le formateur
-- agisse et que l'élève ouvre sa boîte. La notification arrive directement
-- sur le téléphone, à condition que l'élève ait installé l'application et
-- accepté les rappels — d'où l'invitation à installer ajoutée en amont.
--
-- Un même élève peut avoir plusieurs appareils : une ligne par abonnement,
-- identifiée par son endpoint (fourni par le service de push du navigateur).

CREATE TABLE IF NOT EXISTS public.push_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- URL du service de push (Apple, Google…) : identifie l'appareil de façon unique
  endpoint text NOT NULL UNIQUE,
  -- Clés de chiffrement du message, fournies par le navigateur à l'abonnement
  p256dh text NOT NULL,
  auth text NOT NULL,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS push_subscriptions_user_idx
  ON public.push_subscriptions (user_id);

ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Chaque élève gère les abonnements de ses propres appareils.
DROP POLICY IF EXISTS "Users manage their own push subscriptions" ON public.push_subscriptions;
CREATE POLICY "Users manage their own push subscriptions"
ON public.push_subscriptions
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Le formateur a besoin de savoir qui est joignable avant d'envoyer un rappel.
-- Lecture seule : l'envoi passe par l'edge function (clé de service).
DROP POLICY IF EXISTS "Admins read push subscriptions" ON public.push_subscriptions;
CREATE POLICY "Admins read push subscriptions"
ON public.push_subscriptions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

COMMENT ON TABLE public.push_subscriptions IS
  'Appareils abonnés aux rappels de révision (Web Push). Une ligne par appareil.';
