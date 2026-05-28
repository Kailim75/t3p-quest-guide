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
        essential: "Le choix de la forme juridique détermine la responsabilité du dirigeant, son régime social et sa fiscalité — trois leviers indissociables.",
        narrative: "Quand un futur conducteur T3P se lance, la première décision n'est pas le véhicule mais la structure. L'Entreprise Individuelle (EI), depuis la loi du 14 février 2022, sépare automatiquement patrimoine personnel et professionnel : les créanciers professionnels ne peuvent plus saisir la résidence principale ni les biens privés. C'est devenu la voie la plus simple pour démarrer seul.\n\nDès qu'on veut s'associer ou protéger un patrimoine important, on bascule en société. La SARL/EURL loge le gérant majoritaire au régime des Travailleurs Non Salariés (TNS) — environ 45% de cotisations sur le bénéfice, mais une protection sociale plus faible (pas d'assurance chômage, indemnités journalières limitées). La SAS/SASU range le président au régime assimilé salarié : ~80% de charges sur la rémunération, mais une couverture identique à un cadre du privé.\n\nPour le VTC, l'inscription au Répertoire des Métiers (RM) est obligatoire — l'activité est qualifiée d'artisanale (décret n°98-247). Le taxi, lui, s'inscrit au RCS. Le code APE de référence reste 49.32Z (transport de voyageurs par taxi) pour les deux.",
        keyPoints: [
          "EI : pas de capital, patrimoine personnel protégé depuis 2022",
          "EURL/SARL : gérant majoritaire = TNS (~45% cotisations)",
          "SASU/SAS : président = assimilé salarié (~80% cotisations, régime général)",
          "VTC = artisanat → Répertoire des Métiers obligatoire",
          "Code APE T3P : 49.32Z"
        ],
        practicalCases: [
          {
            situation: "Karim démarre seul son activité VTC. Il hésite entre EI au régime micro et SASU. Son chiffre d'affaires prévisionnel est de 45 000€/an.",
            question: "Quelle structure lui permet de bénéficier de la meilleure protection sociale, et à quel coût ?",
            answer: "La SASU lui donne la protection du régime général (équivalent salarié), au prix de cotisations bien plus lourdes (~80% sur sa rémunération nette versée).",
            reasoning: "En EI micro, Karim cotise 21,2% forfaitaire sur son CA via le régime des indépendants — protection sociale minimale (pas de chômage, IJ faibles). En SASU, dès qu'il se verse un salaire, il bascule en assimilé salarié avec couverture maladie, retraite, prévoyance d'un cadre. Le différentiel de cotisations finance cette protection. À 45 000€ de CA, beaucoup choisissent l'EI pour conserver de la trésorerie ; la SASU devient intéressante au-delà ou si la couverture sociale prime."
          },
          {
            situation: "Sophie crée une SARL avec son frère ; elle détient 60% des parts et exerce la gérance.",
            question: "Quel est son régime social et que se passerait-il si elle ne détenait que 40% ?",
            answer: "Gérante majoritaire → TNS. Avec 40%, elle deviendrait gérante minoritaire et basculerait au régime assimilé salarié.",
            reasoning: "Le seuil clé est 50% du capital (parts détenues par le gérant + conjoint + enfants mineurs). Au-delà = TNS, en dessous ou à égalité = assimilé salarié. C'est une question piège classique de l'examen : on confond souvent forme juridique et régime social, alors que c'est le pourcentage de détention qui tranche."
          }
        ],
        fieldExample: "Un VTC choisit la SASU : il cotise davantage mais bénéficie de la même couverture sociale qu'un cadre salarié.",
        examWarning: "Ne pas confondre TNS (gérant majoritaire SARL/EURL) et assimilé salarié (président SAS/SASU, gérant minoritaire SARL).",
        confusionPoints: [
          "TNS = Travailleur Non Salarié (SARL maj./EURL) ≠ Assimilé salarié (SAS/SASU, SARL min.)",
          "EI ≠ Auto-entrepreneur (l'EI est la forme juridique, le micro est un régime fiscal/social)"
        ],
        tips: [
          "Règle des 50% : majoritaire = TNS, minoritaire ou égalitaire = assimilé salarié",
          "VTC → RM (artisanat) / Taxi → RCS (commerce)"
        ],
        legalRefs: ["Code de commerce Art. L123-1", "Loi n°2022-172 du 14 février 2022", "Décret n°98-247 (artisanat VTC)"]
      },
      {
        id: 'ges-creation-entreprise',
        title: "Création d'entreprise",
        essential: "L'immatriculation au RCS (taxi) ou au RM (VTC) donne l'existence légale ; exercer avant = travail dissimulé sanctionné pénalement.",
        narrative: "La création d'une entreprise T3P n'est pas qu'une formalité administrative : c'est l'acte qui donne naissance à une personne juridique distincte. Le dossier passe par le guichet unique INPI depuis 2023 (qui a remplacé les CFE), centralisant l'inscription au registre, l'affiliation sociale, fiscale et — pour le VTC — l'inscription au Répertoire des Métiers.\n\nÀ la sortie, l'entrepreneur reçoit un SIREN à 9 chiffres (identifiant unique de l'entreprise) et autant de SIRET à 14 chiffres que d'établissements (SIREN + 5 chiffres de NIC). Le Kbis (sociétés) ou l'extrait K (EI commerçant) matérialise l'immatriculation et reste exigé par les banques, assureurs et plateformes.\n\nPour les sociétés, deux obligations s'ajoutent : la publication d'une annonce légale dans un journal habilité du département du siège (coût ~150-200€), et l'ouverture d'un compte bancaire dédié sur lequel doit être déposé le capital avant immatriculation. La durée de vie d'une société est limitée à 99 ans (prorogeable). L'EI échappe à ces deux contraintes : pas d'annonce, pas de capital, compte pro recommandé mais non obligatoire si le CA reste < 10 000€/an sur 2 ans.",
        keyPoints: [
          "Guichet unique INPI depuis 2023 (ex-CFE)",
          "SIREN (9 chiffres) = entreprise / SIRET (14 chiffres) = établissement",
          "Annonce légale obligatoire pour les sociétés (pas pour EI)",
          "Durée maximale d'une société : 99 ans, prorogeable",
          "Compte bancaire pro : obligatoire en société, recommandé en EI"
        ],
        practicalCases: [
          {
            situation: "Mehdi a commencé à transporter des clients via une application VTC avant d'avoir reçu son extrait Kbis et son inscription au RM.",
            question: "Que risque-t-il et pourquoi ?",
            answer: "Travail dissimulé : jusqu'à 3 ans d'emprisonnement et 45 000€ d'amende (article L8224-1 du Code du travail), plus interdiction d'exercer.",
            reasoning: "Sans immatriculation, l'activité n'a pas d'existence légale. Le simple fait d'encaisser une course constitue une dissimulation d'activité. À cela s'ajoutent les sanctions URSSAF (redressement des cotisations) et fiscales (rappel d'impôt + majoration de 80%). L'examen teste systématiquement ce piège : l'immatriculation est un préalable absolu, sans transition."
          },
          {
            situation: "Léa crée une SARL VTC avec un capital social de 1 000€. Elle reçoit un SIRET pour son siège à Lyon et ouvre un dépôt à Marseille.",
            question: "Combien de SIRET et de SIREN aura-t-elle ?",
            answer: "1 SIREN (l'entreprise) et 2 SIRET (Lyon + Marseille, chaque établissement ayant son propre NIC de 5 chiffres).",
            reasoning: "Le SIREN identifie la personne morale, unique et permanent. Le SIRET identifie chaque lieu d'exercice physique. Cette distinction est essentielle pour la facturation, la TVA et les déclarations sociales (chaque SIRET a sa propre déclaration URSSAF si du personnel y travaille)."
          }
        ],
        fieldExample: "Un VTC reçoit son Kbis 7 jours après dépôt INPI : il peut désormais facturer légalement.",
        examWarning: "Confondre SIREN et SIRET = erreur la plus fréquente. SIREN identifie l'entreprise, SIRET l'établissement.",
        tips: [
          "SIREN = 9 chiffres (entreprise)",
          "SIRET = SIREN + 5 chiffres NIC (établissement)",
          "Guichet unique = INPI depuis 2023"
        ],
        legalRefs: ["Articles L232-22 et L238-3 du Code de commerce", "Article L8224-1 du Code du travail (travail dissimulé)"]
      },
      {
        id: 'ges-comptabilite',
        title: 'Documents comptables',
        essential: "Le bilan photographie le patrimoine à un instant T ; le compte de résultat filme l'activité sur l'exercice — deux outils complémentaires, jamais interchangeables.",
        narrative: "Tout chef d'entreprise T3P, même en société unipersonnelle, doit présenter chaque année trois documents : bilan, compte de résultat et annexe. Ensemble, ils forment les comptes annuels imposés par l'article L123-12 du Code de commerce.\n\nLe bilan est une photographie : à la date de clôture, il liste à gauche tout ce que l'entreprise possède (actif : véhicule, trésorerie, créances clients) et à droite tout ce qui finance ces biens (passif : capital, réserves, emprunts, dettes fournisseurs). Par construction, actif = passif — toujours équilibré.\n\nLe compte de résultat est un film : il enregistre tous les produits (recettes des courses, ventes diverses) et toutes les charges (carburant, assurance, amortissements, cotisations) de l'exercice. La différence donne le résultat net : bénéfice si positif, perte si négatif. Ce résultat vient ensuite alimenter les capitaux propres au bilan suivant — c'est le lien entre les deux documents.\n\nLes durées de conservation sont strictes : 10 ans pour les livres et pièces comptables (article L123-22), 6 ans pour les documents fiscaux (article L102 B LPF). En cas de contrôle, l'absence d'un document peut entraîner rejet de comptabilité et taxation d'office. Le micro-entrepreneur, lui, est dispensé : un simple livre des recettes (et registre des achats si vente de biens) suffit.",
        keyPoints: [
          "Bilan : actif (emplois) = passif (ressources), toujours équilibré",
          "Compte de résultat : produits − charges = résultat net",
          "Résultat net alimente les capitaux propres au bilan suivant",
          "Conservation : 10 ans comptable (L123-22), 6 ans fiscal (L102 B LPF)",
          "Micro-entrepreneur : livre des recettes uniquement"
        ],
        practicalCases: [
          {
            situation: "Un taxi clôture son exercice avec : véhicule 20 000€, trésorerie 5 000€, créances 2 000€ ; emprunt restant 12 000€, dettes fournisseurs 3 000€, capital 5 000€.",
            question: "Quel est le montant du résultat de l'exercice, et où apparaît-il ?",
            answer: "Résultat = 7 000€ (équilibre du bilan : 27 000 actif − 20 000 passif hors résultat). Il s'inscrit au passif, dans les capitaux propres.",
            reasoning: "Le bilan doit s'équilibrer. Actif total = 27 000€. Passif hors résultat = capital 5 000 + emprunt 12 000 + dettes 3 000 = 20 000€. L'écart de 7 000€ est nécessairement le résultat de l'exercice, qui vient grossir les capitaux propres au passif. C'est ainsi qu'on retrouve la cohérence entre bilan et compte de résultat."
          },
          {
            situation: "Un contrôleur fiscal demande à un VTC ses factures de carburant de l'année N-7.",
            question: "L'entreprise est-elle obligée de les fournir ?",
            answer: "Non au sens fiscal (délai 6 ans dépassé), mais oui au sens comptable si elles constituent des pièces justificatives (10 ans).",
            reasoning: "Deux régimes coexistent : 10 ans comptable (Code de commerce) et 6 ans fiscal (LPF). Pour les pièces justificatives qui servent aux deux usages — c'est le cas des factures — c'est la durée la plus longue qui prévaut en pratique. Réponse pédagogique attendue : connaître les deux délais et savoir lequel s'applique selon l'origine de la demande."
          }
        ],
        fieldExample: "Fin d'exercice : le comptable établit le bilan du taxi (15 000€ actif, 10 000€ dettes) et son compte de résultat (8 000€ bénéfice).",
        examWarning: "Le bilan n'est pas le résultat. Bilan = photo du patrimoine à un instant T, compte de résultat = activité sur 12 mois.",
        tips: [
          "Bilan = photo instantanée (PHOTO)",
          "Compte de résultat = film de l'année (FILM)",
          "Conservation : 10C / 6F (10 Comptable / 6 Fiscal)"
        ],
        legalRefs: ["Article L123-12 du Code de commerce", "Article L123-22 (conservation 10 ans)", "Article L102 B LPF (6 ans fiscal)"]
      },
      {
        id: 'ges-soldes-gestion',
        title: 'Soldes intermédiaires de gestion',
        essential: "L'EBE mesure la performance économique pure de l'exploitation, avant politique de financement et d'amortissement.",
        narrative: "Lire un compte de résultat ligne par ligne ne suffit pas pour piloter une activité T3P : il faut décomposer la formation du résultat en soldes intermédiaires de gestion (SIG). Cette cascade — imposée par le Plan Comptable Général — permet d'isoler ce qui crée vraiment de la valeur.\n\nLa première étape est le chiffre d'affaires (CA) : total des courses facturées HT sur l'exercice. On en soustrait les consommations intermédiaires (carburant, péages, entretien sous-traité, fournitures) pour obtenir la valeur ajoutée (VA) : ce que l'entreprise crée réellement par son travail, au-delà de ce qu'elle achète.\n\nDe la VA, on retranche les charges de personnel (salaires + cotisations patronales) et les impôts et taxes liés à l'exploitation (CFE, taxe sur véhicules). Reste l'Excédent Brut d'Exploitation (EBE) : c'est le solde clé, car il mesure la rentabilité économique avant tout choix de financement (intérêts d'emprunt) et avant amortissements (qui dépendent de la politique d'investissement). Un EBE positif signifie que l'activité génère du cash ; négatif, c'est l'exploitation elle-même qui est déficitaire.\n\nLe seuil de rentabilité (ou point mort) complète cette analyse : c'est le CA minimum à réaliser pour couvrir l'ensemble des charges fixes. Formule : CA seuil = Charges fixes / Taux de marge sur coûts variables. Connaître ce seuil permet au conducteur de savoir combien de courses par mois sont vitales — au-delà, c'est du bénéfice.",
        keyPoints: [
          "Cascade : CA → VA → EBE → Résultat d'exploitation → Résultat net",
          "Valeur ajoutée = CA − consommations intermédiaires",
          "EBE = VA − charges personnel − impôts et taxes (hors IS)",
          "EBE positif ≠ résultat net positif (financiers et amortissements peuvent inverser)",
          "Seuil de rentabilité = Charges fixes / Taux de marge sur coûts variables"
        ],
        practicalCases: [
          {
            situation: "Un VTC réalise 60 000€ de CA. Carburant et péages : 12 000€. Aucun salarié. CFE : 500€. Amortissement véhicule : 5 000€. Intérêts d'emprunt : 1 500€.",
            question: "Calculer la VA, l'EBE et le résultat d'exploitation.",
            answer: "VA = 48 000€ (60 000 − 12 000). EBE = 47 500€ (48 000 − 500). Résultat d'exploitation = 42 500€ (47 500 − 5 000 d'amortissement). Le résultat courant = 41 000€ après les 1 500€ d'intérêts.",
            reasoning: "On déroule la cascade SIG. En l'absence de salaires, EBE et VA sont très proches. L'amortissement n'intervient qu'au niveau du résultat d'exploitation (il reflète l'usure de l'investissement). Les intérêts d'emprunt sont des charges financières, qui descendent encore d'un cran. Cet exercice est typique du Module 1 — il faut savoir où chaque charge 'tombe' dans la cascade."
          },
          {
            situation: "Un taxi a 1 800€/mois de charges fixes (assurance, abonnement central, leasing). Son taux de marge sur coûts variables est de 60%.",
            question: "Quel CA mensuel doit-il atteindre pour couvrir ses charges fixes ?",
            answer: "Seuil = 1 800 / 0,60 = 3 000€ de CA mensuel.",
            reasoning: "Au-dessous de 3 000€/mois, le taxi travaille à perte. Chaque euro de CA au-delà génère 0,60€ qui alimente le bénéfice. Connaître son point mort permet de fixer un objectif d'activité réaliste et de mesurer instantanément la rentabilité d'une journée."
          }
        ],
        fieldExample: "Un VTC fait 60 000€ de CA, dégage 47 500€ d'EBE, mais après amortissement et intérêts son résultat net tombe à 35 000€.",
        examWarning: "EBE positif n'implique pas résultat net positif : les amortissements et charges financières peuvent inverser la tendance.",
        tips: [
          "Mémo cascade : CA → VA → EBE → REX → RCAI → RN",
          "EBE = performance économique pure (avant financement et amortissement)"
        ],
        legalRefs: ["Plan Comptable Général", "Article L123-13 du Code de commerce"]
      },
      {
        id: 'ges-fiscalite',
        title: 'Fiscalité et TVA',
        essential: "Le transport public de voyageurs (taxi, VTC, VMDTR) relève strictement du taux réduit de TVA à 10%, sans exception.",
        narrative: "La TVA est une taxe sur la valeur ajoutée : l'entreprise la collecte auprès du client (sur le prix de la course), en déduit celle qu'elle a payée à ses fournisseurs (carburant, entretien, véhicule), et reverse à l'État la différence. Si la TVA déductible dépasse la collectée, on obtient un crédit de TVA, remboursable ou imputable sur les périodes suivantes.\n\nLe taux applicable au transport de voyageurs est de 10% depuis 2014 (article 279 b bis du CGI, complété par l'article 68 de l'annexe III). Ce taux réduit s'applique à toutes les courses taxi, VTC et VMDTR — c'est une exception au taux normal de 20%. Erreur classique à l'examen : appliquer 20% à une course.\n\nPour le carburant, les règles de récupération de TVA dépendent de la motorisation : gazole et essence à 80% récupérables sur véhicules de tourisme ; GPL, électricité, hydrogène à 100%. C'est un levier fiscal important pour orienter la flotte vers les énergies propres.\n\nLe régime micro-entrepreneur bénéficie d'une franchise en base de TVA tant que le CA reste sous 37 500€/an pour les prestations de service (seuils 2025) : pas de TVA facturée, pas de récupération. Au-delà, bascule en régime réel avec collecte et déclarations périodiques.\n\nL'impôt sur le bénéfice dépend de la forme : EI à l'IR dans la catégorie BIC (bénéfices industriels et commerciaux), société à l'IS (15% jusqu'à 42 500€ de bénéfice, 25% au-delà).",
        keyPoints: [
          "TVA transport de voyageurs = 10% (art. 279 b bis CGI)",
          "Franchise en base TVA : CA < 37 500€/an en services (2025)",
          "Récupération TVA carburant : 80% gazole/essence, 100% électrique/GPL/H₂",
          "Crédit de TVA si déductible > collectée (remboursable ou reportable)",
          "IS : 15% jusqu'à 42 500€ de bénéfice, 25% au-delà"
        ],
        practicalCases: [
          {
            situation: "Un VTC en régime réel facture une course 110€ TTC. Il a engagé 40€ HT de carburant (gazole) et 20€ HT d'entretien sur la période.",
            question: "Combien de TVA doit-il reverser à l'État pour cette opération ?",
            answer: "TVA collectée = 10€ (110 / 1,10 × 0,10). TVA déductible carburant = 40 × 0,20 × 0,80 = 6,40€. TVA entretien = 20 × 0,20 = 4€. Net = 10 − 6,40 − 4 = −0,40€ → crédit de TVA de 0,40€.",
            reasoning: "Course taxée à 10%, achats taxés à 20% (taux normal). Le carburant subit l'abattement de 80% propre aux véhicules de tourisme. L'entretien est récupérable à 100%. Sur cette opération, l'entreprise est en crédit — fréquent quand on investit beaucoup ou qu'on a peu de courses."
          },
          {
            situation: "Sami est VTC en micro-entreprise. Sur l'année N, son CA atteint 38 000€.",
            question: "Quelles sont les conséquences immédiates en matière de TVA ?",
            answer: "Il dépasse le seuil de franchise (37 500€) en cours d'année : il devient redevable de la TVA à partir du 1er jour du mois de dépassement, sur l'intégralité des opérations de ce mois.",
            reasoning: "La franchise en base est conditionnelle : dès que le CA dépasse le seuil, l'assujettissement à TVA prend effet rétroactivement au 1er du mois en cours. Sami devra rectifier ses factures du mois et collecter la TVA. Il pourra en contrepartie déduire la TVA sur ses achats à partir de cette date."
          }
        ],
        fieldExample: "Un VTC collecte 1 000€ de TVA (sur 10 000€ de courses) et déduit 400€ : il reverse 600€ à l'État.",
        examWarning: "Le transport de voyageurs T3P bénéficie du taux réduit de 10%, jamais du taux normal de 20% — piège récurrent.",
        confusionPoints: [
          "10% = transport de voyageurs ≠ 20% = taux normal services",
          "Franchise TVA (micro) ≠ Exonération (jamais redevable)"
        ],
        tips: [
          "T3P = TVA à 10%, à graver",
          "En micro, pas de TVA collectée ⇒ pas de TVA récupérée"
        ],
        legalRefs: ["Article 279 b bis CGI", "Article 68 annexe III CGI", "Article 298-4-1° CGI (carburant)", "Article 293 B CGI (franchise en base)"]
      },
      {
        id: 'ges-charges-sociales',
        title: 'Charges sociales',
        essential: "CSG (9,2%) finance la Sécurité sociale ; CRDS (0,5%) rembourse la dette sociale créée en 1996 — deux contributions distinctes.",
        narrative: "Les charges sociales d'un conducteur T3P dépendent directement de sa structure juridique : trois régimes coexistent et déterminent le coût réel du travail.\n\nLe micro-entrepreneur paie un forfait unique de 21,2% sur le CA encaissé (prestations de service BIC, taux 2025) — pas de bénéfice à calculer, pas de cotisations minimales en l'absence de CA. Simplicité maximale, protection sociale minimale.\n\nLe TNS (gérant majoritaire de SARL, EURL, entrepreneur individuel au réel) cotise environ 45% sur le bénéfice — maladie, retraite de base et complémentaire, invalidité-décès, allocations familiales, CSG/CRDS. Cotisations minimales dues même en l'absence de bénéfice (~1 200€/an).\n\nL'assimilé salarié (président de SAS/SASU, gérant minoritaire de SARL) supporte des cotisations équivalentes à un cadre du privé : ~80% de la rémunération nette (charges patronales + salariales). En contrepartie, il bénéficie du régime général : meilleure couverture maladie, retraite, prévoyance. Il n'a en revanche pas droit à l'assurance chômage (sauf adhésion volontaire type GSC).\n\nLa CSG (Contribution Sociale Généralisée, créée en 1991) finance la Sécurité sociale au sens large : 9,2% sur les revenus d'activité, dont 6,8% déductibles du revenu imposable. La CRDS (Contribution au Remboursement de la Dette Sociale, créée par l'ordonnance de 1996) sert exclusivement à rembourser la dette de la Sécurité sociale : 0,5% sur la même assiette, non déductible. Le piège examen : confondre les deux ou inverser leurs taux.",
        keyPoints: [
          "Micro : 21,2% forfaitaire sur CA (services BIC, 2025)",
          "TNS : ~45% du bénéfice + cotisations minimales annuelles",
          "Assimilé salarié : ~80% de la rémunération, régime général Sécu",
          "CSG : 9,2% (6,8% déductibles) → finance la Sécu",
          "CRDS : 0,5% non déductible → rembourse la dette sociale (depuis 1996)"
        ],
        practicalCases: [
          {
            situation: "Yasmine est présidente de sa SASU VTC. Elle se verse une rémunération nette de 2 000€/mois.",
            question: "Quel est l'ordre de grandeur du coût total chargé pour son entreprise ?",
            answer: "Environ 3 600€/mois (2 000€ net × ~1,8). Soit ~1 600€ de cotisations sociales pour 2 000€ de net.",
            reasoning: "En assimilé salarié, les charges patronales et salariales cumulées représentent ~80% du net versé. Pour 2 000€ net, l'entreprise débourse ~3 600€. C'est le coût de la protection sociale équivalente à un cadre. Si Yasmine était gérante majoritaire d'EURL (TNS), elle paierait ~45% sur son bénéfice prélevé, donc nettement moins, mais sans le filet de sécurité du régime général."
          },
          {
            situation: "Un VTC TNS au réel déclare 30 000€ de bénéfice. Son comptable lui parle de CSG/CRDS.",
            question: "À quoi servent respectivement ces deux contributions et laquelle est partiellement déductible ?",
            answer: "CSG (9,2%) finance la Sécurité sociale et est déductible à hauteur de 6,8 points ; CRDS (0,5%) rembourse la dette sociale créée en 1996 et n'est pas déductible.",
            reasoning: "Question type examen sur les libellés exacts. Mémoriser : CSG = Contribution Sociale Généralisée (finance), CRDS = Contribution au Remboursement de la Dette Sociale (rembourse). La déductibilité partielle de la CSG est une spécificité fiscale : 6,8 points sont retranchés du revenu imposable, 2,4 points restent à la charge effective."
          }
        ],
        fieldExample: "Un VTC en SASU se verse 3 000€ brut : environ 2 400€ partent en cotisations (charges salariales + patronales).",
        examWarning: "CSG ≠ CRDS : la CSG finance la Sécu (9,2%), la CRDS rembourse la dette (0,5% depuis 1996).",
        tips: [
          "CSG = Contribution Sociale Généralisée (9,2%)",
          "CRDS = Contribution au Remboursement de la Dette Sociale (0,5%)",
          "Micro = 21,2% / TNS = ~45% / Assimilé = ~80%"
        ],
        legalRefs: ["Article L136-1 du Code de la sécurité sociale", "Ordonnance n°96-50 du 24 janvier 1996 (CRDS)"]
      },
      {
        id: 'ges-amortissement',
        title: 'Amortissement',
        essential: "L'amortissement étale comptablement le coût d'un investissement sur sa durée d'utilisation et réduit chaque année le bénéfice imposable.",
        narrative: "Quand un conducteur achète son véhicule, il ne déduit pas l'intégralité du prix la première année : ce serait fausser sa fiscalité. Il amortit : il répartit la charge sur la durée d'utilisation prévue, généralement 4 à 5 ans pour un véhicule professionnel (soit 20 à 25% par an en mode linéaire).\n\nDeux méthodes existent. L'amortissement linéaire applique un montant constant chaque année (ex : 25 000€ sur 5 ans = 5 000€/an). L'amortissement dégressif accélère la déduction au début (utile pour les véhicules à forte décote), réservé à certains biens éligibles. Le linéaire est la règle générale pour les véhicules T3P.\n\nLe législateur a fixé un plafond fiscal de déductibilité pour éviter les abus sur véhicules haut de gamme (article 39-4 CGI) : 9 900€ pour véhicules > 165 g CO₂/km, 18 300€ pour 130 à 165 g, 20 300€ pour < 130 g, 30 000€ pour les véhicules électriques (< 20 g CO₂/km).\n\nAttention : ces plafonds ne s'appliquent pas aux taxis ni aux VTC dans le cadre de l'exception 'transport public de voyageurs' — un point pédagogique souvent mal compris. Un taxi peut amortir intégralement son véhicule, quelle que soit sa valeur, car l'usage commercial neutralise la limitation prévue pour les véhicules de tourisme privés.\n\nDistinguer enfin immobilisation (bien durable > 500€ HT amorti sur plusieurs années) et charge (consommé dans l'exercice : carburant, péages, entretien courant déduits intégralement l'année du paiement).",
        keyPoints: [
          "Véhicule : amortissement sur 4-5 ans (20-25% linéaire/an)",
          "Linéaire = constant / Dégressif = accéléré au début",
          "Plafond fiscal art. 39-4 CGI : 9 900€ à 30 000€ selon CO₂",
          "EXCEPTION T3P : pas de plafond pour taxis/VTC (transport public)",
          "Immobilisation > 500€ HT (amortie) ≠ charge (déduite immédiatement)"
        ],
        practicalCases: [
          {
            situation: "Karine achète un véhicule électrique 45 000€ HT pour son activité VTC. Durée d'amortissement choisie : 5 ans.",
            question: "Quel montant peut-elle amortir chaque année et déduire fiscalement ?",
            answer: "9 000€/an (45 000 / 5). Le plafond de 30 000€ ne s'applique pas car l'activité VTC relève du transport public de voyageurs.",
            reasoning: "Pour un véhicule de tourisme classique, l'excédent au-delà du plafond serait réintégré au bénéfice imposable (15 000€ non déductibles sur 5 ans). Mais l'exception T3P permet la déduction intégrale. C'est un avantage fiscal majeur que l'examen vérifie : nombreux candidats appliquent à tort le plafond aux véhicules T3P."
          },
          {
            situation: "Un taxi achète : 1 jeu de pneus à 600€ HT, 1 GPS embarqué à 300€ HT, 1 véhicule neuf à 22 000€ HT.",
            question: "Quels biens doivent être immobilisés et amortis, lesquels passent en charges ?",
            answer: "Véhicule (22 000€) et pneus (600€ > 500€) → immobilisés et amortis. GPS (300€ < 500€) → charge déductible immédiatement.",
            reasoning: "Le seuil pratique de 500€ HT (tolérance fiscale) sert à distinguer charge et immobilisation. Au-dessus, on étale ; en dessous, on déduit en une fois. Cette règle simplifie la gestion des petits achats."
          }
        ],
        fieldExample: "Véhicule 25 000€ sur 5 ans = 5 000€/an déduit du bénéfice imposable (taxi/VTC : intégral, hors plafond).",
        examWarning: "Le plafond fiscal de l'art. 39-4 CGI ne s'applique PAS aux taxis et VTC dans le cadre du transport public de voyageurs.",
        tips: [
          "Linéaire = même chaque année / Dégressif = beaucoup au début",
          "Immobilisation > 500€ HT, charge si en dessous"
        ],
        legalRefs: ["Article 39 du CGI", "Article 39-4 CGI (plafonds véhicules)", "BOI-BIC-AMT-20-40-50 (exception T3P)"]
      },
      {
        id: 'ges-cout-revient',
        title: 'Coût de revient et prix',
        essential: "Le prix de vente d'une course doit couvrir l'intégralité des coûts (fixes + variables) et dégager une marge ; ignorer un poste = vendre à perte.",
        narrative: "Calculer son coût de revient kilométrique est l'exercice fondamental du conducteur T3P : c'est lui qui détermine la rentabilité d'une course, le seuil de refus, et la viabilité de l'activité.\n\nLe coût se décompose en deux catégories. Les charges variables évoluent avec l'activité : carburant (~0,10 à 0,15€/km en thermique, ~0,03 à 0,05€ en électrique), péages, lavage, usure des pneus et plaquettes. Les charges fixes existent même véhicule à l'arrêt : assurance (~2 000€/an), entretien préventif, leasing ou amortissement, abonnements (centrale taxi, applications), CFE, mutuelle, expert-comptable.\n\nLa formule de base : coût kilométrique = (charges fixes annuelles / km annuels prévisionnels) + charges variables par km. Pour un VTC qui fait 40 000 km/an avec 15 000€ de fixes et 0,12€/km de variables : 15 000/40 000 + 0,12 = 0,495€/km. En dessous de ce tarif, chaque kilomètre creuse la perte.\n\nLe point mort (ou seuil de rentabilité) traduit cette logique en nombre de courses : c'est le volume minimum à réaliser pour couvrir les charges fixes. Au-delà, chaque euro de marge alimente directement le bénéfice. C'est l'indicateur de pilotage quotidien.\n\nLa distinction charges directes / indirectes sert à l'analyse fine : directes = imputables à une course précise (carburant de cette course) ; indirectes = à répartir (assurance, comptable). En gestion T3P, on raisonne plus souvent en fixes/variables, plus opérationnel.",
        keyPoints: [
          "Charges variables : carburant, péages, usure (varient avec l'activité)",
          "Charges fixes : assurance, leasing, abonnements (existent à l'arrêt)",
          "Coût km = (Charges fixes / km annuels) + Variables par km",
          "Point mort = Charges fixes / Marge sur coûts variables",
          "Charges directes (imputables) vs indirectes (réparties)"
        ],
        practicalCases: [
          {
            situation: "Un taxi a 18 000€/an de charges fixes et 0,15€/km de charges variables. Il prévoit 50 000 km/an. Tarif moyen perçu : 1,20€/km.",
            question: "Quel est son coût kilométrique total et sa marge par kilomètre ?",
            answer: "Coût km = 18 000/50 000 + 0,15 = 0,36 + 0,15 = 0,51€/km. Marge = 1,20 − 0,51 = 0,69€/km.",
            reasoning: "Sur 50 000 km, sa marge totale atteint 34 500€, qui constituera son revenu avant impôts et cotisations. Si le tarif moyen chute à 0,50€/km, il bascule en perte. L'exercice montre l'effet de volume : plus on roule, plus les charges fixes s'amortissent par km."
          },
          {
            situation: "Le même taxi accepte une course sèche à 8€ pour 25 km (course de complaisance).",
            question: "Cette course est-elle rentable ?",
            answer: "Coût direct variable = 25 × 0,15 = 3,75€. Marge brute = 4,25€. Mais elle ne couvre pas la quote-part de charges fixes (25 × 0,36 = 9€). Rentabilité globale négative de 4,75€.",
            reasoning: "Piège classique : on raisonne souvent uniquement en charges variables ('je gagne 4€') en oubliant que les charges fixes courent. Sur le court terme, accepter peut faire sens si le véhicule serait à l'arrêt ; sur le long terme, multiplier ce type de course conduit à la cessation."
          }
        ],
        fieldExample: "Coût km calculé à 0,35€. Pour une course de 20 km, le coût direct s'élève à 7€ — en dessous, on vend à perte.",
        examWarning: "Oublier les charges fixes dans le calcul du prix minimum = vendre à perte sans s'en rendre compte.",
        tips: [
          "Coût km = (Fixes/km annuels) + Variables/km",
          "Point mort = Fixes / Taux de marge"
        ],
        legalRefs: ["Comptabilité analytique de gestion (PCG)"]
      },
      {
        id: 'ges-difficultes',
        title: 'Difficultés et cessation',
        essential: "La cessation des paiements doit être déclarée au tribunal sous 45 jours, sous peine de sanctions personnelles contre le dirigeant.",
        narrative: "La cessation des paiements survient lorsque l'entreprise ne peut plus faire face au passif exigible (dettes échues) avec son actif disponible (trésorerie immédiate). Ce n'est pas une simple difficulté passagère : c'est une situation juridique précise qui déclenche des obligations légales strictes.\n\nLe dirigeant dispose de 45 jours à compter de la date de cessation pour la déclarer au tribunal (de commerce pour sociétés et EI commerçants, judiciaire pour les autres). Ne pas le faire constitue une faute de gestion qui peut entraîner la faillite personnelle ou l'interdiction de gérer pour 5 à 15 ans, voire des sanctions pénales (banqueroute).\n\nTrois procédures existent, dans l'ordre de gravité :\n\nSauvegarde (Livre VI Code de commerce) : à demander avant la cessation, quand l'entreprise rencontre des difficultés sérieuses mais reste solvable. C'est un outil préventif négocié, avec gel des dettes et plan sur 10 ans maximum.\n\nRedressement judiciaire : ouvert après cessation des paiements si l'activité semble redressable. Période d'observation de 6 mois (renouvelable), puis plan de continuation ou de cession.\n\nLiquidation judiciaire : prononcée quand le redressement est manifestement impossible. Arrêt de l'activité, vente des actifs, désintéressement des créanciers selon l'ordre légal (super-privilégiés salariés d'abord, puis Trésor, puis créanciers chirographaires).\n\nLa différence cruciale entre sauvegarde et redressement tient à la date : sauvegarde = anticipation, redressement = constat de cessation déjà intervenue.",
        keyPoints: [
          "Cessation de paiement = passif exigible > actif disponible",
          "Déclaration obligatoire sous 45 jours au tribunal",
          "Sauvegarde : AVANT cessation (préventif, dirigeant à l'initiative)",
          "Redressement : APRÈS cessation, si redressement possible",
          "Liquidation : arrêt définitif, vente des actifs",
          "Faute de déclaration : faillite perso, interdiction gérer 5-15 ans"
        ],
        practicalCases: [
          {
            situation: "Karim, gérant d'une EURL VTC, accumule des impayés URSSAF depuis 60 jours. Sa trésorerie est à zéro mais il a encore 8 000€ de factures clients à venir.",
            question: "Est-il en cessation de paiements, et que doit-il faire ?",
            answer: "Oui : passif exigible (dettes URSSAF échues) > actif disponible (0€, les créances clients ne sont pas immédiatement mobilisables). Il doit déclarer la cessation au tribunal sous 45 jours.",
            reasoning: "L'actif disponible se limite à la trésorerie immédiate et aux valeurs réalisables sans délai (pas les créances à recouvrer ni les stocks). C'est la définition technique : le législateur veut éviter qu'on aggrave la situation des créanciers en continuant à fonctionner en insolvabilité. Karim peut, en parallèle, demander un redressement judiciaire s'il pense pouvoir continuer."
          },
          {
            situation: "Lila pressent que sa SARL Taxi va connaître des difficultés (perte d'un gros client, baisse du CA prévisible). Elle est encore à jour de toutes ses dettes.",
            question: "Quelle procédure peut-elle initier et avec quel intérêt ?",
            answer: "La procédure de sauvegarde : ouverte uniquement si l'entreprise n'est pas en cessation des paiements. Elle permet de geler les dettes en cours et de négocier un plan de remboursement sur 10 ans maximum.",
            reasoning: "La sauvegarde est l'outil préventif. Avantage majeur : Lila conserve les commandes, le dirigeant garde la main, et la procédure stigmatise moins que le redressement. C'est elle qui prend l'initiative auprès du tribunal — c'est un point qui différencie radicalement la sauvegarde du redressement (ouvert sur déclaration de cessation ou sur assignation d'un créancier)."
          }
        ],
        fieldExample: "Un taxi ne peut plus payer ses dettes échues depuis 30 jours : il lui reste 15 jours pour se déclarer au tribunal.",
        examWarning: "Sauvegarde ≠ Redressement : sauvegarde AVANT cessation (préventif), redressement APRÈS (constat).",
        tips: [
          "45 jours pour déclarer la cessation",
          "Sauvegarde = anticipation / Redressement = réaction"
        ],
        legalRefs: ["Article L631-4 du Code de commerce (délai 45 jours)", "Livre VI du Code de commerce (procédures collectives)", "Article L653-8 (interdiction de gérer)"]
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
        essential: "La distance d'arrêt = temps de réaction + distance de freinage ; elle est multipliée par 4 quand la vitesse double.",
        narrative: "Comprendre les distances de sécurité, c'est intégrer que le véhicule ne s'arrête jamais instantanément. Quand un obstacle surgit, le conducteur a besoin d'environ 1 seconde pour percevoir, décider et amorcer le freinage : sur cette seconde de réaction, à 50 km/h on parcourt déjà 14 mètres sans freiner. À cette distance s'ajoute le freinage proprement dit, qui dépend du carré de la vitesse.\n\nC'est cette physique du carré qui explique le paradoxe le plus mal compris : doubler la vitesse ne double pas la distance d'arrêt, elle la quadruple. À 50 km/h on s'arrête en ~28 m, à 100 km/h il faut ~88 m, à 130 km/h plus de 130 m. La pluie aggrave encore : un revêtement mouillé peut multiplier la distance de freinage par 1,5 à 2, la neige ou le verglas par 3 ou plus.\n\nL'article R412-12 du Code de la route impose un intervalle minimal de 2 secondes entre véhicules (règle dite des '2 secondes'). En pratique, sur autoroute, cela correspond à environ 2 chevrons. Pour un conducteur T3P qui transporte du public, cette marge n'est pas un confort : c'est une condition de sécurité contractuelle vis-à-vis du passager.",
        keyPoints: [
          "Distance d'arrêt = réaction (~1s) + freinage (∝ vitesse²)",
          "Règle des 2 secondes minimum entre véhicules",
          "Doubler la vitesse → quadrupler la distance d'arrêt",
          "Pluie : freinage ×1,5 à ×2 ; neige/verglas ×3+",
          "Sur autoroute : 1 chevron ≈ 50 m"
        ],
        practicalCases: [
          {
            situation: "Un VTC roule à 90 km/h sur route mouillée. Le véhicule devant freine brutalement.",
            question: "Quelle distance minimale aurait-il dû maintenir, sachant que la distance d'arrêt sur sec à 90 km/h est d'environ 70 m ?",
            answer: "Sur mouillé, il faut compter ×1,5 à ×2 : environ 100 à 140 m, soit clairement au-delà des 2 secondes 'standard'.",
            reasoning: "La règle des 2 secondes est un minimum par temps sec. Par pluie, la majorer à 4 secondes est la pratique recommandée. Un VTC professionnel doit anticiper : ralentir avant les zones de freinage probables (entrée de ville, péages), maintenir une marge supérieure. Le passager perçoit la maîtrise du chauffeur dans ces moments-là."
          },
          {
            situation: "Une cliente reproche à son chauffeur de 'coller' la voiture de devant à 50 km/h en ville.",
            question: "Quelle distance correspond à la règle des 2 secondes à cette vitesse ?",
            answer: "Environ 28 m (50 km/h = 13,9 m/s × 2s).",
            reasoning: "La règle se calcule : distance = vitesse (m/s) × 2 secondes. À 50 km/h ≈ 14 m/s, soit 28 m d'intervalle. En ville, c'est rarement respecté en circulation dense, mais c'est la cible de sécurité. Pour le passager, c'est aussi une perception de confort : moins de freinages secs."
          }
        ],
        fieldExample: "Sur l'A6 à 130 km/h, le conducteur garde 2 chevrons (≈ 100 m) avec le véhicule de devant — règle des 2 secondes respectée.",
        examWarning: "Question piège récurrente : 'à 100 km/h la distance d'arrêt double-t-elle par rapport à 50 km/h ?' → NON, elle est multipliée par 4.",
        confusionPoints: [
          "Distance de réaction (linéaire avec la vitesse) ≠ distance de freinage (proportionnelle au carré)",
          "Intervalle 2 secondes (règle pratique) ≠ distance d'arrêt totale (réaction + freinage)"
        ],
        tips: [
          "Calculer en secondes (compter '21, 22' au passage d'un repère)",
          "Sur pluie, doubler la marge : 4 secondes minimum"
        ],
        legalRefs: ["Article R412-12 Code de la route"]
      },
      {
        id: 'sec-vitesses',
        title: 'Limitations de vitesse',
        essential: "50 en ville, 80 sur route (90 si décision locale), 110 sur 2x2 voies, 130 sur autoroute — toujours -20 km/h sur autoroute mouillée.",
        narrative: "Les limitations de vitesse ne sont pas seulement des chiffres : elles découlent des distances d'arrêt et de la gravité des chocs. En agglomération, la limite générale est 50 km/h, abaissée à 30 km/h en zone 30 (autour des écoles, centres-villes apaisés) et 20 km/h en zone de rencontre (priorité piéton). Le seuil est fixé pour qu'un piéton heurté ait une chance de survie élevée.\n\nHors agglomération, la limite est de 80 km/h sur les routes bidirectionnelles sans séparateur central, depuis le décret de juillet 2018 — certains départements ont relevé à 90 km/h sur certaines portions (décision préfectorale). Sur les 2x2 voies, on monte à 110 km/h ; sur autoroute, 130 km/h. La pluie ou neige déclenche une réduction automatique : -20 km/h sur autoroute (130→110), -10 km/h sur 2x2 voies (110→100) et hors agglo (80→70).\n\nDeux règles à connaître : par visibilité réduite < 50 m (brouillard épais, forte pluie), la vitesse est plafonnée à 50 km/h partout ; et le jeune conducteur (permis < 3 ans, < 2 ans si AAC) doit appliquer -10 km/h sur les voies rapides (100 au lieu de 110, 110 au lieu de 130). Tout dépassement ≥ 50 km/h au-dessus de la limite entraîne la rétention immédiate du permis et un délit (1 500€ + 6 points + 3 ans suspension).",
        keyPoints: [
          "Agglomération : 50 (30 en zone 30, 20 en zone rencontre)",
          "Hors agglo : 80 (90 si décision locale)",
          "2x2 voies : 110 ; Autoroute : 130",
          "Pluie : -20 km/h autoroute, -10 km/h ailleurs",
          "Visibilité < 50 m : 50 km/h maximum partout"
        ],
        practicalCases: [
          {
            situation: "Sur une autoroute limitée à 130 km/h, il commence à pleuvoir. Le conducteur maintient 125 km/h.",
            question: "Est-il en infraction et que risque-t-il ?",
            answer: "Oui : la limite passe automatiquement à 110 km/h sous la pluie. Il est en excès de 15 km/h → 135€ + 1 point.",
            reasoning: "La réduction par temps de pluie ne nécessite aucune signalisation : elle est applicable dès que la chaussée est mouillée. À 125 km/h alors que la limite est 110, l'excès est de 15 km/h (zone 'mineure' : entre 0 et 20 km/h au-dessus) → contravention 4e classe. À noter : un jeune conducteur aurait une limite à 100 km/h dans les mêmes conditions."
          },
          {
            situation: "Dans une zone de rencontre balisée, un VTC roule à 35 km/h pour gagner du temps.",
            question: "Quelle est l'infraction et quelle est la règle dans cette zone ?",
            answer: "Excès de 15 km/h en zone limitée à 20 km/h, doublé d'une violation de la priorité piéton.",
            reasoning: "La zone de rencontre (panneau B52) est limitée à 20 km/h et les piétons sont prioritaires sur l'ensemble de la chaussée. Un VTC à 35 km/h commet une double faute : excès de vitesse + mise en danger des piétons (qui peuvent traverser n'importe où). Le contexte aggrave la sanction si un piéton est heurté. Bonne pratique : suivre le rythme du piéton, klaxon proscrit."
          }
        ],
        fieldExample: "À l'entrée de la zone 30 d'un centre-ville, le compteur passe de 50 à 30 km/h : freinage progressif anticipé, confort passager préservé.",
        examWarning: "Le jeune conducteur (permis < 3 ans) doit appliquer -10 km/h SUR LES VOIES RAPIDES uniquement, pas en ville.",
        confusionPoints: [
          "Zone 30 (30 km/h, voiture prioritaire) ≠ Zone de rencontre (20 km/h, piéton prioritaire)",
          "Réduction pluie -20 (autoroute) ≠ -10 (autres voies)"
        ],
        tips: [
          "Mémo voies rapides jeune conducteur : 100 / 110 au lieu de 110 / 130",
          "Visibilité < 50 m → 50 partout (mnémonique '50 < 50')"
        ],
        legalRefs: ["Articles R413-1 à R413-17 Code de la route"]
      },
      {
        id: 'sec-alcool-stupefiants',
        title: 'Alcool et stupéfiants',
        essential: "0,5 g/L = contravention, ≥ 0,8 g/L = délit ; pour les stupéfiants, c'est tolérance zéro et présence détectée = délit.",
        narrative: "La législation alcool s'articule autour de deux seuils. Entre 0,5 g/L et 0,79 g/L de sang (soit 0,25 à 0,39 mg/L d'air expiré), c'est une contravention 4e classe : 135€ forfaitaires, retrait de 6 points, immobilisation du véhicule possible. À partir de 0,8 g/L de sang (0,4 mg/L air expiré), on bascule en délit : jusqu'à 4 500€ d'amende, 2 ans de prison, suspension de permis jusqu'à 3 ans, peines complémentaires (stage, EAD).\n\nLe taux légal s'applique uniformément à tous les conducteurs, mais une catégorie est traitée à part : le jeune conducteur (permis probatoire) doit rester sous 0,2 g/L (équivalent verre nul). Pour les T3P, certaines conventions et règlements internes des plateformes imposent également 0 g/L pendant le service. Un conducteur de transport public à risque pénal + commercial cumulé.\n\nPour les stupéfiants, c'est tolérance zéro depuis 2003 : la simple présence détectée par test salivaire (cannabis, cocaïne, opiacés, amphétamines) constitue un délit, indépendamment de toute altération réelle de conduite. Sanctions : 4 500€ + 2 ans de prison + 6 points + suspension. Le refus de se soumettre au dépistage est puni des mêmes peines que la conduite en état délictueux — c'est un message clair du législateur. Aucune méthode 'd'élimination' n'accélère la décomposition de l'alcool : seul le temps (environ 0,15 g/L/h) la dissipe. Café, douche froide, repas : aucun effet sur le taux.",
        keyPoints: [
          "0,5-0,79 g/L sang : contravention 135€ + 6 points",
          "≥ 0,8 g/L : délit (4 500€ + prison + suspension)",
          "Jeune conducteur (probatoire) : 0,2 g/L maximum",
          "Stupéfiants : tolérance zéro, présence = délit",
          "Refus de dépistage = mêmes peines que le délit"
        ],
        practicalCases: [
          {
            situation: "Un chauffeur VTC fête un anniversaire la veille au soir. Le lendemain à 9h, contrôlé, il est mesuré à 0,4 mg/L d'air expiré.",
            question: "Quelle est la qualification juridique et quelles sanctions risque-t-il ?",
            answer: "0,4 mg/L air expiré = 0,8 g/L sang → c'est un délit : 4 500€, 2 ans de prison, suspension jusqu'à 3 ans, 6 points.",
            reasoning: "La conversion air expiré → sang se fait par ×2 : 0,4 mg/L air = 0,8 g/L sang, pile sur le seuil délictuel. Le chauffeur a sous-estimé le temps d'élimination (~0,15 g/L/h) : 5 verres pris à 1h du matin restent détectables 8h plus tard. Conséquence professionnelle : déconventionnement plateformes, signalement préfectoral, possible retrait de carte pro."
          },
          {
            situation: "Lors d'un contrôle, un conducteur refuse le dépistage salivaire stupéfiants en disant qu'il est pressé.",
            question: "Quelles conséquences ce refus entraîne-t-il ?",
            answer: "Mêmes peines que la conduite sous stupéfiants : 4 500€, 2 ans de prison, suspension, 6 points.",
            reasoning: "L'article L235-3 du Code de la route assimile expressément le refus de dépistage à la conduite sous stupéfiants. Le législateur empêche ainsi qu'un conducteur 'gagne du temps' pour faire baisser son taux. Pour un T3P, ce refus signe aussi quasi-systématiquement la fin de carrière (retrait de carte pro). Réflexe : accepter tout contrôle, c'est une protection professionnelle."
          }
        ],
        fieldExample: "Un VTC mesuré à 0,6 g/L après une soirée : 135€ + 6 points + immobilisation = potentielle perte du permis probatoire.",
        examWarning: "0,8 g/L SANG = 0,4 mg/L AIR EXPIRÉ. Ne pas confondre les deux unités, l'examen joue souvent dessus.",
        confusionPoints: [
          "Contravention (0,5-0,79 g/L, 135€) ≠ Délit (≥ 0,8 g/L, prison possible)",
          "Alcool (seuil à 0,5 g/L) ≠ Stupéfiants (tolérance zéro)"
        ],
        tips: [
          "1 verre standard = +0,20 à 0,25 g/L (homme moyen 75 kg)",
          "Élimination ≈ 0,15 g/L par heure, rien n'accélère"
        ],
        legalRefs: ["Articles L234-1 à L234-9 (alcool)", "Articles L235-1 à L235-5 (stupéfiants) Code de la route"]
      },
      {
        id: 'sec-fatigue-vigilance',
        title: 'Fatigue et vigilance',
        essential: "Le seul remède efficace contre la fatigue au volant est le sommeil — pause 15-20 min toutes les 2 heures de conduite.",
        narrative: "La fatigue est responsable d'environ 1 accident mortel sur 3 sur autoroute. C'est une cause sous-estimée parce qu'elle n'est pas visible : pas d'alcool, pas d'excès de vitesse, mais une chute brutale des capacités attentionnelles. Pour un T3P qui enchaîne les courses tard le soir ou tôt le matin, c'est un risque structurel.\n\nLe cerveau humain présente deux creux physiologiques de vigilance : entre 2h et 5h du matin, et entre 13h et 15h après le déjeuner. Pendant ces fenêtres, le risque d'endormissement est multiplié par 3 à 5. Les signaux d'alerte sont stéréotypés : bâillements répétés, yeux qui piquent, paupières lourdes, picotements dans le dos, sensation que le véhicule 'flotte', franchissement involontaire de ligne. Dès le premier signe, il faut s'arrêter.\n\nLa parade scientifiquement validée est la micro-sieste de 15 à 20 minutes : au-delà, on entre en sommeil profond et le réveil est groggy ; en deçà, l'effet est insuffisant. 20 minutes de sieste restaurent 2 à 3 heures de vigilance. Les stimulants (café, boissons énergisantes) ont un effet partiel et court (20-30 min), insuffisant en cas de dette de sommeil réelle. La règle pratique des transports professionnels : pause obligatoire toutes les 2 heures, repos quotidien d'au moins 11 heures consécutives. Pour un T3P, la planification doit intégrer ces contraintes : refuser une course de trop si la fatigue s'installe est une décision professionnelle, pas un échec commercial.",
        keyPoints: [
          "Fatigue = 1/3 des accidents mortels sur autoroute",
          "Creux de vigilance : 2h-5h et 13h-15h",
          "Pause 15-20 min toutes les 2h de conduite",
          "Micro-sieste 15-20 min = 2-3h de vigilance restaurée",
          "Café/musique/fenêtre ouverte : inefficaces sur dette de sommeil"
        ],
        practicalCases: [
          {
            situation: "Un VTC enchaîne 4h de courses de nuit (22h-2h) et sent ses paupières devenir lourdes en attendant une nouvelle course.",
            question: "Quelle est la meilleure décision professionnelle ?",
            answer: "Refuser la prochaine course, s'arrêter dans un endroit sûr et faire une micro-sieste de 15-20 minutes.",
            reasoning: "À 2h du matin, on entre dans le pic physiologique de risque, doublé d'une fatigue accumulée. Prendre une course supplémentaire = risque accidentogène majeur. Une micro-sieste restaure 2-3h de vigilance utile. Économiquement, c'est aussi rationnel : un accident = arrêt prolongé, franchise assurance, sinistre client. Le 'temps perdu' à dormir est un investissement sécurité."
          },
          {
            situation: "Sur un long trajet aller-retour Paris-Lyon, un chauffeur boit un café et baisse la fenêtre pour 'tenir'.",
            question: "Ces solutions sont-elles efficaces ?",
            answer: "Non : effet réel court (20-30 min) et insuffisant face à une vraie fatigue. Seul l'arrêt avec sommeil l'est.",
            reasoning: "Le café agit sur les récepteurs de l'adénosine et donne un coup de fouet bref, mais ne supprime pas la dette de sommeil sous-jacente. Le froid et la musique stimulent superficiellement mais n'inversent pas le déclin attentionnel. Le seul mécanisme biologique qui restaure la vigilance, c'est le sommeil — même bref. Insister à continuer = endormissement microscopique au volant (3-5 secondes de paupières fermées à 130 km/h = 200 m parcourus à l'aveugle)."
          }
        ],
        fieldExample: "Après une course Paris-Roissy à 4h du matin, le VTC se gare sur une aire et dort 20 min avant de reprendre.",
        examWarning: "Le café, la musique forte, l'air froid ne sont JAMAIS des solutions efficaces contre la fatigue — seul le sommeil l'est.",
        confusionPoints: [
          "Somnolence (alerte, encore réversible) ≠ Endormissement (sommeil involontaire, accident imminent)",
          "Stimulant (effet 20-30 min, partiel) ≠ Sommeil (effet durable, intégral)"
        ],
        tips: [
          "Mémo signes d'alerte : 'B-Y-P-L' = Bâillements, Yeux piquent, Paupières lourdes, Ligne franchie",
          "Planifier la pause AVANT d'avoir besoin (proactif, pas réactif)"
        ],
        legalRefs: ["Recommandations Sécurité Routière", "Article R412-6 (maîtrise du véhicule)"]
      },
      {
        id: 'sec-eco-conduite',
        title: 'Éco-conduite',
        essential: "Une conduite souple permet -15 à -25% de carburant ; elle améliore aussi la sécurité, la durée de vie du véhicule et le confort passager.",
        narrative: "L'éco-conduite n'est pas une posture militante : c'est un ensemble de techniques mesurables qui réduisent à la fois la consommation, l'usure mécanique et la fatigue du conducteur. Pour un T3P, c'est aussi un argument confort majeur : un passager perçoit immédiatement la différence entre un conducteur qui accélère et freine en permanence et un conducteur qui anticipe.\n\nLe principe central est l'anticipation : lever le pied dès qu'on voit un feu rouge à 200 m, plutôt que de continuer puis freiner sec. Cela permet d'arriver au feu au moment où il repasse au vert, évitant un arrêt complet (chaque redémarrage coûte cher en carburant). Le passage de vitesses est un autre levier : passer la vitesse supérieure tôt (vers 2000-2500 tr/min en essence, 1500-2000 en diesel) maintient le moteur dans sa plage de rendement optimal.\n\nLes équipements aussi comptent. La pression des pneus doit être vérifiée chaque mois : un sous-gonflage de 0,5 bar entraîne +3 à 4% de consommation et une usure prématurée. La climatisation augmente la consommation de 10 à 15% en ville et 4 à 5% sur autoroute — à modérer, sans pour autant compromettre le confort passager. Couper le moteur dès qu'un arrêt dépasse 20-30 secondes (feu rouge long, prise en charge) économise du carburant sans solliciter le démarreur. Enfin, alléger le véhicule (galerie de toit retirée, coffre vidé) gagne quelques pourcents supplémentaires. Le bilan global d'une conduite vraiment éco : -20% de carburant, -25% d'usure freins/pneus, retours clients plus positifs.",
        keyPoints: [
          "Anticipation : éviter les accélérations et freinages brusques",
          "Passage de vitesses : 2000-2500 tr/min essence, 1500-2000 diesel",
          "Pression pneus : vérifier mensuellement, +0,2 bar si chargé",
          "Climatisation : +10-15% conso en ville",
          "Arrêt > 20-30s : couper le moteur"
        ],
        practicalCases: [
          {
            situation: "Un VTC parcourt 200 km par jour, consommation moyenne 7 L/100. En adoptant une conduite plus souple, il passe à 5,8 L/100.",
            question: "Quelle économie annuelle réalise-t-il, à 1,80€/L sur 250 jours travaillés ?",
            answer: "Gain : 1,2 L/100 × 200 km × 250 j = 600 L/an × 1,80€ = 1 080€/an.",
            reasoning: "Le gain de 1,2 L/100 km correspond aux -17% typiques d'une vraie éco-conduite. À l'échelle annuelle, cela représente une part significative de la marge nette d'un VTC indépendant. Bonus non quantifié : usure pneus/freins réduite, moins d'entretien, image client plus haut de gamme. ROI immédiat."
          },
          {
            situation: "Une cliente reproche à son chauffeur d'avoir coupé le moteur à un feu rouge, craignant un démarreur en panne.",
            question: "Cette pratique est-elle recommandée et à partir de quel seuil ?",
            answer: "Oui : recommandée dès 20-30 secondes d'arrêt. Les démarreurs modernes (Stop & Start) sont conçus pour des milliers de cycles.",
            reasoning: "Un moteur au ralenti consomme 0,6-1 L/h : couper économise immédiatement. Les démarreurs depuis 2010 sont renforcés (technologie Stop & Start généralisée). Le pédagogique avec le client : expliquer brièvement 'je coupe pour limiter la pollution et l'usure', cela renforce l'image professionnelle. Seule exception : températures négatives ou batterie ancienne."
          }
        ],
        fieldExample: "Aux abords d'un feu, le VTC lève le pied 200 m avant : le feu repasse au vert, il franchit sans s'arrêter, économise carburant et freins.",
        examWarning: "Sous-gonflage = +3-4% de consommation ET usure prématurée des bords de pneus. Vérification mensuelle obligatoire.",
        confusionPoints: [
          "Régime optimal essence (2000-2500) ≠ diesel (1500-2000)",
          "Couper moteur arrêt long (utile) ≠ rouler en roue libre point mort (interdit, dangereux)"
        ],
        tips: [
          "Pneus : pression à froid + 0,2 bar quand le véhicule est chargé",
          "Coffre vide quand pas utile : -1 à 2% par tranche de 50 kg"
        ],
        legalRefs: ["Recommandations ADEME", "Article R413-17 (usage modéré)"]
      },
      {
        id: 'sec-equipements-securite',
        title: 'Équipements de sécurité obligatoires',
        essential: "Ceinture pour tous, gilet et triangle à bord — le conducteur est responsable du port de la ceinture par les passagers mineurs.",
        narrative: "L'équipement de sécurité ne se limite pas à un dispositif passif : c'est un système juridique de responsabilités. Le port de la ceinture est obligatoire pour tous les occupants depuis 1990 à l'arrière (déjà depuis 1973 à l'avant). Le non-port est sanctionné par 135€ et 3 points pour la personne fautive — sauf pour les mineurs, où c'est le conducteur qui est responsable et écope de l'amende. Pour un VTC ou un taxi transportant un enfant non attaché, c'est le chauffeur qui paie.\n\nLes enfants de moins de 10 ans doivent voyager dans un dispositif de retenue adapté à leur taille et leur poids (siège auto, rehausseur). Sous 9 mois, ils doivent être placés dos à la route. L'avant est interdit aux moins de 10 ans sauf exception (cabine dépourvue de banquette arrière, ou rehausseur conforme avec airbag désactivé). Pour un T3P, il est fortement recommandé de disposer d'au moins un rehausseur pour transporter des familles avec enfants.\n\nDeux équipements doivent être à bord en permanence : le gilet haute visibilité (à portée de main, pas dans le coffre) et le triangle de présignalisation. L'absence est sanctionnée 135€ chacun. Le gilet doit être enfilé AVANT de descendre du véhicule en cas de panne ou d'accident sur la chaussée, et le triangle placé à 30 m en amont (150-200 m sur voie rapide). L'éthylotest, longtemps obligatoire mais non sanctionné, n'est plus exigé depuis 2020. La trousse de premiers secours reste fortement recommandée pour un T3P, sans être légalement imposée.",
        keyPoints: [
          "Ceinture obligatoire pour tous les occupants (avant et arrière)",
          "Mineurs : responsabilité du conducteur (135€ + 3 points)",
          "Enfants < 10 ans : dispositif de retenue adapté",
          "Gilet haute visibilité : à portée de main (pas dans le coffre)",
          "Triangle : 30 m en amont, 150-200 m sur voie rapide"
        ],
        practicalCases: [
          {
            situation: "Un taxi transporte une mère et son fils de 8 ans. L'enfant est assis sur la banquette arrière sans rehausseur, ceinture standard.",
            question: "Qui est responsable et que risque le chauffeur ?",
            answer: "Le chauffeur : il est responsable du défaut de dispositif adapté (135€ + 3 points) car l'enfant a moins de 10 ans.",
            reasoning: "L'article R412-2 impose un dispositif de retenue adapté pour les enfants de moins de 10 ans. La ceinture standard ne convient pas (pas calibrée pour les épaules d'un enfant). Pour un taxi, il est conseillé d'avoir un rehausseur léger à bord ou de proposer un véhicule équipé. Si la cliente refuse, le chauffeur peut refuser la course pour motif légitime (sécurité)."
          },
          {
            situation: "Un VTC tombe en panne sur la bande d'arrêt d'urgence de l'autoroute. Il sort de son véhicule sans gilet pour aller chercher le triangle dans le coffre.",
            question: "Quelles fautes commet-il et quels risques ?",
            answer: "Deux fautes : sortie sans gilet (135€) et risque grave d'accident corporel (peu visible des autres conducteurs).",
            reasoning: "Le gilet DOIT être enfilé À L'INTÉRIEUR du véhicule avant de descendre. Sortir sans gilet sur autoroute, c'est s'exposer à être fauché par un véhicule arrivant à 130 km/h. C'est pour cette raison que le gilet doit être 'à portée de main' (boîte à gants, contre-porte), pas dans le coffre — qui se trouve à l'extérieur côté circulation. Bonne pratique : prévoir un gilet pour chaque passager."
          }
        ],
        fieldExample: "Avant chaque démarrage, le chauffeur jette un œil au rétroviseur pour vérifier que tous les passagers ont bouclé leur ceinture — pédagogique et préventif.",
        examWarning: "L'éthylotest n'est PLUS obligatoire depuis 2020 — piège classique d'un QCM périmé. Le gilet et le triangle, eux, le restent.",
        confusionPoints: [
          "Ceinture adultes (responsabilité individuelle) ≠ ceinture mineurs (responsabilité conducteur)",
          "Gilet À PORTÉE DE MAIN (boîte à gants) ≠ dans le coffre (inaccessible en sécurité)"
        ],
        tips: [
          "Stocker le gilet dans la contre-porte conducteur : visible et accessible",
          "Avoir un rehausseur pliable dans le coffre = avantage commercial"
        ],
        legalRefs: ["Article R412-1 (ceinture)", "Article R412-2 (enfants)", "Article R416-19 (gilet et triangle)"]
      },
      {
        id: 'sec-premiers-secours',
        title: 'Premiers secours (PAS)',
        essential: "Face à un accident, la séquence à respecter est PAS : Protéger, Alerter, Secourir — toujours dans cet ordre.",
        narrative: "La conduite à tenir face à un accident est codifiée par le protocole PAS, enseigné dans toutes les formations PSC1 (Prévention et Secours Civiques niveau 1). L'ordre n'est pas indicatif : il est impératif. Inverser les étapes peut transactionnellement aggraver la situation.\n\nProtéger, c'est éviter le sur-accident : se garer hors de la chaussée, allumer les feux de détresse, enfiler le gilet, sécuriser la zone avec le triangle (30 m, 150-200 m sur voie rapide), faire évacuer les passagers vers un endroit sûr (derrière la glissière). Ne JAMAIS s'occuper d'une victime avant d'avoir protégé la zone : un secouriste fauché par une voiture devient une victime supplémentaire.\n\nAlerter, c'est appeler les services d'urgence avec un message structuré : nature de l'accident (collision, choc piéton), localisation précise (autoroute + sens + PR si possible), nombre de victimes, état apparent (consciente/inconsciente, respire/ne respire pas). Numéros : 15 (SAMU) pour les blessés, 18 (pompiers) pour les incendies, 17 (police/gendarmerie) pour les questions de circulation, 112 (européen, fonctionne sans crédit ni SIM). Le 114 est dédié aux personnes sourdes/malentendantes (SMS).\n\nSecourir, c'est appliquer les gestes appris : ne pas déplacer une victime sauf danger immédiat (risque d'incendie, sur voie de circulation), couvrir contre le froid, parler pour rassurer, mettre en PLS (Position Latérale de Sécurité) une victime inconsciente qui respire pour éviter qu'elle s'étouffe avec sa langue ou ses vomissements. En cas d'arrêt cardio-respiratoire : massage cardiaque externe (100-120 compressions/min, 5-6 cm de profondeur) jusqu'à l'arrivée des secours ou d'un défibrillateur. La non-assistance à personne en péril est punie de 5 ans de prison et 75 000€ (art. 223-6 Code pénal).",
        keyPoints: [
          "P-A-S : Protéger, Alerter, Secourir (ordre impératif)",
          "Numéros : 15 SAMU, 17 Police, 18 Pompiers, 112 européen, 114 sourds",
          "Victime inconsciente qui respire → PLS",
          "Massage cardiaque : 100-120/min, 5-6 cm de profondeur",
          "Non-assistance : 5 ans de prison + 75 000€ (Code pénal)"
        ],
        practicalCases: [
          {
            situation: "Sur une route, un taxi arrive sur un accident : voiture dans le fossé, conducteur conscient mais coincé, fumée légère sous le capot.",
            question: "Quelle est la séquence d'actions correcte ?",
            answer: "1) Protéger : se garer, gilet, triangle, feux de détresse. 2) Alerter : 18 (pompiers, à cause du risque incendie + désincarcération). 3) Secourir : parler à la victime, NE PAS la déplacer (sauf si flammes), couvrir.",
            reasoning: "Le risque incendie justifie d'appeler les pompiers en priorité (18 ou 112). La désincarcération est leur compétence : un secouriste improvisé peut aggraver des lésions cervicales en tirant la victime. Tant que les flammes ne menacent pas directement, on ne déplace pas. Parler à la victime maintient sa conscience et calme l'angoisse. Documentation : noter heure, lieu pour le rapport."
          },
          {
            situation: "Un passager d'un VTC fait un malaise sur la banquette arrière, perd connaissance mais respire normalement.",
            question: "Quelle position adopter et pourquoi ?",
            answer: "Mise en Position Latérale de Sécurité (PLS) pour empêcher l'étouffement par la langue ou des vomissements.",
            reasoning: "Une victime inconsciente sur le dos risque que sa langue tombe en arrière et obstrue les voies aériennes, ou qu'elle inhale un vomi. La PLS (couché sur le côté, tête défléchie, jambe supérieure fléchie pour stabiliser) maintient les voies aériennes ouvertes. Étape suivante : appeler le 15 en restant à côté de la victime, surveiller la respiration, ne pas donner à boire ni à manger. Si arrêt respiratoire : démarrer le massage cardiaque."
          }
        ],
        fieldExample: "Témoin d'un accident, le chauffeur se gare 50 m après le lieu, enfile son gilet, allume les détresses, pose le triangle, puis appelle le 15.",
        examWarning: "P-A-S = ordre STRICT : Protéger AVANT d'alerter, AVANT de secourir. Inverser = aggravation possible.",
        confusionPoints: [
          "PLS (inconsciente qui RESPIRE) ≠ Massage cardiaque (inconsciente qui NE RESPIRE PAS)",
          "Non-assistance (5 ans + 75k€) ≠ aide maladroite (protégée par la loi Bon Samaritain de 2020)"
        ],
        tips: [
          "Formation PSC1 (7h, ~60€) : très fortement recommandée pour tout pro T3P",
          "Numéro européen 112 : fonctionne sans crédit, sans SIM, à l'étranger"
        ],
        legalRefs: ["Article 223-6 Code pénal (non-assistance)", "Loi du 3 juillet 2020 dite 'Bon Samaritain'"]
      },
      {
        id: 'sec-signalisation',
        title: 'Signalisation et priorités',
        essential: "Un piéton engagé ou manifestant l'intention de traverser a priorité absolue ; sur un rond-point, priorité aux véhicules déjà engagés.",
        narrative: "La hiérarchie des priorités routières répond à une logique de protection des plus vulnérables. Au sommet : le piéton. L'article R415-11 impose au conducteur de céder le passage à tout piéton engagé dans la chaussée, OU manifestant l'intention de s'engager. C'est une nuance majeure : on ne peut pas attendre qu'il pose le pied sur la chaussée pour s'arrêter. Le non-respect de la priorité piéton coûte 135€ et 6 points (passage de 4 à 6 points depuis 2018) — c'est la sanction la plus lourde après l'alcool.\n\nLes panneaux de priorité s'organisent par familles. Le STOP (AB4) impose un arrêt obligatoire à la ligne, même sans véhicule visible — 'marquer l'arrêt' est juridiquement caractérisé (roues immobilisées). Le 'Cédez le passage' (AB3a) impose de laisser passer mais sans arrêt obligatoire si la voie est dégagée. Aux intersections sans signalisation, c'est la priorité à droite qui s'applique (sauf 'route à caractère prioritaire' indiquée par panneau AB6 jaune losange).\n\nLe rond-point est une exception qui désarçonne : la signalisation 'cédez le passage' à l'entrée inverse la règle générale. La priorité va aux véhicules déjà engagés dans l'anneau, donc à GAUCHE pour le véhicule qui arrive. C'est une question piège fréquente. Pour les véhicules d'intérêt général (pompiers, SAMU, police) en intervention (gyrophare + sirène 2 tons), tout autre conducteur doit faciliter le passage : ralentir, se serrer à droite, voire monter sur le trottoir si nécessaire. Le tramway, par sa masse et son inertie, est toujours prioritaire sauf signalisation contraire — un tram à 50 km/h chargé met plus de 60 m à s'arrêter.",
        keyPoints: [
          "Piéton engagé OU manifestant l'intention : priorité absolue (135€ + 6 points)",
          "STOP : arrêt obligatoire à la ligne, roues immobilisées",
          "Sans signalisation : priorité à droite",
          "Rond-point : priorité aux véhicules engagés (donc à gauche)",
          "Véhicules d'intérêt général en intervention : faciliter passage"
        ],
        practicalCases: [
          {
            situation: "Un piéton se tient sur le trottoir, tête tournée vers la chaussée, prêt à traverser un passage protégé. Le VTC accélère pour passer avant lui.",
            question: "Cette conduite est-elle légale ?",
            answer: "Non : le piéton manifeste l'intention de traverser → priorité absolue. Le VTC commet un refus de priorité (135€ + 6 points).",
            reasoning: "L'article R415-11 ne fait pas attendre que le piéton soit déjà sur la chaussée. L'INTENTION manifestée suffit (regard, pas en avant). Pour un VTC, c'est aussi une question commerciale : le passager observe cette attitude. Bonne pratique : marquer l'arrêt très visiblement, faire signe au piéton, repartir une fois la traversée terminée."
          },
          {
            situation: "Un VTC arrive sur un rond-point. Un véhicule est déjà engagé dans l'anneau, un autre arrive sur sa droite.",
            question: "À qui doit-il céder le passage ?",
            answer: "Au véhicule déjà engagé dans l'anneau (situé à sa gauche). Le véhicule à droite n'a pas la priorité ici.",
            reasoning: "Le rond-point inverse la règle 'priorité à droite' par le panneau 'cédez le passage' à chaque entrée. La priorité va aux véhicules engagés, qui circulent en sens anti-horaire — donc venant de la gauche pour celui qui entre. Erreur classique : conserver la priorité à droite par réflexe et provoquer une collision dans l'anneau. À noter : on n'utilise PAS le clignotant gauche dans l'anneau, seulement le clignotant droit en sortie."
          }
        ],
        fieldExample: "À l'approche d'un passage piéton, le chauffeur lève le pied dès qu'il voit une personne se présenter, et s'arrête avant la bande blanche.",
        examWarning: "Rond-point = priorité à gauche (aux véhicules engagés), JAMAIS à droite. Question piège ultra-fréquente.",
        confusionPoints: [
          "STOP (arrêt obligatoire) ≠ Cédez le passage (ralentir, s'arrêter si nécessaire)",
          "Priorité à droite (intersection sans signalisation) ≠ Rond-point (priorité aux engagés = à gauche)"
        ],
        tips: [
          "Mémo rond-point : 'on cède à ceux qui tournent déjà'",
          "Sirène + gyrophare : se serrer à droite, jamais à gauche"
        ],
        legalRefs: ["Articles R411 à R422 Code de la route", "Article R415-11 (priorité piéton)"]
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
        essential: "Le T3P couvre toute activité de transport de personnes à titre onéreux, à la demande, avec un véhicule de moins de 10 places — taxi, VTC ou VMDTR.",
        narrative: "Le sigle T3P (Transport Public Particulier de Personnes) recouvre les trois activités encadrées par les articles L3120-1 et suivants du Code des transports : le taxi, le VTC et le VMDTR (deux-roues motorisé). Le critère commun, c'est le transport à la demande contre rémunération avec un véhicule de moins de 10 places, conducteur compris. Tout ce qui sort de ce périmètre — autocar, transport sanitaire, transport scolaire — relève d'un autre régime.\n\nLa loi Thévenoud du 1er octobre 2014 a posé le socle moderne en distinguant clairement taxi (monopole de la maraude et du stationnement sur voie publique) et VTC (réservation préalable obligatoire). La loi Grandguillaume du 29 décembre 2016 a refermé la brèche LOTI utilisée par certaines plateformes et créé un examen commun T3P avec tronc commun + spécialités.\n\nLe covoiturage (L3132-1) est hors champ : pas de bénéfice pour le conducteur, simple partage des frais réels. Dès que la rémunération dépasse les frais ou que le conducteur fait du trajet sa motivation économique, on bascule en T3P illégal — transport à titre onéreux sans titre = délit.",
        keyPoints: [
          "Trois activités : Taxi, VTC, VMDTR",
          "Véhicule < 10 places, transport à la demande, à titre onéreux",
          "Loi Thévenoud (2014) + Loi Grandguillaume (2016)",
          "Covoiturage = partage de frais, hors T3P",
          "Centrales de réservation également réglementées"
        ],
        practicalCases: [
          {
            situation: "Marc utilise sa voiture personnelle pour emmener des inconnus rencontrés sur une application, contre 25€ par trajet alors que ses frais réels sont de 8€.",
            question: "Cette activité relève-t-elle du covoiturage ou du T3P ?",
            answer: "Du T3P illégal : Marc tire un bénéfice du trajet, ce n'est plus du partage de frais.",
            reasoning: "Le covoiturage suppose que le conducteur ne tire aucun bénéfice (art. L3132-1). Dès que la rémunération excède la quote-part des frais (carburant, péage, usure), l'activité devient un transport à titre onéreux et nécessite une carte professionnelle T3P + véhicule habilité. Sans cela : 1 an de prison + 15 000€ d'amende."
          },
          {
            situation: "Une plateforme propose à Léa de transporter des colis et des passagers dans un même trajet, avec un véhicule 8 places.",
            question: "Le transport de colis seul peut-il être qualifié de T3P ?",
            answer: "Non : le T3P concerne exclusivement le transport de personnes. Le transport de marchandises relève d'un autre régime.",
            reasoning: "L'article L3120-1 vise le transport de personnes. Pour les colis, c'est le régime du transport routier de marchandises (capacité professionnelle distincte). Léa peut transporter des passagers en T3P ET déposer leurs bagages, mais pas faire du fret pur sous sa carte VTC."
          }
        ],
        fieldExample: "Un VTC qui prend un client réservé via une appli = T3P. Un voisin qui partage les frais d'essence pour aller au travail = covoiturage.",
        examWarning: "Le critère décisif n'est pas la plateforme utilisée mais la rémunération : bénéfice = T3P ; partage de frais = covoiturage.",
        confusionPoints: [
          "Covoiturage (partage de frais, hors T3P) ≠ VTC (bénéfice, T3P)",
          "T3P ≠ transport collectif (autocar > 9 places)"
        ],
        tips: [
          "Mémo : 3 lettres P → Public, Particulier, Personnes",
          "Si le conducteur gagne de l'argent → T3P obligatoire"
        ],
        legalRefs: ["Articles L3120-1 à L3124-13 Code des transports", "Loi Thévenoud n°2014-1104", "Loi Grandguillaume n°2016-1920"]
      },
      {
        id: 'reg-acces-profession',
        title: "Conditions d'accès à la profession",
        essential: "Quatre conditions cumulatives : permis B ≥ 3 ans, casier compatible, aptitude médicale, réussite de l'examen T3P.",
        narrative: "Devenir conducteur T3P n'est pas une simple démarche administrative : la loi a structuré un véritable filtre d'entrée. La première condition est l'ancienneté du permis B : 3 ans minimum, ramenés à 2 ans pour ceux qui ont suivi la conduite accompagnée (AAC). Cette ancienneté garantit une expérience de conduite réelle avant de transporter du public.\n\nVient ensuite l'honorabilité professionnelle : le bulletin n°2 du casier judiciaire ne doit pas comporter de condamnation incompatible (vol, agression, conduite sous stupéfiants, délit routier grave). La préfecture vérifie ce casier à l'entrée et tous les ans pendant l'exercice : une condamnation postérieure peut entraîner le retrait de la carte.\n\nL'aptitude physique est attestée par un médecin agréé par la préfecture, lors d'une visite valable 5 ans (3 ans après 60 ans). Le formulaire Cerfa 14880 examine vue, audition, neurologie, addictions. Enfin, le candidat doit réussir l'examen T3P organisé par les CMA : épreuves d'admissibilité (tronc commun écrit) + admission (réglementation spécifique + conduite). C'est cette réussite qui ouvre la délivrance de la carte professionnelle par la préfecture.",
        keyPoints: [
          "Permis B ≥ 3 ans (2 ans si conduite accompagnée)",
          "Casier judiciaire B2 compatible, vérifié chaque année",
          "Visite médicale médecin agréé : 5 ans (3 ans après 60 ans)",
          "Examen T3P organisé par les Chambres des Métiers (CMA)",
          "Conditions cumulatives : l'absence d'une seule = refus"
        ],
        practicalCases: [
          {
            situation: "Yanis a obtenu son permis B il y a 22 mois en conduite accompagnée. Il veut s'inscrire à l'examen VTC.",
            question: "Peut-il s'inscrire dès maintenant ?",
            answer: "Non. La conduite accompagnée ramène le délai à 2 ans, mais Yanis n'a que 22 mois — il doit attendre 2 mois supplémentaires.",
            reasoning: "L'article R3120-7 fixe 3 ans de permis B, ramenés à 2 ans (24 mois) pour les titulaires de l'AAC. Le calcul se fait à la date de candidature à l'examen, pas à celle de la carte. Erreur classique : confondre 'conduite accompagnée' avec une dispense totale."
          },
          {
            situation: "Aïcha a 62 ans et passe sa visite médicale T3P. Le médecin lui délivre un certificat d'aptitude.",
            question: "Pour combien de temps cette aptitude est-elle valable ?",
            answer: "3 ans, car elle a plus de 60 ans.",
            reasoning: "L'aptitude médicale T3P est valable 5 ans pour les moins de 60 ans, mais ramenée à 3 ans à partir de 60 ans (puis 2 ans à partir de 76 ans pour certaines pathologies). Cette progressivité reflète la dégradation possible des aptitudes (vue, réflexes). À ne pas confondre avec la formation continue (14h / 5 ans), totalement indépendante."
          }
        ],
        fieldExample: "Un candidat de 24 ans, permis depuis 4 ans, sans antécédent judiciaire, apte médicalement : il peut se présenter à l'examen.",
        examWarning: "Les quatre conditions sont cumulatives ET continues : la perte de l'une d'elles (condamnation, inaptitude) entraîne le retrait de la carte, pas seulement le refus à l'entrée.",
        tips: [
          "Mémo PAME : Permis, Aptitude, Moralité, Examen",
          "Visite médicale = formulaire Cerfa 14880"
        ],
        legalRefs: ["Articles L3120-2-1 et R3120-7 Code des transports", "Arrêté du 6 avril 2017"]
      },
      {
        id: 'reg-carte-professionnelle',
        title: 'Carte professionnelle T3P',
        essential: "La carte pro est délivrée par le préfet, valable 5 ans, et son renouvellement est conditionné à 14h de formation continue suivies sur la période.",
        narrative: "La carte professionnelle T3P est le sésame qui matérialise l'autorisation d'exercer. Elle est délivrée par le préfet du département de résidence du conducteur, après vérification des conditions d'accès et réussite de l'examen. Elle mentionne expressément l'activité autorisée : Taxi, VTC ou VMDTR — un conducteur qui veut exercer plusieurs activités doit détenir plusieurs cartes.\n\nSa validité est de 5 ans. Le renouvellement n'est pas automatique : le conducteur doit en faire la demande au plus tard 2 mois avant l'expiration, en joignant la preuve d'une formation continue d'au moins 14 heures suivie auprès d'un organisme agréé. Cette formation porte sur les évolutions réglementaires, la sécurité, la gestion et la relation client. Elle peut être suivie en une fois ou répartie sur les 5 ans.\n\nPendant le service, la carte doit rester visible et accessible : apposée sur le pare-brise pour le taxi (avec le numéro d'ADS) ou présentée à la première demande des forces de l'ordre pour le VTC et le VMDTR. Exercer avec une carte expirée, suspendue ou sans carte = délit puni d'1 an de prison et 15 000€ d'amende (L3124-4). En cas de suspension judiciaire du permis B, la carte est suspendue de plein droit.",
        keyPoints: [
          "Délivrée par le préfet du département de résidence",
          "Mention obligatoire : Taxi, VTC ou VMDTR",
          "Validité 5 ans, renouvellement à demander 2 mois avant",
          "Formation continue 14h obligatoire sur les 5 ans",
          "Visible/accessible dans le véhicule en service"
        ],
        practicalCases: [
          {
            situation: "Karim est conducteur VTC depuis 4 ans et 10 mois. Il oublie totalement la formation continue et ne fait sa demande de renouvellement que le jour de l'expiration.",
            question: "Quelles sont les conséquences pour son activité ?",
            answer: "Sa carte n'est pas renouvelée : il doit cesser immédiatement son activité et suivre la formation 14h avant de pouvoir redemander une carte.",
            reasoning: "Le renouvellement exige deux conditions : demande déposée au moins 2 mois avant + attestation de formation continue. À défaut, la carte expire et tout trajet effectué après devient un exercice sans carte (1 an + 15 000€). Karim doit suspendre son activité, rattraper sa formation puis déposer une nouvelle demande complète — la préfecture peut exiger une nouvelle visite médicale si l'interruption est longue."
          },
          {
            situation: "Lors d'un contrôle, un VTC présente sa carte rangée dans le coffre, dans une pochette plastique.",
            question: "Est-il en conformité avec ses obligations ?",
            answer: "Non. La carte doit être accessible immédiatement, pas dans le coffre.",
            reasoning: "Pour le VTC, la carte n'est pas affichée comme chez le taxi, mais elle doit pouvoir être présentée sans délai aux agents lors d'un contrôle. La ranger dans le coffre ou la laisser à domicile équivaut à un défaut de présentation, sanctionné par une amende et une mention au dossier préfectoral. Bonne pratique : à portée de main dans la console centrale ou le porte-document conducteur."
          }
        ],
        fieldExample: "Un taxi parisien renouvelle sa carte 3 mois avant expiration en joignant son attestation de stage 'Mobilians Formation' de 14h.",
        examWarning: "Formation continue = 14h sur 5 ans, pas 14h par an. Mais elle est obligatoire pour renouveler — pas d'attestation = pas de carte.",
        confusionPoints: [
          "Carte pro T3P (préfecture, conducteur) ≠ ADS / autorisation VTC (entreprise, mairie/registre)",
          "Visite médicale (5 ans) ≠ Formation continue (14h / 5 ans)"
        ],
        tips: [
          "Programmer un rappel calendaire à 6 mois avant expiration",
          "Garder la carte dans la console centrale, jamais dans le coffre"
        ],
        legalRefs: ["Articles R3120-7 et L3124-4 Code des transports", "Arrêté du 11 août 2017 (formation continue)"]
      },
      {
        id: 'reg-examen-t3p',
        title: 'Examen T3P',
        essential: "L'examen T3P comporte une admissibilité (tronc commun écrit) puis une admission (réglementation spécifique + conduite) — la réussite est exigée pour obtenir la carte.",
        narrative: "Depuis l'arrêté du 6 avril 2017, l'examen T3P est unifié pour les trois activités, avec un tronc commun et des spécialités. Il est organisé par les Chambres de Métiers et de l'Artisanat (CMA) sous le contrôle de la préfecture. La candidature se dépose en ligne sur le site de la CMA territorialement compétente, accompagnée des pièces justifiant les conditions d'accès (permis, casier, médical).\n\nL'épreuve d'admissibilité est commune aux trois activités. Elle se compose de QCM portant sur : réglementation T3P, gestion d'entreprise, sécurité routière, capacité d'expression française et compréhension de l'anglais (niveau A2). C'est un filtre national : sans admissibilité, pas d'accès à l'admission.\n\nL'épreuve d'admission est spécifique à l'activité visée. Pour le taxi : réglementation locale + connaissance du territoire (topographie du département) + conduite. Pour le VTC : développement commercial + conduite. Pour le VMDTR : sécurité spécifique deux-roues + conduite. Chaque épreuve a sa propre note éliminatoire ; la moyenne générale ne suffit pas à compenser une note trop faible dans une matière clé. En cas d'échec, le candidat peut se représenter, généralement après un délai d'au moins 1 mois selon les sessions de la CMA.",
        keyPoints: [
          "Organisation : Chambres des Métiers et de l'Artisanat (CMA)",
          "Admissibilité : tronc commun écrit (QCM) pour les 3 activités",
          "Admission : épreuves spécifiques + conduite",
          "Notes éliminatoires par épreuve, pas seulement moyenne",
          "Échec : représentation possible aux sessions suivantes"
        ],
        practicalCases: [
          {
            situation: "Sophie obtient 13/20 de moyenne à l'admissibilité, mais 6/20 en réglementation T3P.",
            question: "Est-elle admise à passer l'épreuve d'admission ?",
            answer: "Non : la note éliminatoire en réglementation lui ferme l'accès à l'admission, malgré une moyenne correcte.",
            reasoning: "L'examen T3P fonctionne avec des notes plancher par épreuve pour éviter qu'un candidat ignore totalement une matière essentielle. Une moyenne générale satisfaisante ne rachète pas une note inférieure au seuil dans une épreuve clé. Sophie doit se réinscrire et repasser au minimum l'épreuve éliminatoire à la prochaine session."
          },
          {
            situation: "Hugo réussit l'admissibilité en visant le VTC. Quelques mois plus tard, il veut aussi exercer comme taxi.",
            question: "Doit-il repasser tout l'examen ?",
            answer: "Non : son admissibilité (tronc commun) reste acquise. Il ne repasse que l'épreuve d'admission spécifique taxi.",
            reasoning: "Le tronc commun étant unifié pour les trois activités, sa validité est reconnue pour un changement de spécialité dans le délai prévu par la CMA. Hugo passe l'admission taxi (réglementation locale + topographie + conduite) sans refaire la partie écrite commune. C'est tout l'intérêt de l'unification de 2017."
          }
        ],
        fieldExample: "Un candidat taxi enchaîne : QCM admissibilité (matin), puis quelques semaines plus tard, épreuve de topographie Paris + conduite.",
        examWarning: "Les certificats de formation initiale obtenus dans certains centres agréés peuvent dispenser de l'examen (équivalences) — vérifier auprès de la CMA.",
        tips: [
          "Tronc commun = 5 matières : Régl., Gestion, Sécurité, Français, Anglais",
          "S'inscrire à la CMA du département où l'on souhaite exercer"
        ],
        legalRefs: ["Arrêté du 6 avril 2017 relatif à l'examen T3P", "Articles R3120-9 à R3120-13 Code des transports"]
      },
      {
        id: 'reg-obligations-communes',
        title: 'Obligations professionnelles communes',
        essential: "Assurance RC pro, information préalable du prix, non-discrimination et transport gratuit des chiens guides s'imposent à toutes les activités T3P.",
        narrative: "Quel que soit le statut (taxi, VTC, VMDTR), le conducteur T3P est tenu à un socle d'obligations issu des articles L3120-4 à L3120-6 du Code des transports. L'assurance responsabilité civile professionnelle est la première : elle couvre les dommages causés aux passagers et aux tiers pendant l'exercice. Sans elle, le conducteur engage son patrimoine personnel et s'expose à 3 750€ d'amende + suspension de permis.\n\nL'information préalable du client sur le prix (ou son mode de calcul) est une obligation de transparence. Le taxi affiche ses tarifs et utilise le taximètre ; le VTC communique un prix forfaitaire ou un mode de calcul (km + temps) avant la prise en charge ; le VMDTR doit annoncer la course. Toute facturation surprise est sanctionnée par la DGCCRF.\n\nLa non-discrimination est absolue : refuser un client en raison de son origine, de son apparence, de son handicap, de son orientation sexuelle ou de toute autre caractéristique protégée constitue un délit (45 000€ + 3 ans, art. 225-1 du Code pénal). En revanche, le refus pour motif légitime (sécurité, fin de service, animal autre que chien guide, état d'ébriété manifeste) reste possible — il doit pouvoir être justifié objectivement.\n\nLe transport des chiens guides d'aveugle et chiens d'assistance est obligatoire et gratuit (loi du 11 février 2005). Aucune surcharge, aucun refus possible, même pour un VTC haut de gamme.",
        keyPoints: [
          "Assurance RC professionnelle obligatoire et permanente",
          "Information préalable sur le prix ou son mode de calcul",
          "Non-discrimination : 45 000€ + 3 ans (Code pénal)",
          "Chiens guides et d'assistance : transport gratuit obligatoire",
          "Tenue correcte, véhicule propre, courtoisie : obligations implicites"
        ],
        practicalCases: [
          {
            situation: "Un VTC refuse une cliente non-voyante accompagnée de son chien guide, au motif que les sièges en cuir de son véhicule sont neufs.",
            question: "Ce refus est-il légalement justifié ?",
            answer: "Non : c'est un refus discriminatoire doublement sanctionné (discrimination + refus chien guide).",
            reasoning: "La loi du 11 février 2005 impose le transport gratuit des chiens guides sans exception. Le motif tiré de l'état du véhicule n'est pas légitime. Le conducteur s'expose à 45 000€ d'amende et 3 ans (Code pénal art. 225-1), assortis d'un signalement à la préfecture pouvant entraîner la suspension de la carte. Solution professionnelle : couverture de protection sur le siège, jamais refus."
          },
          {
            situation: "Un taxi prend un client à 2h du matin. Il est manifestement très alcoolisé, agressif verbalement et menace le chauffeur.",
            question: "Le chauffeur peut-il refuser la course ?",
            answer: "Oui : c'est un motif légitime tenant à la sécurité.",
            reasoning: "Le refus pour motif légitime reste possible : sécurité du conducteur, fin de service annoncée, demande illégale (transport de stupéfiants). L'état d'ébriété manifeste avec agressivité menace directement la sécurité de la course. Le conducteur doit pouvoir documenter le motif (témoins, mention au cahier de bord). La discrimination interdite vise les caractéristiques de la personne, pas son comportement objectif."
          }
        ],
        fieldExample: "Une VTC charge une cliente en fauteuil roulant, embarque le fauteuil dans le coffre et facture le prix normal sans surcoût.",
        examWarning: "Le refus 'sécurité' ou 'fin de service' doit être réel et justifiable — l'invoquer abusivement est requalifié en refus discriminatoire.",
        confusionPoints: [
          "Chien guide (gratuit, obligatoire) ≠ animal de compagnie (refus possible)",
          "Refus discriminatoire (caractéristique personne, interdit) ≠ refus légitime (comportement/sécurité, possible)"
        ],
        tips: [
          "Garder une couverture de protection siège pour les chiens guides",
          "Annoncer le prix avant le démarrage = preuve d'information"
        ],
        legalRefs: ["Articles L3120-4 à L3120-6 Code des transports", "Article 225-1 Code pénal", "Loi n°2005-102 du 11 février 2005"]
      },
      {
        id: 'reg-vehicule-conditions',
        title: 'Conditions du véhicule',
        essential: "Véhicule de 4 à 9 places, max 6 ans (7 ans si hybride/électrique), contrôle technique annuel professionnel.",
        narrative: "Le véhicule T3P est soumis à des conditions strictes qui s'ajoutent à la réglementation routière classique. Côté capacité, il doit comporter entre 4 et 9 places assises, conducteur compris — au-delà, on bascule en transport collectif (autocar). En deçà, le véhicule n'offre pas la sécurité minimale exigée pour un transport rémunéré.\n\nL'âge du véhicule est plafonné à 6 ans depuis sa première mise en circulation, porté à 7 ans pour les véhicules hybrides ou électriques (décret n°2017-483). Cette exception incitative reconnaît à la fois la durabilité technique de ces motorisations et leur intérêt environnemental. Un véhicule électrique mis en circulation en 2019 peut donc encore rouler en VTC en 2026.\n\nLe VTC doit en plus respecter des critères de standing : puissance moteur ≥ 84 kW (114 ch) OU longueur ≥ 4,50 m, pour garantir le confort et différencier l'offre du taxi. Le contrôle technique est annuel (au lieu de bisannuel pour un particulier) et plus exigeant — il vérifie aussi les équipements obligatoires : ceintures fonctionnelles à toutes les places, signalétique pour le taxi (lumineux, plaque, compteur scellé). Tout défaut majeur entraîne l'immobilisation immédiate.",
        keyPoints: [
          "Capacité : 4 à 9 places conducteur compris",
          "Âge max : 6 ans, 7 ans pour hybride/électrique",
          "Contrôle technique annuel (renforcé pour usage pro)",
          "VTC : puissance ≥ 84 kW OU longueur ≥ 4,50 m",
          "Équipements obligatoires conformes (ceintures, signalétique taxi)"
        ],
        practicalCases: [
          {
            situation: "Antoine veut acheter un véhicule pour son activité VTC. Il hésite entre une Peugeot 308 thermique de 2019 et une Tesla Model 3 de 2019.",
            question: "Lequel pourra-t-il exploiter le plus longtemps en 2026 ?",
            answer: "La Tesla : électrique → 7 ans maximum, donc encore exploitable jusqu'en 2026. La Peugeot thermique de 2019 a déjà dépassé les 6 ans.",
            reasoning: "Le décret n°2017-483 distingue motorisation thermique (6 ans) et hybride/électrique (7 ans). Pour 2026 : véhicules thermiques de 2020 ou plus récents, hybrides/électriques de 2019 ou plus récents. Antoine choisira la Tesla, sachant qu'il devra la remplacer dès 2027 (8 ans). Bonus : critères de standing VTC respectés (puissance > 84 kW)."
          },
          {
            situation: "Une VTC roule avec une voiture de 4,40 m et 80 kW de puissance.",
            question: "Le véhicule est-il conforme aux exigences VTC ?",
            answer: "Non : ni la puissance (< 84 kW) ni la longueur (< 4,50 m) ne respectent les critères VTC.",
            reasoning: "Le décret VTC impose une condition alternative (puissance ≥ 84 kW OU longueur ≥ 4,50 m). Il suffit qu'une seule soit respectée. Ici, les deux échouent : le véhicule ne peut pas être inscrit au registre VTC. La conductrice doit changer de véhicule pour continuer son activité. À noter : ces critères ne s'appliquent pas au taxi, qui suit d'autres règles locales."
          }
        ],
        fieldExample: "Une Tesla Model 3 électrique de 2019 reste exploitable en VTC en 2026 (7 ans). Une Peugeot 308 thermique de 2019 ne l'est plus (limite 6 ans dépassée).",
        examWarning: "L'exception hybride/électrique ne s'applique qu'à l'âge du véhicule, pas aux critères de puissance/longueur VTC.",
        confusionPoints: [
          "Âge 6 ans (thermique) ≠ 7 ans (hybride/électrique)",
          "Critères VTC (standing, alternatifs) ≠ critères taxi (équipements signalétiques)"
        ],
        tips: [
          "Mémo : électrique/hybride = +1 an de plus",
          "Critères VTC = puissance OU longueur (un seul suffit)"
        ],
        legalRefs: ["Décret n°2017-483 du 6 avril 2017", "Articles R3122-4 et R3122-5 Code des transports"]
      },
      {
        id: 'reg-sanctions',
        title: 'Sanctions et contrôles',
        essential: "Exercer sans carte pro ou en violation des règles de maraude expose à 1 an de prison et 15 000€ d'amende — la discrimination monte à 45 000€ et 3 ans.",
        narrative: "Le législateur a aligné le régime des sanctions T3P sur le caractère professionnel de l'activité : les peines mêlent volet pénal (prison + amende), administratif (suspension/retrait de carte) et civil (réparation des préjudices). Exercer une activité de T3P sans carte professionnelle constitue un délit puni d'1 an de prison et 15 000€ d'amende (art. L3124-4). C'est la sanction de référence, reprise pour la plupart des infractions structurelles.\n\nLa maraude illégale d'un VTC — c'est-à-dire le fait de stationner ou de circuler sur la voie publique en quête de client sans réservation préalable — encourt la même peine. C'est l'une des grandes lignes rouges issues de la loi Thévenoud : le monopole de la maraude reste réservé aux taxis détenteurs d'une ADS. Le VTC doit pouvoir prouver, à tout contrôle, l'antériorité de la réservation (justificatif horodaté).\n\nLe défaut d'assurance RC pro est sanctionné de 3 750€ d'amende et suspension de permis (art. L324-2 Code de la route). La discrimination, déjà évoquée, monte à 45 000€ + 3 ans. À côté du volet pénal, la préfecture peut suspendre la carte (1 à 6 mois) ou la retirer définitivement après procédure contradictoire. Lors d'un contrôle (police, gendarmerie, DGCCRF, agents assermentés), le conducteur doit présenter immédiatement : carte pro, carte grise, attestation d'assurance, justificatif de réservation (VTC), feuille de route et taximètre conforme (taxi).",
        keyPoints: [
          "Exercice sans carte : 1 an de prison + 15 000€ d'amende",
          "Maraude VTC : même sanction (1 an + 15 000€)",
          "Défaut assurance : 3 750€ + suspension permis",
          "Refus discriminatoire : 45 000€ + 3 ans (Code pénal)",
          "Sanctions administratives cumulables : suspension/retrait carte préfecture"
        ],
        practicalCases: [
          {
            situation: "Un VTC stationne à proximité d'une gare en soirée, sans réservation, espérant des clients. Il est contrôlé par la police.",
            question: "Quels sont les risques encourus ?",
            answer: "Maraude illégale : 1 an de prison + 15 000€ d'amende, plus suspension administrative de la carte par la préfecture.",
            reasoning: "Le VTC n'a pas le droit de prospecter sur la voie publique : il doit attendre ses clients ailleurs (parking dédié, retour à domicile) et démarrer chaque course à partir d'une réservation préalable (justifiable par horodatage). Le simple fait d'être stationné en attente devant une gare suffit à caractériser la maraude. Bonne pratique : utiliser les zones officielles 'VTC' quand elles existent et toujours conserver les preuves de réservation."
          },
          {
            situation: "Lors d'un contrôle routier, un conducteur taxi présente sa carte pro mais oublie son attestation d'assurance.",
            question: "Quelles sont les conséquences immédiates ?",
            answer: "Présomption de défaut d'assurance, immobilisation possible du véhicule, amende forfaitaire et obligation de présenter le document sous délai.",
            reasoning: "Le défaut de présentation de l'assurance est sanctionné même si l'assurance existe réellement (art. R211-21-5 Code des assurances) : amende forfaitaire 35€ régularisable en présentant le document sous 5 jours à un commissariat. Si l'assurance n'existe vraiment pas : 3 750€ + suspension de permis. Réflexe : conserver une attestation à jour dans la pochette véhicule + version numérique sur smartphone."
          }
        ],
        fieldExample: "Un VTC en attente devant Gare de Lyon sans réservation : 1 an de prison + 15 000€ + signalement préfecture = potentielle suspension de carte.",
        examWarning: "La maraude est définie par le COMPORTEMENT (attente client sur voie publique), pas seulement par la prise en charge — même sans client à bord, on peut être verbalisé.",
        confusionPoints: [
          "Taxi : maraude autorisée (avec ADS) ≠ VTC : réservation préalable obligatoire",
          "Sanctions pénales (juge) ≠ sanctions administratives préfecture (suspension/retrait carte)"
        ],
        tips: [
          "Toujours conserver le justificatif de réservation horodaté (VTC)",
          "Documents à présenter : carte pro, CG, assurance, KBis/extrait, justif réservation"
        ],
        legalRefs: ["Articles L3124-1 à L3124-13 Code des transports", "Article 225-1 Code pénal", "Article L324-2 Code de la route"]
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
        narrative: "La communication orale dans le T3P n'est pas un simple échange de politesses : c'est l'outil principal de construction de la relation commerciale. Le client juge le professionnalisme du conducteur dès les premières secondes — voix, débit, choix des mots. Le vouvoiement est la règle absolue, quel que soit l'âge du client : il marque le respect et la distance professionnelle.\n\nL'écoute active est tout aussi cruciale. Il ne s'agit pas seulement d'entendre, mais de montrer qu'on a compris. Trois techniques : laisser le client finir sa phrase (jamais interrompre), reformuler pour vérifier (« Si je comprends bien, vous souhaitez… »), confirmer l'engagement (« C'est noté, nous partons donc vers… »). Cette boucle évite 80 % des malentendus sur la destination ou les arrêts.\n\nLe ton compte autant que les mots. Un débit calme rassure un client stressé (avion à prendre, rendez-vous médical). À l'inverse, un débit haché ou un ton agressif déclenche immédiatement une plainte potentielle. Enfin, le jargon technique (« on va prendre la N118 puis l'A86 ») doit être traduit en repères concrets (« on passe par l'ouest, environ 35 minutes »).",
        keyPoints: [
          "Formules : Bonjour, S'il vous plaît, Merci, Je vous en prie",
          "Écoute active : laisser parler, reformuler, confirmer",
          "Éviter le jargon technique avec les clients",
          "Annoncer : prix, durée estimée, itinéraire"
        ],
        fieldExample: "Le chauffeur reformule : 'Si je comprends bien, vous souhaitez passer par les quais ?'",
        practicalCases: [
          {
            situation: "Un client monte et lance « Salut, on va à Roissy ». Le chauffeur a 25 ans, le client environ 40.",
            question: "Comment le conducteur doit-il répondre ?",
            answer: "« Bonjour Monsieur, je vous emmène à l'aéroport Charles-de-Gaulle. Quel terminal souhaitez-vous ? »",
            reasoning: "Même si le client tutoie, le conducteur doit maintenir le vouvoiement (règle pro), saluer formellement, et confirmer la destination en précisant (terminal CDG). C'est à la fois du respect commercial et une sécurité (éviter de se tromper de terminal sur les 7 que compte CDG)."
          },
          {
            situation: "Un client visiblement stressé monte en disant : « Je vais rater mon train à Gare de Lyon, faites vite ! »",
            question: "Quelle est la bonne attitude verbale ?",
            answer: "Reformuler avec calme : « Compris, Gare de Lyon le plus vite possible. Je vais prendre l'itinéraire le plus rapide compte tenu du trafic, nous y serons dans environ 20 minutes. »",
            reasoning: "On NE PROMET PAS une heure d'arrivée précise (sinon engagement de résultat). On reformule (le client se sent entendu), on annonce l'itinéraire choisi (transparence), on donne une estimation (« environ »). Le ton calme désamorce le stress sans nier l'urgence."
          }
        ],
        examWarning: "Le tutoiement = faute professionnelle avec les clients.",
        tips: [
          "Premier contact = première impression : soigner l'accueil",
          "Reformuler avant de démarrer évite les erreurs d'adresse"
        ],
        legalRefs: []
      },
      {
        id: 'fra-communication-ecrite',
        title: 'Communication écrite',
        essential: "Facture = mentions obligatoires (nom, SIRET, date, montant HT/TTC).",
        narrative: "L'écrit engage le conducteur bien plus que l'oral. Une facture mal rédigée peut être rejetée fiscalement, un courriel maladroit peut coûter un contrat B2B, un SMS ambigu peut générer un litige client. Le T3P doit donc maîtriser quelques règles simples mais non négociables.\n\nLa facture est l'écrit le plus encadré. Le Code de commerce (article L441-9) impose : identité du prestataire (nom, adresse, SIRET, n° TVA si assujetti), identité du client, date d'émission, numéro de facture unique et chronologique, désignation de la prestation, prix HT, taux et montant de TVA (10 % pour le transport de voyageurs), prix TTC. Pour un VTC, ajouter le numéro d'inscription au registre VTC. L'absence d'une seule de ces mentions rend la facture irrégulière et peut entraîner un redressement.\n\nLe courriel professionnel répond à une logique simple : objet clair (« Confirmation course du 12/06 — 14h CDG »), formule d'appel (Bonjour Madame X), corps structuré (1 idée par paragraphe), formule de politesse (« Cordialement »), signature complète (nom, fonction, téléphone, SIRET). On évite les majuscules (perçues comme un cri) et les multiples points d'exclamation (perçus comme amateur).",
        keyPoints: [
          "Facture : toutes mentions légales obligatoires",
          "Courriel pro : objet clair, formule d'appel, signature",
          "Orthographe : relire avant envoi",
          "Conserver copies des échanges importants (10 ans pour les factures)"
        ],
        fieldExample: "Le VTC envoie sa facture avec nom, SIRET, n° d'inscription registre VTC, date, montant HT, TVA 10 % et TTC.",
        practicalCases: [
          {
            situation: "Un client professionnel demande une facture pour une course de 80 € TTC effectuée hier. Le conducteur lui envoie un SMS : « Course 80 euros, merci ».",
            question: "Le client peut-il utiliser ce SMS comme facture pour sa comptabilité ?",
            answer: "Non. Ce n'est pas une facture conforme et le client ne pourra pas la déduire.",
            reasoning: "Il manque toutes les mentions obligatoires : identité complète du prestataire (SIRET, adresse), numéro de facture, date précise, ventilation HT/TVA/TTC, désignation de la prestation. Le conducteur doit émettre une vraie facture (PDF ou papier) avec un numéro chronologique unique."
          },
          {
            situation: "Une entreprise demande au conducteur de modifier la date d'une facture pour qu'elle tombe sur l'exercice comptable précédent.",
            question: "Que doit faire le conducteur ?",
            answer: "Refuser. Une facture antidatée constitue un faux en écriture et un délit fiscal.",
            reasoning: "Modifier la date d'une facture engage la responsabilité pénale du conducteur (faux et usage de faux, article 441-1 du Code pénal) et fiscale (fraude fiscale). La bonne pratique : émettre la facture à la date réelle de la prestation. Si erreur, faire un avoir et une nouvelle facture, jamais raturer."
          }
        ],
        examWarning: "Une facture sans mentions obligatoires est irrégulière fiscalement (amende jusqu'à 15 € par mention manquante, plafonnée).",
        tips: [
          "Éviter les majuscules (= crier) et les !!! multiples",
          "Numéroter les factures de façon strictement chronologique et continue"
        ],
        legalRefs: ["Article L441-9 du Code de commerce", "Article 289 du CGI"]
      },
      {
        id: 'fra-comprehension-textes',
        title: 'Compréhension de textes',
        essential: "Textes réglementaires : lire chaque mot. Les nuances juridiques comptent.",
        narrative: "Le conducteur T3P signe régulièrement des documents qui l'engagent juridiquement : contrats de partenariat avec une plateforme, contrats de location de véhicule, contrats d'assurance, conditions générales des centrales de réservation. Une lecture trop rapide peut transformer une opportunité en piège financier durable.\n\nLa première règle est de distinguer le vocabulaire juridique des mots du quotidien. « Stipuler » ne veut pas dire « préciser » mais « inscrire dans un contrat » (seul un contrat stipule, une loi dispose). « Abroger » signifie supprimer définitivement (pas suspendre). « En vigueur » signifie applicable actuellement. « Sous réserve de » introduit une condition suspensive. « Nonobstant » signifie « malgré ». Ces nuances changent radicalement la portée d'une clause.\n\nLa deuxième règle est de toujours chercher les clauses « pièges » : durée d'engagement, clause de tacite reconduction, délais et modalités de résiliation, pénalités, clause de non-concurrence, juridiction compétente en cas de litige. Une clause de tacite reconduction d'un an avec préavis de trois mois enferme le conducteur s'il rate la fenêtre. Avant de signer, il faut toujours lire l'intégralité, surligner ce qui est flou, et ne pas hésiter à demander un délai de réflexion ou un conseil professionnel.",
        keyPoints: [
          "Identifier : sujet, mots-clés, structure",
          "Vocabulaire juridique : stipuler, abroger, en vigueur, nonobstant",
          "Contrat : vérifier obligations, durée, résiliation, pénalités",
          "Ne jamais signer sans avoir tout lu"
        ],
        fieldExample: "Le contrat dit 'résiliable avec préavis de 3 mois' : le chauffeur note cette échéance dans son agenda.",
        practicalCases: [
          {
            situation: "Un conducteur signe un contrat avec une plateforme de réservation. L'article 7 stipule : « Le présent contrat est conclu pour une durée d'un an, renouvelable tacitement par périodes annuelles, sauf dénonciation par lettre recommandée avec accusé de réception au moins 90 jours avant l'échéance. »",
            question: "Si le conducteur veut quitter la plateforme au bout d'un an, jusqu'à quand peut-il envoyer sa lettre de résiliation ?",
            answer: "Au plus tard 90 jours (3 mois) avant la date anniversaire du contrat, par LRAR.",
            reasoning: "La tacite reconduction reconduit automatiquement le contrat sauf dénonciation respectant les formes (LRAR) et le délai (90 jours). S'il rate cette fenêtre, il est engagé pour une année supplémentaire. Concrètement : si le contrat a été signé le 1er juin, la LRAR doit partir au plus tard le 3 mars de l'année suivante."
          },
          {
            situation: "Un contrat d'assurance VTC contient la mention : « La garantie est acquise sous réserve du respect par l'assuré des conditions d'exercice prévues par le Code des transports. »",
            question: "Que se passe-t-il si le conducteur fait une course de maraude (interdite en VTC) et a un accident ?",
            answer: "L'assureur peut refuser sa garantie : la condition d'exercice légal n'était pas respectée.",
            reasoning: "« Sous réserve de » est une condition suspensive : la garantie n'existe que si la condition est remplie. Comme la maraude est illégale pour un VTC (article L3122-9), le conducteur exerce hors cadre légal, ce qui annule la couverture. Conséquences potentielles : réparations du véhicule et indemnisation des tiers à sa charge personnelle."
          }
        ],
        examWarning: "Un document signé sans lecture = engagement quand même. La signature vaut acceptation pleine et entière.",
        tips: [
          "En cas de doute juridique : demander un délai et consulter",
          "Toujours conserver l'original signé et un double"
        ],
        legalRefs: ["Article 1103 du Code civil (force obligatoire des contrats)"]
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
        narrative: "L'anglais T3P n'a pas vocation à être littéraire : il doit être professionnel, courtois et fonctionnel. La clientèle internationale (touristes, business travelers, équipages aériens) attend les codes de la communication anglo-saxonne hôtelière, où la politesse modale est centrale.\n\nLa distinction « Can I / May I » est l'archétype de cette politesse. « Can I take your luggage? » est correct grammaticalement mais demande une capacité. « May I take your luggage? » demande une permission — c'est la formule attendue dans un contexte de service haut de gamme. De même, « Would you like… » est plus poli que « Do you want… ». Maîtriser ces 3-4 modaux suffit pour passer d'un anglais touristique à un anglais professionnel.\n\nLes salutations s'adaptent au moment de la journée : Good morning (jusqu'à midi), Good afternoon (12 h-18 h), Good evening (après 18 h). « Good night » n'est PAS un salut d'accueil — c'est un « bonne nuit » qu'on dit quand on quitte quelqu'un le soir. Cette erreur courante trahit immédiatement un conducteur peu à l'aise. Enfin, le non-verbal — sourire, contact visuel, ouverture de portière — compense les éventuelles lacunes lexicales : un client se souvient surtout de la chaleur de l'accueil.",
        keyPoints: [
          "Good morning/afternoon/evening = Bonjour selon l'heure",
          "How may I help you? = Comment puis-je vous aider ?",
          "May I take your luggage? = Puis-je prendre vos bagages ?",
          "Please make yourself comfortable = Installez-vous"
        ],
        fieldExample: "Le chauffeur accueille : 'Good afternoon! I will be your driver today. May I take your luggage?'",
        practicalCases: [
          {
            situation: "Il est 21h, un client international monte dans le véhicule. Le conducteur lui dit « Good night, sir ».",
            question: "L'accueil est-il correct ?",
            answer: "Non. « Good night » signifie « bonne nuit » (au moment où l'on se quitte). Il fallait dire « Good evening ».",
            reasoning: "« Good night » est une formule de séparation, pas d'accueil. Le client peut être déstabilisé (est-ce que le chauffeur veut déjà qu'il descende ?). La bonne formule entre 18 h et minuit est « Good evening », qui est neutre et professionnelle."
          },
          {
            situation: "Le conducteur doit demander au client s'il peut prendre ses bagages.",
            question: "Quelle formulation choisir entre « Can I take your bag? » et « May I take your bag? » ?",
            answer: "« May I take your bag, please? »",
            reasoning: "« Can I » demande une capacité physique (« suis-je capable »), « May I » demande une permission polie. En contexte de service professionnel anglo-saxon, « May I » est la norme. L'ajout de « please » renforce la courtoisie. Ce détail différencie un service amateur d'un service premium."
          }
        ],
        examWarning: "'May I' = plus poli que 'Can I' en contexte pro. 'Good night' ≠ accueil.",
        tips: [
          "Le sourire et le contact visuel sont universels",
          "Apprendre 5 formules par cœur > improviser avec un anglais hésitant"
        ],
        legalRefs: []
      },
      {
        id: 'ang-trajet-informations',
        title: 'Informations trajet',
        essential: "'Approximately' = environ. Ne jamais promettre une heure exacte.",
        narrative: "Pendant le trajet, le conducteur doit informer le client de manière claire et juridiquement prudente. Le piège classique est d'annoncer une heure d'arrivée ferme : en cas de retard, le client peut invoquer un engagement de résultat. La solution est d'utiliser systématiquement des modulateurs d'incertitude : « approximately », « about », « around », « roughly ».\n\nLa structure type d'une annonce de trajet est : situation actuelle + estimation + plan B. Exemple : « There is some traffic on the ring road (situation). We should arrive in approximately 35 minutes (estimation). If it gets worse, I will take an alternative route through the inner boulevards (plan B). » Cette structure rassure : le client comprend que le conducteur a anticipé.\n\nQuelques formulations clés à mémoriser. « We are now entering Paris » (annonce d'arrivée en zone urbaine). « The traffic is heavier than usual today » (justifie un retard sans promettre). « Would you mind if I take a different route? It will be faster » (demande l'accord avant de changer d'itinéraire — important pour la facturation et la confiance). « Is the temperature comfortable? » plutôt que « Are you hot? » (plus pro). Enfin, on évite « no problem » à toutes les sauces, qui sonne désinvolte ; on préfère « certainly » ou « of course ».",
        keyPoints: [
          "We should arrive in approximately 30 minutes",
          "There is some traffic ahead = Il y a du trafic",
          "I will take an alternative route = Je prends un autre itinéraire",
          "Is the temperature comfortable? = La température convient ?"
        ],
        fieldExample: "Le chauffeur informe : 'There is traffic, but we should arrive in about 40 minutes.'",
        practicalCases: [
          {
            situation: "Un client demande : « What time will we be at the airport? » Le conducteur sait qu'il faut environ 45 minutes mais le trafic est dense.",
            question: "Quelle réponse adopter ?",
            answer: "« We should arrive at the airport in approximately 45 to 55 minutes, depending on traffic. »",
            reasoning: "Donner une fourchette plutôt qu'une heure fixe protège le conducteur et reste transparent. « Approximately » + fourchette + « depending on traffic » montrent qu'on a anticipé l'aléa. Donner « 14h30 précis » est un piège : si on arrive à 14h35, le client peut se plaindre."
          },
          {
            situation: "À cause d'un accident sur l'itinéraire prévu, le conducteur souhaite passer par un trajet plus long mais plus fluide.",
            question: "Comment l'annoncer en anglais sans froisser le client ?",
            answer: "« There is an accident on our route. With your permission, I would like to take a slightly longer but much faster alternative. »",
            reasoning: "On informe (transparence sur la cause), on demande l'accord (« with your permission »), on assume la conséquence (« slightly longer »), on justifie (« much faster »). Cette précaution évite la suspicion de surfacturation kilométrique et entretient la confiance."
          }
        ],
        examWarning: "Toujours utiliser 'approximately' ou 'about' pour les estimations. Annoncer une heure ferme = engagement.",
        tips: [
          "Informer proactivement rassure le client",
          "Demander l'accord avant tout changement d'itinéraire"
        ],
        legalRefs: []
      },
      {
        id: 'ang-vocabulaire-tourisme',
        title: 'Vocabulaire tourisme',
        essential: "Connaître le nom anglais des monuments : Eiffel Tower, Louvre Museum, Notre-Dame Cathedral...",
        narrative: "Un client touristique évalue le professionnalisme du conducteur à sa capacité de nommer correctement les lieux. Dire « the Eiffel Tower » au lieu de « la Tour Eiffel » est une marque de respect linguistique. La règle générale : on garde le nom propre français (Notre-Dame, Champs-Élysées, Louvre) mais on traduit le nom commun (Tower, Cathedral, Museum, Avenue).\n\nLes monuments incontournables à maîtriser : Eiffel Tower (7ème), Arc de Triomphe (8ème), Notre-Dame Cathedral (4ème), Louvre Museum (1er), Sacré-Cœur Basilica (18ème), Opéra Garnier (9ème), Centre Pompidou (4ème), Panthéon (5ème), Musée d'Orsay (7ème), Place de la Concorde (8ème), Champs-Élysées Avenue. Pour les quartiers : the Latin Quarter (5ème-6ème), Montmartre, Le Marais, the Champs-Élysées area.\n\nLe vocabulaire utile pour orienter : landmark (monument emblématique), sightseeing (visite touristique), city center / downtown (centre-ville), neighborhood (quartier), bank of the Seine (rive de la Seine — Left Bank/Right Bank), bridge (pont), square (place). Pour le transport : railway station (gare), subway / metro (métro), airport (aéroport), taxi rank / taxi stand (station de taxi). Il faut aussi savoir distinguer CDG (Charles de Gaulle Airport) et ORY (Orly Airport), souvent confondus par les Anglo-Saxons.",
        keyPoints: [
          "Landmark = monument emblématique",
          "Sightseeing = visite touristique",
          "City center / Downtown = centre-ville",
          "Railway station = gare / Airport = aéroport"
        ],
        fieldExample: "Le client demande 'Where is Notre-Dame?' → 'It's on the Île de la Cité, in the heart of Paris.'",
        practicalCases: [
          {
            situation: "Un touriste américain demande : « Can you drop me at the Notre Dame Museum? »",
            question: "Que doit faire le conducteur ?",
            answer: "Reformuler : « Do you mean Notre-Dame Cathedral, on the Île de la Cité? It's a cathedral, not a museum. »",
            reasoning: "Le client se trompe (Notre-Dame est une cathédrale, pas un musée). Plutôt que de partir avec un doute, on reformule poliment et on rectifie. Cela évite une mauvaise destination et démontre une vraie connaissance de Paris — c'est un avantage compétitif majeur."
          },
          {
            situation: "Un client demande : « How long to get to the Eiffel Tower from here? » On est à Opéra (9ème).",
            question: "Donner une réponse complète en anglais.",
            answer: "« From here, it should take approximately 20 to 25 minutes by car, depending on traffic. The Eiffel Tower is on the Left Bank, in the 7th district. »",
            reasoning: "On combine : estimation prudente (« approximately », fourchette), localisation géographique (« Left Bank, 7th district »). Le client touriste apprécie ce contexte qui lui permet de se repérer pour ses prochaines visites. C'est aussi une opportunité de fidélisation."
          }
        ],
        examWarning: "Eiffel Tower, Arc de Triomphe, Notre-Dame Cathedral : mémoriser ces noms.",
        tips: [
          "CDG = Charles de Gaulle Airport, ORY = Orly Airport",
          "Left Bank / Right Bank = rive gauche / rive droite (très utilisé par les anglo-saxons)"
        ],
        legalRefs: []
      },
      {
        id: 'ang-aeroport',
        title: 'Vocabulaire aéroport',
        essential: "Terminal, Gate, Check-in, Boarding pass : mots essentiels aéroport.",
        narrative: "L'aéroport représente une part substantielle du chiffre d'affaires T3P (forfaits CDG/Orly, navettes d'entreprises). Maîtriser le vocabulaire aéroportuaire anglais est donc un atout commercial direct. Une erreur de terminal à CDG (7 terminaux : 1, 2A, 2B, 2C, 2D, 2E, 2F, 2G, 3) peut faire perdre 20 minutes au client et lui faire rater son vol.\n\nLe vocabulaire critique se concentre sur le parcours du voyageur : check-in (enregistrement, généralement 2-3 h avant le vol), security (contrôle de sécurité), gate (porte d'embarquement, attribuée 30-60 min avant), boarding (embarquement), boarding pass (carte d'embarquement). Attention : check-in ≠ check-out. Check-out désigne le départ d'un hôtel (on libère la chambre), pas l'arrivée à l'aéroport. Cette confusion est extrêmement fréquente chez les conducteurs francophones.\n\nPour les bagages : carry-on / hand luggage (bagage cabine, généralement 8-10 kg), checked baggage (bagage en soute, à enregistrer), luggage / suitcase (valise), oversized luggage (bagage hors gabarit). Pour les types de vols : domestic flight (vol intérieur, généralement Terminal 2F à CDG), international flight (vol international), connecting flight (vol en correspondance). Toujours demander : « Which airline are you flying with? » et « Which terminal? » — ces deux informations conditionnent le point de dépose exact.",
        keyPoints: [
          "Flight = vol / Gate = porte d'embarquement",
          "Boarding pass = carte d'embarquement",
          "Check-in = enregistrement / Check-out = départ hôtel",
          "Carry-on = bagage cabine / Luggage = bagages"
        ],
        fieldExample: "Le client dit 'Terminal 2E, Gate 34' : le chauffeur le dépose au bon endroit (zone départs).",
        practicalCases: [
          {
            situation: "Un client demande : « Drop me at the check-out, please. » Le conducteur l'emmène à l'aéroport CDG.",
            question: "À quel endroit doit-il déposer le client ?",
            answer: "Il faut d'abord demander confirmation : « Do you mean check-in, sir? Check-out is for hotels. »",
            reasoning: "Le client a très probablement voulu dire « check-in » (enregistrement, zone Départs). « Check-out » désigne la libération d'une chambre d'hôtel. Ne pas reformuler = risque de dépose en zone Arrivées, à l'opposé. La reformulation polie évite l'erreur sans humilier le client."
          },
          {
            situation: "Un client doit prendre un vol Air France pour New York. Il dit juste « CDG please ».",
            question: "Quelles questions poser pour éviter l'erreur de terminal ?",
            answer: "« Which airline are you flying with, and do you know your terminal? Air France international flights usually depart from Terminal 2E or 2F at CDG. »",
            reasoning: "À CDG, Air France long-courrier = Terminal 2E ou 2F selon la destination. Déposer en Terminal 1 ferait perdre 15-20 min de navette CDGVAL au client. Le conducteur professionnel anticipe avec deux questions ciblées. Si le client ne sait pas, on vérifie sur l'app de la compagnie."
          }
        ],
        examWarning: "Check-in (enregistrement) ≠ Check-out (départ hôtel). Confusion fréquente.",
        tips: [
          "Toujours confirmer le terminal (CDG en a plusieurs)",
          "Demander la compagnie aérienne aide à déduire le terminal"
        ],
        legalRefs: []
      },
      {
        id: 'ang-situations-pratiques',
        title: 'Situations pratiques',
        essential: "'Could you spell that, please?' pour éviter les erreurs d'adresse.",
        narrative: "Les situations délicates en anglais réclament des formules figées qu'on doit avoir mémorisées et prêtes à l'emploi. L'improvisation produit des phrases ambiguës qui dégradent le service. Trois familles de situations reviennent constamment : la non-compréhension, le problème technique ou de confort, la fin de course.\n\nFace à une adresse mal comprise (accent, prononciation), la formule magique est « Could you spell that, please? » (« Pouvez-vous l'épeler ? »). Elle est polie (« Could » au lieu de « Can »), sans connotation négative, et résout 90 % des malentendus. Variante : « Would you mind repeating the address, please? » Surtout ne JAMAIS faire semblant d'avoir compris — partir vers une mauvaise adresse coûte un client à vie.\n\nPour le confort : « Do you prefer the air conditioning on or off? », « Would you like me to lower the music? », « Is the temperature comfortable for you? ». Pour la fin de course : « We have arrived at your destination. Please make sure you have all your belongings. Here is your receipt. Have a pleasant day / a safe flight. » Pour un incident technique (panne légère, embouteillage exceptionnel) : « I am sorry, there seems to be a problem. Let me handle it / Let me find an alternative. » L'utilisation de « I am sorry » désamorce immédiatement la tension, même si le conducteur n'est pas responsable.",
        keyPoints: [
          "Could you spell that? = Pouvez-vous épeler ?",
          "I'm sorry, there seems to be a problem = Il semble y avoir un problème",
          "Do you prefer AC on or off? = Climatisation oui ou non ?",
          "Here is your receipt = Voici votre reçu"
        ],
        fieldExample: "Le chauffeur ne comprend pas l'adresse : 'Could you spell that, please?'",
        practicalCases: [
          {
            situation: "Un client anglo-saxon donne une adresse mais le conducteur n'a pas saisi le nom de la rue à cause de l'accent.",
            question: "Que doit-il faire ? Que NE PAS faire ?",
            answer: "Demander : « Could you spell that, please? » Ne JAMAIS partir en faisant semblant d'avoir compris.",
            reasoning: "Faire semblant = risque de mauvaise destination = perte de temps, client mécontent, voire facturation contestée. La formule « Could you spell that » est polie et professionnelle — elle montre qu'on prend la précision au sérieux. C'est l'inverse d'un aveu de faiblesse."
          },
          {
            situation: "À la fin de la course, le client paie. Le conducteur veut lui souhaiter une bonne fin de journée et lui remettre son reçu.",
            question: "Formuler une phrase de clôture professionnelle.",
            answer: "« Thank you very much. Here is your receipt. Please make sure you have all your belongings. Have a pleasant evening! »",
            reasoning: "On combine : remerciement (« Thank you very much »), remise du reçu (preuve commerciale), rappel des effets personnels (évite l'oubli, source de réclamations), souhait personnalisé selon l'heure (« evening » après 18 h). Cette dernière impression conditionne la note du client et son éventuelle recommandation."
          }
        ],
        examWarning: "Ne jamais prétendre avoir compris. Mieux vaut demander de répéter.",
        tips: [
          "Parler lentement si le client semble ne pas comprendre",
          "Mémoriser 5-10 phrases types couvre 80 % des situations"
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
        essential: "VTC = réservation préalable obligatoire. Maraude interdite sous peine de 1 an de prison et 15 000 € d'amende.",
        narrative: "Le statut juridique du VTC repose sur une notion fondamentale : la réservation préalable. Contrairement au taxi, qui peut prendre un client « à la volée » dans la rue (la maraude), le VTC ne peut transporter qu'un client qui a réservé sa course à l'avance, par tout moyen vérifiable (application, téléphone, site web, contrat-cadre B2B). Cette frontière, posée par la loi Thévenoud du 1er octobre 2014 et renforcée par la loi Grandguillaume du 29 décembre 2016, structure tout le métier.\n\nLa maraude — chercher des clients en circulant ou en stationnant sur la voie publique — est donc strictement interdite aux VTC. L'article L3124-9 du Code des transports prévoit des sanctions lourdes : 1 an d'emprisonnement, 15 000 € d'amende, immobilisation du véhicule, suspension de la carte professionnelle. Ce n'est pas une faute administrative mais un délit pénal. Le législateur a voulu protéger le monopole économique des taxis (qui ont payé leur ADS) tout en laissant un espace concurrentiel aux VTC sur le marché de la réservation.\n\nUne règle souvent oubliée : le retour à vide. Après avoir déposé un client, le VTC doit en principe retourner à son lieu de stationnement habituel (siège de l'entreprise ou parking de la plateforme) sauf s'il a déjà une nouvelle réservation. Cette obligation, qui peut sembler théorique, est en réalité contrôlée : un VTC qui stationne devant une gare ou un hôtel sans réservation peut être verbalisé.",
        keyPoints: [
          "VTC = Voiture de Transport avec Chauffeur",
          "Réservation préalable obligatoire (pas de prise en charge spontanée)",
          "Maraude interdite : 1 an prison + 15 000 € (délit pénal)",
          "Retour à vide obligatoire sauf nouvelle réservation",
          "Inscription au registre VTC préfectoral obligatoire"
        ],
        fieldExample: "Un client hèle un VTC dans la rue : le chauffeur doit refuser (maraude = interdit).",
        practicalCases: [
          {
            situation: "Un VTC vient de déposer un client à Saint-Lazare. En attendant une nouvelle réservation Uber, il se gare sur une place gratuite à proximité de la gare et attend 30 minutes.",
            question: "Cette pratique est-elle légale ?",
            answer: "Non. Le VTC est en infraction : sans réservation, il doit retourner à son lieu d'établissement.",
            reasoning: "Stationner devant un point d'attraction (gare, hôtel, aéroport) sans réservation peut être qualifié de maraude (raccrochage de clientèle). Même si le conducteur n'accoste personne, l'intention de capter une demande spontanée est présumée. Sanction possible : amende + suspension de carte pro. Bonne pratique : retour au siège ou stationnement en zone neutre."
          },
          {
            situation: "Un piéton hèle un VTC à un feu rouge en disant « Vous êtes libre ? Direction Châtelet ». Le VTC n'a aucune réservation à ce moment-là.",
            question: "Peut-il accepter la course ?",
            answer: "Non. Accepter constituerait une maraude punie d'1 an de prison et 15 000 € d'amende.",
            reasoning: "L'article L3124-9 du Code des transports interdit formellement aux VTC de prendre un client sans réservation préalable, même si le client est demandeur. Pour que la course soit légale, il faudrait que le client la réserve via une application (même 5 secondes avant). C'est l'acte de réservation enregistrée qui légalise la prestation."
          }
        ],
        examWarning: "VTC = JAMAIS de maraude. C'est LA différence fondamentale avec les taxis.",
        confusionPoints: [
          "Taxi = maraude autorisée ≠ VTC = réservation préalable uniquement"
        ],
        tips: [
          "Conserver l'historique de réservation pendant 1 an minimum",
          "Pas de stationnement sur emplacements taxis (amende immédiate)"
        ],
        legalRefs: ["Article L3122-9 du Code des transports", "Article L3124-9 (sanctions)", "Loi Thévenoud 2014", "Loi Grandguillaume 2016"]
      },
      {
        id: 'vtc-inscription-registre',
        title: 'Inscription au registre',
        essential: "Inscription au registre VTC obligatoire. Numéro à afficher sur le véhicule.",
        narrative: "L'inscription au registre VTC est l'acte de naissance administratif de l'activité. Sans elle, ni la carte professionnelle ni le véhicule ne suffisent : le conducteur exerce illégalement, même s'il pense être « en règle » avec ses autres documents. Cette inscription, gérée par les préfectures (en Île-de-France : la DRIEAT — Direction Régionale et Interdépartementale de l'Environnement, de l'Aménagement et des Transports), valide trois éléments simultanément : l'exploitant (entreprise), le véhicule, et le conducteur.\n\nLe véhicule doit respecter des conditions techniques cumulatives : puissance ≥ 84 kW (115 ch), OU longueur ≥ 4,50 m, OU largeur ≥ 1,70 m. Un seul de ces critères suffit, mais en pratique la plupart des véhicules de gamme moyenne supérieure (Mercedes Classe E, BMW Série 5, Audi A6, Tesla Model 3) les remplissent largement. Le véhicule doit aussi être âgé de moins de 7 ans à la date d'inscription. L'assurance professionnelle « transport de personnes à titre onéreux » est obligatoire — une assurance personnelle classique ne couvre rien.\n\nUne fois inscrit, le véhicule reçoit une vignette d'identification numérotée, à apposer en bas à droite du pare-brise (côté passager). L'attestation d'inscription papier doit être présente à bord, présentable à tout contrôle (police, gendarmerie, DGCCRF). L'inscription est valable 5 ans et doit être renouvelée. Tout changement (nouveau véhicule, nouvelle adresse) doit être déclaré sous 1 mois.",
        keyPoints: [
          "Registre tenu par la préfecture ou DRIEAT (Île-de-France)",
          "Véhicule : ≥ 84 kW OU ≥ 4,50 m OU ≥ 1,70 m largeur",
          "Véhicule de moins de 7 ans à l'inscription",
          "Vignette avec numéro d'inscription visible sur pare-brise",
          "Attestation d'inscription à bord obligatoire"
        ],
        fieldExample: "Le VTC affiche sa vignette avec son numéro d'inscription sur le pare-brise avant droit.",
        practicalCases: [
          {
            situation: "Un conducteur possède sa carte professionnelle VTC depuis 6 mois. Il vient d'acheter une Renault Mégane (longueur 4,36 m, largeur 1,81 m, puissance 84 kW).",
            question: "Ce véhicule est-il éligible au registre VTC ?",
            answer: "Oui. Il remplit deux critères sur trois : largeur ≥ 1,70 m (1,81 m) et puissance ≥ 84 kW.",
            reasoning: "Les critères sont alternatifs (« OU ») et non cumulatifs. Il suffit qu'UN seul soit respecté. La longueur de 4,36 m (< 4,50 m) n'est donc pas bloquante. Cependant, l'image de marque peut souffrir : la plupart des plateformes premium imposent en pratique un niveau de gamme supérieur."
          },
          {
            situation: "Un VTC change de véhicule mais oublie de déclarer le changement à la préfecture. Il fait des courses avec le nouveau véhicule pendant 3 mois.",
            question: "Quelles sont les conséquences en cas de contrôle ?",
            answer: "Exercice illégal : le nouveau véhicule n'est pas inscrit. Sanctions possibles : amende, immobilisation du véhicule, suspension de la carte pro.",
            reasoning: "L'inscription au registre est liée à un couple exploitant + véhicule + conducteur. Changer de véhicule sans déclaration rompt le lien réglementaire. De plus, l'assurance peut refuser sa garantie en cas d'accident (véhicule non déclaré pour l'activité). Délai légal de déclaration : 1 mois maximum après le changement."
          }
        ],
        examWarning: "Sans inscription au registre = exercice illégal, même avec la carte pro valide.",
        tips: [
          "Le numéro d'inscription est visible sur la vignette pare-brise",
          "Renouveler l'inscription tous les 5 ans (alerte agenda)"
        ],
        legalRefs: ["Article R3122-1 du Code des transports", "Arrêté du 23 décembre 2016 (critères véhicule)"]
      },
      {
        id: 'vtc-tarification',
        title: 'Tarification VTC',
        essential: "Tarifs libres mais information préalable du client obligatoire. TVA transport = 10 %.",
        narrative: "À la différence du taxi (tarif réglementé par arrêté préfectoral), le VTC pratique des tarifs LIBRES. Chaque exploitant fixe sa grille comme il l'entend : forfait fixe (souvent utilisé pour les liaisons aéroport), tarif kilométrique, tarif horaire, ou combinaison temps + distance (modèle Uber). Cette liberté est cependant encadrée par une obligation centrale : l'information préalable et complète du client AVANT le début de la course.\n\nConcrètement, le client doit connaître soit le prix total exact (forfait), soit le mode de calcul détaillé (prix au km, prix de prise en charge, suppléments éventuels) avant de monter dans le véhicule. Sur une application, c'est l'affichage du prix estimé qui vaut information préalable. Pour une course de gré à gré, le conducteur doit annoncer oralement et idéalement écrire (SMS, mail). Ne pas respecter cette obligation expose à une qualification d'abus de faiblesse ou de pratique commerciale trompeuse (DGCCRF, jusqu'à 75 000 € d'amende pour personne physique).\n\nCôté fiscal, point CAPITAL : la TVA applicable au transport de voyageurs est de 10 %, pas 20 %. Cette TVA réduite (article 279 du CGI) s'applique à toutes les courses VTC et taxi. Le conducteur ne devient redevable de la TVA que s'il dépasse les seuils de la franchise en base (37 500 € HT en 2025) ; en dessous, il facture HT sans TVA, mais ne peut pas non plus la déduire sur ses charges. Le passage au régime réel devient intéressant quand les charges (carburant, péages, leasing) génèrent une TVA déductible significative.",
        keyPoints: [
          "Pas de tarif réglementé (libre concurrence)",
          "Modes : forfait, kilométrique, temps + distance",
          "Information prix AVANT la course obligatoire",
          "TVA 10 % pour le transport de voyageurs (si assujetti)",
          "Franchise en base : 37 500 € HT en 2025"
        ],
        fieldExample: "L'application affiche 35 € pour la course : le client accepte en connaissance de cause.",
        practicalCases: [
          {
            situation: "Un VTC accepte une course de gré à gré sans annoncer le prix. À l'arrivée, il facture 80 € au client. Le client conteste et refuse de payer plus de 50 €.",
            question: "Quelle est la position juridique ?",
            answer: "Le conducteur est en tort : l'information préalable du prix est obligatoire. Le client est fondé à contester.",
            reasoning: "L'article L111-1 du Code de la consommation impose au professionnel de communiquer au consommateur le prix avant la conclusion du contrat. Sans information préalable, le conducteur s'expose à : remboursement contraint, signalement DGCCRF, sanction administrative. Bonne pratique : annoncer un forfait ou un prix maximum AVANT de démarrer, idéalement par écrit (SMS)."
          },
          {
            situation: "Une VTC, en début d'activité, réalise 25 000 € HT de chiffre d'affaires sur l'année. Elle est en franchise en base de TVA.",
            question: "Doit-elle facturer la TVA à 10 % à ses clients ?",
            answer: "Non. En franchise en base, elle facture HT sans TVA, avec la mention « TVA non applicable, art. 293 B du CGI ».",
            reasoning: "Tant que le seuil de 37 500 € HT (2025) n'est pas dépassé, la VTC n'est pas redevable de la TVA. Elle ne la facture pas mais ne peut pas non plus la récupérer sur ses charges (carburant, leasing). Dès qu'elle dépasse le seuil, elle bascule automatiquement au régime réel à compter du 1er jour du mois de dépassement et doit facturer 10 % sur le transport."
          }
        ],
        examWarning: "TVA transport voyageurs = 10 % (et non 20 % comme la TVA standard). Information préalable obligatoire.",
        confusionPoints: [
          "TVA VTC = 10 % ≠ TVA standard = 20 %",
          "Tarifs libres ≠ liberté de ne pas informer le client"
        ],
        tips: [
          "Conserver toute trace écrite du tarif annoncé (SMS, screenshot app)",
          "Les suppléments doivent être annoncés à l'avance"
        ],
        legalRefs: ["Article 279 du CGI (TVA 10 %)", "Article L111-1 du Code de la consommation", "Article 293 B du CGI (franchise)"]
      },
      {
        id: 'vtc-plateformes',
        title: 'Plateformes VTC',
        essential: "Le conducteur reste indépendant. La plateforme est un intermédiaire, pas un employeur.",
        narrative: "Les plateformes de mise en relation (Uber, Bolt, Heetch, FreeNow, Marcel…) ont structuré le marché du VTC depuis 2014. Juridiquement, elles ne sont PAS des employeurs mais des intermédiaires commerciaux : elles mettent en relation un client et un conducteur indépendant en échange d'une commission (généralement 20-25 % de la course). Le conducteur conserve son statut d'auto-entrepreneur ou de société, encaisse sa rémunération nette de commission, et déclare son chiffre d'affaires personnellement.\n\nCe modèle est cependant contesté en justice. Plusieurs décisions de la Cour de cassation (notamment Uber, 4 mars 2020) ont requalifié certains conducteurs en salariés, retenant un faisceau d'indices : tarifs imposés, géolocalisation contrainte, système de notation, sanctions unilatérales. Une requalification individuelle est possible mais ne change pas le statut général de la profession : le VTC reste juridiquement indépendant tant qu'aucune décision ne le requalifie.\n\nEn pratique, un conducteur peut — et a souvent intérêt à — travailler avec PLUSIEURS plateformes simultanément (multi-apping). Cela diversifie les sources de revenus, permet de comparer les commissions et les types de courses, et réduit la dépendance à un seul acteur. Aucune clause d'exclusivité n'est légalement opposable à un indépendant. Le conducteur reste cependant seul responsable de sa conformité réglementaire : carte pro, inscription registre, assurance, factures. La plateforme ne se substitue jamais à ces obligations.",
        keyPoints: [
          "Centrales (Uber, Bolt, Heetch...) = intermédiaires inscrits au registre des centrales",
          "Commission prélevée sur chaque course (env. 20-25 %)",
          "Possible de travailler avec plusieurs plateformes (multi-apping)",
          "Le conducteur reste responsable de sa conformité réglementaire",
          "Statut indépendant sauf requalification judiciaire individuelle"
        ],
        fieldExample: "Un VTC travaille avec Uber et Bolt : il diversifie ses sources de clients et compare les commissions.",
        practicalCases: [
          {
            situation: "Un conducteur VTC signe avec Uber un contrat qui prévoit une « préférence d'exclusivité » : il ne devrait pas se connecter à d'autres plateformes pendant ses heures Uber.",
            question: "Cette clause est-elle valide juridiquement ?",
            answer: "Très contestable. Un indépendant a en principe le droit de travailler avec qui il veut. Une clause d'exclusivité peut être un indice de requalification en salariat.",
            reasoning: "L'indépendance d'un VTC implique la liberté de choisir ses clients et ses partenaires commerciaux. Une clause d'exclusivité imposée transforme le rapport en lien de subordination, ce qui est l'un des critères du contrat de travail. Le conducteur peut faire annuler la clause, voire demander la requalification en CDI avec rappel de salaires."
          },
          {
            situation: "Un client laisse 3 sacs dans le coffre. Il appelle Uber qui le redirige vers le conducteur. Uber refuse toute responsabilité.",
            question: "Qui est responsable des objets oubliés ?",
            answer: "Le conducteur, en tant qu'indépendant prestataire de service. La plateforme n'est qu'un intermédiaire.",
            reasoning: "Le contrat de transport lie le conducteur (indépendant) au client, pas la plateforme. Le conducteur a une obligation de restitution des effets oubliés. En pratique, il doit vérifier le véhicule après chaque course, conserver les objets oubliés et les restituer (souvent via la plateforme qui sert d'intermédiaire). Inversement, la plateforme ne peut pas être assignée comme employeur pour ces obligations."
          }
        ],
        examWarning: "Statut = indépendant. Pas salarié de la plateforme (sauf requalification judiciaire individuelle).",
        tips: [
          "Comparer les commissions des différentes plateformes",
          "Conserver ses propres relevés (ne pas dépendre des dashboards des plateformes pour la compta)"
        ],
        legalRefs: ["Article L3141-1 du Code des transports", "Cour de cassation, 4 mars 2020 (Uber)"]
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
