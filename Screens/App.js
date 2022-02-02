// P2111575
// LI KEHAN
// DIT1B04
// The WHOLE app Start place
// /* eslint-disable react-native/no-inline-styles  */

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import SplashScreen from 'react-native-splash-screen';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WholeStack from '../Navigation/WholeStack';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <WholeStack />
    </NavigationContainer>
  );
}
