import React from 'react';
import Component from './../../components';
import {StyleSheet, Text, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';
export default function App() {
  return (
    <View style={styles.root}>
      <Component.PaymentComp.Banner />
      <Component.PaymentComp.Category />
      <Component.PaymentComp.Date />
      <Component.PaymentComp.DateYesterday />
      <View style={styles.container}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(25),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
