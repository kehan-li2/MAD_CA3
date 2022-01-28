import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import ForgotPassWordScreen from '../Screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
