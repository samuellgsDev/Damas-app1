import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UserProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.label}>CPF</Text>
          <Text>009.176.113-14</Text>

          <Text style={styles.label}>Nome completo</Text>
          <Text>Jonson Jonson de J</Text>

          <Text style={styles.label}>CEP</Text>
          <Text>65074-860</Text>

          <Text style={styles.label}>Nome de Usuário</Text>
          <Text>Jonson</Text>

          <Text style={styles.label}>Telefone</Text>
          <Text>(98) 981004524</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Alterar informações e foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tournamentsSection}>
        <Text style={styles.sectionTitle}>Seus torneios passados</Text>
        <View style={styles.tournamentCard}>
          <Text style={styles.tournamentTitle}>Torneio Maranhense de Damas</Text>
          <Text>Data: 12/06/2023</Text>
          <Text>Local: Castelinho</Text>
          {/* Botão de Mais Informações com Navegação para TournamentDetailsScreen */}
          <TouchableOpacity 
            style={styles.moreInfoButton} 
            onPress={() => navigation.navigate('TournamentDetails')}
          >
            <Text style={styles.moreInfoButtonText}>Mais informações</Text>
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  menuText: {
    fontSize: 24,
    color: '#D9534F',
  },
  profileContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tournamentsSection: {
    marginTop: 20,
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

export default UserProfileScreen;
