import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationTournamentScreen = ({ navigation }) => {
  const handleBackToHomePage = () => {
    navigation.navigate('HomePage'); // Corrigido para 'HomePage'
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Torneio adicionado!</Text>
        <Text style={styles.subtitle}>
          Agora você pode acessar sua página principal, realizar o pagamento da taxa e finalizar sua inscrição!
        </Text>
        
        <View style={styles.iconContainer}>
          <Text style={styles.emoji}>😊</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleBackToHomePage}>
          <Text style={styles.buttonText}>Voltar à página principal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  messageContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#D9534F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 40,
  },
  button: {
    backgroundColor: '#D9534F',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfirmationTournamentScreen;
