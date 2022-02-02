// P2111575
// LI KEHAN
// DIT1B04
// OnboardingScreen.js
/* eslint-disable react-native/no-inline-styles  */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const background = require('../image/background.png');

const Skip = ({...props}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text
        style={{fontSize: 17, fontFamily: 'Quicksand-Bold', color: '#057eff'}}>
        Skip
      </Text>
    </TouchableOpacity>
  );
};

const Next = ({...props}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text
        style={{fontSize: 17, fontFamily: 'Quicksand-Bold', color: '#057eff'}}>
        Next
      </Text>
    </TouchableOpacity>
  );
};

const Done = ({...props}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text
        style={{fontSize: 17, fontFamily: 'Quicksand-Bold', color: '#057eff'}}>
        Done
      </Text>
    </TouchableOpacity>
  );
};

// selected is the prop to indicate the active page.
const DotSwitch = ({selected}) => {
  let backgroundColor = selected ? '#7dffd6' : '#c7c7c5';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Title = ({text}) => {
  return (
    <Text
      style={{
        paddingBottom: 8,
        fontFamily: 'Quicksand-Bold',
        color: 'black',
        fontSize: 26,
      }}>
      {text}
    </Text>
  );
};

const SubTitle = ({text}) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Quicksand-Regular',
          color: '#01401d',
          fontSize: 20,
        }}>
        {text}
      </Text>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{opacity: 0.1}}>
        <Onboarding
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          DotComponent={DotSwitch}
          onSkip={() => navigation.replace('LoginScreen')}
          onDone={() => navigation.navigate('LoginScreen')}
          pages={[
            {
              image: <Image source={require('../image/onboarding1.jpg')} />,
              title: <Title text={'Explore Your Recipes'} />,
              subtitle: <SubTitle text={'Find your favourite recipes here!'} />,
            },
            {
              image: <Image source={require('../image/onboarding2.jpg')} />,
              title: <Title text={'Find Your Ingredients'} />,
              subtitle: (
                <SubTitle
                  text={
                    'Food list with many categories is provided based on your needs!'
                  }
                />
              ),
            },
            {
              image: <Image source={require('../image/onboarding3.jpg')} />,
              title: <Title text={'Just For You'} />,
              subtitle: (
                <SubTitle
                  text={
                    'BMI calculator suggests your own recipe, just for you!'
                  }
                />
              ),
            },
          ]}
        />
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
