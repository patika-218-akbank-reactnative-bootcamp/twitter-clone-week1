import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate, goBack, setOptions, setParams} = useNavigation();

  useEffect(() => {}, []);

  return (
    <View>
      <Text>home</Text>
      <Pressable
        onPress={() => {
          navigate('Tweet', {});
        }}>
        <Text>Go to Tweet</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigate('Profile', {
            user: {
              name: 'Furkan',
            },
          });
        }}>
        <Text>Go to Furkan's Profile</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
