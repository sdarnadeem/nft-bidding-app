import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  CustomInput,
  FocusedStatusBar,
  RectButton,
  TFAButton,
} from "../components";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <SafeAreaView style={styles.outerCont}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.topContainer}>
        <Image source={assets.logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>Bid without limits</Text>
      </View>
      <View style={styles.middleContainer}>
        <CustomInput
          label="Your email address"
          placeholder="abcd@gmail.com"
          textContentType="email"
          keyboardType="email-address"
          returnKeyType="go"
        />
        <CustomInput
          label="Your password"
          placeholder="min 8 characters"
          containerStyle={styles.inputContainer}
          textContentType="password"
          secureTextEntry={!passwordVisible}
          icon={passwordVisible ? "eye-off" : "eye"}
          iconPressHandler={() => setPasswordVisible(!passwordVisible)}
        />
        <RectButton
          text="Continue"
          backgroundColor={COLORS.secondary}
          handlePress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.or}>or</Text>
          <View style={styles.line}></View>
        </View>
        <TFAButton containerStyle={styles.tfaButton} icon="logo-google">
          Sign in with Google
        </TFAButton>
        <TFAButton containerStyle={styles.tfaButton} icon="logo-apple">
          Sign in with Apple
        </TFAButton>
        <Text style={styles.signup}>
          Don't have an account,{"  "}
          <Text
            style={styles.signupButton}
            onPress={() => navigation.navigate("Signup")}
          >
            signup here
          </Text>
        </Text>
        <Text style={styles.signup}>
          Forgot password, {"  "}
          <Text
            style={styles.signupButton}
            onPress={() =>
              navigation.navigate("MyDrawer", { screen: "Favorites" })
            }
          >
            click here
          </Text>
        </Text>
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
    flex: 0.5,
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
    alignContent: "center",
    marginBottom: 30,
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
  tfaButton: {
    borderColor: COLORS.white,
    borderWidth: 0.7,
    marginBottom: 15,
  },
  signup: {
    color: COLORS.white,
    paddingLeft: 10,
    marginTop: 10,
    alignSelf: "flex-start",
    fontSize: SIZES.small,
  },
  signupButton: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
  },
});
