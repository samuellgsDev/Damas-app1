// components/FirstAcessScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import UserTournament from './UserTournament';

const Adm = ({ navigation }) => {


  return (
    <View style={styles.container}>
      {/* Cabeçalho com nome do usuário */}
      <View style={styles.header}>
        <Text style={styles.username}>Admnistrador Anselmo Lima</Text>
      </View>
      <View style={styles.tournamentsSection}>
        <View style={styles.tournamentCard}>
          <Text style={styles.tournamentTitle}>Torneio Maranhense de Damas</Text>
          <View style = {styles.flex}>
          <Text style = {styles.cardText}>Data:{"\n"}12/06/2023</Text>
          <Text style = {styles.cardText}>Local:{"\n"}Castelinho</Text>
          <Text style = {styles.cardText}>Inscrições Pendentes:{"\n"}<Text style={{color : "red"}}>1</Text></Text>
          </View>
          <TouchableOpacity style={styles.moreInfoButton} onPress={() => navigation.navigate('AdmPayment')}>
            <Text style={styles.moreInfoButtonText}>Validar inscrições</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tournamentCard}>
          <Text style={styles.tournamentTitle}>Open de damas | Amador</Text>
          <View style = {styles.flex}>
          <Text style = {styles.cardText}>Data:{"\n"}02/12/2024</Text>
          <Text style = {styles.cardText}>Local:{"\n"}Costa Rodrigues</Text>
          <Text style = {styles.cardText}>Inscrições Pendentes:{"\n"}<Text style={{color : "red"}}></Text></Text>
          </View>
          <TouchableOpacity style={styles.moreInfoButton} >
            <Text style={styles.moreInfoButtonText}>Validar inscrições</Text>
          </TouchableOpacity>
        </View>

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
    paddingVertical: 40,
    alignItems: 'center',

  },
  flex : {
    flexDirection : 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    margin : 10,
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

export default Adm;
