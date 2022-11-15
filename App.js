import {
  SplashScreen,
  Login,
  Register,
  ConfirmEmail,
  ForgotPassword,
  NewPassword,
  Home,
  Payment,
  Inbox,
  Account,
} from './src/Screens';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
const Stack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();
const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => IconsSolid[icon]);

let iconListBrand = Object.keys(IconBrand)
  .filter(key => key !== 'fab' && key !== 'prefix')
  .map(icon => IconBrand[icon]);

library.add(...iconListBrand, ...iconListSolid);
function HomeScreenTabs() {
  return (
    <HomeTabs.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'eyedropper' : 'home';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'fas-inbox' : 'fas-inbox';
            } else if (route.name === 'Account') {
              iconName = focused ? 'faAccount' : 'faAccount';
            }
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#F1592A',
          tabBarInactiveTintColor: '#B4B4B4',
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'wallet' : 'wallet';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'fas-inbox' : 'fas-inbox';
            } else if (route.name === 'Account') {
              iconName = focused ? 'faAccount' : 'faAccount';
            }
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#F1592A',
          tabBarInactiveTintColor: '#B4B4B4',
        })}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'wallet' : 'wallet';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'inbox' : 'inbox';
            } else if (route.name === 'Account') {
              iconName = focused ? 'faAccount' : 'faAccount';
            }
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#F1592A',
          tabBarInactiveTintColor: '#B4B4B4',
        })}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'wallet' : 'wallet';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'inbox' : 'inbox';
            } else if (route.name === 'Account') {
              iconName = focused ? 'user' : 'user';
            }
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#F1592A',
          tabBarInactiveTintColor: '#B4B4B4',
        })}
      />
    </HomeTabs.Navigator>
  );
}
// https://reactnavigation.org/docs/tab-based-navigation
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={HomeScreenTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
