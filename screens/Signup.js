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

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerCont}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView>
        <View style={styles.topContainer}>
          <Image
            source={assets.logo}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Bid without limits</Text>
        </View>
        <View
          style={styles.middleContainer}
          showVerticalScrollIndicator={false}
        >
          <CustomInput
            label="Your name"
            placeholder="Jennifer Lawrence"
            textContentType="email"
            keyboardType="default"
            returnKeyType="go"
          />
          <CustomInput
            label="Your email address"
            placeholder="abcd@gmail.com"
            containerStyle={{ marginTop: 20, marginBottom: 20 }}
            textContentType="email"
            keyboardType="email-address"
            returnKeyType="go"
          />
          <RectButton
            text="Continue"
            backgroundColor={COLORS.secondary}
            handlePress={() => navigation.navigate("SignupContinue")}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.or}>or</Text>
            <View style={styles.line}></View>
          </View>
          <TFAButton containerStyle={styles.tfaButton} icon="logo-google">
            Sign up with Google
          </TFAButton>
          <TFAButton containerStyle={styles.tfaButton} icon="logo-apple">
            Sign up with Apple
          </TFAButton>
          <Text style={styles.signup}>
            Already have an account,{"  "}
            <Text
              style={styles.signupButton}
              onPress={() => navigation.navigate("Login")}
            >
              Login here
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  outerCont: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  topContainer: {
    flex: 0.3,
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
    marginTop: 10,
    marginBottom: 12,
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
