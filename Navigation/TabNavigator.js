// P2111575
// LI KEHAN
// DIT1B04
// TabNavigator.js

// Tab navigator
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, CalculatorStack, FoodListStack} from './StackNavigators';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Homepage" // to delcare homepage is the initial screen
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // to hide the label
        tabBarHideOnKeyboard: true, // hide the bottom tab when keyboard open
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'tomato',
      }}>
      <Tab.Screen
        name="FoodList"
        component={FoodListStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bowl-mix" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Homepage"
        component={HomeStack}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="calculate" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
