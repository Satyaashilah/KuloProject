import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';

const index = () => {
  return (
    <View style={styles.itemRow}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textActive}>Transaksi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonInactive}>
          <Text style={styles.textInactive}>Pencairan Dana</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    marginVertical: verticalScale(30),
  },
  button: {
    height: verticalScale(30),
    width: horizontalScale(70),
    backgroundColor: '#F1592A',
    borderRadius: moderateScale(25),
    marginRight: verticalScale(20),
  },
  buttonInactive: {
    height: verticalScale(30),
    width: horizontalScale(70),
    borderRadius: moderateScale(25),
    borderWidth: moderateScale(0.5),
    borderColor: '#F1592A',
    marginRight: verticalScale(20),
  },
  textActive: {
    textAlign: 'center',
    marginVertical: verticalScale(7),
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: moderateScale(10),
  },
  textInactive: {
    textAlign: 'center',
    marginVertical: verticalScale(7),
    color: '#F1592A',
    fontWeight: 'bold',
    fontSize: moderateScale(10),
  },
});
