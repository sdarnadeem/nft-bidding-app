import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, style }) => {
  return (
    <TouchableOpacity style={[styles.touchable, style]} onPress={handlePress}>
      <Image source={imgUrl} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  image: {
    width: 24,
    height: 24,
  },
});
