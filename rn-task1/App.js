import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FooterNavigation from './navigation/FooterNavigation';
import StackNavigator from './navigation/StackNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <FooterNavigation />
      <StackNavigator/>
    </NavigationContainer>
  );
};

export default App;
