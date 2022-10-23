import { StyleSheet, Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton } from "./Button";
import { NFTTitle } from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={data.image} resizeMode="cover" />
        <CircleButton imgUrl={assets.heart} style={styles.circleButton} />
      </View>
      <NFTTitle />
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  innerContainer: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  circleButton: {
    height: 10,
    top: 10,
  },
});
