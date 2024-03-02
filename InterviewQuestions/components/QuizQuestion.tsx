import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {Question, QuestionContent} from './Question';
import {TopicFileName, topicToDataMap} from './QuestionsDataMap';
import {imageMap} from './ImageMap';

type QuizQuestionRouteProp = RouteProp<RootStackParamList, 'QuizQuestion'>;
type QuizQuestionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuizQuestion'
>;

interface QuizQuestionProps {
  route: QuizQuestionRouteProp;
  navigation: QuizQuestionNavigationProp;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({route}) => {
  const {topicFileName} = route.params;
  const [randomQuestion, setRandomQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const topicQuestions =
      topicToDataMap[topicFileName as TopicFileName]?.questions;
    if (topicQuestions && topicQuestions.length) {
      const randomIndex = Math.floor(Math.random() * topicQuestions.length);
      setRandomQuestion(topicQuestions[randomIndex]);
    }
  }, [topicFileName]);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const deviceWidth = Dimensions.get('window').width;
  const [imageHeights, setImageHeights] = useState<{[key: string]: number}>({});

  const adjustImageHeight = (imgKey: string, width: number, height: number) => {
    const aspectRatio = height / width;
    const calculatedHeight = deviceWidth * aspectRatio;
    setImageHeights(prevHeights => ({
      ...prevHeights,
      [imgKey]: calculatedHeight,
    }));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.header}>{randomQuestion?.header}</Text>
      {showAnswer &&
        randomQuestion?.content.map(
          (content: QuestionContent, index: number) => {
            const imgKey = `image-${index}`;
            switch (content.type) {
              case 'text':
                return (
                  <Text key={index} style={styles.text}>
                    {content.value}
                  </Text>
                );
              case 'bullets':
                return (
                  <View key={index}>
                    {content.values.map((value, idx) => (
                      <Text key={idx} style={styles.bullet}>
                        &#8226; {value}
                      </Text>
                    ))}
                  </View>
                );
              case 'code':
              case 'json':
                return (
                  <Text key={index} style={styles.code}>
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
          },
        )}
      {!showAnswer && <Button title="Show Answer" onPress={handleShowAnswer} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  text: {
    marginBottom: 10,
  },
  bullet: {
    marginBottom: 5,
  },
  code: {
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
  },
});

export default QuizQuestion;
