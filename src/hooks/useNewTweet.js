import {useContext} from 'react';

import {NewTweetContext} from '../context/newTweet';

export const useNewTweet = () => {
  const context = useContext(NewTweetContext);

  if (context === undefined) {
    throw Error('Error', 'You should wrap your app with NewTweetProvider.');
  }

  return context;
};
