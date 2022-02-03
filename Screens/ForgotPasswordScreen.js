// P2129509
// Lee Wee Teck
// DIT1B04
// ForgotPasswordScreen.js

/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';

import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

// import firebase authentication
// import {authentication} from '../firebase';
import * as firebase from 'firebase';

const ForgotPassWordScreen = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const onSigninPressed = () => {
    navigation.navigate('LoginScreen');
  };

  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        Alert.alert('Please check your email.');
        navigation.navigate('LoginScreen');
      })
      .catch(function (e) {
        Alert.alert(e.message);
      });
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../image/background.png')}
        imageStyle={{
          opacity: 0.2,
          resizeMode: 'cover',
        }}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <Text style={{...styles.textInputName, marginTop: 50}}>
            Confirmation Code
          </Text>
          <CustomInput
            placeholder="Enter your Email"
            value={email}
            setValue={setEmail}
            secureTextEntry={false}
            mode="none"
          />

          <View style={{marginTop: 40, marginBottom: 30}}>
            <CustomButton
              text="Change Password"
              onPress={resetPassword}
              type="PRIMARY"
            />
          </View>

          <TouchableOpacity
            style={{marginLeft: 35, marginBottom: 380, alignContent: 'center'}}
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
    marginTop: 30,
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
