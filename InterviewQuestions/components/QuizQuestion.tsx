import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {TopicFileName, topicToDataMap} from './QuestionsDataMap';
import {Question, QuestionContent} from './Question';
import {imageMap} from './ImageMap';
import {sharedStyles} from './_Styles';

type QuizQuestionRouteProp = RouteProp<RootStackParamList, 'QuizQuestion'>;
type QuizQuestionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuizQuestion'
>;

interface QuizQuestionProps {
  route: QuizQuestionRouteProp;
  navigation: QuizQuestionNavigationProp;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({route, navigation}) => {
  const {topicFileName} = route.params;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    const loadQuestions = () => {
      const loadedQuestions =
        topicToDataMap[topicFileName as TopicFileName]?.questions;
      const selectedQuestions = loadedQuestions
        ?.sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setQuestions(selectedQuestions ?? []);
    };
    loadQuestions();
  }, [topicFileName]);

  const handleAnswerSelection = (answer: string) => {
    const correctAnswer = questions[currentQuestionIndex]?.answers?.[0];
    setIsAnswerCorrect(answer === correctAnswer);
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false); // Hide feedback when moving to the next question
    setSelectedAnswer(''); // Reset selected answer
    setIsAnswerCorrect(false); // Reset correctness state

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.goBack(); // or navigate to a results page
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswers =
    currentQuestion?.answers && currentQuestion.answers.length > 0;

  const renderContent = (content: QuestionContent, index: number) => {
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
              <Text key={`${index}-${idx}`} style={styles.bullet}>
                &#8226; {value}
              </Text>
            ))}
          </View>
        );
      case 'code':
        return (
          <Text key={index} style={sharedStyles.code}>
            {content.value}
          </Text>
        );
      case 'image':
        const imageSource = imageMap[content.path];
        return (
          <Image
            key={index}
            source={imageSource}
            style={styles.image}
            resizeMode="contain"
          />
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.questionHeader}>{currentQuestion?.header}</Text>
      {hasAnswers &&
        !showAnswer &&
        currentQuestion?.answers?.slice(0, 5).map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={styles.answerButton}
            onPress={() => handleAnswerSelection(answer)}>
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
      {showAnswer && (
        <>
          <Text style={styles.feedbackText}>
            {isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
          </Text>
          {currentQuestion?.content.map(renderContent)}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}>
            <Text style={styles.nextButtonText}>Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  revealButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  revealButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  questionHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
  answerFeedback: {
    marginTop: 20,
  },
  feedbackText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  bullet: {},
  text: {},
  image: {width: '100%', height: 200},
});

export default QuizQuestion;
