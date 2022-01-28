/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function RatedPage({route, navigation}) {
  const {age, weight, height, gender, activityLevel} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Foohhhhd List</Text>

      <Text>
        {age}
        {weight}
        {height}
        {gender}
        {activityLevel}
      </Text>
    </View>
  );
}
