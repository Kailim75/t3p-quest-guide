// Questions officielles T3P conformes au référentiel

export type AnswerLetter = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: string;
  moduleId: string;
  subModuleId: string;
  text: string;
  options: {
    letter: AnswerLetter;
    text: string;
  }[];
  correctAnswer: string; // Format: "A" ou "A,B" pour 2 réponses
  explanation: string;
  reference: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Helper pour parser les réponses correctes
export const parseCorrectAnswers = (correctAnswer: string): AnswerLetter[] => {
  return correctAnswer.split(',').map(a => a.trim()) as AnswerLetter[];
};

// Helper pour vérifier si la réponse est correcte
export const isAnswerCorrect = (selectedAnswers: AnswerLetter[], correctAnswer: string): boolean => {
  const correctAnswers = parseCorrectAnswers(correctAnswer);
  if (selectedAnswers.length !== correctAnswers.length) return false;
  return selectedAnswers.every(a => correctAnswers.includes(a)) && 
         correctAnswers.every(a => selectedAnswers.includes(a));
};

// Helper pour savoir si une question a plusieurs réponses
export const hasMultipleAnswers = (correctAnswer: string): boolean => {
  return correctAnswer.includes(',');
};

export interface SubModule {
  id: string;
  name: string;
  description: string;
  questionCount: number;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  type: 'commun' | 'specifique';
  icon: string;
  color: string;
  /** Code(s) de compétence du référentiel France Compétences (ex: "F(T)", "G(V)"). */
  rsCode?: string;
  /** Code RS de la fiche (RS5635 taxi, RS5636 VMDTR, RS5637 VTC). */
  rsFiche?: 'RS5635' | 'RS5636' | 'RS5637';
  subModules: SubModule[];
}


export const modules: Module[] = [
  // MODULES COMMUNS
  {
    id: 'reglementation',
    name: 'A. Réglementation du T3P',
    description: 'Épreuve A — Réglementation du transport public particulier de personnes',
    type: 'commun',
    icon: '📋',
    color: 'module-reglementation',
    rsCode: 'A',
    subModules: [
      { id: 'reg-1', name: 'Conditions d\'accès à la profession', description: 'Conditions et modalités d\'accès', questionCount: 15 },
      { id: 'reg-2', name: 'Obligations professionnelles', description: 'Droits et devoirs du conducteur', questionCount: 12 },
      { id: 'reg-3', name: 'Réglementation nationale', description: 'Lois et décrets applicables', questionCount: 18 },
    ]
  },
  {
    id: 'securite',
    name: 'C. Sécurité routière',
    description: 'Épreuve C — Sécurité routière : prévention des risques et conduite sécuritaire',
    type: 'commun',
    icon: '🛡️',
    color: 'module-securite',
    rsCode: 'C',
    subModules: [
      { id: 'sec-1', name: 'Code de la route', description: 'Règles de circulation', questionCount: 20 },
      { id: 'sec-2', name: 'Prévention des accidents', description: 'Risques et comportements', questionCount: 15 },
      { id: 'sec-3', name: 'Premiers secours', description: 'Gestes de premiers secours', questionCount: 10 },
    ]
  },
  {
    id: 'gestion',
    name: 'B. Gestion',
    description: 'Épreuve B — Gestion : gestion d\'entreprise et obligations comptables',
    type: 'commun',
    icon: '📊',
    color: 'module-gestion',
    rsCode: 'B',
    subModules: [
      { id: 'ges-1', name: 'Comptabilité de base', description: 'Notions comptables essentielles', questionCount: 20 },
      { id: 'ges-2', name: 'Fiscalité', description: 'Obligations fiscales', questionCount: 10 },
      { id: 'ges-3', name: 'Gestion d\'entreprise', description: 'Création et gestion', questionCount: 10 },
    ]
  },
  {
    id: 'francais',
    name: 'D. Langue française',
    description: 'Épreuve D — Capacité d\'expression et de compréhension en langue française',
    type: 'commun',
    icon: '🇫🇷',
    color: 'module-francais',
    rsCode: 'D',
    subModules: [
      { id: 'fra-1', name: 'Compréhension écrite', description: 'Lecture et analyse de textes', questionCount: 20 },
      { id: 'fra-2', name: 'Expression écrite', description: 'Rédaction professionnelle', questionCount: 20 },
    ]
  },
  {
    id: 'anglais',
    name: 'E. Langue anglaise',
    description: 'Épreuve E — Capacité d\'expression et de compréhension en anglais (niveau A2 CECRL)',
    type: 'commun',
    icon: '🇬🇧',
    color: 'module-anglais',
    rsCode: 'E',
    subModules: [
      { id: 'ang-1', name: 'Vocabulaire professionnel', description: 'Termes du transport', questionCount: 20 },
      { id: 'ang-2', name: 'Conversation client', description: 'Dialogues courants', questionCount: 20 },
      { id: 'ang-3', name: 'Tourisme international', description: 'Vocabulaire et dialogues touristiques', questionCount: 20 },
      { id: 'ang-4', name: 'Phrases types & situations', description: 'Expressions clés par situation', questionCount: 20 },
    ]
  },

  // MODULES SPÉCIFIQUES
  {
    id: 'taxi',
    name: 'F(T). Territoire et réglementation locale (Paris)',
    description: 'Épreuve F(T) — Connaissance du territoire et réglementation locale : ADS, tarifs et maraude à Paris',
    type: 'specifique',
    icon: '🚕',
    color: 'module-taxi',
    rsCode: 'F(T)',
    rsFiche: 'RS5635',
    subModules: [
      { id: 'tax-1', name: 'ADS & exploitation Paris', description: 'Autorisation de stationnement et règles de la Préfecture de Police', questionCount: 11 },
      { id: 'tax-2', name: 'Tarifs Paris 2026', description: 'Tarifs A/B/C/D, forfaits aéroports et suppléments parisiens', questionCount: 10 },
      { id: 'tax-3', name: 'Maraude & stationnement 75', description: 'Zones de prise en charge, stations, voies de bus et ZFE', questionCount: 9 },
    ]
  },
  {
    id: 'vtc',
    name: 'F(V) + G(V). Spécifique VTC',
    description: 'Épreuves F(V) et G(V) — Développement commercial, gestion propre et réglementation nationale VTC',
    type: 'specifique',
    icon: '🚗',
    color: 'module-vtc',
    rsCode: 'F(V) + G(V)',
    rsFiche: 'RS5637',
    subModules: [
      { id: 'vtc-1', name: 'Carte professionnelle VTC', description: 'Conditions et renouvellement', questionCount: 20 },
      { id: 'vtc-2', name: 'Réservation préalable', description: 'Obligations de réservation', questionCount: 10 },
      { id: 'vtc-3', name: 'Obligations VTC', description: 'Règles spécifiques VTC', questionCount: 11 },
    ]
  },
  {
    id: 'vmdtr',
    name: 'F(M) + G(M). Spécifique VMDTR',
    description: 'Épreuves F(M) et G(M) — Sécurité moto, réglementation, passager et développement commercial',
    type: 'specifique',
    icon: '🏍️',
    color: 'module-vmdtr',
    rsCode: 'F(M) + G(M)',
    rsFiche: 'RS5636',
    subModules: [
      { id: 'vmd-securite', name: 'F(M) – Sécurité moto', description: 'Accidentologie, dynamique, conduite préventive, entretien', questionCount: 8 },
      { id: 'vmd-reglementation', name: 'F(M) – Réglementation VMDTR', description: 'Carte pro, réservation préalable, véhicules, signalétique', questionCount: 8 },
      { id: 'vmd-passager', name: 'G(M) – Prise en charge passager', description: 'Consignes, peur, EPI, comportement de la moto', questionCount: 8 },
      { id: 'vmd-commercial', name: 'G(M) – Développement commercial', description: 'Marketing, fidélisation, communication, partenaires', questionCount: 8 },
    ]
  },
  {
    id: 'taxi-national',
    name: 'G(T). Réglementation taxi (nationale et Paris)',
    description: 'Épreuve G(T) — Réglementation nationale taxi et gestion propre à l\'activité',
    type: 'specifique',
    icon: '🚖',
    color: 'module-taxi',
    rsCode: 'G(T)',
    rsFiche: 'RS5635',
    subModules: [
      { id: 'tx75-nat', name: 'Réglementation nationale', description: 'Code des transports et lois applicables à tous les taxis', questionCount: 10 },
      { id: 'tx75-loc', name: 'Réglementation locale', description: 'Arrêtés préfectoraux et règles spécifiques au département', questionCount: 10 },
      { id: 'tx75-pra', name: 'Pratique professionnelle', description: 'Tarification, équipements et exercice quotidien', questionCount: 10 },
    ]
  },
  {
    id: 'taxi-territoire',
    name: 'F(T). Connaissance du territoire (Paris)',
    description: 'Épreuve F(T) — Connaissance du territoire d\'exercice : monuments, gares, hôpitaux, axes majeurs',
    type: 'specifique',
    icon: '🗼',
    color: 'module-taxi',
    rsCode: 'F(T)',
    rsFiche: 'RS5635',
    subModules: [
      { id: 'topo-mon', name: 'Monuments & Sites touristiques', description: 'Lieux emblématiques et attractions', questionCount: 10 },
      { id: 'topo-gar', name: 'Gares & Transports', description: 'Gares SNCF, routières et aéroports', questionCount: 10 },
      { id: 'topo-hop', name: 'Hôpitaux & Services', description: 'Établissements de santé et services publics', questionCount: 10 },
      { id: 'topo-axe', name: 'Axes & Circulation', description: 'Boulevards, places et itinéraires', questionCount: 10 },
    ]
  },

  // Module Relation Client (nouveau)
  {
    id: 'relation-client',
    name: 'Relation client (transversal)',
    description: 'Compétences transversales aux épreuves : accueil, communication et gestion des situations difficiles',
    type: 'commun',
    icon: '🤝',
    color: 'module-relation',
    subModules: [
      { id: 'rel-1', name: 'Accueil et service', description: 'Qualité d\'accueil client', questionCount: 20 },
      { id: 'rel-2', name: 'Communication', description: 'Communication professionnelle', questionCount: 20 },
    ]
  },
];

// Les questions sont désormais servies exclusivement par la base de données
// (table `questions`, gérée depuis l'écran Administration). Le barème serveur
// lit la même table. Ce fichier ne conserve que la structure des modules et
// les utilitaires de correction.

export const getModuleById = (moduleId: string): Module | undefined => {
  return modules.find(m => m.id === moduleId);
};

export const getCommonModules = (): Module[] => {
  return modules.filter(m => m.type === 'commun');
};

export const getSpecificModules = (): Module[] => {
  return modules.filter(m => m.type === 'specifique');
};
