import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import GenericHeader from "../components/GenericHeader";

const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GenericHeader navigation={navigation} title="Contact" />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Email:{" "}
          <Text
            style={styles.secText}
            onPress={() => Linking.openURL("mailto:nasyxnadeem@gmail.com")}
          >
            nasyxnadeem@gmail.com
          </Text>
        </Text>
        <Text style={styles.mainText}>
          Mobile:{" "}
          <Text
            style={styles.secText}
            onPress={() => Linking.openURL("tel:+919149575307")}
          >
            +9149575307
          </Text>
        </Text>
        <Text style={styles.mainText}>
          Website:{" "}
          <Text
            style={styles.secText}
            onPress={() => Linking.openURL("https://nasyxnadeem.dev")}
          >
            nasyxnadeem.dev
          </Text>
        </Text>
        <Text style={styles.mainText}>
          Address:{" "}
          <Text style={{ fontFamily: FONTS.regular }}>
            Sopore, Jammu and Kashmir
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  mainText: {
    color: COLORS.white,
    padding: 10,
    fontFamily: FONTS.bold,
  },
  textContainer: {
    padding: 10,
    backgroundColor: COLORS.secondary,
    margin: 10,
    borderRadius: 10,
  },
  secText: {
    fontFamily: FONTS.regular,
    color: "#E91E63",
    textDecorationLine: "underline",
  },
});
