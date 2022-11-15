import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';

const index = () => {
  return (
    <View style={styles.root}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.rp}>250 Food Orders</Text>
        <Text style={styles.kotak1}></Text>
        <Text style={styles.rp}>1.2k QR Payments</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: horizontalScale(25),
  },
  kotak1: {
    width: horizontalScale(3),
    height: verticalScale(10),
    borderRadius: moderateScale(5),
    marginTop: 'auto',
    backgroundColor: '#4c4c4c',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: verticalScale(20),
  },

  walletkcl: {
    marginLeft: horizontalScale(8),
    marginTop: verticalScale(5),
    width: horizontalScale(15),
    height: verticalScale(15),
    color: '#ffffff',
  },

  rp: {
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: moderateScale(12),
    marginVertical: verticalScale(20),
    color: '#4c4c4c',
  },
  money: {
    fontWeight: '900',
    fontSize: moderateScale(14),
    marginLeft: '1%',
    marginTop: '2%',
  },
  icon: {
    color: '#ffffff',
    width: horizontalScale(0),
    height: verticalScale(0),
    marginTop: verticalScale(4),
    marginLeft: horizontalScale(4),
    resizeMode: 'contain',
  },
});
