import React from 'react';
import Component from './../../components';

const index = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Component.HomeComp.Banner />
      <Component.HomeComp.SaldoKecil />
      <Component.HomeComp.Fitur />
      <Component.HomeComp.CardCarousel />
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(50),
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
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(20),
  },
  itemRow: {
    flexDirection: 'row',
  },
});
