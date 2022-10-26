import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import AboutUsHeader from "../components/AboutUsHeader";

const AboutUs = ({ navigation }) => {
  async function handleDevLink() {
    await Linking.openURL("https://nasyxnadeem.dev");
  }
  return (
    <View style={styles.container}>
      <AboutUsHeader navigation={navigation} />
      <Text style={styles.desc}>
        ProNef is a NFT application dealing with the NFT bidding. It allows you
        to create, bid and buy NFTs online with just a few clicks. ProNef
        accepts multiple payment options including Paypal and Cryptocurrency.
      </Text>
      <Text style={styles.desc}>
        ProNef is a NFT application dealing with the NFT bidding. It allows you
        to create, bid and buy NFTs online with just a few clicks. ProNef
        accepts multiple payment options including Paypal and
        Cryptocurrency.ProNef is a NFT application dealing with the NFT bidding.
        It allows you to create, bid and buy NFTs online with just a few clicks.
        ProNef accepts multiple payment options including Paypal and
        Cryptocurrency.
      </Text>
      <Text style={styles.desc}>
        ProNef is a NFT application dealing with the NFT bidding. It allows you
        to create, bid and buy NFTs online with just a few clicks. ProNef
        accepts multiple payment options including Paypal and
        Cryptocurrency.ProNef is a NFT application dealing with the NFT bidding.
        It allows you to create, bid and buy NFTs online with just a few clicks.
        ProNef accepts multiple payment options including Paypal and
        Cryptocurrency.
      </Text>
      <Text style={styles.title}>Developed By</Text>
      <Text style={styles.dev} onPress={handleDevLink}>
        Nasyx Nadeem
      </Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  desc: {
    color: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: SIZES.large,
  },
  dev: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: SIZES.font,
    textDecorationStyle: "solid",
    color: "green",
  },
});
