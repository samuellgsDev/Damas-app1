import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'; // Tela inicial com opções de login e registro
import LoginScreen from './components/LoginScreen'; // Tela de login
import RegisterScreen from './components/RegisterScreen'; // Tela de registro
import ForgotPasswordScreen from './components/ForgotPasswordScreen'; // Tela de esquecer senha

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registrar Conta' }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: 'Recuperar Senha' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
