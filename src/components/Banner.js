import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const Banner = ({children}) => {
  return <View style={styles.imageContainer}></View>;
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 140,
    backgroundColor: "gray",
  },
});

export default Banner;
