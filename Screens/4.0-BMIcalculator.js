// P2111575
// LI KEHAN
// DIT1B04
// 4.0-BMIcalculator.js
/* eslint-disable react-native/no-inline-styles  */

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
  useEffect,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  age: yup.number().positive().integer().required(),
  weight: yup.number().positive().required(),
  height: yup.number().positive().required(),
});

const inputDefaultValues = {
  age: '',
  weight: '',
  height: '',
};
const background = require('../image/background.png');

export default function BMIcalculator({navigation}) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: inputDefaultValues,
  });

  const [activityLevel, setactivityLevel] = useState('<3'); // actibity level
  const [gender, setGender] = useState('F'); // gender selection

  const onSubmit = data => {
    let submitData = {
      age: data.age,
      weight: data.weight,
      height: data.height,
      gender: gender,
      activityLevel: activityLevel,
    };
    console.log(data);
    // return submitData;
    navigation.navigate('BMIresultScreen', submitData);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <View style={{alignSelf: 'flex-start', paddingLeft: '5%'}}>
          {/* here should be link to another page*/}
          <Icon
            name="arrow-back"
            size={38}
            style={styles.arrow}
            type="materialIcons"
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </View>
        <Text style={styles.title}>BMI Calculator</Text>
        <Text style={styles.description}>
          Our calculator will provide you with daily recommended calories intake
          based on your personal information.
        </Text>
        <View style={styles.lineStyle} />

        <ScrollView
          style={{
            flex: 1,
            width: '100%',
            maxHeight: '55%',
            paddingHorizontal: 30,
            alignSelf: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            {/* age input */}
            <View style={{flex: 2}}>
              <Text style={[styles.label, {paddingTop: 25, minWidth: '100%'}]}>
                Enter your age:
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View
                    style={[
                      styles.input,
                      {flexDirection: 'row', justifyContent: 'center'},
                    ]}>
                    <TextInput
                      {...register('age')}
                      style={{width: '100%', fontSize: 17, paddingTop: 10}}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="number-pad"
                    />
                  </View>
                )}
                name="age"
              />
              <Text style={{maxWidth: '84%', color: 'red'}}>
                {errors.age?.message}
              </Text>
            </View>
            {/* gender selection */}
            <View style={{flex: 1}}>
              <Image
                source={require('../image/gender.png')}
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 20,
                }}
              />
              <RadioButton.Group
                onValueChange={newValue => setGender(newValue)}
                value={gender}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 5,
                    paddingLeft: 30,
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Quicksand-Bold',
                        fontSize: 18,
                        paddingLeft: 13,
                      }}>
                      F
                    </Text>
                    <RadioButton value="F" />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Quicksand-Bold',
                        fontSize: 18,
                        paddingLeft: 10,
                      }}>
                      M
                    </Text>
                    <RadioButton value="M" />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
          </View>

          {/* weight input */}
          <View>
            <Text style={styles.label}>Enter your weight:</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              // eslint-disable-next-line no-shadow
              render={({field: {onChange, onBlur, value}}) => (
                <View
                  style={[
                    styles.input,
                    {flexDirection: 'row', justifyContent: 'center'},
                  ]}>
                  <TextInput
                    {...register('weight')}
                    style={{width: '86%', fontSize: 17}}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="number-pad"
                  />
                  <Text style={styles.unit}>kg</Text>
                </View>
              )}
              name="weight"
            />
            <Text style={{maxWidth: '60%', color: 'red'}}>
              {errors.weight?.message}
            </Text>
          </View>
          {/* height input */}
          <View>
            <Text style={[styles.label, {paddingTop: 32}]}>
              Enter your height:
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View
                  style={[
                    styles.input,
                    {flexDirection: 'row', justifyContent: 'center'},
                  ]}>
                  <TextInput
                    {...register('height')}
                    style={{width: '82%', fontSize: 17, paddingTop: 10}}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="number-pad"
                  />
                  <Text style={styles.unit}>cm</Text>
                </View>
              )}
              name="height"
            />
            <Text style={{maxWidth: '60%', color: 'red'}}>
              {errors.height?.message}
            </Text>
          </View>

          {/* activityLevel picker */}
          <View>
            <Text style={[styles.label, {paddingTop: 32}]}>
              Select your weekly exercise time {'\n'}range (in hours):
            </Text>

            <View style={styles.pickerContainer}>
              <Picker
                mode="dropdown"
                selectedValue={activityLevel}
                onValueChange={(itemValue, itemIndex) =>
                  setactivityLevel(itemValue)
                }>
                <Picker.Item label="< 3" value="< 3" />
                <Picker.Item label="3 to 6" value="3 to 6" />
                <Picker.Item label="> 3" value="> 3" />
              </Picker>
            </View>
          </View>
        </ScrollView>
        <View style={styles.lineStyle} />

        {/* Two Buttons */}
        <View
          style={{
            width: '100%',
            position: 'absolute',
            top: '26%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={[styles.buttonText, {color: '#f23a3a'}]}
              onPress={() => [
                reset(inputDefaultValues),
                setGender('F'),
                setactivityLevel('<3'),
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            // onSubmit --> function
            onPress={handleSubmit(onSubmit)}>
            <Text style={[styles.buttonText, {color: '#1ac74e'}]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  lineStyle: {
    width: '88%',
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: '#fab255',
    marginTop: 20,
  },
  title: {
    position: 'absolute',
    margin: '8%',
    fontSize: 30,
    color: '#ff6624',
    fontFamily: 'Quicksand-Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    color: '#ff7b00',
    backgroundColor: '#f9f9fb',
    marginHorizontal: '8%',
    marginTop: '8%',
    paddingTop: 10,
    fontWeight: '500',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  arrow: {
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#e8e8e8', //#8cffe8
    width: '30%',
    height: 50,
    top: '120%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    color: 'black',
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 20,
  },
  unit: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginRight: '3%',
    fontSize: 17,
    color: 'black',
  },
  pickerContainer: {
    marginTop: 10,
    justifyContent: 'center', // to align picker item
    height: 43,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
