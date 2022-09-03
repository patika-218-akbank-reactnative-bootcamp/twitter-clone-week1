const {createContext} = require('react');

export const NewTweetContext = createContext({
  text: null,
  setText: () => {},
});
