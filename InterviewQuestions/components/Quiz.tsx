import React from 'react';
import {Text, TouchableOpacity, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {topics} from './QuestionsDataMap';
import {sharedStyles} from './_Styles';

interface QuizProps {
  navigation: StackNavigationProp<RootStackParamList, 'QuizQuestion'>;
}

const Quiz: React.FC<QuizProps> = ({navigation}) => {
  const onSelectTopic = (topic: {name: string; fileName: string}) => {
    navigation.navigate('QuizQuestion', {topicFileName: topic.fileName});
  };

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      {topics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          style={sharedStyles.button}
          onPress={() => onSelectTopic(topic)}>
          <Text style={sharedStyles.text}>{topic.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Quiz;
