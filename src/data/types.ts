// Evidence grading: A = strong human evidence, B = some human, C = mostly preclinical, D = theoretical/anecdotal
export type EvidenceGrade = 'A' | 'B' | 'C' | 'D';

// Caution level for safety display
export type CautionLevel = 'low' | 'moderate' | 'high' | 'very-high';

export type StudyType = 'human-rct' | 'human-observational' | 'animal' | 'in-vitro' | 'review' | 'case-report';

export interface Reference {
  id: string;
  title: string;
  sourceType: StudyType;
  pubmedId?: string;
  doi?: string;
  url?: string;
  publicationDate: string;
  humanOrPreclinical: 'human' | 'preclinical' | 'both';
  shortTakeaway: string;
}

export interface EvidenceByUseCase {
  useCase: string;
  grade: EvidenceGrade;
  summary: string;
}

export interface Peptide {
  id: string;
  name: string;
  slug: string;
  aliases: string[];
  shortSummary: string;
  longSummary: string;
  plainEnglishExplainer: string;
  technicalExplainer: string;
  primaryGoals: string[]; // goal slugs
  mechanisms: string[];
  evidenceLevelOverall: EvidenceGrade;
  evidenceByUseCase: EvidenceByUseCase[];
  evidenceNotes: string;
  safetySummary: string;
  cautionLevel: CautionLevel;
  commonSideEffects: string[];
  contraindications: string[];
  interactions: string[];
  formsContext: string[];
  legalStatusNotes: string;
  clinicianReviewStatus: 'reviewed' | 'pending' | 'in-review';
  references: Reference[];
  relatedPeptides: string[]; // peptide slugs
  faqItems: FAQItem[];
  lastMedicalReviewedAt: string;
  lastContentUpdatedAt: string;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  beginnerFriendly: boolean;
  popularity: number; // 1-10 for sorting
}

export interface GoalCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  summary: string;
  longDescription: string;
  featuredPeptides: string[]; // peptide slugs
  safetyNotes: string;
  misconceptions: string[];
  learnModules: string[]; // learn module slugs
  faqItems: FAQItem[];
  seoTitle: string;
  seoDescription: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  definition: string;
  relatedTerms: string[]; // glossary term slugs
  relatedPeptides: string[]; // peptide slugs
}

export interface LearnModule {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  estimatedMinutes: number;
  order: number;
  sections: LearnSection[];
  relatedGlossaryTerms: string[];
  relatedPeptides: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface LearnSection {
  title: string;
  content: string;
  keyTakeaway?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  relatedPeptides?: string[];
}

export interface ComparisonPage {
  id: string;
  slug: string;
  title: string;
  peptideA: string; // peptide slug
  peptideB: string; // peptide slug
  intro: string;
  howToThinkAboutDifference: string;
  seoTitle: string;
  seoDescription: string;
}

// Search result types
export type SearchResultType = 'peptide' | 'goal' | 'glossary' | 'learn' | 'faq' | 'comparison';

export interface SearchResult {
  type: SearchResultType;
  title: string;
  description: string;
  slug: string;
  url: string;
  relevance: number;
}
