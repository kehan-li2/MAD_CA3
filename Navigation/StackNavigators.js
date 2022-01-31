// stack navigator --> AppStack
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from '../Screens/3.0-Homepage';
import Calculator from '../Screens/4.0-BMIcalculator';
import RecipePage from '../Screens/5.0-Recipe';
import SettingsPage from '../Screens/8.0-SettingsPage';
import BMIresult from '../Screens/4.1-BMIresult';
import FoodList from '../Screens/6.0-Foodlist';
import Category from '../Screens/6.1-CategoryFruits';
import ElaboratedApple from '../Screens/6.2-ElaboratedApple';
import ElaboratedGrape from '../Screens/6.2-ElaboratedGrape';
import ElaboratedOrange from '../Screens/6.2-ElaboratedOrange';
import ElaboratedBanana from '../Screens/6.2-ElaboratedBanana';
import ElaboratedWatermelon from '../Screens/6.2-ElaboratedWatermelon';
import CategoryMilk from '../Screens/6.1-CategoryMilk';
import CategoryCheese from '../Screens/6.1-CategoryCheese';
import ElaboratedNoodle from '../Screens/6.2-ElaboratedNoodle';
import CategoryMainFood from '../Screens/6.1-CategoryMainFoods';
import ElaboratedRice from '../Screens/6.2-ElaboratedRice';
import ElaboratedBread from '../Screens/6.2-ElaboratedBread';
import ElaboratedOats from '../Screens/6.2-ElaboratedOats';
import ElaboratedPotato from '../Screens/6.2-ElaboratedPotato';
import CategoryMeats from '../Screens/6.1-CategoryMeats';
import ElaboratedBeef from '../Screens/6.2-ElaboratedBeef';
import ElaboratedChicken from '../Screens/6.2-ElaboratedChicken';
import ElaboratedPork from '../Screens/6.2-ElaboratedPork';
import ElaboratedSalmon from '../Screens/6.2-ElaboratedSalmon';
import ElaboratedRabbit from '../Screens/6.2-ElaboratedRabbit';
import CommentPage from '../Screens/Comment';
// import MyDrawer from './MyDrawer';

const Stack = createNativeStackNavigator(); // create stack navigator

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerShadowVisible: false, // to hide shadow when header is set to transparent
        headerTitle: '', // to set title as empty
        // header:layout,back
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CommentScreen"
        component={CommentPage}
        options={{headerShown: false}}
      />
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
      <Stack.Screen name="CategoryFruits" component={Category} />
      <Stack.Screen name="ElaboratedApple" component={ElaboratedApple} />
      <Stack.Screen name="ElaboratedGrape" component={ElaboratedGrape} />
      <Stack.Screen name="ElaboratedOrange" component={ElaboratedOrange} />
      <Stack.Screen name="ElaboratedBanana" component={ElaboratedBanana} />
      <Stack.Screen
        name="ElaboratedWatermelon"
        component={ElaboratedWatermelon}
      />
      <Stack.Screen name="CategoryMilk" component={CategoryMilk} />
      <Stack.Screen name="CategoryCheese" component={CategoryCheese} />
      <Stack.Screen name="ElaboratedNoodle" component={ElaboratedNoodle} />
      <Stack.Screen name="ElaboratedRice" component={ElaboratedRice} />
      <Stack.Screen name="CategoryMainFood" component={CategoryMainFood} />
      <Stack.Screen name="ElaboratedBread" component={ElaboratedBread} />
      <Stack.Screen name="ElaboratedOats" component={ElaboratedOats} />
      <Stack.Screen name="ElaboratedPotato" component={ElaboratedPotato} />
      <Stack.Screen name="CategoryMeats" component={CategoryMeats} />
      <Stack.Screen name="ElaboratedBeef" component={ElaboratedBeef} />
      <Stack.Screen name="ElaboratedChicken" component={ElaboratedChicken} />
      <Stack.Screen name="ElaboratedPork" component={ElaboratedPork} />
      <Stack.Screen name="ElaboratedSalmon" component={ElaboratedSalmon} />
      <Stack.Screen name="ElaboratedRabbit" component={ElaboratedRabbit} />
    </Stack.Navigator>
  );
};
export {HomeStack, CalculatorStack, FoodListStack};
