/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert} from 'react-native';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, mode}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        autoCapitalize={mode}
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
