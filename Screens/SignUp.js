/* eslint-disable react-native/no-inline-styles  */

// import * as React from 'react';
// import {View, Text, Button} from 'react-native';

// export default function RatedPage({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Sign up</Text>
//       <Button
//         title="Login after Sign Up"
//         onPress={() => navigation.navigate('LoginScreen')}>
//         Login after Sign Up
//       </Button>
//     </View>
//   );
// }

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

// imports for social media icons
import {TwitterSocialButton} from 'react-native-social-buttons';
import {FacebookSocialButton} from 'react-native-social-buttons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSigninPressed = () => {
    console.warn('onSignUpPressed');
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
          <Text style={styles.title}>Create an account</Text>
          <Text style={{...styles.textInputName, marginTop: 20}}>Username</Text>
          <CustomInput
            placeholder="(e.g) Abby "
            value={username}
            setValue={setUsername}
          />

          <Text style={{...styles.textInputName, marginTop: 20}}>Email</Text>
          <CustomInput
            placeholder="example@email.com"
            value={email}
            setValue={setEmail}
          />

          <Text style={{...styles.textInputName, marginTop: 20}}>Password</Text>
          <CustomInput
            placeholder="Consists of Uppercase and Lowercase"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <Text style={{...styles.textInputName, marginTop: 20}}>
            Repeat Password
          </Text>
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={true}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginHorizontal: 30,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{marginRight: 10}}
            />
            <Text style={styles.text}>
              By registering, you confirm that you accept to our
              <Text style={styles.link}> Terms of Use</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          <View style={{marginTop: 30, marginBottom: 30}}>
            <CustomButton
              text="Register"
              onPress={onRegisterPressed}
              type="PRIMARY"
            />
          </View>

          <TouchableOpacity
            style={{marginLeft: 80, marginBottom: 100, alignContent: 'center'}}
            onPress={onSigninPressed}>
            <Text
              style={{
                fontFamily: 'Quicksand-Bold',
                color: 'grey',
                fontSize: 17,
              }}>
              Have an account? <Text style={{color: 'red'}}>Sign In</Text>
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

export default SignUpScreen;
