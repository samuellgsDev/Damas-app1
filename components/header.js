import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-web';

export default function header() {
  return (
    <View style={styles.header}>
     <Image source={"./assets/dama.png"} style={styles.icon}/>
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
    width: 200,
    height: 65 ,
  },
});