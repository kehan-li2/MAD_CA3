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
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {GoBackHome} from '../Components/BackButton';
import {FoodListdb} from '../DATA/FoodListdb';

export default function FoodList({navigation}) {
  const [userInput, onChangeText] = React.useState('');

  const ListItem = ({item}) => {
    const handleNavigation = () => {
      for (let i = 0; i < FoodListdb.length; i++) {
        for (let x = 0; x < FoodListdb[i].data.length; x++) {
          if (item.category === FoodListdb[i].data[x].category) {
            navigation.navigate('Category' + item.category);
            break;
          }
        }
      }
    };
    return (
      <View style={{margin: 10, alignItems: 'center'}}>
        <TouchableOpacity onPress={handleNavigation}>
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
        <GoBackHome navigation={navigation} />

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
            sections={FoodListdb}
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
                    renderItem={({item}) => (
                      <ListItem item={item} navigation={navigation} />
                    )}
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
