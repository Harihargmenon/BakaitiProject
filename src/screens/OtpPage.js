//import react native essentials
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigations/AuthProvider';

//OTP screen after entering phone number
const OtpPage = ({navigation, confirmation}) => {
  const [otp, setOtp] = useState();
  const [otpError, setOtpError] = useState(false);
  const [otpErrorMessage, setOtpErrorMessage] = useState('');
  const [otpErrorMessage2, setOtpErrorMessage2] = useState('');
  const [otpErrorMessage3, setOtpErrorMessage3] = useState('');
  const [otpErrorMessage4, setOtpErrorMessage4] = useState('');
  const [otpErrorMessage5, setOtpErrorMessage5] = useState('');
  const [otpErrorMessage6, setOtpErrorMessage6] = useState('');

  const {verifyOtp} = useContext(AuthContext);

  const confirm = confirmation.params;

  console.log(confirm);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter OTP</Text>
      <FormInput
        labelValue={otp}
        onChangeText={userOtp => setOtp(userOtp)}
        placeholderText="Enter OTP"
        iconType="lock"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Verify"
        onPress={() => {
          if (otp.length === 6) {
            verifyOtp(otp, confirmation);
          } else {
            setOtpError(true);
            setOtpErrorMessage('Please enter a valid OTP');
          }
        }}
      />
      {otpError && <Text style={styles.errorMessage}>{otpErrorMessage}</Text>}
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By verifying, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default OtpPage;

//styling the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: '#e88832',
    marginBottom: 10,
  },
  textPrivate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  color_textPrivate: {
    color: '#000000',
  },
});
