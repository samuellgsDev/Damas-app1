import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { TournamentsContext } from './TournamentsContext';

const HomePageScreen = ({ navigation }) => {
  const { addedTournaments } = useContext(TournamentsContext);

  const renderTournament = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tournamentTitle}>{item.title}</Text>
      <Text style={styles.tournamentDetail}>Data: {item.date}</Text>
      <Text style={styles.tournamentDetail}>Local: {item.location}</Text>
      <Text style={[styles.tournamentStatus, { color: item.status === 'aprovada' ? 'green' : 'red' }]}>
        Status da inscrição: {item.status}
      </Text>
      <TouchableOpacity 
        style={styles.infoButton}
        onPress={() => navigation.navigate('RegisterTournament', { tournamentId: item.id })}
      >
        <Text style={styles.infoButtonText}>Mais informações</Text>
      </TouchableOpacity>
    </View>
);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Seus próximos torneios</Text>
      <FlatList
        data={addedTournaments}
        renderItem={renderTournament}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.tournamentList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9534F',
    textAlign: 'center',
    marginBottom: 10,
  },
  tournamentList: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tournamentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  tournamentDetail: {
    fontSize: 14,
    color: '#666666',
  },
  tournamentStatus: {
    fontSize: 14,
    color: (item) => item.status === 'aprovada' ? 'green' : 'red', // Correção aqui
    marginBottom: 10,
},

  infoButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  infoButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default HomePageScreen;
