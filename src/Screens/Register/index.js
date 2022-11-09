import React, {useState, useEffect} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import {CustomButton} from '../../components';
import {CustomInput} from '../../components';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');

    navigation.navigate('Login');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');

    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <StatusBar backgroundColor={'#F1592A'} barstyle="dark-content" />
        <View style={styles.root2}>
          <Image
            source={require('./../../images/kurirlokal.png')}
            style={styles.logo}
          />

          <Text style={styles.text}>Kulo Merchant</Text>
          <Text style={{marginTop: 10, fontWeight: 'bold'}}>Register</Text>
        </View>

        <View style={styles.itemCol}>
          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'user']} />
            <CustomInput
              placeholder="Nama Pengguna"
              value={user}
              setValue={setUser}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <CustomInput
              placeholder="Email"
              value={email}
              setValue={setEmail}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'phone']} />
            <CustomInput
              placeholder="Nomor Telepon"
              value={phone}
              setValue={setPhone}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'lock']} />
            <CustomInput
              placeholder="Kata Sandi"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'lock']} />
            <CustomInput
              placeholder="Ulangi Kata Sandi"
              value={passwordRepeat}
              setValue={setPasswordRepeat}
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity>
          <CustomButton text="DAFTAR" onPress={onSignUpPressed} />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Login"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
    marginVertical: verticalScale(25),
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
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  itemRow: {
    flexDirection: 'row',
  },
  logo: {
    height: verticalScale(70),
    width: horizontalScale(150),
    maxHeight: verticalScale(70),
    maxWidth: horizontalScale(150),
  },
});
