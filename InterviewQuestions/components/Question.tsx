export interface QuestionContent {
  type: 'text' | 'bullets' | 'code';
  value: string;
  values?: string[];
}

export interface Question {
  header: string;
  content: QuestionContent[];
}
