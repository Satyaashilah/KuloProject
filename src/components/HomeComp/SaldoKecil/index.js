import {StyleSheet, Text, View, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';
import {library} from '@fortawesome/fontawesome-svg-core';
const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => IconsSolid[icon]);

let iconListBrand = Object.keys(IconBrand)
  .filter(key => key !== 'fab' && key !== 'prefix')
  .map(icon => IconBrand[icon]);

library.add(...iconListBrand, ...iconListSolid);
const index = () => {
  return (
    <View style={styles.kotak1}>
      <View style={{flexDirection: 'row'}}>
        <FontAwesomeIcon icon={['fas', 'wallet']} style={styles.walletkcl} />
        <Text style={styles.rp}>Rp</Text>
        <Text style={styles.money}>10,000.00</Text>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} style={styles.icon} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  kotak1: {
    height: verticalScale(25),
    width: horizontalScale(120),
    borderRadius: moderateScale(25),
    backgroundColor: '#F1592A',
    marginTop: verticalScale(20),
  },

  walletkcl: {
    marginLeft: horizontalScale(8),
    marginTop: verticalScale(5),
    width: horizontalScale(15),
    height: verticalScale(15),
    color: '#ffffff',
  },

  rp: {
    fontWeight: 'normal',
    fontSize: moderateScale(8),
    marginLeft: '1%',
    marginTop: '4%',
    color: '#ffffff',
  },
  money: {
    fontWeight: '900',
    fontSize: moderateScale(14),
    marginLeft: '1%',
    marginTop: '2%',
    color: '#ffffff',
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
