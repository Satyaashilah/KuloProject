import React, {Component} from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, {}]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // width: '90%',
    width: horizontalScale(280),
    height: verticalScale(50),

    borderColor: '#e8e8e8e8',
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(1),

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
