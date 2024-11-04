import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen';
import PasswordResetSuccessScreen from './components/PasswordResetSuccessScreen';
import AccountRegisteredSuccessScreen from './components/AccountRegisteredSuccessScreen';
import FirstAcessScreen from './components/FirstAcessScreen';
import ProfileSetupScreen from './components/ProfileSetupScreen';
import AddPhotoScreen from './components/AddPhotoScreen';
import RegisterCompleteScreen from './components/RegisterCompleteScreen';
import UserProfileScreen from './components/UserProfileScreen';

// Configuração do Stack Navigator
const Stack = createStackNavigator();
const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrar Conta' }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Recuperar Senha' }} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'Redefinir Senha' }} />
    <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccessScreen} options={{ title: 'Sucesso' }} />
    <Stack.Screen name="AccountRegisteredSuccess" component={AccountRegisteredSuccessScreen} options={{ title: 'Sucesso na Registro', headerShown: false }} />
    <Stack.Screen name="FirstAcess" component={FirstAcessScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} options={{ title: 'Configurar Perfil' }} />
    <Stack.Screen name="AddPhoto" component={AddPhotoScreen} options={{ title: 'Adicionar Foto' }} />
    <Stack.Screen name="RegisterComplete" component={RegisterCompleteScreen} options={{ title: 'Registrado com sucesso' }} />
    <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Perfil do usuário' }} />
  </Stack.Navigator>
);

// Configuração do Drawer Navigator
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName="Main">
    <Drawer.Screen name="Main" component={MainStack} options={{ title: 'Página Principal' }} />
    <Drawer.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Perfil do Usuário' }} />
    {/* Adicione mais telas aqui se necessário */}
  </Drawer.Navigator>
);

// Configuração principal do App
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
