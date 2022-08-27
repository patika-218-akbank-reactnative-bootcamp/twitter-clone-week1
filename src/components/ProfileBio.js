import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

import {UserContext} from '../context/user';
import useTheme from '../hooks/useTheme';

import ProfileImage from './ProfileImage';

// Hoisting in JS
// Memoization
// Props & State

// object destruction
const ProfileBio = ({title, username, description, imageUrl}) => {
  const {user, setUser} = useContext(UserContext);
  const {theme, toggleTheme} = useTheme();

  const onPressWebsite = () => {
    Linking.openURL('https://www.ozturkenes.com');
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.backgroundColor,
        },
      ]}>
      <ProfileImage resimKaynagi={imageUrl} />
      <Text
        style={[
          styles.titleStyles,
          {
            color: theme.color,
          },
        ]}>
        {user?.title}
      </Text>
      <Text style={[styles.usernameStyles, {color: theme.grayText}]}>
        {username}
      </Text>
      <Text
        style={[
          styles.descriptionStyles,
          {
            color: theme.color,
          },
        ]}>
        {description}
      </Text>
      <Text
        style={[
          styles.websiteLinkStyles,
          {
            color: theme.color,
          },
        ]}
        onPress={onPressWebsite}>
        ozturkenes.com
      </Text>
      <Text style={styles.websiteLinkStyles} onPress={toggleTheme}>
        Toggle Theme
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    paddingTop: 58,
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: '600',
  },
  usernameStyles: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 16,
  },
  descriptionStyles: {},
  websiteLinkStyles: {
    color: 'blue',
    marginTop: 16,
  },
});

export default ProfileBio;
