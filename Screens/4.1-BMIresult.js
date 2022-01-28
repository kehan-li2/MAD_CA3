/* eslint-disable react-native/no-inline-styles  */

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

import {useMemo, useState} from 'react';

import {Icon} from 'react-native-elements';

const ResponsiveImage = props => {
  const [containerWidth, setContainerWidth] = useState(0);
  const _onViewLayoutChange = event => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const imageStyles = useMemo(() => {
    const ratio = containerWidth / props.srcWidth;
    return {
      width: containerWidth,
      height: props.srcHeight * ratio,
    };
  }, [containerWidth, props.srcHeight, props.srcWidth]);

  return (
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={imageStyles} />
    </View>
  );
};

export default function BMIResult({route, navigation}) {
  const {age, weight, height, gender, activityLevel} = route.params;

  // Codes for rendering FlatList Items

  const db = [
    {Category: 'Energy', value: '1,845kcal'},
    {
      Category: 'Carbohydrate',
      value: '230g',
    },
    {
      Category: 'Protein',
      value: '50g',
    },
    {
      Category: 'Fat',
      value: '40g',
      lastItem: true,
    },
  ];

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
          <Text style={styles.header}>Your BMI is: 19.5</Text>
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
          <FlatList
            data={db}
            renderItem={renderItem}
            keyExtractor={item => item.Category}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        </View>
        <View>
          <TouchableOpacity onPress={console.log('link back to recipe page')}>
            <ResponsiveImage
              src={require('../image/BMI/BMIFood.png')}
              srcWidth={926}
              srcHeight={443}
            />
          </TouchableOpacity>

          <View style={{position: 'absolute'}}>
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
                  fontSize: 15,
                  color: 'white',
                  marginBottom: 10,
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                GRILLED ROSEMARY LEMON CHICKEN
              </Text>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 13,
                  color: 'white',
                  justifyContent: 'center',
                }}>
                Savour the exceptional flavours of zesty lemon on grilled
                chicken.
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
          </View>
        </View>
      </ImageBackground>
    </View>

    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Foohhhhd List</Text>

    //   <Text>
    //     {age}
    //     {weight}
    //     {height}
    //     {gender}
    //     {activityLevel}
    //   </Text>
    // </View>
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
    marginLeft: 10,
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

  // Styling for responsive Images
  container: {width: '90%', marginHorizontal: 20, marginTop: 10},
});
