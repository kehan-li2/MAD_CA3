// P2111575
// LI KEHAN
// DIT1B04
// Saved Recipe.js

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles  */

// realm storage to store comment(advance feature)
// and the json to store those recipe fixed data

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
                methodDATA: recipe.data.method,
              });
            }}>
            <Image
              style={{
                width: '90%',
                height: '95%',
                alignSelf: 'center',
                // notice a bit see if the radius is work as now the image got border
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
        {/* <Text>i GOT RECIPE SAVED! {SavedRecipe[1].data.recipeName}</Text> */}
        {/* <CustomRecipeCard /> */}

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

  const DisplayScreen = () => {
    console.log(saved);
    if (saved.length === 0) {
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
    } else {
      return (
        <View style={{top: '10%', maxHeight: '75%'}}>
          {/* <Text>i GOT RECIPE SAVED! {SavedRecipe[1].data.recipeName}</Text> */}
          {/* <CustomRecipeCard /> */}

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
    }
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
        {/* {saved.length === 0 ? <NoSavedRecipe /> : <HaveSavedRecipe />} */}
        {/* <DisplayScreen /> */}
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
  lineStyle: {
    width: '88%',
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: '#fab255',
    marginTop: 5,
  },
});

//------------------------------------
// const handleDelete = recipeName => {
//   console.log('no sleep');
//   let changed = delSavedRecipe(recipeName);
//   console.log(changed);
//   setSaved(changed);
// };
