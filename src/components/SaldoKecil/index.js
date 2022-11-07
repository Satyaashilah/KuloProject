import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View style={{}} resizeMode="cover">
      <View style={styles.kotak1}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./../../images/wallet.png')}
            style={styles.walletkcl}
          />
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 8,
              marginLeft: '1%',
              marginTop: '4%',
              color: '#ffffff',
            }}>
            Rp
          </Text>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 14,
              marginLeft: '1%',
              marginTop: '2%',
              color: '#ffffff',
            }}>
            10,000.00
          </Text>
          <Image
            source={require('./../../images/RightCevron.png')}
            style={{width: 8, height: 8, marginTop: '7%', marginLeft: '3%'}}
          />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  kotak1: {
    height: 25,
    width: 120,
    borderRadius: 25,
    backgroundColor: '#5C93FF',
    marginTop: '5%',
  },

  walletkcl: {
    marginLeft: 10,
    marginTop: 6,
    width: 15,
    height: 15,
  },
});
