import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const FavoritesHeader = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={assets.logo} resizeMode="contain" />
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
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Your favorite NFTs
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.inputContainer}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default FavoritesHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 25,
  },
  imageContainer: {
    width: 45,
    height: 45,
  },
  person: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
});
