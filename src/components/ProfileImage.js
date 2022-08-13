import React from "react";
import {View, StyleSheet, Dimensions, Image} from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ProfileImage = ({resimKaynagi}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={{
          uri: resimKaynagi,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    left: 16,
    top: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.3)",
    overflow: "hidden",
  },
});

export default ProfileImage;
