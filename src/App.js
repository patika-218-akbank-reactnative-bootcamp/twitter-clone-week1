/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// JS exports/imports
import ThemeProvider from '@twitter/provider/ThemeProvider';

const StackNav = createStackNavigator();
const BottomNav = createBottomTabNavigator();
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

const mockUser = {
  firstName: 'Enes',
  lastName: 'Ozturk',
};

const HomeScreen = ({navigation, route}) => {
  const {canGoBack, goBack} = useNavigation();
  const [user, setUser] = useState(null);
  console.log(user);

  const login = async () => {
    setUser(mockUser);
    await AsyncStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const _user = userData ? JSON.parse(userData) : null;
    setUser(_user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      {user ? <Text>Welcome {user.firstName}</Text> : <Text>Please Login</Text>}
      {canGoBack() ? (
        <Text
          onPress={() => {
            goBack();
          }}>
          Go Back
        </Text>
      ) : null}
      <Text
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        Go To Profile
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        Go To Settings
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('Chat');
        }}>
        Go To Chat
      </Text>
      {user ? (
        <Pressable onPress={logout}>
          <Text>Logout</Text>
        </Pressable>
      ) : (
        <Pressable>
          <Text onPress={login}>Login</Text>
        </Pressable>
      )}
    </View>
  );
};

const ProfileScreen = () => {
  const {navigate, canGoBack, goBack} = useNavigation();

  return (
    <View>
      <Text>Profile</Text>
      {canGoBack() ? (
        <Text
          onPress={() => {
            goBack();
          }}>
          Go Back
        </Text>
      ) : null}
      <Text
        onPress={() => {
          navigate('Settings');
        }}>
        Go To Settings
      </Text>
      <Text
        onPress={() => {
          navigate('Home', {title: 'Kodluyoruz'});
        }}>
        Go To Home
      </Text>
    </View>
  );
};

const ThemeSettingsScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>ThemeSettingsScreen</Text>
    </View>
  );
};
const ProfileSettingsScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>ProfileSettingsScreen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text>Settings</Text>
      <Text onPress={() => navigate('ThemeSettingsScreen')}>
        Theme Settings
      </Text>
      <Text onPress={() => navigate('ProfileSettingsScreen')}>
        Profile Settings
      </Text>
    </View>
  );
};

const SettingsStackNav = createStackNavigator();
const SettingsStackNavigator = () => {
  return (
    <SettingsStackNav.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <SettingsStackNav.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStackNav.Screen
        name="ThemeSettingsScreen"
        component={ThemeSettingsScreen}
      />
      <SettingsStackNav.Screen
        name="ProfileSettingsScreen"
        component={ProfileSettingsScreen}
      />
    </SettingsStackNav.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen name="Home" component={HomeScreen} />
      <BottomNav.Screen name="Profile" component={ProfileScreen} />
      <BottomNav.Screen
        name="Settings"
        options={{
          headerShown: false,
        }}
        component={SettingsStackNavigator}
      />
      {/* <BottomNav.Screen
        name="Chat"
        options={{
          tabBarStyle: {
            display: 'none',
          },
          headerShown: true,
          headerLeft: () => {
            const {goBack} = useNavigation();
            return (
              <Pressable onPress={goBack}>
                <Text>Geri Dön</Text>
              </Pressable>
            );
          },
          tabBarButton: () => null,
        }}
        component={ChatScreen}
      /> */}
    </BottomNav.Navigator>
  );
};

const ChatScreen = ({navigation}) => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const MainStackNav = createStackNavigator();
const MainStackNavigator = () => {
  const user = {};

  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <>
          <MainStackNav.Screen name="BottomNav" component={BottomNavigator} />
          <MainStackNav.Screen
            name="Chat"
            component={ChatScreen}
            options={{headerShown: true}}
          />
        </>
      ) : (
        <>
          <MainStackNav.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: true}}
          />
        </>
      )}
    </MainStackNav.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
