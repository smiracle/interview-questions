import React, {useState} from 'react';
import {ScrollView, Text, View, Image, Dimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {QuestionContent} from './Question';
import {imageMap} from './ImageMap';

interface QuestionDetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'QuestionDetails'>;
  route: RouteProp<RootStackParamList, 'QuestionDetails'>;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({route}) => {
  const {question} = route.params;

  if (!question) {
    return (
      <View>
        <Text>No question selected.</Text>
      </View>
    );
  }
  const [imageHeights, setImageHeights] = useState<{[key: string]: number}>({});

  const deviceWidth = Dimensions.get('window').width;
  const adjustImageHeight = (imgKey: string, width: number, height: number) => {
    const aspectRatio = height / width;
    const calculatedHeight = deviceWidth * aspectRatio;
    setImageHeights(prevHeights => ({
      ...prevHeights,
      [imgKey]: calculatedHeight,
    }));
  };

  return (
    <ScrollView style={{padding: 10}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 10,
          backgroundColor: '#f0f0f0',
          borderRadius: 5,
        }}>
        {question.header}
      </Text>

      {question.content.map((content: QuestionContent, index: number) => {
        const imgKey = `image-${index}`;
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
                {content.values.map((value, idx) => (
                  <Text key={idx} style={{marginBottom: 5}}>
                    {value}
                  </Text>
                ))}
              </View>
            );
          case 'json':
          case 'code':
            return (
              <Text
                key={index}
                style={{
                  fontFamily: 'monospace',
                  backgroundColor: '#2E2E2E',
                  color: '#F8F8F8',
                  padding: 10,
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginTop: 5,
                  marginBottom: 5,
                  fontSize: 12,
                  lineHeight: 24,
                }}>
                {content.value}
              </Text>
            );
          case 'image':
            return (
              <Image
                key={index}
                style={{
                  width: '100%',
                  height: imageHeights[imgKey] || undefined,
                }}
                source={imageMap[content.path]}
                accessibilityLabel={content.alt}
                resizeMode="contain"
                onLoad={event => {
                  const {width, height} = event.nativeEvent.source;
                  adjustImageHeight(imgKey, width, height);
                }}
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
