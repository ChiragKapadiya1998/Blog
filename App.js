import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/Screen/IndexScreen';
import {BlogProvider } from './src/Context/BlogContext';

 const Stack = createStackNavigator();
const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
