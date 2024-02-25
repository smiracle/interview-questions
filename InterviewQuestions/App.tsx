import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTheme} from './components/ThemeProvider';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuestionsList from './components/QuestionsList';
import QuestionDetails from './components/QuestionDetails';
import questionsData from './data/react_formatted.json';
import {Question} from './components/Question';

// Define the types for your navigation stack
type RootStackParamList = {
  QuestionsList: undefined;
  QuestionDetails: {question: Question | null};
};
const Stack = createStackNavigator<RootStackParamList>();

const questions: Question[] = questionsData.questions as Question[];

const App = () => {
  const {theme, toggleTheme} = useTheme();
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuestionsList">
          {props => (
            <QuestionsList
              {...props}
              questions={questions}
              onSelect={(question: Question) => {
                setSelectedQuestion(question);
                props.navigation.navigate('QuestionDetails', {
                  question,
                });
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="QuestionDetails">
          {props => <QuestionDetails {...props} question={selectedQuestion} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    backgroundColor: '#FFF',
  },
  lightText: {
    color: '#333',
  },
});

export default App;
