/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  HundredGrams,
  BigServing,
  MediumServing,
  SmallServings,
} from '../DATA/ElaboratedData';

const Item = ({title, value, header}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}>
      <Text
        style={
          header
            ? {
                ...styles.flatlistCategory,
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
              }
            : {...styles.flatlistCategory}
        }>
        {title}
      </Text>
      <Text style={styles.flatlistContent}> {value}</Text>
    </View>
  );
};

const renderItem = ({item}) => {
  <Item title={item.Category} value={item.value} header={item.header} />;
};

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'grey',
      }}
    />
  );
};

export default function Elaborated({navigation}) {
  const [DATA, setDATA] = useState(HundredGrams);
  const [activeButton, setActiveButton] = useState('100g');

  // function to change data in flatlist when button is clicked
  const onRefresh = (selectedServing, servingDATA) => {
    setActiveButton(selectedServing);
    setDATA(servingDATA);
  };

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Elaborated</Text>
    // </View>
    <ScrollView>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../image/background.png')}
          imageStyle={{
            opacity: 0.1,
            resizeMode: 'stretch',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../image/Icons/backArrow.png')}
              resizeMode="contain"
              style={{
                width: 38,
                height: 38,
                marginTop: 15,
                marginHorizontal: 15,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 25,
            }}>
            <Image
              source={require('../image/Icons/appleIcon.png')}
              resizeMode="contain"
              style={{width: 100, height: 100}}
            />
            <View>
              <View style={{...styles.elaboratedDataText, marginBottom: 3}}>
                <Text style={{...styles.elaboratedDataName, marginTop: 2}}>
                  Apple
                </Text>
                <Text style={styles.elaboratedDataInfo}>52kcal / 100g</Text>
              </View>
              <View style={styles.elaboratedDataText}>
                <Text
                  style={{
                    ...styles.elaboratedDataName,
                    paddingRight: 200,
                    marginTop: 2,
                  }}>
                  GI
                </Text>
                <Text style={styles.elaboratedDataInfo}>32</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1.5,
              width: '85%',
              marginHorizontal: 30,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => onRefresh('100g', HundredGrams)}
              style={[
                styles.button,
                {
                  backgroundColor:
                    activeButton === '100g' ? '#37e6e3' : '#8de0df',
                },
              ]}>
              <Text style={styles.buttonText}>100g</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onRefresh('One Serving (Big)', BigServing);
              }}
              style={[
                styles.button,
                {
                  backgroundColor:
                    activeButton === 'One Serving (Big)'
                      ? '#37e6e3'
                      : '#8de0df',
                },
              ]}>
              <Text style={styles.buttonText}> One Serving (BIG)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onRefresh('One Serving (Medium)', MediumServing);
              }}
              style={[
                styles.button,
                {
                  backgroundColor:
                    activeButton === 'One Serving (Medium)'
                      ? '#37e6e3'
                      : '#8de0df',
                },
              ]}>
              <Text style={styles.buttonText}> One Serving (Medium)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onRefresh('One Serving (Small)', MediumServing);
              }}
              style={[
                styles.button,
                {
                  backgroundColor:
                    activeButton === 'One Serving (Small)'
                      ? '#37e6e3'
                      : '#8de0df',
                },
              ]}>
              <Text style={styles.buttonText}> One Serving (Small)</Text>
            </TouchableOpacity>
            <View style={{maxHeight: '75%', paddingTop: '10%'}}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          {/* <MyTabs />
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button mode="contained" color="turquoise" style={{width: 200}}>
              Load More
            </Button>
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              width: '35%',
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Image
              source={require('../image/Icons/greenDot.png')}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
            <Text style={{color: '#92ca79', fontFamily: 'Quicksand-Bold'}}>
              Suggested!
            </Text>
            <Image
              source={require('../image/Icons/smileyEmoji.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </View>
          <Text
            style={{
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 4,
              backgroundColor: 'white',
              width: '90%',
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              padding: 5,
              fontFamily: 'Quicksand-Bold',
              fontSize: 16,
              color: 'black',
            }}>
            Rich in Vitamin C & Antioxidants! Contain Fiber, which stabilizes
            blood sugar levels.
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ----------------------------------------------------------------------------------------------------
  // Styles for Elaborated Data (6.2)
  elaboratedDataText: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  elaboratedDataName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 22,
    paddingRight: 100,
    color: 'black',
    paddingBottom: 6,
  },
  elaboratedDataInfo: {
    paddingTop: 4,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
  },
  flatlistCategory: {
    fontSize: 19,
    fontFamily: 'Quicksand-Medium',
    paddingTop: 10,
    marginHorizontal: 20,
    marginRight: 30,
    width: '70%',
  },
  flatlistContent: {
    color: 'grey',
    fontWeight: '600',
    width: '20%',
    paddingTop: 15,
    fontSize: 17,
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
});
