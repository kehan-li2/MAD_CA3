// P2129509
// Lee Wee Teck
// DIT1B04
// SignUp.js

/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

// Custom buttons and Text Inputs
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

// import firebase
import {authentication} from '../firebase';
import * as firebase from 'firebase';

export default function SignUp({navigation}) {
  const [checkboxState, setCheckboxState] = React.useState(false);

  const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        isValidUser: false,
      });
    }
  };

  const handleEmailChange = val => {
    if (val.trim().length >= 12) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
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

  const handleSignUp = () => {
    if (checkboxState) {
      authentication
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with: ', user.email);
        })
        .then(res => {
          const user = firebase.auth().currentUser;
          return user.updateProfile({
            displayName: data.username,
          });
        })
        .catch(error => Alert.alert(error.message));
    } else {
      Alert.alert('Agree to our terms & conditions to continue.');
    }
  };

  const onSigninPressed = () => {
    navigation.navigate('LoginScreen');
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
          <Text style={styles.title}>Create an account</Text>
          <Text style={{...styles.textInputName, marginTop: 20}}>Username</Text>
          <CustomInput
            placeholder="(e.g) Abby "
            setValue={val => textInputChange(val)}
            onEndEditing={e => {
              handleValidUser(e.nativeEvent.text);
            }}
          />
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}

          <Text style={{...styles.textInputName, marginTop: 20}}>Email</Text>
          <CustomInput
            placeholder="example@email.com"
            setValue={val => handleEmailChange(val)}
          />
          {data.isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Invalid Email format.</Text>
            </Animatable.View>
          )}

          <Text style={{...styles.textInputName, marginTop: 20}}>Password</Text>
          <CustomInput
            placeholder="Consists of Uppercase and Lowercase"
            secureTextEntry={true}
            setValue={val => handlePasswordChange(val)}
          />
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginHorizontal: 30,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BouncyCheckbox
              iconStyle={{
                borderRadius: 6,
              }}
              fillColor="red"
              onPress={() => setCheckboxState(!checkboxState)}
            />
            <Text style={styles.text}>
              By registering, you confirm that you accept to our
              <Text style={styles.link}> Terms of Use</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
          {checkboxState ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{...styles.errorMsg, marginLeft: 12}}>
                Please accept our terms and conditions to proceed
              </Text>
            </Animatable.View>
          )}

          <View style={{marginTop: 30, marginBottom: 30}}>
            <CustomButton
              text="Register"
              onPress={handleSignUp}
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
}

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
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 21,
  },
});
