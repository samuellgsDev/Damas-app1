// /components/HelpSection.js

import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';

const HelpSection = () => {
  return (
    <Text style={styles.help}>
      Precisa de ajuda? Clique{' '}
      <Text style={styles.link} onPress={() => Linking.openURL('https://suporte.exemplo.com')}>
        aqui
      </Text>{' '}
      para falar com suporte
    </Text>
  );
};

const styles = StyleSheet.create({
  help: {
    fontSize: 14,
    color: '#333333',
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#b33a3a',
    textDecorationLine: 'underline',
  },
});

export default HelpSection;
