import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Tweet from './Tweet';

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

  // this.state
  // this.props
  render() {
    return (
      <View style={styles.container}>
        {this.props.tweets.map((item, index) => {
          return (
            <Tweet
              handleOnDelete={this.handleDeleteTweet}
              id={item.id}
              user={item.user}
              tweetDate={item.date}
              tweetText={item.text}
            />
          );
        })}
      </View>
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
