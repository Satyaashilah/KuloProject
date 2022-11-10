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

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginScreenProps = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = () => {
    navigation.navigate('Register');
  };

  const onForgotPressed = () => {
    console.warn('ConfirmEmail');

    navigation.navigate('Register');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={'#F1592A'} barstyle="dark-content" />
      <View style={styles.root2}>
        <Image
          source={require('./../../images/kurirlokal.png')}
          style={styles.logo}
        />
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Login</Text>
      </View>

      <View style={styles.itemCol}>
        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'envelope']} />
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

        <View style={styles.itemRow}>
          <FontAwesomeIcon icon={['fas', 'lock']} />
          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
              },
            }}
          />
        </View>
      </View>

      <TouchableOpacity>
        <CustomButton text="MASUK" onPress={handleSubmit(onSignInPressed)} />
      </TouchableOpacity>

      <TouchableOpacity>
        <CustomButton
          text="Lupa Kata Sandi"
          onPress={onForgotPressed}
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
  );
};

export default LoginScreenProps;

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
  kotak: {
    height: verticalScale(50),
    width: horizontalScale(280),
    borderColor: '#DEDEDE',
    borderWidth: horizontalScale(0.5),
    borderRadius: moderateScale(3),
    marginVertical: verticalScale(10),
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});
