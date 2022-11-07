import React, {useState, useEffect} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';

import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';

const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => IconsSolid[icon]);

let iconListBrand = Object.keys(IconBrand)
  .filter(key => key !== 'fab' && key !== 'prefix')
  .map(icon => IconBrand[icon]);

library.add(...iconListBrand, ...iconListSolid);

const LoginScreenProps = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => navigation.navigate('Login');

  return (
    <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dde4f3'} barstyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./../../images/coupon.png')}
          style={{width: 100, height: 100}}
        />

        <Text style={styles.text}>Kulo Merchant</Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Register</Text>
      </View>

      <View style={styles.itemCol}>
        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'user']} />
          <TextInput
            value={email}
            style={styles.kotak}
            placeholder="Nama Lengkap"
          />
        </View>
        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          <TextInput
            value={password}
            style={styles.kotak}
            placeholder="Email"
          />
        </View>
        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'phone']} />
          <TextInput
            value={password}
            style={styles.kotak}
            placeholder="Nomor Telepon"
          />
        </View>
        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'lock']} />
          <TextInput
            value={password}
            style={styles.kotak}
            placeholder="Kata Sandi"
          />
        </View>
        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'lock']} />
          <TextInput
            value={password}
            style={styles.kotak}
            placeholder="Verifikasi Kata Sandi"
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => login()} style={styles.kotak}>
        <Text>DAFTAR</Text>
      </TouchableOpacity>
      <View style={styles.itemRow}>
        <Text>Sudah memiliki akun? </Text>
        <TouchableOpacity onPress={() => login()}>
          <Text> Masuk disini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreenProps;

const styles = StyleSheet.create({
  text: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
  },
  itemCol: {
    flexDirection: 'column',
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  itemRow: {
    flexDirection: 'row',
  },
  icon: {},
  kotak: {
    height: verticalScale(50),
    width: horizontalScale(330),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(3),
    marginVertical: verticalScale(10),
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});
