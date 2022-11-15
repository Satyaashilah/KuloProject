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
    <View>
      <View style={styles.itemCol}>
        <Component.HomeComp.Banner />
        <Component.HomeComp.SaldoKecil />
        <Component.HomeComp.Saldo />
        <Component.HomeComp.Orders />
        <Component.HomeComp.Fitur />
        <Component.HomeComp.CardCarousel />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(50),
  },
  root2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
  },
  itemCol: {
    flexDirection: 'column',
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(1),
  },
  itemRow: {
    flexDirection: 'row',
  },
});
