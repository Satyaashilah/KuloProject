import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(280),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: horizontalScale(2),
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: '#3B71F3',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});
