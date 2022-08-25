import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Banner from '../components/Banner';
import ProfileBio from '../components/ProfileBio';
import Tweets from '../components/Tweets';

const ProfileScreen = () => {
  const [tweetCount, setTweetCount] = useState(0);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Banner />
      <ProfileBio
        imageUrl="https://picsum.photos/200/200"
        title="Enes Ozturk"
        username="@enesozt_"
        description="Software Developer"
      />
      <Tweets tweetCount={tweetCount} setTweetCount={setTweetCount} />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  innerContainer: {
    backgroundColor: 'gray',
    padding: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
