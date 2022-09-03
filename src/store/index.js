import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

const tweetSlice = createSlice({
  name: 'tweets',
  initialState: {
    feedItems: [],
  },
  reducers: {
    setTweets: (state, action) => {
      const {tweets} = action.payload;
      return {
        feedItems: tweets,
      };
    },
    addTweet: (state, action) => {
      const newTweets = [...state.feedItems];
      newTweets.push(action.payload);

      return {
        feedItems: newTweets,
      };
    },
  },
});

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    setMessages: () => {},
    sendNewMessage: () => {},
  },
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme: state.activeTheme === 'light' ? 'dark' : 'light',
      };
    },
  },
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
  },
  reducers: {
    addNewNotification: state => {
      return {
        notifications: action.payload,
      };
    },
  },
});

export const {setTweets, addTweet} = tweetSlice.actions;
export const {toggleTheme} = themeSlice.actions;

export const store = configureStore({
  reducer: combineReducers({
    tweets: tweetSlice.reducer,
    messages: messageSlice.reducer,
    theme: themeSlice.reducer,
  }),
});
