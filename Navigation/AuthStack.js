// P2111575
// LI KEHAN
// DIT1B04
// AuthStack.js

import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../Screens/2.0-SignUp';
import Login from '../Screens/1.0-Login';
import ForgotPassWordScreen from '../Screens/ForgotPasswordScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [firstLaunch, setFirstLaunch] = useState(null);
  // the ini route will change based on if the app is first launch or not
  let initialRoute;
  useEffect(() => {
    AsyncStorage.getItem('haveLaunched').then(value => {
      // if it is first launch then it is null
      if (value === null) {
        AsyncStorage.setItem('haveLaunched', true); // to store into storage, then next time it will begin with login screen
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (firstLaunch === null) {
    return null; // handle condition when asyncStorage is not finished, so it may got null value
  } else if (firstLaunch === true) {
    initialRoute = 'OnboardingScreen';
  } else {
    initialRoute = 'LoginScreen';
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassWordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
