import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddPhotoScreen = ({ navigation }) => {
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
      <Text style={styles.instructions}>
        Para finalizar, precisaremos de uma foto sua. Dê preferência a fotos bem iluminadas onde seu rosto apareça.
      </Text>
      
      <View style={styles.photoContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.photoPlaceholder} />
        ) : (
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.photoPlaceholder} />
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
        <Text style={styles.buttonText}>Tirar foto</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>OU</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleChooseFromGallery}>
        <Text style={styles.buttonText}>Escolher foto da galeria</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: '#D9534F' }]} // Sempre deixa o botão com a cor ativa
        onPress={handleSavePhoto}
      >
        <Text style={styles.saveButtonText}>Salvar informações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5E5E5',
  },
  button: {
    backgroundColor: '#D9534F',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#888',
  },
  saveButton: {
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#D9534F', // Botão sempre com cor ativa
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AddPhotoScreen;
