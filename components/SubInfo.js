import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};
export const ImageCmp = ({ imageUrl, index }) => {
  return (
    <Image
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
      source={imageUrl}
      resizeMode="contain"
    />
  );
};
export const People = () => {
  return (
    <View style={styles.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`people-${index}`} />
        )
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View style={styles.endDate}>
      <Text style={styles.endingIn}>Ending in</Text>
      <Text style={styles.time}>12h 30m</Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View style={styles.subInfo}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  subInfo: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  people: {
    flexDirection: "row",
  },
  endDate: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: "50%",
  },
  endingIn: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  time: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});
