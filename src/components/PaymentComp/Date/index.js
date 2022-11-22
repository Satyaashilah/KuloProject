import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

const index = () => {
  const [currentDate, setcurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); // current Date
    var date = moment().format('dddd, DD MMM YYYY');

    setcurrentDate(date);
  }, []);

  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default index;
