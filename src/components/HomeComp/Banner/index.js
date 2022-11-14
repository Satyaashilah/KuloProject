import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';

const index = () => {
  return (
    <View>
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
  logo: {
    width: horizontalScale(100),
    height: verticalScale(50),
  },
  merchant: {
    textAlign: 'right',
    flex: 1,
    fontSize: moderateScale(30),
    color: '#598FF9',
    fontWeight: 'bold',
  },
});
