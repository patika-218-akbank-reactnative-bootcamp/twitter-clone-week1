import React from 'react';
import {Text, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

const TweetScreen = () => {
  const {setOptions} = useNavigation();
  const {
    params: {id, text, owner},
  } = useRoute();
  setOptions({
    title: `${owner}'s Tweet`,
  });

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default TweetScreen;
