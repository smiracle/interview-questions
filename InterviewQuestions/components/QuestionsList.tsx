import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {Question} from './Question';
import reactQuestions from '../data/react_formatted.json';
import systemsDesignQuestions from '../data/systems_design_formatted.json';

type TopicFileName = 'react_formatted' | 'systems_design_formatted';

const validatedReactQuestions = validateQuestionsData(reactQuestions)
  ? reactQuestions
  : {questions: []};

const validatedSystemsDesignQuestions = validateQuestionsData(
  systemsDesignQuestions,
)
  ? systemsDesignQuestions
  : {questions: []};

const topicToDataMap: Record<TopicFileName, {questions: Question[]}> = {
  react_formatted: validatedReactQuestions,
  systems_design_formatted: validatedSystemsDesignQuestions,
};

function validateQuestionsData(data: any): data is {questions: Question[]} {
  if (
    typeof data !== 'object' ||
    data === null ||
    !Array.isArray(data.questions)
  ) {
    return false;
  }

  return data.questions.every((question: any) => {
    if (
      typeof question.header !== 'string' ||
      !Array.isArray(question.content)
    ) {
      return false;
    }

    return question.content.every((content: any) => {
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
