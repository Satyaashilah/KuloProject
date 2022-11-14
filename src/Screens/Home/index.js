import React from 'react';
import Component from './../../components';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';
import {ScrollView} from 'react-native-gesture-handler';
const index = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View>
          <Component.HomeComp.Banner />
          <Component.HomeComp.SaldoKecil />
          <Component.HomeComp.Fitur />
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
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
    marginHorizontal: horizontalScale(20),
  },
  itemRow: {
    flexDirection: 'row',
  },
});
