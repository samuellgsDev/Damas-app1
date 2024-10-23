// /components/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from './header';
import HelpSection from './HelpSection';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Bem vindo ao aplicativo da federação de damas!</Text>
        <Button title="Fazer login" onPress={() => navigation.navigate('Login')} />
        <Button title="Registrar conta" onPress={() => alert('Funcionalidade de Registro')} />
        <HelpSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
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

export default HomeScreen;
