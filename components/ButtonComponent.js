// /components/ButtonComponent.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#b33a3a',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ButtonComponent;
