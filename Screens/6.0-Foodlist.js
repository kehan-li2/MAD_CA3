/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  SectionList,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function FoodList({navigation}) {
  const [userInput, onChangeText] = React.useState('');

  const db = [
    {
      title: 'Reduce weight',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Low GI - Main Food',
          image: require('../image/FoodListScreen/chowMein.jpg'),
        },
        // {
        //   key: '2',
        //   text: 'Low GI - Fruits',
        //   image: require('../assets/FoodListScreen/avocado.jpg'),
        // },
        {
          key: '3',
          text: 'Low Calorie - Fruits',
          image: require('../image/FoodListScreen/fruits.jpg'),
        },
      ],
    },
    {
      title: 'Calcium Supplement',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Milk',
          image: require('../image/FoodListScreen/Milk.jpg'),
        },
        {
          key: '2',
          text: 'Cheese',
          image: require('../image/FoodListScreen/cheeseBoard.jpg'),
        },
        // {
        //   key: '3',
        //   text: 'Yoghurt',
        //   image: require('../assets/FoodListScreen/almondSoyMilk.jpg'),
        // },
      ],
    },
    {
      title: 'Anti Anaemic',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Kale',
          image: require('../image/FoodListScreen/kale.jpg'),
        },
        {
          key: '2',
          text: 'Pomegranate',
          image: require('../image/FoodListScreen/pomegranate.jpeg'),
        },
        {
          key: '3',
          text: 'Swiss Chard',
          image: require('../image/FoodListScreen/swissChard.jpg'),
        },
      ],
    },
    {
      title: 'Hypertension',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Salmon',
          image: require('../image/FoodListScreen/salmon.jpg'),
        },
        {
          key: '2',
          text: 'Citrus Fruits',
          image: require('../image/FoodListScreen/citrusFruits.jpg'),
        },
        {
          key: '3',
          text: 'Berries',
          image: require('../image/FoodListScreen/berries.jpg'),
        },
      ],
    },
    {
      title: 'Diabetes',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Trans Fats',
          image: require('../image/FoodListScreen/transFats.jpg'),
        },
        {
          key: '2',
          text: 'High Carb Foods',
          image: require('../image/FoodListScreen/highCarbs.png'),
        },
      ],
    },
  ];

  const ListItem = ({item}) => {
    return (
      <View style={{margin: 10, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{width: 165, height: 165}}
          />
          <Text
            style={{
              color: 'black',
              fontFamily: 'Quicksand-Bold',
              fontSize: 16,
            }}>
            {item.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ImageBackground
        source={require('../image/background.png')}
        imageStyle={{
          opacity: 0.1,
          resizeMode: 'cover',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../image/Icons/backArrow.png')}
            resizeMode="contain"
            style={{width: 38, height: 38, marginTop: 15, marginHorizontal: 15}}
          />
        </TouchableOpacity>

        <View style={styles.TextInput}>
          <Image
            style={styles.TextInputIcon}
            source={require('../image/Icons/searchIcon.png')}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={userInput}
            placeholder="Search Food Nutrition and Calories"
          />
        </View>

        <Text style={styles.FoodListHeader}>Food Ranking List</Text>

        <View style={{flex: 1}}>
          <SectionList
            contentContainerStyle={{paddingHorizontal: 10}}
            stickySectionHeadersEnabled={false}
            sections={db}
            renderSectionHeader={({section}) => (
              <>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 20.5,
                    color: 'black',
                    marginTop: 20,
                    marginBottom: 5,
                    marginLeft: 10,
                  }}>
                  {section.title}
                </Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({item}) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({item, section}) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Styles for FoodList Screen (6.0)
  // SearchBox Styles
  TextInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    height: 40,
    borderRadius: 20,
    margin: 10,
    width: '90%',
    marginLeft: 20,
  },
  TextInputIcon: {
    padding: 10,
    margin: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
    width: 10,
    height: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Quicksand-Bold',
  },
  // Screen Header Styles
  FoodListHeader: {
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    color: '#ff6624',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
