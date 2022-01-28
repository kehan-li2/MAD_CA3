// /* eslint-disable react-native/no-inline-styles  */

// import * as React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TextInput,
//   SectionList,
//   SafeAreaView,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';

// export default function FoodList({navigation}) {
//   const [userInput, onChangeText] = React.useState('');

//   const db = [
//     {
//       title: 'Reduce weight',
//       horizontal: true,
//       data: [
//         {
//           key: '1',
//           text: 'Low GI - Main Food',
//           image: require('../image/FoodListScreen/chowMein.jpg'),
//         },
//         // {
//         //   key: '2',
//         //   text: 'Low GI - Fruits',
//         //   image: require('../assets/FoodListScreen/avocado.jpg'),
//         // },
//         {
//           key: '3',
//           text: 'Low Calorie - Fruits',
//           image: require('../image/FoodListScreen/fruits.jpg'),
//         },
//       ],
//     },
//     {
//       title: 'Calcium Supplement',
//       horizontal: true,
//       data: [
//         {
//           key: '1',
//           text: 'Milk',
//           image: require('../image/FoodListScreen/Milk.jpg'),
//         },
//         {
//           key: '2',
//           text: 'Cheese',
//           image: require('../image/FoodListScreen/cheeseBoard.jpg'),
//         },
//         // {
//         //   key: '3',
//         //   text: 'Yoghurt',
//         //   image: require('../assets/FoodListScreen/almondSoyMilk.jpg'),
//         // },
//       ],
//     },
//     {
//       title: 'Anti Anaemic',
//       horizontal: true,
//       data: [
//         {
//           key: '1',
//           text: 'Kale',
//           image: require('../image/FoodListScreen/kale.jpg'),
//         },
//         {
//           key: '2',
//           text: 'Pomegranate',
//           image: require('../image/FoodListScreen/pomegranate.jpeg'),
//         },
//         {
//           key: '3',
//           text: 'Swiss Chard',
//           image: require('../image/FoodListScreen/swissChard.jpg'),
//         },
//       ],
//     },
//     {
//       title: 'Hypertension',
//       horizontal: true,
//       data: [
//         {
//           key: '1',
//           text: 'Salmon',
//           image: require('../image/FoodListScreen/salmon.jpg'),
//         },
//         {
//           key: '2',
//           text: 'Citrus Fruits',
//           image: require('../image/FoodListScreen/citrusFruits.jpg'),
//         },
//         {
//           key: '3',
//           text: 'Berries',
//           image: require('../image/FoodListScreen/berries.jpg'),
//         },
//       ],
//     },
//     {
//       title: 'Diabetes',
//       horizontal: true,
//       data: [
//         {
//           key: '1',
//           text: 'Trans Fats',
//           image: require('../image/FoodListScreen/transFats.jpg'),
//         },
//         {
//           key: '2',
//           text: 'High Carb Foods',
//           image: require('../image/FoodListScreen/highCarbs.png'),
//         },
//       ],
//     },
//   ];

//   const ListItem = ({item}) => {
//     return (
//       <View style={{margin: 10, alignItems: 'center'}}>
//         <TouchableOpacity>
//           <Image
//             source={item.image}
//             resizeMode="contain"
//             style={{width: 165, height: 165}}
//           />
//           <Text
//             style={{
//               color: 'black',
//               fontFamily: 'Quicksand-Bold',
//               fontSize: 16,
//             }}>
//             {item.text}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
//       <ImageBackground
//         source={require('../image/background.png')}
//         imageStyle={{
//           opacity: 0.1,
//           resizeMode: 'cover',
//         }}>
//         <TouchableOpacity>
//           <Image
//             source={require('../image/Icons/backArrow.png')}
//             resizeMode="contain"
//             style={{width: 38, height: 38, marginTop: 15, marginHorizontal: 15}}
//           />
//         </TouchableOpacity>

//         <View style={styles.TextInput}>
//           <Image
//             style={styles.TextInputIcon}
//             source={require('../image/Icons/searchIcon.png')}
//             resizeMode="contain"
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeText}
//             value={userInput}
//             placeholder="Search Food Nutrition and Calories"
//           />
//         </View>

//         <Text style={styles.FoodListHeader}>Food Ranking List</Text>

//         <View style={{flex: 1}}>
//           <SectionList
//             contentContainerStyle={{paddingHorizontal: 10}}
//             stickySectionHeadersEnabled={false}
//             sections={db}
//             renderSectionHeader={({section}) => (
//               <>
//                 <Text
//                   style={{
//                     fontFamily: 'Quicksand-Bold',
//                     fontSize: 20.5,
//                     color: 'black',
//                     marginTop: 20,
//                     marginBottom: 5,
//                     marginLeft: 10,
//                   }}>
//                   {section.title}
//                 </Text>
//                 {section.horizontal ? (
//                   <FlatList
//                     horizontal
//                     data={section.data}
//                     renderItem={({item}) => <ListItem item={item} />}
//                     showsHorizontalScrollIndicator={false}
//                   />
//                 ) : null}
//               </>
//             )}
//             renderItem={({item, section}) => {
//               if (section.horizontal) {
//                 return null;
//               }
//               return <ListItem item={item} />;
//             }}
//           />
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   // Styles for FoodList Screen (6.0)
//   // SearchBox Styles
//   TextInput: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 0.5,
//     height: 40,
//     borderRadius: 20,
//     margin: 10,
//     width: '90%',
//     marginLeft: 20,
//   },
//   TextInputIcon: {
//     padding: 10,
//     margin: 5,
//     resizeMode: 'stretch',
//     alignItems: 'center',
//     width: 10,
//     height: 10,
//   },
//   input: {
//     flex: 1,
//     fontFamily: 'Quicksand-Bold',
//   },
//   // Screen Header Styles
//   FoodListHeader: {
//     fontSize: 30,
//     fontFamily: 'Quicksand-Bold',
//     color: '#ff6624',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 20,
//     paddingBottom: 10,
//     textAlign: 'center',
//   },
// });

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  HundredGrams,
  BigServing,
  MediumServing,
  SmallServings,
} from '../DATA/ElaboratedData';

const Item = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}>
      {item.multiText ? (
        <Text
          style={
            item.header
              ? {
                  ...styles.flatlistCategory,
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 20,
                  marginTop: 10,
                  marginRight: 23,
                }
              : {...styles.flatlistCategory}
          }>
          {item.Category}
        </Text>
      ) : (
        <Text
          style={
            item.header
              ? {
                  ...styles.flatlistCategory,
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 20,
                }
              : {...styles.flatlistCategory}
          }>
          {item.Category}
        </Text>
      )}

      <Text
        style={
          item.multiText
            ? {...styles.flatlistContent, textAlign: 'center'}
            : {...styles.flatlistContent}
        }>
        {item.value}
      </Text>
    </View>
  );
};

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'grey',
      }}
    />
  );
};

export default function Elaborated({navigation}) {
  const [DATA, setDATA] = useState(HundredGrams);
  const [activeButton, setActiveButton] = useState('100g');

  // function to change data in flatlist when button is clicked
  const onRefresh = (selectedServing, servingDATA) => {
    setActiveButton(selectedServing);
    setDATA(servingDATA);
  };

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Elaborated</Text>
    // </View>

    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../image/background.png')}
        imageStyle={{
          opacity: 0.1,
          resizeMode: 'stretch',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../image/Icons/backArrow.png')}
            resizeMode="contain"
            style={{
              width: 38,
              height: 38,
              marginTop: 15,
              marginHorizontal: 15,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginRight: 25,
          }}>
          <Image
            source={require('../image/Icons/appleIcon.png')}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
          <View>
            <View style={{...styles.elaboratedDataText, marginBottom: 3}}>
              <Text style={{...styles.elaboratedDataName, marginTop: 2}}>
                Apple
              </Text>
              <Text style={styles.elaboratedDataInfo}>52kcal / 100g</Text>
            </View>
            <View style={styles.elaboratedDataText}>
              <Text
                style={{
                  ...styles.elaboratedDataName,
                  paddingRight: 200,
                  marginTop: 2,
                }}>
                GI
              </Text>
              <Text style={styles.elaboratedDataInfo}>32</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1.5,
            width: '85%',
            marginHorizontal: 30,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => onRefresh('100g', HundredGrams)}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === '100g' ? '#37e6e3' : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}>100g</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onRefresh('One Serving (Big)', BigServing);
            }}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'One Serving (Big)' ? '#37e6e3' : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}> One Serving (Big)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onRefresh('One Serving (Medium)', MediumServing);
            }}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'One Serving (Medium)'
                    ? '#37e6e3'
                    : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}> One Serving (Medium)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onRefresh('One Serving (Small)', SmallServings);
            }}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'One Serving (Small)'
                    ? '#37e6e3'
                    : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}> One Serving (Small)</Text>
          </TouchableOpacity>
          {/* <View style={{maxHeight: '100%', paddingTop: 10}}> */}
          {/* </View> */}
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        </View>

        {/* <MyTabs />
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button mode="contained" color="turquoise" style={{width: 200}}>
              Load More
            </Button>
          </View> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '35%',
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            source={require('../image/Icons/greenDot.png')}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
          <Text style={{color: '#92ca79', fontFamily: 'Quicksand-Bold'}}>
            Suggested!
          </Text>
          <Image
            source={require('../image/Icons/smileyEmoji.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>
        <Text
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: 'white',
            width: '90%',
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 10,
            padding: 5,
            fontFamily: 'Quicksand-Bold',
            fontSize: 16,
            color: 'black',
          }}>
          Rich in Vitamin C & Antioxidants! Contain Fiber, which stabilizes
          blood sugar levels.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // ----------------------------------------------------------------------------------------------------
  // Styles for Elaborated Data (6.2)
  elaboratedDataText: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  elaboratedDataName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 22,
    paddingRight: 100,
    color: 'black',
    paddingBottom: 6,
  },
  elaboratedDataInfo: {
    paddingTop: 4,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
  },
  flatlistCategory: {
    fontSize: 19,
    fontFamily: 'Quicksand-Medium',
    paddingTop: 10,
    marginHorizontal: 20,
    marginRight: 55,
    width: '60%',
    marginBottom: 10,
  },
  flatlistContent: {
    color: 'grey',
    fontWeight: '600',
    width: '30%',
    paddingTop: 15,
    fontSize: 17,
    marginBottom: 15,
  },
  button: {
    // backgroundColor: '#8de0df',
    width: '28%',
    // height: 40,
    // top: 46,
    borderColor: '#48d1cc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18.5,
    fontFamily: 'Quicksand-Bold',
  },
});
