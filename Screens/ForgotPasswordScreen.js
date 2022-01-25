/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
const ForgotPassWordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn('onConfirmPressed');
    navigation.navigate('Home');
  };

  const onSigninPressed = () => {
    console.warn('onSignInPressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/background.png')}
        imageStyle={{
          opacity: 0.2,
          resizeMode: 'cover',
        }}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <Text style={{...styles.textInputName, marginTop: 20}}>
            Confirmation Code
          </Text>
          <CustomInput placeholder="" value={code} setValue={setCode} />

          <Text style={{...styles.textInputName, marginTop: 20}}>
            New Password
          </Text>
          <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
          />

          <View style={{marginTop: 30, marginBottom: 30}}>
            <CustomButton
              text="Send"
              onPress={onSubmitPressed}
              type="PRIMARY"
            />
          </View>

          <TouchableOpacity
            style={{marginLeft: 35, marginBottom: 100, alignContent: 'center'}}
            onPress={onSigninPressed}>
            <Text
              style={{
                fontFamily: 'Quicksand-Bold',
                color: 'grey',
                fontSize: 17,
              }}>
              Have an account?{' '}
              <Text style={{color: 'red'}}>Back to Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  textInputName: {
    color: '#f76d76',
    fontFamily: 'Quicksand-Bold',
    marginLeft: 23,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    margin: 10,
    color: 'black',
  },
  text: {
    color: 'grey',
    marginVertical: 10,
    fontFamily: 'Quicksand-SemiBold',
  },
  link: {
    color: 'red',
  },
});

export default ForgotPassWordScreen;
