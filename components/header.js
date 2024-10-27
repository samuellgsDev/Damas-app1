import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.icon}>icone damas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 24,
  },
});