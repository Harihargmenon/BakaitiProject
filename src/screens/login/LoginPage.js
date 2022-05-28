// create a login page with google auth

import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import CheckBox from '@react-native-community/checkbox';

export const LoginPage = () => {
  const [email, setEmail] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <View>
        <View>
          <Text>EmailID</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput placeholder="Password" />
        </View>
        <View>
          <CheckBox />
          <Text>Remember me</Text>
        </View>
        <Button title="Login" />
      </View>
      <View>
        <Button title="Login with Google" />
        <Text>New here? SIGN UP!</Text>
      </View>
    </View>
  );
};
