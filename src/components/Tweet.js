import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import useTheme from '../hooks/useTheme';

const Tweet = ({id, user, tweetText, tweetDate, handleOnDelete}) => {
  const {theme} = useTheme();

  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        backgroundColor: theme.backgroundColor,
      }}>
      <Image
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: 'rgba(0,0,0,0.3)',
          marginRight: 8,
        }}
        source={{
          uri: user.imageUrl,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 8}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: theme.color,
            }}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={{marginLeft: 4, color: theme.grayText}}>
            {user.username}
          </Text>
          <Text style={{marginLeft: 16, color: theme.grayText}}>
            {tweetDate}
          </Text>
        </View>
        <View>
          <Text style={{color: theme.color}}>{tweetText}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Tweet;
