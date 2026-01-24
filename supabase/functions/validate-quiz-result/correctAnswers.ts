// This file contains the correct answers for all quiz questions
// Used by the validate-quiz-result edge function for server-side validation
// IMPORTANT: Keep this synchronized with src/data/quizData.ts

export const correctAnswers: Record<string, 'A' | 'B' | 'C' | 'D'> = {
  // MODULE 2 - GESTION & COMPTABILITÉ (40 questions)
  'ges-001': 'B', 'ges-002': 'A', 'ges-003': 'A', 'ges-004': 'A', 'ges-005': 'B',
  'ges-006': 'A', 'ges-007': 'A', 'ges-008': 'A', 'ges-009': 'A', 'ges-010': 'B',
  'ges-011': 'A', 'ges-012': 'A', 'ges-013': 'B', 'ges-014': 'B', 'ges-015': 'B',
  'ges-016': 'A', 'ges-017': 'A', 'ges-018': 'A', 'ges-019': 'A', 'ges-020': 'A',
  'ges-021': 'B', 'ges-022': 'A', 'ges-023': 'C', 'ges-024': 'A', 'ges-025': 'B',
  'ges-026': 'B', 'ges-027': 'A', 'ges-028': 'B', 'ges-029': 'A', 'ges-030': 'A',
  'ges-031': 'A', 'ges-032': 'A', 'ges-033': 'A', 'ges-034': 'A', 'ges-035': 'A',
  'ges-036': 'A', 'ges-037': 'A', 'ges-038': 'A', 'ges-039': 'A', 'ges-040': 'A',
  
  // MODULE 1 - RÉGLEMENTATION (45 questions)
  'reg-001': 'A', 'reg-002': 'A', 'reg-003': 'A', 'reg-004': 'A', 'reg-005': 'A',
  'reg-006': 'A', 'reg-007': 'A', 'reg-008': 'A', 'reg-009': 'A', 'reg-010': 'A',
  'reg-011': 'A', 'reg-012': 'A', 'reg-013': 'A', 'reg-014': 'A', 'reg-015': 'A',
  'reg-016': 'A', 'reg-017': 'A', 'reg-018': 'A', 'reg-019': 'A', 'reg-020': 'A',
  'reg-021': 'A', 'reg-022': 'A', 'reg-023': 'A', 'reg-024': 'A', 'reg-025': 'A',
  'reg-026': 'A', 'reg-027': 'A', 'reg-028': 'A', 'reg-029': 'A', 'reg-030': 'A',
  'reg-031': 'A', 'reg-032': 'A', 'reg-033': 'A', 'reg-034': 'A', 'reg-035': 'A',
  'reg-036': 'A', 'reg-037': 'A', 'reg-038': 'A', 'reg-039': 'A', 'reg-040': 'A',
  'reg-041': 'A', 'reg-042': 'A', 'reg-043': 'A', 'reg-044': 'A', 'reg-045': 'A',
  
  // MODULE 3 - SÉCURITÉ ROUTIÈRE (45 questions)
  'sec-001': 'B', 'sec-002': 'A', 'sec-003': 'A', 'sec-004': 'B', 'sec-005': 'A',
  'sec-006': 'B', 'sec-007': 'A', 'sec-008': 'C', 'sec-009': 'C', 'sec-010': 'B',
  'sec-011': 'A', 'sec-012': 'A', 'sec-013': 'A', 'sec-014': 'A', 'sec-015': 'A',
  'sec-016': 'A', 'sec-017': 'A', 'sec-018': 'A', 'sec-019': 'A', 'sec-020': 'A',
  'sec-021': 'A', 'sec-022': 'A', 'sec-023': 'A', 'sec-024': 'C', 'sec-025': 'A',
  'sec-026': 'B', 'sec-027': 'B', 'sec-028': 'A', 'sec-029': 'A', 'sec-030': 'A',
  'sec-031': 'A', 'sec-032': 'B', 'sec-033': 'B', 'sec-034': 'B', 'sec-035': 'A',
  'sec-036': 'B', 'sec-037': 'A', 'sec-038': 'A', 'sec-039': 'A', 'sec-040': 'A',
  'sec-041': 'A', 'sec-042': 'A', 'sec-043': 'A', 'sec-044': 'A', 'sec-045': 'A',
  
  // MODULE 4 - FRANÇAIS (40 questions)
  'fra-001': 'A', 'fra-002': 'A', 'fra-003': 'A', 'fra-004': 'A', 'fra-005': 'A',
  'fra-006': 'A', 'fra-007': 'A', 'fra-008': 'B', 'fra-009': 'A', 'fra-010': 'A',
  'fra-011': 'A', 'fra-012': 'A', 'fra-013': 'A', 'fra-014': 'A', 'fra-015': 'A',
  'fra-016': 'A', 'fra-017': 'A', 'fra-018': 'A', 'fra-019': 'A', 'fra-020': 'A',
  'fra-021': 'A', 'fra-022': 'A', 'fra-023': 'A', 'fra-024': 'A', 'fra-025': 'A',
  'fra-026': 'A', 'fra-027': 'A', 'fra-028': 'A', 'fra-029': 'A', 'fra-030': 'A',
  'fra-031': 'A', 'fra-032': 'A', 'fra-033': 'A', 'fra-034': 'A', 'fra-035': 'A',
  'fra-036': 'A', 'fra-037': 'A', 'fra-038': 'A', 'fra-039': 'A', 'fra-040': 'A',
  
  // MODULE 5 - ANGLAIS (80 questions)
  'ang-001': 'C', 'ang-002': 'A', 'ang-003': 'A', 'ang-004': 'A', 'ang-005': 'A',
  'ang-006': 'A', 'ang-007': 'A', 'ang-008': 'A', 'ang-009': 'A', 'ang-010': 'A',
  'ang-011': 'A', 'ang-012': 'A', 'ang-013': 'A', 'ang-014': 'A', 'ang-015': 'A',
  'ang-016': 'A', 'ang-017': 'A', 'ang-018': 'A', 'ang-019': 'A', 'ang-020': 'A',
  'ang-021': 'A', 'ang-022': 'A', 'ang-023': 'A', 'ang-024': 'A', 'ang-025': 'A',
  'ang-026': 'A', 'ang-027': 'A', 'ang-028': 'A', 'ang-029': 'A', 'ang-030': 'A',
  'ang-031': 'A', 'ang-032': 'A', 'ang-033': 'A', 'ang-034': 'A', 'ang-035': 'A',
  'ang-036': 'A', 'ang-037': 'A', 'ang-038': 'A', 'ang-039': 'A', 'ang-040': 'A',
  'ang-041': 'A', 'ang-042': 'A', 'ang-043': 'A', 'ang-044': 'A', 'ang-045': 'A',
  'ang-046': 'A', 'ang-047': 'A', 'ang-048': 'A', 'ang-049': 'A', 'ang-050': 'A',
  'ang-051': 'A', 'ang-052': 'A', 'ang-053': 'A', 'ang-054': 'A', 'ang-055': 'A',
  'ang-056': 'A', 'ang-057': 'A', 'ang-058': 'A', 'ang-059': 'A', 'ang-060': 'A',
  'ang-061': 'A', 'ang-062': 'A', 'ang-063': 'A', 'ang-064': 'A', 'ang-065': 'A',
  'ang-066': 'A', 'ang-067': 'A', 'ang-068': 'A', 'ang-069': 'A', 'ang-070': 'A',
  'ang-071': 'A', 'ang-072': 'A', 'ang-073': 'A', 'ang-074': 'A', 'ang-075': 'A',
  'ang-076': 'A', 'ang-077': 'A', 'ang-078': 'A', 'ang-079': 'A', 'ang-080': 'A',
  
  // MODULE 6 - TAXI SPÉCIFIQUE (37 questions)
  'tax-001': 'A', 'tax-002': 'A', 'tax-003': 'A', 'tax-004': 'A', 'tax-005': 'A',
  'tax-006': 'A', 'tax-007': 'A', 'tax-008': 'A', 'tax-009': 'A', 'tax-010': 'A',
  'tax-011': 'A', 'tax-012': 'A', 'tax-013': 'A', 'tax-014': 'A', 'tax-015': 'A',
  'tax-016': 'A', 'tax-017': 'A', 'tax-018': 'A', 'tax-019': 'A', 'tax-020': 'A',
  'tax-021': 'A', 'tax-022': 'A', 'tax-023': 'A', 'tax-024': 'A', 'tax-025': 'A',
  'tax-026': 'A', 'tax-027': 'A', 'tax-028': 'A', 'tax-029': 'A', 'tax-030': 'A',
  'tax-031': 'A', 'tax-032': 'A', 'tax-033': 'A', 'tax-034': 'A', 'tax-035': 'A',
  'tax-036': 'A', 'tax-037': 'A',
  
  // MODULE 7 - VTC SPÉCIFIQUE (41 questions)
  'vtc-001': 'C', 'vtc-002': 'C', 'vtc-003': 'A', 'vtc-004': 'A', 'vtc-005': 'B',
  'vtc-006': 'A', 'vtc-007': 'A', 'vtc-008': 'A', 'vtc-009': 'A', 'vtc-010': 'A',
  'vtc-011': 'A', 'vtc-012': 'A', 'vtc-013': 'A', 'vtc-014': 'A', 'vtc-015': 'A',
  'vtc-016': 'A', 'vtc-017': 'A', 'vtc-018': 'A', 'vtc-019': 'A', 'vtc-020': 'A',
  'vtc-021': 'A', 'vtc-022': 'C', 'vtc-023': 'A', 'vtc-024': 'A', 'vtc-025': 'B',
  'vtc-026': 'C', 'vtc-027': 'A', 'vtc-028': 'A', 'vtc-029': 'B', 'vtc-030': 'A',
  'vtc-031': 'A', 'vtc-032': 'A', 'vtc-033': 'B', 'vtc-034': 'A', 'vtc-035': 'A',
  'vtc-036': 'B', 'vtc-037': 'A', 'vtc-038': 'A', 'vtc-039': 'A', 'vtc-040': 'A',
  'vtc-041': 'A',
  
  // MODULE 8 - VMDTR (18 questions)
  'vmd-001': 'A', 'vmd-002': 'A', 'vmd-003': 'A', 'vmd-004': 'A', 'vmd-005': 'A',
  'vmd-006': 'A', 'vmd-007': 'A', 'vmd-008': 'A', 'vmd-009': 'A', 'vmd-010': 'A',
  'vmd-011': 'A', 'vmd-012': 'A', 'vmd-013': 'A', 'vmd-014': 'A', 'vmd-015': 'A',
  'vmd-016': 'A', 'vmd-017': 'A', 'vmd-018': 'A',
  
  // MODULE 9 - TAXI PARIS 75 (30 questions)
  'tx75-001': 'D', 'tx75-002': 'A', 'tx75-003': 'C', 'tx75-004': 'B', 'tx75-005': 'A',
  'tx75-006': 'B', 'tx75-007': 'C', 'tx75-008': 'A', 'tx75-009': 'A', 'tx75-010': 'A',
  'tx75-011': 'C', 'tx75-012': 'B', 'tx75-013': 'B', 'tx75-014': 'B', 'tx75-015': 'B',
  'tx75-016': 'B', 'tx75-017': 'B', 'tx75-018': 'B', 'tx75-019': 'A', 'tx75-020': 'A',
  'tx75-021': 'A', 'tx75-022': 'A', 'tx75-023': 'A', 'tx75-024': 'A', 'tx75-025': 'A',
  'tx75-026': 'A', 'tx75-027': 'A', 'tx75-028': 'A', 'tx75-029': 'A', 'tx75-030': 'A',
  
  // MODULE 10 - TOPOGRAPHIE PARIS (40 questions)
  'topo-001': 'A', 'topo-002': 'A', 'topo-003': 'A', 'topo-004': 'A', 'topo-005': 'A',
  'topo-006': 'A', 'topo-007': 'A', 'topo-008': 'A', 'topo-009': 'A', 'topo-010': 'A',
  'topo-011': 'B', 'topo-012': 'C', 'topo-013': 'B', 'topo-014': 'B', 'topo-015': 'B',
  'topo-016': 'B', 'topo-017': 'B', 'topo-018': 'B', 'topo-019': 'A', 'topo-020': 'C',
  'topo-021': 'B', 'topo-022': 'A', 'topo-023': 'B', 'topo-024': 'A', 'topo-025': 'A',
  'topo-026': 'B', 'topo-027': 'B', 'topo-028': 'B', 'topo-029': 'A', 'topo-030': 'A',
  'topo-031': 'B', 'topo-032': 'A', 'topo-033': 'B', 'topo-034': 'C', 'topo-035': 'B',
  'topo-036': 'A', 'topo-037': 'B', 'topo-038': 'C', 'topo-039': 'A', 'topo-040': 'B',
  
  // MODULE 11 - RELATION CLIENT (40 questions)
  'rel-001': 'A', 'rel-002': 'B', 'rel-003': 'B', 'rel-004': 'B', 'rel-005': 'A',
  'rel-006': 'A', 'rel-007': 'B', 'rel-008': 'B', 'rel-009': 'A', 'rel-010': 'B',
  'rel-011': 'A', 'rel-012': 'B', 'rel-013': 'A', 'rel-014': 'A', 'rel-015': 'A',
  'rel-016': 'A', 'rel-017': 'A', 'rel-018': 'A', 'rel-019': 'A', 'rel-020': 'A',
  'rel-021': 'A', 'rel-022': 'A', 'rel-023': 'A', 'rel-024': 'A', 'rel-025': 'A',
  'rel-026': 'A', 'rel-027': 'A', 'rel-028': 'A', 'rel-029': 'A', 'rel-030': 'A',
  'rel-031': 'A', 'rel-032': 'A', 'rel-033': 'A', 'rel-034': 'A', 'rel-035': 'A',
  'rel-036': 'A', 'rel-037': 'A', 'rel-038': 'A', 'rel-039': 'A', 'rel-040': 'A',
};

// Valid module/quiz IDs for validation
export const validQuizIds = [
  'reglementation', 'securite', 'gestion', 'francais', 'anglais',
  'taxi', 'vtc', 'vmdtr', 'taxi-75', 'topographie-paris', 'relation-client',
  'exam-vtc', 'exam-taxi', 'exam-vmdtr'
];
