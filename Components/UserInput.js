import React from 'react';
import {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    age: yup.number().positive().integer().required(),
    weight: yup.number().positive().required(),
    height: yup.number().positive().required(),
  })
  .required();

export default function UserInput() {
  {
    /* age input */
  }
  <View
    style={{
      position: 'absolute',
    }}>
    <Text style={styles.label}>Enter your age:</Text>
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          {...register('age')}
          style={[styles.input, {width: 150}]}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name="age"
    />
    <Text style={{maxWidth: '60%', color: 'red'}}>{errors.age?.message}</Text>
  </View>;
}
