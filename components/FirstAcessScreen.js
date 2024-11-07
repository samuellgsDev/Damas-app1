// components/FirstAcessScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const FirstAcessScreen = ({ navigation }) => {
  const handleCompleteRegistration = () => {
    navigation.navigate('ProfileSetup');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com nome do usuário */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}//substiruir pela imagem do usuário
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.username}>Usuário Igor</Text>
      </View>

      {/* Conteúdo de boas-vindas */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bem vindo ao app!</Text>
        <Text style={styles.message}>
          Aqui você poderá participar de diversos campeonatos de damas, Além de poder validar sua inscrição!
        </Text>
        <Text style={styles.message}>
          Mas te acalma! Antes de poder te inscrever em campeonatos, precisamos de algumas informações suas pra terminar seu cadastro.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleCompleteRegistration}>
          <Text style={styles.buttonText}>Finalizar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#333333',
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    color: '#D9534F',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D9534F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FirstAcessScreen;
