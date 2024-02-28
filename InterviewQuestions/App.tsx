import React from 'react';
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopicsList">
        <Stack.Screen name="TopicsList" component={TopicsList} />
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
