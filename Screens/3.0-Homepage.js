// P2111575
// LI KEHAN
// DIT1B04
// 3.0-Homepage.js
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
import {breakfastDATA, lunchDATA, dinnerDATA} from '../DATA/RecipeData';
const background = require('../image/background.png');
const Item = ({item}) => {
  return (
    <View style={styles.listItem}>
      <View
        style={{height: 135, justifyContent: 'center', flexDirection: 'row'}}>
        <Image
          source={item.data.imagePath}
          style={{width: '40%', height: '100%', borderRadius: 10}}
        />
        <View
          style={{
            background: '#ff8c00',
            alignItems: 'center',
            paddingTop: '10%',
            flex: 1,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Quicksand-SemiBold',
            }}>
            {item.data.name}
          </Text>
          <View style={{flexDirection: 'row', position: 'absolute', bottom: 5}}>
            <Text style={{fontFamily: 'Quicksand-Bold'}}>
              Serving:{'\n\t\t'}
              {item.data.serving}
            </Text>
            <Text style={{fontFamily: 'Quicksand-Bold'}}>
              Calories per serving:{'\n\t\t\t\t\t'}
              {item.data.calories}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function Homepage({navigation}) {
  const [DATA, setDATA] = useState(breakfastDATA);
  const [activeButton, setActiveButton] = useState('Breakfast');

  // to onchange to data for flatlist and onchange the active button
  const onRefresh = (whichMeal, mealDATA) => {
    setActiveButton(whichMeal);
    setDATA(mealDATA);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingTop: 10,
          }}>
          {/* use onPress to test */}
          <Icon
            name="person"
            size={50}
            type="ionicon"
            onPress={() => navigation.openDrawer()}
          />
          <Icon
            name="player-settings"
            size={45}
            type="fontisto"
            onPress={() => navigation.navigate('SettingsScreen')}
          />
        </View>
        <Text style={[styles.title]}>Home Page</Text>
        <Text
          style={{
            fontSize: 19,
            left: 162,
            top: 45,
            fontFamily: 'Quicksand-SemiBold',
          }}>
          Daily recipes suggestion
        </Text>
        <View style={[styles.lineStyle, {top: 40}]} />

        {/* three buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {/* after button is pressed change color */}
          <TouchableOpacity
            onPress={() => onRefresh('Breakfast', breakfastDATA)}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'Breakfast' ? '#37e6e3' : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onRefresh('Lunch', lunchDATA)}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'Lunch' ? '#37e6e3' : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onRefresh('Dinner', dinnerDATA)}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'Dinner' ? '#37e6e3' : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}>Dinner</Text>
          </TouchableOpacity>
        </View>

        {/* recipes display */}
        <View style={{maxHeight: '75%', paddingTop: '18%'}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RecipeScreen', {
                    recipeName: item.data.name,
                    recipeImage: item.data.imagePath,
                    ingredientsDATA: item.data.ingredients,
                    methodDATA: item.data.method,
                  });
                }}>
                <Item item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          />
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
    flex: 1,
  },
  title: {
    color: '#ff6624',
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    position: 'absolute',
    left: 15,
    top: 65,
  },
  lineStyle: {
    width: '95%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    margin: 10,
  },
  button: {
    // backgroundColor: '#8de0df',
    width: '28%',
    height: 40,
    top: 46,
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
  listItem: {
    margin: 10,
    backgroundColor: '#f4a460',
    width: '93%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
