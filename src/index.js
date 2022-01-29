import 'react-native-gesture-handler';

import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="rgba(39, 39, 39, 1)" />
        <Routes />
      </NavigationContainer>
  );
}
