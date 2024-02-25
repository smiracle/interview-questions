import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {Question} from './Question';

interface QuestionsListProps {
  questions: Question[];
  onSelect: (question: Question) => void;
}

const QuestionsList: React.FC<QuestionsListProps> = ({questions, onSelect}) => {
  const renderItem = ({item}: ListRenderItemInfo<Question>) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
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
