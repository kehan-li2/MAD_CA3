/* eslint-disable react-native/no-inline-styles  */

import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import {Icon} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

import {Categorydb} from '../DATA/Categorydb ';

const Item = ({item}) => {
  return (
    <View style={styles.listItem}>
      <View
        style={{
          height: 135,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image source={item.imagePath} style={{width: 50, height: 50}} />
        <Text>{item.Category}</Text>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            paddingTop: '10%',
            flex: 2,
          }}>
          <Text>GI: {item.GI}</Text>
          <Text>Calorie: {item.Calorie}</Text>
          <Text>{item.Description}</Text>
        </View>
      </View>
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
        style={{alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '5%'}}>
        {/* here should be link to another page*/}
        <Icon
          name="arrow-back"
          size={38}
          type="materialIcons"
          onPress={() => console.log('go back')}
        />
        <Text style={styles.title}>Low GI Fruits</Text>
        <View>
          <FlatList
            data={Categorydb}
            renderItem={({item}) => <Item item={item} />}
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>
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
});
