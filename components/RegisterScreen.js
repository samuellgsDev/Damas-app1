import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
// add logica
    navigation.navigate('AccountRegisteredSuccess'); // Navega para a tela de sucesso
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar conta</Text>
      <Text style={styles.subtitle}>Registre sua conta com suas credenciais e tenha acesso a todas as funcionalidades do app</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Digite seu email"
          placeholderTextColor="#C7C7CD"
        />

        <Text style={styles.label}>Primeiro nome (nome de usuário)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Digite seu nome de usuário"
          placeholderTextColor="#C7C7CD"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Digite sua senha"
          placeholderTextColor="#C7C7CD"
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#AAA',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#F6F6F6',
  },
  registerButton: {
    backgroundColor: '#D9534F',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
