import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen';
import PasswordResetSuccessScreen from './components/PasswordResetSuccessScreen';
import AccountRegisteredSuccessScreen from './components/AccountRegisteredSuccessScreen';

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
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ title: 'Redefinir Senha' }}
        />
        <Stack.Screen
          name="PasswordResetSuccess"
          component={PasswordResetSuccessScreen}
          options={{ title: 'Sucesso' }}
        />
        <Stack.Screen
          name="AccountRegisteredSuccess"
          component={AccountRegisteredSuccessScreen}
          options={{ title: 'Sucesso na Registro', headerShown: false }} // Mudei o título para clareza
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
