// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';
import Content from './components/Content';
import Login from './components/LoginScreen'; // Importe a nova tela de Login

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Content">
        <Stack.Screen
          name="Content"
          component={Content}
          options={{
            header: () => <Header />, // Mantendo o header personalizado
          }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
