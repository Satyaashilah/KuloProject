import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';

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
                resizeMode="cover"
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
                resizeMode="cover"
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
                resizeMode="cover"
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
                resizeMode="cover"
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
                resizeMode="cover"
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
                resizeMode="cover"
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
    marginHorizontal: '5.5%',
    height: 60,
    width: 60,
    backgroundColor: '#ffffff',
    borderColor: '#DEDEDE',
    borderRadius: 8,
  },

  fiturHome: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '25%',
  },
  fiturHomeTxt: {
    marginHorizontal: '5.5%',
    height: 60,
    width: 60,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: '#4C4C4C',
  },
});
