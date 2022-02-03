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
import SavedPage from '../Screens/SavedRecipe';
import CustomDrawerContent from '../Components/CustomDrawerContent';
import SettingsPage from '../Screens/8.0-SettingsPage';

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
        name="Saved Recipes"
        component={SavedPage}
        options={{
          drawerIcon: () => (
            <Icon name="stars" size={30} type="materialIcons" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          drawerIcon: () => (
            <Icon
              name="player-settings"
              size={30}
              type="fontisto"
              onPress={() => console.log('hhh')}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
