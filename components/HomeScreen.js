import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './header';
import WelcomeText from './WelcomeText';
import Button from './Button';
import SupportText from './SupportText';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <WelcomeText />
        <Button
          text="Fazer login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          text="Registrar conta"
          onPress={() => navigation.navigate('Register')}
        />
        <SupportText url="https://suporte.example.com" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  content: {
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
  },
});