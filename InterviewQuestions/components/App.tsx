import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTheme} from './ThemeProvider';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={theme === 'dark' ? styles.darkText : styles.lightText}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#333',
  },
  light: {
    backgroundColor: '#FFF',
  },
  darkText: {
    color: '#FFF',
  },
  lightText: {
    color: '#333',
  },
});

export default App;
