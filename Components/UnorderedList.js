import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

// let recipeDATA =
//   'Salmon fillet, 100g-120g each 4;Honey, ready in bottle 3 tbsp;Garlic powder ½tsp;Olive oil 1 tbsp;Hot water 2 tbsp;Lemon peel, grated 1 tsp;Lemon, sliced 12;Spring Onion, shredded;Salt & pepper, to taste';
// recipeDATA = recipeDATA.split(';');

function renderList(recipeDATA) {
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
    // const {bulletUnicode, color, text} = this.props;
    const {recipeDATA} = this.props;
    return renderList(recipeDATA);
  }
}

UnorderedList.propTypes = {
  //   bulletUnicode: PropTypes.number.isRequired,
  //   color: PropTypes.string.isRequired,
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

// render() {
//     // const {bulletUnicode, color, text} = this.props;
//     const {text} = this.props;
//     return (
//       <Unorderedlist bulletUnicode={0x2765} color="black" style={styles.bullet}>
//         <Text style={styles.bulletTxt}>{text}</Text>
//       </Unorderedlist>
//     );
//   }
