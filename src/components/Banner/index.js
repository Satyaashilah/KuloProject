import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
      }}
      resizeMode="cover">
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('./../../images/kurirlokal.png')}
          style={styles.logo}
        />
        <Text style={styles.merchant}>Merchant</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 25,
  },
  merchant: {
    textAlign: 'right',
    flex: 1,
    fontSize: 30,
    color: '#598FF9',
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
