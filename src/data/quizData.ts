// ⚠️ ATTENTION : Ces questions sont des EXEMPLES de structure.
// Vous devez les remplacer par les vraies questions conformes au référentiel officiel T3P.

export interface Question {
  id: string;
  moduleId: string;
  subModuleId: string;
  text: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  reference: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

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
  subModules: SubModule[];
}

export const modules: Module[] = [
  // MODULES COMMUNS
  {
    id: 'reglementation',
    name: 'Réglementation T3P',
    description: 'Réglementation du transport public particulier de personnes',
    type: 'commun',
    icon: '📋',
    color: 'module-reglementation',
    subModules: [
      { id: 'reg-1', name: 'Conditions d\'accès à la profession', description: 'Conditions et modalités d\'accès', questionCount: 15 },
      { id: 'reg-2', name: 'Obligations professionnelles', description: 'Droits et devoirs du conducteur', questionCount: 12 },
      { id: 'reg-3', name: 'Réglementation nationale', description: 'Lois et décrets applicables', questionCount: 18 },
    ]
  },
  {
    id: 'securite',
    name: 'Sécurité routière',
    description: 'Prévention des risques et conduite sécuritaire',
    type: 'commun',
    icon: '🛡️',
    color: 'module-securite',
    subModules: [
      { id: 'sec-1', name: 'Code de la route', description: 'Règles de circulation', questionCount: 20 },
      { id: 'sec-2', name: 'Prévention des accidents', description: 'Risques et comportements', questionCount: 15 },
      { id: 'sec-3', name: 'Premiers secours', description: 'Gestes de premiers secours', questionCount: 10 },
    ]
  },
  {
    id: 'gestion',
    name: 'Gestion & Comptabilité',
    description: 'Gestion d\'entreprise et obligations comptables',
    type: 'commun',
    icon: '📊',
    color: 'module-gestion',
    subModules: [
      { id: 'ges-1', name: 'Comptabilité de base', description: 'Notions comptables essentielles', questionCount: 12 },
      { id: 'ges-2', name: 'Fiscalité', description: 'Obligations fiscales', questionCount: 10 },
      { id: 'ges-3', name: 'Gestion d\'entreprise', description: 'Création et gestion', questionCount: 8 },
    ]
  },
  {
    id: 'francais',
    name: 'Français',
    description: 'Compréhension et expression en français',
    type: 'commun',
    icon: '🇫🇷',
    color: 'module-francais',
    subModules: [
      { id: 'fra-1', name: 'Compréhension écrite', description: 'Lecture et analyse de textes', questionCount: 10 },
      { id: 'fra-2', name: 'Expression écrite', description: 'Rédaction professionnelle', questionCount: 8 },
    ]
  },
  {
    id: 'anglais',
    name: 'Anglais',
    description: 'Compréhension et expression en anglais',
    type: 'commun',
    icon: '🇬🇧',
    color: 'module-anglais',
    subModules: [
      { id: 'ang-1', name: 'Vocabulaire professionnel', description: 'Termes du transport', questionCount: 12 },
      { id: 'ang-2', name: 'Conversation client', description: 'Dialogues courants', questionCount: 10 },
    ]
  },
  // MODULES SPÉCIFIQUES
  {
    id: 'taxi',
    name: 'Spécifique Taxi',
    description: 'Réglementation spécifique aux taxis',
    type: 'specifique',
    icon: '🚕',
    color: 'module-taxi',
    subModules: [
      { id: 'tax-1', name: 'Licence taxi', description: 'Obtention et exploitation', questionCount: 15 },
      { id: 'tax-2', name: 'Tarification', description: 'Compteur et tarifs réglementés', questionCount: 12 },
      { id: 'tax-3', name: 'Zones géographiques', description: 'Connaissance du territoire', questionCount: 10 },
    ]
  },
  {
    id: 'vtc',
    name: 'Spécifique VTC',
    description: 'Réglementation spécifique aux VTC',
    type: 'specifique',
    icon: '🚗',
    color: 'module-vtc',
    subModules: [
      { id: 'vtc-1', name: 'Carte professionnelle VTC', description: 'Conditions et renouvellement', questionCount: 12 },
      { id: 'vtc-2', name: 'Réservation préalable', description: 'Obligations de réservation', questionCount: 10 },
      { id: 'vtc-3', name: 'Plateformes numériques', description: 'Relation avec les plateformes', questionCount: 8 },
    ]
  },
  {
    id: 'vmdtr',
    name: 'Spécifique VMDTR',
    description: 'Véhicules motorisés à deux ou trois roues',
    type: 'specifique',
    icon: '🏍️',
    color: 'module-vmdtr',
    subModules: [
      { id: 'vmd-1', name: 'Spécificités deux-roues', description: 'Réglementation spécifique', questionCount: 10 },
      { id: 'vmd-2', name: 'Équipements obligatoires', description: 'Casque et protections', questionCount: 8 },
    ]
  },
];

// Questions d'exemple - À REMPLACER par les vraies questions officielles
export const sampleQuestions: Question[] = [
  // Réglementation
  {
    id: 'q-reg-001',
    moduleId: 'reglementation',
    subModuleId: 'reg-1',
    text: '[EXEMPLE] Quelle est la durée de validité de la carte professionnelle de conducteur de taxi ?',
    options: [
      { letter: 'A', text: '3 ans' },
      { letter: 'B', text: '5 ans' },
      { letter: 'C', text: '10 ans' },
      { letter: 'D', text: 'Illimitée' },
    ],
    correctAnswer: 'B',
    explanation: 'La carte professionnelle de conducteur de taxi est valable 5 ans et doit être renouvelée.',
    reference: 'Article R3121-1 du Code des transports',
    difficulty: 'facile',
  },
  {
    id: 'q-reg-002',
    moduleId: 'reglementation',
    subModuleId: 'reg-1',
    text: '[EXEMPLE] Quel organisme délivre la carte professionnelle de conducteur VTC ?',
    options: [
      { letter: 'A', text: 'La mairie' },
      { letter: 'B', text: 'La préfecture' },
      { letter: 'C', text: 'La chambre de commerce' },
      { letter: 'D', text: 'Le ministère des transports' },
    ],
    correctAnswer: 'B',
    explanation: 'La carte professionnelle VTC est délivrée par le préfet du département.',
    reference: 'Article R3122-1 du Code des transports',
    difficulty: 'facile',
  },
  {
    id: 'q-reg-003',
    moduleId: 'reglementation',
    subModuleId: 'reg-2',
    text: '[EXEMPLE] Un conducteur de taxi peut-il refuser une course ?',
    options: [
      { letter: 'A', text: 'Oui, à tout moment sans justification' },
      { letter: 'B', text: 'Non, jamais' },
      { letter: 'C', text: 'Oui, uniquement pour des motifs légitimes' },
      { letter: 'D', text: 'Oui, si le client ne paie pas d\'avance' },
    ],
    correctAnswer: 'C',
    explanation: 'Le refus de course n\'est autorisé que pour des motifs légitimes (sécurité, fin de service, etc.).',
    reference: 'Article L3121-5 du Code des transports',
    difficulty: 'moyen',
  },
  // Sécurité routière
  {
    id: 'q-sec-001',
    moduleId: 'securite',
    subModuleId: 'sec-1',
    text: '[EXEMPLE] Quelle est la vitesse maximale autorisée en agglomération ?',
    options: [
      { letter: 'A', text: '30 km/h' },
      { letter: 'B', text: '50 km/h' },
      { letter: 'C', text: '70 km/h' },
      { letter: 'D', text: '90 km/h' },
    ],
    correctAnswer: 'B',
    explanation: 'La vitesse maximale en agglomération est de 50 km/h sauf indication contraire.',
    reference: 'Article R413-3 du Code de la route',
    difficulty: 'facile',
  },
  {
    id: 'q-sec-002',
    moduleId: 'securite',
    subModuleId: 'sec-2',
    text: '[EXEMPLE] Quel est le taux d\'alcoolémie maximal autorisé pour un conducteur professionnel ?',
    options: [
      { letter: 'A', text: '0,2 g/l de sang' },
      { letter: 'B', text: '0,5 g/l de sang' },
      { letter: 'C', text: '0,8 g/l de sang' },
      { letter: 'D', text: '0,0 g/l de sang' },
    ],
    correctAnswer: 'A',
    explanation: 'Le taux d\'alcoolémie maximal pour les conducteurs de transport de personnes est de 0,2 g/l.',
    reference: 'Article R234-1 du Code de la route',
    difficulty: 'moyen',
  },
  // Gestion
  {
    id: 'q-ges-001',
    moduleId: 'gestion',
    subModuleId: 'ges-1',
    text: '[EXEMPLE] Qu\'est-ce que le chiffre d\'affaires ?',
    options: [
      { letter: 'A', text: 'Le bénéfice de l\'entreprise' },
      { letter: 'B', text: 'Le total des ventes réalisées' },
      { letter: 'C', text: 'Les charges de l\'entreprise' },
      { letter: 'D', text: 'Le capital social' },
    ],
    correctAnswer: 'B',
    explanation: 'Le chiffre d\'affaires représente le total des ventes de biens et services.',
    reference: 'Notions comptables de base',
    difficulty: 'facile',
  },
  // Taxi spécifique
  {
    id: 'q-tax-001',
    moduleId: 'taxi',
    subModuleId: 'tax-1',
    text: '[EXEMPLE] Comment s\'appelle l\'autorisation d\'exploiter un taxi ?',
    options: [
      { letter: 'A', text: 'Carte professionnelle' },
      { letter: 'B', text: 'Autorisation de stationnement (ADS)' },
      { letter: 'C', text: 'Licence VTC' },
      { letter: 'D', text: 'Permis de transport' },
    ],
    correctAnswer: 'B',
    explanation: 'L\'ADS (Autorisation De Stationnement) est le titre permettant d\'exploiter un taxi.',
    reference: 'Article L3121-1 du Code des transports',
    difficulty: 'facile',
  },
  // VTC spécifique
  {
    id: 'q-vtc-001',
    moduleId: 'vtc',
    subModuleId: 'vtc-1',
    text: '[EXEMPLE] Un VTC peut-il stationner sur la voie publique en attente de clients ?',
    options: [
      { letter: 'A', text: 'Oui, comme les taxis' },
      { letter: 'B', text: 'Oui, mais uniquement la nuit' },
      { letter: 'C', text: 'Non, la réservation préalable est obligatoire' },
      { letter: 'D', text: 'Oui, dans les zones touristiques' },
    ],
    correctAnswer: 'C',
    explanation: 'Les VTC ne peuvent pas stationner en attente de clients, la réservation préalable est obligatoire.',
    reference: 'Article L3122-9 du Code des transports',
    difficulty: 'moyen',
  },
];

export const getQuestionsByModule = (moduleId: string): Question[] => {
  return sampleQuestions.filter(q => q.moduleId === moduleId);
};

export const getQuestionsBySubModule = (subModuleId: string): Question[] => {
  return sampleQuestions.filter(q => q.subModuleId === subModuleId);
};

export const getModuleById = (moduleId: string): Module | undefined => {
  return modules.find(m => m.id === moduleId);
};

export const getCommonModules = (): Module[] => {
  return modules.filter(m => m.type === 'commun');
};

export const getSpecificModules = (): Module[] => {
  return modules.filter(m => m.type === 'specifique');
};
