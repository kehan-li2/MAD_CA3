// P2111575
// LI KEHAN
// DIT1B04
// AppStack.js
// /* eslint-disable react-native/no-inline-styles  */

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';

import BottomTabNavigator from './TabNavigator';
import CommentPage from '../Screens/Comment';
import RatedPage from '../Screens/Rated';
import SavedPage from '../Screens/Saved';
import CustomDrawerContent from '../Components/CustomDrawerContent';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: 'Quicksand-Bold',
          fontSize: 15,
          marginLeft: -15,
        },
        drawerActiveBackgroundColor: '#48e8e2',
        drawerActiveTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => <Icon name="home" size={35} type="ionicons" />,
        }}
      />
      <Drawer.Screen
        name="Comment"
        component={CommentPage}
        options={{
          drawerIcon: () => (
            <Icon name="comment" size={30} type="materialIcons" />
          ),
        }}
      />
      <Drawer.Screen
        name="Rated Recipes"
        component={RatedPage}
        options={{
          drawerIcon: () => <Icon name="heart" size={30} type="antdesign" />,
        }}
      />
      <Drawer.Screen
        name="Saved Recipes"
        component={SavedPage}
        options={{
          drawerIcon: () => (
            <Icon name="stars" size={30} type="materialIcons" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
