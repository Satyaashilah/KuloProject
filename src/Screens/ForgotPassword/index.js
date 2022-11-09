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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const onSignInPressed = () => {
    console.warn('onSignInPressed');

    navigation.navigate('Login');
  };
  const onSubmitPressed = () => {
    console.warn('onSignInPressed');

    navigation.navigate('NewPassword');
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
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            <CustomInput
              placeholder="Email"
              value={email}
              setValue={setEmail}
            />
          </View>
        </View>

        <TouchableOpacity>
          <CustomButton text="Submit" onPress={onSubmitPressed} />
        </TouchableOpacity>

        <TouchableOpacity>
          <CustomButton
            text="Kembali Ke Halaman Login"
            onPress={onSignInPressed}
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
});
