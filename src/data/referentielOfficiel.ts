// ============================================================
// RÉFÉRENTIEL OFFICIEL T3P — France Compétences
// Sources : RS5635 (Taxi), RS5637 (VTC), RS5636 (VMDTR)
// Base légale : Arrêté du 6 avril 2017 modifié
// ============================================================
// Ce fichier est la SOURCE DE VÉRITÉ de ce qui est évaluable.
// Toute fiche / question hors de ce périmètre = à supprimer.
// ============================================================

export type EpreuveType = 'theorique-admissibilite' | 'pratique-admission';
export type Domaine = 'commun' | 'taxi' | 'vtc' | 'vmdtr';

export interface CompetenceOfficielle {
  /** Code officiel : A, B, C, D, E (tronc commun) ; F(T)/G(T), F(V)/G(V), F(M)/G(M) (spécifiques) ; PA/PB/PC/PD (pratique) */
  code: string;
  /** Intitulé officiel court */
  intitule: string;
  /** Domaine concerné */
  domaine: Domaine;
  /** Type d'épreuve */
  epreuve: EpreuveType;
  /** Format : QCM uniquement / QCM+QRC */
  format: 'QCM' | 'QCM+QRC' | 'pratique';
  /** Note éliminatoire en dessous de */
  noteEliminatoire: number; // /20
  /** Sous-compétences (verbatim référentiel) */
  sousCompetences: string[];
}

// ============================================================
// TRONC COMMUN — 5 épreuves théoriques (Taxi, VTC et VMDTR)
// ============================================================

export const TRONC_COMMUN: CompetenceOfficielle[] = [
  {
    code: 'A',
    intitule: 'Réglementation du transport public particulier de personnes',
    domaine: 'commun',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Réglementation applicable aux différents modes T3P (taxi, VTC, VMDTR)",
      "Règles d'utilisation de la voie publique pour la prise en charge",
      "Obligations générales relatives aux véhicules",
      "Obligations relatives au conducteur (accès, exercice, formation continue)",
      "Composition et rôle des organismes administratifs, consultatifs et professionnels",
      "Autorités administratives et juridictions compétentes",
      "Obligations en matière d'assurance et conséquences du défaut d'assurance",
      "Agents habilités à contrôler et leurs prérogatives ; documents à présenter",
      "Sanctions administratives/pénales et voies de recours",
      "Règles de prise en charge des personnes à mobilité réduite",
      "Notions sur transports collectifs occasionnels et transport à la demande",
      "Notions sur covoiturage et transport privé",
      "Dispositions relatives aux intermédiaires (relation avec le conducteur)",
    ],
  },
  {
    code: 'B',
    intitule: 'Gestion',
    domaine: 'commun',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Principes de base comptabilité : obligations et documents comptables",
      "Charges fixes / variables, coût de revient",
      "Produit d'exploitation, bénéfice, résultat, seuil de rentabilité",
      "Principes de l'amortissement",
      "Formes juridiques (EI, EIRL, EURL, SARL, SASU, SCOP…)",
      "Modes d'exploitation (directe, location-gérance)",
      "Régimes d'imposition et déclarations fiscales",
      "Formalités déclaratives",
      "Composition et rôle des chambres des métiers et de l'artisanat",
      "Régimes sociaux (général, indépendants) et cotisations par branche",
    ],
  },
  {
    code: 'C',
    intitule: 'Sécurité routière',
    domaine: 'commun',
    epreuve: 'theorique-admissibilite',
    format: 'QCM',
    noteEliminatoire: 6,
    sousCompetences: [
      "Application du code de la route (signalisation, circulation, ceinture, voies dédiées)",
      "Risques liés à l'alcool, stupéfiants, médicaments, stress, fatigue",
      "Conduite rationnelle (éco-conduite, bruit, environnement)",
      "Règles d'usage des téléphones/ordiphones au volant",
      "Obligations d'entretien et de visite technique",
      "Conduite à tenir en cas d'accident (protection, alerte, premiers secours)",
      "Rédaction du constat amiable",
      "Sanctions des infractions au code de la route",
      "Réglementation du permis de conduire (points, probatoire, suspension)",
      "Prise en charge sécurisée du passager et de ses bagages",
    ],
  },
  {
    code: 'D',
    intitule: "Capacité d'expression et de compréhension en langue française",
    domaine: 'commun',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Comprendre un texte simple ou des documents liés à l'activité (15 à 20 lignes)",
      "Accueillir la clientèle",
      "Comprendre les demandes des clients",
      "Interroger les clients sur leur confort",
      "Tenir une conversation neutre et courtoise",
      "Prendre congé des clients",
    ],
  },
  {
    code: 'E',
    intitule: "Capacité d'expression et de compréhension en anglais (niveau A2 CECRL)",
    domaine: 'commun',
    epreuve: 'theorique-admissibilite',
    format: 'QCM',
    noteEliminatoire: 4, // exception : 4/20 et non 6/20
    sousCompetences: [
      "Accueillir la clientèle en anglais",
      "Comprendre des demandes simples",
      "Demander des renseignements sur le confort",
      "Tenir une conversation très simple durant le transport",
      "Prendre congé du client en anglais",
    ],
  },
];

// ============================================================
// ÉPREUVES SPÉCIFIQUES TAXI — F(T) et G(T)
// ============================================================

export const SPECIFIQUE_TAXI: CompetenceOfficielle[] = [
  {
    code: 'F(T)',
    intitule: "Connaissance du territoire et réglementation locale",
    domaine: 'taxi',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Territoire d'exercice : principaux lieux, sites, bâtiments publics, axes routiers",
      "Réglementation locale en vigueur",
    ],
  },
  {
    code: 'G(T)',
    intitule: "Réglementation nationale taxi et gestion propre",
    domaine: 'taxi',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Équipements spéciaux obligatoires et terminal de paiement électronique",
      "Articulation entre réglementations nationales et locales",
      "Régime des autorisations de stationnement (ADS)",
      "Règles de tarification d'une course taxi",
      "Activités complémentaires : services réguliers, transport assis professionnalisé (TAP)",
      "Détaxation partielle de la TICPE",
      "Réglementation de la taxe de stationnement",
    ],
  },
];

// ============================================================
// ÉPREUVES SPÉCIFIQUES VTC — F(V) et G(V)
// ============================================================

export const SPECIFIQUE_VTC: CompetenceOfficielle[] = [
  {
    code: 'F(V)',
    intitule: "Développement commercial et gestion propre à l'activité VTC",
    domaine: 'vtc',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Principes généraux du marketing (analyse de marché, ciblage, prix)",
      "Valoriser la prestation commerciale de VTC",
      "Fidéliser ses clients et prospecter",
      "Actions de communication (internet, numérique)",
      "Développer un réseau de partenaires (hôtels, entreprises)",
      "Établir un devis et une facture",
      "Calculer le coût de revient (formule monôme et binôme)",
      "Notion de marge pour calculer un prix de vente",
    ],
  },
  {
    code: 'G(V)',
    intitule: "Réglementation nationale spécifique VTC",
    domaine: 'vtc',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Modalités d'inscription au registre des VTC, capacité financière",
      "Obligations spécifiques aux véhicules (dimensions, puissance, âge) et signalétique",
      "Documents relatifs à l'exécution de la prestation à présenter en cas de contrôle",
    ],
  },
];

// ============================================================
// ÉPREUVES SPÉCIFIQUES VMDTR — F(M) et G(M)
// ============================================================

export const SPECIFIQUE_VMDTR: CompetenceOfficielle[] = [
  {
    code: 'F(M)',
    intitule: "Sécurité spécifique moto et réglementation d'exploitation VMDTR",
    domaine: 'vmdtr',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Accidentologie des usagers de motocyclettes",
      "Facteurs de risques propres à la conduite moto",
      "Hygiène de vie du conducteur et rythmes biologiques",
      "Dynamique des motocyclettes (effet gyroscopique, distances d'arrêt)",
      "Techniques de conduite préventive à motocyclette",
      "Gestion des situations d'urgence (freinage d'urgence, évitement)",
      "Vérifications techniques de sécurité et entretien",
      "Conditions d'obtention de la carte professionnelle VMDTR",
      "Conditions d'exercice (obligation de réservation préalable)",
      "Caractéristiques obligatoires des véhicules (puissance, âge, équipements)",
      "Signalétique des véhicules",
    ],
  },
  {
    code: 'G(M)',
    intitule: "Prise en charge du passager et développement commercial",
    domaine: 'vmdtr',
    epreuve: 'theorique-admissibilite',
    format: 'QCM+QRC',
    noteEliminatoire: 6,
    sousCompetences: [
      "Tâches de prise en charge et de dépose du passager",
      "Mécanismes de la peur des personnes transportées",
      "Explications et consignes au passager avant le départ",
      "Effet de la présence du passager sur le comportement de la moto",
      "Équipements de protection individuelle (casque, gants…)",
      "Principes généraux du marketing",
      "Valoriser la prestation commerciale VMDTR",
      "Fidéliser et prospecter",
      "Actions de communication numérique",
      "Réseau de partenaires (hôtels, entreprises)",
    ],
  },
];

// ============================================================
// ÉPREUVE PRATIQUE D'ADMISSION (commune aux 3 examens, adaptée)
// ============================================================

export const PRATIQUE_ADMISSION: CompetenceOfficielle[] = [
  {
    code: 'PA',
    intitule: "Conduite et sécurité",
    domaine: 'commun',
    epreuve: 'pratique-admission',
    format: 'pratique',
    noteEliminatoire: 0, // pas d'élim. par compétence : note globale ≥ 12/20
    sousCompetences: [
      "Conduire en sécurité et respecter le code de la route",
      "Souplesse de conduite assurant le confort du passager",
      "Prise en charge et dépose des clients et de leurs bagages",
    ],
  },
  {
    code: 'PB',
    intitule: "Relation client",
    domaine: 'commun',
    epreuve: 'pratique-admission',
    format: 'pratique',
    noteEliminatoire: 0,
    sousCompetences: [
      "Présentation générale et attitude adaptées",
      "Accueillir, se comporter durant le parcours, prendre congé",
      "Vérifier l'état du véhicule avant et après la prestation",
    ],
  },
  {
    code: 'PC',
    intitule: "Construction du parcours et accompagnement touristique",
    domaine: 'commun',
    epreuve: 'pratique-admission',
    format: 'pratique',
    noteEliminatoire: 0,
    sousCompetences: [
      "Élaborer et suivre un parcours (GPS, plan, adaptations)",
      "Délivrer des informations touristiques et pratiques",
    ],
  },
  {
    code: 'PD',
    intitule: "Facturation et paiement",
    domaine: 'commun',
    epreuve: 'pratique-admission',
    format: 'pratique',
    noteEliminatoire: 0,
    sousCompetences: [
      "Établir le prix, facturer et encaisser",
      "Utiliser les équipements spéciaux (taxi : compteur, TPE…)",
    ],
  },
];

// ============================================================
// MODALITÉS D'ÉVALUATION OFFICIELLES
// ============================================================

export const MODALITES_EXAMEN = {
  admissibilite: {
    nombreEpreuves: 7, // 5 communes + 2 spécifiques
    formatGeneral: "QCM + QRC (sauf C et E : QCM uniquement)",
    coefficients: "Compris entre 1 et 3",
    seuilAdmissibilite: 10, // /20 moyenne pondérée
    noteEliminatoireGenerale: 6, // /20
    noteEliminatoireAnglais: 4, // /20 (exception)
    validiteAdmissibilite: "1 an, 3 tentatives maximum à l'épreuve pratique",
  },
  admission: {
    nature: "Mise en situation pratique (course réelle)",
    dureeConduiteMin: 20, // minutes
    notation: "Sur 20, par groupes de compétences",
    seuilAdmission: 12, // /20
  },
  passerelles: {
    // Candidat admissible Taxi/VTC <3 ans : dispensé des épreuves A à E pour l'autre examen
    description: "Un candidat admissible à l'examen taxi/VTC depuis <3 ans est dispensé des épreuves A à E pour l'autre examen, sous conditions de notes aux épreuves spécifiques.",
  },
  organisateur: "Chambres de métiers et de l'artisanat (CMA)",
  baseLegale: "Arrêté du 6 avril 2017 relatif aux programmes et à l'évaluation des épreuves des examens d'accès aux professions de conducteur de taxi et VTC",
} as const;

// ============================================================
// HELPERS
// ============================================================

export const ALL_COMPETENCES: CompetenceOfficielle[] = [
  ...TRONC_COMMUN,
  ...SPECIFIQUE_TAXI,
  ...SPECIFIQUE_VTC,
  ...SPECIFIQUE_VMDTR,
  ...PRATIQUE_ADMISSION,
];

export const getCompetencesByDomain = (domain: Domaine): CompetenceOfficielle[] =>
  ALL_COMPETENCES.filter((c) => c.domaine === domain || c.domaine === 'commun');

export const getCompetenceByCode = (code: string): CompetenceOfficielle | undefined =>
  ALL_COMPETENCES.find((c) => c.code === code);

/**
 * Mapping module plateforme → code(s) compétence(s) RS officielle(s).
 * Utilisé pour la cartographie de couverture et la rationalisation du contenu.
 */
export const MODULE_TO_RS: Record<string, string[]> = {
  // Tronc commun
  'gestion': ['B'],
  'securite': ['C'],
  'reglementation': ['A'],
  'francais': ['D'],
  'anglais': ['E'],
  // Pratique (à recentrer)
  'relation-client': ['PB', 'PA'],
  // Spécifique taxi
  'taxi-75': ['G(T)'],
  'topographie-paris': ['F(T)'],
  // Spécifique VTC
  'vtc': ['F(V)', 'G(V)'],
  // Spécifique VMDTR (MANQUANT actuellement)
  // 'vmdtr-securite': ['F(M)'],
  // 'vmdtr-commercial': ['G(M)'],
};
