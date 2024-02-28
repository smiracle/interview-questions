import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {QuestionContent} from './Question';

interface QuestionDetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'QuestionDetails'>;
  route: RouteProp<RootStackParamList, 'QuestionDetails'>;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({route}) => {
  const {question} = route.params; // Correctly accessing question from route.params

  if (!question) {
    return (
      <View>
        <Text>No question selected.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{padding: 10}}>
      <Text>{question.header}</Text>
      {question.content.map((content: QuestionContent, index: number) => {
        // Explicitly typing content and index
        switch (content.type) {
          case 'json':
          case 'text':
            return (
              <Text key={index} style={{marginBottom: 10}}>
                {content.value}
              </Text>
            );
          case 'bullets':
            return (
              <View key={index}>
                {content.values.map((value, idx) => (
                  <Text key={idx} style={{marginBottom: 5}}>
                    {value}
                  </Text>
                ))}
              </View>
            );
          case 'code':
            return (
              <Text key={index} style={{fontFamily: 'monospace'}}>
                {content.value}
              </Text>
            );
          case 'image':
            return (
              <Image
                key={index}
                style={{width: 200, height: 200}}
                source={{uri: content.path}}
                accessibilityLabel={content.alt}
              />
            );
          default:
            return null;
        }
      })}
    </ScrollView>
  );
};

export default QuestionDetails;
