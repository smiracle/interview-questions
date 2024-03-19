import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {topics} from './QuestionsDataMap';
import {sharedStyles} from './_Styles';

interface TopicsListProps {
  navigation: StackNavigationProp<RootStackParamList, 'TopicsList'>;
}

const TopicsList: React.FC<TopicsListProps> = ({navigation}) => {
  const onSelectTopic = (topic: {name: string; fileName: string}) => {
    navigation.navigate('QuestionsList', {topicFileName: topic.fileName});
  };

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      <Text style={sharedStyles.header}>Select a Topic:</Text>
      {topics.map((topic, index) => (
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

export default TopicsList;
