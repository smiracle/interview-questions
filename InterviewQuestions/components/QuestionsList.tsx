import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {Question} from './Question';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {TopicFileName, topicToDataMap} from './QuestionsDataMap';
import {sharedStyles} from './_Styles';

type QuestionsListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuestionsList'
>;
type QuestionsListRouteProp = RouteProp<RootStackParamList, 'QuestionsList'>;

interface QuestionsListProps {
  navigation: QuestionsListNavigationProp;
  route: QuestionsListRouteProp;
}

const QuestionsList: React.FC<QuestionsListProps> = ({navigation, route}) => {
  const {topicFileName} = route.params;
  const [questions, setQuestions] = useState<Question[]>([]);

  const onSelect = (question: Question) => {
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
    <TouchableOpacity
      onPress={() => onSelect(item)}
      style={sharedStyles.questionListingItem}>
      <Text style={sharedStyles.text}>{`${index + 1}. ${item.header}`}</Text>
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
