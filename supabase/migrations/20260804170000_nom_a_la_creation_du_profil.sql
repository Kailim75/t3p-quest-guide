-- Récupérer le nom de l'apprenant à la création du profil
--
-- Le déclencheur ne copiait que l'e-mail : les comptes créés par la
-- connexion Google apparaissaient « Sans nom » dans le suivi formateur.
-- Le connecteur Google géré par Lovable ne transmet aujourd'hui aucun nom
-- (vérifié dans auth.users et auth.identities), mais si les métadonnées en
-- contiennent un — inscription e-mail, ou évolution future du connecteur —
-- il est désormais repris d'office. Pour les comptes déjà créés sans nom,
-- l'application le demande à la première connexion (CompleteNameDialog).

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, display_name)
    VALUES (
      NEW.id,
      NEW.email,
      COALESCE(
        NULLIF(TRIM(NEW.raw_user_meta_data->>'display_name'), ''),
        NULLIF(TRIM(NEW.raw_user_meta_data->>'full_name'), ''),
        NULLIF(TRIM(NEW.raw_user_meta_data->>'name'), ''),
        NULLIF(TRIM(CONCAT_WS(' ',
          NEW.raw_user_meta_data->>'given_name',
          NEW.raw_user_meta_data->>'family_name'
        )), '')
      )
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
