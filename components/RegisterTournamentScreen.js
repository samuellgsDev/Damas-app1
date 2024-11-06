import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { TournamentsContext } from './TournamentsContext'; // Importe o contexto

const RegisterTournamentScreen = ({ navigation }) => {
  const { addTournament } = useContext(TournamentsContext); // Acesse o contexto

  const tournament = {
    id: Math.random().toString(), // Gerar um id único
    title: "Torneio Maranhense de Damas",
    date: "12/06/2023",
    location: "Centro de convenções",
    status: "pendente",
  };

  const handleAddTournament = () => {
    addTournament(tournament); // Adicione o torneio ao contexto
    navigation.navigate('ConfirmationTournament'); // Navegue para a tela de confirmação
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Torneio Maranhense de Damas</Text>

      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.tournamentImage} />

      <View style={styles.infoContainer}>
        {/* Detalhes do torneio */}
        <TouchableOpacity
          style={styles.infoButton}
          onPress={handleAddTournament} // Use a função para adicionar o torneio
        >
          <Text style={styles.infoButtonText}>Adicionar a seus torneios</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F4F4F4',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D9534F',
        marginBottom: 20,
    },
    tournamentImage: {
        width: 300,
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
    },
    infoContainer: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 15,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
    },
    descriptionContainer: {
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#D9534F',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    addButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default RegisterTournamentScreen;
