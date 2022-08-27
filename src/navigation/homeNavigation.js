import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import TweetScreen from '../screens/tweet';

const StackNav = createStackNavigator();

const HomeNavigation = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <StackNav.Screen name="Home" component={HomeScreen} />
      <StackNav.Screen name="Tweet" component={TweetScreen} />
    </StackNav.Navigator>
  );
};

export default HomeNavigation;
