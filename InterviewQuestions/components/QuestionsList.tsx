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
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type QuestionsListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuestionsList'
>;
type QuestionsListRouteProp = RouteProp<RootStackParamList, 'QuestionsList'>;

type TopicFileName = 'react_formatted' | 'systems_design_formatted';

const validatedReactQuestions: {questions: Question[]} = reactQuestions as {
  questions: Question[];
};
const validatedSystemsDesignQuestions: {questions: Question[]} =
  systemsDesignQuestions as {questions: Question[]};

const topicToDataMap: Record<TopicFileName, {questions: Question[]}> = {
  react_formatted: validatedReactQuestions,
  systems_design_formatted: validatedSystemsDesignQuestions,
};

interface QuestionsListProps {
  navigation: QuestionsListNavigationProp;
  route: QuestionsListRouteProp;
}

const QuestionsList: React.FC<QuestionsListProps> = ({navigation, route}) => {
  const {topicFileName} = route.params;
  const [questions, setQuestions] = useState<Question[]>([]);

  const onSelect = (question: Question) => {
    // Navigate to QuestionDetails screen with the selected question
    navigation.navigate('QuestionDetails', {question});
  };

  useEffect(() => {
    if (topicFileName in topicToDataMap) {
      const topicQuestions =
        topicToDataMap[topicFileName as TopicFileName]?.questions;
      if (topicQuestions) {
        setQuestions(topicQuestions);
      }
    }
  }, [topicFileName]);

  const renderItem = ({item, index}: ListRenderItemInfo<Question>) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text style={{padding: 10, fontSize: 18}}>{`${index + 1}. ${
        item.header
      }`}</Text>
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
