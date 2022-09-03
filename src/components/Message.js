import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import useTheme from '@twitter/hooks/useTheme';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Message = ({text, fromMe}) => {
  const {theme} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: fromMe ? 'flex-end' : 'flex-start',
        },
      ]}>
      <View
        style={[
          styles.textContainer,
          {
            backgroundColor: theme.accentColor,
          },
        ]}>
        <Text style={{color: 'white'}}>{text}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
  },
  textContainer: {
    width: 200,
    maxWidth: 200,
    padding: 8,
    borderRadius: 8,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  username: {
    marginLeft: 8,
    fontWeight: '600',
  },
  tweetTextContainer: {
    marginTop: 8,
  },
  separator: {
    width: '100%',
    height: 1,
  },
});
