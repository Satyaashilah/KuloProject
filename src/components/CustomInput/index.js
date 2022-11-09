import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';

const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: horizontalScale(280),
    height: verticalScale(50),

    borderColor: '#e8e8e8e8',
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(1),
  },
});
