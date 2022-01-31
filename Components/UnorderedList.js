// P2111575
// LI KEHAN
// DIT1B04
// UnorderedList.js
/* eslint-disable react-native/no-inline-styles  */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

function renderList(recipeDATA) {
  console.log(recipeDATA);
  recipeDATA = recipeDATA.split(';'); // to split ingredients into an array

  return recipeDATA.map((eachPart, index) => {
    return (
      // to generate the whole ingredients' list
      <Unorderedlist
        key={index}
        bulletUnicode={0x2765}
        color="black"
        style={styles.bullet}>
        <Text style={styles.bulletTxt}>{eachPart}</Text>
      </Unorderedlist>
    );
  });
}

export default class UnorderedList extends Component {
  render() {
    const {recipeDATA} = this.props;
    return renderList(recipeDATA);
  }
}

UnorderedList.propTypes = {
  recipeDATA: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  bulletTxt: {
    lineHeight: 30,
    left: 40,
    fontSize: 18,
    color: 'black',
    fontFamily: 'Quicksand-SemiBold',
  },
  bullet: {
    fontSize: 20,
    left: 40,
    lineHeight: 30,
  },
});
