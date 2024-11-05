import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const TournamentScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Lista de torneios (mock data)
  const torneios = [
    {
      id: '1',
      title: 'Torneio Maranhense de Damas',
      date: '12/06/2023',
      location: 'Castelinho',
    },
    {
      id: '2',
      title: 'Torneio Maranhense de Damas',
      date: '12/06/2023',
      location: 'Castelinho',
    },
    {
      id: '3',
      title: 'Torneio Maranhense de Damas',
      date: '12/06/2023',
      location: 'Castelinho',
    },
  ];

  // Função para renderizar cada card de torneio
  const renderTorneio = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.torneioTitle}>{item.title}</Text>
      <Text style={styles.torneioDetail}>Data: {item.date}</Text>
      <Text style={styles.torneioDetail}>Local: {item.location}</Text>
      <TouchableOpacity style={styles.infoButton}>
        <Text style={styles.infoButtonText}>Mais informações</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Torneios</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Cidade, nome do torneio, categoria"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={torneios}
        renderItem={renderTorneio}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.torneioList}
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
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  torneioList: {
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
  torneioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  torneioDetail: {
    fontSize: 14,
    color: '#666666',
  },
  infoButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  infoButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default TournamentScreen;
