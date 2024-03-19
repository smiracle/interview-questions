import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {sharedStyles} from './_Styles';

const brainImage = require('../images/menus/brain.png');

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, 'MainMenu'>;
}

const MainMenu: React.FC<MainMenuProps> = ({navigation}) => {
  return (
    <View style={sharedStyles.container}>
      {/* <Image style={{width: 100}} resizeMode="contain" source={brainImage} /> */}
      <Text style={sharedStyles.header}>Welcome. Select a Study Mode:</Text>
      <TouchableOpacity
        style={sharedStyles.button}
        onPress={() => navigation.navigate('TopicsList')}>
        <Text style={sharedStyles.buttonText}>Full Listing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sharedStyles.button}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={sharedStyles.buttonText}>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainMenu;
