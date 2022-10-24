import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...style }) => {
  return (
    <TouchableOpacity
      style={[styles.touchable, { ...style }]}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};

export const RectButton = ({ fontSize, handlePress, minWidth, ...style }) => {
  return (
    <TouchableOpacity
      style={[styles.rect, { minWidth, ...style }]}
      onPress={handlePress}
    >
      <Text style={[styles.rectText, { fontSize }]}>Place a bid</Text>
    </TouchableOpacity>
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
  rect: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
  },
  image: {
    width: 24,
    height: 24,
  },
  rectText: {
    fontFamily: FONTS.semiBold,

    color: COLORS.white,
    textAlign: "center",
  },
});
