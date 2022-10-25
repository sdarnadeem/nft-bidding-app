import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CircleButton } from "./Button";
import { assets } from "../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={data.image} resizeMode="cover" style={styles.image} />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight - 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight - 10}
      />
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 373,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
