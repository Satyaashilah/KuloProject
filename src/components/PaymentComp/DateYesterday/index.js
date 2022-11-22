import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

const index = () => {
  const [currentDate, setcurrentDate] = useState('');
  const [dateDay, setdateDay] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); // current Date
    var date = moment().format('DD MMMM YYYY');
    setcurrentDate(date);
  }, []);

  useEffect(() => {
    var dateDay = new Date().getDate(); // current Date
    // var dateDay = moment().subtract(1, 'days');
    setdateDay(dateDay);
  }, []);

  return (
    <View>
      {/* <Text>{dateDay}</Text> */}
      <Text>{currentDate}</Text>
    </View>
  );
};

export default index;
