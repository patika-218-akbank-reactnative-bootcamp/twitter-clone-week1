import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import TweetScreen from '@twitter/screens/tweet';

import ProfileScreen from '../screens/profile';
import BottomNavigation from './bottomNavigation';

const DrawerNav = createDrawerNavigator();
const StackNav = createStackNavigator();

const StackNavigator = () => {
  return (
    <StackNav.Navigator screenOptions={{headerShown: false}}>
      <StackNav.Screen name="BottomNav" component={BottomNavigation} />
      <StackNav.Screen name="Tweet" component={TweetScreen} />
    </StackNav.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label="Messages"
        onPress={() => props.navigation.navigate('Messages')}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={CustomDrawerContent}>
      <DrawerNav.Screen name="DrawerNav" component={StackNavigator} />
      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigation;
