/* eslint-disable react-hooks/exhaustive-deps */
// P2129509
// Lee Wee Teck
// DIT1B04
// Login.js

/* eslint-disable react-native/no-inline-styles  */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Button,
} from 'react-native';

import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

// imports for social media icons
import {TwitterSocialButton} from 'react-native-social-buttons';
import {FacebookSocialButton} from 'react-native-social-buttons';

// import firebase
// import {auth} from '../firebase';
import {authentication} from '../firebase';
// import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import * as Animatable from 'react-native-animatable';

// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function LoginPage({navigation}) {
  // GoogleSignin.configure({
  //   webClientId:
  //     '577222033697-ssnh0fusb7ndl0v819o2i4ad085gkils.apps.googleusercontent.com',
  // });

  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

  const [data, setData] = React.useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  useEffect(() => {
    const login = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('AppStackScreen');
      }
    });
    return login;
  }, []);

  const handleEmailChange = val => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        email: val,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handleLogin = () => {
    authentication
      .signInWithEmailAndPassword(data.email, data.password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ', user.email);
      })
      .catch(error => Alert.alert(error.message));
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require('../image/background.png')}
          imageStyle={{
            opacity: 0.1,
            resizeMode: 'cover',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../image/Icons/Logo.png')}
              resizeMode="contain"
              style={{width: 100, height: 100, marginTop: 30}}
            />
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Quicksand-Bold',
                alignItems: 'center',
              }}>
              GreenLife
            </Text>
          </View>

          <View style={{marginHorizontal: 30, marginTop: 20}}>
            <Text style={{fontFamily: 'Quicksand-Bold', fontSize: 34}}>
              Sign In
            </Text>
            <Text
              style={{
                fontFamily: 'Quicksand-SemiBold',
                color: 'grey',
                marginTop: 10,
              }}>
              Welcome Back, happy you're here!
            </Text>
          </View>
          <Text style={styles.textInputName}>Email</Text>
          <CustomInput
            placeholder="example@email.com"
            autoCapitalize="none"
            setValue={val => handleEmailChange(val)}
            onEndEditing={e => {
              handleValidUser(e.nativeEvent.text);
            }}
          />
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Invalid Email format.</Text>
            </Animatable.View>
          )}

          <Text style={{...styles.textInputName, marginTop: 20}}>Password</Text>
          <CustomInput
            setValue={val => handlePasswordChange(val)}
            secureTextEntry={true}
          />
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <CustomButton text="Sign In" onPress={handleLogin} type="PRIMARY" />

          {/* <TouchableOpacity onPress={handleLogin}>
            <Text> Sign in</Text>
          </TouchableOpacity> */}
          <View
            style={{flexDirection: 'row', marginTop: 30, marginHorizontal: 36}}>
            <TwitterSocialButton
              buttonText={'Twitter'}
              textStyle={{
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingBottom: 6,
              }}
              buttonViewStyle={{width: 150}}
              // onPress={signInWithGoogleAsync}
            />
            <FacebookSocialButton
              buttonText={'Facebook'}
              textStyle={{
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingBottom: 6,
              }}
              buttonViewStyle={{width: 150}}
              onPress={() => {
                Alert.alert('Logged In Using Facebook');
              }}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 50, marginBottom: 150}}>
            <TouchableOpacity
              style={{marginLeft: 25}}
              onPress={onForgotPasswordPressed}>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  color: 'grey',
                  fontSize: 17,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 96}}
              onPress={onSignUpPressed}>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  color: 'red',
                  fontSize: 17,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInputName: {
    color: '#f76d76',
    fontFamily: 'Quicksand-Bold',
    marginLeft: 23,
    marginTop: 20,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 21,
    marginTop: 5,
  },
});
