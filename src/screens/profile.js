import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Banner from '../components/Banner';
import ProfileBio from '../components/ProfileBio';
import Tweets from '../components/Tweets';

const ProfileScreen = () => {
  const [tweetCount, setTweetCount] = useState(0);

  return <Tweets tweetCount={tweetCount} setTweetCount={setTweetCount} />;
};

export default ProfileScreen;
