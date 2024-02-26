import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Question} from './Question';
import {Image} from 'react-native';

interface QuestionDetailsProps {
  question: Question | null;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({question}) => {
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
      {question.content.map((content, index) => {
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
                {content.values!.map((value, idx) => (
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
                alt={content.alt}
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
