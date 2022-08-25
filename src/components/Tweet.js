import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const Tweet = ({id, user, tweetText, tweetDate, handleOnDelete}) => {
  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',
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
            }}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={{marginLeft: 4}}>{user.username}</Text>
          <Text style={{marginLeft: 16}}>{tweetDate}</Text>
        </View>
        <View>
          <Text>{tweetText}</Text>
        </View>
        <Pressable
          style={{width: 24, height: 24, backgroundColor: 'red'}}
          onPress={() => {
            handleOnDelete(id);
          }}
        />
      </View>
    </Pressable>
  );
};

export default Tweet;
