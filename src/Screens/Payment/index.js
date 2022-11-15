import React from 'react';
import Component from './../../components';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Component.PaymentComp.Banner />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
