import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FooterNavigation from './navigation/FooterNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <FooterNavigation />
    </NavigationContainer>
  );
};

export default App;
