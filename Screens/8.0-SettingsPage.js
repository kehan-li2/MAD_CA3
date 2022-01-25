/* eslint-disable react-native/no-inline-styles  */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';

// should use sectionlist
export default function SettingsPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SettingsPage</Text>
      <Button title="go back" onPress={() => navigation.navigate('HomeScreen')}>
        Go back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
