import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useContext, useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

// JS exports/imports
import Banner from './components/Banner';
import ProfileBio, {IMAGE_SIZE, IMAGE_URL} from './components/ProfileBio';
import Tweets from './components/Tweets';
import UserProvider from './provider/UserProvider';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
import {ThemeContext} from './context/theme';
import ThemeProvider from './provider/ThemeProvider';
import useTheme from './hooks/useTheme';
import BottomNavigation from './navigation/bottomNavigation';
import DrawerNavigation from './navigation/drawerNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const StackNav = createStackNavigator();

/**
 * Re renders:
 * - Parent component yeniden render olursa
 * - Props değiştiğinde
 * - State değiştiğinde
 */

// const useCustomCallback = (func, depArray) => {
//   const myFunc = useMemo(() => func, depArray);
//   return myFunc;
// };

const StackNavigation = () => {
  const {theme} = useTheme();

  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Ana Sayfa',
          headerStyle: {},
        }}
      />
      <StackNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackTitleVisible: true,
          headerStyle: {
            backgroundColor: theme.backgroundColor,
            shadowOpacity: 0,
          },
          headerTitleStyle: {color: theme.color},
        }}
      />
    </StackNav.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <UserProvider>
            <BottomNavigation />
            {/* <DrawerNavigation /> */}
            {/* <StackNavigation /> */}
          </UserProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
