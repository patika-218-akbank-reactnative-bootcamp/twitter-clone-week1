import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import useTheme from '@twitter/hooks/useTheme';

const MessageItem = ({item}) => {
  const {theme} = useTheme();
  const {navigate} = useNavigation();
  const lastMessage = item.messages[item.messages.length - 1];

  const handleNavigateMessageDetails = () => {
    navigate('MessageDetails', {chatDetails: item});
  };

  return (
    <Pressable
      onPress={handleNavigateMessageDetails}
      style={[
        styles.tweetContainer,
        {
          backgroundColor: theme.backgroundColor,
        },
      ]}>
      <View style={styles.tweetUserContainer}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.receiver.imageUrl,
            }}
          />
        </View>
        <Text style={styles.username}>{item.receiver.username}</Text>
      </View>
      <View style={styles.tweetTextContainer}>
        <Text>{lastMessage.text}</Text>
      </View>
    </Pressable>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  tweetContainer: {
    width: '100%',
    padding: 16,
  },
  tweetUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
