/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  HundredGrams,
  BigServing,
  MediumServing,
  SmallServings,
} from '../DATA/6.2-ElaboratedNoodledb';

import {CategoryMainFooddb} from '../DATA/6.1-CategoryMainFoodsdb';
// updated with dynamic database

// import CustomButton from '../Components/CustomButton';
import {Icon} from 'react-native-elements';
import {Categorydb} from '../DATA/6.1-CategoryFruitsdb';

const Item = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}>
      {item.multiText ? (
        <Text
          style={
            item.header
              ? {
                  ...styles.flatlistCategory,
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 20,
                  marginTop: 10,
                  marginRight: 23,
                }
              : {...styles.flatlistCategory}
          }>
          {item.Category}
        </Text>
      ) : (
        <Text
          style={
            item.header
              ? {
                  ...styles.flatlistCategory,
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 20,
                }
              : {...styles.flatlistCategory}
          }>
          {item.Category}
        </Text>
      )}

      <Text
        style={
          item.multiText
            ? {...styles.flatlistContent, textAlign: 'center'}
            : {...styles.flatlistContent}
        }>
        {item.value}
      </Text>
    </View>
  );
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

    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../image/background.png')}
        imageStyle={{
          opacity: 0.1,
          resizeMode: 'stretch',
        }}>
        <View
          style={{alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: 10}}>
          {/* here should be link to another page*/}
          <Icon
            name="arrow-back"
            size={38}
            style={styles.arrow}
            type="materialIcons"
            onPress={() => navigation.navigate('CategoryMainFood')}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginRight: 25,
          }}>
          <Image
            source={Categorydb[0].imagePath}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
          <View>
            <View style={{...styles.elaboratedDataText, marginBottom: 3}}>
              <Text style={{...styles.elaboratedDataName, marginTop: 2}}>
                {CategoryMainFooddb[0].category}
              </Text>
              <Text style={styles.elaboratedDataInfo}>
                {CategoryMainFooddb[0].Calorie}
              </Text>
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
              <Text style={styles.elaboratedDataInfo}>
                {CategoryMainFooddb[0].GI}
              </Text>
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
            marginTop: 15,
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
                  activeButton === 'One Serving (Big)' ? '#37e6e3' : '#8de0df',
              },
            ]}>
            <Text style={styles.buttonText}> One Serving (Big)</Text>
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
              onRefresh('One Serving (Small)', SmallServings);
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
          {/* <View style={{maxHeight: '100%', paddingTop: 10}}> */}
          {/* </View> */}
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        </View>

        {/* <MyTabs />
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button mode="contained" color="turquoise" style={{width: 200}}>
              Load More
            </Button>
          </View> */}
        {/* <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            text="Load More"
            type="quaternary"
            onPress={() => console.log('Loading...')}
          />
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '35%',
            marginTop: 30,
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
    paddingRight: 70,
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
    marginRight: 55,
    width: '60%',
    marginBottom: 10,
  },
  flatlistContent: {
    color: 'grey',
    fontWeight: '600',
    width: '30%',
    paddingTop: 15,
    fontSize: 17,
    marginBottom: 15,
  },
  button: {
    // backgroundColor: '#8de0df',
    width: '28%',
    // height: 40,
    // top: 46,
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
