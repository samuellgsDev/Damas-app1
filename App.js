// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/header';
import Content from './components/Content';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
});

export default App;
