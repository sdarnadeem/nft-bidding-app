import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import GenericHeader from "../components/GenericHeader";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { CustomInput } from "../components";

const Profile = () => {
  return (
    <View style={styles.container}>
      <GenericHeader title="Your Profile" />
      <View style={styles.profileHeader}>
        <Image style={styles.image} source={assets.nft03} resizeMode="cover" />
        <Entypo
          style={{ position: "absolute", top: 10, right: 10 }}
          name="edit"
          size={20}
          color="white"
        />
        <View style={styles.middleContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profile}
              source={assets.person02}
              resizeMode="cover"
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                bottom: 3,
                right: 13,
              }}
            />
          </View>
          <Text style={styles.name}>Nasyx Nadeem</Text>
          <Text style={styles.username}>@nasyxnadeem</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <CustomInput
          label="Username"
          value="nasyxnadeem"
          icon="pencil"
          editable={false}
          inputStyle={styles.input}
        />
        <CustomInput
          containerStyle={{ marginBottom: 10, marginTop: 10 }}
          label="Name"
          value="Nasyx Nadeem"
          icon="pencil"
          editable={false}
          inputStyle={styles.input}
        />
        <CustomInput
          label="Email"
          value="nasyxnadeem@gmail.com"
          icon="pencil"
          editable={false}
          inputStyle={styles.input}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  profileHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  middleContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // position: "absolute",
  },
  profile: {
    width: 100,
    height: 100,
  },
  name: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    ...SHADOWS.dark,
    marginTop: 10,
  },
  username: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
    ...SHADOWS.dark,
  },
  textContainer: {
    padding: 20,
  },

  innerText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  focusText: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    paddingStart: 20,
  },

  input: {
    color: COLORS.primary,
    fontSize: SIZES.large - 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});
