import { forwardRef, CSSProperties } from 'react';
import {
  LucideIcon,
  LucideProps,
  Scale,
  ShieldCheck,
  Calculator,
  PenLine,
  Languages,
  CarTaxiFront,
  CarFront,
  Gauge,
  Landmark,
  Handshake,
  TrendingUp,
  FileText,
  BookOpen,
} from 'lucide-react';

/** Icône moto (absente de lucide), dessinée dans le même style de trait. */
export const MotorbikeIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ className, style, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="5" cy="16" r="3" />
      <circle cx="19" cy="16" r="3" />
      <path d="M7.5 14h4.5l4-4H7.5" />
      <path d="M9.5 14l4-4" />
      <path d="M13 6h2l1.5 3 2 4.5" />
    </svg>
  )
);
MotorbikeIcon.displayName = 'MotorbikeIcon';

type IconComponent = LucideIcon | typeof MotorbikeIcon;

/** Icône par module (quiz + fiches de révision) et par type d'examen blanc. */
const iconByModuleId: Record<string, IconComponent> = {
  // Modules du quiz
  reglementation: Scale,
  securite: ShieldCheck,
  gestion: Calculator,
  francais: PenLine,
  anglais: Languages,
  taxi: CarTaxiFront,
  vtc: CarFront,
  vmdtr: MotorbikeIcon,
  'taxi-national': Gauge,
  'taxi-territoire': Landmark,
  'relation-client': Handshake,
  // Modules propres aux fiches de révision
  'vmdtr-securite': MotorbikeIcon,
  'vmdtr-commercial': TrendingUp,
  // Types d'examen blanc
  admissibilite: FileText,
  'admission-taxi': CarTaxiFront,
  'admission-vtc': CarFront,
  'admission-vmdtr': MotorbikeIcon,
};

export const getModuleIcon = (moduleId: string): IconComponent =>
  iconByModuleId[moduleId] ?? BookOpen;

interface ModuleIconProps {
  moduleId: string;
  className?: string;
  style?: CSSProperties;
}

/** Rend l'icône du module demandé (repli : livre ouvert). */
export const ModuleIcon = ({ moduleId, className, style }: ModuleIconProps) => {
  const Icon = getModuleIcon(moduleId);
  return <Icon className={className} style={style} />;
};
