import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { CustomInput, FocusedStatusBar, RectButton } from "../components";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const Login = () => {
  return (
    <SafeAreaView style={styles.outerCont}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.topContainer}>
        <Image source={assets.logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>Bid without limits</Text>
      </View>
      <View style={styles.middleContainer}>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>Your email address</Text>
          <TextInput style={styles.input} placeholder="abcd@gmail.com" />
        </View> */}
        <CustomInput label="Your email address" placeholder="abcd@gmail.com" />
        <CustomInput
          label="Choose a password"
          placeholder="min 8 characters"
          containerStyle={styles.inputContainer}
        />
        <RectButton text="Continue" backgroundColor={COLORS.secondary} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.or}>or</Text>
          <View style={styles.line}></View>
        </View>
        <RectButton text="Sign up with Google" />
        <RectButton text="Sign up with Apple" borderColor={COLORS.white} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  outerCont: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  topContainer: {
    flex: 0.6,
    marginTop: 50,
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
  middleContainer: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 27,
  },

  bottomContainer: {
    flex: 1,
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "37%",
    height: 0.4,
    backgroundColor: COLORS.gray,
  },
  or: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    marginHorizontal: 10,
  },
});
