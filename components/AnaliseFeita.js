import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AnaliseFeita = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalBox}>
        <Text style={styles.title}>Comprovante analisado com sucesso!</Text>
        <Text style={styles.message}>
          Você aprovou o comprovante de um usuário!
        </Text>
        
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdmFinal')} // Direciona o usuário para a tela Home ou outra tela inicial
        >
          <Text style={styles.buttonText}>Voltar a tela principal de ADM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor do fundo semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#D9534F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  successIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AnaliseFeita;
