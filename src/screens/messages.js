import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import MessageItem from '@twitter/components/MessageItem';
import useTheme from '@twitter/hooks/useTheme';

const MessagesScreen = () => {
  const {theme} = useTheme();
  const [messageList, setMessageList] = useState([]);

  const handleGetMessageList = () => {
    fetch('http://localhost:3000/messages').then(async result => {
      const data = await result.json();
      setMessageList(data);
    });
  };

  useEffect(() => {
    handleGetMessageList();
  }, []);

  const renderMessageItem = ({item}) => {
    return <MessageItem item={item} />;
  };

  const renderTweetSeparatorItem = ({item}) => {
    return (
      <View
        style={[
          {
            width: '100%',
            height: 1,
            backgroundColor: theme.grayText,
          },
        ]}
      />
    );
  };

  return (
    <FlatList
      data={messageList}
      renderItem={renderMessageItem}
      ItemSeparatorComponent={renderTweetSeparatorItem}
    />
  );
};

export default MessagesScreen;
