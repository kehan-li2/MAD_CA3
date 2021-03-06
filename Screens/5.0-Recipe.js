// P2111575
// LI KEHAN
// DIT1B04
// 5.0-Recipe.js
/* eslint-disable react-native/no-inline-styles  */

import React, {useState} from 'react';
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
import UnorderedList from '../Components/UnorderedList';
import {addSavedRecipe, delSavedRecipe} from '../DATA/SavedRecipeData';
import {GoBackHome} from '../Components/BackButton';

const background = require('../image/background.png');

export default function Recipe({route, navigation}) {
  const {recipeName, recipeImage, ingredientsDATA, methodDATA} = route.params;
  const [DATA, setDATA] = useState(ingredientsDATA);
  const [activeButton, setActiveButton] = useState('Ingredients');
  const [liked, setLiked] = useState(false);
  const isLiked = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };
  const [saved, setSaved] = useState(false);
  const isSaved = () => {
    if (saved) {
      delSavedRecipe(recipeName);
      setSaved(false);
    } else {
      addSavedRecipe({
        name: recipeName,
        image: recipeImage,
        ingredients: ingredientsDATA,
        methods: methodDATA,
      });
      setSaved(true);
    }
  };

  // to onchange to data for flatlist and onchange the active button
  const onRefresh = (whichButton, displayedDATA) => {
    setActiveButton(whichButton);
    setDATA(displayedDATA);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <GoBackHome navigation={navigation} />
        <View style={{alignContent: 'center'}}>
          <Text
            style={[styles.title, {textAlign: 'center', alignSelf: 'center'}]}>
            {recipeName}
          </Text>
        </View>
        <Image
          source={recipeImage}
          style={{
            width: '100%',
            height: '28%',
            position: 'absolute',
            top: '17%',
          }}
        />

        {/* Two Buttons */}
        <View
          style={{flexDirection: 'row', position: 'absolute', top: '38.2%'}}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === 'Ingredients' ? '#f59b42' : null,
              },
            ]}
            onPress={() => onRefresh('Ingredients', ingredientsDATA)}>
            <Text
              style={[
                styles.buttonText,
                {color: activeButton === 'Ingredients' ? 'white' : 'black'},
              ]}>
              Ingredients
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: activeButton === 'Method' ? '#f59b42' : null,
              },
            ]}
            onPress={() => onRefresh('Method', methodDATA)}>
            <Text
              style={[
                styles.buttonText,
                {color: activeButton === 'Method' ? 'white' : 'black'},
              ]}>
              Method
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{
            width: '100%',
            maxHeight: 300,
            position: 'absolute',
            top: '54%',
          }}>
          {/* the content displayed by unorderedList*/}
          <View style={{width: '80%'}}>
            <UnorderedList recipeDATA={DATA} />
          </View>

          {/* icons to allow user to interact with app */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderWidth: 1.5,
              marginTop: 20,
              borderStyle: 'dashed',
              borderColor: '#fab255',
              backgroundColor: '#ffe0b3',
            }}>
            <Icon
              color={liked ? '#ffb8f8' : 'grey'}
              name={'heart'}
              size={37}
              type="antdesign"
              onPress={() => isLiked()}
            />
            <Icon
              color="grey"
              name="comment"
              size={40}
              type="materialIcons"
              onPress={() => {
                navigation.navigate('CommentScreen', {
                  recipeName: recipeName,
                  recipeImage: recipeImage,
                  ingredients: ingredientsDATA,
                  method: methodDATA,
                });
              }}
            />
            <Icon
              color={saved ? '#ffb8f8' : 'grey'}
              name="stars"
              size={40}
              type="materialIcons"
              onPress={() => isSaved()}
            />
          </View>
        </ScrollView>
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
  button: {
    flex: 1,
    width: '28%',
    height: 40,
    top: 46,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Quicksand-Bold',
  },
});
