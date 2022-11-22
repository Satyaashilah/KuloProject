import React from 'react';
import Component from '../../components';
import {StyleSheet, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Theme/Metric';

const Home = () => {
  return (
    <View style={styles.root}>
      <View style={styles.root2}>
        <View style={styles.itemCol}>
          <Component.HomeComp.Banner />
          <Component.HomeComp.SaldoKecil />
          <Component.HomeComp.Saldo />
          <Component.HomeComp.Orders />
          <Component.HomeComp.Fitur />
          <Component.HomeComp.CardCarousel />
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
  },
  root2: {
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(1),
    paddingHorizontal: horizontalScale(25),
  },
  itemCol: {
    flexDirection: 'column',
  },
  itemRow: {
    flexDirection: 'row',
  },
});
