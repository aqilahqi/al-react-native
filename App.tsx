// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/navigation/tabs';

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
