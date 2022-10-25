import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const DrawerProfile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={assets.nft01} resizeMode="cover" />
      <View style={styles.imageContainer}>
        <Image
          source={assets.person01}
          resizeMode="contain"
          style={styles.person}
        />
        <Image
          source={assets.badge}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: 15,
            height: 15,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      <Text style={styles.text}>Nasyx Nadeem</Text>
    </View>
  );
};

export default DrawerProfile;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    position: "absolute",
    width: 60,
    height: 60,
  },
  person: {
    width: "100%",
    height: "100%",
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: SIZES.extraLarge,
  },
  text: {
    overflow: "visible",
    position: "absolute",
    bottom: 10,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    ...SHADOWS.dark,
  },
});
