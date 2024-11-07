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
import Championship from './components/Championship';
import Torneio from './components/Torneio';
import ChampionshipAfter from './components/ChampionshipAfter';
import TorneioTwo from './components/TorneioTwo';
import ChampionshipFinal from './components/ChampionshipFinal';
import UserTournament from './components/UserTournament';
import UserTournamentFinal from './components/UserTournamentFinak';
import Pagamento from './components/Pagamento';
import PaymentComplete from './components/PaymentComplete';
import UserTournamentPaid from './components/UserTournamentPaid';
import PaidTournament  from './components/PaidTournament';
import header from './components/header';
import Adm from './components/Adm';
import AdmPayment from './components/AdmPayment';
import AdmFinal from './components/AdmFInal';
import AnaliseFeita from './components/AnaliseFeita';
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
    <Stack.Screen name="RegisterComplete" component={RegisterCompleteScreen} options={{ headerShown : false, }} />
    <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ headerShown : false}} />
    <Stack.Screen name="Tournament" component={Championship} options={{ title: 'Torneios' }} />
    <Stack.Screen name="Torneio" component={Torneio} options={{ headerShow: false}} />
    <Stack.Screen name="ChampionshipAfter" component={ChampionshipAfter} options={{ headerShown: false}} />
    <Stack.Screen name="TorneioTwo" component={TorneioTwo} options={{ headerShown: false}} />
    <Stack.Screen name="ChampionshipFinal" component={ChampionshipFinal} options={{ headerShown: false}} />
    <Stack.Screen name="UserTournament" component={UserTournament} options={{ headerShown: false}} />
    <Stack.Screen name="UserTournamentFinal" component={UserTournamentFinal} options={{ headerShown: false}} />
    <Stack.Screen name="Pagamento" component={Pagamento} options={{ headerShown: false}} />
    <Stack.Screen name="PaymentComplete" component={PaymentComplete} options={{ headerShown: false}} />
    <Stack.Screen name="UserTournamentPaid" component={UserTournamentPaid} options={{ headerShown: false}} />
    <Stack.Screen name="PaidTournament" component={PaidTournament} options={{ headerShown: false}} />
    <Stack.Screen name="Adm" component={Adm} options={{ headerShown: false}} />
    <Stack.Screen name="AdmPayment" component={AdmPayment} options={{ headerShown: false}} />
    <Stack.Screen name="AdmFinal" component={AdmFinal} options={{ headerShown: false}} />
    <Stack.Screen name="AnaliseFeita" component={AnaliseFeita} options={{ headerShown: false}} />

  </Stack.Navigator>
);

// Configuração do Drawer Navigator
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName="Main">
    <Drawer.Screen name="Main" component={MainStack} options={{ title: '' }} />
    <Drawer.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Perfil do Usuário' }} />
    <Drawer.Screen name="MainPage" component={UserTournament} options={{ title: 'Seus Torneios' }} />
    <Drawer.Screen name="Championship" component={Championship} options={{ title: 'Torneios' }} />
    
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
