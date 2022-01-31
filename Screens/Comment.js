// P2111575
// LI KEHAN
// DIT1B04
// Comment.js
/* eslint-disable react-native/no-inline-styles  */

import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import MyRatingBar from '../Components/RatingBar';
import addComment, {commentData} from '../DATA/commentData.js';

// import firebase
import * as firebase from 'firebase';
import Mydivider from '../Components/Divider';

const background = require('../image/background.png');

const Item = ({item}) => {
  return (
    <View style={styles.listItem}>
      <View // each recipe
        style={{
          alignItems: 'center',
          flex: 1,
          height: 100,
          flexDirection: 'row',
        }}>
        {/* name and profile image */}
        <View style={{flex: 1}}>
          <Image
            source={item.data.userImage}
            style={{
              width: '50%',
              height: '60%',
              marginHorizontal: 10,
              marginTop: 5,
            }}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              width: '45%',
              color: 'black',
              fontSize: 17,
              marginLeft: 21,
              fontFamily: 'Quicksand-SemiBold',
            }}>
            {item.data.name}
          </Text>
        </View>

        {/* time and comment */}
        <View
          style={{
            flex: 2,
            alignContent: 'flex-start',
          }}>
          <Text style={{color: 'grey'}}>{item.data.time}</Text>
          <Text
            style={{
              marginVertical: 10,
              marginRight: 10,
              color: 'black',
              fontSize: 17,
              fontFamily: 'Quicksand-Italic',
            }}>
            {item.data.comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

// const CommentPage = ({navigation}) => {
//  const [data, setData] = useState([
//   arrayElement1,
//   element2,
//   element3
// ])
// data[0]
// }

export default function CommentPage({route, navigation}) {
  const [DATA, setDATA] = useState(commentData);
  const [comment, onChangecomment] = useState('');
  const {recipeName, recipeImage} = route.params;

  const user = firebase.auth().currentUser;

  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;

  /* allow user to send comment */
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      borderWidth: 1,
      borderRadius: 5,
      position: 'absolute',
      top: '91%',
    }}>
    <TextInput
      onChangeText={onChangecomment}
      value={comment}
      placeholder="Leave your comment for this recipe!"
    />
  </View>;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <ImageBackground
          source={recipeImage}
          style={{
            width: 396,
            height: 180,
            opacity: 0.85,
            position: 'absolute',
          }}
          imageStyle={{
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
          }}>
          <View style={{alignSelf: 'flex-start', paddingLeft: '4%'}}>
            {/* here should be link to another page*/}
            <Icon
              name="arrow-back"
              size={38}
              color="black"
              style={styles.arrow}
              type="materialIcons"
              onPress={() => navigation.goBack()}
            />
          </View>
          <Image
            style={{
              width: '30%',
              alignSelf: 'flex-start',
              height: '45%',
              top: 20,
            }}
            source={require('../image/comment.gif')}
          />
        </ImageBackground>
        <View>
          <Text style={styles.title}>{recipeName}</Text>
        </View>
        <MyRatingBar />
        <Mydivider />
        {/* recipes display */}
        <View style={{maxHeight: '45%', paddingTop: '3%'}}>
          <FlatList
            persistentScrollbar={true}
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          />
        </View>

        {/* allow user to send comment */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            borderWidth: 1,
            position: 'absolute',
            top: '90%',
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            maxLength={22}
            style={{fontSize: 16}}
            onChangeText={onChangecomment}
            value={comment}
            placeholder="Leave your comment here!"
          />
          <TouchableOpacity style={{alignSelf: 'center', marginLeft: 110}}>
            <Icon
              name="send"
              size={32}
              color="black"
              type="fontAwesome"
              onPress={
                (() => onChangecomment(''),
                addComment({
                  name: displayName,
                  time: new Date().toLocaleString(),
                  comment: comment,
                }))
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  arrow: {
    paddingTop: 10,
  },
  lineStyle: {
    width: '88%',
    borderWidth: 1,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderColor: '#fab255',
    marginTop: 10,
  },
  title: {
    position: 'absolute',
    fontSize: 28,
    color: '#ff6624',
    fontFamily: 'Quicksand-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: '46%',
  },
  listItem: {
    margin: 10,
    backgroundColor: '#ffe0b3',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
