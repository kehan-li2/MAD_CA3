import imageToBase64 from 'image-to-base64/browser';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
const STORGAE_IMAGE_KEY = '@save_IMAGE';

const convertImage = imagePath =>
  new Promise((resolve, reject) => {
    imageToBase64(imagePath)
      .then(async response => {
        await AsyncStorage.setItems(STORGAE_IMAGE_KEY, response);
        console.log('data saved');
        resolve();
      })
      .catch(err => {
        console.log('data not saved');
        reject(err);
      });
  });

export default async function SaveImage() {
  return (async () => await convertImage('../image/yoghurt.png'))();
}
