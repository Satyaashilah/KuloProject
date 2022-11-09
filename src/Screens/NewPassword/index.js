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

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  const onSignInPressed = () => {
    console.warn('Pesan dan tombol ini dapat di edit');
    navigation.navigate('Login');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Ke layar home');
    navigation.navigate('Login');
  };
  useEffect(() => {
    console.log(CustomButton);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={'#F1592A'} barstyle="dark-content" />
      <View style={styles.root2}>
        <Text style={styles.text}>Kulo Merchant</Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Password Baru</Text>

        <View style={styles.itemCol}>
          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <CustomInput
              placeholder="Masukkan Kode"
              value={code}
              setValue={setCode}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'lock']} />
            <CustomInput
              placeholder="Masukkan Password Baru"
              value={newPassword}
              setValue={setNewPassword}
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity>
          <CustomButton text="MASUK" onPress={onForgotPasswordPressed} />
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomButton
            text="Kembali ke laman login"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
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
  kotak: {
    height: verticalScale(50),
    width: horizontalScale(330),
    borderColor: '#DEDEDE',
    borderWidth: horizontalScale(0.5),
    borderRadius: moderateScale(3),
    marginVertical: verticalScale(10),
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  container: {
    width: horizontalScale(330),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
