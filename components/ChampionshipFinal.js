// components/FirstAcessScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ChampionshipFinal = ({ navigation }) => {


  return (
    <View style={styles.container}>
      {/* Cabeçalho com nome do usuário */}
      <View style={styles.header}>
        <Image source={"./assets/dama.png"} style ={styles.profileImage}/>
      </View>
      <Text style={styles.title}>Torneios Futuros</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.message}>
          Parece que acabaram os torneios por aqui! Para acessar os torneios que você adiocionou ao perfil, basta clicar no botão abaixo ou ir para a aba "Seus Torneios"
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserTournamentFinal')}>
          <Text style={styles.buttonText}>Seus Torneios </Text>
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
    width: 200,
    height: 65 ,
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
    marginTop : 20,
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
  tournamentsSection: {
    marginTop: 20,
    width: '80%',
    marginRight: 'auto',
    marginLeft : 'auto',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9534F',
    marginBottom: 10,
  },
  tournamentCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom : 20,
  },
  tournamentTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  moreInfoButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 8,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  moreInfoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ChampionshipFinal;
