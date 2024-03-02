import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {topics} from './QuestionsDataMap';

interface QuizProps {
  navigation: StackNavigationProp<RootStackParamList, 'QuizQuestion'>;
}

const Quiz: React.FC<QuizProps> = ({navigation}) => {
  const onSelectTopic = (topic: {name: string; fileName: string}) => {
    navigation.navigate('QuizQuestion', {topicFileName: topic.fileName});
  };

  return (
    <View style={styles.container}>
      {topics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onSelectTopic(topic)}>
          <Text style={styles.text}>{topic.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
  },
});

export default Quiz;
