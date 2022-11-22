import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
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
    <View
      style={{
        padding: verticalScale(5),
      }}>
      <View style={styles.root}>
        <TouchableOpacity>
          <View style={styles.kotak3}>
            <View>
              {/* <FontAwesomeIcon
                icon={['fas', 'cart-shopping']}
                style={styles.fiturHome}
              /> */}
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
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
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
    marginVertical: verticalScale(15),
    justifyContent: 'space-between',
    alignSelf: 'center',
    color: '#F1592A',
  },
  fiturHomeTxt: {
    height: verticalScale(40),
    width: horizontalScale(60),

    fontWeight: 'bold',
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: '#4C4C4C',
  },
});
