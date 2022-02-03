// P2129509
// Lee Wee Teck
// DIT1B04
// ResponsiveImage.js

import React from 'react';
import {useMemo, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ResponsiveImage = props => {
  const [containerWidth, setContainerWidth] = useState(0);
  const _onViewLayoutChange = event => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const imageStyles = useMemo(() => {
    const ratio = containerWidth / props.srcWidth;
    return {
      width: containerWidth,
      height: props.srcHeight * ratio,
    };
  }, [containerWidth, props.srcHeight, props.srcWidth]);

  return (
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image source={props.src} style={imageStyles} />
    </View>
  );
};
const styles = StyleSheet.create({
  // Styling for responsive Images
  container: {width: '90%', marginHorizontal: 20, marginTop: 10},
});

export default ResponsiveImage;
