// P2111575
// LI KEHAN
// DIT1B04
// Comment.js
/* eslint-disable react-native/no-inline-styles  */

import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Rating, AirbnbRating} from 'react-native-ratings';

const background = require('../image/background.png');

const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View // each recipe
        style={{
          height: 200,
          flexDirection: 'row',
        }}>
        <View style={{width: '40%'}}>
          <Image
            source={item.data.imagePath}
            style={{width: '98%', height: '55%', borderRadius: 10}}
          />
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#ffe9bf',
              justifyContent: 'center',
              alignItems: 'center',
              height: '45%',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 17,
                fontFamily: 'Quicksand-SemiBold',
              }}>
              {item.data.name}
            </Text>
          </View>
        </View>

        {/* comment */}
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                margin: 10,
                color: 'red',
                fontSize: 17,
                fontFamily: 'Quicksand-Italic',
              }}>
              {item.data.comment}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// const CommentPage = ({navigation}) => {
//  const [data, setData] = useState([
//   arrayElement1,
//   element2,
//   element3
// ])
// data[0]
// }
export default function CommentPage({route, navigation}) {
  // const [DATA, setDATA] = useState([
  //   {
  //     id: '1',
  //     data: {
  //       imagePath: require('../image/salmon.png'),
  //       name: 'Salmon Fillet with Honey Spice Sauce',
  //       comment:
  //         'I love this recipe! I added garlic powder, Italian seasoning, a few flakes of nutritional yeast, half a bottle of kombucha, dried onion, and lemon grass to mine. Great idea!',
  //     },
  //   },
  //   {
  //     id: '2',
  //     data: {
  //       imagePath: require('../image/wrap.png'),
  //       name: 'Vegetarian Wrap',
  //       comment:
  //         'Have someone considered making a version of this wrap for the readers who are trying to avoid gluten, dairy and nightshades?',
  //     },
  //   },
  //   {
  //     id: '3',
  //     data: {
  //       imagePath: require('../image/chicken.png'),
  //       name: 'Tomato Herb Chicken',
  //       serving: '4',
  //       calories: '158 kcal',
  //       comment:
  //         'I am actually a supertaster, so I can’t eat anything that isn’t get the salt off the top of saltines, but this recipe really work for me!',
  //     },
  //   },
  //   // {
  //   //   id: '4',
  //   //   data: {
  //   //     imagePath: require('../image/yoghurt.png'),
  //   //     name: 'Berry Yoghurt',
  //   //     serving: '4',
  //   //     calories: '58 kcal',
  //   //     comment: 'Delicious to the core!',
  //   //   },
  //   // },
  // ]);
  const {recipeName, recipeImage} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        {/* <View style={[styles.lineStyle, {position: 'absolute', top: '14%'}]} /> */}
        <ImageBackground
          source={recipeImage}
          style={{
            width: '100%',
            height: '60%',
            position: 'absolute',
          }}
          imageStyle={{
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
          }}>
          <View style={{alignSelf: 'flex-start', paddingLeft: '4%'}}>
            {/* here should be link to another page*/}
            <Icon
              name="arrow-back"
              size={38}
              color="black"
              style={styles.arrow}
              type="materialIcons"
              onPress={() => navigation.goBack()}
            />
          </View>
          {/* <Image
            style={{
              width: '30%',
              alignSelf: 'flex-start',
              height: '20%',
              top: 35,
            }}
            source={require('../image/comment.gif')}
          /> */}
        </ImageBackground>
        <View style={{alignContent: 'center'}}>
          <Text style={styles.title}>{recipeName}</Text>
        </View>

        {/* recipes display
        <View style={{maxHeight: '80%', paddingTop: '22%'}}>
          <FlatList
            persistentScrollbar={true}
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          />
        </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  arrow: {
    paddingTop: 10,
  },
  title: {
    color: 'black',
    fontFamily: 'Quicksand-Italic',
    fontSize: 30,
    position: 'absolute',
    margin: '8%',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: '85%',
  },
  lineStyle: {
    width: '90%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    alignSelf: 'center',
  },

  listItem: {
    margin: 10,
    backgroundColor: '#ffbe45',
    width: '93%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
