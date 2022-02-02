// P2111575
// LI KEHAN
// DIT1B04
// BackButton.js
/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {View} from 'react-native';

import {Icon} from 'react-native-elements';
const GoBackButton = ({navigation}) => {
  return (
    <View style={{alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: 10}}>
      {/* here should be link to another page*/}
      <Icon
        name="arrow-back"
        size={38}
        color="black"
        type="materialIcons"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const GoBackHome = ({navigation}) => {
  return (
    <View style={{alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: 10}}>
      {/* here should be link to another page*/}
      <Icon
        name="arrow-back"
        size={38}
        color="black"
        type="materialIcons"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

export {GoBackButton, GoBackHome};
