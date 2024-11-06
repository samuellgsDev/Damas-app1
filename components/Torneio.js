// components/FirstAcessScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Torneio = ({ navigation }) => {


  return (
    <View style={styles.container}>
      {/* Cabeçalho com nome do usuário */}

      <Text style={styles.title}>Torneio Maranhense de Damas</Text>
      <Image
        source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.1h8oC6nBldTAznROzbPgwgHaEK&pid=Api&P=0&h=180' }}//substiruir pela imagem do usuário
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <View style={styles.flex}>
          <Text style={styles.bold}>Data:</Text>
          <Text style={styles.comom}>12/06/2023</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Local:</Text>
          <Text style={styles.comom}>Castelinho</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Horário:</Text>
          <Text style={styles.comom}>13:00</Text>
        </View>

      </View>
      <View style={styles.textContainer}>
        <View style={styles.flex}>
          <Text style={styles.bold}>Cidade:</Text>
          <Text style={styles.comom}>16/02/2024</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Organizador:</Text>
          <Text style={styles.comom}>Jorge Serejo</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Taxa Inscrição:</Text>
          <Text style={styles.comom}>15 reais</Text>
        </View>

      </View>
      <View style={styles.textContainer}>
        <View style={styles.flex}>
          <Text style={styles.bold}>Contato:</Text>
          <Text style={styles.comom}>(98)981004524</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Premiação</Text>
          <Text style={styles.comom}>1.000</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Categoria</Text>
          <Text style={styles.comom}>Aberto</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.bold}>Descrição e observações</Text>
        <Text style={styles.comom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <TouchableOpacity style={styles.moreInfoButton}  onPress={() => navigation.navigate('ChampionshipAfter')}>
        <Text style={styles.moreInfoButtonText}>Adiocionar aos torneios</Text>
      </TouchableOpacity>
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
  flex: {
    flex: 3,
  },
  bold: {
    fontWeight: '500'
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row'

  },
  description: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
  },
  profileImage: {
    width: '80%',
    height: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
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
    marginTop: 20,
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
    marginLeft: 'auto',
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
    marginBottom: 20,
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
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  moreInfoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Torneio;
