// P2111575
// LI KEHAN
// DIT1B04
// Saved Recipe.js

/* eslint-disable react-hooks/exhaustive-deps */
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
import {GoBackButton} from '../Components/BackButton';
import {delSavedRecipe, SavedRecipe} from '../DATA/SavedRecipeData';
const background = require('../image/background.png');

export default function Recipe({navigation}) {
  const [saved, setSaved] = useState(SavedRecipe);
  const [rerender, setRerender] = useState();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Running');
      setSaved(SavedRecipe);
      SavedRecipe.length === 0
        ? setRerender(NoSavedRecipe)
        : setRerender(HaveSavedRecipe);
    });
    return unsubscribe;
  }, [navigation]);

  const CustomRecipeCard = ({recipe}) => {
    return (
      <View
        style={{
          marginBottom: '10%',
          borderWidth: 1,
          borderRadius: 30,
          borderColor: 'grey',
          width: 165,
          height: 250,
          backgroundColor: 'white',
        }}>
        {/* recipe name */}
        <Text
          style={{
            marginVertical: 5,
            fontFamily: 'Quicksand-Bold',
            color: 'black',
            fontSize: 16,
            textAlign: 'center',
          }}>
          {recipe.data.recipeName}
        </Text>
        <View style={styles.lineStyle} />

        <View style={{flex: 1, paddingTop: 8}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RecipeScreen', {
                recipeName: recipe.data.recipeName,
                recipeImage: recipe.data.recipeImage,
                ingredientsDATA: recipe.data.ingredients,
                methodDATA: recipe.data.methods,
              });
            }}>
            <Image
              style={{
                width: '90%',
                height: '95%',
                alignSelf: 'center',
                borderRadius: 30,
              }}
              source={recipe.data.recipeImage}
            />
          </TouchableOpacity>
        </View>

        {/* recipe info */}
        <View
          style={{
            paddingBottom: 5,
            alignItems: 'center',
          }}>
          <Text>Serving: 4</Text>
          <Text>Calories: 123kcal</Text>
        </View>
        <Icon
          name="delete"
          size={30}
          type="antDesign"
          // style={{bottom: 10}}
          onPress={() => handleDelete(recipe.data.recipeName)}
        />
      </View>
    );
  };

  const handleDelete = recipeName => {
    setRerender(false);
    console.log('no sleep');
    let changed = delSavedRecipe(recipeName);
    console.log(changed);
    setSaved(changed);
    setRerender(HaveSavedRecipe);
    if (changed.length === 0) {
      setRerender(NoSavedRecipe);
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
  const HaveSavedRecipe = () => {
    return (
      <View style={{top: '10%', maxHeight: '75%'}}>
        <FlatList
          data={saved}
          renderItem={({item}) => {
            return <CustomRecipeCard recipe={item} />;
          }}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          numColumns={2}
        />
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
        <GoBackButton navigation={navigation} />

        <View style={{alignContent: 'center'}}>
          <Text
            style={[styles.title, {textAlign: 'center', alignSelf: 'center'}]}>
            Your saved Recipes
          </Text>
        </View>
        {rerender}
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
  lineStyle: {
    width: '88%',
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: '#fab255',
    marginTop: 5,
  },
});
