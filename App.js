import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/Screen/IndexScreen';
import { Provider } from './src/Context/BlogContext';
import ShowScreen from './src/Screen/ShowScreen';
import CreateScreen from "./src/Screen/CreateScreen";
import EditScreen from './src/Screen/EditScreen';

 const Stack = createStackNavigator();
const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen name="IndexScreen" component={IndexScreen}   options={{ title: 'BLOG' }} />
         <Stack.Screen name="ShowScreen" component={ShowScreen}    />
         <Stack.Screen name="CreateScreen" component={CreateScreen}  />
         <Stack.Screen name="EditScreen" component={EditScreen}  />
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
