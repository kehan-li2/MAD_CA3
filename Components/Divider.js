// P2111575
// LI KEHAN
// DIT1B04
// Divider.js
/* eslint-disable react-native/no-inline-styles  */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Mydivider = () => {
  return <View style={styles.lineStyle} />;
};

export default Mydivider;

const styles = StyleSheet.create({
  lineStyle: {
    width: '88%',
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: '#fab255',
    marginTop: 0,
  },
});
