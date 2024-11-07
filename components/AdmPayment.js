// components/FirstAcessScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AdmFinal from './AdmFInal';
const AdmPayment = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Carrega a foto salva do AsyncStorage ao abrir a tela
    const loadImage = async () => {
      try {
        const savedImageUri = await AsyncStorage.getItem('profilePhotoUri');
        if (savedImageUri) {
          setSelectedImage(savedImageUri);
        }
      } catch (error) {
        console.error('Erro ao carregar a foto do AsyncStorage:', error);
      }
    };

    loadImage();
  }, []);

  // Função para verificar permissão de câmera
  const checkCameraPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== 'granted') {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      return permission.granted;
    }
    return true;
  };

  // Função para verificar permissão de galeria
  const checkGalleryPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      return permission.granted;
    }
    return true;
  };
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const handleTakePhoto = async () => {
    const hasPermission = await checkCameraPermission();
    if (!hasPermission) {
      Alert.alert("Permissão negada", "É necessário permitir o acesso à câmera para tirar uma foto.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleChooseFromGallery = async () => {
    const hasPermission = await checkGalleryPermission();
    if (!hasPermission) {
      Alert.alert("Permissão negada", "É necessário permitir o acesso à galeria para escolher uma foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      Alert.alert("Foto salva!", "Sua foto foi salva com sucesso.");
      navigation.navigate('PaymentComplete'); // Navega para a tela de sucesso
    }
  };

  const handleSavePhoto = async () => {
    try {
      // Salva o URI da foto no AsyncStorage
      await AsyncStorage.setItem('profilePhotoUri', selectedImage || '');
      Alert.alert("Foto salva!", "Sua foto foi salva com sucesso.");
      navigation.navigate('RegisterComplete'); // Navega para a tela de sucesso
    } catch (error) {
      console.error('Erro ao salvar a foto no AsyncStorage:', error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar a foto.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com nome do usuário */}

      <Text style={styles.title}>Torneio Maranhense de Damas</Text>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.yhqkR9B2hKbtwwZ8bPNbQQHaHw&pid=Api&P=0&h=180' }} style={styles.profileImage} />
        </View>
      <View style={styles.textContainer}>
        <View style={styles.flex}>
          <Text style={styles.bold}>CPF:</Text>
          <Text style={styles.comom}>009.176.113-14</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>CEP:</Text>
          <Text style={styles.comom}>65074860</Text>
        </View>

      </View>
      <View style={styles.textContainer}>
        <View style={styles.flex}>
          <Text style={styles.bold}>Nome completo:</Text>
          <Text style={styles.comom}>Igor Lima Pereira</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.bold}>Nome de usuário:</Text>
          <Text style={styles.comom}>Igor</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.flex}>
          <Text style={styles.bold}>Telefone</Text>
          <Text style={styles.comom}>(98)981004524</Text>
        </View>
      </View>
      <Image
        source={{ uri: 'https://meutudo.com.br/blog/wp-content/uploads/2022/07/comprovante-pagamento-pix-nubank.jpg' }}//substiruir pela imagem do usuário
        style={styles.pagamento}
      />
      <TouchableOpacity style={styles.moreInfoButtong}   onPress={() => navigation.navigate('AnaliseFeita')}>
        <Text style={styles.moreInfoButtonText}>Aceitar comprovante</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreInfoButton}   onPress={() => navigation.navigate('AnaliseFeita')}>
        <Text style={styles.moreInfoButtonText}>Negar comprovante</Text>
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
  pagamento : {
    width : 250,
    height: 250,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom : 30,
  },
  flex: {
    flex: 3,
    margin: 5,
  },
  comom : {
    textAlign: 'center'
  },
  orange : {
    fontWeight : 700,
    color: "orange",
    textAlign : 'center',
    marginBottom: 7,
  },
  nova : {
    textAlign : 'center',
    fontWeight : 200,
    marginBottom : 5,
  },
  pix  : {
    width: '70%',
    marginTop : 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    marginBottom : 35, 
  },
  bold: {
    fontWeight: '700',

    textAlign: 'center',

  },
  textContainer: {
    width: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row'

  },
  description: {
    width: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 25,
  },
  profileImage: {
    width: 150,
    height: 150,
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
  moreInfoButtong: {
    backgroundColor: '#4EB160',
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

export default AdmPayment;
