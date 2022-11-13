import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import Component, { BottomNav } from './../../components';
import { ScrollView } from 'react-native-gesture-handler';

const index = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <ScrollView>
      <Component.HomeComp.Banner />
      <Component.HomeComp.SaldoKecil />
      <Component.HomeComp.Fitur />
      <Component.HomeComp.CardCarousel />
      </ScrollView>
      <BottomNav/>
    </View>
  );
};

export default index;
