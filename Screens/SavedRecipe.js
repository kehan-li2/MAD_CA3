// P2111575
// LI KEHAN
// DIT1B04
// Saved Recipe.js
/* eslint-disable react-native/no-inline-styles  */

// realm storage to store comment(advance feature)
// and the json to store those recipe fixed data

import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import addSavedRecipe, {SavedRecipe} from '../DATA/SavedRecipe';
const background = require('../image/background.png');

export default function Recipe({navigation}) {
  const [saved, setSaved] = useState(SavedRecipe);

  const isSaved = () => {
    if (saved) {
      setSaved(false);
    } else {
      setSaved(true);
    }
  };

  const NoSavedRecipe = () => {
    return (
      <View>
        <Image
          style={{
            width: '75%',
            alignSelf: 'center',
            height: '60%',
            top: 30,
          }}
          source={require('../image/cookFood.gif')}
        />
        <Text
          style={{
            marginHorizontal: '5%',
            width: '90%',
            top: '10%',
            textAlign: 'center',
            fontSize: 30,
            color: '#ff6624',
            fontFamily: 'Quicksand-Italic',
          }}>
          No saved recipe yet! Click below to explore recipes!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.button, {backgroundColor: '#8de0df'}]}>
          <Text style={styles.buttonText}>Explore my recipes!</Text>
        </TouchableOpacity>
      </View>
    );
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
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{alignContent: 'center'}}>
          <Text
            style={[styles.title, {textAlign: 'center', alignSelf: 'center'}]}>
            Your saved Recipes
          </Text>
        </View>
        <NoSavedRecipe />
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
    position: 'absolute',
    marginHorizontal: '8%',
    fontSize: 30,
    color: '#ff6624',
    fontFamily: 'Quicksand-Bold',
  },
  arrow: {
    paddingTop: 10,
  },

  button: {
    flex: 1,
    width: '70%',
    top: '15%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Quicksand-Bold',
  },
});
