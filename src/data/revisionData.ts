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
