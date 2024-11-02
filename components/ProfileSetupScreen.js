import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileSetupScreen = () => {
  const navigation = useNavigation(); // Hook para acessar o objeto navigation
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpfError, setCpfError] = useState(false);

  // Função de validação do CPF
  const validarCpf = (cpf) => {
    cpf = cpf.replace(/\D/g, ''); 
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  };

  // Função para tratar o clique no botão Salvar informações
  const handleSave = () => {
    if (!validarCpf(cpf)) {
      setCpfError(true);
    } else {
      setCpfError(false);
      // Lógica para salvar as informações e navegar para AddPhotoScreen
      navigation.navigate('AddPhoto'); // Direciona para AddPhotoScreen
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Usuário Jonson</Text>
        <Text style={styles.subtitle}>
          Seu cadastro está incompleto, para ter acesso a todas as funcionalidades do app, preencha os dados abaixo
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />
        {cpfError && <Text style={styles.errorText}>Campo CPF está incorreto</Text>}

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar informações</Text>
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
  username: {
    color: '#D9534F',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    margin: 20,
  },
  input: {
    height: 50,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F6F6F6',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#D9534F',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default ProfileSetupScreen;
