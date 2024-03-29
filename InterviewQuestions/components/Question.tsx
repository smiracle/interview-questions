export type QuestionContent =
  | {type: 'text'; value: string}
  | {type: 'subheader'; value: string}
  | {type: 'bullets'; values: string[]}
  | {type: 'code'; value: string}
  | {type: 'json'; value: string}
  | {type: 'image'; alt: string; path: string};

export interface Question {
  header: string;
  content: QuestionContent[];
  answers?: string[]; // Only the first element is correct
}
