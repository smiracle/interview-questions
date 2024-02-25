import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Question} from './Question';

interface QuestionDetailsProps {
  question: Question | null;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({question}) => {
  if (!question) {
    // Handle the case when no question is selected, maybe show an empty state or a message
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
            // Render code with a specific style or use a library
            return (
              <Text key={index} style={{fontFamily: 'monospace'}}>
                {content.value}
              </Text>
            );
          default:
            return null;
        }
      })}
    </ScrollView>
  );
};

export default QuestionDetails;
