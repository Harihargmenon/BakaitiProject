import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export const SignupPage = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <View>
        <View>
          <Text>EmailID</Text>
          <TextInput placeholder="Email" />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput placeholder="Password" />
        </View>
        <View>
          <Button title="Login" />
        </View>
      </View>
      <View>
        <Button title="Login with Google" />
        <Text>Already a user? LOGIN!</Text>
      </View>
    </View>
  );
};
