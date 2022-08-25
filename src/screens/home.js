import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View>
      <Text>home</Text>
      <Pressable
        onPress={() => {
          navigate('Profile');
        }}>
        <Text>Go to Profile</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
