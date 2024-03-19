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
  const allowedTopicsForNow = ['JavaScript', 'React', 'Systems Design'];

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      <Text style={sharedStyles.header}>Select Topic</Text>
      {topics
        .filter(x => allowedTopicsForNow.includes(x.name))
        .map((topic, index) => (
          <TouchableOpacity
            key={index}
            style={sharedStyles.button}
            onPress={() => onSelectTopic(topic)}>
            <Text style={sharedStyles.buttonText}>{topic.name}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default Quiz;
