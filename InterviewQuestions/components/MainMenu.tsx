import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, 'MainMenu'>;
}

const MainMenu: React.FC<MainMenuProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Select a Study Mode</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TopicsList')}>
        <Text style={styles.text}>Question Listing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.text}>Random Question Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
  },
});

export default MainMenu;
