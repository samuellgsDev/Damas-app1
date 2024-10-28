// components/ResetPasswordScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => { // Adicione { navigation } como parâmetro
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Senha redefinida com sucesso!');
      navigation.navigate('PasswordResetSuccess'); // Navega para a tela de sucesso
    } else {
      console.log('As senhas não coincidem');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir senha</Text>
      <Text style={styles.subtitle}>
        Perfeito, encontramos sua conta, agora basta digitar sua nova senha desejada
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua nova senha"
          placeholderTextColor="#CFCFCF"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua nova senha"
          placeholderTextColor="#CFCFCF"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#A5A5A5',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#EDEDED',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 15,
    color: '#333333',
  },
  button: {
    backgroundColor: '#D9534F',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
