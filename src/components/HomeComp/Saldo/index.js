import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.kotak1}
        onPress={() => this.props.navigation.navigate('Payment')}>
        <Text style={styles.sales}>Total Sales Today</Text>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={['fas', 'wallet']} style={styles.walletkcl} />
          <Text style={styles.rp}>Rp</Text>
          <Text style={styles.money}>2,500.00</Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.day}>Yesterday</Text>
            <Text style={styles.money2}>Rp 3,000.00</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: horizontalScale(25),
  },
  kotak1: {
    height: 'auto',
    width: 'auto',
    borderRadius: 7,
    backgroundColor: '#F1592A',
    marginTop: '5%',
  },

  walletkcl: {
    marginLeft: horizontalScale(20),
    width: horizontalScale(20),
    height: verticalScale(30),
    color: '#ffffff',
  },

  rp: {
    fontWeight: 'normal',
    marginLeft: 20,
    marginTop: 15,
    fontSize: 12,
    color: '#ffffff',
  },
  money: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 25,
    fontSize: 35,
    color: '#ffffff',
  },
  money2: {
    fontWeight: 'bold',
    marginLeft: 60,
    marginRight: 20,
    fontSize: 11,
    color: '#ffffff',
  },
  icon: {
    color: '#ffffff',
    width: horizontalScale(1),
    height: verticalScale(1),
    marginTop: verticalScale(4),
    marginLeft: horizontalScale(4),
  },
  sales: {
    fontWeight: 'normal',
    marginLeft: 75,
    marginTop: 25,
    fontSize: 12,
    color: '#ffffff',
  },
  day: {
    fontWeight: 'normal',
    marginLeft: 60,
    marginRight: 20,
    fontSize: 9,
    textAlign: 'center',
    color: '#ffffff',
  },
});
