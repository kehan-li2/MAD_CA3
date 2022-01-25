/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-native/no-inline-styles  */

// import * as React from 'react';
// import {View, Text, Button} from 'react-native';

// export default function LoginPage({navigation}) {

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Login</Text>
//       <Button
//         title="No account -- SignUp"
//         onPress={() => navigation.navigate('SignUpScreen')}>
//         No account -- SignUp
//       </Button>
//       <View style={{paddingTop: 50}}>
//         <Button
//           title="have account -- Login to homepage"
//           onPress={() => navigation.navigate('AppStackScreen')}>
//           No account -- SignUp
//         </Button>
//       </View>
//     </View>
//   );
// }

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
} from 'react-native';

import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

// imports for social media icons
import {TwitterSocialButton} from 'react-native-social-buttons';
import {FacebookSocialButton} from 'react-native-social-buttons';

import AsyncStorage from '@react-native-community/async-storage';

const userInfo = {username: 'admin', password: 'pass12345'};

export default function LoginPage({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const STORAGE_KEY_USERNAME = '@save_username';
  const STORAGE_KEY_PASSWORD = '@save_password';

  const saveInfo = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_USERNAME, username);
      await AsyncStorage.setItem(STORAGE_KEY_PASSWORD, password);
      Alert.alert('Successfully Saved Data. Welcome!');
    } catch (e) {
      Alert.alert('Failed to save data to database...');
    }
  };

  const LoginHandler = async () => {
    if (userInfo.username === username && userInfo.password === password) {
      Alert.alert('Logged In');
      saveInfo(username, password);
      setUsername('');
      setPassword('');
      navigation.navigate('AppStackScreen');
    } else {
      Alert.alert('Username or Password is incorrect.');
    }
  };

  const RetrieveData = async () => {
    try {
      const UserName = await AsyncStorage.getItem(STORAGE_KEY_USERNAME);
      const PassWord = await AsyncStorage.getItem(STORAGE_KEY_PASSWORD);

      if (username !== null) {
        setUsername(username);
      }

      if (password !== null) {
        setPassword(password);
      }
    } catch (e) {
      Alert.alert('Failed to retrieve data from Storage...');
    }
  };

  useEffect(() => {
    RetrieveData();
  }, []);

  const onChangeTextUsername = UserName => setUsername(UserName);
  const onChangeTextPassword = PassWord => setPassword(PassWord);

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPressed');
    // validate user
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');
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
            value={username}
            setValue={onChangeTextUsername}
            autoCapitalize="none"
          />

          <Text style={{...styles.textInputName, marginTop: 20}}>Password</Text>
          <CustomInput
            value={password}
            setValue={onChangeTextPassword}
            secureTextEntry={true}
          />

          <CustomButton text="Sign In" onPress={LoginHandler} type="PRIMARY" />
          <View
            style={{flexDirection: 'row', marginTop: 30, marginHorizontal: 20}}>
            <TwitterSocialButton
              buttonText={'Twitter'}
              textStyle={{
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingBottom: 6,
              }}
              buttonViewStyle={{width: 150}}
              onPress={() => {
                Alert.alert('Logged In Using Twitter!');
              }}
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
  },
});
