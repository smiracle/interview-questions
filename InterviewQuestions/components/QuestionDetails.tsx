import React, {useState} from 'react';
import {ScrollView, Text, View, Image, Dimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {QuestionContent} from './Question';
import {imageMap} from './ImageMap';
import {sharedStyles} from './_Styles';

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
    <ScrollView
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 50,
      }}>
      <Text style={sharedStyles.header}>{question.header}</Text>

      {question.content.map((content: QuestionContent, index: number) => {
        const imgKey = `image-${index}`;
        switch (content.type) {
          case 'text':
            return (
              <Text key={index} style={sharedStyles.text}>
                {content.value}
              </Text>
            );
          case 'subheader':
            return (
              <Text key={index} style={sharedStyles.subheader}>
                {content.value}
              </Text>
            );
          case 'bullets':
            return (
              <View key={index}>
                {content.values.map((value, idx) => (
                  <Text key={idx} style={sharedStyles.bullet}>
                    &#8226; {value}
                  </Text>
                ))}
              </View>
            );
          case 'json':
          case 'code':
            return (
              <Text key={index} style={sharedStyles.code}>
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
      {/* Extra whitespace */}
      <Text style={{height: 50}}></Text>
    </ScrollView>
  );
};

export default QuestionDetails;
