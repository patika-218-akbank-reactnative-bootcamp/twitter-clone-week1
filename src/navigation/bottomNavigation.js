import {View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import HomeNavigation from './homeNavigation';

const BottomNav = createBottomTabNavigator();

const EmptyScreen = () => {
  return (
    <View>
      <Text>Empty Screen</Text>
    </View>
  );
};

const Header = ({title}) => {
  const {top} = useSafeAreaInsets();
  const {goBack} = useNavigation();
  const shouldGoBack = title === 'Tweet';

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'red',
        paddingTop: top,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>{shouldGoBack ? <Text onPress={goBack}>Go Back</Text> : null}</View>
      <Text>{title}</Text>
      <View></View>
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomNav.Screen name="Home" component={HomeNavigation} />
      <BottomNav.Screen
        options={{headerShown: true}}
        name="Search"
        component={EmptyScreen}
      />
      <BottomNav.Screen
        options={{headerShown: true}}
        name="Communities"
        component={EmptyScreen}
      />
      <BottomNav.Screen
        options={{headerShown: true}}
        name="Notifications"
        component={EmptyScreen}
      />
      <BottomNav.Screen
        options={{headerShown: true}}
        name="Messages"
        component={EmptyScreen}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
