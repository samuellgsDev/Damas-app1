import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação com backend
    // Se a autenticação for bem-sucedida, redireciona para a tela FirstAcessScreen

    navigation.navigate('FirstAcess'); // Navega para a tela FirstAcessScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>
      <Text style={styles.subtitle}>Realize o login para poder acessar todas as funcionalidades do app</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email ou CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Digite seu email ou CPF"
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Fazer login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
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
  loginButton: {
    backgroundColor: '#D9534F',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#D9534F',
    fontSize: 14,
    marginTop: 10,
  },
});

export default LoginScreen;
