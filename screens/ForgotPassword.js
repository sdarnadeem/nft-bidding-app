import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  CustomInput,
  FocusedStatusBar,
  RectButton,
  TFAButton,
} from "../components";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerCont}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Image
            source={assets.logo}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Bid without limits</Text>
        </View>
        <View style={styles.middleContainer}>
          <CustomInput
            label="Enter your email address"
            placeholder="abcd@gmail.com"
            containerStyle={styles.inputContainer}
            textContentType="default"
          />
          <RectButton text="Continue" backgroundColor={COLORS.secondary} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  outerCont: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  topContainer: {
    flex: 1,
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
    marginTop: 30,
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
  },
  signupButton: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font + 1,
  },
});
