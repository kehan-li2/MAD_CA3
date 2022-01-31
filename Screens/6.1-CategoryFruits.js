/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';

import {Icon} from 'react-native-elements';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {Categorydb} from '../DATA/6.1-CategoryFruits';

const Item = ({item, navigation}) => {
  const handleNavigation = () => {
    for (let i = 0; i < Categorydb.length; i++) {
      if (item.category === Categorydb[i].category) {
        navigation.navigate('Elaborated' + item.category);
        break;
      }
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleNavigation();
        }}>
        <View
          style={
            item.lastItem
              ? {
                  height: 100,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  margin: 15,
                  marginBottom: 80,
                }
              : {
                  height: 100,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  margin: 15,
                }
          }>
          <View style={{flexDirection: 'column', marginRight: 10}}>
            <Image source={item.imagePath} style={{width: 90, height: 75}} />
            <Text
              style={{
                fontFamily: 'Quicksand-Bold',
                color: 'black',
                textAlign: 'center',
              }}>
              {item.category}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              width: '60%',
              padding: 10,
              borderWidth: 1,
              borderRadius: 18,
              alignSelf: 'flex-start',
            }}>
            <Text style={styles.cat_info}>
              <Text style={styles.cat_header}>GI:</Text> {item.GI}
            </Text>
            <Text style={styles.cat_info}>
              <Text style={styles.cat_header}>Calorie:</Text> {item.Calorie}
            </Text>
            <Text style={{fontFamily: 'Quicksand-SemiBold'}}>
              {item.Description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function Category({navigation}) {
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Category</Text>
    // </View>
    <View style={{flex: 1, alignContent: 'center'}}>
      <View
        style={{alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: 10}}>
        {/* here should be link to home page*/}
        <Icon
          name="arrow-back"
          size={38}
          style={styles.arrow}
          type="materialIcons"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Low GI Fruits</Text>
      </View>
      <View style={{marginTop: 60}}>
        <FlatList
          data={Categorydb}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    margin: '10%',
    fontSize: 30,
    color: '#ff6624',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    marginLeft: 100,
  },
  cat_info: {
    fontFamily: 'Quicksand-Regular',
    color: 'black',
  },
  cat_header: {fontFamily: 'Quicksand-Bold', color: 'black'},
});