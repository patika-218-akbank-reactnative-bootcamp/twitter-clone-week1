import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import Message from '@twitter/components/Message';

const MessageDetailsScreen = () => {
  const {
    params: {
      chatDetails: {receiver, messages},
    },
  } = useRoute();
  const {setOptions} = useNavigation();
  setOptions({
    title: receiver.firstName,
  });

  const handleGetMessageList = () => {};

  useEffect(() => {}, []);

  const renderMessageItem = ({item}) => {
    return <Message text={item.text} fromMe={receiver.id !== item.senderId} />;
  };

  return <FlatList data={messages} renderItem={renderMessageItem} />;
};

export default MessageDetailsScreen;
