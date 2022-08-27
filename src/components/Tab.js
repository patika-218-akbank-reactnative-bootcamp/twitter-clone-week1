import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

import useTheme from '../hooks/useTheme';

const Tab = ({title, isActive, onPress}) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        onPress(title);
      }}
      style={{
        padding: 8,
        flex: 1,
        borderBottomWidth: isActive ? 2 : 0,
        borderBottomColor: theme.accentColor,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: isActive ? theme.color : theme.grayText,
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
