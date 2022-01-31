// P2111575
// LI KEHAN
// DIT1B04
// RatingBar.js
/* eslint-disable react-native/no-inline-styles  */

import React, {useState} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const MyRatingBar = () => {
  // To set the default heart Selected
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of hearts
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const RatingBar = () => {
    return (
      <View style={styles.myRatingBar}>
        {maxRating.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Icon
                color="#ffb8f8"
                name={item <= defaultRating ? 'heart' : 'hearto'}
                size={30}
                style={{marginLeft: 10}}
                type="antdesign"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    /* View to hold our hearts */
    <View style={{paddingBottom: 10}}>
      <RatingBar />
      <Text style={styles.textStyle}>
        {/* To show the user's rating for the recipe*/}
        {defaultRating} / {Math.max.apply(null, maxRating)}
      </Text>
    </View>
  );
};

export default MyRatingBar;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontFamily: 'Quicksand-SemiBold',
    marginTop: 2,
  },

  myRatingBar: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '58%',
  },
});
