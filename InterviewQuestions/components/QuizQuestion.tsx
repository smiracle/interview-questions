import React, {useState, useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
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

interface ShuffledAnswer {
  text: string;
  isCorrect: boolean;
}

interface QuestionWithShuffledAnswers {
  header: string;
  content: QuestionContent[];
  answers: ShuffledAnswer[];
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({route, navigation}) => {
  const {topicFileName} = route.params;
  const [questions, setQuestions] = useState<QuestionWithShuffledAnswers[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleAnswerSelection = (answerText: string) => {
    const selectedAnswer = questions[currentQuestionIndex].answers.find(
      answer => answer.text === answerText,
    );
    setIsAnswerCorrect(selectedAnswer?.isCorrect ?? false);
    setSelectedAnswer(answerText);
    setShowAnswer(true);
  };
  useEffect(() => {
    const loadQuestions = async () => {
      const loadedQuestions: Question[] =
        topicToDataMap[topicFileName as TopicFileName]?.questions || [];

      const shuffledQuestions: Question[] = shuffleQuestions(loadedQuestions);

      const selectedAndProcessedQuestions: QuestionWithShuffledAnswers[] =
        shuffledQuestions
          .map((question: Question): QuestionWithShuffledAnswers => {
            const answers: string[] = question.answers || [];
            const taggedAnswers: ShuffledAnswer[] = tagCorrectAnswer(answers);
            const shuffledAndProcessedAnswers: ShuffledAnswer[] =
              shuffleAndEnsureCorrectAnswer(taggedAnswers);

            return {
              ...question,
              answers: shuffledAndProcessedAnswers,
            };
          })
          .slice(0, 5);

      setQuestions(selectedAndProcessedQuestions);
    };
    loadQuestions();
  }, [topicFileName, topicToDataMap]);

  function shuffleQuestions(questions: Question[]): Question[] {
    for (let i = questions.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  }

  function shuffleAndEnsureCorrectAnswer(
    answers: ShuffledAnswer[],
  ): ShuffledAnswer[] {
    const correctAnswer = answers.find(answer => answer.isCorrect);
    const otherAnswers = answers.filter(answer => !answer.isCorrect);

    let shuffledOtherAnswers: ShuffledAnswer[] = shuffleAnswers(otherAnswers);

    const selectedOtherAnswers: ShuffledAnswer[] = shuffledOtherAnswers.slice(
      0,
      4,
    );

    const combinedAnswers: ShuffledAnswer[] = correctAnswer
      ? [correctAnswer, ...selectedOtherAnswers]
      : [...selectedOtherAnswers];

    return shuffleAnswers(combinedAnswers);
  }

  function shuffleAnswers(answers: ShuffledAnswer[]): ShuffledAnswer[] {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

  function tagCorrectAnswer(answers: string[]): ShuffledAnswer[] {
    return answers.map(
      (answer: string, index: number): ShuffledAnswer => ({
        text: answer,
        isCorrect: index === 0, // Assumes the first answer is always correct
      }),
    );
  }

  const handleNextQuestion = () => {
    // Reset
    setShowAnswer(false);
    setSelectedAnswer('');
    setIsAnswerCorrect(false);

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
          <Text key={index} style={sharedStyles.text}>
            {content.value}
          </Text>
        );
      case 'bullets':
        return (
          <View key={index}>
            {content.values.map((value, idx) => (
              <Text key={`${index}-${idx}`} style={sharedStyles.bullet}>
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
            style={sharedStyles.image}
            resizeMode="contain"
          />
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={sharedStyles.container}>
      <Text style={sharedStyles.header}>{currentQuestion?.header}</Text>
      {hasAnswers &&
        !showAnswer &&
        currentQuestion?.answers?.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={sharedStyles.button}
            onPress={() => handleAnswerSelection(answer.text)}>
            <Text style={sharedStyles.buttonText}>{answer.text}</Text>
          </TouchableOpacity>
        ))}

      {showAnswer && (
        <>
          <Text
            style={
              isAnswerCorrect
                ? sharedStyles.feedbackTextCorrect
                : sharedStyles.feedbackTextIncorrect
            }>
            {isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
          </Text>
          {currentQuestion?.content.map(renderContent)}
          <TouchableOpacity
            style={sharedStyles.nextButton}
            onPress={handleNextQuestion}>
            <Text style={sharedStyles.nextButtonText}>Continue</Text>
          </TouchableOpacity>
        </>
      )}
      {/* Extra whitespace */}
      <Text style={{height: 50}}></Text>
    </ScrollView>
  );
};

export default QuizQuestion;
