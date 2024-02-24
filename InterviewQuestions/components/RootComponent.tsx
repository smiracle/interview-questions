import React from 'react';
import App from './App';
import {ThemeProvider} from './ThemeProvider';

const RootComponent = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default RootComponent;
