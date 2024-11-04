// components/DrawerNavigation.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import UserProfileScreen from './UserProfileScreen';
// Importe outras telas que você deseja adicionar ao Drawer aqui

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Página Principal' }} />
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Perfil do Usuário' }} />
      {/* Adicione mais telas aqui se necessário */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
