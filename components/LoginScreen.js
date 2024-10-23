import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Email:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10 }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text>Senha:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10 }}
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Entrar" onPress={() => console.log('Login realizado')} />
    </View>
  );
};

export default Login;
