// ============================================
// FICHES DE COURS T3P - TEMPLATE PÉDAGOGIQUE EXPERT
// Structure optimisée mobile-first, mémorisation rapide
// Conformité référentiel officiel T3P 2026
// ============================================

// 📝 Cas pratique résolu type examen
export interface PracticalCase {
  // Situation concrète (énoncé)
  situation: string;
  // Question posée (formulation type examen)
  question: string;
  // Réponse attendue (réponse courte)
  answer: string;
  // Raisonnement détaillé (le "pourquoi" pédagogique)
  reasoning: string;
}

export interface RevisionCard {
  id: string;
  title: string;
  // ⭐ L'essentiel à retenir (1 phrase max - message clé examen)
  essential: string;
  // 📖 Narratif pédagogique (explication contextualisée, 150-250 mots, raconte la règle)
  narrative?: string;
  // 📌 Points importants (3-5 points, 1 idée = 1 ligne)
  keyPoints: string[];
  // 🚕 Exemple terrain (situation réelle courte)
  fieldExample?: string;
  // 📝 Cas pratiques résolus (2-3, type examen)
  practicalCases?: PracticalCase[];
  // ⚠️ Attention à l'examen (piège fréquent)
  examWarning?: string;
  // 🧠 À ne pas confondre (Taxi/VTC/VMDTR)
  confusionPoints?: string[];
  // 💡 Astuces mémorisation
  tips: string[];
  // ⚖️ Références légales
  legalRefs: string[];
}

export interface RevisionModule {
  moduleId: string;
  moduleName: string;
  moduleIcon: string;
  // Domaine concerné
  domain: 'commun' | 'taxi' | 'vtc' | 'vmdtr';
  // Objectif examen (1 phrase)
  examObjective: string;
  introduction: string;
  cards: RevisionCard[];
}

export const revisionModules: RevisionModule[] = [
  // =====================================================
  // MODULE 1 : GESTION & COMPTABILITÉ
  // =====================================================
  {
    moduleId: 'gestion',
    moduleName: 'Gestion & Comptabilité',
    moduleIcon: '📊',
    domain: 'commun',
    examObjective: 'Maîtriser les bases comptables et fiscales pour créer et gérer une entreprise de transport.',
    introduction: "Fondamentaux de la création d'entreprise, comptabilité et fiscalité pour conducteurs T3P.",
    cards: [
      {
        id: 'ges-formes-juridiques',
        title: 'Formes juridiques',
        essential: "Le choix de la forme juridique impacte la responsabilité, les cotisations et la fiscalité.",
        keyPoints: [
          "EI : pas de capital, responsabilité limitée au patrimoine pro (loi 2022)",
          "EURL/SARL : capital libre, gérant = TNS si majoritaire (~45% cotisations)",
          "SASU/SAS : président = assimilé salarié (~80% cotisations, régime général)",
          "VTC = artisanat → inscription au Répertoire des Métiers obligatoire"
        ],
        fieldExample: "Un VTC choisit la SASU : il cotise plus mais bénéficie du régime général Sécu comme un salarié.",
        examWarning: "Ne pas confondre TNS (gérant majoritaire SARL) et assimilé salarié (président SAS).",
        confusionPoints: [
          "TNS = Travailleur Non Salarié (SARL/EURL) ≠ Assimilé salarié (SAS/SASU)",
          "EI ≠ Auto-entrepreneur (l'EI est la forme, le micro est le régime fiscal)"
        ],
        tips: [
          "Gérant majoritaire = TNS = moins de cotisations mais protection moindre",
          "Code APE transport de voyageurs : 49.32Z"
        ],
        legalRefs: ["Code de commerce Art. L123-1", "Loi n°2022-172 du 14 février 2022"]
      },
      {
        id: 'ges-creation-entreprise',
        title: 'Création d\'entreprise',
        essential: "Immatriculation au RCS/RM = existence légale. Sans elle, c'est du travail dissimulé.",
        keyPoints: [
          "SIREN (9 chiffres) = entreprise / SIRET (14 chiffres) = établissement",
          "Annonce légale obligatoire pour sociétés (pas pour EI)",
          "Durée max d'une société : 99 ans prorogeable",
          "Compte bancaire professionnel obligatoire pour les sociétés"
        ],
        fieldExample: "Un chauffeur VTC reçoit son Kbis après 1 semaine : il peut désormais exercer légalement.",
        examWarning: "Confondre SIREN et SIRET = erreur fréquente à l'examen.",
        tips: [
          "SIREN = 9 chiffres (entreprise)",
          "SIRET = SIREN + 5 chiffres (établissement)"
        ],
        legalRefs: ["Articles L232-22 et L238-3 du Code de commerce"]
      },
      {
        id: 'ges-comptabilite',
        title: 'Documents comptables',
        essential: "Bilan = patrimoine à un instant T / Compte de résultat = activité sur l'exercice.",
        keyPoints: [
          "Bilan : Actif (emplois) = Passif (ressources) → toujours équilibré",
          "Résultat = Produits - Charges (positif = bénéfice)",
          "Conservation : 10 ans docs comptables, 6 ans docs fiscaux",
          "Micro-entrepreneur : obligations allégées (livre des recettes)"
        ],
        fieldExample: "Fin d'année, le comptable établit le bilan : le taxi a 15 000€ d'actif et 10 000€ de dettes.",
        examWarning: "Le bilan n'est pas le résultat ! Bilan = photo du patrimoine, Résultat = film de l'activité.",
        tips: [
          "Bilan = photo instantanée",
          "Compte de résultat = film de l'année"
        ],
        legalRefs: ["Article L123-12 du Code de commerce", "Article L123-22 (conservation)"]
      },
      {
        id: 'ges-soldes-gestion',
        title: 'Soldes de gestion',
        essential: "L'EBE mesure la performance économique pure avant financement et amortissement.",
        keyPoints: [
          "CA = total des ventes HT",
          "Valeur ajoutée = CA - consommations intermédiaires",
          "EBE = VA - charges personnel - impôts",
          "Seuil de rentabilité = CA minimum pour être bénéficiaire"
        ],
        fieldExample: "Un VTC fait 60 000€ de CA avec 45 000€ de charges : son résultat net est de 15 000€.",
        examWarning: "EBE positif ≠ résultat net positif (les charges financières peuvent créer un déficit).",
        tips: [
          "Seuil de rentabilité = Charges fixes / Taux de marge"
        ],
        legalRefs: ["Plan Comptable Général"]
      },
      {
        id: 'ges-fiscalite',
        title: 'Fiscalité et TVA',
        essential: "TVA à décaisser = TVA collectée - TVA déductible. Transport de voyageurs = 10%.",
        keyPoints: [
          "TVA transport de voyageurs = 10% (article 68 annexe III CGI)",
          "Micro-entreprise : franchise TVA si CA < 77 700€ (services)",
          "TVA carburant : gazole/essence 80% récupérable, électrique 100%",
          "Crédit de TVA possible si déductible > collectée"
        ],
        fieldExample: "Un VTC collecte 1 000€ de TVA (10%) et en déduit 400€ sur ses achats : il reverse 600€ à l'État.",
        examWarning: "Le transport de voyageurs (taxi, VTC) bénéficie du taux réduit de 10%, pas du taux normal de 20%.",
        confusionPoints: [
          "10% = transport de voyageurs (T3P) ≠ 20% = taux normal TVA"
        ],
        tips: [
          "En micro, pas de TVA = pas de facturation mais pas de récupération non plus"
        ],
        legalRefs: ["Article 68 annexe III au CGI", "Article 279 b bis du CGI", "Article 298-4-1° du CGI (carburant)"]
      },
      {
        id: 'ges-charges-sociales',
        title: 'Charges sociales',
        essential: "CSG = financement Sécu (9,2%) / CRDS = remboursement dette (0,5%).",
        keyPoints: [
          "CSG : 9,2% dont 6,8% déductibles → finance la Sécurité sociale",
          "CRDS : 0,5% → rembourse la dette sociale (créée 1996)",
          "TNS : ~45% du bénéfice / Assimilé salarié : ~80% du brut",
          "Micro : 22% forfaitaire sur CA pour les services"
        ],
        fieldExample: "Un VTC en SASU se verse 3 000€ brut : environ 2 400€ partent en cotisations.",
        examWarning: "CSG ≠ CRDS : CSG finance la Sécu, CRDS rembourse la dette.",
        tips: [
          "CSG = Contribution Sociale Généralisée",
          "CRDS = Contribution Remboursement Dette Sociale"
        ],
        legalRefs: ["Article L136-1-1 du Code de la sécurité sociale"]
      },
      {
        id: 'ges-amortissement',
        title: 'Amortissement',
        essential: "L'amortissement répartit le coût d'un investissement sur sa durée d'utilisation.",
        keyPoints: [
          "Véhicule : généralement 4-5 ans (20-25%/an)",
          "Plafond fiscal : 18 300€ (30 000€ si faibles émissions)",
          "Charge ≠ investissement : carburant = charge, véhicule = immobilisation",
          "L'amortissement réduit le bénéfice imposable"
        ],
        fieldExample: "Véhicule 25 000€ sur 5 ans = 5 000€/an déduit du bénéfice imposable.",
        examWarning: "Au-delà du plafond (18 300€), la partie excédentaire n'est pas déductible.",
        tips: [
          "Linéaire = montant constant / Dégressif = décroissant"
        ],
        legalRefs: ["Article 39 du CGI", "Article 39-4 du CGI (plafonds)"]
      },
      {
        id: 'ges-cout-revient',
        title: 'Coût de revient',
        essential: "Prix de vente = Coût de revient + Marge. Toujours calculer son coût kilométrique.",
        keyPoints: [
          "Charges directes : carburant, péages, usure km",
          "Charges indirectes : assurance, abonnements (à répartir)",
          "Charges fixes ≠ variables (assurance vs carburant)",
          "Point mort = nb de courses pour couvrir les charges fixes"
        ],
        fieldExample: "Coût km = 0,35€. Pour une course de 20 km, le coût direct est de 7€.",
        examWarning: "Oublier les charges fixes dans le prix minimum = vendre à perte.",
        tips: [
          "Coût km = (carburant + entretien + usure) / km parcourus"
        ],
        legalRefs: ["Comptabilité de gestion"]
      },
      {
        id: 'ges-difficultes',
        title: 'Difficultés et cessation',
        essential: "Cessation de paiement = déclaration obligatoire au tribunal sous 45 jours.",
        keyPoints: [
          "Cessation = passif exigible > actif disponible",
          "Sauvegarde : avant cessation (prévention)",
          "Redressement : continuation avec plan",
          "Liquidation : arrêt définitif et vente des actifs"
        ],
        fieldExample: "Un taxi ne peut plus payer ses dettes depuis 30 jours : il a 15 jours pour se déclarer au tribunal.",
        examWarning: "Sauvegarde ≠ Redressement : la sauvegarde intervient AVANT la cessation de paiement.",
        tips: [
          "Ne pas attendre : le tribunal peut aider à trouver des solutions"
        ],
        legalRefs: ["Article L631-4 du Code de commerce", "Livre VI du Code de commerce"]
      }
    ]
  },

  // =====================================================
  // MODULE 2 : SÉCURITÉ ROUTIÈRE
  // =====================================================
  {
    moduleId: 'securite',
    moduleName: 'Sécurité routière',
    moduleIcon: '🛡️',
    domain: 'commun',
    examObjective: 'Connaître les règles du Code de la route, la prévention des risques et les premiers secours.',
    introduction: "Règles essentielles de sécurité, prévention des risques, éco-conduite et secourisme.",
    cards: [
      {
        id: 'sec-distances',
        title: 'Distances de sécurité',
        essential: "Distance d'arrêt = réaction + freinage. Elle quadruple quand la vitesse double.",
        keyPoints: [
          "Intervalle minimum : 2 secondes entre véhicules",
          "À 50 km/h : arrêt ≈ 28m (14m réaction + 14m freinage)",
          "À 130 km/h : arrêt ≈ 130m",
          "Route mouillée : freinage x1,5 à x2"
        ],
        fieldExample: "Sur autoroute à 130 km/h, il faut garder au moins 130m (2 chevrons) avec le véhicule devant.",
        examWarning: "La distance d'arrêt quadruple si la vitesse double (pas le double !).",
        tips: [
          "1 chevron = 50m environ sur autoroute",
          "Temps de réaction moyen : 1 seconde"
        ],
        legalRefs: ["Article R412-12 du Code de la route"]
      },
      {
        id: 'sec-vitesses',
        title: 'Limitations de vitesse',
        essential: "Ville 50 / Route 80 / 2x2 voies 110 / Autoroute 130 (pluie -10 à -20 km/h).",
        keyPoints: [
          "Agglomération : 50 km/h (30 en zone 30, 20 en zone rencontre)",
          "Route : 80 km/h (90 sur décision locale)",
          "Visibilité < 50m : 50 km/h maximum partout",
          "Dépassement 50+ km/h = suspension immédiate du permis"
        ],
        fieldExample: "Il pleut sur autoroute : la limite passe de 130 à 110 km/h automatiquement.",
        examWarning: "Jeune conducteur = -10 km/h sur voies rapides (100/110 au lieu de 110/130).",
        tips: [
          "Marge radar : 5% ou 5 km/h (le plus favorable)"
        ],
        legalRefs: ["Articles R413-1 à R413-17 du Code de la route"]
      },
      {
        id: 'sec-alcool-stupefiants',
        title: 'Alcool et stupéfiants',
        essential: "Taux légal : 0,5 g/L sang. À partir de 0,8 g/L = délit pénal.",
        keyPoints: [
          "0,5-0,79 g/L = contravention (135€ + 6 points)",
          "≥ 0,8 g/L = délit (4 500€ + prison possible)",
          "Stupéfiants : tolérance zéro, test salivaire",
          "Refus de dépistage = mêmes sanctions que délit"
        ],
        fieldExample: "Un chauffeur contrôlé à 0,6 g/L perd 6 points et paie 135€ d'amende.",
        examWarning: "0,5 g/L = contravention ≠ 0,8 g/L = délit. Ne pas confondre les seuils !",
        tips: [
          "1 verre standard ≈ 0,20-0,25 g/L",
          "Élimination : ~0,15 g/L par heure (le café ne change rien)"
        ],
        legalRefs: ["Articles L234-1 à L234-9 du Code de la route"]
      },
      {
        id: 'sec-fatigue-vigilance',
        title: 'Fatigue et vigilance',
        essential: "Seul remède contre la fatigue : le sommeil. Pause 15-20 min toutes les 2h.",
        keyPoints: [
          "Fatigue = 1/3 des accidents mortels sur autoroute",
          "Creux de vigilance : 2h-5h et 13h-15h",
          "Micro-sieste 15-20 min = 2-3h de vigilance restaurée",
          "Les stimulants masquent temporairement (20-30 min)"
        ],
        fieldExample: "Après 3h de conduite de nuit, le chauffeur s'arrête 20 min pour une micro-sieste.",
        examWarning: "Café/musique/fenêtre = solutions inefficaces. Seul le sommeil fonctionne.",
        tips: [
          "Signes : bâillements, yeux qui piquent, ligne franchie"
        ],
        legalRefs: ["Recommandations Sécurité routière"]
      },
      {
        id: 'sec-eco-conduite',
        title: 'Éco-conduite',
        essential: "Conduite souple = -15 à -25% de carburant + confort passager amélioré.",
        keyPoints: [
          "Anticiper : éviter accélérations/freinages brusques",
          "Couper le moteur dès 20-30 sec d'arrêt prévu",
          "Pneus : vérifier pression mensuelle (+0,2 bar si chargé)",
          "Clim : +10-15% de conso en ville"
        ],
        fieldExample: "En anticipant les feux, le VTC économise 20% de carburant sur sa journée.",
        examWarning: "Sous-gonflage = +3-4% de conso + usure prématurée.",
        tips: [
          "Passages vitesses : 2000-2500 tr/min (essence), 1500-2000 (diesel)"
        ],
        legalRefs: ["Recommandations ADEME"]
      },
      {
        id: 'sec-equipements-securite',
        title: 'Équipements obligatoires',
        essential: "Ceinture obligatoire pour tous. Gilet + triangle obligatoires à bord.",
        keyPoints: [
          "Non-port ceinture : 135€ + 3 points pour le conducteur",
          "Enfants < 10 ans : siège adapté obligatoire",
          "Gilet : à portée de main (pas dans le coffre)",
          "Éthylotest : recommandé mais pas de sanction si absent"
        ],
        fieldExample: "Un passager ne met pas sa ceinture : c'est le conducteur qui écope de l'amende.",
        examWarning: "Le conducteur est responsable du port de ceinture des passagers mineurs.",
        tips: [
          "Trousse de secours recommandée dans le véhicule"
        ],
        legalRefs: ["Article R412-1 (ceinture)", "Article R416-19 (gilet/triangle)"]
      },
      {
        id: 'sec-premiers-secours',
        title: 'Premiers secours (PAS)',
        essential: "PAS = Protéger → Alerter → Secourir. Toujours dans cet ordre.",
        keyPoints: [
          "15 = SAMU / 17 = Police / 18 = Pompiers / 112 = européen",
          "PLS : victime inconsciente qui respire",
          "Massage cardiaque : 100-120/min, 5-6 cm profondeur",
          "Ne jamais déplacer sauf danger immédiat"
        ],
        fieldExample: "Accident : le chauffeur balise les lieux (Protéger), appelle le 15 (Alerter), puis assiste la victime.",
        examWarning: "PAS = ordre strict. Protéger AVANT d'alerter, pas l'inverse.",
        tips: [
          "Formation PSC1 recommandée pour tous conducteurs pro"
        ],
        legalRefs: ["Article 223-6 Code pénal (non-assistance)"]
      },
      {
        id: 'sec-signalisation',
        title: 'Signalisation et priorités',
        essential: "Piéton engagé ou manifestant l'intention = priorité absolue.",
        keyPoints: [
          "STOP : arrêt obligatoire à la ligne",
          "Rond-point : priorité aux véhicules engagés",
          "Véhicules prioritaires (gyrophare + sirène) : faciliter passage",
          "Tramway : toujours prioritaire sauf signalisation"
        ],
        fieldExample: "Un piéton attend au passage : le chauffeur s'arrête pour lui laisser traverser.",
        examWarning: "Rond-point = priorité à gauche (véhicules engagés), pas à droite !",
        tips: [
          "En cas de doute : prudence et courtoisie"
        ],
        legalRefs: ["Articles R411 à R422 du Code de la route"]
      }
    ]
  },

  // =====================================================
  // MODULE 3 : RÉGLEMENTATION T3P
  // =====================================================
  {
    moduleId: 'reglementation',
    moduleName: 'Réglementation T3P',
    moduleIcon: '📋',
    domain: 'commun',
    examObjective: 'Maîtriser le cadre légal du T3P : définitions, conditions d\'accès, carte professionnelle.',
    introduction: "Cadre réglementaire commun aux taxis, VTC et VMDTR : accès à la profession et obligations.",
    cards: [
      {
        id: 'reg-definition-t3p',
        title: 'Définition T3P',
        essential: "T3P = Transport Public Particulier de Personnes : Taxi, VTC, VMDTR.",
        keyPoints: [
          "Transport onéreux (rémunéré) ≠ covoiturage (partage de frais)",
          "Transport à la demande : le client choisit le trajet",
          "Loi Thévenoud (2014) + Loi Grandguillaume (2016)",
          "Les centrales de réservation sont aussi réglementées"
        ],
        fieldExample: "Un conducteur prend 5€ de plus que ses frais : c'est du transport onéreux, pas du covoiturage.",
        examWarning: "Covoiturage ≠ T3P : le covoiturage ne fait pas de bénéfice, juste partage des frais.",
        confusionPoints: [
          "Covoiturage = partage de frais ≠ T3P = activité commerciale"
        ],
        tips: [
          "Le non-respect expose à des sanctions pénales"
        ],
        legalRefs: ["Articles L3120-1 à L3124-13 du Code des transports"]
      },
      {
        id: 'reg-acces-profession',
        title: 'Conditions d\'accès',
        essential: "Permis B ≥ 3 ans + casier vierge + visite médicale + examen T3P.",
        keyPoints: [
          "Permis B depuis 3 ans (2 ans si conduite accompagnée)",
          "Casier judiciaire compatible (vérifié chaque année)",
          "Visite médicale tous les 5 ans (médecin agréé)",
          "Examen T3P : 7 épreuves, moyenne ≥ 12/20, mini 10/20 par épreuve"
        ],
        fieldExample: "Un candidat a 14 de moyenne mais 8 en réglementation : il échoue (< 10 à une épreuve).",
        examWarning: "Moyenne 12/20 + minimum 10/20 à chaque épreuve. Les deux conditions sont cumulatives.",
        tips: [
          "Casier vérifié automatiquement chaque année par la préfecture"
        ],
        legalRefs: ["Articles L3120-2-1 et R3120-7 du Code des transports"]
      },
      {
        id: 'reg-carte-professionnelle',
        title: 'Carte professionnelle',
        essential: "Validité 5 ans + formation continue 14h minimum obligatoire pour renouveler.",
        keyPoints: [
          "Délivrée par le préfet du département de domicile",
          "Mention : Taxi, VTC ou VMDTR",
          "Visible et accessible dans le véhicule",
          "Renouvellement : demande 2 mois avant expiration"
        ],
        fieldExample: "Un VTC exerce avec une carte expirée : 1 an de prison + 15 000€ d'amende possibles.",
        examWarning: "Sans carte professionnelle valide = exercice illégal = sanctions pénales.",
        tips: [
          "Formation continue : 14h sur 5 ans, en une fois ou réparties"
        ],
        legalRefs: ["Article R3120-7 du Code des transports"]
      },
      {
        id: 'reg-examen-t3p',
        title: 'Examen T3P',
        essential: "Admissibilité (5 épreuves communes) + Admission (2 épreuves spécifiques).",
        keyPoints: [
          "Admissibilité : Réglementation, Gestion, Sécurité, Français, Anglais",
          "Admission : Réglementation locale + Conduite",
          "QCM 4 réponses, 1 seule bonne",
          "Échec : représentation après 1 mois"
        ],
        fieldExample: "Un candidat taxi passe les épreuves communes, puis réglementation Paris et conduite.",
        examWarning: "Équivalence possible pour certains diplômes (BTS Tourisme, etc.).",
        tips: [
          "L'épreuve de conduite évalue aussi le comportement client"
        ],
        legalRefs: ["Arrêté du 6 avril 2017 relatif à l'examen T3P"]
      },
      {
        id: 'reg-obligations-communes',
        title: 'Obligations professionnelles',
        essential: "Assurance RC pro + info prix + non-discrimination + chiens guides acceptés.",
        keyPoints: [
          "Assurance RC professionnelle obligatoire",
          "Information client sur le prix ou mode de calcul",
          "Refus discriminatoire interdit (origine, handicap...)",
          "Chiens guides : transport obligatoire et gratuit"
        ],
        fieldExample: "Un VTC refuse un client en fauteuil roulant sans raison : 45 000€ d'amende + 3 ans prison.",
        examWarning: "Le refus pour motif légitime (sécurité, fin de service) reste possible.",
        tips: [
          "Tenue correcte et véhicule propre = obligations implicites"
        ],
        legalRefs: ["Articles L3120-4 à L3120-6 du Code des transports"]
      },
      {
        id: 'reg-vehicule-conditions',
        title: 'Conditions véhicule',
        essential: "Max 6 ans (7 ans si hybride/électrique), 4-9 places, contrôle technique annuel.",
        keyPoints: [
          "Âge max : 6 ans (7 ans pour hybrides/électriques)",
          "Places : 4 à 9 assises (conducteur compris)",
          "Contrôle technique annuel (pro = plus strict)",
          "VTC : puissance ≥ 84 kW OU longueur ≥ 4,50m"
        ],
        fieldExample: "Une Tesla Model 3 de 2019 peut encore rouler en VTC en 2026 (7 ans car électrique).",
        examWarning: "Hybrides et électriques = 1 an de plus. Ne pas oublier cette exception !",
        tips: [
          "Prévoir un véhicule de remplacement en cas d'immobilisation"
        ],
        legalRefs: ["Décret n°2017-483 du 6 avril 2017"]
      },
      {
        id: 'reg-sanctions',
        title: 'Sanctions et contrôles',
        essential: "Sans carte pro = 1 an prison + 15 000€. Maraude illégale VTC = même sanction.",
        keyPoints: [
          "Exercice sans carte : 1 an + 15 000€",
          "Maraude VTC : 1 an + 15 000€",
          "Défaut assurance : 3 750€ + suspension permis",
          "Refus discriminatoire : 45 000€ + 3 ans"
        ],
        fieldExample: "Un VTC stationne devant une gare en attendant des clients : maraude = 15 000€ d'amende.",
        examWarning: "La maraude est réservée aux taxis. VTC = réservation préalable obligatoire.",
        confusionPoints: [
          "Taxi = maraude autorisée ≠ VTC = réservation préalable uniquement"
        ],
        tips: [
          "Avoir tous les documents à portée de main lors des contrôles"
        ],
        legalRefs: ["Articles L3124-1 à L3124-13 du Code des transports"]
      }
    ]
  },

  // =====================================================
  // MODULE 4 : FRANÇAIS
  // =====================================================
  {
    moduleId: 'francais',
    moduleName: 'Français',
    moduleIcon: '🇫🇷',
    domain: 'commun',
    examObjective: 'Maîtriser la communication orale et écrite professionnelle en français.',
    introduction: "Communication professionnelle avec les clients, documents administratifs et réglementaires.",
    cards: [
      {
        id: 'fra-communication-orale',
        title: 'Communication orale',
        essential: "Vouvoiement systématique + écoute active + ton calme et posé.",
        keyPoints: [
          "Formules : Bonjour, S'il vous plaît, Merci, Je vous en prie",
          "Écoute active : laisser parler, reformuler, confirmer",
          "Éviter le jargon technique avec les clients",
          "Annoncer : prix, durée estimée, itinéraire"
        ],
        fieldExample: "Le chauffeur reformule : 'Si je comprends bien, vous souhaitez passer par les quais ?'",
        examWarning: "Le tutoiement = faute professionnelle avec les clients.",
        tips: [
          "Premier contact = première impression : soigner l'accueil"
        ],
        legalRefs: []
      },
      {
        id: 'fra-communication-ecrite',
        title: 'Communication écrite',
        essential: "Facture = mentions obligatoires (nom, SIRET, date, montant HT/TTC).",
        keyPoints: [
          "Facture : toutes mentions légales obligatoires",
          "Courriel pro : objet clair, formule d'appel, signature",
          "Orthographe : relire avant envoi",
          "Conserver copies des échanges importants"
        ],
        fieldExample: "Le VTC envoie sa facture avec nom, SIRET, date, montant HT, TVA et TTC.",
        examWarning: "Une facture sans mentions obligatoires est irrégulière fiscalement.",
        tips: [
          "Éviter les majuscules (= crier) et les !!! multiples"
        ],
        legalRefs: ["Code de commerce (facturation)"]
      },
      {
        id: 'fra-comprehension-textes',
        title: 'Compréhension de textes',
        essential: "Textes réglementaires : lire chaque mot. Les nuances juridiques comptent.",
        keyPoints: [
          "Identifier : sujet, mots-clés, structure",
          "Vocabulaire juridique : stipuler, abroger, en vigueur",
          "Contrat : vérifier obligations et clauses de résiliation",
          "Ne jamais signer sans avoir tout lu"
        ],
        fieldExample: "Le contrat dit 'résiliable avec préavis de 3 mois' : le chauffeur note cette échéance.",
        examWarning: "Un document signé sans lecture = engagement quand même.",
        tips: [
          "En cas de doute juridique : consulter un professionnel"
        ],
        legalRefs: []
      }
    ]
  },

  // =====================================================
  // MODULE 5 : ANGLAIS
  // =====================================================
  {
    moduleId: 'anglais',
    moduleName: 'Anglais',
    moduleIcon: '🇬🇧',
    domain: 'commun',
    examObjective: 'Communiquer en anglais avec une clientèle internationale.',
    introduction: "Vocabulaire anglais de base pour l'accueil, le trajet et le tourisme.",
    cards: [
      {
        id: 'ang-accueil',
        title: 'Accueil en anglais',
        essential: "'May I' est plus poli que 'Can I' dans un contexte professionnel.",
        keyPoints: [
          "Good morning/afternoon/evening = Bonjour selon l'heure",
          "How may I help you? = Comment puis-je vous aider ?",
          "May I take your luggage? = Puis-je prendre vos bagages ?",
          "Please make yourself comfortable = Installez-vous"
        ],
        fieldExample: "Le chauffeur accueille : 'Good afternoon! I will be your driver today.'",
        examWarning: "'May I' = plus poli que 'Can I' en contexte pro.",
        tips: [
          "Le sourire et le contact visuel sont universels"
        ],
        legalRefs: []
      },
      {
        id: 'ang-trajet-informations',
        title: 'Informations trajet',
        essential: "'Approximately' = environ. Ne jamais promettre une heure exacte.",
        keyPoints: [
          "We should arrive in approximately 30 minutes",
          "There is some traffic ahead = Il y a du trafic",
          "I will take an alternative route = Je prends un autre itinéraire",
          "Is the temperature comfortable? = La température convient ?"
        ],
        fieldExample: "Le chauffeur informe : 'There is traffic, but we should arrive in about 40 minutes.'",
        examWarning: "Toujours utiliser 'approximately' ou 'about' pour les estimations.",
        tips: [
          "Informer proactivement rassure le client"
        ],
        legalRefs: []
      },
      {
        id: 'ang-vocabulaire-tourisme',
        title: 'Vocabulaire tourisme',
        essential: "Connaître le nom anglais des monuments : Eiffel Tower, Louvre Museum...",
        keyPoints: [
          "Landmark = monument emblématique",
          "Sightseeing = visite touristique",
          "City center / Downtown = centre-ville",
          "Railway station = gare / Airport = aéroport"
        ],
        fieldExample: "Le client demande 'Where is Notre-Dame?' → 'It's on the Île de la Cité.'",
        examWarning: "Eiffel Tower, Arc de Triomphe, Notre-Dame Cathedral : mémoriser ces noms.",
        tips: [
          "CDG = Charles de Gaulle Airport, ORY = Orly Airport"
        ],
        legalRefs: []
      },
      {
        id: 'ang-aeroport',
        title: 'Vocabulaire aéroport',
        essential: "Terminal, Gate, Check-in, Boarding pass : mots essentiels aéroport.",
        keyPoints: [
          "Flight = vol / Gate = porte d'embarquement",
          "Boarding pass = carte d'embarquement",
          "Check-in = enregistrement / Check-out = départ hôtel",
          "Carry-on = bagage cabine / Luggage = bagages"
        ],
        fieldExample: "Le client dit 'Terminal 2E, Gate 34' : le chauffeur le dépose au bon endroit.",
        examWarning: "Check-in (enregistrement) ≠ Check-out (départ hôtel).",
        tips: [
          "Toujours confirmer le terminal (CDG en a plusieurs)"
        ],
        legalRefs: []
      },
      {
        id: 'ang-situations-pratiques',
        title: 'Situations pratiques',
        essential: "'Could you spell that, please?' pour éviter les erreurs d'adresse.",
        keyPoints: [
          "Could you spell that? = Pouvez-vous épeler ?",
          "I'm sorry, there seems to be a problem = Il semble y avoir un problème",
          "Do you prefer AC on or off? = Climatisation oui ou non ?",
          "Here is your receipt = Voici votre reçu"
        ],
        fieldExample: "Le chauffeur ne comprend pas l'adresse : 'Could you spell that, please?'",
        examWarning: "Ne jamais prétendre avoir compris. Mieux vaut demander de répéter.",
        tips: [
          "Parler lentement si le client semble ne pas comprendre"
        ],
        legalRefs: []
      }
    ]
  },

  // =====================================================
  // MODULE 6 : VTC SPÉCIFIQUE
  // =====================================================
  {
    moduleId: 'vtc',
    moduleName: 'Métier VTC',
    moduleIcon: '🚘',
    domain: 'vtc',
    examObjective: 'Maîtriser les spécificités VTC : réservation préalable, registre, tarification libre.',
    introduction: "Réglementation spécifique aux VTC : interdiction de maraude, inscription au registre, plateformes.",
    cards: [
      {
        id: 'vtc-definition',
        title: 'Définition VTC',
        essential: "VTC = réservation préalable obligatoire. Maraude interdite sous peine de 15 000€.",
        keyPoints: [
          "VTC = Voiture de Transport avec Chauffeur",
          "Réservation préalable obligatoire (pas de prise en charge spontanée)",
          "Maraude interdite : 1 an prison + 15 000€",
          "Inscription au registre VTC préfectoral obligatoire"
        ],
        fieldExample: "Un client hèle un VTC dans la rue : le chauffeur doit refuser (maraude = interdit).",
        examWarning: "VTC = JAMAIS de maraude. C'est LA différence fondamentale avec les taxis.",
        confusionPoints: [
          "Taxi = maraude autorisée ≠ VTC = réservation préalable uniquement"
        ],
        tips: [
          "Retour à vide obligatoire sauf nouvelle réservation"
        ],
        legalRefs: ["Article L3122-9 du Code des transports"]
      },
      {
        id: 'vtc-inscription-registre',
        title: 'Inscription au registre',
        essential: "Inscription au registre VTC obligatoire. Numéro à afficher sur le véhicule.",
        keyPoints: [
          "Registre tenu par la préfecture ou DRIEAT (Île-de-France)",
          "Véhicule : ≥ 84 kW OU ≥ 4,50m OU ≥ 1,70m largeur",
          "Vignette avec numéro d'inscription visible",
          "Attestation d'inscription à bord obligatoire"
        ],
        fieldExample: "Le VTC affiche sa vignette avec son numéro d'inscription sur le pare-brise avant droit.",
        examWarning: "Sans inscription = exercice illégal même avec la carte pro.",
        tips: [
          "Le numéro d'inscription est visible sur la vignette pare-brise"
        ],
        legalRefs: ["Article R3122-1 du Code des transports"]
      },
      {
        id: 'vtc-tarification',
        title: 'Tarification VTC',
        essential: "Tarifs libres mais information préalable du client obligatoire.",
        keyPoints: [
          "Pas de tarif réglementé (libre concurrence)",
          "Modes : forfait, kilométrique, temps + distance",
          "Information prix AVANT la course obligatoire",
          "TVA 10% pour le transport de voyageurs (si assujetti)"
        ],
        fieldExample: "L'application affiche 35€ pour la course : le client accepte en connaissance de cause.",
        examWarning: "TVA transport = 10% pour les VTC (et non 20% comme la TVA standard).",
        confusionPoints: [
          "TVA VTC = 10% ≠ TVA standard = 20%"
        ],
        tips: [
          "Les suppléments doivent être annoncés à l'avance"
        ],
        legalRefs: ["Article 279 du CGI (TVA 10%)"]
      },
      {
        id: 'vtc-plateformes',
        title: 'Plateformes VTC',
        essential: "Le conducteur reste indépendant. La plateforme est un intermédiaire, pas un employeur.",
        keyPoints: [
          "Centrales (Uber, Bolt...) = intermédiaires inscrits",
          "Commission prélevée sur chaque course",
          "Possible de travailler avec plusieurs plateformes",
          "Le conducteur reste responsable de sa conformité"
        ],
        fieldExample: "Un VTC travaille avec Uber et Bolt : il diversifie ses sources de clients.",
        examWarning: "Statut = indépendant. Pas salarié de la plateforme (sauf requalification justice).",
        tips: [
          "Comparer les commissions des différentes plateformes"
        ],
        legalRefs: ["Article L3141-1 du Code des transports"]
      }
    ]
  },

  // =====================================================
  // MODULE 7 : TAXI PARIS 75
  // =====================================================
  {
    moduleId: 'taxi-national',
    moduleName: 'Taxi Paris 75',
    moduleIcon: '🚖',
    domain: 'taxi',
    examObjective: 'Maîtriser la réglementation taxi parisien : ADS, tarifs, équipements, zones.',
    introduction: "Réglementation spécifique taxi Paris : licence, tarifs réglementés, équipements obligatoires.",
    cards: [
      {
        id: 'tx75-ads-licence',
        title: 'ADS (Licence taxi)',
        essential: "ADS = Autorisation de Stationnement. Incessible depuis 2014 (loi Thévenoud).",
        keyPoints: [
          "ADS ≠ carte pro : les deux sont obligatoires",
          "Délivrée par le préfet de police de Paris",
          "~17 000 taxis parisiens (nombre limité)",
          "Anciennes ADS (avant 2014) cessibles si exploitées 5 ans"
        ],
        fieldExample: "Un chauffeur veut racheter une licence : si elle date de 2012, elle est cessible sous conditions.",
        examWarning: "ADS = droit d'exploitation ≠ carte pro = aptitude à conduire. Deux documents distincts !",
        confusionPoints: [
          "ADS = exploitation du taxi ≠ Carte pro = aptitude du conducteur"
        ],
        tips: [
          "Liste d'attente pour nouvelles ADS : plusieurs années"
        ],
        legalRefs: ["Loi Thévenoud 2014", "Articles L3121-1 du Code des transports"]
      },
      {
        id: 'tx75-zones-maraude',
        title: 'Zones et maraude',
        essential: "Maraude = réservée aux taxis. Client peut choisir n'importe quel taxi dans la file.",
        keyPoints: [
          "Maraude = chercher des clients en circulant/stationnant",
          "Zone : Paris + communes limitrophes autorisées",
          "Stations : file d'attente, 1er arrivé = 1er servi",
          "Mais le client peut choisir n'importe quel taxi de la file"
        ],
        fieldExample: "Un client passe devant 3 taxis et monte dans le 4ème : c'est son droit.",
        examWarning: "Le client a le droit de choisir son taxi dans la file (pas obligé de prendre le premier).",
        tips: [
          "Refuser une destination lointaine est interdit (sauf fin de service)"
        ],
        legalRefs: ["Arrêté préfectoral taxis parisiens"]
      },
      {
        id: 'tx75-taximetre-tarifs',
        title: 'Tarifs 2026',
        essential: "4 tarifs (A, B, C, D). Forfaits aéroports 2026 : CDG 56€/65€, Orly 45€/36€.",
        keyPoints: [
          "A = Paris jour semaine (10h-17h) = le moins cher",
          "B = Paris nuit/dimanche ou banlieue jour",
          "C = Banlieue nuit/dimanche + retour à vide",
          "D = Zone aéroport et longue distance (le plus cher)"
        ],
        fieldExample: "Course Paris Gare du Nord → CDG : forfait rive droite 56€ (tarifs 2026).",
        examWarning: "Forfaits 2026 : CDG rive droite 56€, rive gauche 65€ / Orly rive droite 45€, rive gauche 36€.",
        confusionPoints: [
          "Rive droite CDG = 56€ ≠ Rive gauche CDG = 65€",
          "Rive droite Orly = 45€ ≠ Rive gauche Orly = 36€"
        ],
        tips: [
          "Le forfait s'applique quelle que soit la durée effective"
        ],
        legalRefs: ["Arrêté du 24 décembre 2025 (tarifs 2026)"]
      },
      {
        id: 'tx75-supplements',
        title: 'Suppléments autorisés',
        essential: "4ème passager adulte, bagages volumineux, réservation. Chien guide = gratuit.",
        keyPoints: [
          "4ème passager adulte : ~4€ (pas les enfants < 10 ans)",
          "Bagages volumineux en soute : supplément autorisé",
          "Réservation téléphonique : ~4€",
          "Chien guide = transport gratuit obligatoire"
        ],
        fieldExample: "Un client avec 3 grandes valises : le chauffeur peut facturer un supplément bagages.",
        examWarning: "Suppléments interdits : pourboire obligatoire, refus d'espèces, surtarification.",
        tips: [
          "Toujours annoncer les suppléments avant la course"
        ],
        legalRefs: ["Arrêté préfectoral tarifaire"]
      },
      {
        id: 'tx75-equipements',
        title: 'Équipements obligatoires',
        essential: "Lumineux (vert=libre), taximètre scellé, TPE obligatoire tout montant.",
        keyPoints: [
          "Lumineux : 'TAXI PARISIEN' + lettre tarif",
          "Vert = libre, éteint/orange = occupé/réservé",
          "Taximètre homologué, scellé, vérifié annuellement",
          "TPE : carte bancaire acceptée pour tout montant"
        ],
        fieldExample: "Un client veut payer 8€ en carte : le chauffeur ne peut pas refuser.",
        examWarning: "Refuser la carte bancaire = infraction (150€ d'amende + signalement préfecture).",
        tips: [
          "Vérifier quotidiennement le bon fonctionnement des équipements"
        ],
        legalRefs: ["Décret n°2017-235 (paiement électronique)"]
      },
      {
        id: 'tx75-obligations',
        title: 'Obligations taxi',
        essential: "Obligation de transport sauf motif légitime. Itinéraire le plus court ou rapide.",
        keyPoints: [
          "Obligation de transport (pas de refus arbitraire)",
          "Motifs légitimes : sécurité, fin de service",
          "Itinéraire : le plus court OU le plus rapide (au choix client)",
          "Information tarif dès la prise en charge"
        ],
        fieldExample: "Un client demande d'aller à 80 km : le chauffeur ne peut pas refuser (sauf fin de service).",
        examWarning: "Refuser une course sans motif légitime = amende + suspension possible.",
        tips: [
          "Noter le motif en cas de refus pour justification ultérieure"
        ],
        legalRefs: ["Articles R3121-1 et suivants du Code des transports"]
      },
      {
        id: 'tx75-controles',
        title: 'Contrôles et sanctions',
        essential: "Refus CB : 150€. Tarification non conforme : amende + immobilisation possible.",
        keyPoints: [
          "Contrôles par Préfecture de Police, police, gendarmerie",
          "Vérification : ADS, carte pro, taximètre, assurance",
          "Défaut TPE ou refus CB : 150€ + signalement",
          "Comportement non pro : avertissement puis suspension ADS"
        ],
        fieldExample: "Un taxi refuse une carte pour 12€ : le client peut signaler à la préfecture.",
        examWarning: "Tous les documents doivent être à portée de main lors d'un contrôle.",
        tips: [
          "Coopérer avec les agents lors des contrôles"
        ],
        legalRefs: ["Articles R3124-1 et suivants du Code des transports"]
      }
    ]
  },

  // =====================================================
  // MODULE 8 : TOPOGRAPHIE PARIS
  // =====================================================
  {
    moduleId: 'taxi-territoire',
    moduleName: 'Topographie Paris',
    moduleIcon: '🗼',
    domain: 'taxi',
    examObjective: 'Connaître Paris : arrondissements, monuments, gares, hôpitaux, axes de circulation.',
    introduction: "Connaissance de Paris : monuments, gares, hôpitaux, arrondissements et axes principaux.",
    cards: [
      {
        id: 'topo-arrondissements',
        title: 'Arrondissements',
        essential: "20 arrondissements en spirale depuis le centre. Code postal = 75 + n° arrondissement.",
        keyPoints: [
          "1er = Louvre (centre), spirale vers extérieur",
          "Rive droite (nord Seine) : 1-4, 8-12, 16-20",
          "Rive gauche (sud Seine) : 5-7, 13-15",
          "Code postal : 75008 = 8ème arrondissement"
        ],
        fieldExample: "Client dit '75016' : c'est le 16ème arrondissement, quartier résidentiel ouest.",
        examWarning: "Les 2 derniers chiffres du code postal = numéro d'arrondissement.",
        tips: [
          "Périphérique = ceinture de Paris (35 km)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-monuments',
        title: 'Monuments majeurs',
        essential: "Axe historique : Louvre → Tuileries → Concorde → Champs → Arc de Triomphe → La Défense.",
        keyPoints: [
          "Tour Eiffel : 7ème, Champ de Mars, métro Bir-Hakeim",
          "Arc de Triomphe : 8ème, place de l'Étoile, 12 avenues",
          "Sacré-Cœur : 18ème, Montmartre, métro Anvers",
          "Notre-Dame : 4ème, Île de la Cité"
        ],
        fieldExample: "Client veut voir 'les Champs' puis 'la Tour' : Arc de Triomphe → Tour Eiffel.",
        examWarning: "Place de l'Étoile = Place Charles de Gaulle (deux noms pour le même lieu).",
        tips: [
          "Attention aux zones piétonnes autour des monuments"
        ],
        legalRefs: []
      },
      {
        id: 'topo-gares',
        title: 'Gares SNCF',
        essential: "6 grandes gares, chacune dessert une direction géographique.",
        keyPoints: [
          "Gare du Nord (10ème) : Londres, Belgique, TGV Nord",
          "Gare de Lyon (12ème) : Lyon, Marseille, Suisse, Italie",
          "Montparnasse (15ème) : Bordeaux, Nantes, Bretagne",
          "Saint-Lazare (8ème) : Normandie (pas de TGV)"
        ],
        fieldExample: "Client va à Marseille : Gare de Lyon, TGV Sud-Est.",
        examWarning: "Gare du Nord = la plus fréquentée d'Europe.",
        tips: [
          "Prévoir le temps de dépose (circulation + distance dans la gare)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-aeroports',
        title: 'Aéroports',
        essential: "CDG (Roissy) = 3 terminaux. Orly = 4 terminaux. Forfaits taxi 2026.",
        keyPoints: [
          "CDG : A1 Porte de la Chapelle, RER B, Roissybus",
          "Orly : A6 Porte d'Orléans, Orlyval+RER B, T7",
          "Forfaits 2026 : CDG 56€/65€, Orly 45€/36€",
          "Le Bourget : affaires, Beauvais : low-cost (85 km)"
        ],
        fieldExample: "Client va à CDG Terminal 2E : A1 Porte de la Chapelle, prévoir 1h.",
        examWarning: "CDG a plusieurs terminaux 2 (2A, 2B, 2C, 2D, 2E, 2F, 2G). Toujours confirmer !",
        tips: [
          "Prévoir 1h pour CDG, 30-45min pour Orly depuis Paris"
        ],
        legalRefs: []
      },
      {
        id: 'topo-hopitaux',
        title: 'Hôpitaux',
        essential: "AP-HP = réseau public. Pitié-Salpêtrière = le plus grand de France.",
        keyPoints: [
          "Pitié-Salpêtrière (13ème) : le plus grand, toutes spécialités",
          "HEGP Georges-Pompidou (15ème) : moderne, urgences",
          "Necker (15ème) : pédiatrie, urgences enfants",
          "Hôtel-Dieu (4ème) : Île de la Cité, urgences centre"
        ],
        fieldExample: "Urgence enfant : Necker-Enfants malades, 15ème arrondissement.",
        examWarning: "En urgence : appeler le 15 (SAMU) pour orientation vers l'hôpital approprié.",
        tips: [
          "Connaître l'hôpital le plus proche de son secteur"
        ],
        legalRefs: []
      },
      {
        id: 'topo-axes',
        title: 'Axes de circulation',
        essential: "Périphérique 35 km, saturé 7h-9h et 17h-20h. A1 → CDG, A6 → Orly.",
        keyPoints: [
          "Périphérique : 35 km, sens horaire et anti-horaire",
          "Champs-Élysées : Concorde ↔ Étoile, 2 km, sens unique vers Ouest",
          "A1 : Porte de la Chapelle → CDG",
          "A6 : Porte d'Orléans → Orly et Lyon"
        ],
        fieldExample: "Il est 18h, le périph est bouché : prendre les boulevards des Maréchaux.",
        examWarning: "Voies sur berges largement fermées (piétonisation).",
        tips: [
          "Connaître les portes principales et leurs destinations"
        ],
        legalRefs: []
      },
      {
        id: 'topo-places',
        title: 'Places et carrefours',
        essential: "Place de l'Étoile = 12 avenues. République = manifestations fréquentes.",
        keyPoints: [
          "Place de l'Étoile (8ème) : 12 avenues, Arc de Triomphe",
          "Place de la Concorde (8ème) : obélisque, Tuileries-Champs",
          "Place de la Bastille (4ème/11ème/12ème) : Opéra Bastille",
          "Place de la République (3ème/10ème/11ème) : Marianne"
        ],
        fieldExample: "Manifestation annoncée place de la République : éviter le secteur.",
        examWarning: "Les grandes places = nœuds de circulation complexes. Mémoriser les sens.",
        tips: [
          "Attention aux manifestations fréquentes République et Bastille"
        ],
        legalRefs: []
      }
    ]
  },

  // =====================================================
  // MODULE 9 : RELATION CLIENT
  // =====================================================
  {
    moduleId: 'relation-client',
    moduleName: 'Relation Client',
    moduleIcon: '🤝',
    domain: 'commun',
    examObjective: 'Maîtriser l\'accueil, la communication et la gestion des situations délicates.',
    introduction: "Qualité de service, accueil, communication, gestion des conflits et fidélisation.",
    cards: [
      {
        id: 'rel-accueil',
        title: 'Première impression',
        essential: "Les 20 premières secondes déterminent l'impression générale.",
        keyPoints: [
          "Ponctualité : arriver à l'heure ou prévenir",
          "Tenue correcte, propre, pas d'odeur désagréable",
          "Véhicule propre, pas d'odeur de tabac",
          "Salutation : regarder le client, sourire, bonjour clair"
        ],
        fieldExample: "Le chauffeur arrive 5 min en avance, ouvre le coffre avant qu'on lui demande.",
        examWarning: "Première impression = 20 secondes. Soigner l'arrivée et le premier contact.",
        tips: [
          "Anticiper les besoins : ouvrir le coffre, proposer l'aide"
        ],
        legalRefs: []
      },
      {
        id: 'rel-communication-trajet',
        title: 'Pendant le trajet',
        essential: "Observer le client : certains veulent parler, d'autres du silence.",
        keyPoints: [
          "Écoute active : ne pas interrompre",
          "Éviter sujets polémiques (politique, religion)",
          "Informer spontanément : durée, trafic, itinéraire",
          "Téléphone perso : éviter en présence du client"
        ],
        fieldExample: "Le client travaille sur son ordinateur : le chauffeur reste silencieux.",
        examWarning: "Si le client travaille/téléphone : ne pas le déranger.",
        tips: [
          "Proposer sans imposer : 'Souhaitez-vous de la musique ?'"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conduite-confort',
        title: 'Conduite et confort',
        essential: "Conduite souple = passager rassuré. Anticiper pour éviter les à-coups.",
        keyPoints: [
          "Pas d'accélérations/freinages brusques",
          "Respecter le Code : le client doit se sentir en sécurité",
          "Climatisation : vérifier le confort",
          "Expliquer les choix d'itinéraire si demandé"
        ],
        fieldExample: "Le chauffeur anticipe le feu rouge et freine progressivement : confort optimal.",
        examWarning: "Une conduite nerveuse stresse le passager et nuit à l'image.",
        tips: [
          "L'éco-conduite = confort passager + économies"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conflits',
        title: 'Gestion des conflits',
        essential: "Rester calme, écouter, reformuler, s'excuser si nécessaire, proposer une solution.",
        keyPoints: [
          "Ne jamais s'énerver ni hausser le ton",
          "Écouter entièrement avant de répondre",
          "Reformuler : 'Si je comprends bien...'",
          "S'excuser même si pas directement responsable"
        ],
        fieldExample: "Client mécontent du temps de trajet : 'Je comprends, le trafic était exceptionnel aujourd'hui.'",
        examWarning: "Jamais de violence verbale ou physique, même provoqué.",
        tips: [
          "Un client mécontent bien traité peut devenir fidèle"
        ],
        legalRefs: []
      },
      {
        id: 'rel-fin-course',
        title: 'Fin de course',
        essential: "La dernière impression compte autant que la première.",
        keyPoints: [
          "Annoncer l'arrivée : 'Nous arrivons à destination'",
          "Stationner au plus près pour sécurité/confort",
          "Rappeler : 'N'oubliez pas de vérifier vos affaires'",
          "Remercier : 'Merci, bonne journée'"
        ],
        fieldExample: "Le chauffeur aide à sortir les bagages et souhaite bon voyage au client.",
        examWarning: "Vérifier le véhicule après chaque course (objets oubliés).",
        tips: [
          "Client satisfait = 3 personnes informées, mécontent = 10"
        ],
        legalRefs: []
      },
      {
        id: 'rel-clienteles-specifiques',
        title: 'Clientèles spécifiques',
        essential: "S'adapter sans préjugés. Chiens guides = transport obligatoire et gratuit.",
        keyPoints: [
          "Handicapés : proposer l'aide sans imposer",
          "Personnes âgées : prendre le temps, parler distinctement",
          "Touristes : quelques infos sur Paris, mots en anglais",
          "Voyageurs d'affaires : efficacité, discrétion, ponctualité"
        ],
        fieldExample: "Client âgé avec canne : le chauffeur l'aide à monter et attache sa ceinture.",
        examWarning: "Le handicap n'est pas un motif de refus de transport.",
        tips: [
          "Chiens guides = transport gratuit obligatoire (loi)"
        ],
        legalRefs: ["Article L3121-8 du Code des transports (chiens guides)"]
      }
    ]
  },
  // =====================================================
  // MODULE VMDTR — Épreuve F(M) : Sécurité et réglementation
  // Référentiel RS5636 (France Compétences)
  // =====================================================
  {
    moduleId: 'vmdtr-securite',
    moduleName: 'F(M) – Sécurité moto & réglementation VMDTR',
    moduleIcon: '🏍️',
    domain: 'vmdtr',
    examObjective: "Maîtriser la sécurité spécifique moto et la réglementation d'exploitation VMDTR (épreuve F(M)).",
    introduction: "Accidentologie, dynamique de la moto, conduite préventive, entretien et règles d'exercice du moto-taxi.",
    cards: [
      {
        id: 'vmd-accidentologie',
        title: 'Accidentologie & facteurs de risque',
        essential: "Les motards sont sur-représentés dans les accidents mortels : la conduite préventive est vitale.",
        keyPoints: [
          "Sur-représentation des 2-roues dans les accidents graves",
          "Facteurs aggravants : alcool, stupéfiants, médicaments, stress, fatigue",
          "Hygiène de vie et gestion du sommeil = sécurité",
        ],
        examWarning: "Question fréquente : l'hygiène de vie est un facteur de sécurité officiellement évalué.",
        tips: ["Anticiper > réagir : la lecture des indices sauve des vies"],
        legalRefs: ["Référentiel RS5636 – F(M)"],
      },
      {
        id: 'vmd-dynamique',
        title: 'Dynamique de la motocyclette',
        essential: "L'effet gyroscopique stabilise la moto à vitesse soutenue mais pas à allure lente.",
        keyPoints: [
          "Effet gyroscopique = stabilité à vitesse élevée",
          "Instabilité à basse vitesse → vigilance en manœuvre",
          "Distance d'arrêt = distance de réaction + distance de freinage",
          "Adhérence, état des pneus, météo influencent l'arrêt",
        ],
        fieldExample: "À 50 km/h sur sol sec, distance d'arrêt ≈ 25 m. Sur sol mouillé, elle peut doubler.",
        tips: ["Vitesse × 2 → distance de freinage × 4"],
        legalRefs: ["Référentiel RS5636 – F(M)"],
      },
      {
        id: 'vmd-conduite-preventive',
        title: "Conduite préventive & situations d'urgence",
        essential: "Anticipation, marges de sécurité, freinage maîtrisé : le trio gagnant du moto-taxi pro.",
        keyPoints: [
          "Anticiper : lire les indices, comprendre les intentions des autres",
          "Freinage d'urgence : 2 freins, moto droite, regard loin",
          "Évitement : trajectoire courte, regard porté vers la sortie",
          "Marges de sécurité : distance, vitesse, latérale",
        ],
        examWarning: "Le freinage uniquement à l'avant ou en virage = chute. À bannir.",
        tips: ["Regard = trajectoire : on va où on regarde"],
        legalRefs: ["Référentiel RS5636 – F(M)"],
      },
      {
        id: 'vmd-entretien',
        title: 'Vérifications & entretien',
        essential: "Le conducteur est responsable de la sécurité technique du véhicule avant chaque prestation.",
        keyPoints: [
          "Pneus : pression, usure, état général",
          "Freins : avant et arrière",
          "Éclairage : feux avant, arrière, clignotants",
          "Niveaux : huile, liquide de frein",
        ],
        fieldExample: "Contrôle visuel de 2 minutes avant de prendre un client = obligatoire.",
        tips: ["Carnet d'entretien à jour = preuve en cas de contrôle"],
        legalRefs: ["Référentiel RS5636 – F(M)"],
      },
      {
        id: 'vmd-carte-pro',
        title: 'Carte professionnelle VMDTR',
        essential: "Délivrée par le préfet après réussite de l'examen ; valide 5 ans, à présenter à tout contrôle.",
        keyPoints: [
          "Délivrée par le préfet de résidence",
          "Conditions : permis A2/A depuis ≥ 2 ans, aptitude médicale, honorabilité",
          "Validité : 5 ans, renouvellement avec formation continue",
          "À présenter en cas de contrôle + apposée visible sur le véhicule",
        ],
        examWarning: "Sans carte pro = exercice illégal = sanctions pénales.",
        confusionPoints: [
          "Préfet (pas la mairie) délivre la carte",
          "Permis A2 ou A obligatoire (pas seulement B)",
        ],
        tips: ["5 ans de validité = à retenir absolument"],
        legalRefs: ["Code des transports L.3123-1 et suivants"],
      },
      {
        id: 'vmd-reservation',
        title: 'Réservation préalable obligatoire',
        essential: "Le VMDTR ne peut prendre un client qu'après réservation : pas de maraude, pas de stationnement taxi.",
        keyPoints: [
          "Toute course = réservée à l'avance (téléphone, app, web)",
          "Maraude interdite (à la différence du taxi)",
          "Stationnement sur emplacements taxis interdit",
          "Justificatif de réservation à présenter en cas de contrôle",
        ],
        examWarning: "Confusion fréquente Taxi/VMDTR : seul le taxi peut faire de la maraude.",
        confusionPoints: [
          "Taxi = maraude OK + stationnement réservé",
          "VMDTR/VTC = réservation préalable obligatoire",
        ],
        tips: ["Pas de réservation = pas de course"],
        legalRefs: ["Code des transports L.3120-2 et L.3123-2"],
      },
      {
        id: 'vmd-vehicule',
        title: 'Caractéristiques du véhicule & signalétique',
        essential: "Le véhicule doit respecter des conditions de puissance, d'âge et porter une signalétique réglementaire.",
        keyPoints: [
          "Puissance, âge maximum, équipements définis par décret",
          "Signalétique obligatoire (vignette d'identification)",
          "Pas de lumineux comme les taxis",
          "ABS et top-case fortement recommandés voire imposés selon contrat",
        ],
        confusionPoints: [
          "VMDTR ≠ taxi : pas de lumineux 'TAXI', pas de compteur horokilométrique",
        ],
        tips: ["Signalétique discrète mais obligatoire"],
        legalRefs: ["Code des transports R.3123-1 et suivants"],
      },
    ],
  },
  // =====================================================
  // MODULE VMDTR — Épreuve G(M) : Passager & commercial
  // =====================================================
  {
    moduleId: 'vmdtr-commercial',
    moduleName: 'G(M) – Passager & développement commercial',
    moduleIcon: '🛵',
    domain: 'vmdtr',
    examObjective: "Maîtriser la prise en charge du passager moto et le développement commercial de l'activité (épreuve G(M)).",
    introduction: "Sécurité du passager, EPI, gestion de la peur, marketing, fidélisation, partenariats.",
    cards: [
      {
        id: 'vmd-prise-en-charge',
        title: 'Prise en charge du passager',
        essential: "Stationner en sécurité, expliquer la position, charger les bagages : la sécurité commence à l'arrêt.",
        keyPoints: [
          "Respecter la réglementation de stationnement",
          "Sécuriser l'arrêt (emplacement, feux de détresse si besoin)",
          "Aider à la montée, vérifier la position du passager",
          "Charger correctement les bagages dans les top-cases",
        ],
        fieldExample: "Pickup hôtel : se garer hors voie circulée, attirer l'attention du client sur les voitures, l'aider à monter.",
        tips: ["Sécurité d'abord, vitesse ensuite"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-consignes-passager',
        title: 'Consignes au passager avant départ',
        essential: "Un passager bien briefé = trajet sûr. Les consignes sont une obligation pro.",
        keyPoints: [
          "Position sur la moto (mains, pieds, posture)",
          "Comportement en virage (accompagner, ne pas contrer)",
          "Mode de communication (intercom ou signes convenus)",
          "Conduite à tenir en cas d'arrêt/imprévu",
        ],
        examWarning: "Question type : 'Le conducteur doit-il donner des consignes au passager ?' → OUI, obligatoire.",
        tips: ["Briefing de 30 sec avant chaque course"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-epi',
        title: 'Équipements de protection (EPI)',
        essential: "Casque homologué + gants certifiés = OBLIGATOIRES pour le conducteur ET le passager.",
        keyPoints: [
          "Casque homologué (norme ECE 22.05/22.06) – conducteur + passager",
          "Gants certifiés CE moto – conducteur + passager",
          "Blouson et chaussures fermées fortement recommandés",
          "Conducteur fournit généralement les EPI au passager",
        ],
        examWarning: "Sans casque ET gants : refus de transport obligatoire. Sanctions du Code de la route.",
        confusionPoints: [
          "Casque obligatoire AUSSI pour le passager (pas seulement le conducteur)",
        ],
        tips: ["Pas de casque = pas de départ"],
        legalRefs: ["Article R431-1 du Code de la route"],
      },
      {
        id: 'vmd-peur-passager',
        title: 'Gestion de la peur du passager',
        essential: "Anticiper la peur évite les mouvements parasites qui déséquilibrent la moto.",
        keyPoints: [
          "Reconnaître les signes de stress (raideur, mauvaise inclinaison)",
          "Conduite progressive et rassurante en début de course",
          "Communication régulière (intercom, signes)",
          "Adapter l'allure et l'inclinaison au profil du passager",
        ],
        fieldExample: "Passager novice : démarrer doucement, virages amples, vérifier son confort dès les premiers km.",
        tips: ["Un passager rassuré = un passager stable"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-marketing',
        title: 'Marketing & positionnement',
        essential: "Connaître son marché, cibler sa clientèle, valoriser ses atouts différenciants.",
        keyPoints: [
          "Analyse de marché : qui sont les clients, quels concurrents ?",
          "Ciblage : B2B (entreprises, hôtels), aéroport, urgences",
          "Positionnement : rapidité, ponctualité, agilité urbaine",
          "Prix juste = coût de revient + marge cohérente",
        ],
        tips: ["Différenciation > guerre des prix"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-fidelisation',
        title: 'Fidélisation & prospection',
        essential: "Garder un client coûte 5× moins cher que d'en conquérir un nouveau.",
        keyPoints: [
          "Qualité de service constante + personnalisation",
          "Suivi client (anticiper les trajets récurrents)",
          "Prospection B2B : démarcher hôtels, entreprises, conciergeries",
          "Référencement sur plateformes (Uber, Heetch, indépendants)",
        ],
        examWarning: "La maraude reste INTERDITE même pour prospecter.",
        tips: ["1 client satisfait = 3 recommandations"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-communication',
        title: 'Communication numérique & partenaires',
        essential: "Internet et réseau de partenaires = leviers principaux d'acquisition d'un VMDTR.",
        keyPoints: [
          "Site internet professionnel (référencement local)",
          "Réseaux sociaux (LinkedIn pour B2B, Instagram pour image)",
          "Plateformes de réservation reconnues",
          "Partenariats hôtels, entreprises, événementiel",
        ],
        fieldExample: "Contrat-cadre avec un hôtel 4* : pickup aéroport garanti = revenu récurrent.",
        tips: ["Partenariat > publicité ponctuelle"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
    ],
  },
];

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

export const getRevisionModuleById = (moduleId: string): RevisionModule | undefined => {
  return revisionModules.find(m => m.moduleId === moduleId);
};

export const getAllRevisionModules = (): RevisionModule[] => {
  return revisionModules;
};

export const getModulesByDomain = (domain: 'commun' | 'taxi' | 'vtc' | 'vmdtr'): RevisionModule[] => {
  return revisionModules.filter(m => m.domain === domain);
};
