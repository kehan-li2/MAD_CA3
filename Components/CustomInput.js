// P2129509
// Lee Wee Teck
// DIT1B04
// CustomInput.js

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  mode,
  onEndEditing,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        autoCapitalize={mode}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    marginHorizontal: 20,
  },
  input: {},
});

export default CustomInput;
