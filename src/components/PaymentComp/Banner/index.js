import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';
const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => IconsSolid[icon]);

let iconListBrand = Object.keys(IconBrand)
  .filter(key => key !== 'fab' && key !== 'prefix')
  .map(icon => IconBrand[icon]);

library.add(...iconListBrand, ...iconListSolid);

const Banner = () => {
  return (
    <View style={styles.root}>
      <FontAwesomeIcon icon={['fas', 'receipt']} style={styles.icon} />
      <FontAwesomeIcon icon={['fas', 'qrcode']} style={styles.icon} />
      <Text>COBA</Text>
    </View>
  );
};
export default Banner;
const styles = StyleSheet.create({
  icon: {
    color: '#F1592A',
  },
  root: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
    // backgroundColor: '#ffffff',
    // marginVertical: verticalScale(25),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  root2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
