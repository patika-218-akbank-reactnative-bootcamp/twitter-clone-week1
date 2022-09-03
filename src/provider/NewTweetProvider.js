import React, {useState} from 'react';

import {NewTweetContext} from '../context/newTweet';

const NewTweetProvider = ({children}) => {
  const [newTweetText, setNewTweetText] = useState('');

  return (
    <NewTweetContext.Provider
      value={{
        text: newTweetText,
        setText: setNewTweetText,
      }}>
      {children}
    </NewTweetContext.Provider>
  );
};

export default NewTweetProvider;
