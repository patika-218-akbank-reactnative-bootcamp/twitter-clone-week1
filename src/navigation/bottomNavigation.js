import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import Icons from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';

import {useNewTweet} from '@twitter/hooks/useNewTweet';
import useTheme from '@twitter/hooks/useTheme';
import HomeScreen from '@twitter/screens/home';
import MessageDetailsScreen from '@twitter/screens/messageDetails';
import MessagesScreen from '@twitter/screens/messages';
import NewTweetScreen from '@twitter/screens/newTweet';

import {addTweet} from '../store';

const BottomNav = createBottomTabNavigator();
const MessageStack = createStackNavigator();

const MessageStackNavigation = () => {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="MessageList" component={MessagesScreen} />
      <MessageStack.Screen
        name="MessageDetails"
        component={MessageDetailsScreen}
      />
    </MessageStack.Navigator>
  );
};

const EmptyScreen = () => {
  return (
    <View>
      <Text>Empty Screen</Text>
    </View>
  );
};

const NewTweetHeaderRight = () => {
  const dispatch = useDispatch();
  const {text, setText} = useNewTweet();
  const {theme} = useTheme();
  const {navigate} = useNavigation();

  const handlePostTweet = () => {
    axios
      .post('http://localhost:3000/tweets', {
        title: text,
        author: {
          id: 1,
          username: 'enesozt_',
          firstName: 'Enes',
          lastName: 'Ozturk',
          imageUrl: 'https://placehold.jp/150x150.png',
        },
        date: Date(),
      })
      .then(response => {
        if (response.status === 201) {
          dispatch(addTweet(response.data));
          navigate('Home');
          setText('');
        }
      });
  };

  return (
    <Text
      style={{
        marginRight: 16,
        fontWeight: '400',
        fontSize: 16,
        color: theme.accentColor,
      }}
      onPress={handlePostTweet}>
      Tweet
    </Text>
  );
};

const BottomNavigation = () => {
  const {theme} = useTheme();
  const {navigate} = useNavigation();

  // const [newTweetText, setNewTweetText] = useState('');

  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Search"
        options={{
          headerShown: true,
          tabBarActiveTintColor: theme.accentColor,
          tabBarIcon: ({color}) => (
            <Icons name="search" size={24} color={color} />
          ),
        }}
        component={EmptyScreen}
      />
      <BottomNav.Screen
        options={{
          headerShown: true,
          headerRight: NewTweetHeaderRight,
          tabBarButton: () => {
            return (
              <View style={{width: 64}}>
                <Pressable
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: theme.accentColor,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: -16,
                    borderRadius: 32,
                  }}
                  onPress={() => navigate('NewTweet')}>
                  <Icons name="plus" size={32} color="white" />
                </Pressable>
              </View>
            );
          },
        }}
        name="NewTweet"
        component={NewTweetScreen}
      />
      <BottomNav.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({color}) => (
            <Icons name="bell" size={24} color={color} />
          ),
        }}
        name="Notifications"
        component={EmptyScreen}
      />
      <BottomNav.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="mail" size={24} color={color} />
          ),
        }}
        name="Messages"
        component={MessageStackNavigation}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
