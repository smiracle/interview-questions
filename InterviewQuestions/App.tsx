import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuestionsList from './components/QuestionsList';
import QuestionDetails from './components/QuestionDetails';
import {Question} from './components/Question';
import TopicsList from './components/TopicsList';

export type RootStackParamList = {
  TopicsList: undefined;
  QuestionsList: {topicFileName: string};
  QuestionDetails: {question: Question | null};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopicsList">
        <Stack.Screen name="TopicsList" component={TopicsList} />
        <Stack.Screen name="QuestionsList">
          {props => (
            <QuestionsList
              topicFileName="react_formatted"
              onSelect={(question: Question) => {
                setSelectedQuestion(question);
                props.navigation.navigate('QuestionDetails', {question});
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
