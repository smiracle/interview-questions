import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuestionsList from './components/QuestionsList';
import QuestionDetails from './components/QuestionDetails';
import TopicsList from './components/TopicsList';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import {Question} from './components/Question';
import QuizQuestion from './components/QuizQuestion';

export type RootStackParamList = {
  MainMenu: undefined;
  TopicsList: undefined;
  QuestionsList: {topicFileName: string};
  QuestionDetails: {question: Question | null};
  Quiz: undefined;
  QuizQuestion: {topicFileName: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{title: 'Main Menu'}}
        />
        <Stack.Screen name="TopicsList" component={TopicsList} />
        <Stack.Screen name="Quiz" component={Quiz} options={{title: 'Quiz'}} />
        <Stack.Screen
          name="QuizQuestion"
          component={QuizQuestion}
          options={{title: 'Quiz Question'}}
        />
        <Stack.Screen
          name="QuestionsList"
          component={QuestionsList}
          options={({route}) => ({title: route.params.topicFileName})}
        />
        <Stack.Screen name="QuestionDetails" component={QuestionDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
