import React from "react";
import {View, Text, StyleSheet, Linking} from "react-native";

import ProfileImage from "./ProfileImage";

// Hoisting in JS
// Memoization

const ProfileBio = ({title, username, description, imageUrl}) => {
  const onPressWebsite = () => {
    Linking.openURL("https://www.ozturkenes.com");
  };

  return (
    <View style={styles.container}>
      <ProfileImage resimKaynagi={imageUrl} />
      <Text style={styles.titleStyles}>{title}</Text>
      <Text style={styles.usernameStyles}>{username}</Text>
      <Text style={styles.descriptionStyles}>{description}</Text>
      <Text style={styles.websiteLinkStyles} onPress={onPressWebsite}>
        ozturkenes.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    paddingTop: 58,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: "600",
  },
  usernameStyles: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    marginBottom: 16,
  },
  descriptionStyles: {},
  websiteLinkStyles: {
    color: "blue",
    marginTop: 16,
  },
});

export default ProfileBio;
