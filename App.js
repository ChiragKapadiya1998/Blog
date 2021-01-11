import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/Screen/IndexScreen';
import { Provider } from './src/Context/BlogContext';
import ShowScreen from './src/Screen/ShowScreen';
import CreateScreen from "./src/Screen/CreateScreen";

 const Stack = createStackNavigator();
const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen name="IndexScreen" component={IndexScreen} />
         <Stack.Screen name="ShowScreen" component={ShowScreen} />
         <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
