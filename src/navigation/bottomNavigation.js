import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

// import Icons from 'react-native-vector-icons/Feather';
import useTheme from '@twitter/hooks/useTheme';
import HomeNavigation from '@twitter/navigation/homeNavigation';

const BottomNav = createBottomTabNavigator();

const EmptyScreen = () => {
  return (
    <View>
      <Text>Empty Screen</Text>
    </View>
  );
};

const BottomNavigation = () => {
  const {theme} = useTheme();
  const {navigate} = useNavigation();

  return (
    <BottomNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomNav.Screen name="Home" component={HomeNavigation} />
      <BottomNav.Screen
        name="Search"
        options={{
          headerShown: true,
          tabBarActiveTintColor: theme.accentColor,
        }}
        component={EmptyScreen}
      />
      <BottomNav.Screen
        options={{
          headerShown: true,
          tabBarButton: () => {
            return (
              <View style={{width: 64}}>
                <Pressable
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: theme.accentColor,
                    position: 'absolute',
                    top: -16,
                    borderRadius: 32,
                  }}
                  onPress={() => navigate('Search')}></Pressable>
              </View>
            );
          },
        }}
        name="Camera"
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
