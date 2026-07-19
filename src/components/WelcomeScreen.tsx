import { ArrowRight, GraduationCap, FileText, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import Logo from '@/components/Logo';

interface WelcomeScreenProps {
  onSignIn: () => void;
}

/** Chiffres réels de la banque de contenu (affichés avant connexion). */
const stats = [
  { value: '452', label: 'questions officielles' },
  { value: '74', label: 'fiches de cours' },
  { value: '4', label: 'examens blancs' },
];

const features = [
  {
    icon: GraduationCap,
    title: 'Examens blancs chronométrés',
    description:
      "Les conditions réelles : 50 questions en 1h30, barème officiel et notes éliminatoires par matière.",
    color: '--cta',
  },
  {
    icon: FileText,
    title: 'Fiches de cours complètes',
    description:
      "L'essentiel, des cas pratiques corrigés, les pièges à éviter et une astuce mémo pour chaque question.",
    color: '--module-anglais',
  },
  {
    icon: Zap,
    title: 'Défi du jour',
    description:
      '5 questions par jour, avec vos erreurs qui reviennent au bon moment pour bien les ancrer.',
    color: '--primary',
  },
  {
    icon: TrendingUp,
    title: 'Suivi de progression',
    description:
      'Vos scores par matière, vos points faibles et vos badges pour garder le rythme jusqu\'au jour J.',
    color: '--module-vmdtr',
  },
];

/**
 * Écran d'accueil affiché aux visiteurs non connectés.
 * Objectif : rassurer (contenu officiel, conforme au référentiel) et
 * donner envie de commencer, sans noyer sous l'information.
 */
const WelcomeScreen = ({ onSignIn }: WelcomeScreenProps) => (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
    {/* Halos décoratifs */}
    <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-cta/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    {/* Flux naturel (pas de centrage vertical forcé) : le contenu dépasse
        l'écran sur mobile, un centrage couperait le haut au défilement. */}
    <main className="relative container mx-auto flex flex-col items-center px-4 py-12 sm:py-16">
      {/* En-tête */}
      <div className="max-w-2xl text-center">
        <Logo className="mx-auto mb-6 h-20 w-20 drop-shadow-lg" />

        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary sm:text-sm">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          École T3P · Référentiel officiel
        </span>

        <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-5xl">
          Décrochez votre carte{' '}
          <span className="text-gradient">Taxi, VTC ou Moto</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Entraînez-vous sur les vraies questions de l'examen, à votre rythme.
          Quelques minutes par jour suffisent pour arriver serein le jour J.
        </p>

        <button onClick={onSignIn} className="btn-cta mt-8 w-full sm:w-auto">
          Commencer mon entraînement
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-3 text-sm text-muted-foreground">
          Déjà inscrit ?{' '}
          <button
            onClick={onSignIn}
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Connectez-vous
          </button>
        </p>
      </div>

      {/* Chiffres clés */}
      <div className="mt-10 grid w-full max-w-lg grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border bg-card/60 p-4 text-center backdrop-blur">
            <p className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Ce que propose l'application */}
      <div className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 rounded-2xl border bg-card p-5 transition-shadow hover:shadow-soft"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `hsl(var(${feature.color}) / 0.12)` }}
            >
              <feature.icon className="h-5 w-5" style={{ color: `hsl(var(${feature.color}))` }} />
            </span>
            <div className="min-w-0">
              <h2 className="font-semibold text-foreground">{feature.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Taxi · VTC · VMDTR — accès réservé aux élèves de l'École T3P
      </p>
    </main>
  </div>
);

export default WelcomeScreen;
