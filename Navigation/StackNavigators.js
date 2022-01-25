// stack navigator --> AppStack
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from '../Screens/3.0-Homepage';
import Calculator from '../Screens/4.0-BMIcalculator';
import RecipePage from '../Screens/5.0-Recipe';
import SettingsPage from '../Screens/8.0-SettingsPage';
import BMIresult from '../Screens/4.1-BMIresult';
import FoodList from '../Screens/6.0-Foodlist';
import Category from '../Screens/6.1-Category';
import Elaborated from '../Screens/6.2-Elaborated';

// import MyDrawer from './MyDrawer';

const Stack = createNativeStackNavigator(); // create stack navigator

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerTransparent: true,
        headerShadowVisible: false, // to hide shadow when header is set to transparent
        headerTitle: '', // to set title as empty
        // header:layout,back
      }}>
      <Stack.Screen name="HomeScreen" component={Homepage} />
      <Stack.Screen name="RecipeScreen" component={RecipePage} />
      <Stack.Screen name="SettingsScreen" component={SettingsPage} />
    </Stack.Navigator>
  );
};

const CalculatorStack = () => {
  return (
    // {/* initial the start page */}
    <Stack.Navigator
      initialRouteName="BMICalculatorScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BMICalculatorScreen" component={Calculator} />
      <Stack.Screen name="BMIresultScreen" component={BMIresult} />
      <Stack.Screen name="RecipeScreen" component={RecipePage} />
    </Stack.Navigator>
  );
};

const FoodListStack = () => {
  return (
    // {/* initial the start page */}
    <Stack.Navigator
      initialRouteName="FoodListScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FoodListScreen" component={FoodList} />
      <Stack.Screen name="CategoryScreen" component={Category} />
      <Stack.Screen name="ElaboratedScreen" component={Elaborated} />
    </Stack.Navigator>
  );
};
export {HomeStack, CalculatorStack, FoodListStack};
