// Fiches de cours théoriques pour le mode révision T3P
// Contenu conforme au référentiel officiel de l'examen T3P

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
    introduction: "La gestion d'une activité de transport nécessite des compétences en comptabilité, fiscalité et droit des sociétés. Ce module couvre les fondamentaux pour créer et gérer votre entreprise de transport.",
    cards: [
      {
        id: 'ges-formes-juridiques',
        title: 'Formes juridiques d\'entreprise',
        keyPoints: [
          "Entreprise individuelle (EI) : pas de capital minimum, responsabilité limitée au patrimoine professionnel depuis la loi du 14 février 2022",
          "EURL : société unipersonnelle à responsabilité limitée, capital libre, gérant unique = TNS si majoritaire",
          "SARL : 2 à 100 associés, capital divisé en parts sociales, cession contrôlée",
          "SASU : société par actions simplifiée unipersonnelle, capital libre en actions, président = assimilé salarié",
          "SAS : 2 associés minimum, grande liberté statutaire, actions librement cessibles",
          "Immatriculation obligatoire au Répertoire des Métiers (RM) pour les activités artisanales (VTC = artisanat)",
          "Code APE transport : 49.32Z (transport de voyageurs par taxis)"
        ],
        tips: [
          "Gérant majoritaire SARL/EURL = TNS : cotisations ~45% mais protection sociale moindre",
          "Président SAS/SASU = assimilé salarié : cotisations ~80% mais régime général Sécurité sociale",
          "L'EI est la forme la plus simple mais attention aux implications fiscales"
        ],
        legalRefs: ["Code de commerce Art. L123-1", "Loi n°2022-172 du 14 février 2022", "Code de l'artisanat"]
      },
      {
        id: 'ges-creation-entreprise',
        title: 'Création d\'entreprise',
        keyPoints: [
          "Annonce légale obligatoire pour les sociétés (SARL, SAS, SA) mais pas pour l'EI",
          "Immatriculation au RCS (commerce) ou RM (artisanat) selon l'activité",
          "Numéro SIREN (9 chiffres) = identifie l'entreprise / SIRET (14 chiffres) = identifie l'établissement",
          "Durée de vie d'une société : 99 ans maximum, prorogeable",
          "Centre de Formalités des Entreprises (CFE) : guichet unique pour les démarches",
          "Statuts obligatoires pour les sociétés : objet social, siège, capital, gérance",
          "Déclaration de non-condamnation et de filiation obligatoire pour le dirigeant"
        ],
        tips: [
          "Pas d'immatriculation = pas d'existence légale = travail dissimulé",
          "Délai d'immatriculation : environ 1 semaine après dépôt complet",
          "Penser à ouvrir un compte bancaire professionnel (obligatoire pour les sociétés)"
        ],
        legalRefs: ["Articles L232-22 et L238-3 du Code de commerce", "Décret n°96-650 du 19 juillet 1996"]
      },
      {
        id: 'ges-comptabilite',
        title: 'Documents comptables obligatoires',
        keyPoints: [
          "Bilan : photographie du patrimoine à un instant T (Actif = Passif toujours)",
          "Actif = emplois (immobilisations, stocks, créances, trésorerie)",
          "Passif = ressources (capitaux propres + dettes fournisseurs/bancaires)",
          "Compte de résultat : film de l'activité sur l'exercice (Produits - Charges = Résultat)",
          "Annexe : complément d'information sur les comptes",
          "Livre-journal : enregistrement chronologique des opérations",
          "Grand livre : regroupement par compte comptable",
          "Conservation obligatoire : 10 ans pour les documents comptables, 6 ans pour les documents fiscaux"
        ],
        tips: [
          "Résultat positif = bénéfice, Résultat négatif = déficit (perte)",
          "Les micro-entrepreneurs ont des obligations comptables allégées (livre des recettes)",
          "Un expert-comptable n'est pas obligatoire mais fortement conseillé"
        ],
        legalRefs: ["Article L123-12 du Code de commerce", "Article L123-22 (conservation)", "Plan Comptable Général"]
      },
      {
        id: 'ges-soldes-gestion',
        title: 'Soldes intermédiaires de gestion',
        keyPoints: [
          "Chiffre d'affaires (CA) = total des ventes de prestations HT",
          "Valeur ajoutée = CA - consommations intermédiaires (mesure la richesse créée)",
          "EBE (Excédent Brut d'Exploitation) = VA - charges de personnel - impôts",
          "Résultat d'exploitation = EBE - amortissements - provisions",
          "Résultat financier = produits financiers - charges financières",
          "Résultat exceptionnel = opérations hors activité normale",
          "Résultat net = résultat d'exploitation + financier + exceptionnel - impôt sur les bénéfices",
          "Seuil de rentabilité = niveau de CA à partir duquel l'entreprise devient bénéficiaire"
        ],
        tips: [
          "L'EBE mesure la performance économique pure, avant financement et amortissement",
          "Seuil de rentabilité = Charges fixes / Taux de marge sur coûts variables",
          "Un EBE positif ne garantit pas un résultat net positif (attention aux charges financières)"
        ],
        legalRefs: ["Plan Comptable Général", "Analyse financière - SIG"]
      },
      {
        id: 'ges-fiscalite',
        title: 'Fiscalité et TVA',
        keyPoints: [
          "TVA = Taxe sur la Valeur Ajoutée, taux normal 20% pour le transport de personnes",
          "TVA collectée = TVA facturée aux clients (dette envers l'État)",
          "TVA déductible = TVA payée sur les achats (créance sur l'État)",
          "TVA à décaisser = TVA collectée - TVA déductible (si positif = à payer)",
          "Crédit de TVA = si TVA déductible > TVA collectée (remboursement possible)",
          "Franchise en base : micro-entreprise exonérée de TVA si CA < seuils (77 700€ services)",
          "TVA carburant : gazole/essence récupérable à 80%, GPL/GNV/électricité 100%",
          "Régimes TVA : réel normal (mensuel), réel simplifié (acomptes + solde), franchise"
        ],
        tips: [
          "En micro-entreprise, pas de TVA = pas de récupération mais pas de facturation non plus",
          "Plafond récupération TVA véhicule tourisme : limité sauf véhicules dédiés au transport",
          "Conserver toutes les factures d'achat avec TVA détaillée"
        ],
        legalRefs: ["Article 256 du CGI", "Article 271 du CGI", "Article 298-4-1° du CGI (carburant)"]
      },
      {
        id: 'ges-charges-sociales',
        title: 'Charges sociales',
        keyPoints: [
          "CSG (Contribution Sociale Généralisée) : 9,2% dont 6,8% déductibles, finance la Sécurité sociale",
          "CRDS (Contribution au Remboursement de la Dette Sociale) : 0,5%, créée en 1996",
          "Cotisations TNS : environ 45% du bénéfice (maladie, retraite, allocations familiales)",
          "Cotisations assimilé salarié : environ 80% du salaire brut",
          "URSSAF : organisme de recouvrement des cotisations sociales",
          "SSI (Sécurité Sociale des Indépendants) : régime des TNS, intégré au régime général",
          "Micro-entrepreneur : cotisations forfaitaires sur CA (22% pour les services)"
        ],
        tips: [
          "CSG = financement Sécurité sociale / CRDS = remboursement dette, ne pas confondre",
          "Le régime TNS offre des cotisations moins élevées mais une protection moindre (retraite notamment)",
          "Prévoir les cotisations dans le calcul du prix de revient d'une course"
        ],
        legalRefs: ["Article L136-1-1 du Code de la sécurité sociale", "Ordonnance n°96-50 du 24 janvier 1996 (CRDS)"]
      },
      {
        id: 'ges-amortissement',
        title: 'Amortissement et investissement',
        keyPoints: [
          "Amortissement = répartition du coût d'un bien durable sur sa durée d'utilisation",
          "Investissement = acquisition d'un bien utilisé plus d'un an (immobilisation)",
          "Charge = consommation immédiate (carburant, entretien courant, fournitures)",
          "Durée amortissement véhicule : généralement 4-5 ans (20-25% par an)",
          "Amortissement linéaire = montant constant chaque année",
          "Amortissement dégressif = montant décroissant (avantage fiscal au début)",
          "Plafond fiscal véhicule : 18 300€ (ou 30 000€ si faibles émissions, 9 900€ si >200g CO2/km)",
          "L'amortissement est une charge non décaissée qui réduit le bénéfice imposable"
        ],
        tips: [
          "Véhicule 25 000€ sur 5 ans = 5 000€/an de charge d'amortissement",
          "Au-delà du plafond fiscal, l'amortissement n'est pas déductible",
          "Le leasing (LOA/LLD) est une alternative à l'achat avec amortissement"
        ],
        legalRefs: ["Article 39 du CGI", "Article 39 B du CGI", "Article 39-4 du CGI (plafonds)"]
      },
      {
        id: 'ges-cout-revient',
        title: 'Coût de revient et rentabilité',
        keyPoints: [
          "Coût de revient = ensemble des charges pour réaliser une prestation",
          "Charges directes : carburant, péages, usure kilométrique",
          "Charges indirectes : assurance, abonnements, charges fixes (à répartir)",
          "Prix de vente = coût de revient + marge souhaitée",
          "Marge = prix de vente - coût de revient",
          "Charges fixes : indépendantes du CA (assurance, loyer, abonnements)",
          "Charges variables : proportionnelles à l'activité (carburant, commissions plateformes)",
          "Point mort = nombre de courses minimum pour couvrir les charges fixes"
        ],
        tips: [
          "Calculer son coût kilométrique : (carburant + usure + entretien) / km parcourus",
          "Ne pas oublier les charges de structure dans le calcul du prix minimum",
          "Objectif : CA > coût de revient total pour dégager un bénéfice"
        ],
        legalRefs: ["Comptabilité de gestion", "Analyse des coûts"]
      },
      {
        id: 'ges-difficultes',
        title: 'Difficultés et cessation',
        keyPoints: [
          "Cessation de paiement : impossibilité de faire face au passif exigible avec l'actif disponible",
          "Déclaration obligatoire au tribunal de commerce dans les 45 jours",
          "Procédures collectives : sauvegarde, redressement judiciaire, liquidation judiciaire",
          "Sauvegarde : entreprise pas encore en cessation de paiement (prévention)",
          "Redressement : poursuite de l'activité avec plan de redressement",
          "Liquidation : arrêt définitif de l'activité et vente des actifs",
          "Faute de gestion : engagement possible de la responsabilité personnelle du dirigeant"
        ],
        tips: [
          "Ne pas attendre pour déclarer les difficultés : le tribunal peut aider",
          "La sauvegarde protège des créanciers tout en continuant l'activité",
          "Consulter un avocat ou expert-comptable dès les premiers signes de difficulté"
        ],
        legalRefs: ["Article L631-4 du Code de commerce", "Livre VI du Code de commerce"]
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
    introduction: "La sécurité routière est au cœur du métier de conducteur professionnel. Ce module aborde les règles essentielles du Code de la route, la prévention des risques, l'éco-conduite et les premiers secours.",
    cards: [
      {
        id: 'sec-distances',
        title: 'Distances de sécurité et freinage',
        keyPoints: [
          "Distance de sécurité : au moins 2 secondes entre véhicules (repère visuel)",
          "Distance d'arrêt = distance de réaction + distance de freinage",
          "Temps de réaction moyen : 1 seconde (variable selon fatigue, alcool...)",
          "À 50 km/h : distance d'arrêt ≈ 28m (14m réaction + 14m freinage)",
          "À 90 km/h : distance d'arrêt ≈ 70m (25m réaction + 45m freinage)",
          "À 130 km/h : distance d'arrêt ≈ 130m (36m réaction + 94m freinage)",
          "La distance d'arrêt quadruple quand la vitesse double",
          "Sur route mouillée : distance de freinage multipliée par 1,5 à 2"
        ],
        tips: [
          "Méthode des 2 chevrons sur autoroute : au moins un chevron d'écart",
          "En ville, la distance de sécurité reste primordiale malgré la faible vitesse",
          "Anticiper les freinages pour un freinage souple (confort passager)"
        ],
        legalRefs: ["Article R412-12 du Code de la route"]
      },
      {
        id: 'sec-vitesses',
        title: 'Limitations de vitesse',
        keyPoints: [
          "Agglomération : 50 km/h (30 km/h en zone 30, 20 km/h en zone de rencontre)",
          "Route hors agglomération : 80 km/h (certaines à 90 km/h sur décision locale)",
          "Route à 2 chaussées séparées : 110 km/h",
          "Autoroute : 130 km/h (110 km/h par temps de pluie)",
          "Jeune conducteur : -10 km/h sur voies rapides (100/110 km/h au lieu de 110/130)",
          "Visibilité < 50m (brouillard) : 50 km/h maximum partout",
          "Le dépassement de 50 km/h ou plus entraîne suspension immédiate du permis"
        ],
        tips: [
          "Adapter sa vitesse aux conditions même en dessous des limites",
          "Les radars mesurent la vitesse retenue (marge technique de 5% ou 5 km/h)",
          "En tant que professionnel, montrer l'exemple : respect strict des limitations"
        ],
        legalRefs: ["Articles R413-1 à R413-17 du Code de la route"]
      },
      {
        id: 'sec-alcool-stupefiants',
        title: 'Alcool et stupéfiants',
        keyPoints: [
          "Taux légal d'alcoolémie : 0,5 g/L de sang (0,25 mg/L d'air expiré)",
          "Jeunes conducteurs et professionnels : 0,2 g/L de sang recommandé",
          "Contravention : 0,5 à 0,79 g/L = 135€ + 6 points + immobilisation possible",
          "Délit : ≥ 0,8 g/L = 4 500€ + 6 points + suspension/annulation + prison possible",
          "Stupéfiants : tolérance zéro, dépistage salivaire ou sanguin",
          "Stupéfiants + alcool : sanctions cumulées et aggravées",
          "Refus de dépistage = mêmes sanctions que le délit de conduite sous influence"
        ],
        tips: [
          "1 verre standard (10g d'alcool pur) ≈ 0,20-0,25 g/L en moyenne",
          "Élimination : 0,10 à 0,15 g/L par heure (le café n'accélère pas l'élimination)",
          "En cas de doute : ne pas conduire ou utiliser un éthylotest"
        ],
        legalRefs: ["Articles L234-1 à L234-9 du Code de la route", "Article L235-1 (stupéfiants)"]
      },
      {
        id: 'sec-fatigue-vigilance',
        title: 'Fatigue et vigilance',
        keyPoints: [
          "La fatigue est impliquée dans près d'un accident mortel sur trois sur autoroute",
          "Signes de fatigue : bâillements, yeux qui piquent, raideur nuque, ligne blanche franchie",
          "Creux de vigilance : 2h-5h du matin et 13h-15h (rythme circadien)",
          "Pause obligatoire recommandée : 15-20 min toutes les 2 heures de conduite",
          "La dette de sommeil est cumulative (se récupère sur plusieurs jours)",
          "Une micro-sieste de 15-20 min restaure la vigilance pour 2-3 heures",
          "Les stimulants (café, energy drinks) masquent la fatigue temporairement (20-30 min)"
        ],
        tips: [
          "Seul remède efficace contre la fatigue : le sommeil",
          "Ouvrir la fenêtre ou monter la musique ne fonctionne pas durablement",
          "Planifier ses courses en tenant compte de la fatigue accumulée"
        ],
        legalRefs: ["Sécurité routière - Prévention", "Recommandations professionnelles"]
      },
      {
        id: 'sec-eco-conduite',
        title: 'Éco-conduite',
        keyPoints: [
          "Anticiper le trafic et les freinages (éviter accélérations/freinages brusques)",
          "Maintenir une vitesse stable (régulateur de vitesse sur route)",
          "Couper le moteur dès 20-30 secondes d'arrêt prévu",
          "Utiliser le frein moteur en décélération (pas de consommation)",
          "Pression des pneus : vérifier mensuellement (+0,2 bar si chargé)",
          "Sous-gonflage = surconsommation de 3-4% et usure prématurée",
          "Climatisation : +10 à 15% de consommation en ville",
          "Économie potentielle : 15-25% de carburant avec une conduite souple"
        ],
        tips: [
          "L'éco-conduite améliore aussi le confort des passagers",
          "Passer les vitesses entre 2000-2500 tr/min (essence) ou 1500-2000 (diesel)",
          "Les bonus écologiques évoluent : vérifier les aides en vigueur"
        ],
        legalRefs: ["Transition énergétique", "Recommandations ADEME"]
      },
      {
        id: 'sec-equipements-securite',
        title: 'Équipements de sécurité',
        keyPoints: [
          "Ceinture de sécurité obligatoire pour tous (conducteur et passagers)",
          "Non-port de ceinture : 135€ + 3 points pour le conducteur",
          "Enfants de moins de 10 ans : siège adapté obligatoire (sauf exceptions)",
          "Gilet de sécurité et triangle de présignalisation obligatoires à bord",
          "Gilet à portée de main (pas dans le coffre) en cas d'arrêt d'urgence",
          "Éthylotest non obligatoire mais recommandé (pas de sanction si absent)",
          "Extincteur non obligatoire pour les véhicules particuliers mais conseillé"
        ],
        tips: [
          "Le conducteur est responsable du port de la ceinture par les passagers mineurs",
          "Toujours vérifier l'état des équipements de sécurité avant chaque service",
          "Trousse de premiers secours recommandée dans le véhicule"
        ],
        legalRefs: ["Article R412-1 (ceinture)", "Article R416-19 (gilet et triangle)"]
      },
      {
        id: 'sec-premiers-secours',
        title: 'Premiers secours (PAS)',
        keyPoints: [
          "PAS : Protéger - Alerter - Secourir (ordre impératif)",
          "Protéger : baliser les lieux, éviter le sur-accident, couper le contact",
          "Alerter : 15 (SAMU), 17 (Police), 18 (Pompiers), 112 (numéro européen)",
          "Message d'alerte : lieu précis, nombre de victimes, état apparent, gestes effectués",
          "Position Latérale de Sécurité (PLS) : victime inconsciente qui respire",
          "Massage cardiaque : 100-120 compressions/minute, profondeur 5-6 cm, au centre du thorax",
          "Défibrillateur (DAE) : suit les instructions vocales, interrompt le massage pour l'analyse"
        ],
        tips: [
          "Ne jamais déplacer une victime sauf danger immédiat (feu, explosion, noyade)",
          "Rester calme, parler doucement à la victime, la couvrir (prévention hypothermie)",
          "Formation PSC1 recommandée pour tous les conducteurs professionnels"
        ],
        legalRefs: ["Obligation d'assistance à personne en danger (art. 223-6 Code pénal)"]
      },
      {
        id: 'sec-signalisation',
        title: 'Signalisation et priorités',
        keyPoints: [
          "Feux tricolores : rouge = arrêt, orange = arrêt si possible, vert = passage",
          "Panneau STOP : arrêt obligatoire à la ligne, céder le passage",
          "Cédez le passage : ralentir, laisser passer les véhicules prioritaires",
          "Rond-point : priorité aux véhicules déjà engagés (sauf signalisation contraire)",
          "Véhicules prioritaires (gyrophare + sirène) : faciliter leur passage",
          "Passage piéton : céder le passage aux piétons engagés ou manifestant l'intention",
          "Tramway : toujours prioritaire sauf signalisation contraire"
        ],
        tips: [
          "En cas de doute sur la priorité : prudence et courtoisie",
          "Les véhicules prioritaires peuvent franchir les feux rouges (vous non)",
          "Le piéton est toujours vulnérable : anticiper ses mouvements"
        ],
        legalRefs: ["Articles R411 à R422 du Code de la route"]
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
    introduction: "Le transport public particulier de personnes (T3P) regroupe les taxis, VTC et VMDTR. Il est encadré par le Code des transports et des textes réglementaires spécifiques. Ce module couvre les conditions d'accès communes à toutes les professions.",
    cards: [
      {
        id: 'reg-definition-t3p',
        title: 'Définition et cadre légal T3P',
        keyPoints: [
          "T3P = Transport Public Particulier de Personnes",
          "3 catégories : Taxi, VTC (Voiture de Transport avec Chauffeur), VMDTR (Véhicules Motorisés à 2 ou 3 Roues)",
          "Transport à titre onéreux : rémunération obligatoire (≠ covoiturage)",
          "Transport à la demande : le client choisit le trajet (≠ transport collectif)",
          "Code des transports : Livre Ier, Titre II (articles L3120-1 et suivants)",
          "Loi Thévenoud (1er octobre 2014) : réforme majeure du secteur",
          "Loi Grandguillaume (29 décembre 2016) : renforcement des contrôles"
        ],
        tips: [
          "Le covoiturage n'est pas du T3P car le conducteur partage les frais et ne fait pas de bénéfice",
          "Les centrales de réservation sont aussi encadrées par la réglementation T3P",
          "Le non-respect de la réglementation expose à des sanctions pénales"
        ],
        legalRefs: ["Articles L3120-1 à L3124-13 du Code des transports", "Loi n°2014-1104 (Thévenoud)", "Loi n°2016-1920 (Grandguillaume)"]
      },
      {
        id: 'reg-acces-profession',
        title: "Conditions d'accès à la profession",
        keyPoints: [
          "Permis B en cours de validité depuis au moins 3 ans (ou 2 ans si conduite accompagnée)",
          "Casier judiciaire compatible : bulletin n°2 vérifié par la préfecture",
          "Infractions incompatibles : crimes, délits à la sécurité des personnes, conduite sous influence...",
          "Aptitude médicale : visite médicale par médecin agréé par la préfecture",
          "Visite tous les 5 ans (ou plus fréquente selon l'âge ou l'état de santé)",
          "Réussite à l'examen T3P ou équivalence/expérience professionnelle",
          "Inscription obligatoire au registre des VTC ou détention d'une ADS (taxi)"
        ],
        tips: [
          "L'examen T3P comprend 7 épreuves réparties en admissibilité et admission",
          "Moyenne générale requise : 12/20 avec minimum 10/20 à chaque épreuve",
          "Le casier est vérifié automatiquement chaque année par la préfecture"
        ],
        legalRefs: ["Articles L3120-2-1 et R3120-7 du Code des transports", "Arrêté du 6 avril 2017 (examen)"]
      },
      {
        id: 'reg-carte-professionnelle',
        title: 'Carte professionnelle',
        keyPoints: [
          "Délivrée par le préfet du département de domicile",
          "Validité : 5 ans renouvelable",
          "Mention obligatoire de la catégorie : Taxi, VTC ou VMDTR",
          "Doit être visible et accessible dans le véhicule pendant l'exercice",
          "Photo d'identité, numéro d'enregistrement, date de validité",
          "Renouvellement : demande 2 mois avant expiration + formation continue",
          "Formation continue obligatoire : 14 heures minimum sur 5 ans",
          "Retrait possible en cas de condamnation ou manquement grave"
        ],
        tips: [
          "Sans carte professionnelle valide = exercice illégal = sanctions pénales",
          "La formation continue peut être faite en une fois ou répartie sur 5 ans",
          "Signaler tout changement d'adresse à la préfecture"
        ],
        legalRefs: ["Article R3120-7 du Code des transports", "Arrêté du 2 février 2016 (formation continue)"]
      },
      {
        id: 'reg-examen-t3p',
        title: 'Examen T3P',
        keyPoints: [
          "Épreuves d'admissibilité (communes) : Réglementation T3P, Gestion, Sécurité routière, Français, Anglais",
          "Épreuves d'admission (spécifiques) : Réglementation locale + Conduite et comportement",
          "QCM à 4 réponses avec une seule bonne réponse",
          "Durée totale : environ 3h30 pour l'admissibilité",
          "Seuil de réussite : 10/20 minimum à chaque épreuve + moyenne générale ≥ 12/20",
          "En cas d'échec : représentation possible après 1 mois",
          "Équivalence possible pour certains diplômes (BTS Tourisme, etc.)"
        ],
        tips: [
          "Réviser le Code des transports et les arrêtés préfectoraux locaux",
          "Les questions portent sur des situations concrètes du métier",
          "L'épreuve de conduite évalue aussi le comportement (accueil client, etc.)"
        ],
        legalRefs: ["Arrêté du 6 avril 2017 relatif à l'examen T3P"]
      },
      {
        id: 'reg-obligations-communes',
        title: 'Obligations professionnelles communes',
        keyPoints: [
          "Assurance responsabilité civile professionnelle obligatoire",
          "Assurance transport de personnes à titre onéreux",
          "Respect du Code de la route et des règles de stationnement",
          "Obligation d'information du client sur le prix ou mode de calcul",
          "Interdiction de refus de course discriminatoire (origine, handicap...)",
          "Obligation d'accepter les animaux d'assistance (chiens guides)",
          "Interdiction de fumer dans le véhicule en présence de passagers",
          "Tenue vestimentaire correcte et véhicule propre"
        ],
        tips: [
          "Le refus de course pour motif légitime (sécurité, destination hors zone) est possible",
          "Conserver les preuves de réservation et les factures",
          "La ponctualité et le professionnalisme sont essentiels à la réputation"
        ],
        legalRefs: ["Articles L3120-4 à L3120-6 du Code des transports"]
      },
      {
        id: 'reg-vehicule-conditions',
        title: 'Conditions relatives au véhicule',
        keyPoints: [
          "Âge maximum du véhicule : 6 ans (7 ans pour hybrides/électriques)",
          "Nombre de places : 4 à 9 places assises (conducteur compris)",
          "État d'entretien irréprochable : propreté, fonctionnement de tous les équipements",
          "Contrôle technique à jour (annuel pour usage professionnel)",
          "Assurance en cours de validité avec attestation à bord",
          "Carte grise (certificat d'immatriculation) mentionnant le nom de l'exploitant",
          "Dimensions minimales VTC : puissance ≥ 84 kW OU longueur ≥ 4,50m OU largeur ≥ 1,70m"
        ],
        tips: [
          "Les véhicules hybrides et électriques bénéficient d'un an supplémentaire",
          "Le contrôle technique professionnel est plus strict que le particulier",
          "Prévoir un véhicule de remplacement en cas d'immobilisation"
        ],
        legalRefs: ["Décret n°2017-483 du 6 avril 2017"]
      },
      {
        id: 'reg-sanctions',
        title: 'Sanctions et contrôles',
        keyPoints: [
          "Exercice sans carte professionnelle : 1 an de prison + 15 000€ d'amende",
          "Maraude illégale (VTC) : 1 an de prison + 15 000€ d'amende",
          "Défaut d'assurance : 3 750€ d'amende + suspension/annulation permis",
          "Refus de course discriminatoire : 45 000€ d'amende + 3 ans de prison",
          "Contrôles effectués par : police, gendarmerie, DGCCRF, agents assermentés",
          "Immobilisation et mise en fourrière du véhicule possibles",
          "Retrait ou suspension de la carte professionnelle par le préfet"
        ],
        tips: [
          "Les plateformes de mise en relation sont aussi contrôlées et sanctionnables",
          "Coopérer avec les forces de l'ordre lors des contrôles",
          "Avoir tous les documents à jour et accessibles dans le véhicule"
        ],
        legalRefs: ["Articles L3124-1 à L3124-13 du Code des transports"]
      }
    ]
  },

  // =====================
  // FRANÇAIS
  // =====================
  {
    moduleId: 'francais',
    moduleName: 'Français',
    moduleIcon: '🇫🇷',
    introduction: "La maîtrise du français professionnel est essentielle pour communiquer efficacement avec les clients, rédiger des documents administratifs et comprendre les textes réglementaires.",
    cards: [
      {
        id: 'fra-communication-orale',
        title: 'Communication orale professionnelle',
        keyPoints: [
          "Formules de politesse : Bonjour, Au revoir, S'il vous plaît, Merci, Je vous en prie",
          "Vouvoiement systématique avec les clients",
          "Écoute active : laisser parler, reformuler, confirmer la compréhension",
          "Ton de voix : calme, posé, audible sans être trop fort",
          "Éviter le jargon technique avec les clients non-initiés",
          "S'adapter au niveau de langue du client",
          "Annoncer les informations importantes : prix, durée estimée, itinéraire"
        ],
        tips: [
          "Premier contact = première impression : soigner l'accueil",
          "En cas de malentendu : reformuler calmement sans accuser le client",
          "Le silence peut être préférable à un bavardage non souhaité"
        ],
        legalRefs: []
      },
      {
        id: 'fra-communication-ecrite',
        title: 'Communication écrite professionnelle',
        keyPoints: [
          "Facture : mentions obligatoires (nom, adresse, SIRET, date, montant HT/TTC)",
          "Note : version simplifiée pour les petits montants",
          "Courriel professionnel : objet clair, formule d'appel, corps concis, signature",
          "SMS/message : bref, informatif, sans abréviation excessive",
          "Orthographe : relire avant envoi, utiliser un correcteur",
          "Réclamation : accuser réception, répondre point par point, rester courtois"
        ],
        tips: [
          "Un courriel professionnel reflète l'image de votre entreprise",
          "Éviter les majuscules (= crier) et les points d'exclamation multiples",
          "Conserver une copie de tous les échanges écrits importants"
        ],
        legalRefs: ["Code de commerce (facturation)", "RGPD (données clients)"]
      },
      {
        id: 'fra-comprehension-textes',
        title: 'Compréhension de textes',
        keyPoints: [
          "Lecture active : identifier le sujet, les mots-clés, la structure",
          "Textes réglementaires : lire attentivement chaque mot (nuances juridiques)",
          "Contrat : vérifier les obligations réciproques, les clauses de résiliation",
          "Articles de presse : distinguer faits et opinions",
          "Courriers administratifs : identifier l'émetteur, l'objet, les délais",
          "Vocabulaire juridique courant : stipuler, abroger, en vigueur, préjudice"
        ],
        tips: [
          "En cas de doute sur un texte juridique : consulter un professionnel",
          "Surligner les points importants lors de la première lecture",
          "Ne jamais signer un document sans l'avoir lu intégralement"
        ],
        legalRefs: []
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
    introduction: "L'anglais est la langue internationale du tourisme et des affaires. Maîtriser les bases permet d'accueillir une clientèle internationale, notamment pour les transferts aéroport et les visites touristiques.",
    cards: [
      {
        id: 'ang-accueil',
        title: 'Accueil et salutations',
        keyPoints: [
          "Good morning (matin) / Good afternoon (après-midi) / Good evening (soir)",
          "Hello, welcome! = Bonjour, bienvenue !",
          "How may I help you? = Comment puis-je vous aider ? (plus poli que 'Can I')",
          "My name is... I will be your driver today = Je m'appelle... Je serai votre chauffeur",
          "May I take your luggage? = Puis-je prendre vos bagages ?",
          "Please, make yourself comfortable = Je vous en prie, installez-vous confortablement",
          "Is this your first time in Paris? = Est-ce votre première fois à Paris ?"
        ],
        tips: [
          "'May I' est plus poli que 'Can I' dans un contexte professionnel",
          "Le sourire et le contact visuel sont universels",
          "Adapter son débit de parole : plus lent si le client semble ne pas comprendre"
        ],
        legalRefs: []
      },
      {
        id: 'ang-trajet-informations',
        title: 'Informations pendant le trajet',
        keyPoints: [
          "Could you please confirm the address? = Pouvez-vous confirmer l'adresse ?",
          "We should arrive in approximately 30 minutes = Nous arriverons dans environ 30 minutes",
          "There is some traffic ahead = Il y a du trafic devant nous",
          "I will take an alternative route = Je vais prendre un itinéraire alternatif",
          "Is the temperature comfortable for you? = La température vous convient-elle ?",
          "Would you like some music? = Souhaitez-vous de la musique ?",
          "Feel free to ask if you need anything = N'hésitez pas à demander si vous avez besoin de quelque chose"
        ],
        tips: [
          "'Approximately' ou 'about' indiquent une estimation (ne pas promettre d'heure exacte)",
          "Informer proactivement sur les conditions de circulation rassure le client",
          "Proposer des choix montre un service personnalisé"
        ],
        legalRefs: []
      },
      {
        id: 'ang-tourisme-lieux',
        title: 'Vocabulaire tourisme et lieux',
        keyPoints: [
          "Landmark = monument emblématique, point de repère",
          "Sightseeing = visite touristique",
          "Museum = musée / Gallery = galerie",
          "Cathedral = cathédrale / Church = église",
          "Railway station = gare / Airport = aéroport / Terminal = aérogare",
          "City center / Downtown = centre-ville",
          "Suburb = banlieue / Outskirts = périphérie",
          "Bridge = pont / River = fleuve (Seine) / Avenue = avenue"
        ],
        tips: [
          "Connaître le nom anglais des principaux monuments parisiens",
          "Eiffel Tower, Louvre Museum, Arc de Triomphe, Notre-Dame Cathedral",
          "CDG = Charles de Gaulle Airport, ORY = Orly Airport"
        ],
        legalRefs: []
      },
      {
        id: 'ang-transport-aeroport',
        title: 'Vocabulaire aéroport et transport',
        keyPoints: [
          "Flight = vol / Departure = départ / Arrival = arrivée",
          "Boarding pass = carte d'embarquement",
          "Gate = porte d'embarquement",
          "Check-in = enregistrement / Check-out = départ (hôtel)",
          "One-way ticket = aller simple / Round-trip = aller-retour",
          "Duty-free = hors taxes (boutiques détaxées)",
          "Luggage / Baggage = bagages / Carry-on = bagage cabine",
          "Transfer = transfert / Pick-up = prise en charge"
        ],
        tips: [
          "Toujours confirmer le terminal (CDG a les terminaux 1, 2A-2G, 3)",
          "Demander l'heure du vol pour prévoir les marges de sécurité",
          "Business travelers = voyageurs d'affaires (souvent pressés)"
        ],
        legalRefs: []
      },
      {
        id: 'ang-paiement-fin-course',
        title: 'Paiement et fin de course',
        keyPoints: [
          "We have arrived at your destination = Nous sommes arrivés",
          "The fare is... euros = Le tarif est de... euros",
          "How would you like to pay? = Comment souhaitez-vous payer ?",
          "Cash or card? = Espèces ou carte ?",
          "Here is your receipt = Voici votre reçu",
          "Please don't forget your belongings = N'oubliez pas vos affaires",
          "Thank you for choosing our service = Merci d'avoir choisi notre service",
          "Have a pleasant stay / flight / day = Bon séjour / vol / journée"
        ],
        tips: [
          "Préparer la monnaie et le terminal de paiement avant l'arrivée",
          "Vérifier le véhicule après chaque course (objets oubliés)",
          "Une formule de politesse finale laisse une bonne impression"
        ],
        legalRefs: []
      },
      {
        id: 'ang-situations-difficiles',
        title: 'Situations difficiles en anglais',
        keyPoints: [
          "I apologize for the delay = Je m'excuse pour le retard",
          "I'm afraid there's been a problem = Je crains qu'il y ait eu un problème",
          "Could you please repeat that? = Pourriez-vous répéter s'il vous plaît ?",
          "I don't understand, could you speak more slowly? = Je ne comprends pas, parlez plus lentement ?",
          "Let me check that for you = Laissez-moi vérifier cela",
          "I will do my best to help you = Je ferai de mon mieux pour vous aider",
          "Please remain calm = Restez calme s'il vous plaît"
        ],
        tips: [
          "'I'm afraid' adoucit l'annonce d'une mauvaise nouvelle",
          "Ne pas hésiter à demander de répéter ou d'épeler",
          "Garder son calme même si le client s'énerve"
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
    introduction: "Le VTC (Voiture de Transport avec Chauffeur) se distingue du taxi par l'obligation de réservation préalable et l'interdiction de la maraude. Ce module couvre les spécificités réglementaires du métier de conducteur VTC.",
    cards: [
      {
        id: 'vtc-definition-principes',
        title: 'Définition et principes fondamentaux',
        keyPoints: [
          "VTC = Voiture de Transport avec Chauffeur (anciennement 'Grande Remise')",
          "Activité de transport de personnes sur réservation préalable",
          "Interdiction absolue de la maraude (prendre des clients dans la rue sans réservation)",
          "Interdiction de la maraude électronique (géolocalisation temps réel pour clients non réservés)",
          "Le client doit avoir réservé AVANT que le véhicule ne se mette en route vers lui",
          "Pas de signe distinctif obligatoire sauf vignette verte sur le pare-brise",
          "Tarifs libres (contrairement aux taxis réglementés)"
        ],
        tips: [
          "La réservation préalable est LA différence fondamentale avec le taxi",
          "Conserver les preuves de réservation (application, mail, SMS)",
          "Les contrôles de police vérifient l'existence de la réservation préalable"
        ],
        legalRefs: ["Article L3122-1 du Code des transports", "Article L3122-9 (réservation préalable)"]
      },
      {
        id: 'vtc-inscription-registre',
        title: 'Inscription au registre VTC',
        keyPoints: [
          "Inscription obligatoire au registre national des VTC",
          "Tenu par le ministère des transports (plateforme en ligne)",
          "Conditions : carte professionnelle VTC valide + assurance + véhicule conforme",
          "Numéro d'inscription à afficher dans le véhicule (vignette)",
          "Renouvellement annuel de l'inscription",
          "Radiation en cas de non-respect des conditions ou manquement grave",
          "Vérification possible en ligne par les clients et les autorités"
        ],
        tips: [
          "L'inscription au registre est distincte de l'immatriculation de l'entreprise",
          "Sans inscription = exercice illégal même avec carte professionnelle",
          "Vérifier le renouvellement chaque année (ne pas attendre l'expiration)"
        ],
        legalRefs: ["Article L3122-3 du Code des transports", "Décret n°2014-1725"]
      },
      {
        id: 'vtc-vehicule-specifications',
        title: 'Véhicule VTC : spécifications',
        keyPoints: [
          "Nombre de places : 4 à 9 places assises (conducteur compris)",
          "Âge maximum : 6 ans (7 ans si véhicule hybride ou électrique)",
          "Conditions techniques alternatives : puissance ≥ 84 kW OU longueur ≥ 4,50m OU largeur ≥ 1,70m",
          "Véhicule propre et en parfait état de fonctionnement",
          "Pas de taximètre ni de lumineux de toit (réservés aux taxis)",
          "Vignette VTC verte visible sur le pare-brise avant droit",
          "Contrôle technique annuel (usage professionnel)"
        ],
        tips: [
          "Les petits véhicules (citadines) ne respectent généralement pas les conditions VTC",
          "Vérifier les critères avant l'achat d'un véhicule",
          "L'état intérieur (propreté, odeurs) est aussi important que l'état mécanique"
        ],
        legalRefs: ["Décret n°2017-483 du 6 avril 2017", "Arrêté du 26 mars 2015"]
      },
      {
        id: 'vtc-reservation-prealable',
        title: 'Réservation préalable : règles',
        keyPoints: [
          "La réservation doit être effectuée AVANT la mise en route du véhicule",
          "Modes de réservation acceptés : application, téléphone, mail, site web",
          "La réservation doit être traçable et horodatée",
          "Informations minimum : identité client, lieu de prise en charge, destination",
          "Le véhicule ne peut pas stationner sur la voie publique en attente de client",
          "Retour à la base obligatoire entre deux courses (ou nouvelle réservation)",
          "La prise en charge 'à la volée' est interdite même si le client le demande"
        ],
        tips: [
          "Toujours pouvoir justifier la réservation en cas de contrôle",
          "Les plateformes (Uber, Bolt...) gèrent automatiquement la traçabilité",
          "En cas de course spontanée demandée par un passant : refuser poliment"
        ],
        legalRefs: ["Article L3122-9 du Code des transports"]
      },
      {
        id: 'vtc-tarification-facturation',
        title: 'Tarification et facturation',
        keyPoints: [
          "Tarifs libres : fixés par le VTC ou la plateforme (pas de réglementation)",
          "Modes de tarification possibles : forfait, prix kilométrique, temps + distance",
          "Information préalable du client obligatoire sur le prix ou mode de calcul",
          "Devis recommandé pour les longues distances ou prestations particulières",
          "Facturation obligatoire avec mentions légales (nom, SIRET, montant TTC...)",
          "Moyens de paiement : espèces, carte bancaire, application",
          "TVA à 10% pour le transport de voyageurs (si assujetti)"
        ],
        tips: [
          "Afficher clairement le prix avant la course évite les litiges",
          "Les suppléments (bagages, animaux, nuit) doivent être annoncés à l'avance",
          "Conserver une copie de chaque facture (obligations comptables)"
        ],
        legalRefs: ["Code de commerce (facturation)", "Article 279 du CGI (TVA 10%)"]
      },
      {
        id: 'vtc-plateformes-centrales',
        title: 'Plateformes et centrales de réservation',
        keyPoints: [
          "Les centrales de réservation (Uber, Bolt, etc.) sont des intermédiaires",
          "Elles doivent être inscrites au registre des intermédiaires T3P",
          "Elles ne peuvent mettre en relation qu'avec des conducteurs/véhicules conformes",
          "Commission prélevée sur chaque course (variable selon plateforme)",
          "Le conducteur reste responsable de la conformité de son activité",
          "Possibilité de travailler avec plusieurs plateformes simultanément",
          "Statut du conducteur : indépendant (pas salarié de la plateforme)"
        ],
        tips: [
          "Comparer les conditions des différentes plateformes (commissions, zones)",
          "Diversifier ses sources de clientèle (particuliers, entreprises, plateformes)",
          "Le conducteur est son propre patron : il assume les risques et bénéfices"
        ],
        legalRefs: ["Article L3141-1 du Code des transports (centrales)", "Loi n°2016-1088 (travail indépendant)"]
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
    introduction: "Les taxis parisiens sont soumis à une réglementation spécifique combinant les règles nationales du Code des transports et les arrêtés préfectoraux locaux. Ce module couvre les particularités de l'exploitation d'un taxi à Paris.",
    cards: [
      {
        id: 'tx75-ads-licence',
        title: 'Autorisation de Stationnement (ADS)',
        keyPoints: [
          "ADS = Autorisation de Stationnement, communément appelée 'licence taxi'",
          "Délivrée par le préfet de police de Paris (pour le 75)",
          "Nombre limité (environ 17 000 taxis parisiens)",
          "Attachée à une zone géographique : Paris et communes limitrophes autorisées",
          "Incessibilité des nouvelles ADS depuis la loi Thévenoud (1er octobre 2014)",
          "Anciennes ADS (avant 2014) : cessibles sous conditions (exploitant unique depuis 5 ans)",
          "L'ADS est distincte de la carte professionnelle (les deux sont obligatoires)"
        ],
        tips: [
          "Ne pas confondre ADS (exploitation du taxi) et carte pro (aptitude à conduire)",
          "Liste d'attente pour les nouvelles ADS : plusieurs années",
          "Rachat d'une ADS ancienne : vérifier les conditions avec la préfecture"
        ],
        legalRefs: ["Loi n°2014-1104 du 1er octobre 2014 (Thévenoud)", "Articles L3121-1 et suivants du Code des transports"]
      },
      {
        id: 'tx75-zones-maraude',
        title: 'Zones de maraude et prise en charge',
        keyPoints: [
          "Maraude = chercher des clients en circulant ou en stationnant (réservé aux taxis)",
          "Zone de prise en charge : Paris et communes limitrophes autorisées",
          "Stations de taxis : emplacements réservés avec tête de station",
          "Règle de la file : le premier arrivé est le premier servi",
          "Client peut choisir n'importe quel taxi de la file (pas forcément le premier)",
          "Prise en charge hors zone : uniquement sur réservation préalable",
          "Course vers une destination hors zone : obligatoire (pas de refus)"
        ],
        tips: [
          "Le client a le droit de choisir son taxi dans la file",
          "Refuser une course vers une destination lointaine est interdit (sauf fin de service)",
          "Connaître les stations de taxi principales de son secteur"
        ],
        legalRefs: ["Arrêté préfectoral relatif aux taxis parisiens"]
      },
      {
        id: 'tx75-taximetre-tarifs',
        title: 'Taximètre et tarification',
        keyPoints: [
          "Taximètre homologué et scellé obligatoire (vérifié annuellement)",
          "4 tarifs réglementés identifiés par des lettres lumineuses A, B, C, D",
          "Tarif A : Paris jour (10h-17h) en semaine = le moins cher",
          "Tarif B : Paris nuit (17h-10h) ou dimanche ou banlieue jour",
          "Tarif C : Banlieue nuit (19h-7h) ou dimanche + retour à vide",
          "Tarif D : Zone aéroport et longue distance (le plus cher)",
          "Composition du prix : prise en charge + kilométrage + temps d'attente",
          "Forfaits aéroports : CDG↔Paris rive droite 56€, rive gauche 65€ / Orly 36€-44€"
        ],
        tips: [
          "Le client peut voir le tarif appliqué sur le lumineux de toit",
          "Les forfaits aéroports s'appliquent quelle que soit la durée effective",
          "Le taximètre doit être visible du client pendant la course"
        ],
        legalRefs: ["Arrêté préfectoral tarifaire annuel", "Articles R3121-1 et suivants du Code des transports"]
      },
      {
        id: 'tx75-supplements',
        title: 'Suppléments autorisés',
        keyPoints: [
          "4ème passager adulte : supplément autorisé (environ 4€)",
          "Bagages en soute : supplément par bagage volumineux",
          "Animal de compagnie : supplément possible (sauf chien guide = gratuit)",
          "Réservation téléphonique : supplément prise en charge (environ 4€)",
          "Trajets depuis gares/aéroports : la prise en charge inclut l'attente",
          "Suppléments interdits : pourboire obligatoire, refus espèces, surtarification",
          "Affichage obligatoire des tarifs et suppléments dans le véhicule"
        ],
        tips: [
          "Le supplément 4ème passager ne s'applique pas aux enfants de moins de 10 ans",
          "Les chiens d'assistance (aveugles, handicapés) sont transportés gratuitement",
          "Toujours annoncer les suppléments avant la course"
        ],
        legalRefs: ["Arrêté préfectoral tarifaire"]
      },
      {
        id: 'tx75-equipements-obligatoires',
        title: 'Équipements obligatoires du taxi parisien',
        keyPoints: [
          "Lumineux de toit : mention 'TAXI PARISIEN' + lettres de tarif",
          "Vert = libre, éteint ou orange = occupé/réservé/hors service",
          "Taximètre homologué, scellé et vérifié annuellement",
          "Imprimante pour notes/factures ou système électronique",
          "Terminal de paiement électronique (TPE) : carte bancaire obligatoire tout montant",
          "Plaque d'identification fixée sur le véhicule (numéro ADS)",
          "Affichage tarifaire visible par le client (grille des prix)",
          "Carnet de bord ou système électronique équivalent"
        ],
        tips: [
          "Refuser la carte bancaire est une infraction passible de sanction",
          "Vérifier quotidiennement le bon fonctionnement de tous les équipements",
          "Le lumineux doit être allumé en service (même occupé = visible)"
        ],
        legalRefs: ["Arrêté préfectoral relatif aux équipements", "Décret n°2017-235 (paiement électronique)"]
      },
      {
        id: 'tx75-obligations-droits',
        title: 'Obligations et droits du taxi parisien',
        keyPoints: [
          "Obligation de transport : ne peut refuser une course sauf motif légitime",
          "Motifs légitimes de refus : sécurité, état du client, fin de service imminente",
          "Itinéraire : le plus court ou le plus rapide selon demande du client",
          "Information du client sur le tarif applicable dès la prise en charge",
          "Droit de demander le règlement de la course avant le départ (courses longues)",
          "Droit de refuser les animaux (sauf chiens guides)",
          "Obligation de propreté du véhicule et tenue correcte du conducteur",
          "Interdiction de fumer dans le véhicule"
        ],
        tips: [
          "Noter le motif de refus en cas de course refusée (justification possible)",
          "Le client peut demander un reçu systématiquement",
          "En cas de litige : rester calme, donner le numéro de la préfecture"
        ],
        legalRefs: ["Articles R3121-1 et suivants du Code des transports"]
      },
      {
        id: 'tx75-controles-sanctions',
        title: 'Contrôles et sanctions spécifiques',
        keyPoints: [
          "Contrôles par la Préfecture de Police, police, gendarmerie",
          "Vérification : ADS, carte pro, taximètre, assurance, état du véhicule",
          "Refus de transport non justifié : amende + suspension possible",
          "Tarification non conforme : amende + immobilisation possible",
          "Défaut de TPE ou refus CB : amende 150€ + signalement préfecture",
          "Stationnement illicite sur station : verbalisation",
          "Comportement non professionnel : avertissement puis suspension ADS"
        ],
        tips: [
          "Coopérer avec les agents lors des contrôles",
          "Avoir tous les documents à portée de main",
          "En cas de contestation : voie de recours devant le tribunal administratif"
        ],
        legalRefs: ["Articles R3124-1 et suivants du Code des transports", "Arrêtés préfectoraux"]
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
    introduction: "La connaissance de Paris est essentielle pour un chauffeur professionnel. Ce module couvre les monuments emblématiques, les gares, les hôpitaux, les axes de circulation et l'organisation des arrondissements.",
    cards: [
      {
        id: 'topo-arrondissements',
        title: 'Organisation des arrondissements',
        keyPoints: [
          "Paris : 20 arrondissements numérotés en spirale depuis le centre (1er = Louvre)",
          "Rive droite (nord de la Seine) : 1er au 4ème, 8ème au 12ème, 16ème au 20ème",
          "Rive gauche (sud de la Seine) : 5ème au 7ème, 13ème au 15ème",
          "Centre historique : 1er-4ème (Louvre, Marais, Île de la Cité)",
          "Beaux quartiers : 7ème, 8ème, 16ème (ambassades, luxe)",
          "Quartiers d'affaires : 8ème (Champs-Élysées), 9ème (Opéra), La Défense (92)",
          "Quartier latin : 5ème-6ème (universités, Sorbonne)",
          "Montmartre : 18ème / Belleville-Ménilmontant : 19ème-20ème"
        ],
        tips: [
          "Les deux derniers chiffres du code postal = numéro d'arrondissement (75008 = 8ème)",
          "Mémoriser les limites : boulevard périphérique = ceinture de Paris",
          "Savoir situer approximativement chaque arrondissement sur une carte mentale"
        ],
        legalRefs: []
      },
      {
        id: 'topo-monuments-majeurs',
        title: 'Monuments emblématiques',
        keyPoints: [
          "Tour Eiffel : 7ème arr., Champ de Mars, métro Bir-Hakeim/Trocadéro",
          "Arc de Triomphe : 8ème arr., place Charles de Gaulle (Étoile), 12 avenues",
          "Sacré-Cœur : 18ème arr., butte Montmartre, métro Anvers/Abbesses",
          "Notre-Dame : 4ème arr., Île de la Cité (en reconstruction après l'incendie 2019)",
          "Panthéon : 5ème arr., montagne Sainte-Geneviève, métro Cardinal Lemoine",
          "Invalides : 7ème arr., tombeau de Napoléon, métro Invalides/Varenne",
          "Opéra Garnier : 9ème arr., métro Opéra",
          "Place de la Concorde : 8ème arr., obélisque, entre Tuileries et Champs-Élysées"
        ],
        tips: [
          "L'axe historique : Louvre → Tuileries → Concorde → Champs-Élysées → Arc de Triomphe → La Défense",
          "Savoir indiquer les accès les plus pratiques (métro, parkings)",
          "Attention aux zones piétonnes et restrictions de circulation"
        ],
        legalRefs: []
      },
      {
        id: 'topo-musees-culture',
        title: 'Musées et lieux culturels',
        keyPoints: [
          "Musée du Louvre : 1er arr., pyramide de verre, plus grand musée du monde",
          "Musée d'Orsay : 7ème arr., ancienne gare, impressionnistes",
          "Centre Pompidou (Beaubourg) : 4ème arr., art moderne, architecture remarquable",
          "Musée Rodin : 7ème arr., hôtel Biron, jardin avec Le Penseur",
          "Grand Palais / Petit Palais : 8ème arr., expositions temporaires",
          "Palais de Tokyo : 16ème arr., art contemporain",
          "Cité des Sciences : 19ème arr., Parc de la Villette",
          "Philharmonie de Paris : 19ème arr., Parc de la Villette"
        ],
        tips: [
          "Jours de fermeture : la plupart des musées nationaux ferment le mardi",
          "Nocturnes : certains musées ouvrent tard certains soirs (Louvre mercredi/vendredi)",
          "Prévoir les embouteillages lors des grandes expositions"
        ],
        legalRefs: []
      },
      {
        id: 'topo-gares-sncf',
        title: 'Gares SNCF parisiennes',
        keyPoints: [
          "Gare du Nord : 10ème arr., Eurostar (Londres), Thalys (Belgique), TGV Nord",
          "Gare de l'Est : 10ème arr., TGV Est (Strasbourg, Allemagne), proche Gare du Nord",
          "Gare de Lyon : 12ème arr., TGV Sud-Est (Lyon, Marseille), Suisse, Italie",
          "Gare Montparnasse : 15ème arr., TGV Atlantique (Bordeaux, Nantes, Bretagne)",
          "Gare Saint-Lazare : 8ème arr., trains vers Normandie (pas de TGV)",
          "Gare d'Austerlitz : 13ème arr., trains vers Centre et Sud-Ouest (moins de TGV)"
        ],
        tips: [
          "6 grandes gares parisiennes, chacune dessert une direction géographique",
          "Gare du Nord = la plus fréquentée d'Europe",
          "Prévoir le temps de dépose (circulation + distance dans la gare)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-aeroports',
        title: 'Aéroports parisiens',
        keyPoints: [
          "Paris-Charles de Gaulle (CDG) : Roissy (95), 3 terminaux (1, 2A-2G, 3)",
          "Accès CDG : A1 (Porte de la Chapelle), RER B, bus Roissybus",
          "Paris-Orly (ORY) : Orly (94), 4 terminaux (1 à 4, anciennement Sud/Ouest)",
          "Accès Orly : A6 (Porte d'Orléans), Orlyval+RER B, tramway T7, bus Orlybus",
          "Paris-Le Bourget : aéroport d'affaires et salons aéronautiques",
          "Paris-Beauvais : à 85 km, low-cost (Ryanair)",
          "Forfaits taxi aéroports : CDG 56-65€, Orly 36-44€ selon rive"
        ],
        tips: [
          "Toujours demander le terminal exact (CDG terminal 2 a plusieurs halls)",
          "Prévoir 1h pour CDG depuis Paris (trafic), 30-45min pour Orly",
          "Zones de dépose rapide : limitées en temps (risque d'amende)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-hopitaux-urgences',
        title: 'Hôpitaux et urgences',
        keyPoints: [
          "Pitié-Salpêtrière : 13ème arr., plus grand hôpital de France, toutes spécialités",
          "Hôpital Européen Georges-Pompidou (HEGP) : 15ème arr., moderne, urgences",
          "Hôtel-Dieu : 4ème arr., Île de la Cité, urgences centre de Paris",
          "Cochin : 14ème arr., Port-Royal, maternité réputée",
          "Necker-Enfants malades : 15ème arr., pédiatrie, urgences enfants",
          "Lariboisière : 10ème arr., près Gare du Nord, urgences",
          "Saint-Louis : 10ème arr., dermatologie, cancérologie",
          "Américain de Paris : Neuilly (92), hôpital privé, clientèle internationale"
        ],
        tips: [
          "AP-HP = Assistance Publique - Hôpitaux de Paris (réseau public)",
          "En urgence : appeler le 15 (SAMU) pour orientation vers l'hôpital approprié",
          "Connaître l'hôpital le plus proche de chaque quartier de son secteur"
        ],
        legalRefs: []
      },
      {
        id: 'topo-axes-circulation',
        title: 'Axes majeurs de circulation',
        keyPoints: [
          "Boulevard Périphérique : 35 km, ceinture de Paris, sens horaire et anti-horaire",
          "Voies sur berges : fermées en grande partie (piétonisation)",
          "Champs-Élysées : Concorde ↔ Étoile, 2 km, sens unique vers l'Ouest",
          "Grands Boulevards : du 2ème au 10ème, anciens remparts",
          "Boulevard Saint-Germain : rive gauche, 5ème-7ème arr.",
          "Boulevard Haussmann : 8ème-9ème, grands magasins (Galeries Lafayette, Printemps)",
          "A1 : Porte de la Chapelle → Roissy CDG",
          "A6 : Porte d'Orléans → Orly et Lyon"
        ],
        tips: [
          "Le périphérique est souvent saturé aux heures de pointe (7h-9h, 17h-20h)",
          "Connaître les portes principales et leur correspondance avec les destinations",
          "Axes alternatifs en cas de bouchon : boulevards des Maréchaux"
        ],
        legalRefs: []
      },
      {
        id: 'topo-places-carrefours',
        title: 'Places et carrefours stratégiques',
        keyPoints: [
          "Place de l'Étoile (Charles de Gaulle) : 8ème, 12 avenues, Arc de Triomphe",
          "Place de la Concorde : 8ème, obélisque, entre Tuileries et Champs",
          "Place de la Bastille : 4ème/11ème/12ème, colonne de Juillet, Opéra Bastille",
          "Place de la République : 3ème/10ème/11ème, statue de Marianne",
          "Place du Châtelet : 1er, fontaine, deux théâtres, nœud de métro",
          "Place de la Nation : 11ème/12ème, colonnes, fin du Cours de Vincennes",
          "Place d'Italie : 13ème, centre commercial, carrefour majeur sud",
          "Place Clichy : 8ème/9ème/17ème/18ème, carrefour Montmartre"
        ],
        tips: [
          "Les grandes places sont souvent des nœuds de circulation complexes",
          "Mémoriser les sens de circulation et les sorties principales",
          "Attention aux manifestations fréquentes place de la République"
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
    introduction: "La qualité de service est le premier facteur de fidélisation et de différenciation dans un marché concurrentiel. Chaque course est une opportunité de créer une expérience positive qui génèrera des recommandations.",
    cards: [
      {
        id: 'rel-accueil-premiere-impression',
        title: 'Accueil et première impression',
        keyPoints: [
          "Les 20 premières secondes déterminent l'impression générale",
          "Ponctualité : arriver à l'heure ou prévenir en cas de retard",
          "Présentation personnelle : tenue correcte, propre, pas d'odeur désagréable",
          "Véhicule : propre extérieur/intérieur, pas d'odeur de tabac, température agréable",
          "Salutation : regarder le client, sourire, dire bonjour clairement",
          "Proposer l'aide : bagages, portière, installation",
          "Confirmation : destination, préférences (climatisation, musique, itinéraire)"
        ],
        tips: [
          "Un sourire sincère coûte rien mais vaut beaucoup",
          "Anticiper les besoins : ouvrir le coffre avant qu'on vous le demande",
          "Adapter sa tenue au type de clientèle (affaires vs tourisme)"
        ],
        legalRefs: []
      },
      {
        id: 'rel-communication-trajet',
        title: 'Communication pendant le trajet',
        keyPoints: [
          "Écoute active : laisser parler le client, ne pas interrompre",
          "Respecter les préférences : certains veulent parler, d'autres du silence",
          "Informer spontanément : durée estimée, conditions de circulation, itinéraire choisi",
          "Éviter les sujets polémiques : politique, religion, sujets sensibles",
          "Répondre aux questions : tourisme, recommandations, informations pratiques",
          "Volume et ton de voix : audible mais pas trop fort, ton calme et posé",
          "Téléphone personnel : éviter les appels personnels en présence du client"
        ],
        tips: [
          "Observer le langage non-verbal du client pour adapter son attitude",
          "Si le client travaille (ordinateur, téléphone) : ne pas le déranger",
          "Proposer sans imposer : 'Souhaitez-vous de la musique ?'"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conduite-confort',
        title: 'Conduite et confort passager',
        keyPoints: [
          "Conduite souple : pas d'accélérations/freinages brusques",
          "Anticipation : regarder loin, prévoir les manœuvres",
          "Respect du Code de la route : le client doit se sentir en sécurité",
          "Climatisation/chauffage : vérifier le confort du client",
          "Musique : volume adapté, style neutre ou choix du client",
          "Vitesse : ne pas donner l'impression de 'trainer' ni de foncer",
          "Itinéraire : expliquer les choix si le client le demande"
        ],
        tips: [
          "Une conduite nerveuse stresse le passager et nuit à l'image",
          "L'éco-conduite est aussi favorable au confort passager",
          "Demander au client s'il a une préférence d'itinéraire"
        ],
        legalRefs: []
      },
      {
        id: 'rel-gestion-conflits',
        title: 'Gestion des conflits et réclamations',
        keyPoints: [
          "Rester calme : ne jamais s'énerver ni hausser le ton",
          "Écouter entièrement : laisser le client exprimer son mécontentement",
          "Reformuler : 'Si je comprends bien, vous êtes mécontent parce que...'",
          "S'excuser si nécessaire : même si on n'est pas directement responsable",
          "Proposer une solution : geste commercial, explication, engagement d'amélioration",
          "Ne pas contredire frontalement : 'Je comprends votre point de vue'",
          "Garder une trace : noter l'incident pour analyse ultérieure"
        ],
        tips: [
          "Un client mécontent bien traité peut devenir un client fidèle",
          "En cas de conflit insoluble : donner les coordonnées de la préfecture",
          "Jamais de violence verbale ou physique, même provoqué"
        ],
        legalRefs: []
      },
      {
        id: 'rel-fin-course-fidelisation',
        title: 'Fin de course et fidélisation',
        keyPoints: [
          "Annoncer l'arrivée : 'Nous arrivons à destination'",
          "Stationner au plus près : sécurité et confort du client",
          "Aider à la descente : bagages, portière pour personnes âgées ou handicapées",
          "Rappel des affaires : 'N'oubliez pas de vérifier vos affaires'",
          "Remise du reçu : systématique ou sur demande selon réglementation",
          "Formule de politesse finale : 'Merci, bonne journée/bon voyage'",
          "Carte de visite : pour les clients potentiellement fidélisables"
        ],
        tips: [
          "La dernière impression est aussi importante que la première",
          "Un client satisfait en parle à 3 personnes, un mécontent à 10",
          "Vérifier le véhicule après chaque course (objets oubliés)"
        ],
        legalRefs: []
      },
      {
        id: 'rel-clientele-specifique',
        title: 'Clientèles spécifiques',
        keyPoints: [
          "Personnes handicapées : patience, proposer l'aide sans imposer, accessibilité",
          "Personnes âgées : prendre le temps, parler distinctement, aider aux bagages",
          "Familles avec enfants : sièges enfants si disponibles, patience",
          "Touristes : informations sur Paris, recommandations, quelques mots en anglais",
          "Voyageurs d'affaires : efficacité, discrétion, ponctualité absolue",
          "Clients alcoolisés : évaluer la situation, refuser si risque de trouble",
          "Chiens guides : transport obligatoire et gratuit pour l'animal"
        ],
        tips: [
          "S'adapter à chaque type de clientèle sans préjugés",
          "Le handicap n'est pas un motif de refus de transport",
          "Les voyageurs d'affaires apprécient le silence et le respect des délais"
        ],
        legalRefs: ["Article L3121-8 du Code des transports (chiens guides)"]
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
