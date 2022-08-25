import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

const Tab = ({title, isActive, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        onPress(title);
      }}
      style={{
        padding: 8,
        backgroundColor: isActive ? 'blue' : 'white',
        borderRadius: 8,
        flex: 1,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: isActive ? 'white' : 'black',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
