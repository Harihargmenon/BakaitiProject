//import react native essentials
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigations/AuthProvider';

//login page using phone number
const LoginPhonePage = ({navigation}) => {
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [phoneErrorMessage2, setPhoneErrorMessage2] = useState('');
  const [phoneErrorMessage3, setPhoneErrorMessage3] = useState('');
  const [phoneErrorMessage4, setPhoneErrorMessage4] = useState('');
  const [phoneErrorMessage5, setPhoneErrorMessage5] = useState('');
  const [phoneErrorMessage6, setPhoneErrorMessage6] = useState('');

  const {loginPhone, googleLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>The Bakaiti Project</Text>
      <FormInput
        labelValue={phone}
        onChangeText={userPhone => setPhone(userPhone)}
        placeholderText="Enter Phone Number"
        iconType="phone"
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Next"
        onPress={() => {
          if (phone.length === 10) {
            loginPhone(phone);
          } else {
            setPhoneError(true);
            setPhoneErrorMessage('Please enter a valid phone number');
          }
        }}
      />
      {phoneError && (
        <Text style={styles.errorMessage}>{phoneErrorMessage}</Text>
      )}
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
          <SocialButton
            buttonTitle="Sign In using Email"
            btnType="email"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default LoginPhonePage;

//styling the page
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
