import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import axios from 'axios';
import {ThemeContext} from 'context/theme';
import {useDispatch, useSelector} from 'react-redux';

import Tweet from '@twitter/components/Tweet';
import useTheme from '@twitter/hooks/useTheme';

import {setTweets, toggleTheme} from '../store';

const HomeScreen = () => {
  const tweets = useSelector(state => state.tweets.feedItems);
  const {activeTheme} = useSelector(state => state.theme);
  console.log(activeTheme);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const {theme} = useTheme();

  const handleGetTweets = onEnd => {
    axios
      .get('http://localhost:3000/tweets')
      .then(response => {
        dispatch(setTweets({tweets: response.data}));
      })
      .finally(() => {
        onEnd?.();
      });
  };

  useEffect(() => {
    handleGetTweets();
    dispatch(toggleTheme());
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

  const handleRefresh = () => {
    setRefreshing(true);
    handleGetTweets(() => {
      setRefreshing(false);
    });
  };

  return (
    <FlatList
      data={tweets}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      renderItem={renderTweetItem}
      ItemSeparatorComponent={renderTweetSeparatorItem}
      keyExtractor={(item, index) => `tweet-${item.id}`}
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
