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
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPassword = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const onSignInPressed = () => {
    console.warn('onSignInPressed');

    navigation.navigate('Login');
  };
  const onSubmitPressed = () => {
    console.warn('onSignInPressed');

    navigation.navigate('NewPassword');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ConfirmEmail');
  };
  useEffect(() => {
    console.log(CustomButton);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={'#F1592A'} barstyle="dark-content" />
      <View style={styles.root2}>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Lupa Kata Sandi</Text>

        <View style={styles.itemCol}>
          <View style={styles.itemRow}>
            <View style={styles.iconBox}>
              <FontAwesomeIcon icon={['fas', 'envelope']} style={styles.icon} />
            </View>
            <CustomInput
              name="email"
              placeholder="Email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
          </View>
        </View>

        <TouchableOpacity>
          <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Kembali Ke Halaman Login"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Tombol Sementara"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
  icon: {
    color: '#B4B4B4',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: horizontalScale(50),
    height: verticalScale(50),
    borderColor: '#e8e8e8e8',
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(1),
    marginVertical: 5,
  },
});
