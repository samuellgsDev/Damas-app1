import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TournamentDetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Torneio Maranhense de Damas</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.value}>12/06/2023</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Cidade:</Text>
          <Text style={styles.value}>São Luís</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Tipo de torneio:</Text>
          <Text style={styles.value}>Aberto</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Local:</Text>
          <Text style={styles.value}>Castelinho</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Sua posição:</Text>
          <Text style={styles.value}>3º</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Campeão:</Text>
          <Text style={styles.value}>João Das Damas</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Descrição e observações:</Text>
      <Text style={styles.sectionContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Baixar documento da competição</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9534F',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#333333',
  },
  value: {
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D9534F',
    width: '100%',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 14,
    color: '#666666',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TournamentDetailsScreen;
