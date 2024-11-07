import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function WelcomeText() {
  return (
    <Text style={styles.welcomeText}>
      Bem vindo ao DamApp
    </Text>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    width: '70%',
    marginTop : -30,
  },
});
