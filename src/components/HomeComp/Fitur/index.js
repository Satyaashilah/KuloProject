import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';

const index = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              <Image
                source={require('./../../../images/order.png')}
                style={styles.fiturHome}
              />
            </View>
          </View>
          <Text style={styles.fiturHomeTxt}>Pesanan</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              <Image
                source={require('./../../../images/menu.png')}
                style={styles.fiturHome}
              />
            </View>
          </View>
          <Text style={styles.fiturHomeTxt}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              <Image
                source={require('./../../../images/groceries.png')}
                style={styles.fiturHome}
              />
            </View>
          </View>
          <Text style={styles.fiturHomeTxt}>Grosir</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              <Image
                source={require('./../../../images/coupon.png')}
                style={styles.fiturHome}
              />
            </View>
          </View>
          <Text style={styles.fiturHomeTxt}>Diskon</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              <Image
                source={require('./../../../images/finance.png')}
                style={styles.fiturHome}
              />
            </View>
          </View>
          <Text style={styles.fiturHomeTxt}>Keuangan</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              <Image
                source={require('./../../../images/group.png')}
                style={styles.fiturHome}
              />
            </View>
          </View>
          <Text style={styles.fiturHomeTxt}>Karyawan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  kotak3: {
    height: verticalScale(60),
    width: horizontalScale(60),
    backgroundColor: '#FFFFFF',
    borderColor: '#DEDEDE',
    borderWidth: moderateScale(1.5),
    borderRadius: moderateScale(8),
  },

  fiturHome: {
    width: horizontalScale(27),
    height: verticalScale(27),
    marginHorizontal: horizontalScale(15),
    marginVertical: verticalScale(15),
  },
  fiturHomeTxt: {
    // marginHorizontal: horizontalScale(15),
    // height: 60,
    // width: 60,

    fontWeight: 'bold',
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: '#4C4C4C',
  },
});
