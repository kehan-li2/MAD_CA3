/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function RatedPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sign up</Text>
      <Button
        title="Login after Sign Up"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login after Sign Up
      </Button>
    </View>
  );
}
