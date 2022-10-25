import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../constants";
import { FocusedStatusBar, RectButton } from "../components";

const AuthLanding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerCont}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.upperCont}>
        <Image
          source={assets.authbackground}
          resizeMode="cover"
          style={styles.upperImage}
        />
      </View>
      <View style={styles.innerCont}>
        <Image source={assets.logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>A platform just for NFTs</Text>
        <View style={styles.buttonCont}>
          <RectButton
            text="Get Started for Free"
            minWidth="55%"
            handlePress={() => navigation.navigate("Login")}
            backgroundColor={COLORS.gray}
            fontSize={SIZES.small}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthLanding;

const styles = StyleSheet.create({
  outerCont: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  upperCont: {
    flex: 1.5,
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
  },
  upperImage: {
    width: "100%",
    height: "100%",
    transform: [{ rotate: "-15deg" }],
  },
  innerCont: {
    flex: 1,
    marginBottom: 30,
    width: "100%",
    height: 100,
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 50,
  },
  text: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.font,
  },
  buttonCont: {
    marginTop: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
