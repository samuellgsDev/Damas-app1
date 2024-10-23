// /components/Content.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';
import HelpSection from './HelpSection';

const Content = () => {
  const handleLogin = () => {
    Alert.alert('Login', 'Você clicou em Fazer login');
  };

  const handleRegister = () => {
    Alert.alert('Registrar', 'Você clicou em Registrar conta');
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Bem vindo ao aplicativo da federação de damas!</Text>
      <ButtonComponent title="Fazer login" onPress={handleLogin} />
      <ButtonComponent title="Registrar conta" onPress={handleRegister} />
      <HelpSection />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    padding: 20,
    width: 300,
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Content;