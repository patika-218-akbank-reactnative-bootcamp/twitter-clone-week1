import React, {
  useState,
  useEffect,
  memo,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import {View, Text, Pressable} from 'react-native';
import {UserContext} from '../context/user';
import TweetCounter from './TweetCounter';

import TweetList from './TweetList';
import TweetTabs from './TweetTabs';

// function topla(a, b) {
//   return a + b;
// }
// topla(2, 3); // 5
// topla(2, 3); // 5

const useCustomState = intialState => {
  const state = intialState;

  function handleChangeState(param) {
    // update state with param
  }

  return [state, handleChangeState];
};

// stateless components
// destruct
// array destruction
const Tweets = ({tweetCount, setTweetCount}) => {
  const {user} = useContext(UserContext);
  const [tweets, setTweets] = useState([]);

  // first param: function to invoke
  // second param: dependency array
  useEffect(() => {
    setTimeout(() => {
      setTweets([
        {
          id: 1,
          user: {
            firstName: 'Enes',
            lastName: 'Ozturk',
            username: '@enesozt_',
            imageUrl: 'https://picsum.photos/200/200',
          },
          date: '2 hour ago',
          text: 'Kodluyoruz React Native Bootcamp Kodluyoruz React Native Bootcamp Kodluyoruz React Native Bootcamp Kodluyoruz React Native Bootcamp :)',
        },
        {
          id: 2,
          user: {
            firstName: 'Enes',
            lastName: 'Ozturk',
            username: '@enesozt_',
            imageUrl: 'https://picsum.photos/200/200',
          },
          date: '1 hour ago',
          text: 'Kodluyoruz React Native Bootcamp :)',
        },
      ]);
    }, 2000);
  }, []);

  return user ? (
    <View>
      <TweetCounter tweetCount={tweetCount} setTweetCount={setTweetCount} />
      <TweetTabs activeTab="Retweets" />
      <TweetList tweets={tweets} />
    </View>
  ) : null;
};

export default memo(Tweets);
