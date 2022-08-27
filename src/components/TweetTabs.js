import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme';
import useTheme from '../hooks/useTheme';
import Tab from './Tab';

// Life cycle methods
// Render - Mount

class TweetTabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.activeTab || 'Tweets',
      tabs: ['Tweets', 'Replies', 'Likes', 'Retweets'],
      tweetCount: 15,
    };

    this.handlePressTab = this.handlePressTab.bind(this);
  }

  UNSAFE_componentWillMount() {
    console.log('component mount edilecek');
  }

  componentDidMount() {
    console.log('component mount edildi');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'component udpdate edildi',
      prevState.selectedTab,
      ' - ',
      this.state.selectedTab,
    );
  }

  componentWillUnmount() {
    console.log('component unmount edilecek');
  }

  componentDidCatch() {
    console.log('component catch edildi');
  }

  // js rest operator (...)
  handlePressTab(tab) {
    this.setState({
      ...this.state,
      selectedTab: tab,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 8,
                backgroundColor: theme.backgroundColor,
              }}>
              {this.state.tabs.map((item, index) => {
                return (
                  <Tab
                    key={`tab-${index}`}
                    title={item}
                    isActive={this.state.selectedTab === item}
                    onPress={this.handlePressTab}
                  />
                );
              })}
            </View>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TweetTabs;
