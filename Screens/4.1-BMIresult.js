// P2129509
// Lee Wee Teck
// DIT1B04
// BMIresult.js

/* eslint-disable react-native/no-inline-styles  */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';
import {GoBackButton} from '../Components/BackButton';

import ResponsiveImage from '../Components/ResponsiveImage';

// imports for conditional rendering
import {LowerThan20, HigherThan20} from '../DATA/4.1-BMIResultdb';
import {breakfastDATA, lunchDATA, dinnerDATA} from '../DATA/RecipeData';

export default function BMIResult({route, navigation}) {
  const {recipeName, recipeImage, ingredientsDATA, methodDATA} = route.params;

  const {age, weight, height, gender, activityLevel} = route.params;

  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);

  // Codes for rendering FlatList Items

  // const db = [
  //   {Category: 'Energy', value: '1,845kcal'},
  //   {
  //     Category: 'Carbohydrate',
  //     value: '230g',
  //   },
  //   {
  //     Category: 'Protein',
  //     value: '50g',
  //   },
  //   {
  //     Category: 'Fat',
  //     value: '40g',
  //     lastItem: true,
  //   },
  // ];

  const DisplayFlatlist = ({title, content, lastItem}) => (
    <View
      style={{
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center',
      }}>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <Text style={styles.flatlistCategory}>{title}</Text>
        <Text style={styles.flatlistContent}>{content}</Text>
        {/* <Image
          style={{width: 20, height: 20, margin: 10, marginTop: 13}}
          source={require('../image/Icons/info-icon.png')}
        /> */}
        <Icon
          name="alert-circle-outline"
          size={20}
          iconStyle={{marginTop: 10, color: 'grey'}}
          type="material-community"
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <DisplayFlatlist
      title={item.Category}
      content={item.value}
      lastItem={item.header}
    />
  );

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: 'grey',
          alignSelf: 'center',
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../image/background.png')}
        imageStyle={{
          opacity: 0.1,
          resizeMode: 'cover',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <GoBackButton navigation={navigation} />
          <Text style={styles.header}>Your BMI Is: {BMI}</Text>
        </View>
        <View>
          <Image
            source={require('../image/BMI/BMI.jpg')}
            style={styles.Image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.intake}>
          <Text
            style={{
              fontSize: 18.8,
              padding: 6,
              fontFamily: 'Quicksand-SemiBold',
              paddingHorizontal: 11,
            }}>
            Recommended Daily Intake Of Nutrients
          </Text>
        </View>
        <View style={{flex: 7}}>
          {BMI > 20 ? (
            <FlatList
              data={HigherThan20}
              renderItem={renderItem}
              keyExtractor={item => item.Category}
              ItemSeparatorComponent={FlatListItemSeparator}
            />
          ) : (
            <FlatList
              data={LowerThan20}
              renderItem={renderItem}
              keyExtractor={item => item.Category}
              ItemSeparatorComponent={FlatListItemSeparator}
            />
          )}
        </View>
        <View>
          {BMI > 20 ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RecipeScreen', {
                  recipeName: lunchDATA[0].data.name,
                  recipeImage: lunchDATA[0].data.imagePath,
                  ingredientsDATA: lunchDATA[0].data.ingredients,
                  methodDATA: lunchDATA[0].data.method,
                })
              }>
              <ResponsiveImage
                src={require('../image/BMI/salmon.png')}
                srcWidth={926}
                srcHeight={443}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RecipeScreen', {
                  recipeName: breakfastDATA[1].data.name,
                  recipeImage: breakfastDATA[1].data.imagePath,
                  ingredientsDATA: breakfastDATA[1].data.ingredients,
                  methodDATA: breakfastDATA[1].data.method,
                })
              }>
              <ResponsiveImage
                src={require('../image/BMI/VegetarianWrap.png')}
                srcWidth={926}
                srcHeight={443}
              />
            </TouchableOpacity>
          )}

          <View style={{position: 'absolute'}}>
            {BMI > 20 ? (
              <View
                style={{
                  width: 150,
                  marginLeft: 215,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 16.3,
                    color: 'white',
                    marginBottom: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Salmon Fillet with Honey Spice Sauce
                </Text>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 13,
                    color: 'white',
                  }}>
                  Juicy, succulent fish alongside a sweet spicy sauce
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontFamily: 'Quicksand-Bold',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: 20,
                    color: 'lightgreen',
                    marginTop: 8,
                  }}>
                  Meals For You!
                </Text>
              </View>
            ) : (
              <View
                style={{
                  width: 150,
                  marginLeft: 215,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 17,
                    color: 'white',
                    marginBottom: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Vegetarian Wrap
                </Text>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 13,
                    color: 'white',
                  }}>
                  Savour the juicy vegetables along side a taut tortilla.
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontFamily: 'Quicksand-Bold',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: 20,
                    color: 'lightgreen',
                    marginTop: 8,
                  }}>
                  Meals For You!
                </Text>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles for BMICalculator Screen (4.1)------------------------------------------------------------------------------------------------------------------
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: 200,
  },
  header: {
    color: 'red',
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    marginTop: 40,
    marginLeft: 28,
    justifyContent: 'center',
    textAlign: 'center',
  },
  intake: {
    backgroundColor: '#ffc3ae',
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#feb79c',
    width: '100%',
  },
  // styles for flatlist
  flatlistCategory: {
    fontSize: 19,
    fontFamily: 'Quicksand-Bold',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingRight: 40,
    paddingTop: 5,
    width: '70%',
  },
  flatlistContent: {
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    fontSize: 15,
    fontFamily: 'Quicksand-Medium',
    paddingTop: 8,
    paddingBottom: 10,
  },
});
