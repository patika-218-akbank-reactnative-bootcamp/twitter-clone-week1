import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';

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
          setOptions({headerShown: true});
        }}>
        <Text>Show Header</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
