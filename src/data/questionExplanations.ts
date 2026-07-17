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
    content: "L'entreprise individuelle : pas de capital minimum, création simple, pas de personnalité morale distincte. Depuis la loi du 14 février 2022, le patrimoine personnel de l'entrepreneur est séparé de plein droit de son patrimoine professionnel : les créanciers professionnels ne peuvent saisir que ce dernier (sauf renonciation ou fraude).",
    tip: "Depuis mai 2022 : EI = patrimoines séparés automatiquement. Fini la « responsabilité illimitée » d'avant 2022.",
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
    content: "Le clignotant s'actionne avant la manœuvre, avec assez d'anticipation pour prévenir les autres usagers, et reste actionné pendant toute la manœuvre (changement de direction, dépassement). Son absence d'usage est sanctionnée (art. R412-10 du Code de la route).",
    tip: "Rétroviseurs → clignotant AVANT la manœuvre → maintien PENDANT → contrôle → manœuvre.",
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
    content: "La discrétion professionnelle implique de ne divulguer aucune information sur le client et de respecter sa vie privée : conversations, destinations et habitudes restent confidentielles.",
    tip: "Ce qui se dit à bord reste à bord."
  },
  'rel-018': {
    content: "La propreté du véhicule, intérieure comme extérieure, est un élément essentiel de la qualité de service. Elle reflète le professionnalisme du conducteur et contribue au confort et au bien-être du client.",
    tip: "Nettoyage quotidien minimum : intérieur, vitres, poussière. Vérifier l'odeur (pas de tabac, parfum léger). Contrôle avant chaque course.",
    legalRef: "Standards de qualité VTC"
  },
  'rel-019': {
    content: "La relation client vise à satisfaire (répondre aux attentes) et à fidéliser (donner envie de revenir) : un client satisfait et fidèle est la meilleure publicité.",
    tip: "Satisfaire aujourd'hui, fidéliser pour demain."
  },
  'rel-020': {
    content: "Une attitude professionnelle se caractérise par le respect et la courtoisie : politesse constante, ton mesuré, considération pour chaque client.",
    tip: "Respect + courtoisie = professionnalisme visible."
  },
  'rel-021': {
    content: "Un client pressé attend en priorité une conduite fluide : efficace et sans détour inutile — mais toujours dans le respect du code de la route.",
    tip: "Client pressé : fluidité oui, imprudence jamais."
  },
  'rel-022': {
    content: "L'aide aux bagages fait partie du service VTC : charger et décharger les valises, aider les personnes à mobilité réduite, s'assurer que rien n'est oublié à la fin de la course. Ces gestes simples sont très appréciés.",
    tip: "Proposer systématiquement l'aide aux bagages. Vérifier le coffre en fin de course. Petit effort, grande reconnaissance.",
    legalRef: "Service complet VTC"
  },
  'rel-023': {
    content: "Le professionnalisme du conducteur se manifeste par la ponctualité (respect de l'heure convenue) et la neutralité (opinions personnelles, politiques et religieuses gardées pour soi).",
    tip: "Ponctuel + neutre + courtois = professionnel.",
    legalRef: "Compétence territoriale"
  },
  'rel-024': {
    content: "La communication non verbale regroupe les gestes, la posture et les expressions faciales. Le ton et le volume de la voix relèvent du paraverbal. Chez un client, le non-verbal du conducteur (sourire, posture ouverte) compte autant que ses mots.",
    tip: "Non verbal = gestes + expressions. Paraverbal = ton de la voix. Verbal = les mots.",
    legalRef: "Réactivité service client"
  },
  'rel-025': {
    content: "Le conducteur professionnel adapte sa conduite aux conditions de circulation (trafic, météo, chantier) et aux attentes du client (confort, horaire).",
    tip: "Deux boussoles : la route et le client. Jamais l'humeur."
  },
  'rel-026': {
    content: "Une relation client réussie favorise la recommandation (bouche-à-oreille, avis positifs) et la fidélisation (le client revient).",
    tip: "Client conquis = ambassadeur + habitué."
  },
  'rel-027': {
    content: "La courtoisie contribue à la satisfaction du client et à la réputation du conducteur comme de toute la profession.",
    tip: "Chaque « bonjour » soigné construit la réputation."
  },
  'rel-028': {
    content: "Un comportement inadapté entraîne une mauvaise notation sur les plateformes et une perte de clientèle : les clients mécontents ne reviennent pas et le disent.",
    tip: "Une mauvaise course = une mauvaise note = des clients en moins."
  },
  'rel-029': {
    content: "La qualité de service repose sur l'expérience globale : accueil, propreté, conduite, ponctualité, paiement — tout compte, pas seulement le prix ou la rapidité.",
    tip: "Le client note l'ensemble du voyage, pas un seul détail."
  },
  'rel-030': {
    content: "Gérer ses émotions permet de rester professionnel et d'éviter les conflits : face à l'agacement, on respire, on garde un ton neutre.",
    tip: "Le calme du conducteur désamorce la tension du client."
  },
  'rel-031': {
    content: "L'écoute active consiste à accorder toute son attention au client, montrer qu'on comprend (acquiescements, reformulations), poser des questions si nécessaire. Elle est particulièrement importante pour comprendre des demandes spécifiques.",
    tip: "Écouter vraiment, pas juste entendre. Reformuler : 'Si je comprends bien, vous souhaitez...' Clarifier avant d'agir.",
    legalRef: "Techniques d'écoute active"
  },
  'rel-032': {
    content: "La courtoisie favorise la confiance et le respect mutuel : un client bien traité se comporte mieux à son tour.",
    tip: "Courtoisie donnée = confiance et respect reçus."
  },
  'rel-033': {
    content: "Le service client est essentiel en VTC : c'est lui qui différencie deux conducteurs à trajet égal, et qui justifie le choix du client.",
    tip: "À prix égal, c'est le service qui fait la différence."
  },
  'rel-034': {
    content: "Gérer les attentes du client, c'est donner une information réaliste (durée, prix) et clarifier la prestation dès le départ : pas de promesse intenable.",
    tip: "Promettre juste, puis tenir : la recette anti-déception."
  },
  'rel-035': {
    content: "On fidélise un client grâce à un bon service et à une attitude professionnelle constante — pas par des promesses ou des rabais.",
    tip: "La fidélité se gagne course après course."
  },
  'rel-036': {
    content: "La satisfaction du client impacte directement les avis en ligne et la réputation : chaque course laisse une trace numérique potentielle.",
    tip: "Un avis 5 étoiles se prépare pendant la course, pas après."
  },
  'rel-037': {
    content: "Le conducteur reste neutre (politique, religion, polémiques) pour respecter le client et éviter les conflits : toutes les opinions montent à bord.",
    tip: "Neutralité = respect de tous les clients."
  },
  'rel-038': {
    content: "La qualité d'accueil inclut le salut et le sourire : les deux premiers signaux que reçoit le client en montant à bord.",
    tip: "Un bonjour + un sourire : l'accueil tient en deux gestes."
  },
  'rel-039': {
    content: "Une attitude respectueuse implique l'écoute et la politesse : laisser parler, répondre posément, employer les formules d'usage.",
    tip: "Écouter d'abord, répondre poliment ensuite."
  },
  'rel-040': {
    content: "La relation client est un levier de satisfaction et de fidélisation : bien menée, elle transforme une course en client régulier.",
    tip: "Soigner la relation, c'est investir dans les prochaines courses."
  },

  // =====================
  // MODULE FRANÇAIS (fra-001 à fra-040)
  // =====================
  'fra-001': {
    content: "« Veiller à » signifie s'assurer de, prendre soin de. Le conducteur professionnel veille au confort et à la sécurité de ses passagers tout au long de la course.",
    tip: "Veiller à = s'assurer de. À ne pas confondre avec « surveiller » (observer attentivement).",
    legalRef: "Grammaire française - Accord des adjectifs"
  },
  'fra-002': {
    content: "La courtoisie désigne la politesse raffinée dans les relations avec autrui : saluer, remercier, employer les formules d'usage. Le respect est une notion voisine mais plus large.",
    tip: "Courtoisie = politesse. On peut être poli par courtoisie, le respect va au-delà des mots."
  },
  'fra-003': {
    content: "La ponctualité est une qualité professionnelle : arriver à l'heure convenue est la première preuve de sérieux d'un conducteur, taxi comme VTC.",
    tip: "Qualité professionnelle = attendue dans le cadre du métier, pas optionnelle.",
    legalRef: "Orthographe - Homophones grammaticaux"
  },
  'fra-004': {
    content: "« Faire preuve de » signifie montrer, manifester une qualité par son comportement : faire preuve de courtoisie, de patience, de professionnalisme.",
    tip: "Faire preuve de = montrer. « Démontrer » signifie prouver par un raisonnement."
  },
  'fra-005': {
    content: "La satisfaction du client dépend du comportement du conducteur (accueil, courtoisie, conduite) et de son professionnalisme (ponctualité, tenue, discrétion) : les deux vont de pair.",
    tip: "Comportement + professionnalisme = les deux moteurs de la satisfaction client.",
    legalRef: "Grammaire - Accord sujet-verbe"
  },
  'fra-006': {
    content: "Une communication claire évite les malentendus (le client comprend du premier coup) et le rassure (il sait où il va, quand il arrive, combien il paiera).",
    tip: "Clarté = pas de malentendu + client rassuré."
  },
  'fra-007': {
    content: "Adapter son langage, c'est employer un registre approprié à son interlocuteur : vocabulaire simple avec un touriste, précis avec un professionnel. C'est s'adapter au client.",
    tip: "Adapter son langage = choisir le bon registre pour la bonne personne."
  },
  'fra-008': {
    content: "Avec un client, on adopte un langage professionnel : poli, clair, précis. Les registres familier, vulgaire ou argotique nuisent à l'image du conducteur et de la profession.",
    tip: "En clientèle : vouvoiement, phrases complètes, pas de familiarité.",
    legalRef: "Vocabulaire professionnel VTC"
  },
  'fra-009': {
    content: "Un malentendu est une incompréhension : chacun a compris autre chose. En clientèle, on l'évite en reformulant : « Si je comprends bien, vous souhaitez… »",
    tip: "Malentendu = mal + entendu = incompréhension. À distinguer du désaccord (on a compris, mais on n'est pas d'accord)."
  },
  'fra-010': {
    content: "Le but premier d'un texte professionnel est d'informer : transmettre une information exacte et utile. Clarifier, expliquer ou convaincre sont des buts secondaires possibles.",
    tip: "Texte professionnel : informer d'abord, sans détour ni effet de style."
  },
  'fra-011': {
    content: "La discrétion professionnelle porte sur la vie privée du client et ses informations personnelles : identité, destination, conversations, habitudes.",
    tip: "Discret = ce que je vois et entends à bord reste à bord."
  },
  'fra-012': {
    content: "« Notamment » signifie « en particulier » : il introduit un exemple important sans exclure les autres. « Les documents, notamment la carte professionnelle » = la carte surtout, mais pas seulement.",
    tip: "Notamment = en particulier (la liste n'est pas fermée)."
  },
  'fra-013': {
    content: "Respecter la vie privée du client, c'est ne divulguer aucune information sur lui et savoir garder le silence sur ce qu'on a vu ou entendu à bord.",
    tip: "Vie privée = ne rien divulguer + savoir se taire."
  },
  'fra-014': {
    content: "Le ton d'un texte informatif est neutre et objectif : il rapporte des faits sans jugement, sans ironie et sans émotion.",
    tip: "Informatif = neutre + objectif. Dès qu'il y a un jugement, ce n'est plus informatif."
  },
  'fra-015': {
    content: "Une conduite souple améliore le confort du passager (pas d'à-coups) et la sécurité (anticipation, distances respectées).",
    tip: "Souplesse au volant = confort + sécurité, jamais l'un sans l'autre."
  },
  'fra-016': {
    content: "« Tant… que » exprime une égalité d'importance entre deux éléments : la ponctualité compte aussi bien pour le client que pour le chauffeur.",
    tip: "Tant… que = aussi bien… que. La structure met les deux éléments au même niveau.",
    legalRef: "Conventions typographiques"
  },
  'fra-017': {
    content: "La phrase relie la conduite souple à deux effets : la réduction de la fatigue du conducteur et l'amélioration du confort du passager. Une conduite souple, c'est anticiper, freiner progressivement et accélérer en douceur.",
    tip: "Repérez les DEUX effets dans la phrase : fatigue ET confort, donc deux bonnes réponses.",
    legalRef: "Lecture de documents administratifs"
  },
  'fra-018': {
    content: "Le professionnalisme se rapproche le plus du sérieux : conscience professionnelle, rigueur, fiabilité. La compétence est le savoir-faire, une composante distincte.",
    tip: "Professionnalisme ≈ sérieux (attitude). Compétence = savoir-faire (technique)."
  },
  'fra-019': {
    content: "Le contraire de ponctuel est « en retard ». La ponctualité se juge par rapport à l'heure convenue, pas à la vitesse du trajet.",
    tip: "Ponctuel ↔ en retard. « Lent » s'oppose à « rapide », pas à « ponctuel »."
  },
  'fra-020': {
    content: "« En toutes circonstances » signifie toujours, quelles que soient les conditions : le professionnel reste courtois même face à un client difficile.",
    tip: "En toutes circonstances = toujours, sans exception."
  },
  'fra-021': {
    content: "Adapter son attitude, c'est modifier son comportement selon la situation : silencieux avec un client fatigué, disponible avec un touriste curieux.",
    tip: "Une attitude par situation : observer, puis s'ajuster."
  },
  'fra-022': {
    content: "Dans « l'image de la profession », le mot « image » désigne la réputation : la façon dont la profession est perçue par le public. Chaque conducteur contribue à cette image par son comportement.",
    tip: "Image = réputation. Un seul conducteur discourtois dégrade l'image de toute la profession.",
    legalRef: "Règles des majuscules"
  },
  'fra-023': {
    content: "Avec un client, on utilise le registre courant ou soutenu : phrases complètes, formules de politesse, vocabulaire précis. Le registre familier, l'argot et le langage SMS nuisent à l'image professionnelle.",
    tip: "En cas de doute, choisissez toujours le registre le plus poli : « Bonjour monsieur, je vous en prie ».",
    legalRef: "Grammaire - Compléments d'objet"
  },
  'fra-024': {
    content: "Une phrase informative sert à informer : donner un fait, une donnée, une instruction. « Le trajet durera 20 minutes » informe ; « Quel beau temps ! » exprime une émotion.",
    tip: "Phrase informative = un fait transmis, rien de plus."
  },
  'fra-025': {
    content: "« Contribuer à » signifie participer à, apporter sa part : « la ponctualité et la courtoisie contribuent à la satisfaction du client ».",
    tip: "Contribuent = participent (chacun apporte sa part au résultat)."
  },
  'fra-026': {
    content: "Des phrases à l'impératif (« Restez courtois », « Informez le client ») donnent des conseils ou des consignes : leur intention est de guider le comportement professionnel.",
    tip: "Impératif + vocabulaire du métier = texte de conseil professionnel.",
    legalRef: "Rédaction professionnelle"
  },
  'fra-027': {
    content: "Une communication adaptée favorise la compréhension (le message passe) et la confiance (le client se sent considéré).",
    tip: "Bien communiquer = être compris + inspirer confiance."
  },
  'fra-028': {
    content: "Le respect implique une écoute réelle de l'autre et une attitude appropriée : considérer le client tel qu'il est, sans jugement.",
    tip: "Respecter = écouter + se comporter correctement."
  },
  'fra-029': {
    content: "Une bonne maîtrise du français permet une meilleure relation client et une communication claire : accueil soigné, explications précises, messages sans fautes.",
    tip: "Bien parler et bien écrire = l'image professionnelle du conducteur."
  },
  'fra-030': {
    content: "Dans le transport de personnes, le « client » est aussi appelé « passager » une fois à bord. « Usager » désigne plutôt l'utilisateur d'un service public.",
    tip: "Client (commercial) = passager (à bord). Usager = service public."
  },
  'fra-031': {
    content: "Une phrase neutre est objective et sans jugement : elle décrit sans prendre parti. « Le trafic est dense » est neutre ; « ce trafic est insupportable » ne l'est pas.",
    tip: "Neutre = objectif + sans jugement personnel."
  },
  'fra-032': {
    content: "La compréhension écrite consiste à saisir le sens d'un texte et à l'interpréter correctement : comprendre ce qui est dit, et ce que cela implique.",
    tip: "Comprendre un écrit = saisir le sens + interpréter juste."
  },
  'fra-033': {
    content: "Un texte professionnel vise à informer et à clarifier : transmettre l'information exacte, compréhensible immédiatement, sans ambiguïté.",
    tip: "Texte professionnel réussi = le destinataire comprend du premier coup.",
    legalRef: "Nétiquette professionnelle"
  },
  'fra-034': {
    content: "Le vocabulaire professionnel doit être adapté (les bons termes du métier : prise en charge, course, dépose) et compréhensible par le client.",
    tip: "Précis pour le métier, simple pour le client."
  },
  'fra-035': {
    content: "La satisfaction est le contentement : l'état du client dont les attentes ont été remplies.",
    tip: "Satisfaction = contentement (attentes remplies)."
  },
  'fra-036': {
    content: "La compréhension d'un texte dépend du vocabulaire (connaître les mots) et du contexte (la situation qui éclaire le sens).",
    tip: "Mots + contexte = compréhension. Un mot inconnu se devine souvent par le contexte."
  },
  'fra-037': {
    content: "Un texte clair est facile à comprendre et structuré : une idée par phrase, des phrases courtes, un ordre logique.",
    tip: "Clair = compris du premier coup + bien organisé."
  },
  'fra-038': {
    content: "Respecter les règles de la langue (grammaire, orthographe, conjugaison) permet une meilleure communication et une compréhension efficace des messages.",
    tip: "Règles respectées = message net, image professionnelle."
  },
  'fra-039': {
    content: "Le thème d'un texte est son sujet principal : ce dont le texte parle. À distinguer de l'intention (informer, conseiller) et de la conclusion.",
    tip: "Pour trouver le thème, demandez-vous : « De quoi ça parle ? ».",
    legalRef: "Expression écrite - Cohérence"
  },
  'fra-040': {
    content: "La maîtrise de la langue contribue à l'image professionnelle du conducteur et à la qualité du service : un message soigné inspire confiance.",
    tip: "Bien s'exprimer, c'est déjà bien servir."
  },

  // =====================
  // MODULE ANGLAIS (ang-001 à ang-040)
  // =====================
  'ang-001': {
    content: "The sentence describes professional behaviour: respecting traffic laws and taking care of passengers are the two pillars of the driver's job.",
    tip: "Professional behaviour = comportement professionnel. Repérez les mots-clés : respect, take care.",
    legalRef: "English - Greetings"
  },
  'ang-002': {
    content: "« Arrive on time » = arriver à l'heure, être ponctuel (punctual). La ponctualité est la première qualité attendue d'un chauffeur.",
    tip: "On time = à l'heure. Early = en avance. Late = en retard."
  },
  'ang-003': {
    content: "Le chauffeur accueille le client poliment (politely) et professionnellement (professionally) : « Good morning, how may I help you? »",
    tip: "Politely + professionally : les deux adverbes de l'accueil réussi."
  },
  'ang-004': {
    content: "Before starting the trip, the driver confirms the destination (“Could you confirm the address?”) and helps with luggage (“May I help you with your luggage?”).",
    tip: "Confirm + help : les deux réflexes professionnels avant de démarrer.",
    legalRef: "English - Pricing vocabulary"
  },
  'ang-005': {
    content: "« Luggage » désigne les bagages : sacs et valises (bags and suitcases). Mot indénombrable en anglais : « your luggage », jamais « luggages ».",
    tip: "Luggage (UK) = baggage (US) = les bagages. Toujours au singulier !"
  },
  'ang-006': {
    content: "« Drive smoothly » = conduire en douceur, confortablement : accélérations et freinages progressifs, sans à-coups.",
    tip: "Smooth = doux, sans à-coups. Smoothly = confortablement pour le passager."
  },
  'ang-007': {
    content: "« Traffic laws must be respected/followed » : le code de la route doit être respecté — les deux verbes sont synonymes ici.",
    tip: "Respect = follow (les règles). Break the law = enfreindre la loi."
  },
  'ang-008': {
    content: "« A comfortable ride improves customer satisfaction » : un trajet confortable améliore la satisfaction du client.",
    tip: "Ride = trajet, course. Comfortable ride → happy customer."
  },
  'ang-009': {
    content: "« Journey » = trajet, voyage (trip). « How was your journey? » = comment s'est passé votre voyage ?",
    tip: "Journey = trip = trajet/voyage."
  },
  'ang-010': {
    content: "Le confort (comfort) est directement lié à la satisfaction du client (customer satisfaction) : température, conduite, propreté.",
    tip: "Comfort → satisfaction : le lien clé du service à bord."
  },
  'ang-011': {
    content: "En cas de retard (delay), le chauffeur doit informer le client : « I am sorry, I will be 10 minutes late. »",
    tip: "Delay → inform the customer immediately + apologize."
  },
  'ang-012': {
    content: "« As soon as possible » (ASAP) = dès que possible, immédiatement : « I will be there as soon as possible. »",
    tip: "ASAP = as soon as possible = au plus vite."
  },
  'ang-013': {
    content: "Une communication claire évite les problèmes (avoid problems) et rassure le client (reassure the customer).",
    tip: "Clear communication = fewer problems + reassured customer."
  },
  'ang-014': {
    content: "« Delay » = retard. « There is a delay » = il y a du retard ; « I am late » = je suis en retard.",
    tip: "Delay (nom) = le retard. Late (adjectif) = en retard."
  },
  'ang-015': {
    content: "The advice is about communication: informing the customer of a delay and apologizing keeps the customer's trust.",
    tip: "Inform + apologize = communication avec le client.",
    legalRef: "English - Time planning"
  },
  'ang-016': {
    content: "Les clients demandent souvent l'itinéraire (the route) et l'heure d'arrivée (arrival time) : « Which way are we going? What time will we arrive? »",
    tip: "Route + arrival time : les deux questions les plus fréquentes des clients."
  },
  'ang-017': {
    content: "Le chauffeur répond clairement (clearly) et professionnellement (professionally), sans jargon ni familiarité.",
    tip: "Answer clearly + professionally — jamais « rudely » ni « indirectly »."
  },
  'ang-018': {
    content: "« Estimated » = estimé, approximatif (approximate) : « estimated time of arrival (ETA) » = heure d'arrivée estimée.",
    tip: "Estimated = approximate ≠ exact. ETA = estimated time of arrival."
  },
  'ang-019': {
    content: "« Arrival time » = l'heure d'arrivée à destination, à distinguer de « departure time » (heure de départ).",
    tip: "Arrival = arrivée ↔ departure = départ."
  },
  'ang-020': {
    content: "These questions (destination, flight time, luggage) all aim at understanding the customer's needs before the trip.",
    tip: "Les questions du chauffeur au départ servent toutes à cerner les besoins du client.",
    legalRef: "English - Clarification"
  },
  'ang-021': {
    content: "Le client (customer) est aussi appelé « passenger » (passager) ou « client » — les trois mots sont corrects en anglais.",
    tip: "Customer = client = passenger (une fois à bord)."
  },
  'ang-022': {
    content: "Le contraire de « late » (en retard) est « early » (en avance). « On time » = pile à l'heure.",
    tip: "Early ↔ late. On time = à l'heure exacte."
  },
  'ang-023': {
    content: "« Smooth driving » améliore le confort (improve comfort) et réduit le stress du passager (reduce stress).",
    tip: "Smooth driving = comfort + less stress."
  },
  'ang-024': {
    content: "« Should » exprime un conseil ou une recommandation : « You should take the highway » = vous devriez prendre l'autoroute. « Must » exprime l'obligation.",
    tip: "Should = conseil (devriez). Must = obligation (devez)."
  },
  'ang-025': {
    content: "To confirm = to check / to verify : s'assurer qu'une information est exacte. “Could you confirm the address, please?”",
    tip: "Confirm ≈ check ≈ verify. Contraires : cancel (annuler), deny (nier).",
    legalRef: "English - Recommendations"
  },
  'ang-026': {
    content: "Un retard (delay) peut être causé par la circulation dense (heavy traffic) ou la météo (bad weather).",
    tip: "Heavy traffic + bad weather = les deux causes classiques de retard."
  },
  'ang-027': {
    content: "La satisfaction du client dépend de la qualité du service (service quality) et de l'attitude professionnelle (professional attitude).",
    tip: "Service quality + attitude : les deux piliers de la satisfaction."
  },
  'ang-028': {
    content: "Un chauffeur professionnel doit être poli (polite) et respectueux (respectful) en toutes circonstances.",
    tip: "Polite + respectful : le duo indissociable du professionnel."
  },
  'ang-029': {
    content: "“Good morning sir, how may I help you?” is the polite, professional way to greet a customer. The other sentences are too familiar or rude.",
    tip: "May I…? / How may I help you? = formules types de l'accueil professionnel en anglais.",
    legalRef: "English - Service completion"
  },
  'ang-030': {
    content: "Driving smoothly, helping with luggage and staying polite are instructions describing the professional behaviour expected from a driver.",
    tip: "Une liste de consignes de service = comportement professionnel (professional behaviour).",
    legalRef: "English - Affirmative responses"
  },
  'ang-031': {
    content: "Informer le client à l'avance (in advance) crée la confiance (build trust) et évite les conflits (avoid conflicts).",
    tip: "Inform in advance = trust + no conflict."
  },
  'ang-032': {
    content: "Aider avec les bagages (help with luggage) témoigne de courtoisie (courtesy) et de professionnalisme (professionalism).",
    tip: "« May I help you with your luggage? » : la phrase-réflexe du chauffeur."
  },
  'ang-033': {
    content: "Des réponses claires (clear answers) rassurent le client (reassured) et lui donnent confiance (confident).",
    tip: "Clear answers → reassured + confident customer."
  },
  'ang-034': {
    content: "Un accueil poli (polite welcome) crée une bonne première impression (good first impression) et la confiance (trust).",
    tip: "Le premier bonjour conditionne toute la course : first impression + trust."
  },
  'ang-035': {
    content: "La communication professionnelle doit être claire (clear) et adaptée (adapted) au client et à la situation.",
    tip: "Clear + adapted : les deux qualités d'une communication pro."
  },
  'ang-036': {
    content: "« To avoid » = éviter, prévenir (prevent) : « avoid misunderstandings » = éviter les malentendus.",
    tip: "Avoid = prevent = éviter/empêcher qu'une chose arrive."
  },
  'ang-037': {
    content: "Un bon chauffeur écoute pour comprendre les besoins (understand needs) et adapter son service (adapt the service).",
    tip: "Listen → understand → adapt : la chaîne du bon service."
  },
  'ang-038': {
    content: "Offering help with luggage and checking the passenger's comfort are typical customer service situations on board.",
    tip: "Customer service = service client : aider, vérifier le confort, s'adapter.",
    legalRef: "English - Pickup arrangements"
  },
  'ang-039': {
    content: "Une bonne communication réduit les problèmes (problems) et les réclamations (complaints).",
    tip: "Good communication = fewer problems + fewer complaints."
  },
  'ang-040': {
    content: "Polite (poli), punctual (ponctuel) and discreet (discret) sont les qualités qui composent le professionnalisme (professionalism) du chauffeur.",
    tip: "Le suffixe -ism forme le nom de la qualité globale : professionalism.",
    legalRef: "English - Comparatives"
  },

  // =====================
  // MODULE VTC (vtc-001 à vtc-040)
  // =====================
  'vtc-001': {
    content: "Pour exercer comme VTC, il faut être titulaire du permis B depuis au moins 3 ans (2 ans si conduite accompagnée).",
    tip: "Permis B ≥ 3 ans (ou 2 ans avec conduite accompagnée)."
  },
  'vtc-002': {
    content: "La carte professionnelle VTC est délivrée pour 5 ans par le préfet. Son renouvellement exige la formation continue.",
    tip: "Carte pro VTC = 5 ans, renouvelable après formation continue."
  },
  'vtc-003': {
    content: "La carte professionnelle doit être visible à l'intérieur du véhicule pendant l'activité et présentable à tout contrôle.",
    tip: "Carte visible à bord, jamais dans la boîte à gants."
  },
  'vtc-004': {
    content: "La signalétique VTC est une vignette autocollante mentionnant le numéro d'inscription au registre. Elle s'appose à l'avant (angle inférieur gauche du pare-brise) et à l'arrière (angle inférieur droit de la lunette arrière) — arrêté du 6 avril 2017. Elle se retire ou se masque hors activité VTC.",
    tip: "Vignette VTC : avant ET arrière. À retirer hors activité.",
    legalRef: "Article R3122-9 du Code des transports"
  },
  'vtc-005': {
    content: "En dehors d'une course, le VTC doit stationner hors de la voie publique : retour à la base ou nouvelle réservation. L'attente sur la voie publique est réservée aux taxis.",
    tip: "Pas de course = hors voie publique. L'attente en rue = taxis uniquement."
  },
  'vtc-006': {
    content: "La prise en charge sans réservation préalable est interdite aux VTC : c'est de la maraude, monopole des taxis, sanctionnée pénalement.",
    tip: "VTC sans réservation = maraude illégale = délit."
  },
  'vtc-007': {
    content: "La maraude électronique désigne la réservation immédiate via une plateforme géolocalisée : le client voit les véhicules proches et commande — cela reste une réservation préalable, donc légal.",
    tip: "Maraude électronique = réservation via appli (légal) ≠ maraude de rue (interdit)."
  },
  'vtc-008': {
    content: "En cas de contrôle, le conducteur VTC présente le justificatif de réservation préalable de la course en cours, sur support papier ou électronique. Il mentionne notamment l'exploitant (n° REVTC, SIREN), le client, la date et l'heure de réservation et de prise en charge.",
    tip: "Pas de justificatif de réservation présentable = suspicion de maraude illégale.",
    legalRef: "Article L3122-2 du Code des transports"
  },
  'vtc-009': {
    content: "Au contrôle, le conducteur VTC présente sa carte professionnelle ET le justificatif de réservation préalable de la course en cours.",
    tip: "Contrôle VTC : carte pro + preuve de réservation, toujours les deux."
  },
  'vtc-010': {
    content: "La réservation doit être effectuée avant la prise en charge : c'est elle qui rend la course légale.",
    tip: "D'abord la réservation, ensuite le client."
  },
  'vtc-011': {
    content: "Le véhicule VTC répond à des critères de confort fixés par la réglementation : dimensions minimales, puissance, nombre de portes.",
    tip: "VTC = véhicule confortable aux normes (dimensions, puissance, portes)."
  },
  'vtc-012': {
    content: "Les véhicules hybrides et électriques sont dispensés des caractéristiques techniques imposées aux VTC, dont la condition d'ancienneté (art. L.3120-5). Les véhicules thermiques doivent avoir moins de 7 ans.",
    tip: "Thermique : moins de 7 ans. Hybride/électrique : pas de limite d'âge.",
    legalRef: "Article R3120-3 du Code des transports"
  },
  'vtc-013': {
    content: "L'assurance obligatoire comprend la RC circulation (le véhicule) et la RC professionnelle (l'activité et les clients transportés).",
    tip: "Deux assurances : RC circulation + RC pro. L'assurance « particulier » ne suffit pas."
  },
  'vtc-014': {
    content: "La responsabilité civile professionnelle couvre les dommages causés aux clients dans le cadre de l'activité, notamment en cas de faute professionnelle. Elle complète la RC circulation, obligatoire pour le véhicule.",
    tip: "RC circulation = le véhicule. RC pro = l'activité et les clients. Les deux sont obligatoires.",
    legalRef: "Article L3124-4 du Code des transports"
  },
  'vtc-015': {
    content: "Le défaut d'assurance expose à des sanctions administratives et pénales : conduire sans assurance est un délit.",
    tip: "Sans assurance = délit + sanctions administratives."
  },
  'vtc-016': {
    content: "Le refus de client n'est possible que pour un motif légitime : sécurité, comportement dangereux, état d'ébriété avancé. La discrimination est interdite.",
    tip: "Refuser : uniquement motif légitime, jamais la tête du client."
  },
  'vtc-017': {
    content: "La propreté du véhicule est une obligation professionnelle : intérieur comme extérieur, elle fait partie de la prestation.",
    tip: "Véhicule propre = premier signe de professionnalisme."
  },
  'vtc-018': {
    content: "Le conducteur VTC est tenu à une obligation de moyens : mettre tout en œuvre pour la prestation (sécurité, ponctualité), sans garantir un résultat comme l'heure d'arrivée exacte.",
    tip: "Moyens (tout mettre en œuvre) ≠ résultat (garantir l'issue)."
  },
  'vtc-019': {
    content: "La facture d'une course VTC est écrite et détaillée : date, trajet, montant TTC, identité du professionnel. Elle est remise au client.",
    tip: "Facture VTC = écrite + détaillée. Pensez D-T-M : Date, Trajet, Montant.",
    legalRef: "Article L3120-2 du Code des transports"
  },
  'vtc-020': {
    content: "La facture mentionne le numéro de carte professionnelle et le montant de la prestation, avec la date et le trajet.",
    tip: "Facture : qui (carte pro), combien (montant), quoi (trajet, date)."
  },
  'vtc-021': {
    content: "Le conducteur VTC adopte une conduite souple et sécurisée : confort du client et respect du code de la route vont ensemble.",
    tip: "Souple + sécurisée : jamais rapide ou sportive avec un client."
  },
  'vtc-022': {
    content: "Hors course, le VTC retourne hors de la voie publique (base, garage, domicile), sauf nouvelle réservation.",
    tip: "Fin de course → retour base (ou nouvelle réservation)."
  },
  'vtc-023': {
    content: "Le contrôle des VTC est exercé par les forces de l'ordre (police, gendarmerie) et les agents habilités (DGCCRF, contrôleurs des transports).",
    tip: "Qui contrôle : police, gendarmerie, agents habilités — jamais les plateformes."
  },
  'vtc-024': {
    content: "Le non-respect de la réglementation expose à des sanctions administratives (avertissement, retrait de carte) et pénales (amendes, prison pour les délits).",
    tip: "Deux étages de sanctions : administratives ET pénales."
  },
  'vtc-025': {
    content: "La formation continue est obligatoire pour tous les conducteurs VTC : elle conditionne le renouvellement de la carte professionnelle.",
    tip: "Pas de formation continue = pas de renouvellement de carte."
  },
  'vtc-026': {
    content: "La formation continue doit être réalisée tous les 5 ans, avant le renouvellement de la carte professionnelle.",
    tip: "Formation continue : tous les 5 ans, comme la carte."
  },
  'vtc-027': {
    content: "Le conducteur VTC respecte la réglementation en vigueur et les règles de sécurité : les demandes du client ne priment jamais sur la loi.",
    tip: "La loi d'abord, le client ensuite : jamais l'inverse."
  },
  'vtc-028': {
    content: "Le comportement du conducteur engage sa responsabilité personnelle et l'image de toute la profession.",
    tip: "Une faute individuelle rejaillit sur tous les VTC."
  },
  'vtc-029': {
    content: "Toute course VTC doit obligatoirement faire l'objet d'une réservation préalable : c'est le fondement légal de l'activité.",
    tip: "Pas de réservation = pas de course."
  },
  'vtc-030': {
    content: "L'objectif principal de la réglementation VTC est de garantir la sécurité des passagers ; elle protège aussi la loyauté entre professionnels.",
    tip: "La réglementation protège d'abord le passager."
  },
  'vtc-031': {
    content: "La carte professionnelle doit être restituée à la préfecture en cas de cessation d'activité.",
    tip: "J'arrête l'activité → je rends la carte."
  },
  'vtc-032': {
    content: "La suspension de la carte professionnelle est temporaire ; le retrait définitif est une sanction distincte plus grave.",
    tip: "Suspension = provisoire. Retrait = définitif."
  },
  'vtc-033': {
    content: "Exercer comme conducteur VTC sans carte professionnelle est un délit : 1 an d'emprisonnement et 15 000 € d'amende (art. L.3124-4), avec suspension du permis, immobilisation ou confiscation du véhicule possibles. À distinguer de la simple non-présentation immédiate de la carte (contravention).",
    tip: "Sans carte pro = délit pénal (1 an + 15 000 €). Oubli de présentation = contravention.",
    legalRef: "Article L3123-1 du Code des transports"
  },
  'vtc-034': {
    content: "La réservation préalable peut être écrite ou électronique (application, e-mail, SMS) : elle doit être traçable et conservée.",
    tip: "Écrite ou électronique, mais toujours traçable."
  },
  'vtc-035': {
    content: "Le registre des réservations mentionne la date et l'heure ainsi que le lieu de prise en charge de chaque course.",
    tip: "Registre : quand (date/heure) + où (lieu de prise en charge)."
  },
  'vtc-036': {
    content: "Un VTC ne peut jamais stationner sur une station de taxis : ces emplacements sont réservés aux taxis en attente de clientèle.",
    tip: "Station taxi = interdite au VTC, à toute heure."
  },
  'vtc-037': {
    content: "Le macaron (vignette) VTC permet d'identifier le véhicule et de faciliter les contrôles ; il ne remplace pas la carte professionnelle.",
    tip: "Le macaron identifie le véhicule ; la carte identifie le conducteur."
  },
  'vtc-038': {
    content: "Le conducteur VTC fait preuve de neutralité (opinions gardées pour soi) et de courtoisie (politesse constante).",
    tip: "Neutre + courtois : la posture professionnelle de base."
  },
  'vtc-039': {
    content: "Le respect de la réglementation contribue à la sécurité des passagers et à la crédibilité de la profession.",
    tip: "Respecter les règles protège le client et le métier."
  },
  'vtc-040': {
    content: "Une activité exercée sans respect des règles entraîne des sanctions administratives et pénales.",
    tip: "Hors des règles : l'administration ET le juge peuvent frapper."
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
    content: "Des forfaits aéroports sont en vigueur (tarifs 2026) : Paris rive droite - CDG = 56 €, Paris rive gauche - CDG = 65 €, Paris rive droite - Orly = 45 €, Paris rive gauche - Orly = 36 €. Ces forfaits s'appliquent dans les deux sens.",
    tip: "Forfaits aéroports = fixes, quel que soit le trajet exact. Rive droite/gauche détermine le prix. CDG rive gauche = le plus cher (65 €).",
    legalRef: "Arrêté du 24 décembre 2025 relatif aux tarifs des courses de taxi"
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

  // =====================
  // MODULE RÉGLEMENTATION T3P (reg-001 à reg-040)
  // =====================
  'reg-001': {
    content: "T3P signifie Transport Public Particulier de Personnes. Cette famille réglementaire regroupe trois professions : les taxis (seuls autorisés à la maraude), les VTC (réservation préalable obligatoire) et les VMDTR (moto-taxis, réservation préalable également). « Public » signifie que le service est offert à tout client, « particulier » que le véhicule est loué dans son ensemble, à la course.",
    tip: "T3P = 3 métiers : Taxi + VTC + VMDTR. Les bus (transport collectif) et les ambulances (transport sanitaire) n'en font PAS partie.",
    legalRef: "Article L3120-1 du Code des transports"
  },
  'reg-002': {
    content: "L'activité VTC relève du T3P, au même titre que les taxis et les VMDTR. Les trois professions partagent un socle commun : carte professionnelle, aptitude médicale, honorabilité, assurance spécifique. Ce qui les distingue, c'est le mode de prise en charge du client : maraude possible pour le taxi, réservation préalable obligatoire pour VTC et VMDTR.",
    tip: "Un seul cadre (le T3P), trois métiers. La frontière clé entre eux : qui a le droit de prendre un client sans réservation.",
    legalRef: "Articles L3120-1 et L3122-1 du Code des transports"
  },
  'reg-003': {
    content: "Les prestations VTC sont réalisées à titre onéreux : le transport est effectué contre rémunération, dans un cadre professionnel déclaré. C'est ce caractère onéreux qui déclenche toute la réglementation T3P (carte pro, assurance, registre). À l'inverse, le covoiturage repose sur le simple partage de frais entre particuliers et échappe à ce cadre.",
    tip: "Rémunération = activité professionnelle réglementée. Partage de frais = covoiturage, hors T3P.",
    legalRef: "Articles L3120-1 et L3132-1 du Code des transports"
  },
  'reg-004': {
    content: "VTC signifie Voiture de Transport avec Chauffeur. L'appellation historique « voiture de tourisme avec chauffeur » a été remplacée par la loi Thévenoud de 2014, qui a structuré la profession : registre d'exploitants, carte professionnelle, réservation préalable obligatoire et interdiction de la maraude.",
    tip: "Depuis 2014 : Voiture de TRANSPORT avec chauffeur (plus « de tourisme »).",
    legalRef: "Article L3122-1 du Code des transports, loi Thévenoud du 1er octobre 2014"
  },
  'reg-005': {
    content: "Deux conditions cumulatives pour exercer : détenir le permis B depuis au moins 3 ans (ramené à 2 ans si conduite accompagnée) ET la carte professionnelle VTC, délivrée par le préfet après examen (ou équivalence d'expérience), vérification de l'aptitude médicale et de l'honorabilité. L'une sans l'autre ne suffit jamais.",
    tip: "Permis 3 ans (2 en conduite accompagnée) + carte pro : mêmes exigences d'ancienneté que pour le taxi.",
    legalRef: "Article R3120-6 du Code des transports"
  },
  'reg-006': {
    content: "La carte professionnelle VTC est délivrée par le préfet après la réussite de l'examen organisé par les chambres de métiers et de l'artisanat (CMA), la vérification de l'aptitude physique (médecin agréé) et le contrôle d'honorabilité (bulletin n°2 du casier judiciaire). Elle est valable 5 ans et son renouvellement exige une formation continue de 14 heures.",
    tip: "La CMA organise l'examen, mais c'est le PRÉFET qui délivre la carte — piège classique de QCM.",
    legalRef: "Articles R3120-6 et R3120-7 du Code des transports"
  },
  'reg-007': {
    content: "L'inscription au registre des exploitants VTC doit être effectuée AVANT tout début d'activité. Elle valide l'exploitant, le véhicule et l'assurance, et donne droit aux vignettes d'identification. Exercer sans inscription constitue un exercice illégal de la profession, même si le conducteur détient sa carte professionnelle.",
    tip: "Ordre logique : carte pro → inscription au registre → vignettes → premiers clients. Jamais l'inverse.",
    legalRef: "Article L3122-3 du Code des transports"
  },
  'reg-008': {
    content: "Le registre des exploitants VTC est tenu par l'autorité administrative (gestion nationale, instruction en préfecture de région — DRIEAT en Île-de-France). Il est consultable par le public, ce qui permet aux clients et aux plateformes de vérifier qu'un exploitant est bien autorisé. L'inscription se renouvelle tous les 5 ans.",
    tip: "Registre = l'EXPLOITANT (entreprise + véhicule). Carte pro = le CONDUCTEUR. Deux inscriptions distinctes.",
    legalRef: "Article L3122-3 du Code des transports"
  },
  'reg-009': {
    content: "La réservation préalable est la condition absolue de toute course VTC : le client doit avoir réservé avant la prise en charge, par tout moyen traçable (application, téléphone, courriel). C'est la frontière juridique fondamentale avec le taxi, seul détenteur du monopole de la maraude. Le justificatif de réservation doit pouvoir être présenté à tout contrôle.",
    tip: "Pas de réservation = pas de course. Même un client qui hèle le VTC doit d'abord réserver (même 30 secondes avant).",
    legalRef: "Article L3122-9 du Code des transports"
  },
  'reg-010': {
    content: "La maraude — circuler ou stationner sur la voie publique en quête de clients — est strictement interdite aux VTC. Elle constitue un délit puni d'un an d'emprisonnement et de 15 000 € d'amende, avec immobilisation possible du véhicule et suspension de la carte professionnelle. Ce monopole des taxis est la contrepartie de leurs obligations (tarifs réglementés, obligation de transport).",
    tip: "Stationner près d'une gare « au cas où » suffit à caractériser la maraude : l'intention de capter la clientèle est présumée.",
    legalRef: "Articles L3120-2 et L3124-12 du Code des transports"
  },
  'reg-011': {
    content: "Le véhicule VTC doit comporter au moins 4 portes, pour garantir l'accès et l'évacuation des passagers en sécurité. C'est l'un des critères techniques cumulatifs applicables aux véhicules thermiques, avec la longueur (≥ 4,50 m), la largeur (≥ 1,70 m) et la puissance (≥ 84 kW). Les véhicules hybrides et électriques sont dispensés de ces caractéristiques.",
    tip: "Critères VTC thermique : 4 portes + 4,50 m + 1,70 m + 84 kW — CUMULATIFS. Hybride/électrique : dispensé de tout.",
    legalRef: "Arrêté du 26 mars 2015 (caractéristiques VTC)"
  },
  'reg-012': {
    content: "Le véhicule VTC comporte de 4 à 9 places assises, conducteur compris. En dessous, le véhicule n'offre pas les garanties minimales pour un transport rémunéré ; au-delà, l'activité bascule dans le transport collectif (autocar), soumis à une autre réglementation et à d'autres licences.",
    tip: "4 à 9 places CONDUCTEUR COMPRIS : un 9 places transporte donc au maximum 8 passagers.",
    legalRef: "Article R3122-11 du Code des transports"
  },
  'reg-013': {
    content: "Un véhicule VTC thermique doit avoir moins de 7 ans d'ancienneté. Les véhicules hybrides et électriques sont totalement dispensés des caractéristiques techniques réglementaires — y compris cette condition d'âge (article L3120-5). Un VTC électrique de 8 ans reste donc réglementairement exploitable, alors qu'un thermique du même âge ne l'est plus.",
    tip: "Thermique : moins de 7 ans. Hybride/électrique : AUCUNE limite d'âge (dispense totale).",
    legalRef: "Article L3120-5 du Code des transports"
  },
  'reg-014': {
    content: "Le conducteur VTC doit justifier d'une aptitude médicale contrôlée par un médecin agréé par le préfet, et l'activité doit être couverte par une assurance responsabilité civile professionnelle « transport de personnes à titre onéreux ». L'assurance auto personnelle, même tous risques, ne couvre jamais les courses rémunérées.",
    tip: "Deux garde-fous : le médecin agréé valide le conducteur, la RC pro couvre l'activité. L'assurance perso ne protège RIEN en course.",
    legalRef: "Articles R3120-6 et R3120-4 du Code des transports"
  },
  'reg-015': {
    content: "L'aptitude médicale est constatée par un médecin agréé par la préfecture — jamais par le médecin traitant, qui connaît trop bien son patient pour garantir l'objectivité de l'examen. Le contrôle porte notamment sur la vue, les réflexes et les pathologies incompatibles avec la conduite professionnelle. Il se renouvelle périodiquement (tous les 5 ans avant 60 ans, plus fréquemment ensuite).",
    tip: "Médecin AGRÉÉ ≠ médecin traitant. La liste des médecins agréés est publiée par chaque préfecture.",
    legalRef: "Articles R226-1 et suivants du Code de la route"
  },
  'reg-016': {
    content: "Lors d'un contrôle, le conducteur VTC présente sa carte professionnelle et le justificatif de réservation préalable de la course en cours (horodaté, papier ou électronique). S'y ajoutent les documents classiques : permis, carte grise, attestation d'assurance, attestation d'inscription au registre. Sans justificatif de réservation, il est présumé en maraude illégale.",
    tip: "Réflexe pro : capture d'écran de chaque réservation avant de démarrer — un justificatif présentable même sans réseau.",
    legalRef: "Article R3120-2-2 du Code des transports"
  },
  'reg-017': {
    content: "L'assurance du VTC couvre deux risques distincts : la responsabilité civile circulation (les dommages causés par le véhicule) ET la responsabilité civile professionnelle (les dommages liés à l'activité de transport de personnes à titre onéreux). En cas d'accident en course sans RC pro, l'assureur refuse sa garantie et le conducteur indemnise sur ses fonds propres.",
    tip: "RC circulation + RC pro « transport de personnes » : les deux mentions doivent figurer au contrat.",
    legalRef: "Article L3120-4 du Code des transports, article L324-2 du Code de la route"
  },
  'reg-018': {
    content: "Les justificatifs de réservation doivent être conservés et tenus à disposition des agents de contrôle. Ils constituent la preuve que chaque course a bien fait l'objet d'une réservation préalable — donc que l'activité est légale. En pratique, l'historique de l'application de mise en relation y pourvoit, mais un export régulier protège le conducteur.",
    tip: "Conserver l'historique de réservations au moins un an : c'est votre meilleure défense en cas de litige ou de contrôle a posteriori.",
    legalRef: "Article L3122-9 du Code des transports"
  },
  'reg-019': {
    content: "Le VTC ne peut stationner sur la voie publique qu'au moment de la prise en charge ou de la dépose d'un client ayant réservé. Entre deux courses, il doit retourner à sa base (siège ou domicile professionnel) ou stationner hors voie publique, sauf nouvelle réservation. Attendre devant une gare ou un hôtel sans réservation caractérise la maraude.",
    tip: "La règle du « retour à la base » est contrôlée : pas de réservation = pas de stationnement d'attente sur la voie publique.",
    legalRef: "Article L3122-9 du Code des transports"
  },
  'reg-020': {
    content: "La carte professionnelle doit être apposée de manière visible dans le véhicule (pare-brise) pendant le service et présentée à toute réquisition. Elle permet au client comme aux forces de l'ordre de vérifier immédiatement que le conducteur est autorisé. Carte oubliée au domicile = infraction, même si elle existe.",
    tip: "Visible ET présentable : sur le pare-brise pendant la course, en poche pendant les pauses.",
    legalRef: "Article R3120-6 du Code des transports"
  },
  'reg-021': {
    content: "La signalétique VTC (vignette autocollante) identifie le véhicule comme VTC autorisé. Depuis l'arrêté du 6 avril 2017, elle s'appose en DEUX exemplaires : à l'avant dans l'angle inférieur gauche du pare-brise, et à l'arrière dans l'angle inférieur droit de la lunette arrière. Elle porte le numéro d'inscription au registre des exploitants.",
    tip: "DEUX vignettes : avant (angle inférieur gauche du pare-brise) + arrière (angle inférieur droit de la lunette).",
    legalRef: "Arrêté du 6 avril 2017, article R3122-8 du Code des transports"
  },
  'reg-022': {
    content: "La facturation d'une course VTC doit être écrite et détaillée. Contrairement au taxi (taximètre), le prix du VTC est libre mais doit être annoncé avant la course ; la facture matérialise cet engagement. Un simple SMS « course 80 € merci » n'est pas une facture : il manque les mentions légales obligatoires.",
    tip: "Prix libre ≠ prix opaque : annoncé AVANT la course, facturé par écrit APRÈS.",
    legalRef: "Article L441-9 du Code de commerce"
  },
  'reg-023': {
    content: "La facture mentionne obligatoirement le montant TTC, l'identité complète du professionnel (nom, adresse, SIRET), la date et la nature de la prestation. Pour un assujetti à la TVA s'ajoutent le prix HT et la TVA (10 % pour le transport de voyageurs). Une facture incomplète est irrégulière fiscalement et peut être refusée par le client professionnel.",
    tip: "Montant + identité + date + prestation : les 4 mentions minimales. Numérotation chronologique continue obligatoire.",
    legalRef: "Article L441-9 du Code de commerce, article 289 du CGI"
  },
  'reg-024': {
    content: "Le conducteur VTC ne peut refuser un client que pour un motif légitime : comportement dangereux ou violent, état d'ébriété avec risque, demande illégale. Le refus fondé sur le handicap, l'origine, ou tout autre critère discriminatoire est un délit pénal. Le chien guide d'aveugle doit être accepté gratuitement.",
    tip: "Motif légitime = SÉCURITÉ. Tout refus lié à la personne elle-même = discrimination pénalement sanctionnée.",
    legalRef: "Article 225-2 du Code pénal, article L3120-4 du Code des transports"
  },
  'reg-025': {
    content: "Le comportement du conducteur engage sa responsabilité personnelle (civile et pénale) mais aussi l'image de toute la profession. Le référentiel d'examen insiste sur cette double dimension : un incident isolé (agressivité, fraude, discrimination) alimente la défiance générale envers les VTC et pèse sur tous les professionnels.",
    tip: "Vous êtes l'ambassadeur de la profession : chaque course construit — ou abîme — la réputation collective.",
    legalRef: "Référentiel d'examen T3P (tronc commun)"
  },
  'reg-026': {
    content: "La formation continue est obligatoire pour renouveler la carte professionnelle VTC : 14 heures de formation dans un centre agréé, à effectuer avant chaque échéance quinquennale. Elle actualise les connaissances (réglementation, sécurité routière, gestion) — indispensable dans un secteur où les règles évoluent régulièrement.",
    tip: "Mémo : carte valable 5 ans, 14 h de formation continue pour renouveler. Anticiper 3 à 6 mois avant l'échéance.",
    legalRef: "Article R3120-8-2 du Code des transports"
  },
  'reg-027': {
    content: "La formation continue conditionne le renouvellement de la carte professionnelle : sans attestation de suivi des 14 heures, la carte n'est pas renouvelée et l'activité doit cesser à l'échéance. Le renouvellement n'est jamais automatique — c'est au conducteur d'anticiper sa formation et sa demande.",
    tip: "Une carte expirée = exercice illégal dès le lendemain, avec les sanctions du travail sans carte. Programmez un rappel !",
    legalRef: "Article R3120-8-2 du Code des transports"
  },
  'reg-028': {
    content: "Les contrôles VTC relèvent de plusieurs corps : police et gendarmerie (voie publique), agents de la DGCCRF (pratiques commerciales, information sur les prix) et contrôleurs des transports terrestres. Chacun peut exiger la présentation des documents obligatoires : carte pro, justificatif de réservation, assurance, attestation d'inscription au registre.",
    tip: "Corps de contrôle multiples = documents toujours à bord et en règle. La coopération polie évite l'aggravation.",
    legalRef: "Articles L3124-1 et suivants du Code des transports"
  },
  'reg-029': {
    content: "Le non-respect de la réglementation T3P expose à un double niveau de sanctions : administratives (avertissement, suspension ou retrait de la carte professionnelle, radiation du registre) ET pénales (amendes, peines d'emprisonnement pour les délits comme la maraude ou l'exercice sans carte). Les deux régimes se cumulent.",
    tip: "Administratif (préfet : la carte) + pénal (juge : amende/prison) : une même infraction peut coûter les deux.",
    legalRef: "Articles L3124-1 à L3124-13 du Code des transports"
  },
  'reg-030': {
    content: "La réglementation T3P poursuit deux objectifs principaux : la sécurité des passagers (aptitude des conducteurs, état des véhicules, assurances) et la transparence de l'activité (prix annoncé, facturation, registres, identification des véhicules). Toutes les obligations du métier se rattachent à l'un de ces deux piliers.",
    tip: "Pour retrouver le « pourquoi » d'une règle à l'examen : demandez-vous si elle protège la SÉCURITÉ ou la TRANSPARENCE.",
    legalRef: "Code des transports, livre Ier de la troisième partie"
  },
  'reg-031': {
    content: "Exercer l'activité de conducteur VTC sans carte professionnelle valide est un délit puni d'un an d'emprisonnement et de 15 000 € d'amende, avec peines complémentaires possibles : suspension du permis de conduire jusqu'à 5 ans et confiscation du véhicule. Les sanctions administratives (radiation, interdiction de réinscription) s'y ajoutent.",
    tip: "Sans carte = délit (tribunal correctionnel), pas une simple contravention : 1 an + 15 000 €.",
    legalRef: "Article L3124-4 du Code des transports"
  },
  'reg-032': {
    content: "Le T3P regroupe exactement trois professions : les taxis, les VTC et les VMDTR (moto-taxis). Les autocars et bus relèvent du transport collectif (véhicules de plus de 9 places), et les ambulances du transport sanitaire — deux cadres réglementaires distincts, avec leurs propres licences et exigences.",
    tip: "Piège récurrent : ambulances et bus ne sont JAMAIS du T3P. Le critère : 9 places max + location du véhicule entier.",
    legalRef: "Article L3120-1 du Code des transports"
  },
  'reg-033': {
    content: "Dès la course terminée, le VTC doit retourner à son lieu d'établissement (siège, domicile professionnel ou parking hors voie publique), sauf s'il justifie d'une nouvelle réservation préalable. Cette règle du « retour à la base » empêche les VTC de quadriller la voie publique en attente de clients, ce qui constituerait une maraude déguisée.",
    tip: "Après chaque dépose, deux options seulement : nouvelle réservation OU retour à la base.",
    legalRef: "Article L3122-9 du Code des transports"
  },
  'reg-034': {
    content: "La carte professionnelle est strictement personnelle et incessible : elle ne peut être ni prêtée, ni louée, ni vendue. La prêter à un tiers expose les deux personnes à des poursuites — le prêteur pour complicité d'exercice illégal, l'emprunteur pour exercice sans carte. En cas de perte ou de vol, il faut demander un duplicata à la préfecture.",
    tip: "Une carte = un conducteur. La photo et l'identité figurent dessus précisément pour empêcher tout prêt.",
    legalRef: "Article R3120-6 du Code des transports"
  },
  'reg-035': {
    content: "La réservation préalable peut prendre toute forme traçable : réservation écrite, application, courriel, SMS. L'essentiel est double : elle doit précéder la prise en charge et pouvoir être prouvée (horodatage). Un accord purement oral, sans trace, ne protège pas le conducteur en cas de contrôle.",
    tip: "Le critère n'est pas le support mais la TRAÇABILITÉ : datée, horodatée, conservée.",
    legalRef: "Article L3122-9 du Code des transports"
  },
  'reg-036': {
    content: "Pour chaque course, les éléments de la réservation doivent être enregistrés : date, heure, lieu de prise en charge et destination. Ces informations prouvent l'antériorité de la réservation et permettent aux contrôleurs de vérifier la cohérence entre la course constatée et la réservation présentée.",
    tip: "Date + heure + lieu + destination : les 4 informations qui font d'une réservation une preuve.",
    legalRef: "Article R3120-2-2 du Code des transports"
  },
  'reg-037': {
    content: "Au-delà de la sécurité, la réglementation T3P vise la protection des clients (information sur les prix, facturation, assurance) et la loyauté de la concurrence entre professionnels : mêmes exigences d'accès au métier, frontières claires entre taxi/VTC/VMDTR, sanctions contre l'exercice illégal qui fausse le marché.",
    tip: "Un VTC en règle est aussi protégé PAR la réglementation : elle écarte la concurrence déloyale des non-déclarés.",
    legalRef: "Code des transports, livre Ier de la troisième partie"
  },
  'reg-038': {
    content: "En cas de cessation définitive d'activité, la carte professionnelle doit être restituée à la préfecture qui l'a délivrée. La carte reste la propriété de l'administration ; sa restitution évite les usages frauduleux de cartes « dormantes » et permet la mise à jour des registres.",
    tip: "Fin d'activité = restitution de la carte + radiation du registre : les deux démarches vont ensemble.",
    legalRef: "Article R3120-6 du Code des transports"
  },
  'reg-039': {
    content: "Le respect des règles par chaque conducteur renforce la crédibilité collective de la profession et la sécurité de tous — clients, conducteurs et autres usagers. C'est aussi un argument commercial : plateformes et entreprises clientes privilégient les professionnels irréprochables (documents à jour, assurance, facturation propre).",
    tip: "La conformité n'est pas qu'une contrainte : c'est un avantage concurrentiel face aux pratiques douteuses.",
    legalRef: "Référentiel d'examen T3P (tronc commun)"
  },
  'reg-040': {
    content: "VMDTR signifie Véhicules Motorisés à Deux ou Trois Roues : c'est la troisième profession du T3P, aux côtés des taxis et des VTC. Le moto-taxi obéit aux mêmes principes que le VTC (réservation préalable obligatoire, interdiction de maraude, carte professionnelle) avec des spécificités propres au deux-roues : permis A, équipements de protection pour le passager.",
    tip: "VMDTR = le « VTC du deux-roues » : réservation obligatoire, mais permis A (≥ 3 ans) et EPI passager en plus.",
    legalRef: "Articles L3123-1 et suivants du Code des transports"
  },

  // =====================
  // MODULE VMDTR — F(M) SÉCURITÉ (vmd-sec-001 à 008)
  // =====================
  'vmd-sec-001': {
    content: "Les conducteurs de deux-roues motorisés sont très fortement sur-représentés dans la mortalité routière : environ 22 % des tués pour à peine 2 % du trafic. À distance parcourue égale, le risque d'être tué est environ 20 fois supérieur à celui d'un automobiliste. Cette vulnérabilité (pas de carrosserie, équilibre précaire, faible visibilité) fonde toute la conduite préventive du moto-taxi professionnel.",
    tip: "Ordre de grandeur à retenir : ~22 % des tués pour ~2 % du trafic. C'est LA statistique de l'épreuve F(M).",
    legalRef: "Données ONISR, référentiel RS5636 – F(M)"
  },
  'vmd-sec-002': {
    content: "L'effet gyroscopique des roues en rotation stabilise la moto à allure soutenue : plus les roues tournent vite, plus la machine « tient debout » toute seule. À basse vitesse (manœuvres, parking, circulation dense), cet effet disparaît et la moto devient instable — d'où l'importance du jeu gaz/embrayage/frein arrière en manœuvre lente, surtout avec un passager.",
    tip: "Vitesse = stabilité, lenteur = instabilité. Les chutes bêtes arrivent à 5 km/h, pas à 90.",
    legalRef: "Référentiel RS5636 – F(M), dynamique du véhicule"
  },
  'vmd-sec-003': {
    content: "La distance d'arrêt se décompose en distance de réaction (parcourue pendant le temps de perception, environ 1 seconde) et distance de freinage. Elle dépend principalement de la vitesse — la distance de freinage croît comme le CARRÉ de la vitesse —, de l'adhérence (état de la route, pneus) et de la vigilance du conducteur. Sur sol mouillé, compter 1,5 à 2 fois plus.",
    tip: "Loi du carré : vitesse × 2 = distance de freinage × 4. À 50 km/h sur sec : ≈ 25 m d'arrêt total.",
    legalRef: "Référentiel RS5636 – F(M), article R413-17 du Code de la route"
  },
  'vmd-sec-004': {
    content: "Le freinage d'urgence à moto s'exécute avec les DEUX freins simultanément (l'avant assure l'essentiel de la puissance), moto la plus verticale possible, regard porté loin vers la zone de fuite — jamais sur l'obstacle. Freiner fort moto inclinée en virage provoque la chute : il faut d'abord redresser, puis freiner.",
    tip: "Séquence : REDRESSER → DEUX freins → regard LOIN. Freiner en courbe inclinée = chute quasi certaine.",
    legalRef: "Référentiel RS5636 – F(M), techniques de freinage"
  },
  'vmd-sec-005': {
    content: "La conduite préventive repose sur l'anticipation : balayer le champ visuel en permanence, percevoir les indices (portière, piéton distrait, véhicule qui déboîte), comprendre les intentions des autres usagers et conserver des marges de sécurité (distance avant ≥ 2 secondes, position dans la voie, vitesse adaptée). Le professionnel n'attend pas le danger : il le neutralise avant qu'il n'existe.",
    tip: "Triade F(M) : Observer – Anticiper – Garder des marges. 80 % des accidents moto sont évitables par l'anticipation.",
    legalRef: "Référentiel RS5636 – F(M), conduite préventive"
  },
  'vmd-sec-006': {
    content: "Le référentiel liste explicitement les facteurs de risque du conducteur : alcool, stupéfiants, certains médicaments (pictogrammes niveau 2 et 3), mais aussi le stress, la fatigue et le manque de sommeil. Pour un professionnel qui transporte un passager non protégé, la tolérance zéro alcool est de fait la règle du métier, même si le seuil légal reste 0,5 g/L (0,2 g/L en permis probatoire).",
    tip: "Fatigue = effets comparables à une alcoolémie légère. L'hygiène de vie est une compétence PROFESSIONNELLE évaluée.",
    legalRef: "Référentiel RS5636 – F(M), articles L234-1 et R234-1 du Code de la route"
  },
  'vmd-sec-007': {
    content: "Avant chaque prise de service, le moto-taxi effectue un contrôle visuel des points vitaux : pneus (pression à froid, usure — minimum légal 1 mm —, absence de coupure), freins (course de levier, plaquettes), éclairage complet (croisement, stop, clignotants), niveaux (huile, liquide de frein). Deux à trois minutes qui engagent sa responsabilité civile et pénale.",
    tip: "Mémo P-F-E-N : Pneus, Freins, Éclairage, Niveaux — à vérifier avant CHAQUE service, pas chaque semaine.",
    legalRef: "Référentiel RS5636 – F(M), article R314-1 du Code de la route"
  },
  'vmd-sec-008': {
    content: "Le sommeil et les rythmes biologiques conditionnent directement la vigilance du conducteur : dette de sommeil, travail nocturne et repas lourds dégradent les réflexes autant qu'une alcoolémie légère. Le référentiel F(M) liste explicitement la gestion du sommeil et l'hygiène de vie parmi les déterminants de la sécurité du moto-taxi professionnel.",
    tip: "Les heures critiques : 2 h-5 h du matin et début d'après-midi (digestion). Planifier ses pauses en conséquence.",
    legalRef: "Référentiel RS5636 – F(M), hygiène de vie"
  },

  // =====================
  // MODULE VMDTR — RÉGLEMENTATION (vmd-reg-001 à 008)
  // =====================
  'vmd-reg-001': {
    content: "Le VMDTR est soumis à la réservation préalable obligatoire, exactement comme le VTC : interdiction de maraude et interdiction de stationner sur les emplacements réservés aux taxis. Chaque course doit être justifiable par une réservation horodatée. Prendre un client qui hèle dans la rue = exercice illégal de la profession de taxi.",
    tip: "Le moto-taxi suit les règles du VTC : réservation d'abord, course ensuite. Les stations taxi lui sont interdites même vides.",
    legalRef: "Articles L3120-2 et L3123-2 du Code des transports"
  },
  'vmd-reg-002': {
    content: "La carte professionnelle VMDTR est délivrée par le préfet du département de résidence, après réussite de l'examen organisé par la CMA (ou équivalence d'expérience), vérification de l'aptitude médicale par un médecin agréé et contrôle d'honorabilité (bulletin n°2). Elle est valable 5 ans, renouvelable après formation continue.",
    tip: "Comme pour taxi et VTC : la CMA fait passer l'examen, le PRÉFET délivre la carte.",
    legalRef: "Articles L3123-2 et R3123-1 du Code des transports"
  },
  'vmd-reg-003': {
    content: "Les véhicules VMDTR doivent respecter des caractéristiques minimales fixées par arrêté : puissance supérieure à 40 kW (inscrite sur la carte grise) et ancienneté inférieure à 5 ans. S'y ajoutent les équipements de sécurité (ABS sur les motos récentes, top-case pour les EPI du passager). Pas de contrôle technique, mais un entretien annuel attesté.",
    tip: "Deux chiffres à retenir : > 40 kW et < 5 ans (arrêté du 17 mars 2015).",
    legalRef: "Arrêté du 17 mars 2015 (caractéristiques VMDTR)"
  },
  'vmd-reg-004': {
    content: "La signalétique VMDTR est une vignette d'identification apposée de manière visible sur le véhicule, portant le numéro d'inscription au registre. Tout dispositif évoquant le taxi est strictement interdit : pas de lumineux, pas de damier, pas de mention « taxi ». La confusion avec un taxi caractérise l'exercice illégal de cette profession.",
    tip: "Vignette VMDTR = obligatoire. Lumineux/damier/« taxi » = interdits. La distinction visuelle protège le monopole du taxi.",
    legalRef: "Articles R3123-1 et suivants du Code des transports, arrêté du 6 avril 2017"
  },
  'vmd-reg-005': {
    content: "Non : un VMDTR ne peut jamais prendre en charge un client qui le hèle en circulation. La maraude est le monopole exclusif des taxis. Même si le client insiste et veut payer, la course sans réservation préalable constitue un exercice illégal de la profession de taxi, puni d'un an d'emprisonnement et de 15 000 € d'amende.",
    tip: "La solution légale existe : faire réserver le client via l'application AVANT de démarrer — même 30 secondes suffisent.",
    legalRef: "Articles L3120-2 et L3124-12 du Code des transports"
  },
  'vmd-reg-006': {
    content: "La carte professionnelle VMDTR obéit à une double obligation : être PRÉSENTÉE à toute réquisition des forces de l'ordre et être APPOSÉE de manière visible sur le véhicule pendant le service. Sa validité est de 5 ans ; le renouvellement exige une formation continue — jamais automatique.",
    tip: "Présentable ET visible : les deux obligations se cumulent. Renouvellement à anticiper avant l'échéance des 5 ans.",
    legalRef: "Articles R3123-1 et suivants du Code des transports"
  },
  'vmd-reg-007': {
    content: "Les conditions d'accès au métier de VMDTR sont cumulatives : permis de catégorie A en cours de validité depuis au moins 3 ans, attestation d'aptitude médicale délivrée après examen par un médecin agréé, honorabilité (bulletin n°2 compatible) et réussite à l'examen. Le permis B seul ne permet jamais d'exercer en moto-taxi.",
    tip: "Permis A ≥ 3 ans — la même ancienneté que le permis B pour taxi/VTC, seule la catégorie change.",
    legalRef: "Article R3120-6 du Code des transports"
  },
  'vmd-reg-008': {
    content: "Comme les exploitants VTC, les exploitants VMDTR sont inscrits sur un registre national tenu par l'autorité administrative. L'inscription, préalable au début d'activité et renouvelable tous les 5 ans, valide l'exploitant, le véhicule et l'assurance. Elle donne droit à la vignette d'identification.",
    tip: "Le registre VMDTR fonctionne comme le registre VTC : inscription AVANT la première course, renouvellement quinquennal.",
    legalRef: "Article L3123-3 du Code des transports"
  },

  // =====================
  // MODULE VMDTR — G(M) PASSAGER (vmd-pas-001 à 008)
  // =====================
  'vmd-pas-001': {
    content: "Avant le départ, le conducteur briefe systématiquement son passager : position correcte (pieds sur les repose-pieds en permanence, mains aux poignées ou à la taille), comportement en virage (ACCOMPAGNER l'inclinaison, ne jamais se redresser contre elle), moyens de communication (intercom ou signes convenus) et conduite à tenir en cas d'imprévu. Ce briefing est une obligation professionnelle évaluée à l'épreuve G(M).",
    tip: "Mémo briefing P.A.C.I. : Position, Accompagnement en virage, Communication, Imprévu. 30 secondes qui évitent la chute.",
    legalRef: "Référentiel RS5636 – G(M), prise en charge du passager"
  },
  'vmd-pas-002': {
    content: "Les équipements de protection individuelle obligatoires concernent le conducteur ET le passager : casque homologué (ECE 22.05 ou 22.06) pour les deux depuis 1973, gants certifiés CE moto pour les deux depuis le 20 novembre 2016. Le moto-taxi professionnel fournit les EPI au passager. Refus du client de porter le casque = refus de transport obligatoire et légitime.",
    tip: "« Seul le conducteur doit porter le casque » = FAUX classique du QCM. Conducteur + passager, casque + gants.",
    legalRef: "Articles R431-1 et R431-1-2 du Code de la route"
  },
  'vmd-pas-003': {
    content: "La peur est une réaction normale chez le passager novice (50 à 70 % des cas) : raideur, agrippement excessif, et surtout tendance à se redresser en virage — le mouvement le plus dangereux car il contre l'inclinaison de la moto. Le référentiel exige de connaître ces mécanismes pour les anticiper : briefing rassurant, départ en douceur, allure progressive, communication régulière.",
    tip: "Un passager qui a peur se redresse en virage. La parade : le prévenir AVANT, rouler doux, vérifier son ressenti souvent.",
    legalRef: "Référentiel RS5636 – G(M), gestion du passager"
  },
  'vmd-pas-004': {
    content: "À allure lente, le poids du passager dégrade nettement l'équilibre d'une moto lourde : l'effet gyroscopique stabilisateur est absent et le centre de gravité remonte. Les manœuvres de parking et les démarrages sont les moments les plus délicats d'une course avec passager. À vitesse stabilisée, la moto redevient stable mais les distances de freinage s'allongent.",
    tip: "Avec passager : redoubler d'attention À BASSE VITESSE (manœuvres) et rallonger les distances de freinage à haute vitesse.",
    legalRef: "Référentiel RS5636 – F(M)/G(M), dynamique avec passager"
  },
  'vmd-pas-005': {
    content: "Le Code de la route impose au passager d'un deux-roues motorisé deux équipements : le casque homologué (article R431-1) et les gants certifiés CE (article R431-1-2, depuis novembre 2016). Le blouson renforcé, les chaussures montantes et le pantalon adapté sont fortement recommandés — et fournis par les meilleurs professionnels — mais ne sont pas légalement obligatoires.",
    tip: "OBLIGATOIRES : casque + gants. RECOMMANDÉS : blouson, chaussures montantes. Le QCM joue sur cette frontière.",
    legalRef: "Articles R431-1 et R431-1-2 du Code de la route"
  },
  'vmd-pas-006': {
    content: "La prise en charge se déroule en séquence : sécuriser l'arrêt (emplacement autorisé hors voie circulée, béquille sur sol stable, feux de détresse si besoin), accueillir et vérifier la réservation, équiper le passager (casque ajusté, gants), charger les bagages dans le top-case homologué — jamais en sandow à l'extérieur — puis briefer avant de démarrer.",
    tip: "La sécurité commence à l'ARRÊT : un pickup bâclé en double file expose le client avant même le premier mètre.",
    legalRef: "Référentiel RS5636 – G(M), article R412-3 du Code de la route (chargement)"
  },
  'vmd-pas-007': {
    content: "La communication pendant le trajet passe par un intercom Bluetooth (standard professionnel actuel) ou, à défaut, par des signes convenus avant le départ (tape sur l'épaule = ralentir ou s'arrêter). Elle permet au passager de signaler un inconfort, une peur ou un besoin d'arrêt sans gestes brusques qui déséquilibreraient la moto.",
    tip: "Convenir des signes AVANT de partir : improviser un langage gestuel à 80 km/h ne fonctionne pas.",
    legalRef: "Référentiel RS5636 – G(M), communication avec le passager"
  },
  'vmd-pas-008': {
    content: "Lors d'un arrêt intermédiaire, le conducteur sécurise la manœuvre : choix d'un emplacement autorisé et stable, information du passager sur le moment et le côté de descente, vigilance sur les véhicules en approche, feux de détresse si l'arrêt gêne. Le passager ne descend jamais sans l'accord explicite du conducteur — une descente inopinée déséquilibre la moto.",
    tip: "Règle d'or : le passager monte et descend UNIQUEMENT au signal du conducteur, moto stabilisée.",
    legalRef: "Référentiel RS5636 – G(M), sécurité des arrêts"
  },

  // =====================
  // MODULE VMDTR — G(M) COMMERCIAL (vmd-com-001 à 008)
  // =====================
  'vmd-com-001': {
    content: "L'analyse de marché consiste à étudier la demande locale (qui a besoin de transport rapide ? entreprises, aéroports, événements), l'offre concurrente (taxis, VTC, autres moto-taxis) et à en déduire son positionnement et ses prix. C'est le préalable à toute stratégie commerciale : on ne fixe pas un tarif ni une cible sans connaître son marché.",
    tip: "Ordre logique du programme G(M) : étudier le marché → choisir sa cible → se positionner → fixer ses prix.",
    legalRef: "Référentiel RS5636 – G(M), développement commercial"
  },
  'vmd-com-002': {
    content: "La fidélisation repose sur la qualité constante du service (ponctualité, propreté des EPI, conduite rassurante), la personnalisation (mémoriser les préférences et trajets récurrents du client) et le suivi proactif (anticiper les besoins : « je vous note votre transfert de mercredi ? »). Garder un client coûte environ cinq fois moins cher que d'en conquérir un nouveau.",
    tip: "Pareto commercial : 20 % des clients font 80 % du chiffre — identifiez-les et chouchoutez-les.",
    legalRef: "Référentiel RS5636 – G(M), fidélisation"
  },
  'vmd-com-003': {
    content: "Le référentiel G(M) exige de savoir mener des actions de communication par internet et les moyens numériques : site web avec référencement local, fiche Google Business (avis clients), réseaux sociaux professionnels (LinkedIn pour le B2B), présence sur les plateformes de réservation. Le numérique est le premier canal d'acquisition d'un VMDTR moderne.",
    tip: "Priorité au gratuit à fort impact : une fiche Google Business bien tenue génère l'essentiel des appels d'un service local.",
    legalRef: "Référentiel RS5636 – G(M), communication numérique"
  },
  'vmd-com-004': {
    content: "Le référentiel cite explicitement les hôtels et les entreprises comme partenaires-types du VMDTR : un contrat avec une conciergerie d'hôtel ou un service généraux d'entreprise apporte un flux de courses récurrentes et prévisibles. Le démarchage se fait par les canaux officiels (rendez-vous avec la conciergerie), jamais en abordant les clients devant l'établissement — ce serait de la maraude.",
    tip: "Partenariat = CA récurrent garanti. Un seul hôtel 4 étoiles peut représenter 10 à 30 courses par mois.",
    legalRef: "Référentiel RS5636 – G(M), réseau de partenaires"
  },
  'vmd-com-005': {
    content: "La compétitivité d'une offre VMDTR repose sur la qualité de service et la différenciation — rapidité en circulation dense, ponctualité garantie, professionnalisme — bien plus que sur le prix le plus bas. Le moto-taxi vend du temps gagné : c'est ce qui justifie un positionnement tarifaire supérieur au VTC, pas une guerre des prix perdue d'avance.",
    tip: "Mantra commercial : « vendre du temps gagné, pas un trajet ». La guerre des prix asphyxie ; la fiabilité fidélise.",
    legalRef: "Référentiel RS5636 – G(M), positionnement"
  },
  'vmd-com-006': {
    content: "Auprès d'un client professionnel, on met en avant les deux atouts structurels du deux-roues : l'agilité urbaine (remontée de files autorisée dans le cadre légal, gabarit réduit) et le gain de temps fiable sur les trajets congestionnés — typiquement les liaisons aéroport et les rendez-vous en centre-ville. La ponctualité chiffrée est l'argument décisif du B2B.",
    tip: "Le client d'affaires n'achète pas une moto : il achète la certitude d'arriver à l'heure.",
    legalRef: "Référentiel RS5636 – G(M), argumentaire commercial"
  },
  'vmd-com-007': {
    content: "La prospection légale du VMDTR passe par le démarchage B2B (rendez-vous avec entreprises, hôtels, conciergeries), le référencement sur les plateformes de réservation et les partenariats. Sont interdites : la sollicitation directe de clients sur la voie publique et l'attente devant les établissements sans réservation — ces pratiques constituent de la maraude.",
    tip: "Prospecter = viser les PRESCRIPTEURS (conciergeries, entreprises), jamais les passants. Le flyer distribué en rue frôle la maraude.",
    legalRef: "Référentiel RS5636 – G(M), article L3120-2 du Code des transports"
  },
  'vmd-com-008': {
    content: "Une stratégie de prix cohérente part du coût de revient complet (carburant, entretien, assurance pro, EPI, amortissement du véhicule — renouvelé tous les 5 ans —, charges sociales, formation) auquel s'ajoute la marge souhaitée, ajustée selon le positionnement et la concurrence. Vendre sous son coût de revient, c'est organiser sa propre faillite.",
    tip: "D'abord CALCULER le coût de revient, ensuite fixer le prix. L'inverse (copier le prix du voisin) mène au dépôt de bilan.",
    legalRef: "Référentiel RS5636 – G(M), détermination du prix"
  },

  // =====================
  // MODULE TAXI PARIS (taxi-001 à taxi-030)
  // =====================
  'taxi-001': {
    content: "À Paris, l'autorisation de stationnement (ADS, dite « licence ») est délivrée par le Préfet de Police, autorité compétente sur toute la zone des taxis parisiens. C'est une spécificité de la capitale : ailleurs, l'ADS est délivrée par le maire de la commune. L'ADS est le droit d'exploiter un taxi ; elle est distincte de la carte professionnelle du conducteur.",
    tip: "Paris = Préfet de POLICE (pas le maire, pas le préfet de région). Piège récurrent du QCM parisien.",
    legalRef: "Articles L3121-1 et suivants du Code des transports"
  },
  'taxi-002': {
    content: "Le taxi ne peut pratiquer la maraude que dans le ressort de son ADS : pour un taxi parisien, la zone des taxis parisiens (Paris et de nombreuses communes limitrophes définies par arrêté). Hors de cette zone, il peut déposer un client mais ne peut pas en charger un nouveau en maraude — il rentre à vide ou sur réservation.",
    tip: "L'ADS est un droit TERRITORIAL : maraude uniquement dans sa zone. Ailleurs : dépose oui, charge non.",
    legalRef: "Article L3121-11 du Code des transports"
  },
  'taxi-003': {
    content: "La feuille de route justifie le temps de service du taxi parisien : heures de prise et de fin de service, conducteur, véhicule. Elle permet à la Préfecture de Police de contrôler le respect de la durée maximale quotidienne d'utilisation, notamment en cas de doublage (plusieurs conducteurs sur une même ADS).",
    tip: "Feuille de route = le « disque horaire » du taxi parisien : elle doit être tenue à jour et présentable à tout contrôle.",
    legalRef: "Réglementation des taxis parisiens (Préfecture de Police)"
  },
  'taxi-004': {
    content: "Le lumineux « TAXI PARISIEN » indique la disponibilité par un code couleur : VERT = libre, ROUGE = occupé (en charge). Un lumineux éteint signifie que le taxi est hors service. Ce dispositif normalisé permet au client d'identifier d'un coup d'œil les taxis disponibles, de jour comme de nuit.",
    tip: "Vert = libre, rouge = occupé, éteint = hors service. (L'ancien système « éteint = occupé » a disparu.)",
    legalRef: "Arrêté préfectoral relatif aux équipements des taxis parisiens"
  },
  'taxi-005': {
    content: "Le taxi parisien doit être équipé d'un taximètre homologué et scellé (calcul du prix), de la plaque indiquant le numéro d'ADS, du lumineux « TAXI PARISIEN », et d'un terminal de paiement électronique en état de fonctionnement : la carte bancaire doit être acceptée pour tout montant, sans minimum.",
    tip: "Les 4 équipements : taximètre scellé + plaque ADS + lumineux + TPE. Refus de la CB = 150 € d'amende.",
    legalRef: "Article L3121-11-2 du Code des transports, arrêté préfectoral équipements"
  },
  'taxi-006': {
    content: "Non : le taxi en service, signalé libre dans sa zone, est soumis à l'obligation de transport. Il ne peut refuser une course — même courte, même « pas rentable » — sans motif légitime (fin de service déclarée, sécurité, comportement dangereux du client). Le refus injustifié est une infraction sanctionnée par la Préfecture de Police.",
    tip: "« Trop court » ou « trop loin » ne sont JAMAIS des motifs légitimes. Le monopole de la maraude a pour contrepartie l'obligation de transport.",
    legalRef: "Articles R3121-1 et suivants du Code des transports"
  },
  'taxi-007': {
    content: "Le tarif A est le tarif de jour (10 h - 17 h) en semaine pour une course dans Paris intra-muros avec retour en charge : c'est le tarif de base, le moins élevé. Les tarifs B, C et D s'appliquent selon l'heure (nuit), le jour (dimanche/férié) et la zone (banlieue, retour à vide). Le taximètre bascule automatiquement.",
    tip: "A = Paris, jour, semaine = le moins cher. Plus on s'éloigne (heure, zone), plus on monte dans l'alphabet.",
    legalRef: "Arrêté tarifaire annuel (tarifs des taxis parisiens)"
  },
  'taxi-008': {
    content: "Les liaisons Paris ↔ aéroports font l'objet de forfaits fixes, indépendants du compteur, de la durée et des embouteillages. Pour 2026 : Paris rive droite ↔ CDG = 56 €, rive gauche ↔ CDG = 65 € ; Paris rive droite ↔ Orly = 45 €, rive gauche ↔ Orly = 36 €. Ces montants sont révisés chaque année par arrêté.",
    tip: "CDG plus cher depuis la rive gauche (65 €), Orly plus cher depuis la rive droite (45 €) : logique de distance.",
    legalRef: "Arrêté du 24 décembre 2025 (tarifs 2026)"
  },
  'taxi-009': {
    content: "Au début de chaque course, le chauffeur enclenche le taximètre : la prise en charge (montant fixe de départ) s'affiche, puis le compteur additionne le tarif kilométrique et, aux arrêts et en marche lente, le tarif horaire. Oublier de déclencher le taximètre ou le lancer avant la montée du client constitue une irrégularité tarifaire.",
    tip: "Taximètre : déclenché à la PRISE EN CHARGE du client, ni avant (surfacturation), ni après (course au noir).",
    legalRef: "Réglementation des taxis (taximètre) et arrêté tarifaire"
  },
  'taxi-010': {
    content: "La note (facture) est obligatoirement remise au client pour toute course d'un montant de 25 € et plus. En dessous de ce seuil, elle doit être délivrée sur simple demande. Elle mentionne la date, le trajet, le montant et l'identification du taxi — indispensable aux clients professionnels pour leurs notes de frais.",
    tip: "≥ 25 € : note automatique. < 25 € : note sur demande. Le TPE moderne l'imprime ou l'envoie par mail.",
    legalRef: "Arrêté du 3 octobre 1983 relatif à la publicité des prix (notes)"
  },
  'taxi-011': {
    content: "Le transport de personnes par taxi est soumis au taux réduit de TVA de 10 %, comme l'ensemble du transport de voyageurs (VTC compris). Attention : le conducteur n'est redevable de la TVA que s'il dépasse les seuils de la franchise en base ; en-dessous, il facture sans TVA avec la mention « TVA non applicable, art. 293 B du CGI ».",
    tip: "Transport de voyageurs = TVA 10 % (pas 20 %). Piège classique de l'épreuve de gestion aussi.",
    legalRef: "Article 279 du Code général des impôts"
  },
  'taxi-012': {
    content: "Le taxi parisien attend la clientèle sur les stations de taxis dédiées de sa zone (où s'applique la règle de la file) et peut aussi circuler en maraude pour être hélé. Ces deux modes s'ajoutent à la réservation (téléphone, application). Le stationnement d'attente en dehors des stations est en revanche soumis aux règles communes de stationnement.",
    tip: "Trois canaux du taxi : station + maraude + réservation. Le VTC n'en a qu'un seul (réservation).",
    legalRef: "Article L3121-11 du Code des transports"
  },
  'taxi-013': {
    content: "Oui : les taxis sont autorisés à emprunter les voies réservées aux bus à Paris, avec ou sans client à bord. Cet avantage de circulation, matérialisé par la signalisation « BUS TAXIS », est l'un des privilèges du taxi — les VTC n'y ont pas droit. Attention toutefois aux voies expressément limitées aux seuls bus.",
    tip: "Couloirs de bus parisiens : OUI pour les taxis (même à vide), NON pour les VTC. Vérifier le panonceau.",
    legalRef: "Code de la route, signalisation des voies réservées ; arrêtés municipaux parisiens"
  },
  'taxi-014': {
    content: "Depuis le 1er octobre 2024, la vitesse maximale sur le boulevard périphérique parisien est abaissée à 50 km/h (au lieu de 70 km/h auparavant). Cette limitation s'applique à tous les véhicules, taxis compris. La connaître est indispensable, tant pour l'examen que pour éviter les infractions en course.",
    tip: "Périph = 50 km/h depuis octobre 2024. Les questions avec « 70 km/h » testent si vous êtes à jour.",
    legalRef: "Arrêté de la Ville de Paris, octobre 2024"
  },
  'taxi-015': {
    content: "Le taxi parisien peut conduire son client jusqu'à n'importe quelle destination, y compris hors de sa zone. En revanche, une fois hors zone, il ne peut pas y prendre de nouveau client en maraude : il revient à vide (le tarif « retour à vide » C/D compense partiellement) ou enchaîne sur une course réservée à l'avance.",
    tip: "Dépose partout, charge seulement dans sa zone : la maraude est territoriale, pas la destination.",
    legalRef: "Article L3121-11 du Code des transports"
  },
  'taxi-016': {
    content: "Depuis la loi Thévenoud du 1er octobre 2014, les nouvelles ADS délivrées sont gratuites, nominatives et INCESSIBLES : elles ne peuvent être ni vendues, ni louées, ni transmises, et retournent à l'administration au départ du titulaire. Seules les ADS délivrées avant octobre 2014 restent cessibles, sous conditions d'exploitation effective (5 ans pour la première cession, 15 ans ensuite).",
    tip: "La date pivot : 1er octobre 2014. Après = incessible et gratuite (liste d'attente) ; avant = cessible sous conditions.",
    legalRef: "Loi Thévenoud du 1er octobre 2014, article L3121-2 du Code des transports"
  },
  'taxi-017': {
    content: "La zone des taxis parisiens compte environ 18 500 ADS — un plafond (numerus clausus) fixé par arrêté du Préfet de Police. Ce contingentement, stable autour de 18 000 depuis des années, explique la valeur marchande des anciennes ADS cessibles et la longue liste d'attente pour les nouvelles ADS gratuites.",
    tip: "Ordre de grandeur : ≈ 18 000-18 500 taxis parisiens. (Environ 60 000 VTC en Île-de-France, à titre de comparaison.)",
    legalRef: "Arrêté du Préfet de Police (contingent des taxis parisiens)"
  },
  'taxi-018': {
    content: "La carte professionnelle de conducteur de taxi, délivrée par la préfecture après examen, atteste l'aptitude de la PERSONNE à exercer. L'ADS, elle, est le droit d'exploitation attaché au VÉHICULE. Les deux sont obligatoires et strictement distincts : on peut détenir une carte sans ADS (conducteur locataire ou salarié) et une ADS peut être conduite par plusieurs titulaires de carte.",
    tip: "ADS = le véhicule peut exercer. Carte pro = le conducteur peut conduire. Toujours les DEUX à bord.",
    legalRef: "Articles L3121-1 et L3121-10 du Code des transports"
  },
  'taxi-019': {
    content: "La zone des taxis parisiens ne se limite pas à Paris intra-muros : elle englobe de nombreuses communes limitrophes des Hauts-de-Seine, de Seine-Saint-Denis et du Val-de-Marne, listées par arrêté préfectoral, ainsi que les aéroports. Dans toute cette zone, le taxi parisien peut marauder et stationner en station.",
    tip: "« Zone des taxis parisiens » > Paris : la petite couronne en fait largement partie. La liste exacte est fixée par arrêté.",
    legalRef: "Arrêté préfectoral définissant la zone des taxis parisiens"
  },
  'taxi-020': {
    content: "Oui : une même ADS peut être exploitée par plusieurs conducteurs — c'est le « doublage » (équipes jour/nuit). Chaque conducteur doit détenir sa propre carte professionnelle en cours de validité, et la feuille de route trace qui conduit à quel moment. Ce système optimise l'utilisation d'une licence contingentée.",
    tip: "1 ADS = 1 véhicule, mais potentiellement plusieurs conducteurs (chacun avec SA carte pro).",
    legalRef: "Articles L3121-1 et suivants du Code des transports"
  },
  'taxi-021': {
    content: "Les forfaits aéroport parisiens sont différenciés selon la RIVE de départ ou d'arrivée dans Paris : rive droite ou rive gauche de la Seine. Pour CDG (au nord-est), la rive gauche est plus chère (plus loin) ; pour Orly (au sud), c'est la rive droite. Le forfait s'applique quel que soit le trafic, mais un détour demandé par le client le fait tomber.",
    tip: "Le critère du forfait : LA RIVE (droite/gauche), pas l'arrondissement ni l'heure.",
    legalRef: "Arrêté du 24 décembre 2025 (tarifs 2026)"
  },
  'taxi-022': {
    content: "Le prix affiché au taximètre additionne trois composantes : la prise en charge (montant fixe de départ), le tarif kilométrique (selon la lettre A/B/C/D applicable) et le tarif horaire qui court à l'arrêt et en marche lente (embouteillages, feux). C'est pourquoi une course dans les bouchons coûte plus cher à distance égale.",
    tip: "3 composantes : prise en charge + kilomètres + temps d'attente. Le minimum de perception (8 €) s'applique en bout de course.",
    legalRef: "Arrêté tarifaire annuel (structure des tarifs taxi)"
  },
  'taxi-023': {
    content: "Le minimum de perception — la somme totale minimale qu'un taxi peut percevoir pour une course, suppléments inclus — est fixé à 8 € par l'arrêté tarifaire national en vigueur en 2026. Même si le compteur affiche moins pour une course très courte, le client paie ce minimum.",
    tip: "Course minuscule = 8 € quand même. Ce montant est révisé chaque année par arrêté (à vérifier chaque décembre).",
    legalRef: "Arrêté tarifaire national du 24 décembre 2025"
  },
  'taxi-024': {
    content: "Les quatre lettres tarifaires combinent zone et horaire. A : Paris jour en semaine. B : Paris nuit/dimanche/férié, ou banlieue jour. C : banlieue nuit/dimanche/férié et retours à vide. D : les situations les plus majorées (grande couronne à vide, notamment). Le taximètre affiche la lettre en cours et bascule automatiquement.",
    tip: "Logique : plus c'est loin, tard ou à vide, plus la lettre monte — et le prix avec.",
    legalRef: "Arrêté tarifaire annuel (tarifs des taxis parisiens)"
  },
  'taxi-025': {
    content: "Le taxi ne peut pas refuser le paiement par carte bancaire : le terminal de paiement électronique est obligatoire, en état de fonctionnement, et la carte doit être acceptée pour TOUT montant, sans minimum. Imposer un seuil (« CB à partir de 10 € ») ou prétexter une panne récurrente est une infraction sanctionnée de 150 € d'amende et d'un signalement à la Préfecture.",
    tip: "CB acceptée dès 1 centime. « Mon TPE est en panne » répété = signalement préfecture et procédure disciplinaire.",
    legalRef: "Article L3121-11-2 du Code des transports"
  },
  'taxi-026': {
    content: "Le taxi cumule les trois modes de prise en charge : la maraude (client qui hèle dans la zone), la station (file d'attente sur emplacements réservés) et la réservation préalable (téléphone, application). C'est son avantage structurel sur le VTC, limité à la seule réservation. En contrepartie : tarifs réglementés et obligation de transport.",
    tip: "Taxi = 3 canaux, VTC = 1 canal. Le monopole de la maraude est LE privilège du taxi.",
    legalRef: "Articles L3121-11 et L3120-2 du Code des transports"
  },
  'taxi-027': {
    content: "Les suppléments sont strictement encadrés par l'arrêté tarifaire — liste limitative — et doivent être portés à la connaissance du client par affichage visible dans le véhicule. À Paris en 2026 : réservation immédiate 4 €, réservation à l'avance 7 €, et 5,50 € à partir du 5ᵉ passager. Les bagages ne donnent plus lieu à aucun supplément.",
    tip: "Affichage visible obligatoire + liste limitative : tout supplément « inventé » est une majoration illégale.",
    legalRef: "Arrêté du 24 décembre 2025 (tarifs 2026)"
  },
  'taxi-028': {
    content: "Le refus de course injustifié et les prises en charge irrégulières exposent le taxi parisien à des amendes et à des mesures administratives prononcées par la Préfecture de Police après procédure : avertissement, suspension temporaire de l'ADS ou de la carte professionnelle, voire retrait en cas de récidive. La sanction administrative se cumule avec l'éventuelle sanction pénale.",
    tip: "Le client mécontent signale facilement (plaque, heure, lieu) : chaque refus injustifié est un risque disciplinaire réel.",
    legalRef: "Articles R3121-1 et suivants du Code des transports"
  },
  'taxi-029': {
    content: "Dans les stations de gares, la règle est celle de la file : le taxi en tête prend le client qui se présente, sans choisir la destination ni négocier le prix. Refuser une course courte pour attendre une « meilleure » course est une infraction. Rappel symétrique : le CLIENT, lui, a le droit de choisir n'importe quel taxi de la file.",
    tip: "Côté taxi : premier arrivé, premier parti, client imposé. Côté client : libre choix du taxi dans la file.",
    legalRef: "Réglementation des stations de taxis (Préfecture de Police)"
  },
  'taxi-030': {
    content: "Le taxi parisien est soumis aux restrictions de la Zone à Faibles Émissions (ZFE) de la Métropole du Grand Paris : son véhicule doit porter une vignette Crit'Air de niveau autorisé pour circuler dans le périmètre. Le renouvellement du parc vers l'hybride et l'électrique est fortement encouragé (aides, dérogations d'âge du véhicule).",
    tip: "ZFE = vérifier la vignette Crit'Air AVANT d'acheter un véhicule de taxi, surtout d'occasion.",
    legalRef: "Réglementation ZFE de la Métropole du Grand Paris"
  }
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
    'taxi-national': {
      content: "La réglementation Taxi Paris 75 couvre les spécificités des taxis parisiens : tarification fixée par le Préfet de Police, taximètre lumineux obligatoire (lettre A/B/C/D), paiement CB dès le 1er euro, zones de prise en charge définies.",
      tip: "Paris 75 = Préfet de Police. Taximètre avec voyant lumineux (A=jour, B=nuit, C=banlieue jour, D=banlieue nuit). Forfaits aéroports réglementés. CB = obligatoire.",
      legalRef: "Arrêtés préfectoraux Paris | Code des transports R3121-1"
    },
    'vmdtr': {
      content: "Les VMDTR (Véhicules Motorisés à Deux ou Trois Roues) ont une réglementation spécifique : équipements de sécurité obligatoires pour conducteur et passager, conditions de transport adaptées, assurance spécifique.",
      tip: "Casque homologué CE et gants certifiés = obligatoires pour conducteur ET passager. Gilet rétro-réfléchissant obligatoire de nuit/visibilité insuffisante.",
      legalRef: "Code des transports L3123-1 à L3123-2 | Code de la route R431-1"
    },
    'taxi-territoire': {
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