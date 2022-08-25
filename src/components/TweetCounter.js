import {View, Text, Pressable} from 'react-native';
import React, {useCallback, useMemo} from 'react';

const TweetCounter = ({tweetCount, setTweetCount}) => {
  const tweetText = useMemo(
    () => `You have ${tweetCount} tweets`,
    [tweetCount],
  );

  const handleIncrementTweetCount = useCallback(() => {
    setTweetCount(tweetCount + 1);
  }, [tweetCount]);

  // const handleDecrementTweetCount = "function"
  const handleDecrementTweetCount = useCallback(() => {
    setTweetCount(tweetCount - 1);
  }, [tweetCount]);

  return (
    <View>
      <View>
        <Text>{tweetText}</Text>
      </View>
      <Pressable onPress={handleIncrementTweetCount}>
        <Text>Increment Tweet Count</Text>
      </Pressable>
      <Pressable onPress={handleDecrementTweetCount}>
        <Text>Decrement Tweet Count</Text>
      </Pressable>
    </View>
  );
};

export default TweetCounter;
