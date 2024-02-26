import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {Question} from './Question';
import reactQuestions from '../data/react_formatted.json';

// Define the type for the topic file names based on the keys in topicToDataMap
type TopicFileName = 'react_formatted'; // Extend this type as you add more topics
const validatedReactQuestions = validateQuestionsData(reactQuestions)
  ? reactQuestions
  : {questions: []};

function validateQuestionsData(data: any): data is {questions: Question[]} {
  // Check if data is an object and has a questions property that is an array
  if (
    typeof data !== 'object' ||
    data === null ||
    !Array.isArray(data.questions)
  ) {
    return false;
  }

  // Check each question in the array
  return data.questions.every((question: any) => {
    // Check if each question has a header and content property
    if (
      typeof question.header !== 'string' ||
      !Array.isArray(question.content)
    ) {
      return false;
    }

    // Check each content item within a question
    return question.content.every((content: any) => {
      // Validate content based on its type property
      switch (content.type) {
        case 'text':
        case 'code':
        case 'json':
          return typeof content.value === 'string';
        case 'bullets':
          return (
            Array.isArray(content.values) &&
            content.values.every((val: any) => typeof val === 'string')
          );
        case 'image':
          return (
            typeof content.alt === 'string' && typeof content.path === 'string'
          );
        default:
          console.log(`Unknown question content type: ${content.type}`);
          return false;
      }
    });
  });
}

const topicToDataMap: Record<TopicFileName, {questions: Question[]}> = {
  react_formatted: validatedReactQuestions,
};

// Props interface now uses TopicFileName to ensure the prop is a valid key of topicToDataMap
interface QuestionsListProps {
  topicFileName: TopicFileName;
  onSelect: (question: Question) => void;
}

const QuestionsList: React.FC<QuestionsListProps> = ({
  topicFileName,
  onSelect,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const topicQuestions = topicToDataMap[topicFileName];
    console.log('Loaded questions for:', topicFileName, topicQuestions);
    setQuestions(topicQuestions.questions);
  }, [topicFileName]);

  const renderItem = ({item}: ListRenderItemInfo<Question>) => (
    <TouchableOpacity
      onPress={() => {
        console.log('Selected question:', item);
        onSelect(item);
      }}>
      <Text style={{padding: 10, fontSize: 18}}>{item.header}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={questions}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default QuestionsList;
