import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.container}>
      <Image source={bid.image} resizeMode="contain" style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Bid placed by {bid.name}</Text>
        <Text style={styles.secondaryText}>{bid.date}</Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  image: {
    width: 48,
    height: 48,
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  secondaryText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
  innerContainer: {},
});
