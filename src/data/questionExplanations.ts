// Explications pédagogiques détaillées pour chaque question T3P
// Basées sur le référentiel officiel

export interface QuestionExplanation {
  content: string;
  tip: string;
  legalRef?: string;
}

// Explications par ID de question
export const questionExplanations: Record<string, QuestionExplanation> = {
  // =====================
  // MODULE GESTION (ges-001 à ges-040)
  // =====================
  'ges-001': {
    content: "La publication d'une annonce légale est une formalité obligatoire lors de la création d'une société (SARL, SAS, EURL, SASU, SA...). Elle informe les tiers de la naissance de la nouvelle personne morale. Les entreprises individuelles et micro-entreprises n'ont pas cette obligation car elles n'ont pas de personnalité morale distincte.",
    tip: "Société = annonce légale obligatoire. Entreprise individuelle/micro = pas d'annonce légale.",
    legalRef: "Articles L232-22 et L238-3 du Code de commerce"
  },
  'ges-002': {
    content: "Un Centre de Gestion Agréé (CGA) est un organisme qui assiste les entreprises dans leur gestion comptable et fiscale. L'adhésion permet notamment de bénéficier d'une aide à la gestion, de conseils en matière fiscale et d'éviter certaines majorations de revenus imposables.",
    tip: "Le CGA aide à la gestion et offre des avantages fiscaux, mais ne dispense pas de tenir une comptabilité.",
    legalRef: "Article 1649 quater C du Code général des impôts"
  },
  'ges-003': {
    content: "La CRDS (Contribution au Remboursement de la Dette Sociale) est un prélèvement social créé en 1996 pour financer exclusivement le remboursement de la dette de la Sécurité sociale. Son taux est de 0,5% et elle s'applique sur les revenus d'activité, de remplacement et du patrimoine.",
    tip: "CRDS = Remboursement Dette Sociale. CSG = Financement Sécurité sociale. Ne pas confondre !",
    legalRef: "Ordonnance n°96-50 du 24 janvier 1996"
  },
  'ges-004': {
    content: "Le Répertoire des Métiers (RM) est le registre où doivent s'immatriculer les entreprises artisanales. Une activité artisanale se caractérise par l'exercice d'un métier manuel de production, transformation, réparation ou prestation de services. L'activité VTC est considérée comme artisanale.",
    tip: "Activité artisanale = Répertoire des Métiers. Activité commerciale = Registre du Commerce (RCS).",
    legalRef: "Article 19 de la loi n°96-603 du 5 juillet 1996"
  },
  'ges-005': {
    content: "L'amortissement comptable permet de répartir le coût d'acquisition d'un bien durable (véhicule, matériel...) sur sa durée d'utilisation prévue. Pour un véhicule professionnel, la durée d'amortissement est généralement de 4 à 5 ans. Cela réduit le bénéfice imposable chaque année.",
    tip: "Amortissement véhicule VTC : généralement 5 ans (20% par an). Plafond fiscal : 18 300€ ou 9 900€ selon le type de motorisation.",
    legalRef: "Article 39 du Code général des impôts"
  },
  'ges-006': {
    content: "Le coût de revient d'une prestation comprend l'ensemble des charges directes liées à sa réalisation : carburant, péages, usure du véhicule, temps de travail. Les charges indirectes (assurance, abonnement plateforme) sont réparties sur l'ensemble des prestations.",
    tip: "Coût de revient = charges directes + quote-part des charges indirectes. Il doit être inférieur au prix de vente pour dégager une marge.",
    legalRef: "Plan Comptable Général - Article 213-1"
  },
  'ges-007': {
    content: "L'immatriculation d'une entreprise (au RCS ou RM) lui confère son existence légale et sa reconnaissance juridique. Elle permet d'obtenir un numéro SIREN/SIRET, de facturer légalement et d'exercer son activité en conformité avec la loi.",
    tip: "Pas d'immatriculation = pas d'existence légale = activité illégale (travail dissimulé).",
    legalRef: "Article L123-1 du Code de commerce"
  },
  'ges-008': {
    content: "L'entreprise individuelle (EI) est la forme juridique la plus simple : pas de capital minimum requis, formalités de création allégées, décisions prises seul par l'entrepreneur. Depuis 2022, le patrimoine personnel est protégé par défaut (sauf option contraire).",
    tip: "EI = simplicité et autonomie. Pas de capital minimum, pas d'associé, pas de personnalité morale distincte.",
    legalRef: "Loi n°2022-172 du 14 février 2022 (réforme EI)"
  },
  'ges-009': {
    content: "L'EBE (Excédent Brut d'Exploitation) mesure la performance économique pure de l'entreprise, avant prise en compte des décisions financières et exceptionnelles. Il représente la capacité de l'entreprise à générer des ressources grâce à son activité principale.",
    tip: "EBE = Chiffre d'affaires - Achats - Charges externes - Charges de personnel - Impôts et taxes. Un EBE positif = activité rentable.",
    legalRef: "Plan Comptable Général - Soldes Intermédiaires de Gestion"
  },
  'ges-010': {
    content: "Le compte de résultat retrace l'ensemble des produits et des charges de l'exercice. Les achats consommés (carburant, fournitures...) figurent dans les charges d'exploitation, réduisant ainsi le résultat de l'entreprise.",
    tip: "Bilan = patrimoine à un instant T. Compte de résultat = activité sur une période (charges et produits).",
    legalRef: "Article L123-12 du Code de commerce"
  },
  'ges-011': {
    content: "Les Chambres de Métiers et de l'Artisanat (CMA) sont des établissements publics administratifs. Elles représentent les intérêts des artisans, tiennent le Répertoire des Métiers et proposent des formations et accompagnements aux entreprises artisanales.",
    tip: "CMA = établissement public pour les artisans. CCI = établissement public pour les commerçants.",
    legalRef: "Article 5-1 du Code de l'artisanat"
  },
  'ges-012': {
    content: "La cessation de paiement survient quand l'entreprise ne peut plus faire face à son passif exigible avec son actif disponible. Elle doit être déclarée au tribunal de commerce dans les 45 jours maximum, sous peine de sanctions pour le dirigeant.",
    tip: "Délai de déclaration : 45 jours maximum. Le tribunal peut alors ouvrir une procédure de redressement ou de liquidation.",
    legalRef: "Article L631-4 du Code de commerce"
  },
  'ges-013': {
    content: "Dans une SARL (Société à Responsabilité Limitée), le capital social est divisé en parts sociales détenues par les associés. Contrairement aux actions des SA/SAS, les parts sociales ne sont pas librement cessibles : leur cession à un tiers nécessite l'agrément des autres associés.",
    tip: "SARL = parts sociales (cession contrôlée). SAS/SA = actions (cession plus libre).",
    legalRef: "Articles L223-1 et suivants du Code de commerce"
  },
  'ges-014': {
    content: "Un gérant majoritaire de SARL (détenant plus de 50% des parts) relève du régime des Travailleurs Non Salariés (TNS). Il cotise à la SSI (Sécurité Sociale des Indépendants) et non au régime général. Ses cotisations sont généralement moins élevées mais sa protection sociale est moindre.",
    tip: "Gérant majoritaire SARL = TNS. Gérant minoritaire/égalitaire SARL = assimilé salarié. Président SAS/SASU = assimilé salarié.",
    legalRef: "Article L311-3 du Code de la sécurité sociale"
  },
  'ges-015': {
    content: "Le président d'une SAS ou SASU est 'assimilé salarié' : il relève du régime général de la Sécurité sociale, comme un salarié. Ses cotisations sont plus élevées que celles d'un TNS, mais sa couverture sociale est meilleure (retraite, prévoyance).",
    tip: "Président SAS/SASU = assimilé salarié (régime général). Pas de cotisation chômage sauf dispositif spécifique.",
    legalRef: "Article L311-3 du Code de la sécurité sociale"
  },
  'ges-016': {
    content: "La CSG (Contribution Sociale Généralisée) est une contribution sociale prélevée sur la plupart des revenus. Elle finance la Sécurité sociale (branche maladie, famille, vieillesse). Son taux varie selon le type de revenu (9,2% sur les revenus d'activité dont 6,8% déductibles).",
    tip: "CSG = financement Sécurité sociale. Taux sur salaires : 9,2% dont 6,8% déductibles de l'impôt sur le revenu.",
    legalRef: "Article L136-1-1 du Code de la sécurité sociale"
  },
  'ges-017': {
    content: "L'actif du bilan représente ce que l'entreprise possède : immobilisations (véhicules, matériel), stocks, créances clients, trésorerie. Le passif représente les ressources : capitaux propres (apports, résultats) et dettes (emprunts, fournisseurs).",
    tip: "Actif = emplois (ce que l'entreprise possède). Passif = ressources (comment c'est financé). Actif = Passif toujours.",
    legalRef: "Article L123-12 du Code de commerce"
  },
  'ges-018': {
    content: "Une charge déductible est une dépense professionnelle qui peut être soustraite du chiffre d'affaires pour calculer le bénéfice imposable. Elle doit être engagée dans l'intérêt de l'entreprise, justifiée par une facture et correspondre à une dépense réelle.",
    tip: "Charge déductible = dépense professionnelle + justificatif + intérêt de l'entreprise. Exemple : carburant, assurance, téléphone pro.",
    legalRef: "Article 39 du Code général des impôts"
  },
  'ges-019': {
    content: "Le code APE (Activité Principale Exercée) est attribué par l'INSEE lors de l'immatriculation. Il identifie l'activité principale de l'entreprise selon la nomenclature NAF. Pour les VTC, le code est généralement 49.32Z (transports de voyageurs par taxis).",
    tip: "Le code APE est indicatif et statistique, il ne détermine pas le régime fiscal ou les obligations sociales.",
    legalRef: "Décret n°2007-1888 du 26 décembre 2007"
  },
  'ges-020': {
    content: "Une activité artisanale se définit principalement par la nature du travail effectué : production, transformation, réparation ou prestation de services requérant un savoir-faire manuel. L'effectif (moins de 11 salariés initialement) peut aussi être un critère.",
    tip: "L'activité de VTC est considérée comme artisanale : transport de personnes requérant des compétences spécifiques.",
    legalRef: "Article 19 de la loi n°96-603 du 5 juillet 1996"
  },
  'ges-021': {
    content: "La durée de vie d'une société est fixée dans ses statuts et ne peut excéder 99 ans. Cette durée est prorogeable par décision des associés avant son expiration. À défaut de prorogation, la société est dissoute de plein droit.",
    tip: "Durée maximale = 99 ans, renouvelable. La prorogation doit être décidée avant l'échéance et publiée.",
    legalRef: "Article 1838 du Code civil"
  },
  'ges-022': {
    content: "Le bilan comptable respecte l'équation fondamentale : Actif = Passif. L'actif représente les emplois des ressources (ce que l'entreprise possède), le passif représente l'origine des ressources (capitaux propres + dettes).",
    tip: "Équation du bilan : ACTIF = PASSIF. Si le bilan ne 's'équilibre' pas, il y a une erreur comptable.",
    legalRef: "Plan Comptable Général - Cadre comptable"
  },
  'ges-023': {
    content: "La TVA à décaisser (ou TVA due) correspond à la différence entre la TVA collectée sur les ventes et la TVA déductible sur les achats. Si le résultat est positif, l'entreprise doit reverser cette somme à l'État. S'il est négatif, elle dispose d'un crédit de TVA.",
    tip: "TVA à payer = TVA collectée - TVA déductible. Crédit de TVA si TVA déductible > TVA collectée.",
    legalRef: "Article 271 du Code général des impôts"
  },
  'ges-024': {
    content: "Un investissement est une dépense destinée à acquérir un bien durable, utilisé pendant plusieurs exercices (plus d'un an). À l'inverse d'une charge, il n'est pas immédiatement déduit mais amorti sur sa durée d'utilisation prévue.",
    tip: "Investissement = bien durable (>1 an) = immobilisation à amortir. Charge = consommée immédiatement.",
    legalRef: "Article 38 quinquies de l'annexe III du CGI"
  },
  'ges-025': {
    content: "La TVA sur le carburant suit des règles spécifiques. Pour le gazole, elle est récupérable à 80% pour les véhicules de tourisme. Pour l'essence, elle est désormais récupérable à 80% également. Le GPL, le GNV et l'électricité sont récupérables à 100%.",
    tip: "Gazole/Essence : TVA récupérable à 80% (véhicules tourisme). Électricité/GPL/GNV : 100% récupérable.",
    legalRef: "Article 298-4-1° du Code général des impôts"
  },
  'ges-026': {
    content: "Les documents comptables (livres, pièces justificatives, factures) doivent être conservés pendant 10 ans à compter de la clôture de l'exercice. Cette obligation permet de répondre aux contrôles fiscaux et de justifier les écritures comptables.",
    tip: "Conservation 10 ans pour les documents comptables. 6 ans pour les documents fiscaux. 5 ans pour les documents sociaux.",
    legalRef: "Article L123-22 du Code de commerce"
  },
  'ges-027': {
    content: "Une personne morale (société, association) possède une existence juridique propre, distincte de celle de ses membres. Elle peut contracter, ester en justice, posséder un patrimoine. Elle est identifiée par sa dénomination sociale, son siège et son numéro SIREN.",
    tip: "Personne morale = entité juridique autonome avec droits et obligations. Personne physique = individu.",
    legalRef: "Article 1842 du Code civil"
  },
  'ges-028': {
    content: "Un gérant minoritaire ou égalitaire de SARL (détenant 50% ou moins des parts) est 'assimilé salarié'. Il relève du régime général de la Sécurité sociale, comme un salarié, avec des cotisations plus élevées mais une meilleure protection sociale.",
    tip: "Gérant minoritaire/égalitaire = assimilé salarié. Gérant majoritaire = TNS. Le seuil est à 50% des parts.",
    legalRef: "Article L311-3 du Code de la sécurité sociale"
  },
  'ges-029': {
    content: "Le résultat de l'exercice est la différence entre les produits et les charges. Si les produits (chiffre d'affaires, produits financiers) dépassent les charges (achats, salaires, amortissements), l'entreprise réalise un bénéfice. Dans le cas contraire, elle subit une perte.",
    tip: "Produits > Charges = Bénéfice. Charges > Produits = Perte (déficit).",
    legalRef: "Article L123-13 du Code de commerce"
  },
  'ges-030': {
    content: "Le compte de résultat présente les produits et charges de l'exercice et fait ressortir le résultat net (bénéfice ou perte). Il mesure la performance économique de l'entreprise sur une période donnée, généralement un an.",
    tip: "Compte de résultat = film de l'activité sur l'année. Bilan = photo du patrimoine à un instant T.",
    legalRef: "Article L123-13 du Code de commerce"
  },
  'ges-031': {
    content: "Les honoraires d'expert-comptable sont des charges externes d'exploitation. Ils sont entièrement déductibles du résultat fiscal s'ils correspondent à des prestations réelles effectuées dans l'intérêt de l'entreprise.",
    tip: "Honoraires comptables = charge déductible (compte 6226). Ils réduisent le bénéfice imposable.",
    legalRef: "Article 39-1 du Code général des impôts"
  },
  'ges-032': {
    content: "Une immobilisation incorporelle est un actif non physique utilisé durablement par l'entreprise : brevets, licences, logiciels, fonds de commerce, marques. Elle figure à l'actif du bilan et peut être amortie selon sa nature.",
    tip: "Incorporel = immatériel (brevet, logiciel). Corporel = physique (véhicule, mobilier). Financier = titres, prêts.",
    legalRef: "Article 211-1 du Plan Comptable Général"
  },
  'ges-033': {
    content: "La TVA collectée est la TVA facturée aux clients sur les prestations vendues. Elle constitue une dette envers l'État : le prestataire la collecte pour le compte du Trésor public et doit la reverser, après déduction de la TVA payée sur ses achats.",
    tip: "TVA collectée = dette envers l'État. TVA déductible = créance sur l'État. À ne pas confondre.",
    legalRef: "Article 256 du Code général des impôts"
  },
  'ges-034': {
    content: "Depuis la réforme de 2022, l'entrepreneur individuel bénéficie d'une séparation automatique de ses patrimoines personnel et professionnel. Seul le patrimoine professionnel peut être saisi par les créanciers professionnels, sauf exceptions (fraude, garanties personnelles).",
    tip: "Depuis 2022 : patrimoine personnel protégé par défaut en EI. Avant : responsabilité illimitée sauf option EIRL.",
    legalRef: "Loi n°2022-172 du 14 février 2022"
  },
  'ges-035': {
    content: "La micro-entreprise n'est pas une forme juridique mais un régime fiscal et social simplifié. Elle s'applique aux entreprises individuelles dont le CA ne dépasse pas certains seuils (77 700€ pour les services en 2024). Le calcul des charges est forfaitaire.",
    tip: "Micro-entreprise = régime fiscal/social, pas une forme juridique. On peut être EI au régime micro ou au régime réel.",
    legalRef: "Article 50-0 du Code général des impôts"
  },
  'ges-036': {
    content: "Une charge fixe (ou charge de structure) reste constante quel que soit le niveau d'activité : loyer, assurance, abonnements. À l'opposé, une charge variable évolue proportionnellement à l'activité : carburant, commissions.",
    tip: "Charges fixes = indépendantes du CA (assurance, loyer). Charges variables = proportionnelles au CA (carburant, commissions).",
    legalRef: "Analyse des coûts - Comptabilité de gestion"
  },
  'ges-037': {
    content: "Le seuil de rentabilité (ou point mort) est le niveau de chiffre d'affaires à partir duquel l'entreprise couvre toutes ses charges et commence à dégager du bénéfice. En dessous de ce seuil, l'entreprise est déficitaire.",
    tip: "Seuil de rentabilité = Charges fixes / Taux de marge sur coûts variables. Au-delà, chaque euro de CA génère du profit.",
    legalRef: "Analyse financière - Comptabilité de gestion"
  },
  'ges-038': {
    content: "L'amortissement permet d'étaler le coût d'un investissement sur sa durée d'utilisation. Cette charge comptable, non décaissée, réduit le bénéfice imposable tout en constituant une ressource interne pour le renouvellement du bien.",
    tip: "Amortissement = charge non décaissée qui réduit l'impôt. Exemple : véhicule 25 000€ sur 5 ans = 5 000€/an de charge.",
    legalRef: "Article 39 B du Code général des impôts"
  },
  'ges-039': {
    content: "Une bonne gestion implique de suivre régulièrement ses indicateurs (CA, marge, trésorerie), d'anticiper les échéances (fiscales, sociales, bancaires) et de prendre les décisions nécessaires avant que les difficultés ne deviennent irréversibles.",
    tip: "Gestion prévisionnelle = anticiper. Tableaux de bord mensuels + suivi de trésorerie = éviter les mauvaises surprises.",
    legalRef: "Bonnes pratiques de gestion d'entreprise"
  },
  'ges-040': {
    content: "La comptabilité remplit plusieurs fonctions : suivre l'activité au quotidien, calculer le résultat pour l'impôt, fournir des informations aux partenaires (banques, administrations), et constituer un outil d'aide à la décision pour le dirigeant.",
    tip: "Comptabilité = obligation légale + outil de gestion. Elle sert à piloter l'entreprise, pas seulement à payer ses impôts.",
    legalRef: "Article L123-12 du Code de commerce"
  },

  // =====================
  // MODULE SÉCURITÉ ROUTIÈRE (sec-001 à sec-040)
  // =====================
  'sec-001': {
    content: "Le temps de réaction est le délai entre la perception d'un danger et l'action sur les commandes (freins). En conditions normales, il est d'environ 1 seconde. Il peut augmenter significativement en cas de fatigue, d'alcool, de médicaments ou de distraction.",
    tip: "1 seconde de réaction = 14m parcourus à 50 km/h, 28m à 100 km/h. Ce temps s'ajoute à la distance de freinage.",
    legalRef: "Référentiel Sécurité routière - Formation conducteurs professionnels"
  },
  'sec-002': {
    content: "La distance d'arrêt dépend principalement de la vitesse (elle augmente avec le carré de la vitesse), mais aussi de l'état de la route (adhérence), des pneus, du système de freinage et des conditions météorologiques.",
    tip: "Distance d'arrêt = Distance de réaction + Distance de freinage. Elle quadruple quand la vitesse double !",
    legalRef: "Article R413-17 du Code de la route"
  },
  'sec-003': {
    content: "L'alcool altère toutes les fonctions nécessaires à la conduite : réflexes ralentis, champ visuel rétréci, mauvaise appréciation des distances et des vitesses, temps de réaction allongé, désinhibition favorisant les prises de risque.",
    tip: "Dès 0,5 g/L : risque d'accident x2. À 0,8 g/L : risque x10. À 1,2 g/L : risque x35.",
    legalRef: "Articles R234-1 et L234-1 du Code de la route"
  },
  'sec-004': {
    content: "Pour les conducteurs VTC (non professionnels du transport), le taux d'alcool maximal est de 0,5 g/L de sang (soit 0,25 mg/L d'air expiré). Au-delà, c'est une contravention (0,5-0,8 g/L) ou un délit (>0,8 g/L). Attention : certaines plateformes exigent 0 alcool.",
    tip: "VTC = 0,5 g/L maximum légalement. Mais pour l'image et la sécurité : 0 alcool recommandé avant toute course.",
    legalRef: "Article R234-1 du Code de la route"
  },
  'sec-005': {
    content: "La fatigue au volant provoque une baisse de vigilance, des micro-sommeils involontaires, une diminution des réflexes et de l'attention. Elle est responsable d'environ 20% des accidents mortels sur autoroute. Les signes d'alerte : bâillements, yeux qui piquent, raideur de la nuque.",
    tip: "Pause toutes les 2 heures minimum. Signes de fatigue = arrêt immédiat. Le café ne remplace pas le sommeil.",
    legalRef: "Sécurité routière - Prévention de l'hypovigilance"
  },
  'sec-006': {
    content: "Par temps de pluie, l'eau réduit l'adhérence des pneus sur la chaussée, ce qui allonge considérablement la distance de freinage. Sur route mouillée, la distance de freinage peut être multipliée par 2. L'aquaplaning devient un risque à partir de 80 km/h.",
    tip: "Route mouillée = distances de freinage x2. Réduire la vitesse de 20 km/h et augmenter les distances de sécurité.",
    legalRef: "Article R413-2 du Code de la route"
  },
  'sec-007': {
    content: "L'aquaplaning (ou hydroplanage) survient quand une pellicule d'eau s'interpose entre le pneu et la chaussée, supprimant toute adhérence. Il se produit principalement sur route mouillée, à vitesse élevée (généralement >80 km/h), surtout avec des pneus usés.",
    tip: "En cas d'aquaplaning : ne pas freiner brusquement, ne pas tourner le volant, lever le pied de l'accélérateur progressivement.",
    legalRef: "Formation continue conducteurs - Module conditions dégradées"
  },
  'sec-008': {
    content: "Le port de la ceinture de sécurité est obligatoire pour tous les occupants du véhicule : conducteur et passagers, à l'avant comme à l'arrière. Le conducteur est responsable du port de la ceinture par les passagers mineurs.",
    tip: "Ceinture obligatoire pour TOUS. Amende : 135€ par personne non attachée. Le conducteur peut être verbalisé pour un passager mineur non attaché.",
    legalRef: "Articles R412-1 et R412-2 du Code de la route"
  },
  'sec-009': {
    content: "L'usage du téléphone tenu en main est interdit pendant la conduite, y compris à l'arrêt moteur en marche (sauf stationnement régulier). Sanction : 135€ d'amende et retrait de 3 points. Les kits mains-libres sont autorisés mais déconseillés car ils détournent aussi l'attention.",
    tip: "Téléphone en main = 135€ + 3 points. Même à l'arrêt au feu rouge ! Seul le stationnement régulier autorise l'usage.",
    legalRef: "Article R412-6-1 du Code de la route"
  },
  'sec-010': {
    content: "Les voyants du tableau de bord utilisent un code couleur : rouge = danger immédiat, arrêt impératif (huile, température, freins). Orange = anomalie, vérification nécessaire rapidement. Vert/bleu = information sur un équipement en fonctionnement.",
    tip: "Rouge = STOP immédiat. Orange = attention, à vérifier. Vert/bleu = simple information.",
    legalRef: "Norme ISO 2575 - Symboles des commandes automobiles"
  },
  'sec-011': {
    content: "En cas d'accident corporel, le conducteur a l'obligation légale de porter assistance aux victimes (ou faire porter assistance) et d'alerter les secours. Le délit de fuite ou le refus de porter assistance sont des délits pénaux graves.",
    tip: "PAS (Protéger, Alerter, Secourir). Ne pas déplacer un blessé sauf danger immédiat (incendie, circulation).",
    legalRef: "Article 223-6 du Code pénal (non-assistance)"
  },
  'sec-012': {
    content: "Le freinage d'urgence vise à s'arrêter le plus rapidement possible face à un danger imminent. Il faut appuyer fermement et maintenir la pression sur la pédale de frein. L'ABS empêche le blocage des roues et permet de conserver la direction.",
    tip: "Freinage d'urgence avec ABS : appuyer fort et maintenir. Les vibrations de la pédale sont normales. Ne pas relâcher.",
    legalRef: "Formation à la conduite - Techniques de freinage"
  },
  'sec-013': {
    content: "Les feux de croisement doivent être allumés la nuit, mais aussi de jour en cas de visibilité insuffisante (pluie, brouillard, neige) ou en tunnel. Ils éclairent à environ 30 mètres sans éblouir les autres usagers.",
    tip: "Feux de croisement = nuit + mauvaise visibilité de jour. Feux de route = nuit hors agglomération, sans véhicule en face.",
    legalRef: "Articles R416-4 et R416-5 du Code de la route"
  },
  'sec-014': {
    content: "La limitation de vitesse en agglomération est de 50 km/h, sauf signalisation contraire (zones 30, zones de rencontre à 20 km/h). Cette limite tient compte de la densité de circulation et de la présence de piétons.",
    tip: "Agglomération = panneau d'entrée = 50 km/h max sauf indication contraire. Zone 30 = 30 km/h. Zone de rencontre = 20 km/h.",
    legalRef: "Article R413-3 du Code de la route"
  },
  'sec-015': {
    content: "Un excès de vitesse augmente la distance d'arrêt (qui croît avec le carré de la vitesse), réduit le champ de vision (effet tunnel), diminue le temps disponible pour réagir et aggrave considérablement la gravité des chocs en cas d'accident.",
    tip: "À 50 km/h, choc = chute du 3e étage. À 70 km/h = chute du 6e étage. À 100 km/h = chute du 12e étage.",
    legalRef: "Études Sécurité routière sur la vitesse"
  },
  'sec-016': {
    content: "La distance de sécurité doit être adaptée à la vitesse : elle correspond au minimum à la distance parcourue en 2 secondes. Sur autoroute à 130 km/h, cela représente environ 70 mètres (2 bandes blanches d'urgence).",
    tip: "Règle des 2 secondes : choisir un repère fixe, compter '1001, 1002' quand le véhicule devant le passe. Si vous y arrivez avant '1002', vous êtes trop près.",
    legalRef: "Article R412-12 du Code de la route"
  },
  'sec-017': {
    content: "Le non-port de la ceinture est une contravention de 4e classe : 135€ d'amende (minorée à 90€ si paiement rapide) et retrait de 3 points sur le permis. Le conducteur est responsable pour lui-même et pour tout passager mineur.",
    tip: "135€ + 3 points par personne non attachée. Un conducteur peut perdre 12 points si 4 passagers sont sans ceinture !",
    legalRef: "Article R412-1 du Code de la route"
  },
  'sec-018': {
    content: "L'ABS (Anti-lock Braking System) empêche le blocage des roues lors d'un freinage appuyé. Il permet de conserver la maîtrise de la direction et de contourner un obstacle tout en freinant. Attention : l'ABS n'assure pas automatiquement un freinage plus court.",
    tip: "Avec ABS : freiner fort + diriger. Sans ABS : freiner fort = blocage = perte de direction. L'ABS n'est pas magique sur neige ou gravier.",
    legalRef: "Équipements de sécurité véhicules - Règlement CE 661/2009"
  },
  'sec-019': {
    content: "La somnolence est favorisée par plusieurs facteurs : conduite de nuit (pic entre 2h et 5h du matin), trajets longs et monotones, repas copieux, chaleur dans l'habitacle, manque de sommeil, certains médicaments. Elle est la 1re cause d'accidents mortels sur autoroute.",
    tip: "Signes de somnolence = DANGER. Seule solution efficace : s'arrêter et dormir 15-20 min. Le café ne fait que retarder.",
    legalRef: "Prévention routière - Hypovigilance"
  },
  'sec-020': {
    content: "Des pneus usés (profondeur < 1,6 mm légal) perdent leur capacité à évacuer l'eau et réduisent drastiquement l'adhérence, ce qui augmente la distance de freinage et le risque d'aquaplaning. Ils sont aussi moins efficaces sur sol sec.",
    tip: "Témoin d'usure = 1,6 mm minimum légal. Pour votre sécurité, changez à 3 mm. Vérifiez régulièrement vos pneus.",
    legalRef: "Article R314-1 du Code de la route"
  },
  'sec-021': {
    content: "En cas de panne sur autoroute, il faut se garer sur la bande d'arrêt d'urgence le plus à droite possible, allumer les feux de détresse, revêtir le gilet (avant de sortir), sortir côté droit, s'éloigner derrière les glissières et appeler les secours (borne orange ou 112).",
    tip: "BAU = refuge temporaire. Sortir côté droit, s'éloigner du véhicule, passer derrière les barrières. NE PAS rester dans la voiture.",
    legalRef: "Article R417-11 du Code de la route"
  },
  'sec-022': {
    content: "Le triangle de présignalisation doit être placé à au moins 30 mètres en amont du véhicule immobilisé sur route. Sur autoroute, la distance recommandée est de 100-150 mètres. Il doit être visible par les conducteurs arrivant.",
    tip: "Triangle obligatoire à bord + gilet. Position : 30m minimum sur route, 100m+ sur autoroute. Attention en posant le triangle !",
    legalRef: "Article R416-19 du Code de la route"
  },
  'sec-023': {
    content: "La conduite préventive (ou défensive) consiste à anticiper les dangers potentiels, adapter sa vitesse aux circonstances, maintenir des distances de sécurité suffisantes et être prêt à réagir aux erreurs des autres usagers.",
    tip: "Anticiper = observer loin + prévoir les comportements des autres. Partir du principe que les autres peuvent faire des erreurs.",
    legalRef: "Formation continue conducteurs professionnels"
  },
  'sec-024': {
    content: "Lors du dépassement d'un cycliste, une distance latérale minimale de 1,5 mètre est obligatoire hors agglomération (1 mètre en agglomération). Cette distance protège le cycliste des effets du souffle et des écarts involontaires.",
    tip: "1,5 m hors agglo, 1 m en agglo. Si impossible de respecter cette distance, il faut attendre pour dépasser.",
    legalRef: "Article R414-4 du Code de la route"
  },
  'sec-025': {
    content: "Le port de gants certifiés CE est obligatoire pour les conducteurs et passagers de deux-roues motorisés (motos, scooters) depuis 2016. Les gants doivent porter le marquage CE, garantissant un niveau minimum de protection.",
    tip: "Gants CE obligatoires pour conducteur ET passager de 2 roues. Amende : 68€ + retrait de 1 point.",
    legalRef: "Décret 2016-1232 du 19 septembre 2016"
  },
  'sec-026': {
    content: "Au-delà de 0,8 g/L d'alcool dans le sang, l'infraction devient un délit (et non plus une contravention). Les sanctions sont beaucoup plus lourdes : jusqu'à 2 ans d'emprisonnement, 4 500€ d'amende, suspension/annulation du permis, confiscation du véhicule possible.",
    tip: "0,5-0,8 g/L = contravention (135€ + 6 points). >0,8 g/L = DÉLIT (prison possible + 6 points + suspension permis).",
    legalRef: "Articles L234-1 et L234-2 du Code de la route"
  },
  'sec-027': {
    content: "La distance de sécurité correspond à la distance parcourue pendant 2 secondes. Elle permet de disposer d'un délai suffisant pour réagir si le véhicule précédent freine brusquement. Cette règle des 2 secondes s'applique quelles que soient les conditions.",
    tip: "2 secondes minimum, plus en cas de pluie/fatigue. Technique : repère fixe + compter '1001, 1002' après le passage du véhicule devant.",
    legalRef: "Article R412-12 du Code de la route"
  },
  'sec-028': {
    content: "Le clignotant doit être actionné avant d'effectuer une manœuvre (changement de direction, dépassement, stationnement), avec une anticipation suffisante pour prévenir les autres usagers. L'absence d'usage est sanctionnée.",
    tip: "Clignotant = AVANT la manœuvre, pas pendant. Vérifier les rétroviseurs AVANT d'actionner le clignotant.",
    legalRef: "Article R412-10 du Code de la route"
  },
  'sec-029': {
    content: "La vitesse excessive réduit le champ de vision (effet tunnel : à 130 km/h, angle de vision réduit à 30° contre 180° à l'arrêt), diminue le temps disponible pour percevoir et analyser les informations, et allonge considérablement les distances d'arrêt.",
    tip: "Vitesse élevée = effet tunnel (vision réduite aux côtés) + moins de temps pour réagir + distance d'arrêt allongée.",
    legalRef: "Études Sécurité routière"
  },
  'sec-030': {
    content: "Un piéton est prioritaire lorsqu'il est engagé sur un passage piéton ou lorsqu'il manifeste clairement son intention de traverser. Le conducteur doit lui céder le passage et s'arrêter si nécessaire. Le non-respect est passible de 135€ et 6 points.",
    tip: "Piéton engagé ou manifestant l'intention de traverser = priorité absolue. Anticiper près des passages piétons.",
    legalRef: "Article R415-11 du Code de la route"
  },
  'sec-031': {
    content: "La chaussée est particulièrement glissante au début de l'averse car l'eau se mélange aux résidus présents sur la route (huile, poussière, gomme de pneus), formant un film très glissant. Après plusieurs heures de pluie, ce film est évacué.",
    tip: "Premières gouttes = maximum de prudence. La route est plus glissante au début de la pluie qu'après 30 min.",
    legalRef: "Formation sécurité routière - Adhérence"
  },
  'sec-032': {
    content: "Un feu orange fixe signifie l'obligation de s'arrêter, sauf si le véhicule est déjà trop engagé pour s'arrêter en sécurité. Il ne signifie pas 'accélérer pour passer' mais bien 'préparer l'arrêt'.",
    tip: "Feu orange = s'arrêter sauf danger. Orange ≠ 'passe vite'. Franchir un feu orange est sanctionné comme un feu rouge.",
    legalRef: "Article R412-31 du Code de la route"
  },
  'sec-033': {
    content: "Les feux de brouillard arrière ne doivent être utilisés qu'en cas de brouillard ou de chute de neige. Leur utilisation par temps de pluie est interdite car ils éblouissent les conducteurs suivants et masquent les feux stop.",
    tip: "Feux arrière brouillard = uniquement brouillard/neige. Par temps de pluie = interdit (éblouissement + masque les stops).",
    legalRef: "Article R416-7 du Code de la route"
  },
  'sec-034': {
    content: "Une ligne de dissuasion (continue côté gauche, discontinue côté droit) indique qu'il est dangereux de franchir mais que le dépassement reste possible du côté de la ligne discontinue. Le conducteur doit s'assurer qu'il peut le faire en sécurité.",
    tip: "Ligne mixte : on peut franchir du côté pointillés, pas du côté continu. Bien identifier de quel côté vous êtes.",
    legalRef: "Article R412-19 du Code de la route"
  },
  'sec-035': {
    content: "En cas de contrôle routier, le conducteur doit obtempérer immédiatement : s'arrêter, couper le moteur, rester calme, présenter les documents demandés (permis, carte grise, assurance, carte VTC). Le refus d'obtempérer est un délit grave.",
    tip: "Obtempérer = obligation. Refus = délit (1 an prison + 15 000€). Se soumettre aux tests (alcool, stupéfiants) est obligatoire.",
    legalRef: "Articles L233-1 et L233-2 du Code de la route"
  },
  'sec-036': {
    content: "La conduite sous l'emprise de stupéfiants est un délit, quelle que soit la quantité détectée. Sanction : jusqu'à 2 ans de prison, 4 500€ d'amende, retrait de 6 points, suspension du permis. Si combiné avec l'alcool, les peines sont alourdies.",
    tip: "Stupéfiants = délit systématique (pas de seuil). Traces détectables plusieurs jours/semaines après consommation (cannabis).",
    legalRef: "Article L235-1 du Code de la route"
  },
  'sec-037': {
    content: "Le non-respect d'un feu rouge est une contravention de 4e classe : 135€ d'amende et retrait de 4 points. C'est l'une des infractions les plus dangereuses, responsable de nombreux accidents graves aux intersections.",
    tip: "Feu rouge grillé = 135€ + 4 points. À un carrefour, les chocs latéraux sont parmi les plus graves (pas de zone de déformation).",
    legalRef: "Article R412-30 du Code de la route"
  },
  'sec-038': {
    content: "La distance d'arrêt se compose de deux éléments : la distance de réaction (parcourue pendant le temps de réaction) et la distance de freinage (parcourue pendant le freinage). Distance d'arrêt = Distance de réaction + Distance de freinage.",
    tip: "Distance d'arrêt = temps de réaction x vitesse + distance de freinage. Elle quadruple quand la vitesse double.",
    legalRef: "Physique du freinage - Formation sécurité routière"
  },
  'sec-039': {
    content: "En tunnel, il est recommandé d'augmenter les distances de sécurité, de ne pas dépasser sauf urgence, de rester vigilant aux panneaux lumineux, et en cas d'arrêt forcé, de couper le moteur et de rejoindre un abri si possible.",
    tip: "Tunnel : retirer les lunettes de soleil, allumer les feux, augmenter distances, écouter la radio tunnel (107.7).",
    legalRef: "Recommandations sécurité en tunnel"
  },
  'sec-040': {
    content: "Une conduite adaptée aux circonstances (vitesse, distance, anticipation) améliore significativement la sécurité de tous les usagers, réduit la consommation de carburant, diminue l'usure du véhicule et procure un meilleur confort aux passagers.",
    tip: "Conduite souple = sécurité + économie + confort client. Anticiper = moins de freinages brusques = passagers sereins.",
    legalRef: "Éco-conduite et conduite professionnelle"
  },

  // =====================
  // MODULE RELATION CLIENT (rel-001 à rel-040)
  // =====================
  'rel-001': {
    content: "La ponctualité est fondamentale dans le métier de VTC. Arriver à l'heure (voire 5 minutes avant) réduit le stress du client, démontre le professionnalisme et évite les mauvais commentaires. Un retard doit être signalé immédiatement avec une estimation d'arrivée.",
    tip: "Arriver 5 min en avance = client serein. Prévoir les aléas (trafic, stationnement). Retard = prévenir immédiatement.",
    legalRef: "Qualité de service VTC - Bonnes pratiques"
  },
  'rel-002': {
    content: "En cas de retard imprévu (trafic, panne), le conducteur doit informer le client le plus rapidement possible par message ou appel, en donnant une estimation du nouveau délai. L'anticipation de la communication évite frustration et mauvaise notation.",
    tip: "Communication proactive = confiance préservée. Ne pas attendre que le client s'inquiète pour le prévenir.",
    legalRef: "Relation client - Communication de crise"
  },
  'rel-003': {
    content: "L'accueil du client commence dès le premier contact : confirmation de réservation, message de prise en charge, premier regard et parole lors de la rencontre. Chaque interaction compte pour créer une impression positive durable.",
    tip: "Premier contact = première impression. Sourire, saluer, confirmer la destination. Les 30 premières secondes sont cruciales.",
    legalRef: "Techniques d'accueil professionnel"
  },
  'rel-004': {
    content: "Bien qu'il n'y ait pas d'obligation légale de tenue vestimentaire pour les VTC, une présentation soignée renforce l'image professionnelle et la confiance du client. Tenue propre, sobre et adaptée au standing du service proposé.",
    tip: "Pas d'uniforme obligatoire mais tenue correcte exigée. Propre, sobre, professionnelle. Éviter les tenues trop décontractées.",
    legalRef: "Image professionnelle VTC"
  },
  'rel-005': {
    content: "Face à un client mécontent, la première règle est de rester calme et de ne pas prendre la critique personnellement. Écouter sans interrompre, reformuler pour montrer qu'on a compris, proposer une solution si possible.",
    tip: "Client énervé = ne pas surenchérir. Écouter, reconnaître le problème, s'excuser si justifié, proposer une solution.",
    legalRef: "Gestion des conflits - Service client"
  },
  'rel-006': {
    content: "La discrétion professionnelle est essentielle : ne pas répéter les conversations entendues, ne pas divulguer les destinations ou habitudes des clients, ne pas partager d'informations personnelles. C'est une question d'éthique et parfois de sécurité.",
    tip: "Ce qui se dit dans le véhicule reste dans le véhicule. Discrétion totale sur les clients, même entre collègues.",
    legalRef: "Déontologie professionnelle VTC"
  },
  'rel-007': {
    content: "La satisfaction client dépend de nombreux facteurs combinés : qualité de l'accueil, propreté du véhicule, ponctualité, conduite agréable, discrétion, attention aux besoins particuliers. Le prix n'est qu'un élément parmi d'autres.",
    tip: "Satisfaction = expérience globale. Un client peut payer plus cher s'il se sent bien traité et en sécurité.",
    legalRef: "Marketing des services - Expérience client"
  },
  'rel-008': {
    content: "Les avis en ligne (plateformes, Google) ont un impact considérable sur l'activité. Un avis négatif peut dissuader de nombreux clients potentiels. La meilleure prévention est d'offrir un service irréprochable à chaque course.",
    tip: "1 avis négatif = plusieurs clients perdus. 1 avis positif = recommandations. Demander poliment un avis après une bonne course.",
    legalRef: "E-réputation et avis clients"
  },
  'rel-009': {
    content: "Une communication efficace avec le client doit être claire (bien articuler), adaptée (niveau de langue approprié), concise (ne pas noyer le client d'informations) et respectueuse (formules de politesse, ton agréable).",
    tip: "Parler clairement, adapter son discours au client, écouter plus que parler. Le silence peut aussi être une qualité.",
    legalRef: "Communication professionnelle"
  },
  'rel-010': {
    content: "Le niveau de conversation doit être adapté aux signaux du client : certains souhaitent discuter, d'autres préfèrent le silence (travail, repos, appel téléphonique). Savoir décoder ces signaux fait partie du professionnalisme.",
    tip: "Observer les signaux : client au téléphone, regard sur l'écran, réponses brèves = préfère le silence. Souriant, questionneur = ouvert à la conversation.",
    legalRef: "Intelligence relationnelle"
  },
  'rel-011': {
    content: "La courtoisie englobe l'ensemble des comportements polis et respectueux : saluer, remercier, ouvrir la porte, aider avec les bagages, utiliser les formules de politesse. Elle contribue à une atmosphère agréable et professionnelle.",
    tip: "Bonjour, Merci, Au revoir, Bonne journée... Les mots simples font la différence. Sourire même au téléphone (ça s'entend).",
    legalRef: "Savoir-être professionnel"
  },
  'rel-012': {
    content: "Un client satisfait reviendra et recommandera le service à son entourage. La fidélisation est plus rentable que la conquête de nouveaux clients. Elle passe par la constance du service, la reconnaissance du client régulier, parfois des attentions personnalisées.",
    tip: "Fidéliser coûte 5x moins cher que conquérir. Reconnaître ses clients réguliers, noter leurs préférences (musique, température...).",
    legalRef: "Marketing relationnel - Fidélisation"
  },
  'rel-013': {
    content: "Un service personnalisé consiste à adapter sa prestation aux besoins spécifiques de chaque client : choix du trajet, température, musique, niveau de conversation, aide particulière (personnes âgées, enfants, bagages).",
    tip: "Demander les préférences en début de course : 'Une préférence pour le trajet ?', 'La climatisation vous convient ?' Petites attentions = grande différence.",
    legalRef: "Personnalisation du service"
  },
  'rel-014': {
    content: "Le comportement individuel de chaque conducteur rejaillit sur l'image de toute la profession VTC. Un conducteur impoli ou dangereux nuit à la réputation de tous. À l'inverse, l'excellence de chacun valorise l'ensemble du métier.",
    tip: "Vous êtes ambassadeur de la profession. Votre comportement aujourd'hui influence la perception des VTC demain.",
    legalRef: "Image de marque professionnelle"
  },
  'rel-015': {
    content: "Une conduite souple et anticipée améliore considérablement le confort des passagers : accélérations et freinages progressifs, anticipation des virages et obstacles, vitesse adaptée. Les clients apprécient de pouvoir travailler ou se reposer sereinement.",
    tip: "Conduite souple = passager serein = bonne note. Imaginer que vous transportez un œuf sur le tableau de bord.",
    legalRef: "Qualité de conduite professionnelle"
  },
  'rel-016': {
    content: "La gestion d'un conflit client repose sur l'écoute active, la compréhension du problème, la recherche d'une solution. Éviter la confrontation, l'argumentation excessive ou le déni. Parfois, simplement écouter suffit à désamorcer la tension.",
    tip: "Écouter sans interrompre → Reformuler → S'excuser si justifié → Proposer une solution. Ne jamais hausser le ton.",
    legalRef: "Médiation et résolution de conflits"
  },
  'rel-017': {
    content: "L'empathie est la capacité à comprendre les émotions du client et à y répondre de manière adaptée. Un client stressé par un vol à prendre sera rassuré par une attitude calme et une communication sur l'heure d'arrivée prévue.",
    tip: "Se mettre à la place du client : comprendre son stress, son urgence, sa fatigue. Adapter son attitude en conséquence.",
    legalRef: "Intelligence émotionnelle"
  },
  'rel-018': {
    content: "La propreté du véhicule, intérieure comme extérieure, est un élément essentiel de la qualité de service. Elle reflète le professionnalisme du conducteur et contribue au confort et au bien-être du client.",
    tip: "Nettoyage quotidien minimum : intérieur, vitres, poussière. Vérifier l'odeur (pas de tabac, parfum léger). Contrôle avant chaque course.",
    legalRef: "Standards de qualité VTC"
  },
  'rel-019': {
    content: "Proposer des services complémentaires (eau, chargeur de téléphone, journaux, WiFi) peut faire la différence par rapport à la concurrence et justifier un tarif plus élevé. Ces attentions sont particulièrement appréciées des clients affaires.",
    tip: "Bouteilles d'eau, chargeurs universels, bonbons... Petit investissement, grand impact. Adapter au type de clientèle.",
    legalRef: "Valeur ajoutée service premium"
  },
  'rel-020': {
    content: "La gestion du temps est cruciale : estimer correctement les temps de trajet, prendre en compte les aléas (trafic, travaux), communiquer proactivement en cas de retard. Un client qui rate son avion à cause du VTC ne reviendra jamais.",
    tip: "Marge de sécurité systématique. Vérifier le trafic en temps réel. Prévenir immédiatement en cas de problème.",
    legalRef: "Gestion du temps - Service client"
  },
  'rel-021': {
    content: "Face à une demande impossible ou inappropriée, le conducteur doit refuser poliment mais fermement, en expliquant la raison (légale, sécurité, politique de l'entreprise). Proposer une alternative quand c'est possible.",
    tip: "Savoir dire non avec tact : 'Je comprends mais malheureusement ce n'est pas possible car...' Proposer une alternative si possible.",
    legalRef: "Assertivité professionnelle"
  },
  'rel-022': {
    content: "L'aide aux bagages fait partie du service VTC : charger et décharger les valises, aider les personnes à mobilité réduite, s'assurer que rien n'est oublié à la fin de la course. Ces gestes simples sont très appréciés.",
    tip: "Proposer systématiquement l'aide aux bagages. Vérifier le coffre en fin de course. Petit effort, grande reconnaissance.",
    legalRef: "Service complet VTC"
  },
  'rel-023': {
    content: "La connaissance du territoire est un atout majeur : proposer le meilleur itinéraire, connaître les points d'intérêt, savoir où trouver les services (hôtels, restaurants, pharmacies). Un VTC qui connaît sa ville inspire confiance.",
    tip: "Connaître sa zone de travail : raccourcis, zones de travaux, bons restaurants pour recommandations. Le GPS ne remplace pas l'expertise locale.",
    legalRef: "Compétence territoriale"
  },
  'rel-024': {
    content: "La réactivité est essentielle dans le métier VTC : répondre rapidement aux demandes, confirmer les réservations, s'adapter aux changements de programme du client. Un service réactif rassure et fidélise.",
    tip: "Répondre aux messages en moins de 15 min. Confirmer chaque réservation. S'adapter sans rechigner aux changements.",
    legalRef: "Réactivité service client"
  },
  'rel-025': {
    content: "Savoir gérer les situations particulières (enfants, personnes âgées, handicapées, étrangères) démontre un professionnalisme abouti. Adapter sa communication, proposer une aide appropriée, faire preuve de patience.",
    tip: "Enfants : sièges adaptés, patience. Personnes âgées : aide, pas de brusquerie. Étrangers : anglais de base, patience. PMR : véhicule adapté si besoin.",
    legalRef: "Accessibilité et inclusion"
  },
  'rel-026': {
    content: "La maîtrise de l'anglais basique est un atout important dans les zones touristiques et aéroportuaires. Savoir accueillir, confirmer la destination, donner des informations sur le trajet et remercier en anglais ouvre de nombreuses opportunités.",
    tip: "Phrases clés en anglais : Hello, welcome. Where are you going? The ride will take about... Here we are. Have a nice day.",
    legalRef: "Compétences linguistiques VTC"
  },
  'rel-027': {
    content: "La transparence sur les tarifs évite les malentendus et conflits. Confirmer le prix avant le départ, expliquer les éventuels suppléments (bagages, nuit, attente), fournir une facture sur demande. Pas de mauvaise surprise = client satisfait.",
    tip: "Prix annoncé = prix payé. Pas de coûts cachés. Si supplément nécessaire, l'expliquer et obtenir l'accord avant.",
    legalRef: "Transparence tarifaire"
  },
  'rel-028': {
    content: "La fiabilité est la qualité première attendue d'un VTC : être là où prévu, quand prévu, dans les conditions prévues. Un service fiable se construit sur la durée et fidélise naturellement les clients.",
    tip: "Fiabilité = confiance = fidélisation. Ne jamais annuler à la dernière minute sauf force majeure (et prévoir une solution de remplacement).",
    legalRef: "Engagement de service"
  },
  'rel-029': {
    content: "Le respect des préférences du client (température, musique, trajet) démontre l'attention portée à son confort. Demander en début de course, ajuster si nécessaire, mémoriser pour les clients réguliers.",
    tip: "Demander les préférences : 'La climatisation vous convient ?', 'Souhaitez-vous de la musique ?'. Noter les préférences des réguliers.",
    legalRef: "Personnalisation du service"
  },
  'rel-030': {
    content: "La posture du conducteur (position assise, regard, gestuelle) communique autant que les mots. Une posture droite mais détendue, un regard attentif, des gestes mesurés inspirent confiance et professionnalisme.",
    tip: "Posture droite = sérieux. Gestes calmes = maîtrise. Regard attentif = écoute. Éviter les comportements nerveux (tapoter, s'agiter).",
    legalRef: "Communication non verbale"
  },
  'rel-031': {
    content: "L'écoute active consiste à accorder toute son attention au client, montrer qu'on comprend (acquiescements, reformulations), poser des questions si nécessaire. Elle est particulièrement importante pour comprendre des demandes spécifiques.",
    tip: "Écouter vraiment, pas juste entendre. Reformuler : 'Si je comprends bien, vous souhaitez...' Clarifier avant d'agir.",
    legalRef: "Techniques d'écoute active"
  },
  'rel-032': {
    content: "La gestion des objets oubliés fait partie du service : vérifier systématiquement le véhicule après chaque course, contacter le client rapidement en cas de découverte, faciliter la restitution. Un objet retrouvé et rendu = client reconnaissant.",
    tip: "Contrôle systématique du véhicule après chaque course (banquette, plancher, poches des sièges). Objet trouvé = contacter immédiatement.",
    legalRef: "Procédure objets trouvés"
  },
  'rel-033': {
    content: "La valeur du bouche-à-oreille est considérable : un client satisfait parle de son expérience positive à 3 personnes en moyenne, un client insatisfait à 10. Le meilleur marketing est un service irréprochable.",
    tip: "Chaque course est une publicité. Un client ravi = 3 recommandations. Un client déçu = 10 personnes prévenues contre vous.",
    legalRef: "Marketing viral positif"
  },
  'rel-034': {
    content: "Reconnaître ses erreurs et s'excuser sincèrement quand c'est justifié désarme souvent la colère du client et permet de sauver la relation. La responsabilité assumée est plus respectée que les excuses ou le déni.",
    tip: "Erreur = s'excuser sincèrement + proposer solution/compensation. Ne pas chercher d'excuses. Assumer responsabilise et rassure.",
    legalRef: "Gestion des erreurs - Récupération de service"
  },
  'rel-035': {
    content: "L'amélioration continue consiste à tirer des leçons de chaque course, analyser les retours clients, identifier les axes de progrès. Les meilleurs conducteurs sont ceux qui remettent constamment en question leur pratique.",
    tip: "Après chaque course : qu'est-ce qui a bien marché ? Qu'aurais-je pu mieux faire ? Lire ses évaluations et en tirer des leçons.",
    legalRef: "Démarche qualité continue"
  },
  'rel-036': {
    content: "La première impression se forme en quelques secondes et conditionne toute la relation. Soigner son apparence, son véhicule, son premier mot et son premier sourire est donc essentiel pour démarrer la course positivement.",
    tip: "7 secondes pour la première impression. Sourire + bonjour + confirmation du nom + proposition d'aide bagages = départ réussi.",
    legalRef: "Psychologie de la première impression"
  },
  'rel-037': {
    content: "La conclusion de la course est aussi importante que le début : remercier, souhaiter une bonne journée/soirée, rappeler de vérifier ses affaires, proposer la carte de visite. Les derniers mots restent en mémoire.",
    tip: "Fin de course = dernière impression. Remercier + souhaiter bonne continuation + vérifier objets oubliés + carte de visite.",
    legalRef: "Conclusion de service"
  },
  'rel-038': {
    content: "Le respect des différences culturelles est important, particulièrement avec une clientèle internationale. Certains comportements peuvent être interprétés différemment selon les cultures. Rester neutre et respectueux en toutes circonstances.",
    tip: "Éviter les sujets sensibles (politique, religion). Respecter les coutumes. En cas de doute, rester sobre et professionnel.",
    legalRef: "Intelligence interculturelle"
  },
  'rel-039': {
    content: "Savoir gérer son propre stress est essentiel pour rester calme et professionnel en toutes circonstances. Le stress du conducteur se transmet au client. Techniques de respiration, anticipation, organisation permettent de le maîtriser.",
    tip: "Stress du conducteur = client stressé. Respiration profonde avant course difficile. Anticiper pour éviter les urgences.",
    legalRef: "Gestion du stress professionnel"
  },
  'rel-040': {
    content: "La confidentialité des données clients (coordonnées, trajets, conversations) est une obligation légale et éthique. Ne jamais partager ces informations, les stocker de manière sécurisée, les supprimer quand elles ne sont plus nécessaires.",
    tip: "Données clients = confidentielles. RGPD applicable. Ne jamais partager, même avec des collègues. Stockage sécurisé.",
    legalRef: "RGPD et protection des données personnelles"
  },

  // =====================
  // MODULE FRANÇAIS (fra-001 à fra-040)
  // =====================
  'fra-001': {
    content: "L'adjectif qualificatif s'accorde en genre (masculin/féminin) et en nombre (singulier/pluriel) avec le nom qu'il qualifie. 'Des clients satisfaits' : clients est masculin pluriel, donc satisfaits prend un 's'.",
    tip: "L'adjectif suit le nom : masculin/féminin, singulier/pluriel. Vérifier le nom qu'il qualifie pour l'accord.",
    legalRef: "Grammaire française - Accord des adjectifs"
  },
  'fra-002': {
    content: "Le passé composé se forme avec l'auxiliaire être ou avoir au présent + participe passé. Avec être, le participe s'accorde avec le sujet. Avec avoir, il s'accorde avec le COD placé avant.",
    tip: "Être : accord avec le sujet (elle est partie). Avoir : accord avec COD avant le verbe (les valises que j'ai prises).",
    legalRef: "Conjugaison - Accord du participe passé"
  },
  'fra-003': {
    content: "La différence entre 'à' (préposition) et 'a' (verbe avoir) : on peut remplacer 'a' par 'avait'. 'Il a (avait) une réservation à (préposition) 14h'.",
    tip: "Test simple : remplacer par 'avait'. Si ça fonctionne = 'a' (verbe). Sinon = 'à' (préposition).",
    legalRef: "Orthographe - Homophones grammaticaux"
  },
  'fra-004': {
    content: "Les formules de politesse professionnelles : 'Je vous prie d'agréer, Madame/Monsieur, l'expression de mes salutations distinguées' pour un courrier formel. 'Cordialement' ou 'Bien cordialement' pour un email courant.",
    tip: "Courrier formel = formule complète. Email courant = 'Cordialement'. Client = jamais de familiarité (éviter 'Cdt', 'Biz').",
    legalRef: "Communication professionnelle écrite"
  },
  'fra-005': {
    content: "L'accord du verbe avec le sujet : le verbe s'accorde toujours avec son sujet en nombre et en personne. Attention aux sujets inversés et aux sujets collectifs.",
    tip: "Trouver le sujet (qui fait l'action ?) pour accorder le verbe. 'Les clients arrivent' mais 'Le groupe de clients arrive'.",
    legalRef: "Grammaire - Accord sujet-verbe"
  },
  'fra-006': {
    content: "La différence entre 'et' (conjonction d'addition) et 'est' (verbe être) : on peut remplacer 'est' par 'était'. 'Le véhicule est (était) propre et (conjonction) confortable'.",
    tip: "Test : remplacer par 'était'. Si ça fonctionne = 'est'. Pour additionner deux éléments = 'et'.",
    legalRef: "Orthographe - Homophones grammaticaux"
  },
  'fra-007': {
    content: "La ponctuation structure le texte : le point termine une phrase, la virgule sépare les éléments d'une liste ou isole un complément, le point-virgule sépare des propositions liées. Une bonne ponctuation facilite la compréhension.",
    tip: "Point = fin de phrase. Virgule = pause courte. Point-virgule = pause moyenne entre idées liées. Deux-points = annonce.",
    legalRef: "Ponctuation française"
  },
  'fra-008': {
    content: "Le vocabulaire professionnel du transport : prise en charge, dépose, trajet, itinéraire, course, réservation, tarification. Utiliser les termes appropriés renforce le professionnalisme.",
    tip: "Vocabulaire pro : 'course' ou 'trajet' (pas 'balade'). 'Prise en charge' (pas 'on y va'). 'Dépose' (pas 'on arrive').",
    legalRef: "Vocabulaire professionnel VTC"
  },
  'fra-009': {
    content: "Le pluriel des noms composés suit des règles particulières selon la nature des mots qui les composent. Les noms et adjectifs prennent généralement la marque du pluriel, pas les verbes ni les prépositions.",
    tip: "Nom-Nom ou Adj-Nom : les deux au pluriel (des chefs-lieux). Verbe-Nom : seul le nom peut varier (des porte-bagages).",
    legalRef: "Orthographe - Noms composés"
  },
  'fra-010': {
    content: "La structure d'un message professionnel : formule d'appel (Bonjour/Madame/Monsieur), corps du message clair et concis, formule de politesse, signature. Aller à l'essentiel tout en restant courtois.",
    tip: "Message pro = objet clair + phrase d'accroche + information essentielle + formule de politesse. Éviter les pavés.",
    legalRef: "Rédaction professionnelle"
  },
  'fra-011': {
    content: "La négation en français se compose de deux éléments : 'ne' + 'pas', 'plus', 'jamais', 'rien', 'personne'. À l'oral, le 'ne' disparaît souvent, mais il doit être maintenu à l'écrit et en situation professionnelle.",
    tip: "Oral familier : 'je sais pas'. Écrit/pro : 'je ne sais pas'. Maintenir le 'ne' en situation professionnelle.",
    legalRef: "Grammaire - La négation"
  },
  'fra-012': {
    content: "Les niveaux de langue : soutenu (correspondance formelle), courant (échanges professionnels standards), familier (à éviter avec les clients). Adapter son niveau de langue à la situation et à l'interlocuteur.",
    tip: "Avec les clients = niveau courant à soutenu. Éviter le familier ('tranquille', 'nickel', 'pas de souci' → préférer 'très bien', 'parfait', 'avec plaisir').",
    legalRef: "Registres de langue"
  },
  'fra-013': {
    content: "La différence entre 'ce' (démonstratif) et 'se' (pronom réfléchi) : 'ce' peut être remplacé par 'cela' et désigne quelque chose. 'Se' accompagne un verbe pronominal (se lever, se trouver).",
    tip: "Se + verbe (il se lève). Ce + nom (ce véhicule) ou ce + verbe impersonnel (ce sera parfait).",
    legalRef: "Orthographe - Homophones grammaticaux"
  },
  'fra-014': {
    content: "Le futur simple exprime une action à venir. Formation : infinitif + ai, as, a, ons, ez, ont. 'Je prendrai', 'vous arriverez'. Le conditionnel exprime une possibilité ou une demande polie : infinitif + ais, ais, ait, ions, iez, aient.",
    tip: "Futur = certitude (j'arriverai à 14h). Conditionnel = politesse ou hypothèse (pourriez-vous... / je souhaiterais...).",
    legalRef: "Conjugaison - Futur et conditionnel"
  },
  'fra-015': {
    content: "Les synonymes enrichissent le vocabulaire et évitent les répétitions : trajet/parcours/itinéraire, client/passager/usager, rapide/prompt/diligent. Varier le vocabulaire témoigne d'une bonne maîtrise de la langue.",
    tip: "Éviter les répétitions : alterner les synonymes. Trajet/course/parcours. Véhicule/voiture/berline. Client/passager.",
    legalRef: "Vocabulaire et synonymie"
  },
  'fra-016': {
    content: "Les abréviations et acronymes courants : M. (Monsieur), Mme (Madame), RDV (rendez-vous), ASAP (dès que possible), ETA (heure d'arrivée estimée). Les utiliser à bon escient sans en abuser.",
    tip: "M. = Monsieur (pas Mr). Mme = Madame. Mlle désuet (utiliser Mme). RDV, OK acceptables en message, pas en courrier formel.",
    legalRef: "Conventions typographiques"
  },
  'fra-017': {
    content: "La compréhension d'un texte administratif nécessite de repérer les informations essentielles : qui, quoi, quand, où, comment. Les documents officiels utilisent un vocabulaire spécifique qu'il faut maîtriser.",
    tip: "Texte administratif : repérer dates, délais, conditions, obligations. Surligner les informations clés. Ne pas hésiter à relire.",
    legalRef: "Lecture de documents administratifs"
  },
  'fra-018': {
    content: "L'impératif présent sert à donner un ordre, un conseil ou une instruction. Il ne comporte pas de sujet exprimé et n'existe qu'à 3 personnes : tu (prends), nous (prenons), vous (prenez). Le 's' tombe au 2e groupe pour 'tu'.",
    tip: "Impératif = ordre/conseil sans sujet. 2e pers. sing. des verbes en -er : pas de 's' (Prends mais Va, Mange). Sauf devant 'en' et 'y' (Vas-y).",
    legalRef: "Conjugaison - L'impératif"
  },
  'fra-019': {
    content: "La construction des phrases complexes : proposition principale + proposition subordonnée. Utiliser correctement les mots de liaison (que, qui, dont, où, parce que, bien que, afin que) pour structurer le discours.",
    tip: "Phrases claires = idée principale + compléments. Éviter les phrases trop longues. Une idée par phrase si possible.",
    legalRef: "Syntaxe - Phrases complexes"
  },
  'fra-020': {
    content: "Les règles typographiques : espace avant et après les deux-points, point-virgule, point d'exclamation et d'interrogation en français. Pas d'espace avant virgule et point, espace après.",
    tip: "Typographie française : pas d'espace avant . et , → espace après. Espace avant et après : ; ! ?",
    legalRef: "Règles typographiques françaises"
  },
  'fra-021': {
    content: "La différence entre 'ou' (choix) et 'où' (lieu/temps) : 'où' peut être remplacé par 'à quel endroit' ou 'à quel moment'. 'Ou' propose une alternative entre deux éléments.",
    tip: "Où = lieu/temps (où allez-vous ? le jour où...). Ou = choix/alternative (café ou thé ?).",
    legalRef: "Orthographe - Homophones grammaticaux"
  },
  'fra-022': {
    content: "Les majuscules s'utilisent en début de phrase, pour les noms propres (personnes, lieux, marques), les titres de civilité abrégés (M., Mme), mais pas pour les mois, jours de la semaine, nationalités (adjectifs).",
    tip: "Majuscule : noms propres, début de phrase, M./Mme. Minuscule : jours (lundi), mois (janvier), nationalités adjectives (français).",
    legalRef: "Règles des majuscules"
  },
  'fra-023': {
    content: "Le complément d'objet direct (COD) répond à 'qui ?' ou 'quoi ?' après le verbe. Le COI répond à 'à qui ?', 'de qui ?', 'à quoi ?'. Cette distinction est importante pour l'accord du participe passé.",
    tip: "COD = qui/quoi sans préposition (j'appelle le client). COI = à qui/de qui (je téléphone au client).",
    legalRef: "Grammaire - Compléments d'objet"
  },
  'fra-024': {
    content: "Les mots invariables ne changent jamais d'orthographe : adverbes (toujours, maintenant), prépositions (avec, pour, sans), conjonctions (mais, ou, et, donc). Les mémoriser évite les fautes.",
    tip: "Mots invariables = toujours la même orthographe. Jamais d'accord : toujours, beaucoup, très, maintenant...",
    legalRef: "Orthographe - Mots invariables"
  },
  'fra-025': {
    content: "La concordance des temps : le temps de la subordonnée dépend du temps de la principale. Présent + présent/futur. Passé + imparfait/plus-que-parfait. 'Il dit qu'il vient' / 'Il a dit qu'il viendrait'.",
    tip: "Principale au présent = subordonnée libre. Principale au passé = subordonnée au passé aussi (imparfait, conditionnel passé).",
    legalRef: "Grammaire - Concordance des temps"
  },
  'fra-026': {
    content: "L'expression écrite professionnelle : phrases courtes et claires, vocabulaire précis, ton courtois et professionnel. Relire avant d'envoyer pour corriger les fautes et vérifier la clarté du message.",
    tip: "Message pro = clair, concis, courtois. Relecture obligatoire. Se demander : le destinataire va-t-il comprendre immédiatement ?",
    legalRef: "Rédaction professionnelle"
  },
  'fra-027': {
    content: "Le participe présent (-ant) est invariable. L'adjectif verbal (même forme) s'accorde. Différence : le participe présent exprime une action, l'adjectif verbal une qualité. 'Des clients exigeants' (adjectif) vs 'Les clients exigeant un reçu' (participe).",
    tip: "Action en cours = participe (invariable). Qualité permanente = adjectif verbal (s'accorde). Test : remplacer par un autre adjectif.",
    legalRef: "Grammaire - Participe et adjectif verbal"
  },
  'fra-028': {
    content: "Les connecteurs logiques structurent le discours : cause (car, parce que), conséquence (donc, ainsi), opposition (mais, cependant), addition (de plus, également), conclusion (enfin, en somme).",
    tip: "Connecteurs = logique du texte. Car = cause. Donc = conséquence. Mais = opposition. De plus = addition.",
    legalRef: "Expression écrite - Connecteurs logiques"
  },
  'fra-029': {
    content: "La différence entre 'leur' (pronom = à eux) et 'leurs' (adjectif possessif pluriel). 'Je leur donne' (pronom, invariable) vs 'leurs bagages' (adjectif, accord avec le nom).",
    tip: "Leur devant un verbe = pronom invariable (je leur dis). Leurs devant un nom pluriel = adjectif possessif (leurs valises).",
    legalRef: "Orthographe - Leur/leurs"
  },
  'fra-030': {
    content: "La voix passive transforme le COD en sujet : 'Le client réserve la course' → 'La course est réservée par le client'. Le complément d'agent est introduit par 'par' ou 'de'.",
    tip: "Voix passive = être + participe passé. Le sujet subit l'action. Utile pour mettre en avant le résultat plutôt que l'auteur.",
    legalRef: "Grammaire - Voix active et passive"
  },
  'fra-031': {
    content: "L'usage du conditionnel de politesse adoucit les demandes : 'Pourriez-vous...', 'Je souhaiterais...', 'Serait-il possible de...'. Plus poli que l'impératif ou le présent ('Pouvez-vous', 'Je veux').",
    tip: "Conditionnel = politesse. 'Je voudrais' plutôt que 'je veux'. 'Pourriez-vous' plutôt que 'pouvez-vous'.",
    legalRef: "Formules de politesse"
  },
  'fra-032': {
    content: "Les paronymes sont des mots de prononciation proche mais de sens différent : éminent/imminent, incident/accident, allocation/allocution. Attention aux confusions qui peuvent changer le sens.",
    tip: "Paronymes = pièges fréquents. Éminent (remarquable) ≠ imminent (proche). Effraction (cambriolage) ≠ infraction (règle enfreinte).",
    legalRef: "Vocabulaire - Paronymes"
  },
  'fra-033': {
    content: "La rédaction d'un e-mail professionnel : objet précis, formule d'appel, corps concis, formule de conclusion, signature avec coordonnées. Éviter les majuscules (= crier), les abréviations excessives, les émojis.",
    tip: "E-mail pro : objet clair, pas de MAJUSCULES, formule de politesse, signature. Pas d'émoji. Relecture avant envoi.",
    legalRef: "Nétiquette professionnelle"
  },
  'fra-034': {
    content: "L'accord des nombres : 'vingt' et 'cent' prennent un 's' quand ils sont multipliés et non suivis d'un autre nombre. 'Quatre-vingts' mais 'quatre-vingt-un'. 'Deux cents' mais 'deux cent cinquante'.",
    tip: "Vingt et cent : 's' si multipliés ET derniers de l'ensemble. 80 = quatre-vingts. 81 = quatre-vingt-un (pas de 's').",
    legalRef: "Orthographe - Nombres"
  },
  'fra-035': {
    content: "Le vocabulaire du temps et des horaires : en avance, à l'heure, en retard, ponctuel, délai, échéance, prévisionnel, estimé. Maîtriser ces termes pour communiquer précisément avec les clients.",
    tip: "Vocabulaire temps : arrivée prévue à / ETA / délai estimé. Éviter les approximations : 'vers 14h' → 'à 14h environ'.",
    legalRef: "Vocabulaire professionnel"
  },
  'fra-036': {
    content: "La différence entre 'quand' (temps), 'quant' (en ce qui concerne) et 'qu'en' (que en). 'Quand partez-vous ?' / 'Quant à moi, je reste' / 'Qu'en pensez-vous ?'",
    tip: "Quand = moment. Quant à = en ce qui concerne. Qu'en = que + en (qu'en dites-vous = que dites-vous de cela).",
    legalRef: "Orthographe - Homophones"
  },
  'fra-037': {
    content: "L'impératif négatif : 'ne' + verbe + 'pas'. À la 2e personne du singulier des verbes en -er, pas de 's' : 'ne parle pas', 'n'oublie pas'. Exception : devant 'en' et 'y' : 'n'en parle pas'.",
    tip: "Impératif négatif 2e pers. -er : pas de 's'. Ne mange pas, ne parle pas. Mais : manges-en, vas-y.",
    legalRef: "Conjugaison - Impératif négatif"
  },
  'fra-038': {
    content: "Les formules pour demander poliment : 'Auriez-vous l'amabilité de...', 'Serait-il possible de...', 'Permettez-moi de...', 'Je me permets de vous demander...'. Plus la formule est longue, plus elle est polie.",
    tip: "Demande polie = conditionnel + formule atténuante. 'Pourriez-vous, s'il vous plaît...' Éviter les ordres secs.",
    legalRef: "Formules de politesse"
  },
  'fra-039': {
    content: "La cohérence textuelle : chaque phrase doit s'enchaîner logiquement avec la précédente. Utiliser des mots de reprise (il, ce, celui-ci), des connecteurs, maintenir le même temps et le même point de vue.",
    tip: "Texte cohérent = fil conducteur clair. Chaque phrase reliée à la précédente. Pas de rupture de temps ou de sujet.",
    legalRef: "Expression écrite - Cohérence"
  },
  'fra-040': {
    content: "Résumer un texte : identifier les idées principales, éliminer les détails, reformuler avec ses propres mots, respecter l'ordre logique. Compétence utile pour rapporter un échange ou rédiger un compte-rendu.",
    tip: "Résumé = idées essentielles uniquement. Pas de détails, pas d'opinion personnelle. Reformuler, pas copier.",
    legalRef: "Technique du résumé"
  },

  // =====================
  // MODULE ANGLAIS (ang-001 à ang-040)
  // =====================
  'ang-001': {
    content: "'Hello' and 'Good morning/afternoon/evening' are standard greetings. 'Good morning' is used until noon, 'Good afternoon' until 6 PM, 'Good evening' after that. 'Hi' is more informal.",
    tip: "Morning = until 12h. Afternoon = 12h-18h. Evening = after 18h. 'Hello' works anytime.",
    legalRef: "English - Greetings"
  },
  'ang-002': {
    content: "'Where would you like to go?' or 'What is your destination?' are polite ways to ask for the destination. 'Where to?' is more casual but acceptable.",
    tip: "Formal: 'May I ask where you would like to go?' Casual: 'Where to?' or 'What's the destination?'",
    legalRef: "English - Basic questions"
  },
  'ang-003': {
    content: "'The ride will take approximately 30 minutes' or 'We should arrive in about 30 minutes'. Use 'approximately' or 'about' to indicate an estimate.",
    tip: "Give realistic estimates. 'About/Approximately X minutes' is safer than exact times in traffic.",
    legalRef: "English - Time expressions"
  },
  'ang-004': {
    content: "'The fare is X euros' or 'That will be X euros'. For fixed prices: 'The fixed rate is X euros'. For meter: 'The fare is calculated by the meter'.",
    tip: "Clarify the pricing: 'The fare is based on distance and time' or 'It's a fixed rate of X euros'.",
    legalRef: "English - Pricing vocabulary"
  },
  'ang-005': {
    content: "'May I help you with your luggage?' or 'Let me get your bags for you'. These polite offers show good service. 'Luggage' (UK) and 'baggage' (US) are both correct.",
    tip: "'May I help...' is more polite than 'Do you need help...' Show willingness to assist.",
    legalRef: "English - Offering help"
  },
  'ang-006': {
    content: "'Have a nice day/trip/flight' or 'Enjoy your stay' are appropriate farewells. 'It was a pleasure' or 'Thank you for riding with us' add a professional touch.",
    tip: "End positively: 'Have a great day!', 'Enjoy your stay!', 'Safe travels!' Leave a good final impression.",
    legalRef: "English - Farewells"
  },
  'ang-007': {
    content: "'Is the temperature comfortable?' or 'Would you like me to adjust the air conditioning?' Show attention to passenger comfort.",
    tip: "Ask: 'Is the temperature OK for you?' 'Would you prefer it warmer/cooler?' Adjust without being asked if client seems uncomfortable.",
    legalRef: "English - Comfort questions"
  },
  'ang-008': {
    content: "'Turn left/right', 'Go straight ahead', 'It's on your left/right', 'Take the first/second exit'. Basic directions vocabulary for communication with clients.",
    tip: "Simple directions: Left, Right, Straight, First exit, Second street. Point when speaking to clarify.",
    legalRef: "English - Directions"
  },
  'ang-009': {
    content: "'I apologize for the delay' or 'Sorry for keeping you waiting'. Acknowledge delays promptly. 'The traffic is heavy' or 'There's been an accident' to explain.",
    tip: "Apologize sincerely: 'I'm sorry for the delay. There's heavy traffic.' Give an updated ETA.",
    legalRef: "English - Apologizing"
  },
  'ang-010': {
    content: "'Do you have a preference for the route?' or 'Would you prefer the highway or the scenic route?'. Offer choices when appropriate.",
    tip: "Offer choices: 'Highway is faster but toll. City streets are free but might take longer. Your preference?'",
    legalRef: "English - Offering options"
  },
  'ang-011': {
    content: "Numbers and prices: 'Fifteen euros fifty' or 'Fifteen euros and fifty cents'. Phone numbers are usually given digit by digit: 'oh-six-one-two...'",
    tip: "For prices: 'Twenty-five euros' or '25.50 euros'. For phone: say each digit separately. 0 = 'oh' or 'zero'.",
    legalRef: "English - Numbers and prices"
  },
  'ang-012': {
    content: "'Would you like a receipt?' or 'Do you need a receipt?' are standard questions. 'Here is your receipt' when providing it.",
    tip: "Always offer: 'Would you like a receipt?' Have receipts ready. 'Here you go' when handing documents.",
    legalRef: "English - Receipts and documents"
  },
  'ang-013': {
    content: "'We have arrived' or 'Here we are' signal the end of the journey. 'This is your destination' confirms you're at the right place.",
    tip: "Arrival phrases: 'Here we are!', 'We've arrived at your destination.', 'This is [address].'",
    legalRef: "English - Arrival phrases"
  },
  'ang-014': {
    content: "Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. 'On Monday', 'This Tuesday', 'Next Wednesday'.",
    tip: "Days start with capital letters. 'On' + day: 'on Friday'. 'This' = current week. 'Next' = following week.",
    legalRef: "English - Days and dates"
  },
  'ang-015': {
    content: "'What time is your flight?' or 'When do you need to be there?' helps plan the journey. 'We should leave at...' suggests departure time.",
    tip: "For airport: 'What time is your flight?' 'Which terminal?' 'Domestic or international?' Plan extra time.",
    legalRef: "English - Time planning"
  },
  'ang-016': {
    content: "'Please fasten your seatbelt' or 'Could you please put on your seatbelt?' are polite safety reminders. Safety vocabulary is essential.",
    tip: "Safety phrases: 'Please buckle up', 'Seatbelts, please', 'For your safety, please fasten your seatbelt.'",
    legalRef: "English - Safety instructions"
  },
  'ang-017': {
    content: "'I will wait for you' or 'I'll be right here'. 'The waiting time is included in the fare' or 'Waiting time is charged at X per hour'.",
    tip: "Waiting: 'I'll wait here', 'Take your time', 'The meter runs during waiting time.' Be clear about charges.",
    legalRef: "English - Waiting"
  },
  'ang-018': {
    content: "'There is WiFi available' or 'The WiFi password is...'. 'We have phone chargers if you need one'. Modern service vocabulary.",
    tip: "Amenities: 'WiFi is available, password is...', 'There's a charger in the back.', 'Help yourself to water.'",
    legalRef: "English - Amenities"
  },
  'ang-019': {
    content: "'Cash or card?' asks about payment method. 'We accept credit cards / all major cards'. 'I'm sorry, cash only' if applicable.",
    tip: "Payment: 'How would you like to pay? Cash or card?' 'We accept Visa, Mastercard, and American Express.'",
    legalRef: "English - Payment"
  },
  'ang-020': {
    content: "'Can you spell that, please?' or 'Could you repeat that?' when you don't understand. 'Let me confirm: you're going to...' to verify.",
    tip: "Don't pretend to understand. 'Sorry, could you repeat that slowly?' 'Could you spell the address?' Better to ask than make mistakes.",
    legalRef: "English - Clarification"
  },
  'ang-021': {
    content: "'Excuse me' to get attention or apologize for a minor interruption. 'I beg your pardon' is more formal. 'Sorry' for apologies.",
    tip: "'Excuse me' = before interrupting. 'Sorry' = after a mistake. 'Pardon?' = didn't hear. Different uses.",
    legalRef: "English - Polite expressions"
  },
  'ang-022': {
    content: "Weather: 'It's sunny/rainy/cloudy/cold/hot today'. 'The forecast says rain later'. Small talk topic that's safe and universal.",
    tip: "Weather is safe small talk: 'Nice weather today!', 'It's quite cold, isn't it?' Avoid controversial topics.",
    legalRef: "English - Weather vocabulary"
  },
  'ang-023': {
    content: "'How was your flight?' or 'Is this your first time in [city]?' are polite conversation starters for airport pickups.",
    tip: "Airport small talk: 'How was your flight?', 'Welcome to Paris!', 'Are you here for business or pleasure?' Light and friendly.",
    legalRef: "English - Conversation starters"
  },
  'ang-024': {
    content: "'The hotel is 20 minutes away' or 'Your hotel is in the city center'. Locations: 'near', 'close to', 'next to', 'across from', 'behind'.",
    tip: "Location words: near/close to, next to, across from, behind, in front of, on the corner of. Use landmarks.",
    legalRef: "English - Locations"
  },
  'ang-025': {
    content: "'I recommend [restaurant/place]' or 'This area is famous for...'. Sharing local knowledge adds value to the service.",
    tip: "Share tips: 'This area has great restaurants', 'The museum is worth visiting', 'I recommend trying...'",
    legalRef: "English - Recommendations"
  },
  'ang-026': {
    content: "'Take care' or 'Have a safe trip' express concern for the client's wellbeing. Warm farewells leave positive impressions.",
    tip: "Warm farewells: 'Take care!', 'Safe travels!', 'Hope to see you again!', 'Enjoy your stay!'",
    legalRef: "English - Warm expressions"
  },
  'ang-027': {
    content: "'Just a moment, please' or 'I'll be right there'. 'Bear with me' asks for patience. Useful when slightly delayed.",
    tip: "Patience phrases: 'Just a moment', 'I'll be with you shortly', 'Thank you for your patience.'",
    legalRef: "English - Asking to wait"
  },
  'ang-028': {
    content: "Phone/address format: 'My number is...' 'The address is [number] [street name]'. Dictate slowly and clearly.",
    tip: "Give information slowly. Repeat important details. 'Let me spell that: B-A-K-E-R Street.' Confirm understanding.",
    legalRef: "English - Contact information"
  },
  'ang-029': {
    content: "'Do you need anything else?' or 'Is there anything else I can help you with?' shows willingness to serve beyond the basics.",
    tip: "Final check: 'Is there anything else you need?', 'All good?', 'You have everything?' Helpful attitude.",
    legalRef: "English - Service completion"
  },
  'ang-030': {
    content: "'Certainly' or 'Of course' are positive responses to requests. 'Right away' or 'Immediately' show promptness.",
    tip: "Positive responses: 'Certainly!', 'Of course!', 'Absolutely!', 'My pleasure!' Show enthusiasm to help.",
    legalRef: "English - Affirmative responses"
  },
  'ang-031': {
    content: "'Unfortunately...' or 'I'm afraid...' soften negative information. 'Regrettably, there's heavy traffic' sounds more professional.",
    tip: "Soften bad news: 'I'm afraid there's a delay', 'Unfortunately, that route is closed.' Offer alternatives.",
    legalRef: "English - Delivering bad news"
  },
  'ang-032': {
    content: "'Allow me' or 'Let me help you with that' when assisting. 'After you' when letting the client go first.",
    tip: "Courteous phrases: 'Allow me', 'After you', 'Please, go ahead', 'Let me get the door for you.'",
    legalRef: "English - Courtesy phrases"
  },
  'ang-033': {
    content: "Months: January, February, March, April, May, June, July, August, September, October, November, December. 'In March', 'On March 15th'.",
    tip: "Dates: 'March fifteenth' (US) or 'the fifteenth of March' (UK). Both understood. Months always capitalized.",
    legalRef: "English - Months and dates"
  },
  'ang-034': {
    content: "'I don't quite understand' or 'I'm not sure I follow'. Polite ways to say you don't understand without seeming dismissive.",
    tip: "Polite confusion: 'I'm not sure I understand', 'Could you clarify?', 'What do you mean by...?' Don't just nod.",
    legalRef: "English - Expressing confusion"
  },
  'ang-035': {
    content: "'It's been a pleasure' or 'Thank you for choosing us' express gratitude professionally. Ends the interaction positively.",
    tip: "Professional thanks: 'It's been a pleasure serving you', 'Thank you for choosing us', 'We appreciate your business.'",
    legalRef: "English - Expressing gratitude"
  },
  'ang-036': {
    content: "'Traffic jam', 'congestion', 'roadworks/construction', 'accident ahead', 'detour'. Traffic-related vocabulary for explaining delays.",
    tip: "Traffic vocabulary: 'Heavy traffic', 'Traffic jam', 'Roadworks ahead', 'Taking an alternative route.'",
    legalRef: "English - Traffic vocabulary"
  },
  'ang-037': {
    content: "'Please make yourself comfortable' or 'Feel free to adjust the seat'. Creating a comfortable environment for the client.",
    tip: "Comfort offers: 'Make yourself comfortable', 'Feel free to adjust anything', 'Let me know if you need anything.'",
    legalRef: "English - Comfort phrases"
  },
  'ang-038': {
    content: "'I'll pick you up at...' or 'The pickup point is at...'. 'Meet me at the main entrance' for specific meeting points.",
    tip: "Pickup vocabulary: 'I'll meet you at...', 'Look for a black Mercedes', 'I'll be waiting at door 3.'",
    legalRef: "English - Pickup arrangements"
  },
  'ang-039': {
    content: "'Emergency exit', 'first aid kit', 'fire extinguisher'. Emergency vocabulary that may be needed in exceptional situations.",
    tip: "Emergency words: 'Are you OK?', 'Do you need medical help?', 'I'm calling emergency services.' Stay calm.",
    legalRef: "English - Emergency vocabulary"
  },
  'ang-040': {
    content: "Comparative and superlative: 'faster', 'the fastest route'. 'This way is quicker' or 'This is the shortest route'.",
    tip: "Comparisons: 'faster/the fastest', 'shorter/the shortest', 'more comfortable/the most comfortable'. Useful for route options.",
    legalRef: "English - Comparatives"
  },

  // =====================
  // MODULE VTC (vtc-001 à vtc-040)
  // =====================
  'vtc-001': {
    content: "La carte professionnelle VTC est délivrée par le préfet du département de résidence après réussite à l'examen T3P. Elle est valable 5 ans et doit être renouvelée avec justification des conditions (aptitude médicale, formation continue).",
    tip: "Carte VTC = 5 ans de validité. Renouvellement : visite médicale + attestation de formation continue. Anticiper les démarches (3-6 mois avant expiration).",
    legalRef: "Article R3120-8 du Code des transports"
  },
  'vtc-002': {
    content: "Le VTC doit obligatoirement disposer d'une réservation préalable avant toute prise en charge. La maraude (prise en charge spontanée dans la rue ou en station) est strictement interdite et réservée aux taxis.",
    tip: "Réservation préalable = OBLIGATOIRE. Pas de maraude, pas de prise en charge dans la rue. Amende : 1 500€.",
    legalRef: "Article L3120-2 du Code des transports"
  },
  'vtc-003': {
    content: "Le véhicule VTC doit avoir entre 4 et 9 places (conducteur compris), moins de 6 ans d'ancienneté, une puissance minimale de 84 kW, et des dimensions minimales (4,50m de long, 1,70m de large) sauf véhicules hybrides/électriques.",
    tip: "Véhicule VTC : 4-9 places, <6 ans, ≥84 kW, dimensions mini 4,50m x 1,70m. Hybride/électrique : conditions assouplies sur les dimensions.",
    legalRef: "Article R3122-1 du Code des transports"
  },
  'vtc-004': {
    content: "L'inscription au registre des VTC est obligatoire pour exercer. Elle se fait auprès du préfet de région et doit être renouvelée tous les 5 ans. Elle atteste que l'entreprise remplit toutes les conditions légales.",
    tip: "Registre VTC = préfecture de région. Obligatoire pour exercer. Contient les informations sur l'exploitant et les véhicules.",
    legalRef: "Article R3122-9 du Code des transports"
  },
  'vtc-005': {
    content: "L'assurance responsabilité civile professionnelle est obligatoire et doit couvrir les dommages causés aux passagers, aux tiers et aux bagages. Le montant minimum de couverture est défini par la réglementation.",
    tip: "Assurance RC Pro obligatoire. Vérifier : couverture passagers, bagages, tiers. Attestation à jour dans le véhicule.",
    legalRef: "Article R3120-4 du Code des transports"
  },
  'vtc-006': {
    content: "La signalétique VTC est obligatoire : vignette verte sur le pare-brise avec la mention 'VTC' visible de l'extérieur. Elle permet d'identifier le véhicule comme VTC autorisé.",
    tip: "Vignette VTC verte = obligatoire sur pare-brise, visible de l'extérieur. Absence = infraction.",
    legalRef: "Article R3122-6 du Code des transports"
  },
  'vtc-007': {
    content: "Le retour à la base (ou au domicile) est obligatoire entre deux courses, sauf si une nouvelle réservation a été enregistrée. Stationner en attente de client sans réservation est interdit (assimilé à la maraude).",
    tip: "Entre deux courses : retour à la base ou nouvelle réservation reçue. Pas de stationnement en attente sans réservation = maraude déguisée.",
    legalRef: "Article R3120-3 du Code des transports"
  },
  'vtc-008': {
    content: "Le tarif VTC est libre mais doit être convenu avec le client avant la course. Il peut être forfaitaire ou calculé selon la distance et le temps. Le compteur horokilométrique n'est pas obligatoire.",
    tip: "Tarif libre mais transparent. Annoncer le prix avant départ. Forfait ou calcul distance/temps. Pas de compteur obligatoire.",
    legalRef: "Article L3122-2 du Code des transports"
  },
  'vtc-009': {
    content: "La formation continue est obligatoire pour le renouvellement de la carte professionnelle. Elle porte sur la réglementation, la sécurité et la relation client. Sa durée et son contenu sont définis réglementairement.",
    tip: "Formation continue = obligatoire pour renouveler la carte. Anticiper : la suivre dans l'année précédant le renouvellement.",
    legalRef: "Article R3120-9 du Code des transports"
  },
  'vtc-010': {
    content: "La visite médicale d'aptitude à la conduite est obligatoire pour l'obtention et le renouvellement de la carte professionnelle. Elle doit être réalisée par un médecin agréé par la préfecture.",
    tip: "Visite médicale préfectorale obligatoire. Médecin agréé uniquement. Validité : 5 ans (<60 ans), moins ensuite.",
    legalRef: "Article R3120-7 du Code des transports"
  },
  'vtc-011': {
    content: "L'examen T3P comprend deux épreuves : admissibilité (épreuves communes à toutes les professions T3P) et admission (épreuve spécifique au métier choisi : taxi, VTC ou VMDTR).",
    tip: "Examen T3P : Admissibilité (50 questions communes) puis Admission (20 questions spécifiques). Seuil : 70% minimum.",
    legalRef: "Arrêté du 6 avril 2017 relatif à l'examen T3P"
  },
  'vtc-012': {
    content: "Le délai de retour après dépose du client est réglementé. Le VTC doit retourner à son lieu d'établissement ou recevoir une nouvelle réservation. Le stationnement en attente prolongée est interdit.",
    tip: "Après dépose : retour immédiat ou nouvelle réservation. Pas de stationnement prolongé 'en attente' = contrôlable.",
    legalRef: "Article R3120-3 du Code des transports"
  },
  'vtc-013': {
    content: "L'exploitant VTC peut être une personne physique (entrepreneur individuel) ou une société. Il doit être inscrit au registre des métiers ou au registre du commerce et des sociétés.",
    tip: "Statut exploitant : EI (inscription RM) ou société (RCS ou RM selon forme). L'inscription au registre VTC est distincte.",
    legalRef: "Article L3122-1 du Code des transports"
  },
  'vtc-014': {
    content: "Les sanctions pour exercice illégal de l'activité VTC (sans carte, sans inscription, maraude) peuvent aller jusqu'à 1 an d'emprisonnement et 15 000€ d'amende, voire la confiscation du véhicule.",
    tip: "Exercice illégal VTC = délit. 1 an prison + 15 000€ + confiscation véhicule possible. Respecter scrupuleusement la réglementation.",
    legalRef: "Article L3124-4 du Code des transports"
  },
  'vtc-015': {
    content: "Le VTC peut stationner sur la voie publique le temps de la prise en charge ou de la dépose du client, mais ne peut pas stationner en attente de clientèle (maraude).",
    tip: "Stationnement autorisé : prise en charge et dépose uniquement. Pas de stationnement en attente = maraude interdite.",
    legalRef: "Article R3120-3 du Code des transports"
  },
  'vtc-016': {
    content: "La carte professionnelle doit être visible dans le véhicule pendant l'exercice de l'activité et présentable à tout moment lors d'un contrôle. Son absence est sanctionnable.",
    tip: "Carte pro = visible à bord + présentable. Toujours avoir l'original sur soi. Photocopie non valable pour contrôle.",
    legalRef: "Article R3120-6 du Code des transports"
  },
  'vtc-017': {
    content: "L'intermédiation (plateforme numérique) doit respecter la réglementation : vérifier les conditions d'exercice des chauffeurs, ne pas permettre la maraude, informer clairement sur les tarifs.",
    tip: "Plateforme = intermédiaire réglementé. Doit vérifier les conditions des chauffeurs et respecter les règles VTC.",
    legalRef: "Article L3141-1 et suivants du Code des transports"
  },
  'vtc-018': {
    content: "La cessation d'activité doit être déclarée au préfet dans les meilleurs délais. La carte professionnelle doit être restituée et l'inscription au registre radiée.",
    tip: "Fin d'activité : déclarer en préfecture + restituer la carte + radiation du registre. Formalités obligatoires.",
    legalRef: "Article R3122-14 du Code des transports"
  },
  'vtc-019': {
    content: "Le VTC peut prendre en charge des clients à un aéroport ou une gare uniquement sur réservation préalable. La prise en charge spontanée dans ces lieux est réservée aux taxis.",
    tip: "Aéroport/gare : uniquement sur réservation. Pas de racolage, pas de prise en charge spontanée = exclusivité taxi.",
    legalRef: "Article L3120-2 du Code des transports"
  },
  'vtc-020': {
    content: "Le justificatif de réservation doit pouvoir être présenté lors d'un contrôle. Il peut être électronique (application) ou papier et doit comporter les informations essentielles (client, date, heure, trajet).",
    tip: "Preuve de réservation = obligatoire et vérifiable. Application, SMS, email, papier acceptés. Conserver les traces.",
    legalRef: "Article R3122-7 du Code des transports"
  },
  'vtc-021': {
    content: "Le contrat de transport lie le VTC et le client. Il implique des obligations pour les deux parties : sécurité, ponctualité pour le VTC ; paiement, respect des règles pour le client.",
    tip: "Contrat de transport = obligations mutuelles. VTC : conduire en sécurité au lieu convenu. Client : payer le prix convenu.",
    legalRef: "Articles L3221-1 et suivants du Code des transports"
  },
  'vtc-022': {
    content: "L'âge minimum pour obtenir la carte professionnelle VTC est de 21 ans. Le candidat doit également être titulaire du permis B depuis au moins 3 ans (ou 2 ans en conduite accompagnée).",
    tip: "Conditions d'âge : 21 ans minimum + permis B depuis 3 ans (2 ans si conduite accompagnée).",
    legalRef: "Article R3120-7 du Code des transports"
  },
  'vtc-023': {
    content: "Le casier judiciaire (bulletin n°2) est vérifié lors de la demande de carte professionnelle. Certaines condamnations sont incompatibles avec l'exercice de la profession.",
    tip: "Casier B2 vérifié. Incompatibilités : condamnations pour crimes, délits routiers graves, atteintes aux personnes, etc.",
    legalRef: "Article R3120-7 du Code des transports"
  },
  'vtc-024': {
    content: "Le VTC doit informer le client du prix de la course avant le départ. Cette information peut être donnée oralement ou via l'application de réservation.",
    tip: "Prix = communiqué avant départ. Pas de surprise à l'arrivée. Forfait ou estimation à confirmer si calcul en cours de route.",
    legalRef: "Article R3121-4 du Code des transports"
  },
  'vtc-025': {
    content: "La mention 'véhicule avec chauffeur' ou 'VTC' doit apparaître sur les documents commerciaux et la signalétique du véhicule, distinguant clairement l'activité de celle des taxis.",
    tip: "Identification claire VTC : vignette verte + documents commerciaux mentionnant VTC. Pas de confusion avec taxi.",
    legalRef: "Article R3122-6 du Code des transports"
  },
  'vtc-026': {
    content: "Le VTC ne peut pas utiliser de compteur horokilométrique apparent (lumineux type taxi). Le tarif est soit forfaitaire soit communiqué via l'application sans affichage type taxi.",
    tip: "Pas de compteur type taxi visible. Tarification différente : forfait ou calcul via application. Distinction visuelle avec taxis.",
    legalRef: "Distinction taxi/VTC - Signalétique"
  },
  'vtc-027': {
    content: "Les zones de prise en charge aéroportuaires sont strictement réglementées. Le VTC doit respecter les zones dédiées et ne peut stationner dans les zones réservées aux taxis.",
    tip: "Aéroports : zones VTC distinctes des zones taxis. Respecter la signalétique. Amendes élevées en zone interdite.",
    legalRef: "Règlements intérieurs des aéroports"
  },
  'vtc-028': {
    content: "La location de véhicule avec chauffeur (VTC) se distingue du transport public de personnes par la réservation préalable et l'absence de maraude. C'est un service personnalisé.",
    tip: "VTC = location de véhicule avec chauffeur ≠ transport public. Service personnalisé, sur réservation uniquement.",
    legalRef: "Définition du service VTC"
  },
  'vtc-029': {
    content: "Le conducteur VTC salarié doit disposer de sa propre carte professionnelle, distincte de l'inscription de son employeur au registre VTC. Chaque conducteur est individuellement qualifié.",
    tip: "Salarié VTC = sa propre carte professionnelle obligatoire. L'inscription de l'employeur ne suffit pas pour le conducteur.",
    legalRef: "Article R3120-8 du Code des transports"
  },
  'vtc-030': {
    content: "La durée de validité de l'inscription au registre VTC est de 5 ans. Le renouvellement nécessite de justifier à nouveau des conditions (assurance, véhicule conforme, carte conducteur valide).",
    tip: "Registre VTC = 5 ans. Renouvellement : actualiser toutes les pièces (assurance, véhicule, carte pro). Anticiper les délais.",
    legalRef: "Article R3122-9 du Code des transports"
  },
  'vtc-031': {
    content: "Le VTC peut refuser une course si les conditions ne sont pas réunies (client en état d'ébriété avancé, comportement dangereux, animal non maîtrisé), mais ne peut discriminer selon des critères prohibés.",
    tip: "Refus de course possible si motif légitime (sécurité, comportement). Interdit de discriminer (origine, handicap...).",
    legalRef: "Droit du transport et non-discrimination"
  },
  'vtc-032': {
    content: "L'échange de carte professionnelle entre ancienne et nouvelle version (évolution réglementaire) peut être exigé par la préfecture. Suivre les informations officielles pour les mises à jour.",
    tip: "Carte pro : format peut évoluer. Suivre les communications préfectorales pour les échanges obligatoires.",
    legalRef: "Évolutions réglementaires VTC"
  },
  'vtc-033': {
    content: "Le contrôle des VTC peut être effectué par la police nationale, la gendarmerie, les agents de la DGCCRF ou les contrôleurs des transports terrestres.",
    tip: "Contrôle possible par : police, gendarmerie, DGCCRF, agents des transports. Toujours avoir tous les documents à bord.",
    legalRef: "Article L3123-1 du Code des transports"
  },
  'vtc-034': {
    content: "Les informations du registre VTC sont consultables par le public (nom de l'entreprise, véhicules). Cette transparence permet de vérifier qu'un VTC est bien inscrit.",
    tip: "Registre VTC = consultation publique possible. Le client peut vérifier que l'entreprise est bien enregistrée.",
    legalRef: "Transparence du registre VTC"
  },
  'vtc-035': {
    content: "Le siège de l'entreprise VTC (ou le domicile pour une EI) détermine la préfecture de rattachement pour l'inscription au registre et les démarches administratives.",
    tip: "Préfecture compétente = siège de l'entreprise ou domicile personnel (EI). Changement d'adresse = mise à jour obligatoire.",
    legalRef: "Compétence territoriale"
  },
  'vtc-036': {
    content: "Les véhicules hybrides et électriques bénéficient d'assouplissements sur les critères techniques (dimensions notamment). Ces avantages encouragent la transition écologique.",
    tip: "Véhicules propres : conditions assouplies (dimensions). Vérifier les critères actuels selon le type de motorisation.",
    legalRef: "Article R3122-1 du Code des transports"
  },
  'vtc-037': {
    content: "La radiation du registre VTC intervient en cas de non-renouvellement, de non-respect des conditions ou à la demande de l'exploitant. Elle interdit la poursuite de l'activité.",
    tip: "Radiation = fin de l'autorisation d'exercer. Peut être volontaire ou sanction. Continuer après radiation = exercice illégal.",
    legalRef: "Article R3122-14 du Code des transports"
  },
  'vtc-038': {
    content: "Le VTC doit tenir à jour un registre de ses courses (ou conserver les données de la plateforme). Ces informations peuvent être demandées lors d'un contrôle.",
    tip: "Traçabilité des courses obligatoire. Conserver les données : date, heure, trajet, client, prix. Durée de conservation à respecter.",
    legalRef: "Obligation de traçabilité"
  },
  'vtc-039': {
    content: "Le conducteur VTC peut travailler pour plusieurs plateformes simultanément. La carte professionnelle est personnelle et non liée à une seule entreprise ou plateforme.",
    tip: "Multi-plateforme autorisé. La carte pro est personnelle, pas liée à une plateforme. Liberté de travailler avec plusieurs apps.",
    legalRef: "Liberté d'exercice"
  },
  'vtc-040': {
    content: "La réglementation VTC relève principalement du Code des transports. Elle est régulièrement mise à jour, nécessitant une veille juridique de la part des professionnels.",
    tip: "Veille réglementaire importante. Code des transports + décrets/arrêtés. Les règles évoluent, se tenir informé.",
    legalRef: "Code des transports - Partie VTC"
  },
  // =====================
  // TAXI PARIS 75 (tx75-001 à tx75-012)
  // =====================
  'tx75-001': {
    content: "C'est le Ministère de la Transition écologique (et non les Transports ou l'Économie) qui publie chaque année l'arrêté fixant les tarifs maximaux des courses de taxis. Cet arrêté définit les plafonds de la prise en charge, du kilomètre parcouru et de l'heure d'attente que chaque préfet peut ensuite adapter localement.",
    tip: "Transition écologique = tarifs taxis nationaux. Le préfet applique ces plafonds au niveau départemental.",
    legalRef: "Arrêté annuel relatif aux tarifs des courses de taxi"
  },
  'tx75-002': {
    content: "Lors d'un contrôle routier, deux éléments permettent de vérifier que le taximètre est bien à jour : la lettre de couleur (changée chaque année lors de la révision tarifaire) apposée sur le taximètre, et le scellé intact qui garantit que l'appareil n'a pas été manipulé frauduleusement.",
    tip: "Lettre de couleur = année tarifaire. Scellé = intégrité du taximètre. Les deux sont vérifiés lors des contrôles.",
    legalRef: "Arrêté du 3 mars 2009 relatif aux taximètres"
  },
  'tx75-003': {
    content: "Depuis 2019, les taxis sont obligés d'accepter le paiement par carte bancaire pour tout montant dès que le client le demande. Il n'existe plus de seuil minimum. Le refus d'accepter la carte bancaire est passible d'une amende.",
    tip: "CB obligatoire = tout montant. Pas de seuil. Équipement terminal de paiement = obligatoire pour tout taxi.",
    legalRef: "Article L3121-11-2 du Code des transports"
  },
  'tx75-004': {
    content: "L'application « le.taxi » est le registre national de disponibilité des taxis. Un chauffeur inscrit peut être sollicité dans l'ensemble de son département d'exercice, pas uniquement dans sa commune de rattachement. Cela élargit sa zone de chalandise.",
    tip: "le.taxi = département entier. C'est un avantage par rapport à la maraude classique limitée à la zone de rattachement.",
    legalRef: "Décret n°2014-1725 du 30 décembre 2014"
  },
  'tx75-005': {
    content: "Le véhicule relais est un véhicule de remplacement temporaire autorisé uniquement en cas de panne, accident ou entretien prolongé du véhicule principal. Il doit être déclaré en préfecture et respecter les mêmes normes que le véhicule habituel.",
    tip: "Véhicule relais = panne/entretien seulement. Pas pour augmenter la flotte. Déclaration préfecture obligatoire.",
    legalRef: "Article R3121-5 du Code des transports"
  },
  'tx75-006': {
    content: "Le non-respect des tarifs fixés par la préfecture (surfacturation) constitue une contravention de 5e classe, punie d'une amende pouvant atteindre 1 500 € (3 000 € en récidive). Le taximètre doit afficher le tarif exact conforme à l'arrêté préfectoral.",
    tip: "Tarifs non respectés = amende 5e classe (1 500 €). La surfacturation peut aussi entraîner un retrait de licence.",
    legalRef: "Article R3124-10 du Code des transports"
  },
  'tx75-007': {
    content: "La carte professionnelle de conducteur de taxi doit être présentée immédiatement lors de tout contrôle. La non-présentation immédiate (même si le conducteur la possède) est une contravention de 4e classe, punie d'une amende de 750 €.",
    tip: "Carte pro = toujours sur soi et présentable immédiatement. Non-présentation = 4e classe même si vous l'avez oubliée.",
    legalRef: "Article R3124-7 du Code des transports"
  },
  'tx75-008': {
    content: "Le préfet de département fixe, par arrêté, les tarifs applicables aux taxis de son ressort dans le respect des plafonds nationaux. Il détermine notamment le montant de la prise en charge, les tarifs horaires et kilométriques, et les suppléments autorisés.",
    tip: "Préfet = tarifs départementaux. Ministère = plafonds nationaux. Le préfet peut être plus bas, jamais plus haut.",
    legalRef: "Article L3121-2 du Code des transports"
  },
  'tx75-009': {
    content: "Le client peut demander à s'asseoir à l'avant du véhicule et le chauffeur peut l'autoriser. Ce n'est pas interdit par la réglementation. Cependant, en cas de transport de plusieurs passagers, la place avant peut être utilisée pour atteindre la capacité maximale.",
    tip: "Place avant = au choix du client avec accord du chauffeur. Pas d'interdiction réglementaire.",
    legalRef: "Usage professionnel - Pas de texte restrictif"
  },
  'tx75-010': {
    content: "Les suppléments (4e passager, bagages volumineux, réservation...) s'ajoutent au montant affiché au compteur (taximètre) à la fin de la course. Ils doivent être affichés de manière visible dans le véhicule et conformes à l'arrêté préfectoral.",
    tip: "Suppléments = sur le montant compteur. Affichage obligatoire. Ne peuvent dépasser les plafonds préfectoraux.",
    legalRef: "Arrêté préfectoral sur les tarifs taxi"
  },
  'tx75-011': {
    content: "Les taxis bénéficient d'une dérogation : ils ne sont pas obligés de disposer d'un siège enfant homologué. L'enfant peut voyager sans dispositif de retenue adapté, sous la responsabilité de l'accompagnateur adulte. Cette exception ne s'applique qu'aux taxis.",
    tip: "Taxi = dispense siège enfant (art. R412-2). VTC = pas de dispense claire, équipement recommandé.",
    legalRef: "Article R412-2 du Code de la route"
  },
  'tx75-012': {
    content: "En cas de décès du titulaire d'une autorisation de stationnement (licence taxi), les ayants droit disposent d'un délai d'un an pour présenter un successeur ou céder la licence. Passé ce délai, l'autorisation peut être retirée par l'autorité compétente.",
    tip: "Décès = 1 an pour transmettre la licence. Délai à respecter impérativement par les héritiers.",
    legalRef: "Article L3121-2 du Code des transports"
  },
  // =====================
  // TAXI PARIS 75 - RÉGLEMENTATION NATIONALE (tx75-013 à tx75-020)
  // =====================
  'tx75-013': {
    content: "La carte professionnelle de conducteur de taxi a une durée de validité de 5 ans. Elle doit être renouvelée avant son expiration, sous peine de ne plus pouvoir exercer. Le renouvellement nécessite une formation continue de 14 heures.",
    tip: "Carte pro = 5 ans. Anticiper le renouvellement (3 mois avant). Formation continue obligatoire.",
    legalRef: "Article R3120-7 du Code des transports"
  },
  'tx75-014': {
    content: "L'autorisation de stationnement (ADS) est délivrée par le maire pour les communes, ou par le préfet pour les zones aéroportuaires et certaines zones spécifiques. À Paris, c'est la Préfecture de Police qui gère les ADS.",
    tip: "Commune = Maire. Aéroports/zones spéciales = Préfet. Paris = Préfecture de Police.",
    legalRef: "Article L3121-1 du Code des transports"
  },
  'tx75-015': {
    content: "Une autorisation de stationnement (ADS) délivrée gratuitement après le 1er octobre 2014 ne peut être cédée à titre onéreux qu'après 5 ans d'exploitation effective par le titulaire. Ce délai vise à éviter la spéculation.",
    tip: "ADS gratuite = 5 ans avant cession payante. Anti-spéculation. Cession à titre gratuit possible avant.",
    legalRef: "Article L3121-2 du Code des transports"
  },
  'tx75-016': {
    content: "La maraude (recherche de clients sur la voie publique avec un véhicule en circulation ou stationné) est un droit exclusif des taxis. Les VTC doivent obligatoirement faire l'objet d'une réservation préalable.",
    tip: "Maraude = TAXI uniquement. VTC = réservation préalable obligatoire. C'est LA différence fondamentale.",
    legalRef: "Article L3120-2 du Code des transports"
  },
  'tx75-017': {
    content: "Les conducteurs de taxi doivent suivre une formation continue de 14 heures tous les 5 ans pour le renouvellement de leur carte professionnelle. Cette formation porte sur la réglementation, la sécurité et les évolutions du métier.",
    tip: "Formation continue = 14h / 5 ans. Obligatoire pour renouveler la carte. Centre agréé par la préfecture.",
    legalRef: "Article R3120-7 du Code des transports"
  },
  'tx75-018': {
    content: "Deux documents doivent être obligatoirement visibles des passagers : la carte professionnelle du conducteur et l'affichette tarifaire indiquant les prix en vigueur. Le défaut d'affichage est sanctionné.",
    tip: "Carte pro + affichette tarifs = visibles du passager. Vérifiables lors de tout contrôle.",
    legalRef: "Article R3121-1 du Code des transports"
  },
  'tx75-019': {
    content: "L'exercice illégal de la profession de taxi (sans carte professionnelle ou sans ADS) constitue un délit puni d'un an d'emprisonnement et de 15 000 € d'amende. Le véhicule peut également être immobilisé.",
    tip: "Taxi clandestin = délit. 1 an prison + 15 000 €. Immobilisation du véhicule possible.",
    legalRef: "Article L3124-4 du Code des transports"
  },
  'tx75-020': {
    content: "Le dispositif lumineux (lumineux taxi) doit porter la mention 'TAXI' et indiquer la commune de rattachement du véhicule. Il doit être allumé (vert) lorsque le taxi est libre et éteint lorsqu'il est occupé.",
    tip: "Lumineux = TAXI + commune. Vert = libre. Éteint = occupé ou hors service.",
    legalRef: "Article R3121-1 du Code des transports"
  },
  // =====================
  // TAXI PARIS 75 - RÉGLEMENTATION LOCALE (tx75-021 à tx75-030)
  // =====================
  'tx75-021': {
    content: "Paris compte environ 18 000 licences de taxi (numerus clausus). Ce nombre est fixé par la Préfecture de Police et n'évolue que très lentement. L'obtention d'une licence gratuite se fait sur liste d'attente (plusieurs années).",
    tip: "Paris ≈ 18 000 taxis. Liste d'attente longue. Achat de licence = plusieurs centaines de milliers d'euros.",
    legalRef: "Préfecture de Police de Paris"
  },
  'tx75-022': {
    content: "À Paris, contrairement aux autres communes, c'est la Préfecture de Police (et non la mairie) qui délivre et gère les autorisations de stationnement des taxis. C'est une particularité historique de la capitale.",
    tip: "Paris = Préfecture de Police. Province = Maire ou Préfet selon les cas.",
    legalRef: "Préfecture de Police de Paris"
  },
  'tx75-023': {
    content: "Les taxis parisiens ont une zone de rattachement élargie qui inclut Paris et les départements de la petite couronne (92, 93, 94). Ils peuvent donc pratiquer la maraude dans cette zone étendue.",
    tip: "Zone Paris = 75 + 92 + 93 + 94. Maraude possible dans toute cette zone. Retour à vide autorisé.",
    legalRef: "Arrêté préfectoral zone taxi Paris"
  },
  'tx75-024': {
    content: "Les taxis parisiens appliquent différents tarifs : Tarif A (jour en semaine dans Paris), Tarif B (nuit 17h-10h, dimanches et fériés dans Paris), Tarif C (jour banlieue), Tarif D (nuit banlieue). Les tarifs B, C, D sont plus élevés que le tarif A.",
    tip: "A = jour Paris. B = nuit/dimanche Paris. C = jour banlieue. D = nuit banlieue. De A à D = du moins cher au plus cher.",
    legalRef: "Arrêté préfectoral tarifs taxi Paris"
  },
  'tx75-025': {
    content: "Des forfaits aéroports sont en vigueur : Paris rive droite - CDG = 56 €, Paris rive gauche - CDG = 62 €, Paris rive droite - Orly = 44 €, Paris rive gauche - Orly = 39 €. Ces forfaits s'appliquent dans les deux sens.",
    tip: "Forfaits aéroports = fixes, quel que soit le trajet exact. Rive droite/gauche détermine le prix.",
    legalRef: "Arrêté préfectoral forfaits aéroports Paris"
  },
  'tx75-026': {
    content: "Le refus de course est strictement interdit pour les taxis. Un chauffeur ne peut refuser un client sous prétexte de la destination, de l'heure ou de la distance. Le refus est sanctionné et peut entraîner des poursuites.",
    tip: "Refus de course = INTERDIT. Obligation de transporter. Peut être signalé à la préfecture.",
    legalRef: "Article R3124-6 du Code des transports"
  },
  'tx75-027': {
    content: "Les taxis ne peuvent stationner en attente de clients que sur les emplacements officiels (stations de taxi). Le stationnement sur voie publique hors station, même bref, est interdit et verbalisable.",
    tip: "Attente clients = stations uniquement. Pas de stationnement sauvage. Amende en cas d'infraction.",
    legalRef: "Code de la route et arrêtés municipaux Paris"
  },
  'tx75-028': {
    content: "Les files d'attente taxi des aéroports parisiens (CDG et Orly) sont accessibles aux taxis parisiens et aux taxis des départements franciliens. Les taxis provinciaux peuvent déposer mais pas charger.",
    tip: "Aéroports Paris = taxis IDF uniquement pour charger. Taxis province = dépôt seulement.",
    legalRef: "Règlement aéroports de Paris"
  },
  'tx75-029': {
    content: "Le macaron taxi parisien est de couleur bleue et doit être apposé sur le pare-brise du véhicule. Il atteste de l'enregistrement du taxi auprès de la Préfecture de Police et de la validité de l'autorisation.",
    tip: "Macaron bleu = Paris. Chaque département a sa couleur. Visible sur pare-brise avant.",
    legalRef: "Préfecture de Police de Paris"
  },
  'tx75-030': {
    content: "Depuis le 1er janvier 2019, tous les taxis doivent obligatoirement être équipés d'un terminal de paiement électronique (TPE). Le paiement par carte bancaire ne peut être refusé, quel que soit le montant de la course.",
    tip: "TPE = obligatoire depuis 2019. CB = tout montant. Refus = infraction sanctionnable.",
    legalRef: "Article L3121-11-2 du Code des transports"
  },
  // =====================
  // TOPOGRAPHIE PARIS - MONUMENTS (topo-001 à topo-010)
  // =====================
  'topo-001': {
    content: "La Tour Eiffel, construite pour l'Exposition Universelle de 1889, est située dans le 7ème arrondissement sur le Champ de Mars. Elle culmine à 330 mètres et offre une vue panoramique sur Paris.",
    tip: "7ème = Tour Eiffel, Invalides, Musée d'Orsay. Adresse : Champ de Mars, 5 avenue Anatole France.",
    legalRef: "Topographie Paris - Monuments"
  },
  'topo-002': {
    content: "L'avenue des Champs-Élysées s'étend sur 1,9 km entre la Place de la Concorde et la Place de l'Étoile (Arc de Triomphe). C'est l'une des avenues les plus célèbres au monde.",
    tip: "Champs-Élysées = 8ème arrondissement. Concorde → Étoile = montée. Commerces, cinémas, cafés.",
    legalRef: "Topographie Paris - Axes majeurs"
  },
  'topo-003': {
    content: "Le Musée du Louvre, ancien palais royal, est le plus grand musée du monde. Il est situé sur la rive droite dans le 1er arrondissement, reconnaissable à sa pyramide de verre.",
    tip: "Louvre = 1er (rive droite). Entrée principale par la pyramide. Station métro : Palais Royal-Musée du Louvre.",
    legalRef: "Topographie Paris - Monuments"
  },
  'topo-004': {
    content: "La Basilique du Sacré-Cœur domine Paris depuis la butte Montmartre dans le 18ème arrondissement. Construite à partir de 1875, elle offre un panorama exceptionnel sur la capitale.",
    tip: "18ème = Montmartre, Sacré-Cœur, Place du Tertre. Accès par funiculaire ou escaliers.",
    legalRef: "Topographie Paris - Monuments"
  },
  'topo-005': {
    content: "La Cathédrale Notre-Dame de Paris est située sur l'Île de la Cité, berceau historique de Paris. L'île fait partie du 4ème arrondissement et abrite également la Sainte-Chapelle.",
    tip: "Île de la Cité = cœur de Paris. Notre-Dame, Sainte-Chapelle, Conciergerie, Préfecture de Police.",
    legalRef: "Topographie Paris - Monuments"
  },
  'topo-006': {
    content: "Le Panthéon, mausolée des grands personnages de l'histoire de France, est situé sur la montagne Sainte-Geneviève dans le Quartier Latin (5ème). Il abrite les tombes de Voltaire, Rousseau, Victor Hugo, Marie Curie...",
    tip: "5ème = Quartier Latin. Panthéon, Jardin du Luxembourg (6ème juste à côté), Sorbonne.",
    legalRef: "Topographie Paris - Monuments"
  },
  'topo-007': {
    content: "Le Palais de l'Élysée, résidence officielle du Président de la République depuis 1848, est situé au 55 rue du Faubourg Saint-Honoré dans le 8ème arrondissement.",
    tip: "Élysée = Faubourg Saint-Honoré (8ème). Ministère de l'Intérieur = Place Beauvau (juste à côté).",
    legalRef: "Topographie Paris - Institutions"
  },
  'topo-008': {
    content: "Le Centre Georges Pompidou (Beaubourg) est un centre culturel d'art moderne et contemporain situé dans le 4ème arrondissement. Son architecture avant-gardiste expose les structures techniques à l'extérieur.",
    tip: "Pompidou/Beaubourg = 4ème. Architecture reconnaissable (tuyaux colorés). Bibliothèque publique.",
    legalRef: "Topographie Paris - Culture"
  },
  'topo-009': {
    content: "L'Opéra Garnier, chef-d'œuvre architectural du Second Empire, se trouve Place de l'Opéra dans le 9ème arrondissement. Il a été construit par Charles Garnier entre 1861 et 1875.",
    tip: "Opéra Garnier = 9ème. Opéra Bastille = 12ème. Les deux forment l'Opéra national de Paris.",
    legalRef: "Topographie Paris - Culture"
  },
  'topo-010': {
    content: "Le Stade de France, plus grand stade français (80 000 places), est situé à Saint-Denis (93). Il accueille les matchs de l'équipe de France et les grands événements sportifs et culturels.",
    tip: "Stade de France = Saint-Denis (93). Métro ligne 13 (Saint-Denis Porte de Paris) ou RER D.",
    legalRef: "Topographie Paris - Événementiel"
  },
  // =====================
  // TOPOGRAPHIE PARIS - GARES (topo-011 à topo-020)
  // =====================
  'topo-011': {
    content: "La Gare du Nord, la plus fréquentée d'Europe, est située dans le 10ème arrondissement. Elle dessert le Nord de la France, la Belgique, les Pays-Bas, l'Allemagne et le Royaume-Uni (Eurostar).",
    tip: "Gare du Nord = 10ème. Eurostar (Londres), Thalys (Bruxelles, Amsterdam). TGV Nord.",
    legalRef: "Topographie Paris - Transports"
  },
  'topo-012': {
    content: "La Gare de Lyon dessert le Sud-Est de la France (Lyon, Marseille, Côte d'Azur), la Suisse et l'Italie. Son beffroi de 64 mètres est un repère visuel important.",
    tip: "Gare de Lyon = 12ème. TGV Sud-Est. Restaurant Le Train Bleu (classé). Accès A4/A6.",
    legalRef: "Topographie Paris - Transports"
  },
  'topo-013': {
    content: "La Gare Montparnasse dessert l'Ouest (Bretagne, Normandie partielle) et le Sud-Ouest (Pays de Loire, Aquitaine, Bordeaux). Elle est située dans le 15ème arrondissement.",
    tip: "Montparnasse = 15ème. TGV Atlantique. Accès A10/A11. Tour Montparnasse à proximité.",
    legalRef: "Topographie Paris - Transports"
  },
  'topo-014': {
    content: "La Gare du Nord accueille l'Eurostar vers Londres (2h15 de trajet) et le Thalys vers Bruxelles, Amsterdam et Cologne. C'est le hub international nord de Paris.",
    tip: "International via Gare du Nord. Terminal Eurostar séparé. Contrôles douaniers sur place.",
    legalRef: "Topographie Paris - Transports internationaux"
  },
  'topo-015': {
    content: "La Gare de Lyon se trouve Place Louis-Armand dans le 12ème arrondissement. Elle est facilement reconnaissable grâce à sa tour horloge. Métro lignes 1 et 14.",
    tip: "12ème = Gare de Lyon, Bercy, Bois de Vincennes. Proche de l'A4 (Est) et A6 (Sud).",
    legalRef: "Topographie Paris - Transports"
  },
  'topo-016': {
    content: "L'aéroport Paris-Charles de Gaulle (CDG/Roissy) est le principal aéroport international. Situé principalement dans le Val-d'Oise (95), il est à environ 25 km au nord de Paris.",
    tip: "CDG = Val-d'Oise (95). Accès A1/A3. RER B. Terminal 2 = TGV.",
    legalRef: "Topographie Paris - Aéroports"
  },
  'topo-017': {
    content: "L'aéroport d'Orly, au sud de Paris, est accessible par plusieurs moyens : RER B + Orlyval, RER C + navette Go C Paris, tramway T7, ou bus OrlyBus depuis Denfert-Rochereau.",
    tip: "Orly = Val-de-Marne/Essonne. Accès A6/A106. Plus proche de Paris que CDG (13 km).",
    legalRef: "Topographie Paris - Aéroports"
  },
  'topo-018': {
    content: "La Gare de l'Est dessert l'Est de la France (Champagne, Alsace, Lorraine, Strasbourg) et l'Allemagne. Elle est voisine de la Gare du Nord, toutes deux dans le 10ème.",
    tip: "Gare de l'Est = 10ème. TGV Est (Strasbourg 1h50). À 500m de la Gare du Nord.",
    legalRef: "Topographie Paris - Transports"
  },
  'topo-019': {
    content: "La gare routière Paris-Bercy Seine est située boulevard de Bercy dans le 12ème, à proximité de la Gare de Lyon. Elle accueille les cars longue distance (FlixBus, BlaBlaCar Bus).",
    tip: "Gare routière Bercy = 12ème. Cars internationaux et nationaux. Près Gare de Lyon et AccorHotels Arena.",
    legalRef: "Topographie Paris - Transports"
  },
  'topo-020': {
    content: "Paris compte 6 grandes gares SNCF : Gare du Nord, Gare de l'Est, Gare de Lyon, Gare d'Austerlitz, Gare Montparnasse et Gare Saint-Lazare. Chacune dessert une direction géographique.",
    tip: "6 gares : Nord (N/NE), Est (E), Lyon (SE), Austerlitz (S/SO), Montparnasse (O/SO), Saint-Lazare (NO).",
    legalRef: "Topographie Paris - Transports"
  },
  // =====================
  // TOPOGRAPHIE PARIS - HÔPITAUX (topo-021 à topo-030)
  // =====================
  'topo-021': {
    content: "L'hôpital de la Pitié-Salpêtrière, dans le 13ème arrondissement, est le plus grand hôpital de France. Il dispose de nombreuses spécialités et d'un service d'urgences majeur.",
    tip: "Pitié-Salpêtrière = 13ème (Bd de l'Hôpital). CHU. Métro Chevaleret ou Saint-Marcel.",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-022': {
    content: "L'Hôpital Européen Georges-Pompidou (HEGP) est un établissement moderne situé rue Leblanc dans le 15ème arrondissement, près du Parc André Citroën.",
    tip: "HEGP = 15ème (Javel). Hôpital neuf (2000). Métro Balard ou RER C Javel.",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-023': {
    content: "L'hôpital Necker-Enfants malades, dans le 15ème arrondissement, est le principal hôpital pédiatrique de Paris. Il est spécialisé dans les soins aux enfants et la recherche pédiatrique.",
    tip: "Necker = 15ème. Pédiatrie. Rue de Sèvres. Métro Duroc ou Sèvres-Lecourbe.",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-024': {
    content: "L'hôpital Bichat-Claude Bernard est situé dans le 18ème arrondissement, près de la Porte de Saint-Ouen. C'est un grand centre hospitalier avec un service d'urgences.",
    tip: "Bichat = 18ème (Porte Saint-Ouen). Métro Porte de Saint-Ouen (ligne 13).",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-025': {
    content: "L'Hôtel-Dieu, fondé au VIIème siècle, est le plus ancien hôpital de Paris. Situé sur l'Île de la Cité, face à Notre-Dame, il fait partie de l'AP-HP.",
    tip: "Hôtel-Dieu = Île de la Cité (4ème). Plus vieil hôpital de Paris. Métro Cité.",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-026': {
    content: "La Préfecture de Police de Paris est située sur l'Île de la Cité, Place Louis Lépine. Elle gère la police, la circulation et délivre les documents administratifs (passeports, CNI).",
    tip: "Préfecture de Police = Île de la Cité. À ne pas confondre avec Préfecture de Paris (Bd Morland).",
    legalRef: "Topographie Paris - Institutions"
  },
  'topo-027': {
    content: "L'Hôpital Saint-Louis, dans le 10ème arrondissement, est un centre de référence en dermatologie et cancérologie. Son architecture historique (XVIIème) est remarquable.",
    tip: "Saint-Louis = 10ème (avenue Claude-Vellefaux). Dermatologie. Métro Goncourt ou Colonel Fabien.",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-028': {
    content: "L'hôpital Cochin est situé rue du Faubourg Saint-Jacques dans le 14ème arrondissement. C'est un hôpital universitaire avec de nombreuses spécialités et une maternité réputée.",
    tip: "Cochin = 14ème (Port-Royal). Maternité Port-Royal. RER B Port-Royal.",
    legalRef: "Topographie Paris - Santé"
  },
  'topo-029': {
    content: "Le Ministère de l'Intérieur est situé Place Beauvau dans le 8ème arrondissement. Il supervise la police, la gendarmerie et l'administration territoriale.",
    tip: "Place Beauvau = Intérieur (8ème). À côté de l'Élysée. Quai d'Orsay = Affaires étrangères (7ème).",
    legalRef: "Topographie Paris - Institutions"
  },
  'topo-030': {
    content: "L'Ambassade des États-Unis à Paris est située avenue Gabriel dans le 8ème arrondissement, près de la Place de la Concorde et des jardins des Champs-Élysées.",
    tip: "Ambassade USA = Avenue Gabriel (8ème). Consulat = Rue Saint-Florentin. Zone très surveillée.",
    legalRef: "Topographie Paris - Diplomatie"
  },
  // =====================
  // TOPOGRAPHIE PARIS - AXES (topo-031 à topo-040)
  // =====================
  'topo-031': {
    content: "Le Boulevard Périphérique est une autoroute urbaine de 35 km qui encercle Paris. Il compte 38 portes d'accès et supporte un trafic de plus de 1 million de véhicules par jour.",
    tip: "Périph' = 35 km, 38 portes. Intérieur = sens horaire. Extérieur = sens anti-horaire.",
    legalRef: "Topographie Paris - Circulation"
  },
  'topo-032': {
    content: "La Porte Maillot (17ème) est la principale porte d'accès vers La Défense et l'Ouest parisien. Elle donne sur l'avenue de la Grande Armée et le Palais des Congrès.",
    tip: "Porte Maillot = La Défense, Neuilly, A14. Palais des Congrès. RER C, métro 1, Ligne C.",
    legalRef: "Topographie Paris - Circulation"
  },
  'topo-033': {
    content: "L'autoroute A1 (Autoroute du Nord) commence à Porte de la Chapelle et mène vers Lille, Bruxelles et l'aéroport CDG. C'est l'axe principal vers le nord.",
    tip: "A1 = Porte de la Chapelle (18ème). Direction Lille, CDG. Souvent très chargée.",
    legalRef: "Topographie Paris - Autoroutes"
  },
  'topo-034': {
    content: "L'autoroute A6 (Autoroute du Soleil) part des Portes d'Orléans et d'Italie vers Lyon et le Sud. Elle dessert également l'aéroport d'Orly via l'A106.",
    tip: "A6 = Porte d'Orléans/Italie. Direction Lyon, Orly. Branche A6a/A6b près de Paris.",
    legalRef: "Topographie Paris - Autoroutes"
  },
  'topo-035': {
    content: "La Place de la République est un carrefour majeur à la jonction des 3ème, 10ème et 11ème arrondissements. Rénovée en 2013, elle est devenue un espace piétonnier emblématique.",
    tip: "République = 3ème/10ème/11ème. 5 lignes de métro. Place des manifestations.",
    legalRef: "Topographie Paris - Places"
  },
  'topo-036': {
    content: "Le Boulevard Haussmann traverse les 8ème et 9ème arrondissements. Il est célèbre pour ses grands magasins (Galeries Lafayette, Printemps) et son architecture haussmannienne.",
    tip: "Haussmann = 8ème/9ème. Grands magasins. Métro Havre-Caumartin, Chaussée d'Antin.",
    legalRef: "Topographie Paris - Axes commerciaux"
  },
  'topo-037': {
    content: "La voie Georges Pompidou, ancienne voie express sur berges rive droite, est fermée à la circulation automobile depuis 2016. Elle est désormais un espace de promenade piétonnier.",
    tip: "Voies sur berges = piétonnes. Report de circulation sur quais hauts. Rive gauche = ouverte.",
    legalRef: "Topographie Paris - Circulation"
  },
  'topo-038': {
    content: "La Défense, premier quartier d'affaires européen, se situe principalement sur les communes de Puteaux et Courbevoie (92). L'Arche de la Défense prolonge l'axe historique parisien.",
    tip: "La Défense = Puteaux/Courbevoie (92). Métro 1, RER A. Grande Arche, CNIT.",
    legalRef: "Topographie Paris - Quartiers d'affaires"
  },
  'topo-039': {
    content: "L'Avenue Foch, avec ses 120 mètres de large, est l'une des plus larges avenues du monde. Elle relie la Place de l'Étoile au Bois de Boulogne (Porte Dauphine).",
    tip: "Avenue Foch = 16ème. 120m de large. Étoile → Bois de Boulogne. Résidentiel très huppé.",
    legalRef: "Topographie Paris - Axes majeurs"
  },
  'topo-040': {
    content: "Le Parc des Expositions de la Porte de Versailles est le plus grand centre d'expositions de France. Situé dans le 15ème arrondissement, il accueille salons et événements majeurs.",
    tip: "Porte de Versailles = 15ème. Parc des Expos. Métro 12 (Porte de Versailles). Tramway T2/T3.",
    legalRef: "Topographie Paris - Événementiel"
  },

  // =====================
  // MODULE ANGLAIS TOURISME INTERNATIONAL (ang-041 à ang-080)
  // =====================
  'ang-041': {
    content: "The Eiffel Tower (Tour Eiffel) is the most iconic landmark in Paris and the most visited paid monument in the world. It was built by Gustave Eiffel for the 1889 World's Fair.",
    tip: "Tower = tour. Key vocabulary: landmark (monument), attraction (attraction), view (vue), iron (fer).",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-042': {
    content: "Sightseeing means visiting places of interest in a city or area as a tourist. It's one of the most common activities for visitors to Paris.",
    tip: "Sightseeing = visite touristique. Related: tour (visite), attraction (attraction), monument.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-043': {
    content: "The Louvre Museum is the world's largest art museum and home to the Mona Lisa. Understanding museum-related vocabulary is essential for tourism.",
    tip: "Museum = musée. Ticket = billet. Exhibition = exposition. Art = art. Masterpiece = chef-d'œuvre.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-044': {
    content: "A landmark is a famous or easily recognizable building, monument, or place that helps people identify a location. Paris has many famous landmarks.",
    tip: "Landmark = point de repère / monument emblématique. Examples: Arc de Triomphe, Sacré-Cœur, Notre-Dame.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-045': {
    content: "Restaurant recommendations are common tourist requests. Knowing vocabulary for dining helps provide better service to international visitors.",
    tip: "Nearby = à proximité. Restaurant types: bistro, brasserie, café, fine dining (gastronomique).",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-046': {
    content: "Duty-free shops sell goods without local taxes, typically found in airports for international travelers. Common purchases include perfume, alcohol, and luxury goods.",
    tip: "Duty-free = hors taxes (HT). VAT/TVA = Value Added Tax / Taxe sur la Valeur Ajoutée.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-047': {
    content: "Airport terminals are buildings where passengers check in, go through security, and board flights. Paris CDG has 3 terminals; always confirm which one.",
    tip: "Terminal = aérogare. Check which terminal: Terminal 1, 2 (2A-2G), or 3. Orly: Sud/Ouest became 1-4.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-048': {
    content: "A boarding pass is the document required to board an aircraft, showing the passenger's name, flight number, seat, and boarding time.",
    tip: "Boarding pass = carte d'embarquement. Flight = vol. Gate = porte. Boarding time = heure d'embarquement.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-049': {
    content: "Travel tickets can be one-way (aller simple) or round-trip/return (aller-retour). Understanding these terms helps with airport and station transfers.",
    tip: "One-way = aller simple. Round-trip / Return = aller-retour. Single = simple. Open return = retour ouvert.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-050': {
    content: "Check-in is the process of registering upon arrival at a hotel. Check-out is leaving the hotel. These are essential hospitality terms.",
    tip: "Check-in = enregistrement (arrivée). Check-out = départ. Reservation/Booking = réservation.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-051': {
    content: "Opening and closing hours are important information for tourists planning visits to museums, monuments, and attractions.",
    tip: "Open = ouvert. Closed = fermé. Hours = horaires. Daily = tous les jours. Except = sauf.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-052': {
    content: "Currency exchange offices (bureaux de change) allow tourists to convert their money. The Euro (€) is the official currency in France.",
    tip: "Currency = devise. Exchange rate = taux de change. Euro (€). Useful: ATM (distributeur), cash (espèces).",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-053': {
    content: "Airport transfers require understanding flight schedules. 'To catch a flight' means to be on time to board the plane.",
    tip: "Catch a flight = prendre un avion. Departure = départ. Arrival = arrivée. Allow extra time for traffic!",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-054': {
    content: "A guided tour includes a professional guide who provides information and explanations. Many Paris attractions offer guided tours in multiple languages.",
    tip: "Guided tour = visite guidée. Self-guided = visite libre. Audio guide = audioguide. Group = groupe.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-055': {
    content: "Paris is famous for shopping, with areas like the Champs-Élysées, Le Marais, and Galeries Lafayette attracting millions of visitors.",
    tip: "Shopping area = zone commerciale. Department store = grand magasin. Boutique = boutique. Sale = soldes.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-056': {
    content: "The word 'souvenir' is the same in English and French, meaning a memento or keepsake from a trip. Paris is famous for its souvenir shops.",
    tip: "Souvenir = souvenir (mot emprunté du français!). Gift = cadeau. Present = présent. Memento = souvenir.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-057': {
    content: "Hotel room types include single (for one person), double (for two), twin (two beds), and suite (luxury rooms). Understanding these helps with hotel transfers.",
    tip: "Single = simple. Double = double. Twin = lits jumeaux. Suite = suite. Upgrade = surclassement.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-058': {
    content: "The Champs-Élysées is one of the world's most famous avenues, running from Place de la Concorde to the Arc de Triomphe.",
    tip: "Avenue = avenue. The Champs-Élysées is known for luxury shops, cafés, and the July 14th parade.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-059': {
    content: "Business travelers often have tight schedules and specific needs. Understanding business travel vocabulary helps provide appropriate service.",
    tip: "Business trip = voyage d'affaires. Meeting = réunion. Conference = conférence. Convention center = palais des congrès.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-060': {
    content: "In tourism, a transfer refers to transportation from one place to another, typically between airports, hotels, and stations.",
    tip: "Transfer = transfert. Airport transfer = navette aéroport. Private transfer = transfert privé.",
    legalRef: "Module 6 – Anglais Tourisme"
  },
  'ang-061': {
    content: "A proper greeting sets the tone for the entire journey. 'Good morning/afternoon' combined with an offer to help is professional and welcoming.",
    tip: "Morning = matin. Afternoon = après-midi. Evening = soir. 'How may I help you?' = 'Comment puis-je vous aider?'",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-062': {
    content: "'May I help you with...?' is a polite way to offer assistance. It shows willingness to serve without being pushy.",
    tip: "'May I' = puis-je (poli). 'Can I' = puis-je (moins formel). Use 'May I' for professional situations.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-063': {
    content: "Confirming the destination avoids misunderstandings. 'Could you confirm...?' is more polite than 'Tell me...'",
    tip: "'Could you' = pourriez-vous (très poli). 'Would you' = voudriez-vous. 'Please' = s'il vous plaît.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-064': {
    content: "Giving estimated arrival times helps manage customer expectations. 'Approximately' indicates the time is not exact.",
    tip: "Approximately/About = environ. Exactly = exactement. More or less = plus ou moins.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-065': {
    content: "Informing customers about traffic conditions and offering solutions demonstrates professionalism and proactive service.",
    tip: "Traffic = circulation. Alternative route = itinéraire alternatif. Delay = retard. Congestion = embouteillage.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-066': {
    content: "Offering choices shows customer-focused service. The scenic route may be longer but more pleasant; the fastest route prioritizes time.",
    tip: "Scenic = pittoresque. Fastest = le plus rapide. Shortest = le plus court. Preference = préférence.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-067': {
    content: "Checking passenger comfort regarding temperature shows attention to service quality and makes the journey more pleasant.",
    tip: "Temperature = température. Air conditioning (AC) = climatisation. Heating = chauffage. Comfortable = confortable.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-068': {
    content: "Announcing arrival at the destination helps passengers prepare to exit. A clear announcement is professional and helpful.",
    tip: "Destination = destination. Arrived = arrivé. Drop-off point = point de dépose. Here we are = nous y voilà.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-069': {
    content: "Asking about payment preference is professional. Offering options (card, cash, app) improves customer satisfaction.",
    tip: "Payment = paiement. Cash = espèces. Credit card = carte de crédit. Contactless = sans contact.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-070': {
    content: "'I apologize for...' is a professional way to express regret. Taking responsibility, even for traffic, shows respect for the customer's time.",
    tip: "I apologize = je m'excuse (formel). Sorry = désolé (moins formel). Delay = retard. Inconvenience = désagrément.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-071': {
    content: "Reminding customers to check for their belongings prevents forgotten items. It's a thoughtful gesture at the end of the journey.",
    tip: "Belongings = effets personnels. Items = articles. Don't forget = n'oubliez pas. Check = vérifiez.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-072': {
    content: "Thanking customers for choosing your service creates a positive final impression and encourages repeat business.",
    tip: "Thank you = merci. Choosing = choisir. Service = service. It was a pleasure = ce fut un plaisir.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-073': {
    content: "Asking for spelling ensures you have the correct address or name, especially for unfamiliar locations or international names.",
    tip: "Spell = épeler. How do you spell that? = Comment épelez-vous ça? Letter by letter = lettre par lettre.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-074': {
    content: "'I'm afraid...' is a polite way to deliver bad news. It softens the message and sounds more professional than being direct.",
    tip: "'I'm afraid' = je crains que / malheureusement. Use before bad news: delays, problems, unavailability.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-075': {
    content: "Asking about special requests (music preferences, stops, temperature) shows customer focus and enhances the service experience.",
    tip: "Special request = demande particulière. Preference = préférence. Would you like...? = Souhaiteriez-vous...?",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-076': {
    content: "Opening doors for passengers is a sign of premium service. It shows courtesy and attention to detail.",
    tip: "Let me = laissez-moi. Open = ouvrir. Door = porte. After you = après vous.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-077': {
    content: "'Feel free to...' invites the customer to make requests without hesitation. It creates a comfortable, service-oriented atmosphere.",
    tip: "Feel free = n'hésitez pas. Let me know = faites-moi savoir. Anything = quoi que ce soit.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-078': {
    content: "Providing a receipt is professional and often required by business travelers for expense reports.",
    tip: "Receipt = reçu/ticket. Invoice = facture. Sir = monsieur. Madam = madame.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-079': {
    content: "Wishing a pleasant flight is a thoughtful farewell when dropping customers at the airport. It shows attention to the complete journey.",
    tip: "Pleasant = agréable. Flight = vol. Have a safe trip = bon voyage. Enjoy your stay = bon séjour.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
  'ang-080': {
    content: "Recommending attractions shows local knowledge and adds value to the service. It enhances the customer's Paris experience.",
    tip: "I recommend = je recommande. Worth visiting = vaut le détour. Must-see = incontournable.",
    legalRef: "Module 6 – Anglais Phrases types"
  },
};

// Fonction pour obtenir l'explication d'une question
export const getQuestionExplanation = (questionId: string): QuestionExplanation | null => {
  return questionExplanations[questionId] || null;
};

// Fonction pour obtenir l'explication par défaut d'un module
export const getDefaultModuleExplanation = (moduleId: string): QuestionExplanation => {
  const defaults: Record<string, QuestionExplanation> = {
    'gestion': {
      content: "La gestion d'une entreprise de transport nécessite une bonne maîtrise des obligations comptables, fiscales et sociales. Connaître les différents statuts juridiques et leurs implications est essentiel pour optimiser sa fiscalité et protéger son patrimoine.",
      tip: "Retenez les différences entre entreprise individuelle et société : responsabilité, fiscalité, formalités. EI = simplicité, SARL/SAS = protection.",
      legalRef: "Code de commerce L123-1 à L123-22 | CGI Art. 39"
    },
    'securite': {
      content: "La sécurité routière repose sur le respect du Code de la route, une conduite préventive et la maîtrise des facteurs de risque (vitesse, alcool, fatigue, téléphone). L'anticipation est la clé d'une conduite sûre.",
      tip: "Distance d'arrêt = temps de réaction + distance de freinage. Elle quadruple quand la vitesse double. 2 sec de distance de sécurité minimum.",
      legalRef: "Code de la route R412-1 à R418-9"
    },
    'francais': {
      content: "La maîtrise du français professionnel est essentielle pour communiquer efficacement avec les clients et rédiger des documents administratifs corrects. L'orthographe et la syntaxe reflètent votre professionnalisme.",
      tip: "Relisez toujours vos écrits avant envoi. Les fautes d'orthographe nuisent à l'image professionnelle. Niveau courant à soutenu avec les clients.",
      legalRef: "Compétences linguistiques professionnelles"
    },
    'anglais': {
      content: "L'anglais de base est indispensable pour accueillir une clientèle internationale, notamment près des aéroports et sites touristiques. Les formules de politesse et le vocabulaire du transport sont prioritaires.",
      tip: "Apprenez les phrases clés : accueil (Hello, welcome), destination (Where to?), tarif (The fare is...), remerciements (Thank you, have a nice day).",
      legalRef: "Module 5 – Anglais (Référentiel T3P)"
    },
    'vtc': {
      content: "La réglementation VTC impose des conditions strictes d'accès et d'exercice : carte professionnelle délivrée par le préfet, inscription au registre VTC, réservation préalable obligatoire avant toute prise en charge, véhicule conforme aux normes.",
      tip: "Réservation préalable = OBLIGATOIRE avant chaque course. Maraude = INTERDITE aux VTC. Retour à la base entre deux courses (sauf nouvelle réservation).",
      legalRef: "Code des transports L3120-1 à L3122-9 | R3120-1 à R3122-11"
    },
    'relation-client': {
      content: "La qualité de service est le premier facteur de fidélisation et de différenciation. Accueil chaleureux, ponctualité, conduite souple, discrétion, propreté du véhicule et adaptabilité font la différence face à la concurrence.",
      tip: "Un client satisfait en parle à 3 personnes, un mécontent à 10. Première impression en 7 secondes. Chaque course est une opportunité de se démarquer.",
      legalRef: "Qualité de service – Référentiel formation T3P"
    },
    'taxi': {
      content: "Les taxis bénéficient du droit exclusif de maraude (prise en charge sur la voie publique ou en station) et doivent posséder une licence (autorisation de stationnement - ADS) délivrée par le maire ou le préfet selon la zone.",
      tip: "Licence taxi (ADS) = attachée à une commune/zone. Taximètre horokilométrique = obligatoire et vérifié annuellement. Tarifs = réglementés par arrêté préfectoral.",
      legalRef: "Code des transports L3121-1 à L3121-11 | R3121-1 à R3121-36"
    },
    'reglementation': {
      content: "La réglementation T3P (Transport Public Particulier de Personnes) encadre strictement l'accès à la profession, les conditions d'exercice et les obligations des conducteurs. La carte professionnelle est obligatoire pour tous.",
      tip: "Carte professionnelle = obligatoire pour taxi, VTC et VMDTR. Validité 5 ans. Conditions : permis B >3 ans, aptitude médicale, honorabilité, examen T3P réussi.",
      legalRef: "Code des transports L3120-1 à L3120-6 | Loi Grandguillaume 2016"
    },
    'taxi-75': {
      content: "La réglementation Taxi Paris 75 couvre les spécificités des taxis parisiens : tarification fixée par le Préfet de Police, taximètre lumineux obligatoire (lettre A/B/C/D), paiement CB dès le 1er euro, zones de prise en charge définies.",
      tip: "Paris 75 = Préfet de Police. Taximètre avec voyant lumineux (A=jour, B=nuit, C=banlieue jour, D=banlieue nuit). Forfaits aéroports réglementés. CB = obligatoire.",
      legalRef: "Arrêtés préfectoraux Paris | Code des transports R3121-1"
    },
    'vmdtr': {
      content: "Les VMDTR (Véhicules Motorisés à Deux ou Trois Roues) ont une réglementation spécifique : équipements de sécurité obligatoires pour conducteur et passager, conditions de transport adaptées, assurance spécifique.",
      tip: "Casque homologué CE et gants certifiés = obligatoires pour conducteur ET passager. Gilet rétro-réfléchissant obligatoire de nuit/visibilité insuffisante.",
      legalRef: "Code des transports L3123-1 à L3123-2 | Code de la route R431-1"
    },
    'topographie-paris': {
      content: "La topographie parisienne comprend la connaissance des monuments emblématiques, gares (6 gares SNCF principales), hôpitaux majeurs et axes de circulation stratégiques. Maîtriser ces repères est essentiel pour optimiser les trajets.",
      tip: "Organisez Paris par arrondissements en spirale : 1-4 (centre historique), 5-7 (rive gauche), 8-9 (affaires/Opéra), 10-12 (gares Est/Lyon), 13-15 (sud), 16-17 (ouest résidentiel), 18-20 (nord-est populaire).",
      legalRef: "Connaissance territoriale – Référentiel Taxi Paris"
    }
  };

  return defaults[moduleId] || {
    content: "Cette question porte sur un point important du référentiel officiel T3P (Transport Public Particulier de Personnes). Consultez les textes de référence du Code des transports pour approfondir.",
    tip: "Relisez attentivement la question et toutes les propositions avant de répondre. Éliminez d'abord les réponses manifestement fausses.",
    legalRef: "Code des transports – Livre I Titre II"
  };
};