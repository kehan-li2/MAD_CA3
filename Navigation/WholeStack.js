// P2111575
// LI KEHAN
// DIT1B04
// WholeStack.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppStack from '../Navigation/AppStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const WholeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStackScreen" component={AuthStack} />
      <Stack.Screen name="AppStackScreen" component={AppStack} />
    </Stack.Navigator>
  );
};

export default WholeStack;
