/* eslint-disable react-native/no-inline-styles  */
import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
const background = require('../image/background.png');
import {useNavigation} from '@react-navigation/native'; //useNavigation() returns the navigation prop of the screen it's inside.
// import HomeStack from '../Navigation/StackNavigators';
// import SettingsPage from '../Screens/8.0-SettingsPage';

// import firebase
import {authentication} from '../firebase';
import * as firebase from 'firebase';

export default function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const user = firebase.auth().currentUser;

  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;

  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace('AuthStackScreen');
      })
      .catch(error => Alert.alert(error.message));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <DrawerContentScrollView {...props}>
          <Image
            source={require('../image/user.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 60,
              marginBottom: 10,
              alignSelf: 'center',
              marginTop: '30%',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Quicksand-Bold',
              fontSize: 22,
              paddingBottom: 40,
            }}>
            {/* Lauren */} {displayName}
          </Text>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View
          style={{
            paddingLeft: 20,
            paddingVertical: 2,
            borderTopWidth: 1.5,
            borderTopColor: 'lightgrey',
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log('go to settings page');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon name="player-settings" size={30} type="fontisto" />
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 15,
                  marginLeft: 10,
                }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignOut}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingLeft: 4,
              }}>
              <Icon name="logout" size={30} type="MaterialIcons" />
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 15,
                  marginLeft: 8,
                }}>
                Logout
              </Text>
            </View>
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
});
