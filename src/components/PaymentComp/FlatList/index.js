// import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import {
//   horizontalScale,
//   moderateScale,
//   verticalScale,
// } from './../../Theme/Metric';

// const App = () => {
//   const [list, setList] = useState({});
//   useEffect(() => {
//     getListTransaction();
//   }, []);

//   const getListTransaction = () => {
//     fetch('', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(res => {
//         return res.json();
//       })
//       .then(res => {
//         var data = res.list_transaction;
//         setList(data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <View>
//       <ScrollView>
//         <View>
//           {list.map((item, index) => {
//             return (
//               <View key={index}>
//                 <View style={styles.icon} />
//                 <View style={styles.itemList}>
//                   <Text style={styles.itemList}>{item.fname}</Text>
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   txtBar: {
//     fontSize: moderateScale(10),
//     fontWeight: 'bold',
//   },
//   itemList: {
//     borderBottomColor: '#e2e2e2e2',
//     borderBottomWidth: verticalScale(2),
//     flexDirection: 'row',
//   },
//   icon: {
//     width: horizontalScale(20),
//     height: verticalScale(20),
//     borderRadius: moderateScale(20),
//     borderColor: '#e6e6e6',
//   },
//   txtName: {
//     fontSize: moderateScale(10),
//     fontWeight: 'bold',
//   },
// });

// export default App;
// //// https://www.youtube.com/watch?v=2zMOHgHQnAs
