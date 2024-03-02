import {Question} from './Question';
import reactQuestions from '../data/react_formatted.json';
import systemsDesignQuestions from '../data/systems_design_formatted.json';

export type TopicFileName = 'react_formatted' | 'systems_design_formatted';

export const topics = [
  {name: 'React', fileName: 'react_formatted'},
  {name: 'Systems Design', fileName: 'systems_design_formatted'},
];

const validatedReactQuestions: {questions: Question[]} = reactQuestions as {
  questions: Question[];
};
const validatedSystemsDesignQuestions: {questions: Question[]} =
  systemsDesignQuestions as {questions: Question[]};

export const topicToDataMap: Record<TopicFileName, {questions: Question[]}> = {
  react_formatted: validatedReactQuestions,
  systems_design_formatted: validatedSystemsDesignQuestions,
};
