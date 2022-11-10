import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import Component from './../../components';

const index = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Component.HomeComp.Banner />
      <Component.HomeComp.SaldoKecil />
      <Component.HomeComp.Fitur />
      <Component.HomeComp.CardCarousel />
    </View>
  );
};

export default index;
