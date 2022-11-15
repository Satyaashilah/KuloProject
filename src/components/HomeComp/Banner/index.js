import {StyleSheet, Text, View, Image} from 'react-native';
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
        <Image
          source={require('./../../../images/kurirlokal.png')}
          style={styles.logo}
        />
        <Text style={styles.merchant}>Merchant</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: horizontalScale(25),
  },
  logo: {
    width: horizontalScale(70),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  merchant: {
    textAlign: 'right',
    flex: 1,
    fontSize: moderateScale(20),
    color: '#F1592A',
    fontWeight: 'bold',
    paddingVertical: verticalScale(5),
  },
});
