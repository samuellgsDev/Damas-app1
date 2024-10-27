import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';

export default function SupportText({ url }) {
  return (
    <Text style={styles.supportText}>
      Precisa de ajuda? Clique{' '}
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        aqui
      </Text>{' '}
      para falar com suporte
    </Text>
  );
}

const styles = StyleSheet.create({
  supportText: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
