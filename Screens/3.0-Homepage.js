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
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import saveRecipe from '../DATA/RecipeData';
import {breakfastDATA, lunchDATA, dinnerDATA} from '../DATA/RecipeData';
import {auth} from '../firebase';
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

// const breakfastDATA = [
//   {
//     id: '1',
//     data: {
//       imagePath: require('../image/yoghurt.png'),
//       name: 'Berry Yoghurt',
//       serving: '4',
//       calories: '58 kcal',
//       ingredients:
//         'Strawberry low-fat yoghurt: 200g (7 oz);Strawberries: 4, medium, cleaned, hulled and sliced;Sugar-reduced soy milk: 100ml (31⁄3 fl oz / 2⁄5 cup);Gelatine powder: 1 tsp;Hot water: 1 tbsp',
//       method:
//         'In a mixing bowl, combine yoghurt, strawberries and soy milk. Mix well and set aside.;Mix gelatin with hot water until completely dissolved. Stir into yoghurt mixture, then pour into 4 serving glasses. Set aside to cool.;Prepare topping. Blend strawberries with 1 tbsp warm water until fine. Set aside. Mix gelatin powder with hot water and stir until completely dissolved. Add basil seeds and blended strawberries and mix well. Spoon on top of yoghurt mixture and refrigerate for 1 hour or until topping has set.;Garnish as desired and serve chilled',
//     },
//   },
//   {
//     id: '2',
//     data: {
//       imagePath: require('../image/wrap.png'),
//       name: 'Vegetarian Wrap',
//       serving: '4',
//       calories: '150 kcal',
//       ingredients:
//         'Tortilla wrap 4 slices;Bottled pizza sauce 80g;Marinated capsicums 160g;Pitted olives 40g;Processed mozzarella cheese 40g',
//       method:
//         'Spread pizza sauce on tortilla.;Line with marinated capsicums and olives,top with mozzarella.;Roll into a wrap, then bake in pre-heated,oven at 250°C for 7 minutes.;Serve hot.',
//     },
//   },
//   {
//     id: '3',
//     data: {
//       imagePath: require('../image/salad.png'),
//       name: 'Low-Fat Waldorf Salad',
//       serving: '4',
//       calories: '163 kcal',
//       ingredients:
//         'Celery, peeled and sliced 240g;Green apple, sliced into strips 120g;Red apple, sliced into strips 120g;Tomatoes, deseeded and sliced into strips 40g;Dried apricot, sliced 30g*;Raisins 2 tbsp*;Unsalted walnut, as garnish 20g*;Orange segment, as garnish 20g',
//       method:
//         'Put the chicken breasts into an oven-proof dish and brush them with lemon juice and olive oil.;Season lightly with salt and pepper.;Cover and leave aside to marinate for 30 mins.;In a pre-heated oven at 130°C, bake the chicken breasts for about 20 minutes.;Top with thinly sliced tomatoes and bake for another 5 minutes.;Garnish with fresh, chopped parsley and serve immediately.',
//     },
//   },
//   {
//     id: '4',
//     data: {
//       imagePath: require('../image/pancake.png'),
//       name: 'Berry Yoghurt',
//       serving: '4',
//       calories: '58 kcal',
//       ingredients:
//         'Strawberry low-fat yoghurt: 200g (7 oz);Strawberries: 4, medium, cleaned, hulled and sliced;Sugar-reduced soy milk: 100ml (31⁄3 fl oz / 2⁄5 cup);Gelatine powder: 1 tsp;Hot water: 1 tbsp',
//       method:
//         'In a mixing bowl, combine yoghurt, strawberries and soy milk. Mix well and set aside.;Mix gelatin with hot water until completely dissolved. Stir into yoghurt mixture, then pour into 4 serving glasses. Set aside to cool.;Prepare topping. Blend strawberries with 1 tbsp warm water until fine. Set aside. Mix gelatin powder with hot water and stir until completely dissolved. Add basil seeds and blended strawberries and mix well. Spoon on top of yoghurt mixture and refrigerate for 1 hour or until topping has set.;Garnish as desired and serve chilled',
//     },
//   },
// ];
// const lunchDATA = [
//   {
//     id: '1',
//     data: {
//       imagePath: require('../image/salmon.png'),
//       name: 'Salmon Fillet with Honey Spice Sauce',
//       serving: '4',
//       calories: '205 kcal',
//       ingredients:
//         'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
//   {
//     id: '2',
//     data: {
//       imagePath: require('../image/pesta.png'),
//       name: 'Vegetarian Wrap',
//       serving: '4',
//       calories: '150 kcal',
//       ingredients:
//         'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
//   {
//     id: '3',
//     data: {
//       imagePath: require('../image/chicken.png'),
//       name: 'Tomato Herb Chicken',
//       serving: '4',
//       calories: '158 kcal',
//       ingredients:
//         '400g of whole chicken breasts;3 tbsp of lemon juice;2 tomatoes, thinly sliced;20g of chopped parsley;1 tbsp of olive oil*;Salt and pepper, to taste',
//       method:
//         'Put the chicken breasts into an oven-proof dish and brush them with lemon juice and olive oil.;Season lightly with salt and pepper.;Cover and leave aside to marinate for 30 mins.;In a pre-heated oven at 130°C, bake the chicken breasts for about 20 minutes.;Top with thinly sliced tomatoes and bake for another 5 minutes.;Garnish with fresh, chopped parsley and serve immediately.',
//     },
//   },
//   {
//     id: '4',
//     data: {
//       imagePath: require('../image/sandwich.png'),
//       name: 'Berry Yoghurt',
//       serving: '4',
//       calories: '58 kcal',
//       ingredients:
//         'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
// ];
// const dinnerDATA = [
//   {
//     id: '1',
//     data: {
//       imagePath: require('../image/spaghetti.png'),
//       name: 'Salmon Fillet with Honey Spice Sauce',
//       serving: '4',
//       calories: '205 kcal',
//       ingredients:
//         'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
//   {
//     id: '2',
//     data: {
//       imagePath: require('../image/potatocake.png'),
//       name: 'Vegetrap',
//       serving: '4',
//       calories: '150 kcal',
//       ingredients:
//         'ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
//   {
//     id: '3',
//     data: {
//       imagePath: require('../image/pasta.png'),
//       name: 'Tomato Herb Chicken',
//       serving: '4',
//       calories: '158 kcal',
//       ingredients:
//         'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
//   {
//     id: '4',
//     data: {
//       imagePath: require('../image/curry.png'),
//       name: 'Berry Yoghurt',
//       serving: '4',
//       calories: '58 kcal',
//       ingredients:
//         'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste',
//       method:
//         'Place honey, lemon peel, garlic powder and hot water in a small bowl and whisk until well blended.;Brush the mixture to coat the salmon fillets on both sides.;Marinate for 45 minutes in the refrigerator.;Season the salmon fillets with salt and pepper. • Heat olive oil in a skillet over medium heat.;Carefully place the salmon fillets on the skillet and cook for 4–5 minutes.;Using tongs, turn the salmon fillets.;Reduce heat to medium-low if necessary. Cook salmon fillets until they flake easily using a fork.;Garnish salmon fillets with shredded spring onion and sliced lemon. Serve hot.',
//     },
//   },
// ];

// const STORGAE_INGREDIENTS_KEY = '@save_ingredients';
// const STORAGE_METHOD_KEY = '@save_method';

export default function Homepage({navigation}) {
  const [DATA, setDATA] = useState(breakfastDATA);
  const [activeButton, setActiveButton] = useState('Breakfast');

  // to onchange to data for flatlist and onchange the active button
  const onRefresh = (whichMeal, mealDATA) => {
    setActiveButton(whichMeal);
    setDATA(mealDATA);
  };

  // const renderRecipeDATA = async function (ingredientsDATA, methodDATA) {
  //   try {
  //     // console.log(name);
  //     // console.log(password);
  //     await AsyncStorage.setItem(STORGAE_INGREDIENTS_KEY, ingredientsDATA); // wait it to finish store the data
  //     await AsyncStorage.setItem(STORAGE_METHOD_KEY, methodDATA);
  //     // alert('Data saved!');
  //     // console.log(STORAGE_METHOD_KEY);
  //     // return {
  //     //   ingredientsDATA: STORGAE_INGREDIENTS_KEY,
  //     //   methodDATA: STORAGE_METHOD_KEY,
  //     // };
  //     const RTingredientsDATA = await AsyncStorage.getItem(
  //       STORGAE_INGREDIENTS_KEY,
  //     );
  //     const RTmethodDATA = await AsyncStorage.getItem(STORAGE_METHOD_KEY);
  //     console.log(RTingredientsDATA);
  //     console.log(RTmethodDATA);

  //     var obj = {ingredientsDATA: RTingredientsDATA, methodDATA: RTmethodDATA};
  //     console.log(typeof obj);
  //     return obj;
  //   } catch (e) {
  //     console.log(e);
  //     alert('Could not save data in storage');
  //   }
  // };

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
            marginHorizontal: 13,
          }}>
          {/* use onPress to test */}
          <Icon
            reverse
            color="transparent"
            iconStyle={{color: 'black'}}
            name="person"
            size={40}
            type="ionicon"
            onPress={() => navigation.openDrawer()}
          />

          <Icon
            reverse
            color="transparent"
            iconStyle={{color: 'black'}}
            name="settings"
            size={40}
            type="materialIcons"
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
    top: 75,
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

// Problem need to solve
// 1. custom font
