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

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
  const {control, handleSubmit, watch} = useForm();

  const pwd = watch('');

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');

    navigation.navigate('ForgotPassword');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');

    navigation.navigate('ForgotPassword');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
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
              name="user"
              placeholder="Username"
              control={control}
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username should be at least 3 characters long',
                },
                maxLength: {
                  value: 24,
                  message: 'Username should be max 24 characters long',
                },
              }}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <CustomInput
              name="email"
              placeholder="Email"
              secureTextEntry
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
          </View>

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'phone']} />
            <CustomInput
              name="phone"
              placeholder="Phone Number"
              secureTextEntry
              control={control}
              rules={{
                required: 'Phone Number is required',
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

          <View style={styles.itemRow}>
            <FontAwesomeIcon icon={['fas', 'lock']} />
            <CustomInput
              name="passwordRepeat"
              placeholder="Repeat Password"
              secureTextEntry
              control={control}
              rules={{
                validate: value => value == pwd || 'Password do not match',
              }}
            />
          </View>
        </View>

        <TouchableOpacity>
          <CustomButton text="DAFTAR" onPress={handleSubmit(onSignUpPressed)} />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Login"
            onPress={handleSubmit(onSignInPressed)}
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
