import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {useRoute} from '@react-navigation/native';

import Banner from '../components/Banner';
import ProfileBio from '../components/ProfileBio';
import Tweets from '../components/Tweets';

const ProfileScreen = () => {
  const {
    params: {user},
  } = useRoute();
  const [tweetCount, setTweetCount] = useState(0);

  useEffect(() => {
    // request -> furkans'id
  }, []);

  return <Tweets tweetCount={tweetCount} setTweetCount={setTweetCount} />;
};

export default ProfileScreen;
