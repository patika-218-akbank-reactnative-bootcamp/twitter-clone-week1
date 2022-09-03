import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';

import {useNewTweet} from '@twitter/hooks/useNewTweet';

const NewTweetScreen = ({setNewTweetText}) => {
  const {text, setText} = useNewTweet();

  return (
    <View>
      <TextInput
        value={text}
        placeholder="..."
        onChangeText={text => setText(text)}
        onSubmitEditing={({nativeEvent: {text}}) => {
          console.log('onSubmitEditing: ', text);
        }}
        returnKeyType="search"
      />
    </View>
  );
};

export default NewTweetScreen;
