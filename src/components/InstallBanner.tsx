import { Link } from 'react-router-dom';
import { Download, X, Bell, WifiOff, Smartphone } from 'lucide-react';
import { useInstallInvite } from '@/hooks/useInstallInvite';

/**
 * Invitation à installer l'application sur l'écran d'accueil.
 *
 * Affichée sur la page d'accueil des élèves : c'est le seul endroit assez vu
 * pour que l'installation décolle (le lien du menu profil passait inaperçu).
 * Sur iPhone, aucun événement d'installation n'existe : on renvoie vers la
 * page d'instructions plutôt que d'ouvrir une boîte de dialogue système.
 */
const InstallBanner = () => {
  const { visible, isInstallable, isIOS, installApp, snooze } = useInstallInvite();

  if (!visible) return null;

  return (
    <section className="container mx-auto px-4 pt-6">
      <div className="relative overflow-hidden rounded-2xl border border-cta/30 bg-gradient-to-br from-cta/10 via-card to-card p-5 sm:p-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cta/10 blur-2xl" />

        <button
          onClick={snooze}
          aria-label="Masquer cette invitation"
          className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta/15">
            <Smartphone className="h-6 w-6 text-cta" />
          </span>

          <div className="min-w-0 flex-1">
            <h2 className="pr-6 font-semibold text-foreground">
              Installez l'app sur votre téléphone
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Un raccourci sur votre écran d'accueil, comme une vraie application.
            </p>

            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Bell className="h-3.5 w-3.5 shrink-0 text-cta" />
                Rappels de révision
              </li>
              <li className="flex items-center gap-1.5">
                <WifiOff className="h-3.5 w-3.5 shrink-0 text-cta" />
                Révisions hors connexion
              </li>
              <li className="flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5 shrink-0 text-cta" />
                Ouverture en un geste
              </li>
            </ul>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:w-44">
            {isInstallable ? (
              <button onClick={() => void installApp()} className="btn-cta w-full justify-center">
                <Download className="h-4 w-4" />
                Installer
              </button>
            ) : (
              <Link to="/install" className="btn-cta w-full justify-center">
                <Download className="h-4 w-4" />
                Comment faire
              </Link>
            )}
            <button
              onClick={snooze}
              className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
            >
              Plus tard
            </button>
          </div>
        </div>

        {isIOS && (
          <p className="relative mt-4 rounded-xl bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
            Sur iPhone : bouton <span className="font-medium text-foreground">Partager</span> en bas
            de Safari, puis <span className="font-medium text-foreground">Sur l'écran d'accueil</span>.
          </p>
        )}
      </div>
    </section>
  );
};

export default InstallBanner;
