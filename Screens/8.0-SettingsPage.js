/* eslint-disable react-native/no-inline-styles  */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';

import {GoBackHome} from '../Components/BackButton';
import {Icon} from 'react-native-elements';
const background = require('../image/background.png');
// importing of back button
import CustomBackButton from '../Components/CustomBackButton';

// should use sectionlist
export default function SettingsPage({navigation}) {
  const db = [
    {
      title: 'Profile',
      type: 'ionicon',
      icon: 'person-circle-outline',
    },
    {title: 'Email', type: 'material-icons', icon: 'email'},
    {title: 'Notifications', type: 'material-icons', icon: 'notifications'},
    {title: 'Privacy', type: 'material-icons', icon: 'lock'},
    {title: 'Security', type: 'material-icons', icon: 'security'},
    {title: 'Display Mode', type: 'material-community', icon: 'brightness-6'},
    {
      title: 'Text Size',
      type: 'material-community',
      icon: 'format-annotation-plus',
    },
    {title: 'Language', type: 'material-icons', icon: 'language'},
    {title: 'Contact', type: 'material-icons', icon: 'chat'},
    {
      title: 'Terms of Service',
      type: 'material-community',
      icon: 'book-open-variant',
    },
  ];

  const DisplayFlatList = ({icon, title, type}) => (
    <TouchableOpacity style={{marginTop: 5}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Icon
          reverse
          color="transparent"
          iconStyle={{color: 'black', flex: 1}}
          size={25}
          type={type}
          name={icon}
        />
        <Text
          style={{
            fontFamily: 'Quicksand-SemiBold',
            fontSize: 16,
            color: 'black',
            flex: 1,
            marginTop: 7,
          }}>
          {title}
        </Text>
        <Icon
          reverse
          color="transparent"
          iconStyle={{
            color: 'black',
            marginBottom: 1,
            marginLeft: 20,
            flex: 1,
          }}
          size={30}
          type="material-community"
          name="chevron-right"
        />
        {/* Unable to get arrows to style towards the end of the flatlist */}
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <DisplayFlatList icon={item.icon} title={item.title} type={item.type} />
  );

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#B4B4B4',
          alignSelf: 'center',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <GoBackHome navigation={navigation} />
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 28,
            color: 'black',
            alignSelf: 'center',
          }}>
          Settings
        </Text>

        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 20,
            marginTop: 35,
            marginLeft: 25,
          }}>
          Account Settings
        </Text>
        <View style={{marginTop: 4}}>
          <FlatListItemSeparator />
        </View>
        <FlatList data={db} renderItem={renderItem} />
        {/* <Button title="go back" onPress={() => navigation.navigate('HomeScreen')}>
        Go back
      </Button> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
