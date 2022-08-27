import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profile';
import BottomNavigation from './bottomNavigation';

const DrawerNav = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={BottomNavigation} />
      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      <DrawerNav.Screen
        name="Settings"
        component={() => {
          return null;
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigation;
