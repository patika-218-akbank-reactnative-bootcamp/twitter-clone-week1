import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeContext} from '../context/theme';
import Banner from './Banner';
import ProfileBio from './ProfileBio';

import Tweet from './Tweet';
import TweetTabs from './TweetTabs';

const TWEET_HEIGHT = 200;

// hoisting
// arrow functon / anonymous function

// statefull components
class TweetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // const [tweets, setTweets] = useState([]);
      // initial state, doesn't effect from rerenders
      tweets: this.props.tweets, // []
    };

    this.handleDeleteTweet = this.handleDeleteTweet.bind(this);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     tweets: [
    //       {
    //         id: 1,
    //         user: {
    //           firstName: 'Enes',
    //           lastName: 'Ozturk',
    //           username: '@enesozt_',
    //           imageUrl: 'https://picsum.photos/200/200',
    //         },
    //         date: '2 hour ago',
    //         text: 'Kodluyoruz React Native Bootcamp Kodluyoruz React Native Bootcamp Kodluyoruz React Native Bootcamp Kodluyoruz React Native Bootcamp :)',
    //       },
    //       {
    //         id: 2,
    //         user: {
    //           firstName: 'Enes',
    //           lastName: 'Ozturk',
    //           username: '@enesozt_',
    //           imageUrl: 'https://picsum.photos/200/200',
    //         },
    //         date: '1 hour ago',
    //         text: 'Kodluyoruz React Native Bootcamp :)',
    //       },
    //     ],
    //   });
    // }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tweets !== this.props.tweets) {
      this.setState({
        tweets: this.props.tweets,
      });
    }
  }

  handleDeleteTweet(tweetId) {
    this.setState({
      tweets: this.state.tweets.filter(item => {
        return item.id !== tweetId;
      }),
    });
  }

  renderListHeader() {
    return (
      <>
        <Banner />
        <ProfileBio
          imageUrl="https://picsum.photos/200/200"
          title="Enes Ozturk"
          username="@enesozt_"
          description="Software Developer"
        />
        <TweetTabs activeTab="Retweets" />
      </>
    );
  }

  // this.state
  // this.props
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => {
          return (
            <FlatList
              style={{
                backgroundColor: theme.backgroundColor,
              }}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: theme.grayText,
                    }}
                  />
                );
              }}
              maxToRenderPerBatch={10}
              ListHeaderComponent={this.renderListHeader}
              keyExtractor={(item, index) => `tweet-${item.id}`}
              data={this.props.tweets}
              renderItem={({item}) => (
                <Tweet
                  handleOnDelete={this.handleDeleteTweet}
                  id={item.id}
                  user={item.user}
                  tweetDate={item.date}
                  tweetText={item.text}
                />
              )}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TweetList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});
