interface LogoProps {
  className?: string;
}

/**
 * Logo Quiz T3P : un volant blanc sur fond vert École T3P,
 * avec une coche orange (validation de l'examen).
 * Même dessin que le favicon et les icônes PWA (public/).
 */
const Logo = ({ className = 'h-10 w-10' }: LogoProps) => (
  <svg viewBox="0 0 512 512" className={className} role="img" aria-label="Quiz T3P">
    <defs>
      <linearGradient id="t3p-logo-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(142 38% 28%)" />
        <stop offset="100%" stopColor="hsl(142 42% 16%)" />
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="115" fill="url(#t3p-logo-bg)" />
    {/* Volant */}
    <circle cx="256" cy="242" r="146" fill="none" stroke="#fff" strokeWidth="34" />
    <line x1="124" y1="242" x2="388" y2="242" stroke="#fff" strokeWidth="30" />
    <line x1="256" y1="294" x2="256" y2="384" stroke="#fff" strokeWidth="30" />
    <circle cx="256" cy="242" r="52" fill="#fff" />
    {/* Badge de validation */}
    <circle cx="382" cy="382" r="94" fill="hsl(26 83% 52%)" stroke="hsl(142 40% 20%)" strokeWidth="14" />
    <path
      d="M338 384 L370 416 L428 350"
      fill="none"
      stroke="#fff"
      strokeWidth="28"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;
