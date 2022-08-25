import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useMemo, useState} from 'react';
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

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <StackNav.Navigator>
          <StackNav.Screen
            name="Home"
            component={() => <HomeScreen />}
            options={{
              title: 'Ana Sayfa',
            }}
          />
          <StackNav.Screen name="Profile" component={ProfileScreen} />
        </StackNav.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
