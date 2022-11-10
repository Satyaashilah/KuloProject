import React, {useState, useEffect} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import {CustomButton} from '../../components';
import {CustomInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

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

const ConfirmEmail = () => {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const onConfirmPressed = data => {
    console.warn('Pesan dan tombol ini dapat di edit');
    console.log(data);
    navigation.navigate('NewPassword');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Pesan dan tombol ini dapat di edit');
  };

  const onSignInPressed = () => {
    console.warn('Pesan dan tombol ini dapat di edit');
    navigation.navigate('Login');
  };

  const onResendPressed = () => {
    console.warn('Pesan dan tombol ini dapat di edit');
  };

  useEffect(() => {
    console.log(CustomButton);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={'#F1592A'} barstyle="dark-content" />

      <View style={styles.root2}>
        <Text style={{marginTop: 20, fontWeight: 'bold'}}>CONFIRM EMAIL</Text>

        <View style={styles.itemCol}>
          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <CustomInput
              name="code"
              placeholder="Enter your confirmation code"
              control={control}
              rules={{
                required: 'Confirmation code is required',
              }}
            />
          </View>
        </View>

        <TouchableOpacity>
          <CustomButton
            text="KONFIRMASI"
            onPress={handleSubmit(onConfirmPressed)}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Kirim Ulang Code"
            onPress={onResendPressed}
            type="SECONDARY"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Kembali ke Halaman Login"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmEmail;

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
  itemCol: {
    flexDirection: 'column',
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  itemRow: {
    flexDirection: 'row',
  },
  container: {
    width: horizontalScale(330),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
