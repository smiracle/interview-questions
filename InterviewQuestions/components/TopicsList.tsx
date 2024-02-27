import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from '@react-navigation/stack';

const topics = [
  {name: 'React', fileName: 'react_formatted'},
  {name: 'Systems Design', fileName: 'systems_design_formatted'},
  // Todo: add more
];

type TopicsListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TopicsList'
>;

const TopicsList: React.FC = () => {
  const navigation = useNavigation<TopicsListNavigationProp>();
  return (
    <View style={styles.container}>
      {topics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() =>
            navigation.navigate('QuestionsList', {
              topicFileName: topic.fileName,
            })
          }>
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

export default TopicsList;
