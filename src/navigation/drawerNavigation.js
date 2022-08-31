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
      <StackNav.Screen
        options={{headerShown: true}}
        name="Tweet"
        component={TweetScreen}
      />
      <StackNav.Screen
        options={{headerShown: true}}
        name="UserProfile"
        component={ProfileScreen}
      />
    </StackNav.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('HomeStackNav')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={CustomDrawerContent}>
      <DrawerNav.Screen name="HomeStackNav" component={StackNavigator} />
      <DrawerNav.Screen
        options={{headerShown: true}}
        name="Profile"
        component={ProfileScreen}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigation;
