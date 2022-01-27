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

import {Icon} from 'react-native-elements';

// should use sectionlist
export default function SettingsPage({navigation}) {
  const db = [
    {
      title: 'Profile',
      icon: 'account_circle',
    },
    {title: 'Email', icon: 'email'},
    {title: 'Notifications', icon: 'notifications'},
    {title: 'Privacy', icon: 'lock'},
    {title: 'Security', icon: 'security'},
    {title: 'Display Mode', icon: 'brightness_4'},
    {title: 'Text Size', icon: 'font_download'},
    {title: 'Language', icon: 'language'},
    {title: 'Contact', icon: 'chat'},
    {title: 'Terms of Service', icon: 'library_books'},
  ];

  const DisplayFlatList = ({icon, title}) => (
    <View style={{flexDirection: 'row'}}>
      <Icon
        reverse
        color="transparent"
        iconStyle={{color: 'black'}}
        size={20}
        type="material-icons"
        name={icon}
      />
      <Text
        style={{
          fontFamily: 'Quicksand-Regular',
          fontSize: 12,
          color: 'black',
        }}>
        {title}
      </Text>
    </View>
  );

  const renderItem = ({item}) => (
    <DisplayFlatList icon={item.icon} title={item.title} />
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
      <Text
        style={{
          fontFamily: 'Quicksand-Bold',
          fontSize: 28,
          color: 'black',
          marginTop: 20,
          alignSelf: 'center',
        }}>
        Settings
      </Text>

      <Text
        style={{
          fontFamily: 'Quicksand-Bold',
          fontSize: 20,
          marginTop: 40,
          marginLeft: 20,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
