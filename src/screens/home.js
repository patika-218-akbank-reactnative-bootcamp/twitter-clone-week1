import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tweet from '@twitter/components/Tweet';
import useTheme from '@twitter/hooks/useTheme';

const HomeScreen = () => {
  const [tweets, setTweets] = useState([]);
  const {theme} = useTheme();

  const handleGetTweets = () => {
    fetch(`http://localhost:3000/tweets`)
      .then(async result => {
        const data = await result.json();
        setTweets(data);
      })
      .catch(error => {
        Alert.alert('Hata!');
        console.log(error);
      })
      .finally(() => {});
  };

  useEffect(() => {
    handleGetTweets();
  }, []);

  const renderTweetItem = ({item}) => {
    return (
      <Tweet user={item.author} tweetText={item.title} tweetDate={item.date} />
    );
  };

  const renderTweetSeparatorItem = ({item}) => {
    return (
      <View
        style={[
          styles.separator,
          {
            backgroundColor: theme.grayText,
          },
        ]}
      />
    );
  };

  return (
    <FlatList
      data={tweets}
      renderItem={renderTweetItem}
      ItemSeparatorComponent={renderTweetSeparatorItem}
      keyExtractor={index => `tweet-${index}`}
    />
  );
};

export default HomeScreen;

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
