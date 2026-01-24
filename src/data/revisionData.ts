// Fiches de cours théoriques pour le mode révision T3P

export interface RevisionCard {
  id: string;
  title: string;
  keyPoints: string[];
  tips: string[];
  legalRefs: string[];
}

export interface RevisionModule {
  moduleId: string;
  moduleName: string;
  moduleIcon: string;
  introduction: string;
  cards: RevisionCard[];
}

export const revisionModules: RevisionModule[] = [
  // =====================
  // GESTION & COMPTABILITÉ
  // =====================
  {
    moduleId: 'gestion',
    moduleName: 'Gestion & Comptabilité',
    moduleIcon: '📊',
    introduction: "La gestion d'une activité de transport nécessite des compétences en comptabilité, fiscalité et droit des sociétés. Ce module couvre les fondamentaux pour gérer votre entreprise.",
    cards: [
      {
        id: 'ges-formes-juridiques',
        title: 'Formes juridiques',
        keyPoints: [
          "Entreprise individuelle (EI) : pas de capital minimum, responsabilité limitée au patrimoine professionnel depuis 2022",
          "SARL/EURL : capital libre, parts sociales, gérant majoritaire = TNS",
          "SAS/SASU : capital libre, actions, président = assimilé salarié",
          "Immatriculation au Répertoire des Métiers (RM) pour les activités artisanales comme le VTC"
        ],
        tips: [
          "Gérant majoritaire SARL = TNS (cotisations moins élevées, protection moindre)",
          "Président SAS = assimilé salarié (cotisations plus élevées, meilleure protection)"
        ],
        legalRefs: ["Code de commerce", "Loi n°2022-172 du 14 février 2022"]
      },
      {
        id: 'ges-comptabilite',
        title: 'Documents comptables',
        keyPoints: [
          "Bilan : photo du patrimoine (Actif = Passif)",
          "Compte de résultat : film de l'activité (Produits - Charges = Résultat)",
          "Conservation des documents : 10 ans pour les pièces comptables",
          "EBE (Excédent Brut d'Exploitation) : mesure la performance économique pure"
        ],
        tips: [
          "Actif = ce que l'entreprise possède (immobilisations, trésorerie)",
          "Passif = ressources (capitaux propres + dettes)"
        ],
        legalRefs: ["Article L123-12 du Code de commerce", "Plan Comptable Général"]
      },
      {
        id: 'ges-fiscalite',
        title: 'Fiscalité',
        keyPoints: [
          "TVA à décaisser = TVA collectée - TVA déductible",
          "TVA carburant : gazole/essence récupérable à 80%, électricité/GPL 100%",
          "CSG : contribution sociale finançant la Sécurité sociale",
          "CRDS : contribution au remboursement de la dette sociale"
        ],
        tips: [
          "Micro-entreprise : pas de récupération de TVA (franchise en base)",
          "Charges déductibles : professionnelles + justifiées + dans l'intérêt de l'entreprise"
        ],
        legalRefs: ["Article 256 du CGI", "Article L136-1-1 du Code de la sécurité sociale"]
      },
      {
        id: 'ges-amortissement',
        title: 'Amortissement',
        keyPoints: [
          "Amortissement = étaler le coût d'un bien sur sa durée d'utilisation",
          "Véhicule : généralement 4-5 ans (20-25% par an)",
          "Plafond fiscal véhicule : 18 300€ (ou 9 900€ si >200g CO2/km)",
          "Charge non décaissée qui réduit le bénéfice imposable"
        ],
        tips: [
          "Investissement = bien durable (>1 an) = à amortir",
          "Charge = consommée immédiatement (carburant, fournitures)"
        ],
        legalRefs: ["Article 39 du CGI", "Article 39 B du CGI"]
      }
    ]
  },

  // =====================
  // SÉCURITÉ ROUTIÈRE
  // =====================
  {
    moduleId: 'securite',
    moduleName: 'Sécurité routière',
    moduleIcon: '🛡️',
    introduction: "La sécurité routière est au cœur du métier de conducteur professionnel. Ce module aborde les règles essentielles, la prévention des risques et les premiers secours.",
    cards: [
      {
        id: 'sec-distances',
        title: 'Distances de sécurité',
        keyPoints: [
          "Distance de sécurité : au moins 2 secondes (trait de bord de route)",
          "Distance d'arrêt = temps de réaction + distance de freinage",
          "La distance d'arrêt quadruple quand la vitesse double",
          "Sur route mouillée : distance de freinage x1,5 à x2"
        ],
        tips: [
          "À 130 km/h : 36m parcourus pendant le temps de réaction (1 seconde)",
          "Méthode des 2 chevrons sur autoroute : un chevron minimum entre les véhicules"
        ],
        legalRefs: ["Article R412-12 du Code de la route"]
      },
      {
        id: 'sec-alcool-stupefiants',
        title: 'Alcool et stupéfiants',
        keyPoints: [
          "Taux légal : 0,5 g/L de sang (0,25 mg/L d'air expiré)",
          "Jeunes conducteurs et professionnels : 0,2 g/L de sang",
          "Stupéfiants : tolérance zéro, dépistage possible même sans infraction",
          "Refus de dépistage = mêmes sanctions que test positif"
        ],
        tips: [
          "1 verre = environ 0,25 g/L. Élimination : 0,10 à 0,15 g/L par heure",
          "Sanctions : jusqu'à 4 500€ d'amende et 3 ans de prison (récidive)"
        ],
        legalRefs: ["Articles L234-1 à L234-9 du Code de la route"]
      },
      {
        id: 'sec-fatigue',
        title: 'Fatigue et vigilance',
        keyPoints: [
          "Pause obligatoire : 20 min minimum toutes les 2 heures de conduite",
          "Signes de fatigue : bâillements, yeux qui piquent, ligne blanche franchie",
          "Heures à risque : 2h-5h et 13h-15h (creux de vigilance)",
          "Seul remède efficace : le sommeil"
        ],
        tips: [
          "Le café n'annule pas la fatigue, il la masque temporairement (20-30 min)",
          "Une micro-sieste de 15-20 min = équivalent à plusieurs heures de repos"
        ],
        legalRefs: ["Sécurité routière - Prévention"]
      },
      {
        id: 'sec-premiers-secours',
        title: 'Premiers secours',
        keyPoints: [
          "PAS : Protéger - Alerter - Secourir",
          "Position Latérale de Sécurité (PLS) : personne inconsciente qui respire",
          "Massage cardiaque : 100-120 compressions/minute, profondeur 5-6 cm",
          "Numéros d'urgence : 15 (SAMU), 17 (Police), 18 (Pompiers), 112 (européen)"
        ],
        tips: [
          "Ne jamais déplacer une victime sauf danger immédiat (feu, explosion)",
          "Garder son calme et parler clairement au 15/18/112"
        ],
        legalRefs: ["Formation aux premiers secours"]
      }
    ]
  },

  // =====================
  // RÉGLEMENTATION T3P
  // =====================
  {
    moduleId: 'reglementation',
    moduleName: 'Réglementation T3P',
    moduleIcon: '📋',
    introduction: "Le transport public particulier de personnes (T3P) est encadré par le Code des transports. Ce module couvre les conditions d'accès et les obligations professionnelles.",
    cards: [
      {
        id: 'reg-acces',
        title: "Conditions d'accès à la profession",
        keyPoints: [
          "Permis B depuis au moins 3 ans (ou 1 an si conduite accompagnée)",
          "Casier judiciaire compatible (bulletin n°2)",
          "Aptitude médicale attestée par un médecin agréé",
          "Réussite à l'examen T3P (admissibilité + admission)"
        ],
        tips: [
          "L'examen comprend 7 épreuves dont Gestion, Sécurité, Français, Anglais",
          "Seuil de réussite : 10/20 à chaque épreuve, moyenne générale ≥ 12/20"
        ],
        legalRefs: ["Articles L3120-1 à L3120-6 du Code des transports"]
      },
      {
        id: 'reg-carte-pro',
        title: 'Carte professionnelle',
        keyPoints: [
          "Délivrée par la préfecture pour 5 ans",
          "Doit être visible dans le véhicule pendant l'activité",
          "Renouvellement : formation continue obligatoire",
          "Mention de la catégorie : Taxi, VTC ou VMDTR"
        ],
        tips: [
          "Sans carte = exercice illégal passible de sanctions pénales",
          "Formation continue : 14 heures sur 5 ans minimum"
        ],
        legalRefs: ["Article R3120-7 du Code des transports"]
      },
      {
        id: 'reg-vehicule',
        title: 'Véhicule professionnel',
        keyPoints: [
          "Âge maximum : 6 ans (7 ans véhicules hybrides/électriques)",
          "Contrôle technique annuel pour usage professionnel",
          "Assurance transport de personnes à titre onéreux obligatoire",
          "Équipements spécifiques selon la catégorie (taximètre, lumineux...)"
        ],
        tips: [
          "VTC : pas de signe distinctif obligatoire sauf vignette verte",
          "Taxi : lumineux, taximètre, couleur selon commune"
        ],
        legalRefs: ["Décret n°2017-483 du 6 avril 2017"]
      }
    ]
  },

  // =====================
  // ANGLAIS
  // =====================
  {
    moduleId: 'anglais',
    moduleName: 'Anglais',
    moduleIcon: '🇬🇧',
    introduction: "L'anglais est essentiel pour accueillir une clientèle internationale, notamment pour les transferts aéroport et le tourisme.",
    cards: [
      {
        id: 'ang-accueil',
        title: 'Accueil et salutations',
        keyPoints: [
          "Good morning/afternoon/evening = Bonjour (selon l'heure)",
          "How may I help you? = Comment puis-je vous aider ?",
          "Welcome to Paris! = Bienvenue à Paris !",
          "May I take your luggage? = Puis-je prendre vos bagages ?"
        ],
        tips: [
          "Utilisez 'May I' plutôt que 'Can I' pour plus de politesse",
          "Le sourire et le ton sont aussi importants que les mots"
        ],
        legalRefs: []
      },
      {
        id: 'ang-trajet',
        title: 'Pendant le trajet',
        keyPoints: [
          "Could you confirm the address? = Pouvez-vous confirmer l'adresse ?",
          "We should arrive in approximately 30 minutes = Nous arriverons dans environ 30 minutes",
          "Is the temperature comfortable for you? = La température vous convient-elle ?",
          "Would you prefer the scenic route? = Préférez-vous la route panoramique ?"
        ],
        tips: [
          "'Approximately' ou 'about' = environ (ne pas promettre un temps exact)",
          "Proposer des choix montre un service personnalisé"
        ],
        legalRefs: []
      },
      {
        id: 'ang-tourisme',
        title: 'Vocabulaire tourisme',
        keyPoints: [
          "Landmark = monument emblématique",
          "Sightseeing = visite touristique",
          "One-way ticket = aller simple / Round-trip = aller-retour",
          "Check-in = enregistrement / Check-out = départ (hôtel)"
        ],
        tips: [
          "Terminal = aérogare. CDG a 3 terminaux, toujours confirmer lequel",
          "Duty-free = hors taxes (boutiques aéroport)"
        ],
        legalRefs: []
      },
      {
        id: 'ang-fin-course',
        title: 'Fin de course et paiement',
        keyPoints: [
          "We have arrived at your destination = Nous sommes arrivés",
          "How would you like to pay? = Comment souhaitez-vous payer ?",
          "Cash or card? = Espèces ou carte ?",
          "Please don't forget your belongings = N'oubliez pas vos affaires"
        ],
        tips: [
          "Have a pleasant flight! = Bon vol ! (transfert aéroport)",
          "Thank you for choosing our service = Merci d'avoir choisi notre service"
        ],
        legalRefs: []
      }
    ]
  },

  // =====================
  // VTC
  // =====================
  {
    moduleId: 'vtc',
    moduleName: 'Spécifique VTC',
    moduleIcon: '🚗',
    introduction: "Le VTC (Voiture de Transport avec Chauffeur) se distingue du taxi par l'obligation de réservation préalable et l'interdiction de la maraude.",
    cards: [
      {
        id: 'vtc-reservation',
        title: 'Réservation préalable',
        keyPoints: [
          "Réservation OBLIGATOIRE avant toute prise en charge",
          "Interdiction de stationner sur la voie publique en attente de client",
          "Interdiction de la maraude électronique (applications temps réel)",
          "Le client doit avoir réservé AVANT que le véhicule ne se mette en route"
        ],
        tips: [
          "C'est LA différence fondamentale avec les taxis",
          "Maraude = chercher des clients sans réservation = sanctionné"
        ],
        legalRefs: ["Article L3122-9 du Code des transports"]
      },
      {
        id: 'vtc-vehicule',
        title: 'Véhicule VTC',
        keyPoints: [
          "4-9 places (conducteur compris)",
          "Moins de 6 ans (7 ans si hybride/électrique)",
          "Puissance minimale : 84 kW (ou 4,5m de longueur)",
          "Vignette verte VTC visible sur le pare-brise"
        ],
        tips: [
          "Pas de taximètre ni de lumineux de toit",
          "Contrôle technique annuel obligatoire"
        ],
        legalRefs: ["Décret n°2017-483 du 6 avril 2017"]
      },
      {
        id: 'vtc-tarification',
        title: 'Tarification VTC',
        keyPoints: [
          "Tarifs libres (non réglementés)",
          "Prix convenu à l'avance avec le client",
          "Possibilité de forfait ou tarif kilométrique",
          "Facturation obligatoire avec mentions légales"
        ],
        tips: [
          "Transparence = confiance : toujours annoncer le prix avant la course",
          "Conserver les justificatifs (réservation + facture)"
        ],
        legalRefs: ["Code de commerce - Facturation"]
      }
    ]
  },

  // =====================
  // TAXI PARIS 75
  // =====================
  {
    moduleId: 'taxi-75',
    moduleName: 'Taxi Paris 75',
    moduleIcon: '🚖',
    introduction: "Les taxis parisiens sont soumis à une réglementation spécifique combinant règles nationales et arrêtés préfectoraux.",
    cards: [
      {
        id: 'tx75-licence',
        title: 'Licence taxi Paris',
        keyPoints: [
          "Autorisation de Stationnement (ADS) délivrée par la Préfecture de Police",
          "Zone de prise en charge : Paris et communes limitrophes autorisées",
          "Transmissible sous conditions (ancienneté, exploitant unique)",
          "Incessibilité des nouvelles licences depuis 2014 (loi Thévenoud)"
        ],
        tips: [
          "Licence ≠ carte professionnelle. Les deux sont obligatoires",
          "Maraude autorisée sur la voie publique (différence majeure avec VTC)"
        ],
        legalRefs: ["Loi n°2014-1104 du 1er octobre 2014 (loi Thévenoud)"]
      },
      {
        id: 'tx75-taximetre',
        title: 'Taximètre et tarification',
        keyPoints: [
          "Taximètre homologué et scellé obligatoire",
          "4 tarifs (A, B, C, D) selon zone/horaire/jour",
          "Prise en charge + prix kilométrique + temps d'attente",
          "Suppléments autorisés : 4ème passager, bagages en soute, animal"
        ],
        tips: [
          "Tarif A = le moins cher (Paris, jour, semaine)",
          "Tarif D = le plus cher (banlieue, nuit, dimanche/férié)"
        ],
        legalRefs: ["Arrêté préfectoral tarifaire annuel"]
      },
      {
        id: 'tx75-equipements',
        title: 'Équipements obligatoires',
        keyPoints: [
          "Lumineux de toit avec mention 'TAXI PARISIEN'",
          "Terminal de paiement électronique (TPE) - CB obligatoire tout montant",
          "Imprimante pour note/facture",
          "Compteur de prise en charge visible du client"
        ],
        tips: [
          "Lumineux vert = libre / Lumineux éteint = occupé ou hors service",
          "Refuser la carte = infraction passible de sanction"
        ],
        legalRefs: ["Arrêté préfectoral - Équipements taxi"]
      }
    ]
  },

  // =====================
  // TOPOGRAPHIE PARIS
  // =====================
  {
    moduleId: 'topographie-paris',
    moduleName: 'Topographie Paris',
    moduleIcon: '🗼',
    introduction: "La connaissance de Paris est essentielle pour un chauffeur professionnel : monuments, gares, hôpitaux et axes de circulation.",
    cards: [
      {
        id: 'topo-monuments',
        title: 'Monuments emblématiques',
        keyPoints: [
          "Tour Eiffel : 7ème arr., Champ de Mars",
          "Arc de Triomphe : 8ème arr., place Charles de Gaulle (Étoile)",
          "Sacré-Cœur : 18ème arr., Montmartre",
          "Notre-Dame : 4ème arr., Île de la Cité"
        ],
        tips: [
          "Louvre (1er), Musée d'Orsay (7ème), Centre Pompidou (4ème)",
          "Versailles : hors Paris, Yvelines (78), environ 30 min"
        ],
        legalRefs: []
      },
      {
        id: 'topo-gares',
        title: 'Gares SNCF',
        keyPoints: [
          "Gare du Nord : 10ème arr., Eurostar, Thalys, TGV Nord",
          "Gare de Lyon : 12ème arr., TGV Sud-Est, Suisse, Italie",
          "Gare Montparnasse : 15ème arr., TGV Atlantique, Ouest",
          "Gare de l'Est : 10ème arr., TGV Est, Allemagne"
        ],
        tips: [
          "6 grandes gares parisiennes : Nord, Est, Lyon, Montparnasse, Saint-Lazare, Austerlitz",
          "Gare de l'Est et Gare du Nord sont proches (10ème arr.)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-hopitaux',
        title: 'Principaux hôpitaux',
        keyPoints: [
          "Pitié-Salpêtrière : 13ème arr., plus grand hôpital de France",
          "Hôpital Européen Georges-Pompidou (HEGP) : 15ème arr.",
          "Hôtel-Dieu : 4ème arr., Île de la Cité, urgences",
          "Cochin : 14ème arr., Port-Royal"
        ],
        tips: [
          "AP-HP = Assistance Publique - Hôpitaux de Paris",
          "En urgence, les hôpitaux sont identifiés par une croix rouge"
        ],
        legalRefs: []
      },
      {
        id: 'topo-axes',
        title: 'Axes majeurs',
        keyPoints: [
          "Périphérique : ceinture de 35 km autour de Paris",
          "Champs-Élysées : Concorde ↔ Étoile (Arc de Triomphe)",
          "Grands Boulevards : du 2ème au 10ème arr.",
          "Boulevard Saint-Germain : rive gauche, 5ème-7ème arr."
        ],
        tips: [
          "Porte de la Chapelle = A1 (Roissy CDG)",
          "Porte d'Orléans = A6 (Lyon, Orly)"
        ],
        legalRefs: []
      }
    ]
  },

  // =====================
  // RELATION CLIENT
  // =====================
  {
    moduleId: 'relation-client',
    moduleName: 'Relation Client',
    moduleIcon: '🤝',
    introduction: "La qualité de service est le premier facteur de fidélisation et de différenciation. Chaque course est une opportunité de créer une expérience positive.",
    cards: [
      {
        id: 'rel-accueil',
        title: 'Accueil du client',
        keyPoints: [
          "Ponctualité : arriver à l'heure (ou prévenir en cas de retard)",
          "Présentation : tenue correcte, véhicule propre",
          "Salutation : bonjour, bienvenue, proposer l'aide aux bagages",
          "Confirmation : vérifier la destination et les préférences"
        ],
        tips: [
          "Les premières secondes déterminent l'impression générale",
          "Un sourire et un contact visuel créent la confiance"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conduite',
        title: 'Pendant la course',
        keyPoints: [
          "Conduite souple et anticipée (pas d'accélérations/freinages brusques)",
          "Respect des préférences : musique, climatisation, conversation",
          "Information : durée estimée, itinéraire choisi, conditions de circulation",
          "Discrétion : ne pas imposer de conversation"
        ],
        tips: [
          "S'adapter au client : certains veulent parler, d'autres du calme",
          "Expliquer un itinéraire alternatif rassure le client"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conflits',
        title: 'Gestion des conflits',
        keyPoints: [
          "Écouter le client sans l'interrompre",
          "Rester calme et professionnel en toutes circonstances",
          "S'excuser si nécessaire (même si pas responsable)",
          "Proposer une solution ou un geste commercial"
        ],
        tips: [
          "Un client mécontent qui repart satisfait devient souvent fidèle",
          "Ne jamais hausser le ton ni être agressif"
        ],
        legalRefs: []
      }
    ]
  }
];

// Fonctions utilitaires
export const getRevisionModuleById = (moduleId: string): RevisionModule | undefined => {
  return revisionModules.find(m => m.moduleId === moduleId);
};

export const getAllRevisionModules = (): RevisionModule[] => {
  return revisionModules;
};
