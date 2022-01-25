/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// // P2111575
// // LI KEHAN
// // DIT1B04
// // 4.0-BMIcalculator.js
// /* eslint-disable react-native/no-inline-styles  */

// import React from 'react';
// import {useState} from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import {Icon} from 'react-native-elements';
// import {useForm, Controller} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import {Picker} from '@react-native-picker/picker';
// import {RadioButton} from 'react-native-paper';
// // import {ScrollView} from 'react-native-gesture-handler';

// const background = require('../image/background.png');

// const schema = yup
//   .object({
//     age: yup.number().positive().integer().required(),
//     weight: yup.number().positive().required(),
//     height: yup.number().positive().required(),
//   })
//   .required();

// export default function BMIcalculator() {
//   const {
//     control,
//     register,
//     handleSubmit,
//     reset,
//     formState: {errors},
//   } = useForm({
//     resolver: yupResolver(schema),

//     defaultValues: {
//       age: '',
//       weight: '',
//       height: '',
//       gender: 'F',
//       activityLevel: '<3',
//     },
//   });

//   const [selectedLevel, setSelectedLevel] = useState(); // actibity level
//   const [gender, setGender] = React.useState('F'); // gender selection

//   const onSubmit = data => console.log(data);

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={background}
//         resizeMode="cover"
//         style={styles.background}
//         imageStyle={{opacity: 0.1}}>
//         <View style={{alignSelf: 'flex-start', paddingLeft: '4%'}}>
//           {/* here should be link to another page*/}
//           <Icon
//             name="arrow-back"
//             size={38}
//             style={styles.arrow}
//             type="materialIcons"
//             onPress={() => console.log('hhh')}
//           />
//         </View>

//         <Text style={styles.title}>BMI Calculator</Text>
//         <Text style={styles.description}>
//           Our calculator will provide you with daily recommended calories intake
//           based on your personal information.
//         </Text>

//         {/* gender selection */}
//         {/* <View style={{position: 'absolute', top: '19%', left: '68%'}}>
//           <Image
//             source={require('../image/gender.png')}
//             style={{width: 100, height: 100}}
//           />
//           <RadioButton.Group
//             onValueChange={newValue => setGender(newValue)}
//             value={gender}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 paddingTop: 5,
//               }}>
//               <View>
//                 <Text
//                   style={{
//                     color: 'black',
//                     fontFamily: 'Quicksand-Bold',
//                     fontSize: 18,
//                     paddingLeft: 13,
//                   }}>
//                   F
//                 </Text>
//                 <RadioButton value="F" />
//               </View>
//               <View>
//                 <Text
//                   style={{
//                     color: 'black',
//                     fontFamily: 'Quicksand-Bold',
//                     fontSize: 18,
//                     paddingLeft: 10,
//                   }}>
//                   M
//                 </Text>
//                 <RadioButton value="M" />
//               </View>
//             </View>
//           </RadioButton.Group>
//         </View> */}

//         {/* <ScrollView
//           style={{flex: 1, maxHeight: '80%', width: '100%'}}></ScrollView> */}

//         {/* form content */}
//         <View
//           style={{
//             position: 'absolute',
//             alignSelf: 'center',
//             // top: '22%',
//             left: '6%',
//           }}>
//           {/* gender selection */}
//           <View
//             style={{
//               position: 'absolute',
//               top: '28%',
//               left: '73%',
//             }}>
//             <Image
//               source={require('../image/gender.png')}
//               style={{width: 100, height: 100}}
//             />
//             <RadioButton.Group
//               onValueChange={newValue => setGender(newValue)}
//               value={gender}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   paddingTop: 5,
//                 }}>
//                 <View>
//                   <Text
//                     style={{
//                       color: 'black',
//                       fontFamily: 'Quicksand-Bold',
//                       fontSize: 18,
//                       paddingLeft: 13,
//                     }}>
//                     F
//                   </Text>
//                   <RadioButton value="F" />
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       color: 'black',
//                       fontFamily: 'Quicksand-Bold',
//                       fontSize: 18,
//                       paddingLeft: 10,
//                     }}>
//                     M
//                   </Text>
//                   <RadioButton value="M" />
//                 </View>
//               </View>
//             </RadioButton.Group>
//           </View>

//           <View>
//             {/* age input */}
//             <Text style={styles.label}>Enter your age:</Text>
//             <Controller
//               control={control}
//               rules={{
//                 required: true,
//               }}
//               render={({field: {onChange, onBlur, value}}) => (
//                 <TextInput
//                   style={[styles.input, {width: 150}]}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                 />
//               )}
//               name="age"
//             />
//           </View>
//           {/* weight input */}
//           <Text style={[styles.label, {paddingTop: 20}]}>
//             Enter your weight:
//           </Text>
//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             // eslint-disable-next-line no-shadow
//             render={({field: {onChange, onBlur, value}}) => (
//               <View
//                 style={[
//                   styles.input,
//                   {flexDirection: 'row', justifyContent: 'center'},
//                 ]}>
//                 <TextInput
//                   style={{width: '85%', fontSize: 17, paddingTop: 10}}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                 />
//                 <Text style={styles.unit}>kg</Text>
//               </View>
//             )}
//             name="weight"
//           />

//           {/* height input */}
//           <Text style={[styles.label, {paddingTop: 20.5}]}>
//             Enter your height:
//           </Text>
//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             render={({field: {onChange, onBlur, value}}) => (
//               <View
//                 style={[
//                   styles.input,
//                   {flexDirection: 'row', justifyContent: 'center'},
//                 ]}>
//                 <TextInput
//                   style={{width: '85%', fontSize: 17, paddingTop: 10}}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                 />
//                 <Text style={styles.unit}>cm</Text>
//               </View>
//             )}
//             name="height"
//           />

//           {/* activityLevel picker */}
//           <Text style={[styles.label, {paddingTop: 20.5}]}>
//             Select your weekly exercise time {'\n'}range (in hours):
//           </Text>
//           <Controller
//             control={control}
//             render={({value}) => (
//               <View style={styles.pickerContainer}>
//                 <Picker
//                   mode="dropdown"
//                   selectedValue={selectedLevel}
//                   onValueChange={(itemValue, itemIndex) =>
//                     setSelectedLevel(itemValue)
//                   }>
//                   <Picker.Item label="< 3" value="< 3" />
//                   <Picker.Item label="3 to 6" value="3 to 6" />
//                   <Picker.Item label="> 3" value="> 3" />
//                 </Picker>
//               </View>
//             )}
//             name="activityLevel"
//           />

//           {/* Two Buttons */}
//           <View
//           // style={{
//           //   flexDirection: 'row',
//           //   justifyContent: 'space-around',
//           //   paddingHorizontal: 20,
//           // }}
//           >
//             <TouchableOpacity style={styles.button}>
//               <Text style={[styles.buttonText, {color: '#f23a3a'}]}>
//                 Cancel
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button}>
//               <Text style={[styles.buttonText, {color: '#1ac74e'}]}>
//                 Submit
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Two Buttons */}
//         {/* <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             paddingHorizontal: 20,
//           }}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={[styles.buttonText, {color: '#f23a3a'}]}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <Text style={[styles.buttonText, {color: '#1ac74e'}]}>Submit</Text>
//           </TouchableOpacity>
//         </View> */}
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     position: 'absolute',
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
//   title: {
//     position: 'absolute',
//     margin: '8%',
//     fontSize: 30,
//     color: '#ff6624',
//     fontFamily: 'Quicksand-Bold',
//     alignSelf: 'center',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#ff7b00',
//     backgroundColor: '#f9f9fb',
//     margin: '8%',
//     paddingVertical: 10,
//     fontWeight: '500',
//     textDecorationLine: 'underline',
//     fontStyle: 'italic',
//   },
//   arrow: {
//     paddingTop: 10,
//   },
//   lineStyle: {
//     width: '95%',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: 'grey',
//     margin: 10,
//   },
//   button: {
//     backgroundColor: '#e8e8e8', //#8cffe8
//     width: '30%',
//     height: 50,
//     top: '120%',
//     borderColor: '#e8e8e8',
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     width: 200,
//     backgroundColor: 'white',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   label: {
//     color: 'black',
//     fontFamily: 'Quicksand-SemiBold',
//     fontSize: 20,
//   },
//   unit: {
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     marginRight: '3%',
//     fontSize: 17,
//     color: 'black',
//   },
//   pickerContainer: {
//     marginTop: 10,
//     justifyContent: 'center', // to align picker item
//     height: 43,
//     borderColor: 'black',
//     borderWidth: 1,
//     backgroundColor: 'white',
//     borderRadius: 5,
//   },
// });

// // previous version

// /*
//   // const defaultValues= {
// //   // firstName: '',
// //   // lastName: '',
// //   title: "",
// //   content: "",
// //   activityLevel: "<3",
// // }

//   genderButton: {
//     backgroundColor: '#e8e8e8',
//     width: 50,
//     height: 45,
//     borderColor: '#e8e8e8',
//     borderWidth: 1,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// <View style={{position:"absolute", top:"18%", left:"65%"}}>
// <Image source={require('./image/gender.png')} style={{width: 110, height: 110}}/>
// <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
//   <TouchableOpacity style={styles.genderButton}>
//     <Text style={{color:"black", fontSize: 18}}>F</Text>
//   </TouchableOpacity>
//   <TouchableOpacity style={styles.genderButton}>
//     <Text style={{color:"black", fontSize: 18}}>M</Text>
//   </TouchableOpacity>
// </View>   */

// P2111575
// LI KEHAN
// DIT1B04
// The WHOLE app Start place
// /* eslint-disable react-native/no-inline-styles  */

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WholeStack from '../Navigation/WholeStack';

export default function App() {
  return (
    <NavigationContainer>
      <WholeStack />
    </NavigationContainer>
  );
}
