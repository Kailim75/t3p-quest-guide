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
        narrative: "L'équipement de sécurité ne se limite pas à un dispositif passif : c'est un système juridique de responsabilités. Le port de la ceinture est obligatoire pour tous les occupants depuis 1990 à l'arrière (déjà depuis 1973 à l'avant). Le non-port est sanctionné de 135€ : le conducteur non attaché perd en plus 3 points, tandis qu'un passager adulte non attaché paie l'amende lui-même, sans retrait de points. Pour les mineurs, c'est le conducteur qui est responsable : il écope de l'amende de 135€, mais SANS retrait de points. Pour un VTC ou un taxi transportant un enfant non attaché, c'est donc le chauffeur qui paie.\n\nLes enfants de moins de 10 ans doivent voyager dans un dispositif de retenue adapté à leur taille et leur poids (siège auto, rehausseur). Sous 9 mois, ils doivent être placés dos à la route. L'avant est interdit aux moins de 10 ans sauf exception (cabine dépourvue de banquette arrière, ou rehausseur conforme avec airbag désactivé). Pour un T3P, il est fortement recommandé de disposer d'au moins un rehausseur pour transporter des familles avec enfants.\n\nDeux équipements doivent être à bord en permanence : le gilet haute visibilité (à portée de main, pas dans le coffre) et le triangle de présignalisation. L'absence est sanctionnée 135€ chacun. Le gilet doit être enfilé AVANT de descendre du véhicule en cas de panne ou d'accident sur la chaussée, et le triangle placé à 30 m en amont (150-200 m sur voie rapide). L'éthylotest, longtemps obligatoire mais non sanctionné, n'est plus exigé depuis 2020. La trousse de premiers secours reste fortement recommandée pour un T3P, sans être légalement imposée.",
        keyPoints: [
          "Ceinture obligatoire pour tous les occupants (avant et arrière)",
          "Mineurs : responsabilité du conducteur (135€, sans retrait de points)",
          "Enfants < 10 ans : dispositif de retenue adapté",
          "Gilet haute visibilité : à portée de main (pas dans le coffre)",
          "Triangle : 30 m en amont, 150-200 m sur voie rapide"
        ],
        practicalCases: [
          {
            situation: "Un taxi transporte une mère et son fils de 8 ans. L'enfant est assis sur la banquette arrière sans rehausseur, ceinture standard.",
            question: "Qui est responsable et que risque le chauffeur ?",
            answer: "Le chauffeur : il est responsable du défaut de dispositif adapté (amende de 135€, sans retrait de points) car l'enfant a moins de 10 ans.",
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
        essential: "Véhicule de 4 à 9 places conducteur compris. Thermique : moins de 7 ans. Hybrides et électriques : dispensés des critères techniques, âge compris (art. L.3120-5).",
        narrative: "Le véhicule T3P est soumis à des conditions strictes qui s'ajoutent à la réglementation routière classique. Côté capacité, il doit comporter entre 4 et 9 places assises, conducteur compris (art. R.3122-11) — au-delà, on bascule en transport collectif (autocar). En deçà, le véhicule n'offre pas la sécurité minimale exigée pour un transport rémunéré.\n\nCôté ancienneté, la règle actuelle est simple : un véhicule VTC thermique doit avoir moins de 7 ans. Les véhicules hybrides et électriques, eux, sont totalement DISPENSÉS des caractéristiques techniques réglementaires — y compris la condition d'âge (article L.3120-5 du Code des transports). Une Tesla de 2017 peut donc, réglementairement, toujours rouler en VTC en 2026, alors qu'une berline thermique de 2018 ne le peut plus.\n\nLe VTC thermique doit en plus respecter des critères de gabarit et de puissance fixés par l'arrêté du 26 mars 2015, et ces critères sont CUMULATIFS — tous doivent être respectés : au moins 4 portes, longueur hors tout ≥ 4,50 m, largeur hors tout ≥ 1,70 m, puissance nette du moteur ≥ 84 kW. Un seul critère manquant disqualifie le véhicule. Le contrôle technique est annuel (au lieu de bisannuel pour un particulier) et plus exigeant — il vérifie aussi les équipements obligatoires : ceintures fonctionnelles à toutes les places, signalétique pour le taxi (lumineux, plaque, compteur scellé). Tout défaut majeur entraîne l'immobilisation immédiate.",
        keyPoints: [
          "Capacité : 4 à 9 places conducteur compris (R.3122-11)",
          "Thermique : moins de 7 ans / hybride-électrique : dispensé de la condition d'âge",
          "Critères VTC CUMULATIFS : 4 portes + ≥ 4,50 m + ≥ 1,70 m + ≥ 84 kW",
          "Hybrides/électriques : dispensés de tous ces critères (art. L.3120-5)",
          "Contrôle technique annuel (renforcé pour usage pro)"
        ],
        practicalCases: [
          {
            situation: "Antoine veut acheter un véhicule pour son activité VTC en 2026. Il hésite entre une berline thermique de 2018 et une Tesla Model 3 de 2018.",
            question: "Lequel peut-il exploiter en VTC ?",
            answer: "La Tesla : électrique, elle est dispensée de la condition d'ancienneté. La berline thermique de 2018 a dépassé la limite de 7 ans.",
            reasoning: "L'article L.3120-5 du Code des transports dispense les véhicules hybrides et électriques des caractéristiques techniques réglementaires, condition d'âge comprise. Pour un véhicule thermique en 2026, il faut une première mise en circulation en 2020 ou après (moins de 7 ans). C'est un avantage économique majeur des motorisations électrifiées pour les exploitants."
          },
          {
            situation: "Un VTC thermique mesure 4,60 m de long et 1,80 m de large, mais sa puissance moteur est de 70 kW.",
            question: "Le véhicule est-il conforme aux exigences VTC ?",
            answer: "Non : les critères sont cumulatifs. La puissance (70 kW < 84 kW) suffit à le disqualifier, même si les dimensions sont bonnes.",
            reasoning: "L'arrêté du 26 mars 2015 impose des conditions CUMULATIVES pour les véhicules thermiques : 4 portes ET longueur ≥ 4,50 m ET largeur ≥ 1,70 m ET puissance ≥ 84 kW. Il ne suffit pas d'en respecter une partie. Seule une motorisation hybride ou électrique aurait dispensé ce véhicule de ces critères. À noter : ces critères ne s'appliquent pas au taxi, qui suit d'autres règles locales."
          }
        ],
        fieldExample: "Une Tesla Model 3 électrique de 2018 reste exploitable en VTC en 2026 (dispense hybride/électrique). Une berline thermique de 2018 ne l'est plus (limite 7 ans dépassée).",
        examWarning: "Les critères VTC (portes, dimensions, puissance) sont CUMULATIFS : un seul manquant disqualifie. Et la dispense hybride/électrique couvre TOUT, y compris l'âge.",
        confusionPoints: [
          "Thermique < 7 ans ≠ hybride/électrique : dispensé (pas de limite d'âge)",
          "Critères cumulatifs (ET) ≠ critères alternatifs (OU) — piège classique"
        ],
        tips: [
          "Mémo : hybride/électrique = dispense totale (âge, gabarit, puissance)",
          "Avant d'acheter : vérifier portes, longueur, largeur ET puissance sur la carte grise"
        ],
        legalRefs: ["Article L3120-5 du Code des transports", "Article R3122-11 du Code des transports", "Arrêté du 26 mars 2015 (caractéristiques VTC)"]
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
      },
      {
        id: 'fra-orthographe-homophones',
        title: 'Orthographe et homophones',
        essential: "Les homophones (a/à, est/et, ou/où, ce/se, ces/ses…) se départagent par des tests de substitution simples — la méthode la plus fiable à l'examen.",
        narrative: "L'épreuve de français teste massivement les homophones : des mots qui se prononcent pareil mais s'écrivent différemment. Dans les écrits professionnels (SMS de confirmation, courriels, factures), une confusion a/à ou est/et décrédibilise immédiatement le conducteur auprès d'une clientèle d'affaires. La bonne nouvelle : chaque paire se résout par un test de substitution mécanique, qui fonctionne aussi sous stress d'examen.\n\nLes tests à connaître par cœur. A / À : remplacer par « avait » — si la phrase reste correcte, c'est « a » (verbe avoir) ; sinon c'est « à » (préposition). EST / ET : remplacer par « était » — si ça fonctionne, c'est « est » (verbe être) ; sinon « et » (qu'on peut remplacer par « et puis »). OU / OÙ : « ou » se remplace par « ou bien » (choix) ; « où » indique un lieu ou un moment. ON / ONT : remplacer par « il » (→ on) ou « avaient » (→ ont). SON / SONT : « son » = le sien (possessif) ; « sont » = étaient (verbe être).\n\nLes paires plus subtiles. CE / SE : « ce » accompagne un nom ou introduit « ce que/ce qui » ; « se » précède toujours un verbe pronominal (se garer, se tromper). CES / SES : « ces » montre (démonstratif : ces valises-là) ; « ses » indique la possession (ses valises à lui). LEUR / LEURS : devant un verbe, « leur » est un pronom invariable (je leur parle) ; devant un nom, il s'accorde (leurs bagages). Enfin, -ER / -É en fin de verbe : remplacer par « vendre / vendu » — « il faut confirmer » (vendre → -er) mais « la course est confirmée » (vendue → -é).",
        keyPoints: [
          "a = « avait » (verbe) / à = préposition",
          "est = « était » / et = « et puis »",
          "ou = « ou bien » (choix) / où = lieu (accent)",
          "ce + nom / se + verbe — ces = on montre / ses = possession",
          "-er ou -é : test « vendre / vendu »"
        ],
        fieldExample: "SMS au client : « Je suis arrivé à l'adresse indiquée et je vous attends » — chaque homophone vérifié en une seconde par substitution.",
        practicalCases: [
          {
            situation: "Le conducteur rédige un SMS : « Le client (a/à) réglé sa course (a/à) l'arrivée. »",
            question: "Quelles formes choisir ?",
            answer: "« Le client A réglé sa course À l'arrivée. » Premier mot : « avait réglé » fonctionne → « a ». Second : « avait l'arrivée » ne veut rien dire → « à ».",
            reasoning: "Le test de substitution par « avait » est infaillible : il isole le verbe avoir de la préposition. C'est LA méthode à appliquer systématiquement à l'examen plutôt que de se fier à l'intuition, qui échoue sous stress ou en relecture rapide."
          },
          {
            situation: "Dans un courriel : « Les clients ont laissé (leur/leurs) bagages dans le coffre, je (leur/leurs) rapporte demain. »",
            question: "Quelles formes choisir ?",
            answer: "« …laissé LEURS bagages… je LEUR rapporte… » Devant le nom pluriel « bagages », le déterminant s'accorde ; devant le verbe « rapporte », le pronom « leur » est invariable.",
            reasoning: "La règle tient en une ligne : « leur » devant un verbe ne prend JAMAIS de s (pronom personnel invariable) ; devant un nom, il s'accorde en nombre avec ce nom. Confondre les deux est l'une des fautes les plus fréquentes des écrits professionnels."
          }
        ],
        examWarning: "Ne jamais répondre à l'intuition : appliquer le test de substitution à chaque homophone, même quand la réponse « semble » évidente.",
        confusionPoints: [
          "leur (pronom, invariable devant verbe) ≠ leurs (déterminant, s'accorde devant nom)",
          "c'est (= cela est) ≠ s'est (verbe pronominal : il s'est trompé)"
        ],
        tips: [
          "Relire ses SMS/courriels à voix haute avant envoi : l'oreille détecte ce que l'œil rate",
          "Mémo : à, où = accents = petits mots invariables (préposition, lieu)"
        ],
        legalRefs: []
      },
      {
        id: 'fra-accords-conjugaison',
        title: 'Accords et conjugaison',
        essential: "Participe passé : avec ÊTRE, accord avec le sujet ; avec AVOIR, accord uniquement si le COD est placé AVANT le verbe.",
        narrative: "Après les homophones, l'accord du participe passé est le deuxième grand terrain de jeu de l'épreuve de français. La règle centrale tient en deux temps. Avec l'auxiliaire ÊTRE, le participe s'accorde avec le sujet : « Les clientes sont arrivées », « Nous sommes partis à 8h ». Avec l'auxiliaire AVOIR, le participe ne s'accorde JAMAIS avec le sujet — il s'accorde seulement avec le complément d'objet direct (COD) si celui-ci est placé AVANT le verbe : « J'ai effectué les courses » (COD après : pas d'accord) mais « les courses que j'ai effectuéES » (le COD « que » = les courses, placé avant : accord).\n\nL'accord sujet-verbe réserve aussi ses pièges. Quand le sujet est inversé (« Dans le coffre se trouvent les valises »), le verbe s'accorde avec le vrai sujet (les valises), pas avec ce qui précède. Un sujet collectif (« la majorité des clients ») accepte souvent le singulier comme le pluriel, mais deux sujets reliés par « et » imposent le pluriel. Attention aux verbes éloignés de leur sujet par une longue incise : toujours retrouver QUI fait l'action avant d'accorder.\n\nCôté conjugaison, trois emplois professionnels à maîtriser. Le CONDITIONNEL DE POLITESSE adoucit une demande : « Je souhaiterais confirmer votre réservation », « Pourriez-vous préciser l'adresse ? ». Le FUTUR engage avec courtoisie : « Nous arriverons vers 15 h ». Et la formule « VEUILLEZ » (impératif de vouloir) reste la plus sûre pour les courriels : « Veuillez trouver ci-joint votre facture ». À noter : « ci-joint » placé avant le nom est invariable (« ci-joint la facture »), mais s'accorde après le nom (« la facture ci-jointe »).",
        keyPoints: [
          "ÊTRE → accord avec le sujet (elles sont arrivées)",
          "AVOIR → accord avec le COD seulement s'il est AVANT le verbe",
          "Sujet inversé : accorder avec le vrai sujet, pas le mot d'avant",
          "Conditionnel de politesse : « je souhaiterais », « pourriez-vous »",
          "« Veuillez trouver ci-joint » : formule sûre des courriels pro"
        ],
        fieldExample: "Facture par courriel : « Veuillez trouver ci-joint la facture des courses que nous avons effectuées ce mois-ci. »",
        practicalCases: [
          {
            situation: "Le conducteur écrit : « Voici les factures que j'ai (envoyé/envoyées) hier. »",
            question: "Quelle forme choisir ?",
            answer: "« …que j'ai envoyéES ». Le COD (« que » = les factures) est placé avant le verbe : le participe s'accorde au féminin pluriel.",
            reasoning: "Avec l'auxiliaire avoir, on cherche le COD et sa position. Ici « que » reprend « les factures » et précède « ai envoyé » : accord obligatoire. À l'inverse, « j'ai envoyé les factures » (COD après) ne s'accorde pas. Ce mécanisme est LE grand classique de l'épreuve."
          },
          {
            situation: "Pour demander un délai de paiement à un client d'entreprise, le conducteur hésite entre : « Je veux être payé sous 8 jours » et une formule plus adaptée.",
            question: "Quelle formulation professionnelle choisir ?",
            answer: "« Je vous serais reconnaissant de bien vouloir régler la facture sous 8 jours » — conditionnel de politesse + formule indirecte.",
            reasoning: "« Je veux » est perçu comme une exigence brutale dans un écrit commercial. Le conditionnel (« serais ») et la construction indirecte préservent la relation tout en formulant la même demande. La courtoisie écrite est explicitement évaluée à l'examen comme sur le terrain B2B."
          }
        ],
        examWarning: "Avec AVOIR, ne JAMAIS accorder avec le sujet — c'est le réflexe erroné le plus répandu. Chercher le COD et sa position.",
        confusionPoints: [
          "être = accord sujet ≠ avoir = accord COD avant",
          "ci-joint avant le nom (invariable) ≠ après le nom (accordé)"
        ],
        tips: [
          "Réflexe avoir : poser la question « j'ai envoyé QUOI ? » et regarder où se trouve la réponse",
          "En cas de doute dans un courriel : reformuler pour placer le COD après le verbe"
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
        narrative: "L'aéroport représente une part substantielle du chiffre d'affaires T3P (forfaits CDG/Orly, navettes d'entreprises). Maîtriser le vocabulaire aéroportuaire anglais est donc un atout commercial direct. Une erreur de terminal à CDG (3 terminaux, dont le Terminal 2 divisé en 7 halls : 2A à 2G) peut faire perdre 20 minutes au client et lui faire rater son vol.\n\nLe vocabulaire critique se concentre sur le parcours du voyageur : check-in (enregistrement, généralement 2-3 h avant le vol), security (contrôle de sécurité), gate (porte d'embarquement, attribuée 30-60 min avant), boarding (embarquement), boarding pass (carte d'embarquement). Attention : check-in ≠ check-out. Check-out désigne le départ d'un hôtel (on libère la chambre), pas l'arrivée à l'aéroport. Cette confusion est extrêmement fréquente chez les conducteurs francophones.\n\nPour les bagages : carry-on / hand luggage (bagage cabine, généralement 8-10 kg), checked baggage (bagage en soute, à enregistrer), luggage / suitcase (valise), oversized luggage (bagage hors gabarit). Pour les types de vols : domestic flight (vol intérieur, généralement Terminal 2F à CDG), international flight (vol international), connecting flight (vol en correspondance). Toujours demander : « Which airline are you flying with? » et « Which terminal? » — ces deux informations conditionnent le point de dépose exact.",
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
        narrative: "L'inscription au registre VTC est l'acte de naissance administratif de l'activité. Sans elle, ni la carte professionnelle ni le véhicule ne suffisent : le conducteur exerce illégalement, même s'il pense être « en règle » avec ses autres documents. Cette inscription, gérée par les préfectures (en Île-de-France : la DRIEAT — Direction Régionale et Interdépartementale de l'Environnement, de l'Aménagement et des Transports), valide trois éléments simultanément : l'exploitant (entreprise), le véhicule, et le conducteur.\n\nLe véhicule thermique doit respecter des conditions techniques CUMULATIVES (arrêté du 26 mars 2015) : au moins 4 portes, longueur ≥ 4,50 m, largeur ≥ 1,70 m ET puissance ≥ 84 kW (114 ch). Tous les critères doivent être remplis — en pratique, les véhicules de gamme moyenne supérieure (Mercedes Classe E, BMW Série 5, Audi A6) les respectent largement, et les hybrides/électriques en sont totalement dispensés (art. L.3120-5). Le véhicule thermique doit aussi être âgé de moins de 7 ans. L'assurance professionnelle « transport de personnes à titre onéreux » est obligatoire — une assurance personnelle classique ne couvre rien.\n\nUne fois inscrit, le véhicule reçoit deux vignettes d'identification numérotées (arrêté du 6 avril 2017) : l'une à l'AVANT, dans l'angle inférieur gauche du pare-brise, l'autre à l'ARRIÈRE, dans l'angle inférieur droit de la lunette arrière. L'attestation d'inscription papier doit être présente à bord, présentable à tout contrôle (police, gendarmerie, DGCCRF). L'inscription est valable 5 ans et doit être renouvelée. Tout changement (nouveau véhicule, nouvelle adresse) doit être déclaré sous 1 mois.",
        keyPoints: [
          "Registre tenu par la préfecture ou DRIEAT (Île-de-France)",
          "Véhicule thermique : 4 portes + ≥ 4,50 m + ≥ 1,70 m + ≥ 84 kW (critères cumulatifs)",
          "Thermique de moins de 7 ans / hybride-électrique dispensé (L.3120-5)",
          "Deux vignettes : avant (angle inférieur gauche du pare-brise) + arrière (angle inférieur droit de la lunette)",
          "Attestation d'inscription à bord obligatoire"
        ],
        fieldExample: "Le VTC appose sa vignette avant dans l'angle inférieur gauche du pare-brise et la seconde sur la lunette arrière.",
        practicalCases: [
          {
            situation: "Un conducteur possède sa carte professionnelle VTC depuis 6 mois. Il vient d'acheter une Renault Mégane thermique (longueur 4,36 m, largeur 1,81 m, puissance 84 kW).",
            question: "Ce véhicule est-il éligible au registre VTC ?",
            answer: "Non. Les critères sont cumulatifs et la longueur de 4,36 m est insuffisante (< 4,50 m), même si la largeur et la puissance sont conformes.",
            reasoning: "L'arrêté du 26 mars 2015 impose des critères CUMULATIFS (« ET ») pour les véhicules thermiques : 4 portes, longueur ≥ 4,50 m, largeur ≥ 1,70 m et puissance ≥ 84 kW. Un seul critère manquant bloque l'inscription. En revanche, la même Mégane en version hybride rechargeable serait éligible : les hybrides et électriques sont dispensés de ces caractéristiques (art. L.3120-5)."
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
      },
      {
        id: 'vtc-acces-profession',
        title: 'Carte professionnelle VTC',
        essential: "Permis B depuis au moins 3 ans (2 ans si conduite accompagnée), examen CMA, aptitude médicale, honorabilité. Carte valable 5 ans, formation continue de 14 h pour renouveler.",
        narrative: "L'accès à la profession de conducteur VTC est conditionné par la carte professionnelle, délivrée par le préfet. Quatre conditions CUMULATIVES : être titulaire du permis B depuis au moins 3 ans (ramené à 2 ans si le permis a été obtenu en conduite accompagnée), justifier de son aptitude physique par une visite médicale auprès d'un médecin agréé, satisfaire à la condition d'honorabilité (bulletin n°2 du casier judiciaire compatible — certaines condamnations sont éliminatoires), et réussir l'examen organisé par les chambres de métiers et de l'artisanat (CMA).\n\nL'examen comporte deux phases : l'ADMISSIBILITÉ (épreuves théoriques : réglementation T3P, gestion, sécurité routière, français, anglais, plus l'épreuve spécifique VTC) puis l'ADMISSION (épreuve pratique de conduite en situation professionnelle). Il existe une voie d'ÉQUIVALENCE : justifier d'une expérience professionnelle d'au moins un an dans le transport de personnes au cours des dix dernières années dispense de l'examen.\n\nLa carte est valable 5 ans. Son renouvellement n'est PAS automatique : il exige une formation continue de 14 heures dans un centre agréé. En exercice, la carte doit être apposée de manière visible dans le véhicule (pare-brise) et présentée à toute réquisition. Exercer sans carte professionnelle est un DÉLIT : 1 an d'emprisonnement et 15 000 € d'amende (art. L.3124-4 du Code des transports), avec peines complémentaires possibles (suspension du permis, confiscation du véhicule).",
        keyPoints: [
          "Permis B ≥ 3 ans (2 ans si conduite accompagnée)",
          "Examen CMA : admissibilité (théorie) puis admission (pratique)",
          "Équivalence : 1 an d'expérience de transport de personnes dans les 10 dernières années",
          "Carte : 5 ans, renouvelée après formation continue de 14 h",
          "Sans carte = délit : 1 an + 15 000 € (L.3124-4)"
        ],
        fieldExample: "Le conducteur appose sa carte pro sur le pare-brise avant chaque service : visible du client et des contrôleurs.",
        practicalCases: [
          {
            situation: "Lisa a obtenu son permis B il y a 2 ans et demi, par la filière classique (pas de conduite accompagnée). Elle veut s'inscrire à l'examen VTC.",
            question: "Peut-elle obtenir sa carte professionnelle ?",
            answer: "Pas encore. Il lui faut 3 ans de permis B (la réduction à 2 ans est réservée à la conduite accompagnée). Elle doit attendre 6 mois.",
            reasoning: "L'ancienneté du permis est une condition d'expérience de conduite non négociable, identique pour taxi et VTC. Elle peut toutefois mettre à profit l'attente : préparer l'examen théorique, monter son dossier d'entreprise, choisir son véhicule — l'inscription à l'examen peut précéder de peu l'échéance des 3 ans."
          },
          {
            situation: "Un conducteur VTC exerce depuis 4 ans et demi. Sa carte expire dans 6 mois et il n'a pas encore suivi de formation continue.",
            question: "Que doit-il faire pour continuer à exercer ?",
            answer: "S'inscrire sans tarder à la formation continue de 14 h dans un centre agréé : sans elle, la carte ne sera pas renouvelée et il devra cesser l'activité à l'échéance.",
            reasoning: "Le renouvellement n'est jamais automatique. La formation continue (réglementation, sécurité, gestion) conditionne la nouvelle carte de 5 ans. Anticiper d'au moins 3 mois évite la rupture d'activité — une carte expirée = exercice illégal dès le premier jour, avec les sanctions du travail sans carte."
          }
        ],
        examWarning: "Carte pro (aptitude du CONDUCTEUR) ≠ inscription au registre (obligation de l'EXPLOITANT) : les deux sont nécessaires et distinctes.",
        confusionPoints: [
          "Examen CMA (accès à la profession) ≠ formation continue 14 h (renouvellement)",
          "Permis 3 ans (classique) ≠ 2 ans (conduite accompagnée)"
        ],
        tips: [
          "Mémo : « 3 ans de permis, 5 ans de carte, 14 h pour renouveler »",
          "Programmer un rappel 6 mois avant l'expiration de la carte"
        ],
        legalRefs: ["Article R3120-6 du Code des transports", "Article L3124-4 du Code des transports (exercice sans carte)"]
      },
      {
        id: 'vtc-assurance-documents',
        title: 'Assurance et documents à bord',
        essential: "Assurance RC professionnelle « transport de personnes à titre onéreux » obligatoire — l'assurance personnelle ne couvre RIEN en course. À bord : carte pro, attestation registre, assurance, justificatif de réservation.",
        narrative: "L'assurance est le point aveugle des conducteurs débutants. Un contrat auto personnel, même « tous risques », EXCLUT l'usage professionnel : transporter un client à titre onéreux sans responsabilité civile professionnelle « transport de personnes », c'est rouler SANS assurance au sens de la loi. En cas d'accident en course, l'assureur refuse sa garantie : le conducteur paie de sa poche les dommages du véhicule, l'indemnisation du client blessé et celle des tiers — des sommes qui peuvent dépasser plusieurs centaines de milliers d'euros. Le défaut d'assurance est par ailleurs sanctionné de 3 750 € d'amende et d'une suspension de permis (art. L324-2 du Code de la route).\n\nLe VTC en exercice doit pouvoir présenter à tout contrôle (police, gendarmerie, DGCCRF) un ensemble de documents : la carte professionnelle (apposée de manière visible), l'attestation d'inscription au registre VTC en cours de validité, l'attestation d'assurance RC professionnelle, le certificat d'immatriculation, le permis de conduire, et le JUSTIFICATIF DE RÉSERVATION PRÉALABLE de la course en cours — horodaté, sur support papier ou électronique. Sans ce dernier, le conducteur est présumé en maraude illégale.\n\nL'organisation matérielle fait le professionnel : une pochette véhicule avec les originaux (ou copies conformes), des versions numériques sur smartphone en secours, et la conservation de l'historique de réservations (l'application de la plateforme y pourvoit, mais un export régulier protège en cas de litige ou de déréférencement). Après chaque changement (véhicule, assureur, adresse), mettre à jour le registre sous 1 mois et remplacer les attestations à bord.",
        keyPoints: [
          "RC pro « transport de personnes à titre onéreux » obligatoire",
          "Assurance personnelle en course = défaut d'assurance (3 750 € + suspension)",
          "À bord : carte pro, attestation registre, assurance, carte grise, permis",
          "Justificatif de réservation horodaté : papier ou électronique",
          "Sans justificatif = présomption de maraude illégale"
        ],
        fieldExample: "Contrôle devant un hôtel : le conducteur présente sa carte pro, son attestation registre et la réservation horodatée de l'application — contrôle réglé en 3 minutes.",
        practicalCases: [
          {
            situation: "Un conducteur débute en VTC avec sa voiture personnelle, assurée « tous risques » à son nom. Il se dit qu'il régularisera l'assurance pro plus tard. Un client se blesse lors d'un freinage d'urgence.",
            question: "Qui indemnise le client ?",
            answer: "Personne d'autre que le conducteur lui-même : l'assureur refusera sa garantie (usage professionnel non déclaré). Il devra indemniser le client sur ses fonds propres et s'expose aux sanctions du défaut d'assurance.",
            reasoning: "L'usage « transport de personnes à titre onéreux » doit être expressément couvert par le contrat. Le sinistre en course avec une assurance personnelle = exclusion de garantie + fausse déclaration de risque. La RC pro est un préalable ABSOLU au premier client, pas une régularisation différée."
          },
          {
            situation: "Lors d'un contrôle, un VTC présente tous ses documents mais l'application de réservation ne charge pas (panne réseau) : impossible d'afficher le justificatif de la course en cours.",
            question: "Que risque-t-il et comment s'en prémunir ?",
            answer: "Présomption de maraude : verbalisation possible, à charge pour lui de prouver la réservation ensuite. Prévention : capture d'écran systématique de chaque course acceptée avant de démarrer.",
            reasoning: "La charge de la preuve de la réservation préalable pèse sur le conducteur, au moment du contrôle. Une capture d'écran horodatée (ou un SMS de confirmation) stockée hors ligne constitue un justificatif présentable même sans réseau. Réflexe simple qui évite une procédure longue et une immobilisation."
          }
        ],
        examWarning: "« Tous risques » personnel ≠ assurance professionnelle : en course, seule la RC pro transport de personnes couvre. Piège récurrent de l'examen.",
        confusionPoints: [
          "Attestation d'assurance (souscription) ≠ garantie acquise (respect des conditions d'exercice légal)",
          "Justificatif de réservation (course en cours) ≠ historique de réservations (conservation)"
        ],
        tips: [
          "Copies numériques de tous les documents sur smartphone + originaux dans la pochette véhicule",
          "Capture d'écran de chaque réservation avant de démarrer la course"
        ],
        legalRefs: ["Article L324-2 du Code de la route (défaut d'assurance)", "Article L3122-9 du Code des transports (réservation préalable)"]
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
        essential: "ADS = Autorisation de Stationnement. Incessible pour les nouvelles depuis 2014 (loi Thévenoud).",
        narrative: "L'Autorisation De Stationnement (ADS), couramment appelée « licence taxi », est le droit administratif d'exploiter un véhicule comme taxi sur le territoire d'une commune. À Paris, environ 18 000 ADS sont en circulation (≈ 18 500 selon la Préfecture de Police), plafond fixé par arrêté préfectoral. C'est ce numerus clausus qui donne sa valeur (parfois > 100 000 €) à l'ADS sur le marché secondaire — ou plutôt qui le donnait, avant la réforme.\n\nLa loi Thévenoud du 1er octobre 2014 a opéré une révolution discrète mais profonde : les ADS DÉLIVRÉES APRÈS le 1er octobre 2014 sont INCESSIBLES. Elles sont attribuées gratuitement par la préfecture, à titre personnel et incessible, sur liste d'attente (plusieurs années à Paris). Le titulaire ne peut ni les vendre, ni les louer, ni les transmettre. À son départ (retraite, abandon), elles retournent à l'autorité administrative pour redistribution.\n\nLes ADS ANCIENNES (délivrées avant le 1er octobre 2014) restent cessibles, mais sous conditions : exploitation effective pendant au moins 5 ans avant la première cession, puis 15 ans pour les cessions suivantes. Cette double règle vise à éliminer progressivement la spéculation. À côté de l'ADS, le conducteur doit aussi détenir une carte professionnelle (aptitude à conduire un taxi). Les deux documents sont distincts : l'ADS est le droit du véhicule à exercer, la carte pro est l'aptitude du conducteur. Un même conducteur peut conduire plusieurs ADS différentes (locataire-gérant), et inversement une ADS peut être conduite par plusieurs conducteurs (doublage, équipes).",
        keyPoints: [
          "ADS ≠ carte pro : les deux sont obligatoires",
          "Délivrée par le préfet de police de Paris",
          "~18 000 taxis parisiens (numerus clausus, ≈ 18 500)",
          "ADS post-2014 : incessibles, gratuites, liste d'attente",
          "ADS pré-2014 : cessibles sous conditions (5 ou 15 ans d'exploitation)"
        ],
        fieldExample: "Un chauffeur veut racheter une licence : si elle date de 2012 et a été exploitée 5 ans, elle est cessible.",
        practicalCases: [
          {
            situation: "Un conducteur, titulaire d'une ADS attribuée en mars 2018, souhaite la revendre 80 000 € à un confrère.",
            question: "L'opération est-elle légale ?",
            answer: "Non. Les ADS délivrées après le 1er octobre 2014 sont strictement incessibles.",
            reasoning: "La loi Thévenoud a coupé net le marché des ADS post-2014. L'attribution étant gratuite et nominative, toute cession (vente, donation, location) est nulle. En cas de tentative, la préfecture peut retirer l'ADS et le « repreneur » se retrouve sans rien (et sans recours pour récupérer son argent versé hors cadre légal). Pour exercer, il doit s'inscrire sur la liste d'attente."
          },
          {
            situation: "Un chauffeur taxi conduit son propre véhicule équipé d'une ADS valide. Lors d'un contrôle, il présente l'ADS mais a oublié sa carte professionnelle à son domicile.",
            question: "Est-il en règle ?",
            answer: "Non. La carte professionnelle doit être présente et présentable à bord à tout moment. Sanction : amende et signalement à la préfecture.",
            reasoning: "ADS et carte pro sont deux documents distincts et CUMULATIVEMENT obligatoires. L'ADS autorise le véhicule à exercer, la carte pro atteste de l'aptitude du conducteur (examen, casier, médical). Sans carte pro physiquement présente, le conducteur exerce sans pouvoir prouver son aptitude — c'est assimilé à un exercice illégal, même temporaire."
          }
        ],
        examWarning: "ADS = droit d'exploitation ≠ carte pro = aptitude à conduire. Deux documents distincts !",
        confusionPoints: [
          "ADS = exploitation du taxi ≠ Carte pro = aptitude du conducteur",
          "ADS post-2014 incessibles ≠ ADS pré-2014 cessibles sous conditions"
        ],
        tips: [
          "Liste d'attente pour nouvelles ADS : plusieurs années à Paris",
          "Toujours avoir ADS + carte pro à bord lors d'un contrôle"
        ],
        legalRefs: ["Loi Thévenoud du 1er octobre 2014", "Articles L3121-1 et suivants du Code des transports"]
      },
      {
        id: 'tx75-zones-maraude',
        title: 'Zones et maraude',
        essential: "Maraude = réservée aux taxis. Le client peut choisir n'importe quel taxi dans la file.",
        narrative: "La maraude est le privilège historique du taxi : la possibilité de chercher et de prendre en charge des clients en circulant sur la voie publique ou en stationnant sur des emplacements réservés. C'est ce privilège qui justifie le numerus clausus et la valeur de l'ADS. Aucun VTC, aucun VMDTR ne peut faire de maraude — sous peine de sanctions pénales lourdes.\n\nL'ADS taxi parisien autorise la maraude sur le territoire de la Ville de Paris et des communes limitrophes (petite couronne). Concrètement, un taxi parisien peut prendre un client à Paris pour l'emmener à Boulogne-Billancourt, mais ne peut pas reprendre un client à Boulogne pour le déposer ailleurs en banlieue : il doit revenir à vide ou attendre une réservation. Cette règle protège les ADS des communes voisines (Levallois, Neuilly, etc.).\n\nDans les stations de taxis, la règle est « premier arrivé, premier servi » : les taxis font la queue dans l'ordre d'arrivée. MAIS — et c'est un point d'examen fréquent — le client a le DROIT de choisir n'importe quel taxi de la file, pas obligatoirement le premier. Un client peut passer devant 3 taxis pour monter dans le 4ème (par exemple pour un véhicule plus spacieux ou plus accessible). Le conducteur ne peut pas le refuser pour cette raison. À l'inverse, le conducteur a une obligation de transport : il ne peut refuser une destination que pour un motif légitime (fin de service déclarée, sécurité, animal dangereux non autorisé).",
        keyPoints: [
          "Maraude = chercher des clients en circulant ou en stationnant",
          "Zone autorisée : Paris + communes limitrophes",
          "Stations : file d'attente, 1er arrivé = 1er servi (côté taxi)",
          "MAIS le client peut choisir n'importe quel taxi de la file",
          "Refus de course = uniquement motif légitime"
        ],
        fieldExample: "Un client passe devant 3 taxis et monte dans le 4ème : c'est son droit.",
        practicalCases: [
          {
            situation: "À la station de la gare de Lyon, 5 taxis font la queue. Un client arrive, passe devant les 4 premiers et monte dans le 5ème. Le premier taxi proteste et veut empêcher le départ.",
            question: "Qui a raison ?",
            answer: "Le client a raison. Il a le droit légal de choisir n'importe quel taxi de la file.",
            reasoning: "La règle « 1er arrivé, 1er servi » s'applique entre taxis (ordre de la file) mais ne lie pas le client. Le client est libre de son choix : préférence pour le modèle, la couleur, l'accessibilité, voire pour le conducteur. Le premier taxi qui refuse le départ ou tente d'imposer son tour s'expose à une plainte et un signalement à la préfecture. Cette règle est régulièrement testée à l'examen."
          },
          {
            situation: "Un taxi parisien dépose un client à Versailles. À la sortie, un autre client lui demande de l'emmener à Antony.",
            question: "Peut-il accepter cette course ?",
            answer: "Non. Sa zone de maraude est Paris et la petite couronne. Versailles est en grande couronne — il doit revenir à vide ou avoir une réservation.",
            reasoning: "L'ADS taxi parisien autorise la maraude uniquement sur sa zone d'attribution (Paris et certaines communes limitrophes selon arrêté). Prendre un client en maraude à Versailles serait empiéter sur la zone des taxis versaillais — c'est une infraction. En revanche, s'il avait une réservation préalable (téléphone, application taxi), la course serait légale partout."
          }
        ],
        examWarning: "Le client a le droit de choisir son taxi dans la file (pas obligé de prendre le premier).",
        tips: [
          "Refuser une destination lointaine est interdit (sauf fin de service)",
          "Connaître précisément sa zone d'attribution (arrêté préfectoral)"
        ],
        legalRefs: ["Arrêté préfectoral taxis parisiens", "Article L3121-11 du Code des transports"]
      },
      {
        id: 'tx75-taximetre-tarifs',
        title: 'Tarifs 2026',
        essential: "4 tarifs (A, B, C, D). Forfaits aéroports 2026 : CDG 56 €/65 €, Orly 45 €/36 €.",
        narrative: "Les tarifs du taxi parisien sont RÉGLEMENTÉS par arrêté préfectoral, contrairement aux VTC. Ils sont révisés chaque année et entrent en vigueur le 1er février (sauf exception). Pour 2026, l'arrêté du 24 décembre 2025 a fixé les nouveaux tarifs. La structure repose sur 4 lettres (A, B, C, D) qui correspondent chacune à une combinaison zone × horaire.\n\nLE TARIF A est le moins cher : Paris intra-muros, en JOUR (10h-17h), en SEMAINE (lundi-samedi hors jours fériés). C'est le tarif standard de la journée ouvrée. LE TARIF B s'applique soit à Paris la nuit (17h-10h) et dimanches/fériés, soit à la banlieue (petite couronne) en jour. LE TARIF C couvre la banlieue de nuit/dimanche/fériés, ainsi que les retours à vide. LE TARIF D est le plus cher, dédié aux zones aéroportuaires et aux longues distances spécifiques. Le taximètre bascule automatiquement entre ces tarifs selon l'horaire et la position GPS — le chauffeur n'intervient pas.\n\nLes FORFAITS AÉROPORTS sont distincts et obligatoires pour les liaisons Paris ↔ CDG/Orly. Pour 2026 : Paris RIVE DROITE ↔ CDG = 56 € ; Paris RIVE GAUCHE ↔ CDG = 65 € (plus cher car distance plus longue depuis la rive gauche, paradoxalement). Paris RIVE DROITE ↔ Orly = 45 € ; Paris RIVE GAUCHE ↔ Orly = 36 € (moins cher, car Orly est au sud, donc plus proche de la rive gauche). Ces forfaits s'appliquent quelle que soit la durée réelle du trajet (embouteillages inclus) et ne sont pas négociables. Pièges classiques : ils ne s'appliquent pas si le client demande un détour, et ils ne couvrent pas les communes hors Paris.",
        keyPoints: [
          "A = Paris jour semaine (10h-17h) = le moins cher",
          "B = Paris nuit/dimanche OU banlieue jour",
          "C = Banlieue nuit/dimanche + retour à vide",
          "D = Zone aéroport et longue distance (le plus cher)",
          "Forfaits aéroports : appliqués automatiquement, non négociables"
        ],
        fieldExample: "Course Paris Gare du Nord → CDG : forfait rive droite 56 € (tarifs 2026).",
        practicalCases: [
          {
            situation: "Un client part de l'hôtel Lutetia (75006, rive gauche) à 22h30 un mardi pour aller à l'aéroport de Roissy-CDG.",
            question: "Quel tarif s'applique ?",
            answer: "Le forfait aéroport rive gauche → CDG : 65 € (tarif 2026).",
            reasoning: "Les forfaits aéroport s'appliquent sur la liaison Paris ↔ CDG/Orly indépendamment de l'heure. Le départ étant rive gauche (6ème arrondissement), le forfait est de 65 €. Le taximètre ne tourne pas en mode classique : le forfait est annoncé et le compteur affiche directement ce montant. L'heure tardive n'augmente pas le prix (forfait inclus)."
          },
          {
            situation: "Un client demande un détour de 15 minutes par les Champs-Élysées pour prendre des photos, sur un trajet Paris → CDG.",
            question: "Le forfait s'applique-t-il toujours ?",
            answer: "Non. Tout détour à la demande du client annule le forfait. Le taximètre passe au tarif kilométrique standard.",
            reasoning: "Le forfait aéroport est conçu pour le trajet direct Paris ↔ aéroport. Un détour de convenance (touristique, arrêt courses) le dénature : le conducteur passe en taximètre classique. Le client doit être informé AVANT le détour que le prix risque d'être supérieur au forfait. Cette information préalable évite le litige à l'arrivée."
          }
        ],
        examWarning: "Forfaits 2026 : CDG rive droite 56 €, rive gauche 65 € / Orly rive droite 45 €, rive gauche 36 €.",
        confusionPoints: [
          "Rive droite CDG = 56 € ≠ Rive gauche CDG = 65 €",
          "Rive droite Orly = 45 € ≠ Rive gauche Orly = 36 € (inversé)"
        ],
        tips: [
          "Le forfait s'applique quelle que soit la durée effective",
          "Informer le client si détour = sortie du forfait"
        ],
        legalRefs: ["Arrêté du 24 décembre 2025 (tarifs 2026)"]
      },
      {
        id: 'tx75-supplements',
        title: 'Suppléments autorisés',
        essential: "Trois suppléments seulement : réservation immédiate 4 €, réservation à l'avance 7 €, passager à partir du 5ème 5,50 €. Bagages : GRATUITS. Chien guide = transport gratuit.",
        narrative: "Les suppléments sont strictement encadrés par l'arrêté tarifaire annuel. Le conducteur ne peut PAS inventer de supplément ni en majorer le montant : la liste est limitative. Tout supplément non prévu est constitutif d'une majoration illégale, sanctionnée par une amende et un signalement préfectoral.\n\nPour les taxis parisiens, trois suppléments seulement sont autorisés (tarifs 2026) : (1) la réservation immédiate — 4 € ; (2) la réservation à l'avance — 7 € ; (3) le supplément passager — 5,50 € à partir de la 5ème personne transportée. C'est tout. Les BAGAGES ne donnent plus lieu à AUCUN supplément : valises, sacs et poussettes sont inclus dans le prix de la course. Il n'existe pas non plus de supplément « animal » dans la grille parisienne — l'ancien régime (4ème passager, bagages volumineux, animaux) a été supprimé et reste un piège classique de QCM périmé.\n\nEXCEPTION FONDAMENTALE : les chiens guides d'aveugle et chiens d'assistance pour personnes handicapées sont transportés GRATUITEMENT et OBLIGATOIREMENT. Refuser leur transport est une discrimination réprimée par la loi (article L3121-8 du Code des transports), sanctionnée pénalement. De même, refuser un client en fauteuil roulant ou avec assistance technique est illégal. À l'inverse, sont strictement INTERDITS : le pourboire « obligatoire », l'arrondi systématique à la hausse, la majoration pour paiement carte, la surfacturation pour clientèle étrangère (discrimination tarifaire).",
        keyPoints: [
          "Réservation : 4 € (immédiate), 7 € (à l'avance)",
          "Passagers : 5,50 € à partir de la 5ème personne transportée",
          "Bagages : AUCUN supplément (transport inclus dans le prix)",
          "Chien guide / d'assistance = transport gratuit obligatoire",
          "Suppléments interdits : pourboire forcé, majoration carte, refus d'espèces"
        ],
        fieldExample: "Un client avec 3 grandes valises : aucun supplément bagages ne peut être facturé, le transport des bagages est inclus.",
        practicalCases: [
          {
            situation: "Une personne aveugle accompagnée de son chien guide hèle un taxi. Le conducteur veut facturer un supplément animal de 4 €.",
            question: "Est-ce légal ?",
            answer: "Non. Les chiens guides d'aveugle sont transportés gratuitement et obligatoirement. Tout supplément est illégal.",
            reasoning: "L'article L3121-8 du Code des transports impose le transport gratuit des chiens guides et chiens d'assistance. Refuser ou facturer = discrimination liée au handicap, punie pénalement (article 225-2 du Code pénal : jusqu'à 3 ans d'emprisonnement et 45 000 € d'amende), sans compter la suspension administrative de l'ADS. Le conducteur doit accepter sans frais et sans question."
          },
          {
            situation: "Une famille de 4 adultes + 2 enfants monte dans un taxi-monospace homologué 6 places passagers, avec 4 valises. Le conducteur veut facturer un supplément par valise et par passager au-delà du 3ème.",
            question: "Que peut-il facturer ?",
            answer: "Uniquement le supplément passager de 5,50 € à partir de la 5ème personne transportée. Les bagages sont gratuits et les 4 premiers passagers n'entraînent aucun supplément.",
            reasoning: "La grille parisienne 2026 (arrêté du 24 décembre 2025) ne prévoit que trois suppléments : réservation immédiate (4 €), réservation à l'avance (7 €) et passager à partir du 5ème (5,50 €). Facturer les valises ou les 3ème/4ème passagers est une majoration illégale. Attention aussi à la capacité : le nombre de passagers ne doit jamais dépasser celui de la carte grise."
          }
        ],
        examWarning: "Plus AUCUN supplément bagages ni animal à Paris. Le supplément passager démarre au 5ème (pas au 4ème — ancienne règle piège).",
        confusionPoints: [
          "Supplément passager : à partir du 5ème (l'ancien « 4ème passager » a disparu)",
          "Réservation immédiate 4 € ≠ réservation à l'avance 7 €"
        ],
        tips: [
          "Toujours annoncer les suppléments AVANT la course",
          "Refus chien guide = délit pénal (pas seulement administratif)"
        ],
        legalRefs: ["Arrêté du 24 décembre 2025 (tarifs 2026)", "Article L3121-8 du Code des transports", "Article 225-2 du Code pénal"]
      },
      {
        id: 'tx75-equipements',
        title: 'Équipements obligatoires',
        essential: "Lumineux (vert = libre, rouge = occupé), taximètre scellé, TPE obligatoire pour tout montant.",
        narrative: "Un taxi parisien est immédiatement reconnaissable à ses équipements normalisés. Cette uniformisation visuelle, imposée par la préfecture, protège le client (identification facile, distinction avec les VTC) et le conducteur (preuve de légitimité, dissuasion de la concurrence déloyale). Chaque équipement obligatoire fait l'objet de contrôles techniques périodiques.\n\nLe LUMINEUX, fixé sur le toit, indique « TAXI PARISIEN » avec une lettre tarifaire visible (A, B, C, D) qui change automatiquement selon le tarif en vigueur. La couleur VERTE signifie « libre » (disponible pour une course), la couleur ROUGE signifie « occupé » ; un lumineux ÉTEINT indique que le taxi est hors service (fin de service, retour au garage). Un lumineux défectueux empêche d'exercer. Le TAXIMÈTRE doit être homologué (norme française), scellé par un installateur agréé (toute manipulation rompt le scellé et est constitutive de fraude), et vérifié annuellement (contrôle technique métrologique). Sa précision est essentielle : un taximètre dérivant en faveur du chauffeur expose à des sanctions lourdes.\n\nLe TPE (Terminal de Paiement Électronique) est OBLIGATOIRE et doit être en état de fonctionnement (article L.3121-11-2 du Code des transports, issu de la loi Thévenoud). La carte bancaire doit être acceptée pour TOUT MONTANT, sans minimum. Refuser un paiement carte pour 5 € est aussi illégal que de le refuser pour 100 €. Sanction : 150 € d'amende + signalement préfecture. De plus, le conducteur ne peut pas facturer un supplément pour paiement carte (majoration interdite). Autres équipements obligatoires : la carte affichage des tarifs visible côté passager, l'attestation d'aptitude médicale, et désormais l'application LeTaxi pour la géolocalisation (registre national).",
        keyPoints: [
          "Lumineux : 'TAXI PARISIEN' + lettre tarif",
          "Vert = libre, rouge = occupé, éteint = hors service",
          "Taximètre homologué, scellé, vérifié annuellement",
          "TPE obligatoire : carte bancaire acceptée pour TOUT montant",
          "Pas de majoration pour paiement carte"
        ],
        fieldExample: "Un client veut payer 8 € en carte : le chauffeur ne peut pas refuser.",
        practicalCases: [
          {
            situation: "Un client effectue une course de 6,80 €. À l'arrivée, il veut payer en carte. Le conducteur refuse en disant qu'il y a un minimum de 10 € en carte.",
            question: "Le conducteur est-il en règle ?",
            answer: "Non. Le refus de carte bancaire pour tout montant constitue une infraction punie de 150 € d'amende.",
            reasoning: "La loi (article L.3121-11-2 du Code des transports) impose au taxi un TPE en état de fonctionnement et l'acceptation de la carte bancaire sans aucun seuil minimum. Imposer 10 €, 5 € ou n'importe quel minimum est une pratique interdite. Le client peut signaler le refus à la préfecture (photo de plaque, course datée), ce qui déclenche une enquête et une éventuelle suspension d'ADS pour récidive."
          },
          {
            situation: "Un taxi a son lumineux 'TAXI PARISIEN' en panne (ampoule grillée). Il continue son service en attendant la réparation.",
            question: "Cette pratique est-elle légale ?",
            answer: "Non. Un lumineux non fonctionnel rend le véhicule non conforme aux conditions d'exercice. Le conducteur doit cesser l'activité jusqu'à réparation.",
            reasoning: "Le lumineux est un équipement OBLIGATOIRE qui permet l'identification du taxi par les clients et par les forces de l'ordre. Sans lumineux fonctionnel, le client ne peut pas savoir si le taxi est libre, et l'identification visuelle taxi vs voiture privée disparaît. C'est aussi une question de concurrence loyale avec les VTC. Sanction : amende et immobilisation possible du véhicule."
          }
        ],
        examWarning: "Refuser la carte bancaire = infraction (150 € d'amende + signalement préfecture).",
        tips: [
          "Vérifier quotidiennement le bon fonctionnement des équipements",
          "Un scellé taximètre rompu = présomption de fraude"
        ],
        legalRefs: ["Article L3121-11-2 du Code des transports (TPE)", "Arrêté préfectoral équipements"]
      },
      {
        id: 'tx75-obligations',
        title: 'Obligations taxi',
        essential: "Obligation de transport sauf motif légitime. Itinéraire le plus court ou rapide au choix du client.",
        narrative: "Le taxi exerce une mission de service public. Cette qualification, qui peut sembler théorique, génère des obligations très concrètes que n'a pas le VTC. La principale est l'OBLIGATION DE TRANSPORT : un taxi en service, signalé libre, ne peut pas refuser un client sans motif légitime. C'est la contrepartie du monopole de la maraude et du numerus clausus.\n\nLes motifs légitimes de refus sont strictement encadrés : fin de service déclarée et signalée (lumineux éteint), incompatibilité de sécurité (client visiblement violent, en état d'ébriété avec risque, transport d'objets dangereux), animal non autorisé hors chiens guides, ou impossibilité matérielle (taxi accidenté, panne en cours). Le refus pour motif « trop loin », « pas rentable », « mauvais quartier » est ILLÉGAL et expose à une amende + suspension. En cas de doute, le conducteur doit pouvoir justifier objectivement son refus.\n\nL'ITINÉRAIRE est également encadré. Le conducteur doit prendre soit le trajet le PLUS COURT (en distance), soit le plus RAPIDE (en temps), au choix du client. Si le client ne précise rien, le conducteur prend le trajet le plus court par défaut. Détour non justifié = surfacturation possible. Inversement, si le client demande un itinéraire particulier (panoramique, évitement d'une zone), le conducteur doit s'exécuter et le tarif suit (taximètre). L'INFORMATION TARIFAIRE est dès la prise en charge : le tarif en cours doit être annoncé ou visible (lettre A, B, C, D affichée), et un reçu doit être remis à la fin (obligatoire si demandé, automatique au-delà de 25 €).",
        keyPoints: [
          "Obligation de transport (pas de refus arbitraire)",
          "Motifs légitimes : sécurité, fin de service déclarée",
          "Itinéraire : le plus court OU le plus rapide (au choix client)",
          "Information tarif dès la prise en charge",
          "Reçu obligatoire au-delà de 25 € ou sur demande"
        ],
        fieldExample: "Un client demande d'aller à 80 km : le chauffeur ne peut pas refuser (sauf fin de service).",
        practicalCases: [
          {
            situation: "À 23h, un client demande à un taxi parisien libre une course Paris → Lille (220 km). Le conducteur refuse, prétextant que c'est trop loin et qu'il ne fera pas de retour.",
            question: "Le refus est-il légitime ?",
            answer: "Non. Le coût ou la longueur de la course n'est pas un motif légitime de refus. C'est une infraction.",
            reasoning: "L'obligation de transport vaut pour toute destination raisonnable, indépendamment du chiffre d'affaires. Le retour à vide est compensé par les tarifs (C pour banlieue nuit, D longue distance). Le conducteur peut négocier un forfait avec le client mais ne peut pas refuser. Refus = amende, signalement, voire suspension d'ADS. Seuls les motifs réellement objectifs (fin de service déclarée AVANT la sollicitation, sécurité) sont valables."
          },
          {
            situation: "Un client demande à aller de l'Opéra à Bastille. Le conducteur prend le périphérique (15 km) au lieu des grands boulevards (4 km).",
            question: "Cette pratique est-elle légale ?",
            answer: "Non, sauf si le client a explicitement demandé un trajet rapide et que le périph est plus rapide à cet instant. Sinon = surfacturation.",
            reasoning: "L'obligation est de prendre le trajet le PLUS COURT ou le plus RAPIDE selon le choix du client. Sans précision, par défaut c'est le plus court. Faire 15 km au lieu de 4 sans justification est un détour facturé indûment, assimilable à de l'escroquerie. Le client peut contester la course, demander remboursement et signaler à la préfecture. En cas de litige, le GPS de l'application LeTaxi peut être consulté."
          }
        ],
        examWarning: "Refuser une course sans motif légitime = amende + suspension possible. 'Trop loin' n'est PAS un motif légitime.",
        tips: [
          "Noter le motif en cas de refus pour justification ultérieure",
          "Si fin de service : éteindre le lumineux AVANT la sollicitation"
        ],
        legalRefs: ["Articles R3121-1 et suivants du Code des transports"]
      },
      {
        id: 'tx75-controles',
        title: 'Contrôles et sanctions',
        essential: "Refus CB : 150 €. Tarification non conforme : amende + immobilisation possible.",
        narrative: "Le taxi est l'une des professions les plus contrôlées en France. Police, gendarmerie, DGCCRF (concurrence et fraudes), DRIEAT (transports en IDF), et la Préfecture de Police elle-même peuvent intervenir, soit lors de contrôles routiers, soit sur signalement client, soit par opérations ciblées. La fréquence est telle que tout conducteur subit en moyenne 2-3 contrôles par an.\n\nLes documents systématiquement vérifiés sont : la carte professionnelle (conducteur), l'attestation d'ADS (véhicule), le certificat de visite technique du taximètre (annuel), l'attestation d'assurance professionnelle, le permis de conduire valide, et l'attestation d'aptitude médicale en cours de validité. L'absence d'un seul de ces documents peut entraîner l'immobilisation immédiate du véhicule. Tous doivent être à BORD et présentables.\n\nLes sanctions sont graduées selon la gravité. INFRACTIONS LÉGÈRES (équipement déficient mineur, oubli ponctuel) : avertissement, rappel à l'ordre, amende administrative (38 € à 150 €). INFRACTIONS MOYENNES (refus de CB, suppléments indus, défaut de TPE) : amende 150 € + signalement préfectoral, qui peut déclencher une procédure disciplinaire. INFRACTIONS GRAVES (maraude refusée, refus discrimination, surtarification volontaire, conduite sous influence) : convocation devant la commission de discipline, suspension temporaire de l'ADS (1 à 12 mois), voire retrait définitif en cas de récidive. Les infractions pénales (faux, escroquerie, agression) s'ajoutent et relèvent du juge pénal. Coopérer poliment et présenter immédiatement tous les documents évite l'aggravation.",
        keyPoints: [
          "Contrôles par Préfecture de Police, police, gendarmerie, DGCCRF",
          "Vérification : ADS, carte pro, taximètre, assurance, médical",
          "Défaut TPE ou refus CB : 150 € + signalement",
          "Comportement non pro : avertissement → suspension ADS",
          "Récidive : risque de retrait définitif d'ADS"
        ],
        fieldExample: "Un taxi refuse une carte pour 12 € : le client peut signaler à la préfecture (photo plaque + horaire).",
        practicalCases: [
          {
            situation: "Lors d'un contrôle, le conducteur présente tous ses documents sauf le certificat de visite annuelle du taximètre, qu'il a oublié au bureau.",
            question: "Que risque-t-il ?",
            answer: "Immobilisation possible du véhicule jusqu'à présentation, plus amende administrative. Le taximètre non vérifiable annuellement est présumé non conforme.",
            reasoning: "Le certificat de visite atteste de la conformité métrologique du taximètre (juste calcul des tarifs). Sans lui, impossible de garantir que le client est facturé correctement. Le conducteur doit pouvoir le présenter immédiatement. Bonne pratique : photocopie scannée sur le smartphone et original dans le porte-documents du véhicule en permanence."
          },
          {
            situation: "Un client signale à la préfecture qu'un taxi a refusé la carte bancaire pour 8 €. Le conducteur reçoit une convocation.",
            question: "Quelles sont les conséquences possibles ?",
            answer: "Première fois : amende 150 € + rappel à la loi. Récidive : passage en commission de discipline, suspension d'ADS possible.",
            reasoning: "Le signalement est instruit : la préfecture peut consulter les relevés de TPE pour vérifier. Si le refus est avéré, sanction graduée. La récidive est particulièrement sanctionnée car elle révèle une volonté délibérée d'enfreindre la loi. Une ou deux récidives peuvent suffire à déclencher une suspension de 1 à 3 mois — soit la perte de tout revenu sur la période. Le conducteur a intérêt à régulariser dès la première fois."
          }
        ],
        examWarning: "Tous les documents doivent être à portée de main lors d'un contrôle.",
        tips: [
          "Coopérer poliment avec les agents lors des contrôles",
          "Photocopier tous les documents et stocker sur smartphone (secours)"
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
        narrative: "Paris est organisé en 20 arrondissements numérotés selon une spirale qui démarre au centre (le Louvre, 1er arrondissement) et se déroule dans le sens des aiguilles d'une montre vers l'extérieur. Cette logique en escargot, mise en place par Haussmann en 1860, n'a rien d'arbitraire : elle reflète l'extension historique de la ville et permet, une fois mémorisée, de localiser instantanément n'importe quelle adresse.\n\nLa Seine sépare Paris en deux rives. La RIVE DROITE (au nord de la Seine) regroupe les arrondissements 1, 2, 3, 4, puis 8 à 12, puis 16 à 20. C'est la rive des affaires, des grands magasins, des théâtres. La RIVE GAUCHE (au sud) regroupe les arrondissements 5, 6, 7, 13, 14, 15. C'est traditionnellement la rive intellectuelle (Sorbonne, éditeurs, ministères). Cette distinction est culturellement forte et utilisée dans la facturation des forfaits aéroports (rives différentes = tarifs différents).\n\nLe code postal parisien est toujours « 75 0XX » où XX est le numéro d'arrondissement sur 2 chiffres. Ainsi : 75001 = 1er, 75008 = 8ème, 75016 = 16ème, 75020 = 20ème. Exception : le 16ème possède deux codes postaux — 75016 pour sa partie SUD (Auteuil) et 75116 pour sa partie NORD (Passy, Chaillot). Cette dualité piège les conducteurs néophytes. À l'examen comme sur le terrain, savoir convertir un code postal en arrondissement et inversement est une compétence de base testée systématiquement.",
        keyPoints: [
          "1er = Louvre (centre), spirale vers extérieur",
          "Rive droite (nord Seine) : 1-4, 8-12, 16-20",
          "Rive gauche (sud Seine) : 5-7, 13-15",
          "Code postal : 75008 = 8ème arrondissement",
          "16ème : 75016 (sud, Auteuil) ET 75116 (nord, Passy/Chaillot)"
        ],
        fieldExample: "Client dit '75016' : c'est le 16ème arrondissement, quartier résidentiel ouest.",
        practicalCases: [
          {
            situation: "Un client donne l'adresse « 45 rue de Vaugirard, 75006 ». Le conducteur doit identifier l'arrondissement et la rive.",
            question: "Où se situe cette adresse ?",
            answer: "6ème arrondissement, rive gauche (quartier Saint-Sulpice / Sénat).",
            reasoning: "75006 = 6ème arrondissement (les deux derniers chiffres). Le 6ème est en rive gauche (groupe 5-6-7-13-14-15). La rue de Vaugirard est la plus longue de Paris (4,3 km) et traverse plusieurs arrondissements ; au n° 45, on est près du Sénat et du Jardin du Luxembourg. Cette double identification (arrondissement + repère) est typique d'un conducteur expert."
          },
          {
            situation: "Pour un forfait aéroport Paris → CDG, le tarif dépend de la rive de départ. Le client part du 75004 (Notre-Dame).",
            question: "Quel forfait s'applique ?",
            answer: "Rive droite (75004 = 4ème, rive droite) → forfait CDG rive droite = 56 € (2026).",
            reasoning: "Le 4ème arrondissement est en rive droite (groupe 1-2-3-4). Même si Notre-Dame est sur l'Île de la Cité (centre du fleuve), administrativement le 4ème est rattaché à la rive droite. Le forfait applicable est donc 56 €, et non 65 € (rive gauche). Cette distinction est régulièrement piégée à l'examen."
          }
        ],
        examWarning: "Les 2 derniers chiffres du code postal = numéro d'arrondissement.",
        tips: [
          "Périphérique = ceinture de Paris (35 km)",
          "Spirale dans le sens horaire depuis le 1er"
        ],
        legalRefs: []
      },
      {
        id: 'topo-monuments',
        title: 'Monuments majeurs',
        essential: "Axe historique : Louvre → Tuileries → Concorde → Champs → Arc de Triomphe → La Défense.",
        narrative: "Les monuments parisiens ne sont pas seulement des points touristiques : ce sont des REPÈRES DE NAVIGATION essentiels au conducteur professionnel. Un client qui dit « emmenez-moi près de la Tour Eiffel » exprime une zone (7ème, Champ-de-Mars), pas une adresse. Connaître la localisation précise, l'arrondissement, la station de métro et les axes d'accès de chaque grand monument différencie immédiatement le conducteur expert du débutant.\n\nL'AXE HISTORIQUE de Paris est l'épine dorsale de la ville : il part de la Pyramide du Louvre, traverse les jardins des Tuileries, la place de la Concorde, remonte les Champs-Élysées jusqu'à la place de l'Étoile (Arc de Triomphe), puis se prolonge par l'avenue de la Grande Armée et l'avenue Charles-de-Gaulle jusqu'à La Défense (Grande Arche). Cet axe rectiligne de 8 km est le principal repère est-ouest de Paris. Le connaître par cœur permet de comprendre 70 % des trajets touristiques.\n\nLes monuments-phares à mémoriser : TOUR EIFFEL (7ème, Champ-de-Mars, métro Bir-Hakeim ou Trocadéro pour la vue) ; ARC DE TRIOMPHE (8ème, place Charles-de-Gaulle anciennement place de l'Étoile, croisement de 12 avenues — piège visuel et nominal) ; SACRÉ-CŒUR (18ème, butte Montmartre, métro Anvers + funiculaire ou Abbesses) ; NOTRE-DAME (4ème, Île de la Cité, métro Cité) ; LOUVRE (1er, métro Palais-Royal ou Louvre-Rivoli) ; OPÉRA GARNIER (9ème, métro Opéra) ; PANTHÉON (5ème, place du Panthéon, RER Luxembourg). Attention : « place de l'Étoile » et « place Charles-de-Gaulle » désignent le même lieu.",
        keyPoints: [
          "Tour Eiffel : 7ème, Champ de Mars, métro Bir-Hakeim",
          "Arc de Triomphe : 8ème, place de l'Étoile, 12 avenues",
          "Sacré-Cœur : 18ème, Montmartre, métro Anvers",
          "Notre-Dame : 4ème, Île de la Cité",
          "Axe historique : Louvre → La Défense (8 km)"
        ],
        fieldExample: "Client veut voir 'les Champs' puis 'la Tour' : Arc de Triomphe → Tour Eiffel via Iéna.",
        practicalCases: [
          {
            situation: "Un client touriste demande « Drop me at the Étoile, near the big arch ». Le conducteur doit identifier le lieu.",
            question: "Où va-t-il déposer le client ?",
            answer: "Place Charles-de-Gaulle (anciennement place de l'Étoile), 8ème arrondissement, sous l'Arc de Triomphe.",
            reasoning: "« Étoile » et « Charles-de-Gaulle » désignent le MÊME lieu — la place a été rebaptisée mais le nom historique reste utilisé. Le conducteur doit reconnaître les deux. La place est aussi le carrefour des 12 avenues (dont les Champs-Élysées, l'avenue de la Grande Armée, l'avenue Foch). Attention : la dépose se fait obligatoirement sur une avenue voisine, l'accès direct à l'Arc étant interdit aux véhicules."
          },
          {
            situation: "Un client demande le trajet le plus rapide entre le Louvre et le Trocadéro.",
            question: "Quel itinéraire emprunter ?",
            answer: "Suivre l'axe historique : Quai du Louvre → Cours la Reine → Pont de l'Alma → Trocadéro. Ou par les Champs si trafic le permet.",
            reasoning: "L'axe rive droite (quais + Cours la Reine) longe la Seine, est généralement plus rapide que l'axe Champs-Élysées (souvent encombré). Le passage par le pont de l'Alma offre en bonus une vue spectaculaire sur la Tour Eiffel — apprécié des touristes. Connaître les alternatives entre les grands axes permet d'optimiser le temps et d'enrichir l'expérience client."
          }
        ],
        examWarning: "Place de l'Étoile = Place Charles de Gaulle (deux noms pour le même lieu).",
        tips: [
          "Attention aux zones piétonnes autour des monuments",
          "Maîtriser l'axe historique = clé de 70 % des trajets touristiques"
        ],
        legalRefs: []
      },
      {
        id: 'topo-gares',
        title: 'Gares SNCF',
        essential: "6 grandes gares, chacune dessert une direction géographique précise.",
        narrative: "Les six grandes gares parisiennes sont organisées selon une logique géographique simple : chaque gare dessert la région française vers laquelle elle pointe, plus les pays voisins dans cette direction. Mémoriser cette logique évite l'erreur fatale qui consiste à déposer un client à la mauvaise gare — perte de train assurée et plainte client systématique.\n\nGARE DU NORD (10ème) : dessert le nord de la France (Lille, Calais), la Belgique, les Pays-Bas, le Royaume-Uni (Eurostar via le tunnel sous la Manche). C'est la gare LA PLUS FRÉQUENTÉE D'EUROPE (700 000 voyageurs/jour). GARE DE L'EST (10ème, juste à côté du Nord) : dessert l'est de la France (Strasbourg, Reims), l'Allemagne, l'Europe centrale. Les deux gares sont proches mais distinctes — confusion fréquente. GARE DE LYON (12ème) : sud-est de la France (Lyon, Marseille, Côte d'Azur), Suisse, Italie. C'est le hub TGV vers le sud, énorme et complexe (Hall 1, Hall 2).\n\nGARE MONTPARNASSE (15ème) : ouest et sud-ouest (Bordeaux, Nantes, Bretagne, Toulouse). GARE D'AUSTERLITZ (13ème) : centre de la France et sud (Orléans, Toulouse partiellement, Espagne en train de nuit). GARE SAINT-LAZARE (8ème) : Normandie (Rouen, Le Havre, Caen, Deauville). Particularité : Saint-Lazare ne dessert AUCUN TGV — uniquement des trains régionaux et Intercités. Une autre piège classique d'examen.\n\nLe conducteur doit aussi anticiper le temps de dépose : ces gares ont des accès véhicules contraints, et la distance entre la dépose-minute et le quai peut atteindre 10-15 minutes à pied à Montparnasse ou Gare de Lyon.",
        keyPoints: [
          "Gare du Nord (10ème) : Londres (Eurostar), Belgique, TGV Nord",
          "Gare de l'Est (10ème) : Strasbourg, Allemagne",
          "Gare de Lyon (12ème) : Lyon, Marseille, Suisse, Italie",
          "Montparnasse (15ème) : Bordeaux, Nantes, Bretagne",
          "Saint-Lazare (8ème) : Normandie (PAS de TGV)",
          "Austerlitz (13ème) : Orléans, sud-ouest (limité)"
        ],
        fieldExample: "Client va à Marseille : Gare de Lyon, TGV Sud-Est.",
        practicalCases: [
          {
            situation: "Un client annonce : « Je dois prendre le train pour Strasbourg dans 1 heure, emmenez-moi à la gare. »",
            question: "Quelle gare ?",
            answer: "Gare de l'Est (10ème). Surtout pas Gare du Nord, qui est juste à côté mais dessert le Nord et l'international.",
            reasoning: "Strasbourg = est de la France, donc Gare de l'Est. Les deux gares sont à 300 m l'une de l'autre, à pied par la rue La Fayette. La confusion est extrêmement fréquente, particulièrement chez les touristes qui ne distinguent pas. Erreur de dépose à Gare du Nord = ~15 min à pied avec bagages = train raté = plainte garantie. Le conducteur doit toujours reformuler : « Pour Strasbourg, c'est Gare de l'Est, je confirme ? »"
          },
          {
            situation: "Un client demande de l'emmener à la « Gare TGV » pour aller à Caen.",
            question: "Quelle gare et quel piège ?",
            answer: "Saint-Lazare (8ème). Mais attention : aucun TGV ne dessert Caen. Le client confond « train » et « TGV ».",
            reasoning: "Caen est en Normandie, desservie par Saint-Lazare via des trains Intercités (pas de TGV sur cet axe). Le conducteur doit délicatement rectifier : « C'est bien Saint-Lazare, mais ce sera un train régional ou Intercités, pas un TGV. » Cela évite que le client ne se trompe sur le numéro de train ou le quai à l'arrivée. La précision technique fidélise le client professionnel."
          }
        ],
        examWarning: "Gare du Nord ≠ Gare de l'Est (à 300 m). Saint-Lazare ne dessert PAS de TGV.",
        tips: [
          "Prévoir le temps de dépose (circulation + distance dans la gare)",
          "Toujours reformuler la gare avant de démarrer"
        ],
        legalRefs: []
      },
      {
        id: 'topo-aeroports',
        title: 'Aéroports',
        essential: "CDG (Roissy) = 3 terminaux principaux. Orly = 4 terminaux. Forfaits taxi 2026.",
        narrative: "L'Île-de-France compte deux grands aéroports internationaux et deux secondaires. CHARLES-DE-GAULLE (CDG / Roissy) est le 1er aéroport français et le 2e européen (~76 millions de passagers/an). Il se situe à 25 km au nord-est de Paris, accessible par l'A1 (depuis la Porte de la Chapelle) ou l'A3 (depuis la Porte de Bagnolet). Le trajet prend 45 min à 1h15 selon le trafic — prévoir 1h en marge de sécurité pour un client qui décolle.\n\nCDG est composé de 3 terminaux principaux mais avec des SOUS-TERMINAUX nombreux : Terminal 1 (compagnies internationales hors Air France/SkyTeam), Terminal 2 (Air France et alliances SkyTeam, divisé en 2A, 2B, 2C, 2D, 2E, 2F, 2G), Terminal 3 (low-cost et charters). La confusion entre sous-terminaux du T2 est LE piège classique : T2E et T2F sont à 800 m l'un de l'autre, sans navette directe. Toujours demander la compagnie ET le numéro de terminal au client.\n\nORLY se situe à 14 km au sud de Paris, accessible par l'A6a et l'A6b (depuis la Porte d'Orléans) ou la N7. Trajet : 25-45 min selon trafic. Depuis 2019, les 4 terminaux historiques (Sud, Ouest, etc.) ont été renommés ORLY 1, 2, 3, 4. Orly 4 (ex-Orly Sud) accueille les vols internationaux long-courriers ; Orly 1, 2, 3 traitent essentiellement les vols domestiques et européens. LE BOURGET (à 7 km de CDG) est dédié à l'AVIATION D'AFFAIRES (jets privés). BEAUVAIS-TILLÉ est à 85 km au nord — clientèle low-cost (Ryanair, Wizz Air), forfait taxi non applicable (course longue distance).",
        keyPoints: [
          "CDG : A1 Porte de la Chapelle, RER B, Roissybus",
          "CDG terminaux : 1, 2 (A-G), 3",
          "Orly : A6 Porte d'Orléans, Orlyval+RER B, T7",
          "Orly terminaux : 1, 2, 3, 4 (depuis 2019)",
          "Forfaits 2026 : CDG 56€/65€, Orly 45€/36€",
          "Le Bourget : affaires, Beauvais : low-cost (85 km)"
        ],
        fieldExample: "Client va à CDG Terminal 2E : A1 Porte de la Chapelle, prévoir 1h.",
        practicalCases: [
          {
            situation: "Un client se présente à 16h pour un vol Lufthansa au départ de CDG à 18h30. Il dit juste « CDG, terminal 1 ».",
            question: "Le terminal annoncé est-il cohérent ?",
            answer: "Possible mais à vérifier : Lufthansa peut être au T1 ou au T2 selon la destination. Mieux vaut demander confirmation.",
            reasoning: "Lufthansa (alliance Star Alliance) opère majoritairement depuis le Terminal 1 à CDG, mais certains vols partagés (codeshare Air France) partent du T2. Si le client se trompe de terminal, perte de 20-30 min en navette CDGVAL. Bonne pratique : demander à voir la carte d'embarquement ou la confirmation, et croiser avec le numéro de vol pour fiabiliser. Le temps de marge restant (2h30) est suffisant pour rattraper une erreur, mais il faut anticiper."
          },
          {
            situation: "Un client demande à aller à « Roissy » avec un trajet rapide à 8h du matin.",
            question: "Quel itinéraire et quelle estimation de temps ?",
            answer: "A1 depuis Porte de la Chapelle (ou A3 si trafic A1 saturé). Estimation : 1h à 1h15 (heure de pointe).",
            reasoning: "8h = pleine heure de pointe entrante. L'A1 est généralement saturée entre 7h30 et 9h30. Le conducteur peut préférer l'A3 (Porte de Bagnolet) si Waze ou Google Maps indique un meilleur temps. À cette heure, jamais promettre moins de 1h. Annoncer une fourchette « 1h à 1h15 » protège des aléas et reste fiable. Si le vol décolle dans 2h, c'est encore jouable ; sinon, alerter le client immédiatement."
          }
        ],
        examWarning: "CDG a plusieurs terminaux 2 (2A, 2B, 2C, 2D, 2E, 2F, 2G). Toujours confirmer compagnie + terminal !",
        tips: [
          "Prévoir 1h pour CDG, 30-45min pour Orly depuis Paris",
          "Beauvais = 85 km, course longue (forfait non applicable)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-hopitaux',
        title: 'Hôpitaux',
        essential: "AP-HP = réseau public parisien. Pitié-Salpêtrière = le plus grand de France.",
        narrative: "L'Assistance Publique - Hôpitaux de Paris (AP-HP) est le plus grand centre hospitalier universitaire d'Europe : 39 hôpitaux, 100 000 personnels, 8 millions de patients/an. Connaître les principaux établissements et leurs spécialités est crucial pour le conducteur T3P, qui transporte régulièrement patients, familles et soignants. Une erreur d'hôpital sur une urgence médicale peut avoir des conséquences vitales.\n\nLes hôpitaux phares à mémoriser : PITIÉ-SALPÊTRIÈRE (13ème, boulevard de l'Hôpital) — le plus grand hôpital de France et d'Europe, toutes spécialités, urgences adultes 24/7, neurologie et cardiologie de référence. HEGP — Hôpital européen Georges-Pompidou (15ème, rue Leblanc) — moderne, urgences adultes, oncologie. COCHIN (14ème, faubourg Saint-Jacques) — maternité, médecine interne. NECKER-ENFANTS MALADES (15ème, rue de Sèvres) — référence pédiatrique nationale, urgences enfants. ROBERT-DEBRÉ (19ème, boulevard Sérurier) — autre grande pédiatrie. HÔTEL-DIEU (4ème, parvis Notre-Dame) — historique, sur l'Île de la Cité, urgences centre Paris.\n\nPour les urgences vitales, ne JAMAIS improviser : appeler le 15 (SAMU) qui orientera vers l'établissement le plus adapté selon la pathologie et la disponibilité. Pour les naissances : maternités proches de Cochin (14ème), Port-Royal (14ème), Robert-Debré (19ème), Necker (15ème), Trousseau (12ème). Hors AP-HP, l'HÔPITAL AMÉRICAIN (Neuilly) et l'HÔPITAL FRANCO-BRITANNIQUE (Levallois) accueillent une clientèle internationale aisée — souvent demandés par les VTC et taxis premium. Mémoriser les hôpitaux proches de son secteur d'activité est un investissement professionnel.",
        keyPoints: [
          "Pitié-Salpêtrière (13ème) : le plus grand, toutes spécialités",
          "HEGP Georges-Pompidou (15ème) : moderne, urgences",
          "Necker (15ème) et Robert-Debré (19ème) : pédiatrie",
          "Hôtel-Dieu (4ème) : Île de la Cité, urgences centre",
          "Hôpital Américain (Neuilly) : clientèle internationale"
        ],
        fieldExample: "Urgence enfant : Necker-Enfants malades, 15ème arrondissement.",
        practicalCases: [
          {
            situation: "Un client monte avec un enfant de 4 ans visiblement souffrant, fièvre élevée. Il demande « l'hôpital le plus proche » depuis le 6ème arrondissement.",
            question: "Que doit faire le conducteur ?",
            answer: "Aller à Necker-Enfants malades (15ème, à 10 min) — référence pédiatrique. Sinon, appeler le 15 pour orientation.",
            reasoning: "Pour un enfant, JAMAIS un hôpital adulte (Hôtel-Dieu, Cochin) qui n'a pas les services pédiatriques adaptés. Necker est à 10 min du 6ème par la rue de Sèvres et c'est LA référence pédiatrique parisienne. En cas de doute (gravité incertaine), appeler le 15 en conduisant donne accès à un médecin régulateur qui valide la destination. Cette précaution peut sauver une vie."
          },
          {
            situation: "Un client touriste américain demande l'« American Hospital » depuis le 8ème arrondissement.",
            question: "Quel hôpital et quelle direction ?",
            answer: "Hôpital Américain de Paris, 63 boulevard Victor Hugo, Neuilly-sur-Seine (hors Paris intra-muros).",
            reasoning: "L'Hôpital Américain est privé, situé à Neuilly (92), pas dans Paris. Il accueille essentiellement la clientèle internationale aisée et les expatriés. Le trajet depuis le 8ème prend ~15 min par l'avenue de la Grande Armée → Porte Maillot → boulevard du Général Koenig → Neuilly. Connaître cet établissement est typique d'un conducteur premium / VTC haut de gamme."
          }
        ],
        examWarning: "En urgence : appeler le 15 (SAMU) pour orientation vers l'hôpital approprié.",
        tips: [
          "Connaître l'hôpital le plus proche de son secteur",
          "Pédiatrie = Necker ou Robert-Debré (jamais hôpital adulte)"
        ],
        legalRefs: []
      },
      {
        id: 'topo-axes',
        title: 'Axes de circulation',
        essential: "Périphérique 35 km, saturé 7h-9h et 17h-20h. A1 → CDG, A6 → Orly.",
        narrative: "Le BOULEVARD PÉRIPHÉRIQUE est l'axe de circulation le plus emprunté de France (1,1 million de véhicules/jour). Long de 35 km, il forme la ceinture de Paris en suivant l'ancienne enceinte de Thiers. Il comporte deux sens : INTÉRIEUR (sens des aiguilles d'une montre) et EXTÉRIEUR (sens inverse). Sa vitesse maximale est de 50 km/h depuis le 1er octobre 2024 (auparavant 70 km/h). En heures de pointe (7h-9h et 17h-20h en semaine), la vitesse moyenne tombe à 10-20 km/h.\n\nLes ALTERNATIVES au périphérique sont essentielles à connaître. Les BOULEVARDS DES MARÉCHAUX (porte par porte, à l'intérieur du périph) offrent un itinéraire de contournement plus lent mais plus régulier. Les AXES TRANSVERSAUX intra-muros : axe nord-sud (boulevards de Sébastopol et Saint-Michel), axe est-ouest (rue de Rivoli, qui depuis 2020 est partiellement réservée aux vélos et bus). Les VOIES SUR BERGES rive droite et gauche sont en grande partie piétonisées depuis 2016 — ne plus les considérer comme un axe automobile rapide.\n\nLes AUTOROUTES de sortie de Paris à mémoriser : A1 (Porte de la Chapelle) → Lille, CDG. A3 (Porte de Bagnolet) → CDG alternatif, Belgique. A4 (Porte de Bercy) → Reims, Strasbourg. A6 (Porte d'Orléans / Porte d'Italie) → Lyon, Orly. A10 (Porte d'Orléans) → Orléans, Bordeaux. A13 (Porte d'Auteuil) → Rouen, Normandie. A14 (La Défense) → A13 vers Normandie. A86 = grand contournement (super-périphérique à 5-10 km de Paris). Connaître la « porte » associée à chaque destination divise par deux le temps de réflexion du conducteur.",
        keyPoints: [
          "Périphérique : 35 km, 50 km/h depuis 2024",
          "Saturé 7h-9h et 17h-20h",
          "Champs-Élysées : Concorde ↔ Étoile, 2 km",
          "A1 : Porte de la Chapelle → CDG, Lille",
          "A6 : Porte d'Orléans/Italie → Orly, Lyon",
          "A86 = grand contournement"
        ],
        fieldExample: "Il est 18h, le périph est bouché : prendre les boulevards des Maréchaux ou couper en intra-muros.",
        practicalCases: [
          {
            situation: "Un client doit aller du 12ème arrondissement à l'aéroport de Roissy-CDG à 17h30 un vendredi.",
            question: "Quel itinéraire ?",
            answer: "Éviter le périphérique nord (saturé). Privilégier A3 (Porte de Bagnolet) en sortie est, ou direct via A4 puis A86 puis A1.",
            reasoning: "Vendredi 17h30 = pic de circulation maximal sur le périph nord (combinaison heure de pointe + départs week-end). L'A3 depuis l'est est souvent plus fluide. Une autre option : sortir par A4 (Porte de Bercy) → A86 → A1 nord, plus long en distance mais souvent plus rapide. Le conducteur professionnel consulte Waze ou Coyote en temps réel pour choisir. Prévoir au moins 1h15 minimum à cette heure."
          },
          {
            situation: "Un touriste demande un « tour panoramique » en taxi : voir Tour Eiffel, Arc de Triomphe, Louvre. Le conducteur doit choisir l'itinéraire.",
            question: "Quel circuit emprunter ?",
            answer: "Tour Eiffel (Trocadéro) → Av. Kléber → Arc de Triomphe → Champs-Élysées → Concorde → Tuileries → Louvre (Pyramide).",
            reasoning: "Ce circuit suit l'axe historique en sens descendant (ouest → est), avec arrêts photo aisés. Il évite le périphérique (sans intérêt touristique) et utilise les artères larges. Durée typique : 45-60 min avec arrêts. Le conducteur peut commenter chaque étape — atout commercial majeur. Annoncer le prix au temps (plus juste pour les arrêts) ou un forfait visite à négocier au préalable."
          }
        ],
        examWarning: "Voies sur berges largement fermées (piétonisation). Périphérique limité à 50 km/h depuis 2024.",
        tips: [
          "Connaître les portes principales et leurs destinations",
          "Boulevards des Maréchaux = alternative au périph"
        ],
        legalRefs: ["Arrêté Ville de Paris 2024 (limitation 50 km/h périphérique)"]
      },
      {
        id: 'topo-places',
        title: 'Places et carrefours',
        essential: "Place de l'Étoile = 12 avenues. République = manifestations fréquentes.",
        narrative: "Les grandes places parisiennes sont à la fois des repères géographiques et des NŒUDS DE CIRCULATION particulièrement complexes. Maîtriser leur géométrie, les avenues qui les croisent, et les règles de priorité spécifiques évite les erreurs de trajet et les fausses manœuvres devant les clients.\n\nLA PLACE CHARLES-DE-GAULLE (ex-Étoile, 8ème/16ème/17ème) est emblématique : 12 avenues y convergent (Champs-Élysées, Foch, Grande Armée, Wagram, Hoche, Friedland, Marceau, Iéna, Kléber, Victor-Hugo, Carnot, Mac-Mahon). La règle de circulation est UNIQUE EN FRANCE : priorité à droite SANS exception (les véhicules entrant ont la priorité sur ceux déjà engagés). C'est l'un des rares carrefours où la sortie est plus complexe que l'entrée. Conseil : viser sa sortie dès l'entrée et ajuster progressivement.\n\nPLACE DE LA CONCORDE (8ème) : la plus grande place de Paris (8,64 ha), au pied de l'obélisque de Louxor. Carrefour entre les Tuileries, les Champs-Élysées, le pont de la Concorde et la rue Royale. Très large mais avec une signalisation dense (feux multiples). PLACE DE LA BASTILLE (4ème/11ème/12ème, à la jonction des trois arrondissements) : carrefour de l'Opéra Bastille, des boulevards Beaumarchais et Henri-IV. PLACE DE LA RÉPUBLIQUE (3ème/10ème/11ème) : grande place semi-piétonne depuis 2013, statue de Marianne. ATTENTION : c'est le LIEU DES MANIFESTATIONS PARISIENNES par excellence. Tous les samedis et lors de tout événement social, la place est partiellement ou totalement bloquée — itinéraires de contournement obligatoires (rue du Faubourg-du-Temple, boulevard Magenta).",
        keyPoints: [
          "Place de l'Étoile (8ème) : 12 avenues, Arc de Triomphe, priorité à droite",
          "Place de la Concorde (8ème) : obélisque, Tuileries-Champs",
          "Place de la Bastille (4ème/11ème/12ème) : Opéra Bastille",
          "Place de la République (3ème/10ème/11ème) : Marianne, manifestations",
          "Place Vendôme (1er) : luxe, Ritz, joaillerie"
        ],
        fieldExample: "Manifestation annoncée place de la République : passer par le boulevard Magenta.",
        practicalCases: [
          {
            situation: "Le conducteur arrive sur la place de l'Étoile depuis les Champs-Élysées et doit ressortir par l'avenue Hoche.",
            question: "Quelle stratégie de circulation ?",
            answer: "Entrer sur l'anneau extérieur, viser progressivement Hoche en cédant à chaque entrée (priorité à droite stricte), sortir doucement.",
            reasoning: "La place de l'Étoile est le SEUL carrefour de France où la priorité à droite s'applique sans exception, même contre un véhicule déjà engagé. Cela signifie que celui qui entre a TOUJOURS priorité sur celui qui circule sur l'anneau. Stratégie : entrer sur la voie extérieure, anticiper sa sortie en lisant les panneaux (chaque avenue est indiquée), céder le passage à toute entrée, et viser progressivement l'avenue voulue. Ne JAMAIS s'engager au centre — risque d'être bloqué."
          },
          {
            situation: "Un client doit aller de la gare de l'Est à la place de la République un samedi à 14h. Le conducteur entend à la radio qu'une manifestation est annoncée.",
            question: "Que doit-il faire ?",
            answer: "Informer le client, proposer un dépose alternative (proche mais hors zone bloquée) ou un itinéraire de contournement.",
            reasoning: "Toute manifestation à République bloque la place et les axes adjacents (boulevards Magenta, Saint-Martin, du Temple). Tenter de passer = être bloqué dans la circulation pendant 30 min à 2h. Le conducteur professionnel ANTICIPE : il prévient le client, propose une dépose à proximité (par exemple au métro Jacques Bonsergent, à 5 min à pied) et explique pourquoi. Cette transparence évite la facturation d'un temps perdu et entretient la confiance."
          }
        ],
        examWarning: "Les grandes places = nœuds de circulation complexes. Étoile = priorité à droite stricte.",
        tips: [
          "Attention aux manifestations fréquentes République et Bastille",
          "Étoile : viser sa sortie dès l'entrée"
        ],
        legalRefs: ["Article R415-5 du Code de la route (priorité à droite Étoile)"]
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
        narrative: "La psychologie de la perception est sans appel : un client se forge une opinion durable du conducteur en moins de 20 secondes. Cette « première impression » repose à 55 % sur le non-verbal (apparence, posture, regard), 38 % sur le paraverbal (ton, débit, volume) et seulement 7 % sur les mots eux-mêmes. Tout ce que le conducteur fera ensuite — même excellent — devra soit confirmer, soit corriger cette image initiale.\n\nQuatre piliers structurent un accueil professionnel. La PONCTUALITÉ : arriver à l'heure ou prévenir par SMS dès qu'un retard de plus de 3 min est probable. Un client qui a réservé pour 8h compte sur 8h, pas sur « entre 8h et 8h10 ». La TENUE du conducteur : propre, repassée, sans odeur (parfum trop prononcé = aussi gênant qu'odeur corporelle). Le VÉHICULE : intérieur aspiré, pas d'odeur de tabac (interdit légalement dans tout véhicule transportant un mineur, et déconseillé en toute circonstance pro), tableau de bord rangé. Le PREMIER CONTACT : descendre du véhicule, regarder le client dans les yeux, sourire sincère, « Bonjour Madame/Monsieur » clair, ouverture de portière côté trottoir.\n\nL'anticipation différencie l'expert du novice. Ouvrir le coffre AVANT que le client ne demande, proposer de l'aide pour les bagages lourds, indiquer la portière avec un geste de la main. Ces micro-attentions coûtent 5 secondes mais multiplient la note client. À l'inverse, rester téléphone à la main pendant que le client charge ses propres bagages dans le coffre est rédhibitoire.",
        keyPoints: [
          "Ponctualité : arriver à l'heure ou prévenir par SMS",
          "Tenue correcte, propre, parfum discret",
          "Véhicule propre, pas d'odeur de tabac",
          "Salutation : regard, sourire, bonjour clair",
          "Anticiper : ouvrir le coffre, proposer l'aide"
        ],
        fieldExample: "Le chauffeur arrive 5 min en avance, ouvre le coffre avant qu'on lui demande.",
        practicalCases: [
          {
            situation: "Un client réserve une course pour 7h30 (vol à 10h). À 7h28, le conducteur est encore à 8 min de l'adresse à cause d'un embouteillage imprévu.",
            question: "Que faire ?",
            answer: "Appeler ou envoyer un SMS immédiatement : « Léger retard d'environ 8 min dû à un imprévu, je suis en route, mes excuses. »",
            reasoning: "Ne pas prévenir = anxiété pour le client (« est-il oublié ? va-t-il rater son vol ? »). Prévenir = transparence, sincérité, prise en main de la situation. Même si le client est contrarié, il appréciera l'honnêteté et reverra son jugement. Le silence aggrave systématiquement la perception du retard."
          },
          {
            situation: "Un client monte et grimace en sentant une odeur de tabac froid dans le véhicule. Le conducteur a fumé une cigarette une heure plus tôt en pause.",
            question: "Quelle est la bonne pratique ?",
            answer: "NE JAMAIS fumer dans le véhicule professionnel. Aérer + désodoriser entre chaque service. S'excuser si une odeur subsiste.",
            reasoning: "L'odeur de tabac froid est extrêmement persistante et perçue comme un manque de respect. Légalement, fumer dans un véhicule transportant un mineur est interdit (article L3512-9 du Code de la santé). Professionnellement, c'est une cause majeure de mauvaise note. La règle absolue : véhicule = espace non-fumeur, fumer dehors et changer de tenue si possible avant le service."
          }
        ],
        examWarning: "Première impression = 20 secondes. Le tabac dans le véhicule = sanction note client et risque légal.",
        tips: [
          "Anticiper les besoins : ouvrir le coffre, proposer l'aide",
          "Parfum discret > parfum prononcé"
        ],
        legalRefs: ["Article L3512-9 du Code de la santé publique (tabac et mineurs)"]
      },
      {
        id: 'rel-communication-trajet',
        title: 'Pendant le trajet',
        essential: "Observer le client : certains veulent parler, d'autres du silence.",
        narrative: "Le savoir-vivre en course repose sur une compétence rare : LIRE le client. Tous les passagers n'attendent pas la même chose. Le voyageur d'affaires entre deux rendez-vous a besoin de calme pour préparer ses dossiers. Le touriste en visite cherche des conseils et des anecdotes. Le client tardif veut être rassuré. Le client matinal préfère souvent le silence. Le conducteur professionnel propose, observe, s'adapte — il n'impose jamais.\n\nLa règle de base est d'OUVRIR LA PORTE à la conversation sans la forcer. Une question neutre (« Première fois à Paris ? », « Trajet rapide ou plutôt panoramique ? ») permet de tester le terrain. Si le client répond brièvement et se replonge dans son téléphone : message reçu, on respecte le silence. S'il rebondit avec enthousiasme : la conversation peut s'engager. Toujours sur des SUJETS NEUTRES : météo, monuments, événements culturels, sport (avec prudence). Sont strictement à BANNIR : politique, religion, immigration, opinion sur des personnalités publiques. Ces sujets peuvent faire perdre un client à vie en une seule phrase.\n\nL'INFORMATION SPONTANÉE est appréciée : annoncer l'itinéraire choisi (« je passe par les quais, c'est plus fluide à cette heure »), prévenir d'un imprévu (« petit bouchon devant nous, j'estime 5 min de plus »), confirmer la durée restante (« on devrait être à votre destination dans environ 15 min »). Cela rassure et donne au client une impression de contrôle. À l'inverse, le téléphone perso du conducteur en présence du client est un irritant majeur : appel à mains libres = OK si urgent et bref ; jamais consulter Instagram à l'arrêt ; jamais haut-parleur. Le client paie pour son confort, pas pour la vie sociale du conducteur.",
        keyPoints: [
          "Écoute active : ne pas interrompre",
          "Éviter sujets polémiques (politique, religion)",
          "Informer spontanément : durée, trafic, itinéraire",
          "Téléphone perso : éviter en présence du client",
          "Adapter son comportement au profil observé"
        ],
        fieldExample: "Le client travaille sur son ordinateur : le chauffeur reste silencieux et coupe la radio.",
        practicalCases: [
          {
            situation: "Un client engage la conversation sur la politique en disant : « Vous avez vu le dernier discours du président, c'est scandaleux non ? »",
            question: "Comment répondre ?",
            answer: "Désamorcer poliment : « Je préfère rester en dehors de la politique avec les clients, c'est plus simple pour tout le monde. Parlons plutôt de votre trajet ! »",
            reasoning: "Donner son opinion = risque de braquer le client si désaccord, ou de devoir « tenir le rôle » si accord. Dans les deux cas, perte de neutralité professionnelle. La phrase de désamorçage est cadrée, polie, sans jugement. Elle redirige vers un sujet neutre. Aucun client raisonnable ne reprochera cette neutralité ; au contraire, beaucoup l'apprécient."
          },
          {
            situation: "Pendant le trajet, le téléphone perso du conducteur sonne (un ami). Le client est sur un appel important.",
            question: "Que doit faire le conducteur ?",
            answer: "Couper la sonnerie immédiatement, ne pas répondre. Rappeler après dépose.",
            reasoning: "Un téléphone qui sonne perturbe l'appel du client et donne une image non-pro. Idéal : passer le téléphone en silencieux AVANT chaque course. Si l'appel est vraiment urgent (famille), le conducteur peut s'excuser brièvement (« Pardonnez-moi, urgence familiale ») et répondre brièvement à mains libres avec voix discrète. Mais c'est une exception."
          }
        ],
        examWarning: "Politique et religion = sujets bannis. Téléphone perso = irritant majeur.",
        tips: [
          "Proposer sans imposer : 'Souhaitez-vous de la musique ?'",
          "Mettre le téléphone en silencieux avant chaque course"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conduite-confort',
        title: 'Conduite et confort',
        essential: "Conduite souple = passager rassuré. Anticiper pour éviter les à-coups.",
        narrative: "La qualité de la conduite est le critère le plus directement perceptible par le client : il la SUBIT physiquement. Un seul freinage brutal peut suffire à dégrader toute la note d'une course parfaite par ailleurs. À l'inverse, une conduite fluide rassure même un passager initialement nerveux et signe un conducteur expert.\n\nLe principe fondamental est l'ANTICIPATION. Lire la circulation 100-200 m à l'avance permet de lever le pied progressivement plutôt que de freiner brusquement à la dernière seconde. Sur le périph, repérer un ralentissement à distance et décélérer en relâchant l'accélérateur (frein moteur) est plus confortable qu'un coup de frein sec. En ville, anticiper le passage au rouge d'un feu en levant le pied 50 m avant évite l'à-coup. La règle d'or : si le passager doit se cramponner, c'est qu'on a mal conduit.\n\nLE CONFORT THERMIQUE est l'autre dimension cruciale, particulièrement en saison. La climatisation doit être adaptée AVANT la montée du client (préchauffage en hiver, refroidissement en été). Une fois le client à bord, DEMANDER : « La température vous convient-elle ? Souhaitez-vous que j'ajuste la climatisation ? » Ne pas demander = présumer = risque de mécontentement silencieux. Pour les véhicules avec sièges multi-zones, proposer un réglage individuel côté passager arrière. ENFIN, expliquer ses choix d'itinéraire si le client semble s'interroger : la transparence évite la suspicion de détour facturé. « Je prends les quais car les boulevards sont saturés à cette heure, ce sera plus rapide » suffit à rassurer.",
        keyPoints: [
          "Pas d'accélérations/freinages brusques",
          "Respecter le Code : le client doit se sentir en sécurité",
          "Climatisation : vérifier le confort, demander avant d'ajuster",
          "Expliquer les choix d'itinéraire si demandé",
          "Éco-conduite = confort + économies + image"
        ],
        fieldExample: "Le chauffeur anticipe le feu rouge et freine progressivement : confort optimal.",
        practicalCases: [
          {
            situation: "Un client âgé tient sa canne et semble nerveux pendant le trajet. Le conducteur prend habituellement les virages avec dynamisme.",
            question: "Que doit-il adapter ?",
            answer: "Réduire l'allure dans les virages, freiner plus tôt et plus doucement, accélérer plus progressivement.",
            reasoning: "Les personnes âgées sont plus sensibles aux forces d'accélération latérales (risque de perte d'équilibre, douleurs cervicales). Adapter son style de conduite au profil du passager est un réflexe pro. Vitesse réduite de 10-15 %, anticipation accrue, virages amples. Le client âgé en retient l'impression d'un conducteur attentif et prévenant — ce qui génère souvent une fidélisation forte (et bons pourboires)."
          },
          {
            situation: "En plein été, un client monte dans un véhicule garé au soleil pendant 30 min. Température intérieure : 38°C.",
            question: "Quelle est la bonne pratique ?",
            answer: "Anticiper : démarrer la climatisation 5 min avant l'arrivée du client (si possible à distance). Sinon : ouvrir les portes pour aérer, climatisation à fond pendant l'embarquement, demander ensuite si la température convient.",
            reasoning: "Un véhicule surchauffé = clientèle perdue. La meilleure pratique est l'anticipation (clim à distance ou en attendant). Si impossible, le conducteur doit aérer (portes ouvertes), expliquer la situation au client, et ajuster en temps réel. Demander régulièrement le confort thermique (toutes les 5-10 min en début de course) montre l'attention au détail."
          }
        ],
        examWarning: "Une conduite nerveuse stresse le passager et nuit à l'image.",
        tips: [
          "L'éco-conduite = confort passager + économies",
          "Anticiper 100-200 m à l'avance évite les à-coups"
        ],
        legalRefs: []
      },
      {
        id: 'rel-conflits',
        title: 'Gestion des conflits',
        essential: "Rester calme, écouter, reformuler, s'excuser si nécessaire, proposer une solution.",
        narrative: "Tout conducteur T3P, quelle que soit son ancienneté, sera confronté à des conflits clients : retard, désaccord sur l'itinéraire, contestation tarifaire, énervement personnel du client. La compétence professionnelle ne consiste pas à éviter ces situations (impossibles) mais à les DÉSAMORCER avec méthode. Un client mécontent bien traité devient souvent un client fidèle ; mal traité, il publie une note 1 étoile qui coûte 10 courses futures.\n\nLa méthode éprouvée est l'ÉCOUTE ACTIVE - REFORMULATION - EXCUSE - SOLUTION. Étape 1 : laisser le client EXPRIMER sa frustration sans interrompre, même si c'est injuste, même si on n'est pas d'accord. La parole évacue la tension. Interrompre = redoubler la colère. Étape 2 : REFORMULER pour montrer qu'on a compris : « Si je comprends bien, vous trouvez que le trajet a pris trop de temps et que ça a impacté votre rendez-vous, c'est bien ça ? » Étape 3 : S'EXCUSER, même si on n'est pas directement responsable : « Je suis sincèrement désolé que cette situation vous ait causé du désagrément. » L'excuse ne reconnaît pas la faute, elle reconnaît le ressenti. Étape 4 : PROPOSER une solution : geste commercial, explication factuelle, contact ultérieur.\n\nDeux interdits absolus. JAMAIS hausser le ton ou monter en agressivité, même provoqué — un conducteur professionnel ne perd jamais son calme en service, c'est sa marque de fabrique. JAMAIS de violence verbale ou physique : insulter ou bousculer un client est un délit pénal (outrage, violence) qui détruit immédiatement la carrière. Si la situation dégénère réellement (client violent, ivre, menaçant), arrêter le véhicule en zone sûre, descendre, appeler le 17. La sécurité prime sur le chiffre d'affaires.",
        keyPoints: [
          "Ne jamais s'énerver ni hausser le ton",
          "Écouter entièrement avant de répondre",
          "Reformuler : 'Si je comprends bien...'",
          "S'excuser même si pas directement responsable",
          "Si danger réel : arrêter en zone sûre, appeler le 17"
        ],
        fieldExample: "Client mécontent du temps de trajet : 'Je comprends, le trafic était exceptionnel aujourd'hui, désolé pour ce désagrément.'",
        practicalCases: [
          {
            situation: "À l'arrivée, un client conteste le montant et accuse le conducteur d'avoir « tourné en rond exprès » pour gonfler le prix.",
            question: "Comment gérer ?",
            answer: "Garder son calme, montrer l'itinéraire GPS pris (preuve), expliquer les contraintes (bouchon, déviation), proposer un geste commercial si client de bonne foi.",
            reasoning: "L'accusation est grave mais émotionnelle. Réagir par la colère = escalade et plainte. Réponse pro : (1) calme, (2) preuve factuelle (historique GPS Uber, Waze), (3) explication objective, (4) éventuel geste commercial (5 € de remise par exemple) pour clore le différend. Cette méthode transforme un conflit en démonstration de professionnalisme. Documenter l'échange par écrit (SMS récapitulatif au client) protège en cas de plainte ultérieure."
          },
          {
            situation: "Un client visiblement alcoolisé devient agressif verbalement, insulte le conducteur, menace de le frapper.",
            question: "Que faire ?",
            answer: "Arrêter le véhicule en lieu sûr (station-service, parking éclairé), descendre, appeler le 17 immédiatement. Ne pas répondre aux provocations.",
            reasoning: "La sécurité physique prime sur tout. Continuer à conduire avec un client violent = risque d'agression en mouvement, accident. Arrêter en zone sûre + 17 = procédure standard. Le conducteur n'a aucune obligation de poursuivre une course avec un client violent (motif légitime de cessation). Le rapport de police protège juridiquement. NE JAMAIS répondre aux insultes : aggravation systématique."
          }
        ],
        examWarning: "Jamais de violence verbale ou physique, même provoqué. La sécurité prime sur le chiffre d'affaires.",
        tips: [
          "Un client mécontent bien traité peut devenir fidèle",
          "Documenter par écrit après tout incident"
        ],
        legalRefs: ["Article 222-13 du Code pénal (violence)", "Article 433-5 (outrage)"]
      },
      {
        id: 'rel-fin-course',
        title: 'Fin de course',
        essential: "La dernière impression compte autant que la première.",
        narrative: "La fin de course est sous-estimée par les conducteurs débutants, qui considèrent qu'une fois arrivés, la prestation est terminée. C'est une erreur stratégique majeure : les 30 dernières secondes pèsent autant que les 20 premières dans le souvenir du client. C'est le moment où il décide de noter 5 étoiles ou 4, de recommander ou pas, de redemander le même conducteur ou de zapper.\n\nLE PROTOCOLE de fin de course professionnel comporte 5 actes. (1) ANNONCER l'arrivée à 30-60 secondes : « Nous arrivons à destination, monsieur. » Cela permet au client de ranger ses affaires, de préparer son paiement, de finir un mail. (2) STATIONNER avec discernement : au plus près de l'entrée si possible, du bon côté (trottoir), en sécurité (pas en double file dangereuse pour le client qui descend). (3) RAPPELER les effets personnels : « N'oubliez pas de vérifier que vous avez bien toutes vos affaires : téléphone, sac, etc. » Ce rappel évite 90 % des oublis. (4) AIDER si nécessaire : descendre, ouvrir la portière côté trottoir, sortir les bagages du coffre, les déposer délicatement. (5) REMERCIER chaleureusement : « Merci pour la course, je vous souhaite une excellente fin de journée. »\n\nAPRÈS LE DÉPART, vérification systématique du véhicule : banquette arrière (téléphones, portefeuilles, gants, écouteurs), coffre (objet oublié, valise), sièges (papiers tombés). Un objet retrouvé doit être remonté immédiatement à la plateforme (Uber, Bolt) ou directement au client si contact disponible. La restitution rapide d'un objet oublié crée un client fidèle à vie. À l'inverse, ne pas vérifier = objet oublié signalé = plainte + procédure + image dégradée. Statistique éprouvée : un client satisfait parle de l'expérience à 3 personnes en moyenne ; un client mécontent à 10. La dernière impression est l'amplificateur de toute la course.",
        keyPoints: [
          "Annoncer l'arrivée : 'Nous arrivons à destination'",
          "Stationner au plus près pour sécurité/confort",
          "Rappeler : 'N'oubliez pas de vérifier vos affaires'",
          "Aider si nécessaire (descendre, sortir les bagages)",
          "Remercier chaleureusement",
          "Vérifier le véhicule après chaque course"
        ],
        fieldExample: "Le chauffeur aide à sortir les bagages, rappelle les affaires, et souhaite bon voyage au client.",
        practicalCases: [
          {
            situation: "Après dépose d'un client à un hôtel, le conducteur découvre un téléphone sur la banquette arrière en faisant sa vérification.",
            question: "Que doit-il faire ?",
            answer: "Tenter de rattraper immédiatement le client (entrer dans l'hôtel demander à la réception) ou signaler via la plateforme + contacter le client. Conserver l'objet en sécurité.",
            reasoning: "L'obligation de restitution s'impose au conducteur. Tentative immédiate = idéale (client encore présent). Sinon, signaler immédiatement à la plateforme (Uber, Bolt) qui met en relation. Ne JAMAIS garder l'objet sans le signaler = délit d'abus de confiance. La restitution rapide d'un téléphone = client à vie + recommandations. À l'inverse, signaler tardivement = plainte client + procédure plateforme + suspension possible."
          },
          {
            situation: "Le conducteur dépose un client en double file sur une avenue passante. Le client descend côté circulation et frôle un scooter.",
            question: "Faute du conducteur ?",
            answer: "Oui. Le conducteur doit toujours déposer côté trottoir (pour la sécurité du client) ou trouver un emplacement sûr.",
            reasoning: "La sécurité de la descente incombe au conducteur : la dépose doit toujours se faire côté trottoir. Une dépose côté circulation expose le client à un risque d'accident (responsabilité du conducteur engagée). Bonne pratique : si l'arrêt côté trottoir est impossible, faire le tour pour s'arrêter de l'autre côté, ou expliquer au client de descendre côté droit. Le confort de descente est un élément clé de la note finale."
          }
        ],
        examWarning: "Vérifier le véhicule après chaque course (objets oubliés). Toujours descendre côté trottoir.",
        tips: [
          "Client satisfait = 3 personnes informées, mécontent = 10",
          "Dépose côté trottoir, jamais côté circulation"
        ],
        legalRefs: []
      },
      {
        id: 'rel-clienteles-specifiques',
        title: 'Clientèles spécifiques',
        essential: "S'adapter sans préjugés. Chiens guides = transport obligatoire et gratuit.",
        narrative: "Chaque profil de clientèle a ses attentes spécifiques. Le conducteur professionnel doit savoir adapter son comportement, son rythme et son service à la personne en face de lui, sans jamais tomber dans le stéréotype ni la condescendance. L'adaptation est une marque de respect, pas une discrimination.\n\nLES PERSONNES EN SITUATION DE HANDICAP. La règle absolue : PROPOSER l'aide sans l'IMPOSER. Demander : « Souhaitez-vous que je vous aide à monter / à charger votre fauteuil ? » Si oui, suivre les indications du client (chacun a sa technique). Si non, respecter. Pour les fauteuils roulants, le conducteur doit savoir les plier rapidement et les charger sans les abîmer. Le refus de transport pour cause de handicap est un DÉLIT pénal (article 225-2 du Code pénal : jusqu'à 3 ans d'emprisonnement et 45 000 € d'amende). Les chiens guides et chiens d'assistance sont transportés GRATUITEMENT et obligatoirement (article L3121-8 du Code des transports) — refus = délit aggravé.\n\nLES PERSONNES ÂGÉES : prendre le temps, parler plus distinctement (pas plus fort, juste plus articulé), conduire en douceur, aider à attacher la ceinture si demandé. Anticiper que monter et descendre prend plus de temps. LES ENFANTS : siège enfant si fourni par les parents, ceinture obligatoire, conduite particulièrement souple. LES TOURISTES : quelques mots dans leur langue, anecdote brève sur Paris, recommandation d'un restaurant si demandé. LES VOYAGEURS D'AFFAIRES : efficacité maximale, discrétion absolue (ne pas écouter leurs appels, ne pas commenter), ponctualité irréprochable. Anticiper les besoins (chargeur USB, eau, journaux) différencie le service premium du standard.",
        keyPoints: [
          "Handicap : proposer l'aide sans l'imposer, jamais de refus",
          "Personnes âgées : prendre le temps, parler distinctement",
          "Touristes : quelques infos sur Paris, mots en anglais",
          "Voyageurs d'affaires : efficacité, discrétion, ponctualité",
          "Chiens guides = transport gratuit obligatoire (loi)"
        ],
        fieldExample: "Client âgé avec canne : le chauffeur l'aide à monter, attache sa ceinture, conduit en douceur.",
        practicalCases: [
          {
            situation: "Un VTC reçoit une demande de course pour un client en fauteuil roulant pliable. Il refuse en disant qu'il n'a pas le matériel pour.",
            question: "Le refus est-il légal ?",
            answer: "Non. Le refus pour cause de handicap est un délit pénal puni de 3 ans d'emprisonnement et 45 000 € d'amende.",
            reasoning: "L'article 225-2 du Code pénal sanctionne la discrimination dans l'accès à un service. Un fauteuil pliable se charge dans tout coffre standard. Le conducteur a obligation de transport. Le seul refus légitime concerne un fauteuil motorisé non démontable nécessitant un véhicule TPMR adapté (et même dans ce cas, le conducteur doit aider à trouver une alternative, pas se contenter de refuser). Sanction administrative + pénale + dommages-intérêts au client."
          },
          {
            situation: "Une cliente non-voyante avec son chien guide hèle un taxi. Le conducteur veut l'orienter vers un autre taxi en disant qu'il est allergique aux chiens.",
            question: "Acceptable ?",
            answer: "Non. Les chiens guides doivent être transportés gratuitement et obligatoirement. L'allergie n'est pas un motif légitime de refus.",
            reasoning: "L'article L3121-8 du Code des transports est absolu : refus = discrimination liée au handicap = délit pénal (jusqu'à 3 ans et 45 000 € d'amende, suspension d'ADS, signalement au Défenseur des droits). Une allergie réelle se traite par antihistaminique avant service, pas par refus. La société exige que les personnes non-voyantes puissent se déplacer en autonomie — c'est non négociable."
          }
        ],
        examWarning: "Le handicap n'est pas un motif de refus de transport. Chien guide = transport gratuit obligatoire.",
        tips: [
          "Chiens guides = transport gratuit obligatoire (loi)",
          "Proposer l'aide sans l'imposer"
        ],
        legalRefs: ["Article L3121-8 du Code des transports (chiens guides)", "Article 225-2 du Code pénal (discrimination)"]
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
        essential: "Les usagers de deux-roues motorisés représentent environ 22 % des tués sur la route alors qu'ils ne pèsent que ~2 % du trafic. Pour un moto-taxi pro, la conduite préventive n'est pas une option : c'est le cœur du métier.",
        narrative: "L'Observatoire national interministériel de la sécurité routière (ONISR) le rappelle chaque année : à kilomètre parcouru égal, un motard a un risque d'être tué environ 22 fois supérieur à celui d'un automobiliste. Cette sur-mortalité s'explique par l'absence de carrosserie, l'instabilité intrinsèque du 2-roues et la moindre visibilité dans le trafic.\n\nLes facteurs aggravants sont parfaitement identifiés par le référentiel RS5636 : la vitesse excessive ou inadaptée, l'alcool (seuil légal abaissé à 0,2 g/L pour les jeunes permis), les stupéfiants (tolérance zéro), certains médicaments (pictogramme niveau 2 ou 3), mais aussi le stress, la fatigue et le manque de sommeil. Un moto-taxi qui enchaîne 12 heures sans pause cumule un déficit d'attention équivalent à 0,5 g/L d'alcool dans le sang.\n\nL'hygiène de vie devient donc un sujet professionnel : sommeil suffisant, pauses régulières, hydratation, alimentation légère pendant le service. C'est ce qui distingue le pilote professionnel du conducteur du dimanche.",
        keyPoints: [
          "Sur-représentation massive des 2-roues dans les tués (~22 % pour ~2 % du trafic)",
          "Vitesse, alcool, stupéfiants, médicaments = facteurs majeurs",
          "Fatigue et stress = effets comparables à une alcoolémie légère",
          "L'hygiène de vie fait partie intégrante des obligations pro VMDTR",
          "L'anticipation reste la meilleure arme : 80 % des accidents sont évitables",
        ],
        practicalCases: [
          {
            situation: "Vous enchaînez les courses depuis 5h du matin sans avoir vraiment dormi la nuit. Un client vous demande une course Paris-Roissy à 22h.",
            question: "Quelle est l'attitude professionnelle attendue ?",
            answer: "Refuser ou faire prendre la course par un confrère. La fatigue est un facteur d'accident reconnu et engage votre responsabilité pénale en cas d'accident.",
            reasoning: "Le référentiel impose la gestion de l'hygiène de vie. Conduire fatigué constitue une mise en danger délibérée de la vie d'autrui (Article 223-1 du Code pénal) et peut être retenu comme circonstance aggravante.",
          },
          {
            situation: "Lors d'un déjeuner d'affaires avec un client fidèle, on vous propose un verre de vin.",
            question: "Pouvez-vous accepter avant de reprendre votre activité ?",
            answer: "Non. La tolérance zéro est de fait la règle professionnelle, même si le seuil légal du Code de la route est de 0,5 g/L (0,2 g/L pour les permis probatoires).",
            reasoning: "Un VMDTR transporte un passager non protégé sur un 2-roues. La moindre baisse de vigilance peut être fatale. Les contrats avec entreprises et plateformes imposent presque tous une clause 'zéro alcool'.",
          },
        ],
        examWarning: "Question fréquente : l'hygiène de vie est un facteur de sécurité OFFICIELLEMENT évalué (référentiel RS5636).",
        confusionPoints: [
          "Seuil légal général = 0,5 g/L, mais probatoire = 0,2 g/L (les 2 sont au programme)",
          "Stupéfiants = tolérance ZÉRO (pas de seuil de 'petite quantité')",
        ],
        tips: ["Mnémo : S.A.F.E. = Sommeil, Alcool zéro, Fatigue gérée, Évaluation continue"],
        legalRefs: ["Référentiel RS5636 – F(M)", "Code de la route L.234-1 et R.234-1", "Code pénal 223-1"],
      },
      {
        id: 'vmd-dynamique',
        title: 'Dynamique de la motocyclette',
        essential: "L'effet gyroscopique stabilise la moto à vitesse soutenue mais elle devient instable à basse vitesse. La distance d'arrêt suit une loi quadratique : doubler la vitesse quadruple la distance de freinage.",
        narrative: "Comprendre la physique de sa moto, c'est comprendre ses limites. À haute vitesse, les roues en rotation génèrent un effet gyroscopique qui maintient la moto debout — c'est pour cela qu'un 2-roues lancé est stable. À basse vitesse (manœuvres, parking, embouteillages), cet effet disparaît : la moto devient instable et exige un pilotage actif (jeu de gaz, embrayage, frein arrière).\n\nLa distance d'arrêt se décompose en deux : la distance de réaction (parcourue pendant le temps de perception ≈ 1 s) et la distance de freinage proprement dite. La distance de réaction est proportionnelle à la vitesse, mais la distance de freinage suit le carré de la vitesse — c'est la loi du V². À 50 km/h sur sol sec, on compte ≈ 25 m d'arrêt total. À 100 km/h, on est déjà à ≈ 80 m. Sur sol mouillé, multiplier par 1,5 à 2.\n\nL'adhérence dépend de la qualité du pneu (gomme, sculpture, pression), de l'état de la route (sec, mouillé, gravillons, peinture, plaques d'égout) et de la température. Un pneu sous-gonflé chauffe, perd de l'adhérence et peut éclater. La vérification de pression est une obligation pro avant la prise de service.",
        keyPoints: [
          "Effet gyroscopique = stabilité à vitesse, instabilité en manœuvre lente",
          "Distance d'arrêt = distance de réaction (~1 s) + distance de freinage (∝ V²)",
          "Vitesse × 2 → distance de freinage × 4 (loi du carré)",
          "Sol mouillé : ×1,5 à ×2 sur la distance",
          "Pneus : pression, usure, sculpture conditionnent l'adhérence",
        ],
        practicalCases: [
          {
            situation: "Vous roulez à 50 km/h en ville, sol sec, et un piéton surgit à 30 m devant vous.",
            question: "Pouvez-vous vous arrêter à temps ?",
            answer: "C'est limite. La distance d'arrêt à 50 km/h sur sec est d'environ 25 mètres (≈ 14 m de réaction + 11 m de freinage). Vous avez 5 m de marge — mais sur sol mouillé, vous percutez le piéton.",
            reasoning: "Cette question type tombe régulièrement. Connaître la décomposition de la distance d'arrêt prouve la maîtrise de la dynamique du véhicule, compétence évaluée au F(M).",
          },
          {
            situation: "Manœuvre dans un parking souterrain à 5 km/h, vous sentez la moto vous échapper.",
            question: "Comment retrouver de la stabilité ?",
            answer: "Donner un léger filet de gaz tout en maintenant le frein arrière. L'effet gyroscopique étant inopérant à cette vitesse, on stabilise par la traction sur la roue arrière freinée.",
            reasoning: "Technique 'gaz contre frein' enseignée en formation moto pro. Indispensable pour les pickups en parking, parkings d'aéroports et zones de chargement étroites.",
          },
        ],
        examWarning: "Confusion classique : la distance d'arrêt n'augmente PAS proportionnellement à la vitesse. C'est le carré.",
        confusionPoints: [
          "Distance de réaction ≠ distance de freinage (les 2 composent la distance d'arrêt)",
          "Effet gyroscopique = stabilisant à vitesse, NUL à basse vitesse",
        ],
        tips: ["Règle pro : 'distance de sécurité = 2 secondes' (3 par temps de pluie)"],
        legalRefs: ["Référentiel RS5636 – F(M)", "Code de la route R.412-12 (distance de sécurité)"],
      },
      {
        id: 'vmd-conduite-preventive',
        title: "Conduite préventive & situations d'urgence",
        essential: "Anticiper > réagir. Le freinage d'urgence se fait avec les deux freins, moto droite, regard porté loin. En courbe, ne jamais bloquer les roues : préférer l'évitement.",
        narrative: "La conduite préventive repose sur trois piliers : observation, anticipation, marges de sécurité. L'observation, c'est balayer en permanence le champ visuel à 360° (rétros, angles morts, intersections). L'anticipation, c'est lire les indices : enfant au bord du trottoir, voiture qui ralentit sans clignoter, bus à l'arrêt. Les marges, c'est garder une distance avant (≥ 2 secondes), latérale (couloirs, portières), et adapter la vitesse à la visibilité.\n\nEn situation d'urgence, le pilote pro doit avoir des automatismes. Le freinage d'urgence se fait moto droite, regard porté loin (jamais sur l'obstacle, sinon on y va), avec une répartition typique 70 % avant / 30 % arrière sur le sec. L'ABS, désormais obligatoire sur toute moto neuve > 125 cm³ depuis 2017, empêche le blocage mais ne réduit pas la distance — il préserve la trajectoire.\n\nL'évitement obéit à la règle du regard : 'on va où on regarde'. En cas d'obstacle soudain, regarder la sortie (et non l'obstacle), incliner la moto par contre-braquage léger, puis redresser. Freiner FORT en courbe = chute quasi certaine ; mieux vaut élargir la trajectoire et continuer.",
        keyPoints: [
          "Triade : Observation – Anticipation – Marges de sécurité",
          "Freinage urgence : 2 freins, moto droite, regard loin (~70/30 avant/arrière sec)",
          "ABS obligatoire sur motos neuves > 125 cm³ depuis 2017",
          "Évitement : regard porté vers la sortie (jamais l'obstacle)",
          "Bannir le freinage fort en courbe = chute",
        ],
        practicalCases: [
          {
            situation: "Une voiture vous coupe la route à 30 m, vous roulez à 50 km/h moto inclinée en virage.",
            question: "Que faites-vous ?",
            answer: "Redresser la moto AVANT de freiner. Puis freinage des deux freins, regard vers la zone de sortie. Si l'obstacle reste, contre-braquage léger pour évitement.",
            reasoning: "Freiner fort en virage bloque la roue avant inclinée = chute immédiate. La séquence est toujours : redresser, freiner, évacuer.",
          },
          {
            situation: "Conduite sur autoroute à 110 km/h, pluie soudaine, file de droite ralentit brusquement.",
            question: "Réflexe pro attendu ?",
            answer: "Ralentir progressivement par décélération moteur + freinage doux des deux freins, augmenter la distance de sécurité à 3 secondes, allumer les feux de détresse si bouchon brutal.",
            reasoning: "Sous la pluie, distance d'arrêt × 1,5 à 2. Le pompage du frein avant à pleine vitesse sur sol mouillé = perte d'adhérence. ABS aide mais ne fait pas de miracle.",
          },
        ],
        examWarning: "Freinage uniquement à l'avant OU freinage en virage = piège classique des questions QCM, réponse toujours INCORRECTE.",
        confusionPoints: [
          "ABS ≠ réduction de distance, mais préservation de trajectoire",
          "Regard vers la sortie ≠ regard sur l'obstacle (on va où on regarde)",
        ],
        tips: ["Mnémo freinage : 'DROIT – DEUX – LOIN' (moto droite, deux freins, regard loin)"],
        legalRefs: ["Référentiel RS5636 – F(M)", "Règlement UE 168/2013 (ABS obligatoire)"],
      },
      {
        id: 'vmd-entretien',
        title: 'Vérifications & entretien du véhicule',
        essential: "Le conducteur engage sa responsabilité civile ET pénale sur l'état mécanique de sa moto. Contrôle visuel obligatoire avant chaque prise de service.",
        narrative: "Le moto-taxi est responsable de l'état de son outil de travail. La jurisprudence est claire : en cas d'accident lié à un défaut mécanique (pneus lisses, frein défaillant, éclairage HS), la responsabilité pénale du conducteur est engagée — au titre de l'article 121-3 du Code pénal (mise en danger par négligence).\n\nLe contrôle pré-service tient en 2-3 minutes et couvre les points vitaux : PNEUS (pression à froid selon constructeur, usure mini légale 1 mm sur toute la surface, état général sans hernie ni coupure), FREINS (test statique avant départ, course de levier normale), ÉCLAIRAGE (feux croisement/route, position, stop, clignotants, plaque), NIVEAUX (huile moteur, liquide de frein dans le réservoir, liquide de refroidissement si visible), COMMANDES (gaz, embrayage retour franc).\n\nL'entretien périodique suit le carnet constructeur (révisions tous les 6 000 à 10 000 km selon modèle). Le carnet d'entretien à jour est une PREUVE en cas de contrôle ou de litige assurance. Pour un VMDTR, on recommande une révision rapprochée tous les 4 000 à 5 000 km vu l'intensité d'usage.",
        keyPoints: [
          "Responsabilité pénale du conducteur sur l'état du véhicule",
          "Contrôle pré-service : Pneus, Freins, Éclairage, Niveaux, Commandes (PFENC)",
          "Usure pneu : 1 mm mini légal (constructeur recommande 2-3 mm)",
          "Carnet d'entretien à jour = preuve en cas de litige",
          "Révisions rapprochées pour usage pro intensif",
        ],
        practicalCases: [
          {
            situation: "Vous constatez le matin que votre pneu arrière est à la limite légale (1 mm). Votre prochaine course est dans 30 minutes.",
            question: "Que devez-vous faire ?",
            answer: "Reporter la course ou la passer à un confrère, et faire remplacer le pneu immédiatement. À la limite légale, on est déjà en zone d'usure dangereuse pour un usage pro.",
            reasoning: "1 mm = minimum réglementaire pour usage occasionnel. Pour un pro qui roule sur tous types de chaussées, la sécurité commande un changement dès 2 mm. Engagement de responsabilité en cas d'accident sinon.",
          },
          {
            situation: "Lors d'un contrôle routier, le gendarme constate que votre feu stop arrière ne fonctionne pas.",
            question: "Quelles conséquences ?",
            answer: "Amende forfaitaire (135 € classe 4) + immobilisation possible du véhicule + responsabilité aggravée en cas d'accident postérieur. Carte pro intacte, mais signalement préfecture possible si récidive.",
            reasoning: "Éclairage défaillant = défaut de sécurité immédiat. Le pro doit aussi être conscient que l'assurance peut invoquer un manquement aux vérifications pré-service.",
          },
        ],
        examWarning: "L'oubli des vérifications n'est PAS une excuse. Le pro est présumé connaître l'état de son véhicule.",
        tips: ["Astuce : photo du carnet d'entretien sur smartphone = preuve toujours dispo"],
        legalRefs: ["Référentiel RS5636 – F(M)", "Code de la route R.314-1 (pneumatiques)", "Code pénal 121-3"],
      },
      {
        id: 'vmd-carte-pro',
        title: 'Carte professionnelle VMDTR',
        essential: "Délivrée par le préfet après réussite de l'examen RS5636. Validité 5 ans, renouvelable avec formation continue. Permis de catégorie A en cours de validité depuis au moins 3 ans obligatoire.",
        narrative: "La carte professionnelle VMDTR (Véhicule Motorisé à Deux ou Trois Roues) est régie par les articles L.3123-1 et suivants du Code des transports, issus de la loi Thévenoud du 1er octobre 2014. Elle conditionne l'exercice légal de l'activité : sans carte, c'est exercice illégal d'une profession réglementée (sanctions pénales jusqu'à 1 an d'emprisonnement et 15 000 € d'amende — Art. L.3124-9).\n\nLes conditions de délivrance sont strictes : être titulaire d'un permis de catégorie A en cours de validité depuis au moins 3 ans (le permis B seul ne suffit jamais pour le VMDTR), avoir réussi l'examen organisé par les chambres des métiers et de l'artisanat (CMA), justifier d'une aptitude médicale (examen par médecin agréé), produire un bulletin n°2 de casier judiciaire compatible (condition d'honorabilité).\n\nLa carte est délivrée par le préfet du département de résidence (jamais la mairie, attention au piège QCM). Elle est valable 5 ans. Le renouvellement est conditionné à une formation continue de 14 h en CMA agréée. Elle doit être présentée à toute réquisition des forces de l'ordre et apposée de manière visible sur le véhicule pendant l'exploitation.",
        keyPoints: [
          "Cadre légal : loi Thévenoud 2014, Code des transports L.3123-1+",
          "Délivrée par le PRÉFET (pas la mairie, pas la CMA)",
          "Conditions : permis A ≥ 3 ans, examen RS5636, aptitude médicale, honorabilité",
          "Validité 5 ans, renouvellement avec formation continue de 14 h",
          "Exercice sans carte = délit (1 an + 15 000 €)",
        ],
        practicalCases: [
          {
            situation: "Vous venez d'obtenir votre permis A il y a 18 mois et souhaitez vous lancer comme VMDTR.",
            question: "Pouvez-vous passer l'examen et obtenir votre carte pro ?",
            answer: "NON. La condition est de détenir le permis de catégorie A depuis au moins 3 ans. Vous devez attendre encore 18 mois.",
            reasoning: "L'expérience moto minimale est une garantie de sécurité non négociable. La durée est la même que pour le taxi et le VTC (permis B ≥ 3 ans) — seule la catégorie de permis change (A pour le deux-roues).",
          },
          {
            situation: "Votre carte pro arrive à échéance dans 3 mois. Vous n'avez pas encore fait votre formation continue.",
            question: "Risquez-vous de perdre votre droit d'exercer ?",
            answer: "OUI si vous ne réalisez pas les 14 h de formation continue avant l'échéance. À défaut, la carte n'est pas renouvelée et vous devez cesser l'activité jusqu'à régularisation.",
            reasoning: "Le renouvellement n'est jamais automatique. La formation continue (sécurité routière, réglementation, gestion) est une obligation introduite pour maintenir le niveau pro.",
          },
        ],
        examWarning: "Pièges QCM fréquents : c'est le PRÉFET (pas la mairie, pas la CMA) qui DÉLIVRE la carte. La CMA organise seulement l'examen.",
        confusionPoints: [
          "VMDTR = permis A ≥ 3 ans ≠ VTC = permis B ≥ 3 ans (même durée, catégorie différente)",
          "Examen organisé par CMA ≠ délivrance par préfet",
        ],
        tips: ["Retenir : '5 ans / 14 heures' = validité / formation continue"],
        legalRefs: ["Code des transports L.3123-1 à L.3123-4", "Loi Thévenoud du 1er octobre 2014", "Arrêté du 11 août 2017 (formation continue)"],
      },
      {
        id: 'vmd-reservation',
        title: 'Réservation préalable obligatoire (interdiction de maraude)',
        essential: "Le VMDTR ne peut prendre un client QU'APRÈS RÉSERVATION préalable. Pas de maraude, pas de stationnement sur emplacements taxis. C'est la frontière juridique majeure avec le taxi.",
        narrative: "Le principe de séparation entre taxi et VMDTR/VTC est posé par l'article L.3120-2 du Code des transports : seuls les taxis peuvent prendre un client 'sur la voie publique' sans réservation préalable (maraude). Les VTC et VMDTR, eux, sont soumis à l'obligation absolue de réservation préalable, formalisée par un justificatif daté (SMS, mail, capture d'app, ticket plateforme).\n\nConcrètement, cela interdit : 1) de stationner sur des emplacements réservés aux taxis (sanction = amende + immobilisation), 2) de circuler à vide en cherchant le client visuellement (la 'maraude électronique' via géolocalisation d'une app reste tolérée tant qu'il y a réservation), 3) de prendre un client qui hèle en pleine rue sans réservation préalable (refus obligatoire).\n\nAprès dépose du client, le VMDTR doit retourner à son lieu d'établissement ou se mettre en attente d'une nouvelle réservation, sans stationner aux endroits réservés aux taxis (gares, aéroports, stations dédiées). Cette obligation est contrôlée : en cas de doute, présenter le justificatif de réservation aux forces de l'ordre. Sans justificatif, présomption d'exercice illégal de la profession de taxi.",
        keyPoints: [
          "Cadre légal : Code des transports L.3120-2 et L.3123-2",
          "Réservation préalable OBLIGATOIRE (SMS, app, mail, plateforme)",
          "Justificatif daté à présenter en cas de contrôle",
          "Stationnement sur emplacement taxi = interdit",
          "Maraude (héler dans la rue) = exercice illégal de la profession de taxi",
        ],
        practicalCases: [
          {
            situation: "Vous venez de déposer un client à la gare de Lyon. Un voyageur sort, vous fait signe et demande à être conduit à Bastille.",
            question: "Pouvez-vous accepter cette course immédiatement ?",
            answer: "NON. Sans réservation préalable, c'est de la maraude illégale. Vous devez demander au client de réserver via une plateforme ou par téléphone, attendre la confirmation, puis accepter.",
            reasoning: "Même si le client est devant vous et veut payer, prendre la course sans réservation = exercice illégal de la profession de taxi (Art. L.3124-9 : 1 an de prison + 15 000 €). La réservation doit précéder, même de 30 secondes.",
          },
          {
            situation: "Vous attendez votre prochain client. Il n'y a aucune place libre en zone autorisée près de l'hôtel. La station taxi à 30 m est vide.",
            question: "Pouvez-vous stationner sur l'emplacement taxi quelques minutes ?",
            answer: "NON, jamais. Stationner sur un emplacement taxi est interdit aux VMDTR/VTC, même temporairement, même si la station est vide. Amende + risque d'immobilisation.",
            reasoning: "Les stations taxi font partie des prérogatives exclusives de la profession de taxi (loi Thévenoud). Aucune exception. Préférer un stationnement en voirie autorisée ou repartir et revenir à l'heure du RDV.",
          },
        ],
        examWarning: "Confusion N°1 du QCM : 'Le VMDTR peut-il prendre un client qui le hèle ?' → TOUJOURS NON sans réservation préalable.",
        confusionPoints: [
          "Taxi = maraude + stationnement réservé + compteur horokilométrique",
          "VMDTR/VTC = réservation préalable obligatoire + prix annoncé à l'avance",
        ],
        tips: ["Réflexe : 'Pas de réservation = pas de course' (et pas d'amende)"],
        legalRefs: ["Code des transports L.3120-2", "Code des transports L.3123-2", "Code des transports L.3124-9 (sanctions)"],
      },
      {
        id: 'vmd-vehicule',
        title: 'Caractéristiques du véhicule & signalétique',
        essential: "Puissance > 40 kW et moins de 5 ans d'ancienneté (arrêté du 17 mars 2015). Signalétique réglementaire VMDTR obligatoire ; interdiction stricte des dispositifs visuels propres aux taxis (lumineux, damier).",
        narrative: "Les caractéristiques du véhicule VMDTR sont fixées par la réglementation (Code des transports et arrêté du 17 mars 2015). Le véhicule doit être un 2 ou 3 roues motorisé dont la puissance, inscrite sur le certificat d'immatriculation, est SUPÉRIEURE à 40 kW, et dont l'ancienneté est INFÉRIEURE à 5 ans. Autre spécificité : pas de contrôle technique, mais un entretien annuel attesté. S'y ajoute un équipement minimum de sécurité : ABS obligatoire (depuis 2017 pour les motos neuves > 125 cm³), béquille latérale stable, top-case homologué pour le rangement EPI passager.\n\nLa signalétique réglementaire prend la forme d'une vignette d'identification apposée de manière visible sur le véhicule, généralement à l'arrière. Elle mentionne le numéro d'inscription au registre des exploitants VTC/VMDTR géré par le ministère des Transports. Cette vignette permet aux contrôleurs et aux clients de vérifier l'authenticité de l'exploitant.\n\nA contrario, le VMDTR a INTERDICTION d'utiliser tout dispositif visuel évoquant le taxi : pas de lumineux 'TAXI' sur le top-case, pas de damier sur la carrosserie, pas de compteur horokilométrique apparent. Le non-respect = présomption d'exercice illégal de la profession de taxi. L'esprit du législateur : éviter toute confusion dans l'esprit du public.",
        keyPoints: [
          "Cadre : Code des transports + arrêté du 17 mars 2015",
          "Puissance > 40 kW (carte grise) et ancienneté < 5 ans",
          "Pas de contrôle technique, mais entretien annuel attesté",
          "ABS obligatoire (motos neuves > 125 cm³ depuis 2017)",
          "Vignette d'identification VMDTR visible sur le véhicule",
          "INTERDICTION lumineux/damier/compteur taxi",
        ],
        practicalCases: [
          {
            situation: "Vous achetez un top-case et le commerçant vous propose un autocollant lumineux 'MOTO TAXI' pour mieux vous faire repérer.",
            question: "Pouvez-vous l'apposer ?",
            answer: "NON. Toute mention 'TAXI' (lumineux, autocollant, peinture) est strictement interdite aux VMDTR. Risque d'exercice illégal de la profession de taxi.",
            reasoning: "Le terme 'taxi' est juridiquement réservé. Le bon usage : 'Moto VTC' ou 'Transport moto privé', mentions neutres autorisées. Préférer le branding de la plateforme ou un logo propre.",
          },
          {
            situation: "Votre moto a 6 ans et 120 000 km. Elle est parfaitement entretenue.",
            question: "Pouvez-vous continuer à l'utiliser comme outil pro ?",
            answer: "Non. L'arrêté du 17 mars 2015 impose une ancienneté de moins de 5 ans pour les véhicules VMDTR. Le bon entretien ne dispense pas du respect de la limite d'âge réglementaire.",
            reasoning: "La limite d'âge est une mesure d'ordre public liée à la sécurité et à la qualité de service. À 6 ans, le véhicule doit être remplacé pour poursuivre l'activité, quelle que soit sa condition mécanique.",
          },
        ],
        confusionPoints: [
          "VMDTR ≠ taxi : pas de lumineux, pas de damier, pas de compteur",
          "Vignette d'identification (VMDTR) ≠ plaque taxi ADS",
        ],
        tips: ["Règle d'or : 'Discrétion réglementée, vignette obligatoire'"],
        legalRefs: ["Code des transports R.3123-1 à R.3123-4", "Arrêté du 17 mars 2015 (caractéristiques VMDTR)", "Arrêté du 6 avril 2017 (signalétique)"],
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
        essential: "Stationner en sécurité hors voie circulée, expliquer la position, fournir et faire enfiler les EPI, charger les bagages dans le top-case. La sécurité commence à l'arrêt, pas en roulant.",
        narrative: "La prise en charge du passager est une séquence codifiée par le référentiel RS5636 — elle se déroule en 4 temps : 1) sécurisation de l'arrêt (emplacement hors voie circulée, feux de détresse si besoin, béquille latérale sur sol stable), 2) accueil et identification du client (nom, destination confirmée, justificatif de réservation), 3) équipement (remise et ajustement du casque homologué, des gants certifiés, vérification de la tenue), 4) briefing puis montée en moto.\n\nLe choix de l'emplacement de pickup est crucial : éviter les zones de stationnement gênant (sanction immédiate), privilégier les aires de dépose-minute aéroport, les voies de service hôtel, les zones de livraison autorisées au transport de personnes. À Paris, certaines stations dédiées (Roissy, Orly, gares) imposent des règles spécifiques d'attente — se renseigner avant.\n\nLe chargement des bagages se fait dans le top-case homologué (volume typique 47-55 L). Bagages trop volumineux = course refusée ou re-routage vers un confrère en 4-roues. Un VMDTR ne transporte JAMAIS de bagage attaché en sandow à l'extérieur (interdit, dangereux, et contraire à l'image pro).",
        keyPoints: [
          "Séquence : sécuriser arrêt → accueil → équipement → briefing → départ",
          "Stationnement hors voie circulée + béquille sur sol stable",
          "Vérification réservation + identité client",
          "Bagages = top-case homologué uniquement (jamais sandow)",
          "Refus de course si bagages > capacité top-case",
        ],
        practicalCases: [
          {
            situation: "Pickup d'un client devant un hôtel parisien à 8h, double file, klaxons.",
            question: "Comment sécurisez-vous la prise en charge ?",
            answer: "Activer les feux de détresse, se placer le plus à droite possible (ou utiliser la voie de livraison hôtel si autorisée), inviter le client à venir vers la moto plutôt qu'à se placer côté circulation, équiper rapidement, partir.",
            reasoning: "L'objectif est de minimiser la durée d'exposition au trafic. La sécurité du client passe avant le confort de l'arrêt. Si la zone est trop dangereuse, redonner RDV 50 m plus loin dans une zone sûre.",
          },
          {
            situation: "Le client arrive avec une valise rigide de 70 L pour aller à Roissy.",
            question: "Acceptez-vous la course ?",
            answer: "Non si elle dépasse la capacité du top-case homologué. Proposer un service confrère 4-roues, ou diriger vers une plateforme partenaire. Ne JAMAIS attacher la valise en sandow.",
            reasoning: "L'attache extérieure est interdite (R.412-3 Code de la route — chargement non sécurisé) et dangereuse (déséquilibre, perte en virage). C'est aussi un point de refus de prise en charge légitime, non considéré comme refus de course illégal.",
          },
        ],
        tips: ["Astuce pro : photo bagages avant départ = preuve en cas de litige client"],
        legalRefs: ["Référentiel RS5636 – G(M)", "Code de la route R.412-3 (chargement)"],
      },
      {
        id: 'vmd-consignes-passager',
        title: 'Consignes au passager avant départ',
        essential: "Briefer le passager est une obligation pro (référentiel G(M)). 30 secondes de consignes claires = trajet sûr. Position, comportement en virage, communication, conduite à tenir en cas d'imprévu.",
        narrative: "Le briefing passager est l'un des points les plus évalués au G(M). Il se structure autour de 4 messages clés :\n\n1) POSITION : pieds toujours sur les repose-pieds (même à l'arrêt aux feux), mains posées sur les poignées de maintien du top-case ou autour de la taille du conducteur, dos droit, regard par-dessus l'épaule du conducteur (pas sur le côté qui crée un déséquilibre).\n\n2) COMPORTEMENT EN VIRAGE : ACCOMPAGNER l'inclinaison du conducteur (ne jamais 'contrer' en se redressant — c'est la cause majeure de chute avec passager novice). Regarder dans la même direction que le conducteur.\n\n3) COMMUNICATION : si intercom Bluetooth (standard moderne), tester avant départ. Sinon, signes convenus : tape épaule droite = arrêt rapide nécessaire, tape épaule gauche = ralentissement souhaité.\n\n4) CONDUITE EN CAS D'IMPRÉVU : ne pas descendre tant que le conducteur n'a pas dit 'OK', en cas de chute lâcher la moto et rouler sur le côté.\n\nCe briefing engage la responsabilité pro : un client non briefé qui chute peut invoquer un défaut de conseil.",
        keyPoints: [
          "Briefing OBLIGATOIRE avant chaque course (référentiel G(M))",
          "Position : pieds sur repose-pieds permanents, mains à l'arrière ou ceinture",
          "Virage : ACCOMPAGNER (ne jamais contrer)",
          "Communication : intercom ou signes convenus",
          "Imprévu : ne pas descendre sans accord du conducteur",
        ],
        practicalCases: [
          {
            situation: "Client habitué qui prend la moto pour la 10ème fois cette semaine. Pressé.",
            question: "Devez-vous quand même faire le briefing ?",
            answer: "Pour un client régulier, un briefing 'flash' (10 sec : 'on est prêt ?') suffit s'il est manifestement à l'aise. Mais pour un client nouveau, briefing complet OBLIGATOIRE quoi qu'il dise.",
            reasoning: "Le devoir de conseil est gradué par la connaissance du client. Tracer dans son journal de bord (ou app) la régularité des clients pour justifier la pratique en cas de litige.",
          },
          {
            situation: "Vous abordez un rond-point. Le passager se redresse au lieu d'accompagner l'inclinaison.",
            question: "Quelle est la bonne réaction ?",
            answer: "Élargir la trajectoire pour compenser, réduire l'inclinaison, et à l'arrêt suivant ré-expliquer rapidement la consigne d'accompagnement.",
            reasoning: "Un passager qui contre déséquilibre fortement la moto. La compensation par élargissement est un réflexe technique enseigné en formation moto pro. Ne jamais 'forcer' l'inclinaison contre la réaction du passager.",
          },
        ],
        examWarning: "Question type tombée : 'Le conducteur doit-il donner des consignes au passager ?' → TOUJOURS OUI, obligation.",
        tips: ["Mnémo briefing : P.A.C.I. = Position, Accompagnement, Communication, Imprévu"],
        legalRefs: ["Référentiel RS5636 – G(M)", "Obligation de conseil du transporteur (jurisprudence)"],
      },
      {
        id: 'vmd-epi',
        title: 'Équipements de protection individuelle (EPI)',
        essential: "Casque homologué + gants certifiés CE moto = OBLIGATOIRES pour le conducteur ET le passager. Article R.431-1 du Code de la route. Pas d'EPI = pas de départ, refus de transport obligatoire.",
        narrative: "L'obligation du casque homologué pour conducteur ET passager d'un 2-roues motorisé remonte à 1973 (Art. R.431-1 du Code de la route). Depuis le 20 novembre 2016, s'y ajoute l'obligation de gants certifiés CE moto pour les deux occupants. Ce sont des obligations LÉGALES, pas des recommandations.\n\nLes normes en vigueur : casque homologué ECE 22.05 ou la nouvelle norme ECE 22.06 (entrée en vigueur progressive depuis 2021, plus exigeante sur les impacts obliques). Gants certifiés CE EN 13594 (norme spécifique gants moto, niveau 1 ou 2). Tout casque jet, intégral, modulable est accepté tant qu'il porte l'étiquette d'homologation ; les casques 'fashion', 'bol' non homologués sont INTERDITS.\n\nEn pratique pro, le VMDTR fournit les EPI au passager : casque (souvent en plusieurs tailles XS-XL, vérifié et nettoyé entre chaque client), gants, et idéalement blouson de protection. Le client peut refuser le casque proposé et apporter le sien si conforme. Si le client refuse de porter le casque ou les gants = REFUS DE TRANSPORT obligatoire (et non discriminatoire au sens de la loi).\n\nSanction pour défaut de casque : amende forfaitaire 135 €, retrait 3 points pour le conducteur ; pour défaut de gants : amende 68 € + 1 point.",
        keyPoints: [
          "Casque homologué ECE 22.05/22.06 OBLIGATOIRE (conducteur + passager)",
          "Gants certifiés CE EN 13594 OBLIGATOIRES depuis 20/11/2016",
          "VMDTR fournit généralement les EPI au passager",
          "Refus client d'EPI = refus de transport LÉGITIME (non discriminatoire)",
          "Sanction défaut casque : 135 € + 3 points ; gants : 68 € + 1 point",
        ],
        practicalCases: [
          {
            situation: "Le client refuse de porter le casque que vous lui proposez 'parce qu'il vient juste de se coiffer pour un rendez-vous important'.",
            question: "Que faites-vous ?",
            answer: "Refus de transport obligatoire. Vous expliquez calmement que c'est une obligation légale dont le non-respect engage votre responsabilité pénale, et vous annulez la course (sans pénalité pour vous).",
            reasoning: "Aucune obligation contractuelle ne peut primer sur une obligation pénale. La jurisprudence est constante : transporter un passager sans casque = délit, et le client refusant n'est pas en droit de l'exiger.",
          },
          {
            situation: "Un client arrive avec son propre casque, mais vous remarquez qu'il n'a pas d'étiquette d'homologation visible.",
            question: "Pouvez-vous accepter ?",
            answer: "Non sans vérification. Demander à voir l'étiquette ECE à l'intérieur. Si absente ou abîmée, proposer un casque de la moto. Si refus, refus de transport.",
            reasoning: "L'homologation est la garantie de protection en cas de choc. Un casque non homologué n'a pas démontré sa capacité à absorber l'énergie d'impact = mise en danger.",
          },
        ],
        examWarning: "Confusion classique : 'Seul le conducteur doit porter le casque' → FAUX. Passager AUSSI obligatoirement.",
        confusionPoints: [
          "Casque obligatoire conducteur + passager (pas seulement conducteur)",
          "Gants obligatoires depuis 2016 (pas seulement recommandés)",
        ],
        tips: ["Réflexe pro : 'Pas de casque = pas de départ' (et pas de procès)"],
        legalRefs: ["Code de la route R.431-1 (casque)", "Décret n°2016-1232 (gants obligatoires)", "Norme ECE 22.05/22.06"],
      },
      {
        id: 'vmd-peur-passager',
        title: 'Gestion de la peur du passager',
        essential: "Anticiper et désamorcer la peur évite les mouvements parasites qui déséquilibrent la moto. Conduite progressive, communication, adaptation au profil sont les leviers du pro.",
        narrative: "La peur est une réaction physiologique normale pour 50 à 70 % des passagers novices. Elle se traduit par : raideur du corps (épaules contractées), tendance à contre-incliner en virage, mouvements brusques, agrippement excessif au conducteur. Tous ces signes augmentent l'instabilité de la moto et le risque de chute.\n\nLe rôle du pilote pro est triple. PRÉVENIR : identifier dès le briefing les signes de stress (questions répétitives, voix hésitante, gestes fermés) et adapter le ton (rassurant, posé, factuel). DÉTECTER en roulant : raideur perceptible dans le dos, mouvements de tête anxieux dans le rétro, agrippement marqué. ADAPTER : démarrer en douceur, virages amples au début, accélérations progressives, vitesse réduite de 10-15 % les premiers kilomètres, communication régulière par intercom ('tout va bien ?', 'on va bientôt prendre l'autoroute, vous me faites signe si trop vite').\n\nUne fois la confiance installée (généralement après 5-10 minutes), on peut revenir à un rythme normal. Mais certains passagers restent stressés tout le trajet : ne JAMAIS forcer le rythme par orgueil ou par contrainte horaire. Mieux vaut arriver 5 min en retard qu'avoir un passager qui contre-incline dans un virage rapide.",
        keyPoints: [
          "50-70 % des passagers novices ressentent de la peur en moto",
          "Signes : raideur, contre-inclinaison, agrippement, voix tendue",
          "Démarrer doux, virages amples, accélérations progressives",
          "Communication régulière (intercom ou signes) = clé de la confiance",
          "Ne jamais forcer le rythme : sécurité > horaire",
        ],
        practicalCases: [
          {
            situation: "Pickup d'une cliente pour un trajet Paris-Roissy, première fois en moto, visiblement anxieuse.",
            question: "Comment adaptez-vous votre conduite ?",
            answer: "Briefing rassurant et détaillé (5 min), démarrage en douceur, vitesse en ville réduite, virages amples, accélération progressive sur l'autoroute (60→90→110 km/h par paliers), check intercom toutes les 5-10 min, marges de sécurité augmentées.",
            reasoning: "L'expérience client conditionne la fidélisation. Une cliente stressée traumatisée ne rappellera jamais et postera un avis négatif. Une cliente rassurée devient ambassadrice.",
          },
          {
            situation: "En cours de trajet, le passager se met à crier 'plus doucement !' alors que vous êtes dans les limites légales.",
            question: "Quelle attitude pro ?",
            answer: "Acquiescer (signe de tête), ralentir immédiatement de 10-15 km/h, vérifier au prochain feu/arrêt que tout va bien, reprendre un rythme plus doux jusqu'à destination.",
            reasoning: "Le ressenti du passager prévaut sur la limitation légale. Une sensation de vitesse excessive génère du stress qui peut produire un mouvement parasite dangereux. La satisfaction client passe avant le chrono.",
          },
        ],
        examWarning: "Question piège : 'Si le passager a peur, faut-il accélérer pour finir vite ?' → NON, ralentir et rassurer.",
        tips: ["Phrase magique : 'On y va à votre rythme, vous me dites si trop vite'"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-marketing',
        title: 'Marketing & positionnement',
        essential: "Connaître son marché, cibler une clientèle prioritaire, valoriser des atouts différenciants. Le VMDTR gagne sur la rapidité urbaine, pas sur le prix bas.",
        narrative: "Le marché du VMDTR en France reste de niche (~1 500 à 2 000 pros actifs) mais en croissance régulière, porté par la congestion urbaine et les besoins d'urgence. Trois grands segments structurent l'activité :\n\n1) B2B PREMIUM (cadres pressés, dirigeants, déplacements aéroport-bureau) : marges fortes, clients fidèles, exigence de ponctualité absolue. Vente directe ou via conciergeries d'entreprise.\n\n2) AÉROPORT (Roissy, Orly, Le Bourget) : forte volumétrie, prix encadrés par la concurrence, nécessité d'être référencé sur plateformes ou en partenariat hôtel.\n\n3) URGENCE & MÉDICAL (transport d'échantillons biologiques, documents urgents, escorte de cadres en retard) : marges très fortes, créneau spécialisé exigeant disponibilité 24/7.\n\nLe positionnement doit s'articuler autour des 3 avantages structurels du 2-roues : rapidité (gain de 30-50 % en zone congestionnée), ponctualité (engagement sur l'horaire d'arrivée), agilité (accès aux zones interdites aux 4-roues). La guerre des prix avec les VTC est PERDUE d'avance : un VMDTR doit se vendre 20-30 % plus cher qu'un VTC standard, et le justifier par le gain de temps. Le prix juste = coût de revient (carburant, entretien, assurance, formation, charges, amortissement) + marge cohérente (typiquement 20-40 %).",
        keyPoints: [
          "Marché de niche en croissance (~1 500-2 000 pros)",
          "3 segments : B2B premium, aéroport, urgence/médical",
          "Avantages : rapidité (+30-50 %), ponctualité, agilité",
          "Positionnement prix : 20-30 % au-dessus du VTC standard",
          "Prix juste = coût de revient + marge cohérente (20-40 %)",
        ],
        practicalCases: [
          {
            situation: "Vous démarrez votre activité dans une ville moyenne (200 000 hab) sans grand aéroport.",
            question: "Quel positionnement marketing prioritaire ?",
            answer: "B2B premium local : démarcher les sièges d'entreprises, conciergeries de palaces, cabinets d'avocats/notaires pour transports inter-RDV urgents. Compléter par l'urgence médicale/coursier.",
            reasoning: "Sans aéroport majeur, le segment aéroport ne nourrit pas. Le B2B local fidélisé peut générer 60-80 % du CA avec 5-10 clients réguliers. Marge supérieure à la course occasionnelle.",
          },
          {
            situation: "Un nouveau VMDTR concurrent affiche des prix 25 % inférieurs aux vôtres.",
            question: "Devez-vous baisser vos tarifs ?",
            answer: "Non. Au contraire, renforcer la différenciation : qualité de service, ponctualité chiffrée (taux de retard < 2 %), témoignages clients, accessoires haut de gamme. Faire payer la fiabilité.",
            reasoning: "La guerre des prix mène à l'asphyxie financière. Sur un service premium, 80 % des clients B2B choisissent la fiabilité avant le prix. Le concurrent low-cost dispar en 6-12 mois sous les coûts d'exploitation.",
          },
        ],
        tips: ["Mantra commercial : 'Vendre du temps gagné, pas un trajet'"],
        legalRefs: ["Référentiel RS5636 – G(M)"],
      },
      {
        id: 'vmd-fidelisation',
        title: 'Fidélisation & prospection',
        essential: "Garder un client coûte environ 5 fois moins cher que d'en conquérir un nouveau (loi de Pareto marketing). La qualité de service constante + suivi proactif = base de la fidélisation pro.",
        narrative: "La fidélisation se construit sur quatre piliers : QUALITÉ CONSTANTE (ponctualité, courtoisie, hygiène moto/EPI irréprochable à chaque course), PERSONNALISATION (mémoriser les préférences : trajet habituel, température casque, marque d'eau préférée à offrir), SUIVI PROACTIF (anticiper les besoins récurrents — 'M. Dupont, je note votre Roissy de mercredi prochain ?'), AVANTAGES FIDÉLITÉ (tarifs préférentiels au-delà de X courses/mois, créneaux prioritaires).\n\nLa prospection B2B s'organise par cibles : hôtels 4-5* (conciergerie), entreprises de centre-ville (services généraux), cabinets d'avocats/notaires (urgences), studios de production (transports VIP), événements (Roland-Garros, Fashion Week, Salon du Bourget). La démarche se fait en porte-à-porte argumenté, avec carte de visite professionnelle, plaquette de référencement, et idéalement une course d'essai offerte.\n\nLe référencement sur plateformes (Heetch Moto, plateformes spécialisées B2B, conciergeries digitales type John Paul/Quintessentially) apporte un flux complémentaire, mais à marge réduite (commission 20-30 %). L'idéal pour un pro mature : 60-70 % de clients directs fidélisés + 30-40 % de plateforme pour combler les creux.\n\nATTENTION : la prospection ne peut JAMAIS prendre la forme de maraude. Pas de distribution de flyers en pleine rue à des passants, pas de stationnement 'pour se montrer' devant un hôtel sans réservation. Le démarchage doit être ciblé et professionnel (entreprises, conciergeries, RDV pris).",
        keyPoints: [
          "Garder un client = 5× moins cher qu'en conquérir un",
          "4 piliers : qualité constante, personnalisation, suivi proactif, avantages",
          "Prospection B2B : hôtels, entreprises, cabinets, événementiel",
          "Mix idéal : 60-70 % clients directs + 30-40 % plateformes",
          "Maraude reste INTERDITE même pour prospecter",
        ],
        practicalCases: [
          {
            situation: "Un client B2B vous appelle régulièrement (3 courses/semaine) depuis 6 mois. Il vous demande un 'tarif fidèle'.",
            question: "Quelle réponse pro ?",
            answer: "Accepter et formaliser : grille tarifaire dégressive contractuelle (ex : -10 % au-delà de 8 courses/mois), facturation mensuelle groupée si CA > 1 500 €/mois. Échange de courriers/mails pour tracer l'accord.",
            reasoning: "La fidélité doit être récompensée. La formalisation contractuelle sécurise les deux parties et permet d'absorber l'éventuel départ par un préavis. La facturation mensuelle améliore aussi votre trésorerie.",
          },
          {
            situation: "Vous souhaitez prospecter les hôtels 4* du quartier des Champs-Élysées.",
            question: "Comment vous y prendre légalement ?",
            answer: "Prendre rendez-vous avec les chefs de conciergerie (mail, appel), présenter en RDV votre offre (carte pro, plaquette, tarifs, références), proposer une course d'essai gratuite. Ne JAMAIS attendre devant l'hôtel pour démarcher les clients sortants.",
            reasoning: "Démarcher les clients sortants directement = maraude. L'approche pro passe par le canal officiel (conciergerie) qui devient prescripteur. Bonus : un partenariat conciergerie peut générer 20-30 courses/mois pérennes.",
          },
        ],
        examWarning: "Question piège : 'Peut-on attendre devant un hôtel pour proposer ses services aux clients sortants ?' → NON, c'est de la maraude.",
        tips: ["Pareto : 20 % de vos clients génèrent 80 % de votre CA — chouchoutez-les"],
        legalRefs: ["Référentiel RS5636 – G(M)", "Code des transports L.3120-2 (interdiction maraude)"],
      },
      {
        id: 'vmd-communication',
        title: 'Communication numérique & partenaires',
        essential: "Internet (site, réseaux sociaux, plateformes) et réseau de partenaires (hôtels, conciergeries, entreprises) sont les deux leviers d'acquisition principaux d'un VMDTR moderne.",
        narrative: "La communication d'un VMDTR moderne s'articule sur deux axes complémentaires : DIGITAL (visibilité, génération de leads) et PARTENARIATS (CA récurrent garanti).\n\nLe digital commence par un site web professionnel optimisé pour le référencement local (SEO local : 'moto taxi Paris', 'VMDTR Roissy'). Le site doit présenter clairement : services, tarifs indicatifs, zones desservies, contact (téléphone visible, formulaire, WhatsApp Business), références/témoignages, mentions légales conformes (Art. 19 LCEN). Les réseaux sociaux à cibler : LinkedIn pour la prospection B2B (publications régulières sur les actualités transport pro), Instagram pour l'image (photos de moto, témoignages, lifestyle pro), Google Business Profile pour le référencement local et les avis clients.\n\nL'inscription sur plateformes de réservation reconnues (Heetch Moto, plateformes B2B spécialisées) apporte un flux régulier mais avec commission (20-30 %). À utiliser comme complément, pas comme dépendance — un pro qui ne dépend qu'à 100 % d'une plateforme est en risque (déréférencement, baisse de commission unilatérale).\n\nLes partenariats sont le Graal commercial : un contrat-cadre avec un hôtel 4* peut représenter 10-30 courses/mois récurrentes ; un partenariat avec une conciergerie B2B (John Paul, Quintessentially, conciergeries d'entreprises) peut générer 50-100 courses/mois. Le partenariat repose sur la confiance : qualité irréprochable, disponibilité, facturation propre, communication fluide.",
        keyPoints: [
          "Site web pro avec SEO local (Google Business Profile crucial)",
          "LinkedIn = B2B, Instagram = image, Google Business = local",
          "Plateformes = flux complémentaire (max 30-40 % du CA)",
          "Partenariats = CA récurrent garanti (contrats-cadres)",
          "Ne jamais dépendre à 100 % d'un seul canal",
        ],
        practicalCases: [
          {
            situation: "Vous démarrez et n'avez aucune visibilité. Budget marketing limité à 500 € pour les 3 premiers mois.",
            question: "Quelles priorités ?",
            answer: "1) Google Business Profile (gratuit, prioritaire), 2) Site web simple via Squarespace/Wix (~150 €/an), 3) Cartes de visite + plaquette (~100 €), 4) RDV prospection 5 hôtels + 5 entreprises ciblés (gratuit, temps), 5) Inscription 1-2 plateformes pour démarrer (gratuit).",
            reasoning: "À budget serré, prioriser le gratuit/quasi-gratuit à fort ROI : Google Business génère 60 % des appels d'un service local. La prospection physique reste imbattable pour les premiers contrats partenaires.",
          },
          {
            situation: "Une plateforme représente 80 % de votre CA. Elle augmente sa commission de 25 % à 35 % du jour au lendemain.",
            question: "Quelle stratégie ?",
            answer: "Accepter à court terme pour maintenir le revenu, MAIS lancer immédiatement une diversification accélérée : prospection partenaires intensifiée, contenu LinkedIn quotidien, demande de RDV avec 10 conciergeries. Objectif : descendre cette plateforme à 40 % en 6 mois.",
            reasoning: "La dépendance à une plateforme est le principal risque structurel d'un VMDTR. Une augmentation unilatérale de commission est typique et inévitable. Seule la diversification protège la marge sur le long terme.",
          },
        ],
        examWarning: "La communication digitale doit respecter le RGPD (mentions légales, traitement des données clients) et la LCEN (transparence).",
        tips: ["Règle des 3 canaux : ne jamais dépendre à plus de 40 % d'une source d'acquisition"],
        legalRefs: ["Référentiel RS5636 – G(M)", "RGPD (règlement UE 2016/679)", "Loi LCEN du 21 juin 2004"],
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
