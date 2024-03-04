import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {sharedStyles} from './_Styles';

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, 'MainMenu'>;
}

const MainMenu: React.FC<MainMenuProps> = ({navigation}) => {
  return (
    <View style={sharedStyles.container}>
      <Text>Select a Study Mode</Text>
      <TouchableOpacity
        style={sharedStyles.button}
        onPress={() => navigation.navigate('TopicsList')}>
        <Text style={sharedStyles.text}>Full Listing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sharedStyles.button}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={sharedStyles.text}>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainMenu;
