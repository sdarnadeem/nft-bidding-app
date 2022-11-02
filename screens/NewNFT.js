import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GenericHeader from "../components/GenericHeader";
import { COLORS } from "../constants";
import { CustomInput, RectButton } from "../components";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { RNDateTimePicker } from "@react-native-community";

const NewNFT = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <GenericHeader title="Add your own NFT" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <CustomInput
              label="NFT Title"
              placeholder="Name your NFT"
              containerStyle={{ marginBottom: 30 }}
            />
            <CustomInput
              label="NFT Description"
              placeholder="Describe your NFT"
              containerStyle={{ marginBottom: 30 }}
              multiline={true}
              numberOfLines={10}
              textAlign="left"
              inputStyle={{
                paddingTop: 5,
                textAlignVertical: "top",
              }}
            />
            <DateTimePicker value={new Date()} />
            <DateTimePicker value={new Date()} mode="time" />
            {/* <RNDateTimePicker mode="time" /> */}
            <RectButton
              text={image ? "Change Image" : "Upload Image"}
              backgroundColor={COLORS.secondary}
              handlePress={pickImage}
              marginBottom={35}
            />
            {image && (
              <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewNFT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    // width: 100,
    // height: 100,
    width: "100%",
    height: "50%",
  },
});
