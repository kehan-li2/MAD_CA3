/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function RatedPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button
        title="No account -- SignUp"
        onPress={() => navigation.navigate('SignUpScreen')}>
        No account -- SignUp
      </Button>
      <View style={{paddingTop: 50}}>
        <Button
          title="have account -- Login to homepage"
          onPress={() => navigation.navigate('AppStackScreen')}>
          No account -- SignUp
        </Button>
      </View>
    </View>
  );
}
