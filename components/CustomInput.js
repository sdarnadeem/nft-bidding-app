import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const CustomInput = ({
  label,
  placeholder,
  containerStyle,
  labelStyle,
  inputStyle,
  changeTextHandler,
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        onChangeText={changeTextHandler}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  label: {
    color: COLORS.white,
    marginBottom: 10,
    marginStart: 5,
  },
  input: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font,
    paddingVertical: 5,
    paddingRight: "50%",
    borderRadius: SIZES.extraLarge,
    width: "100%",
  },
});
