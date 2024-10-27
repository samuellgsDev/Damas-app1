import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function WelcomeText() {
  return (
    <Text style={styles.welcomeText}>
      Bem vindo ao aplicativo da federação de damas!
    </Text>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
