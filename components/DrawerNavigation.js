// components/DrawerNavigation.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePageScreen from './HomePageScreen';
import UserProfileScreen from './UserProfileScreen';
import TournamentScreen from './TournamentScreen';
// Importe outras telas que você deseja adicionar ao Drawer aqui

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen name="HomePage" component={HomePageScreen} options={{ title: 'Página Principal' }} />
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Perfil do Usuário' }} />
      <Drawer.Screen name="Tournament" component={TournamentScreen} options={{ title: 'Torneios' }} />
      {/* Adicione mais telas aqui se necessário */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
