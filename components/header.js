// /components/Header.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'Damas\assets\dama.png' }}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333333',
    width: '100%',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Header;
