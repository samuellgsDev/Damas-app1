// components/AccountRegisteredSuccessScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AccountRegisteredSuccessScreen = ({ navigation }) => {
    console.log("AccountRegisteredSuccessScreen foi chamado"); // Log para debug
    const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Conta registrada com sucesso!</Text>
        <Text style={styles.subtitle}>
        Agora você pode utilizar suas credenciais para acessar as funcionalidades do nosso aplicativo!
        </Text>
        
        <View style={styles.iconContainer}>
          <Text style={styles.emoji}>😊</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleBackToLogin}>
          <Text style={styles.buttonText}>Voltar ao login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '85%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9534F',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  emoji: {
    fontSize: 40,
  },
  button: {
    backgroundColor: '#D9534F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountRegisteredSuccessScreen;
