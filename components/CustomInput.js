import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomInput = ({
  label,
  placeholder,
  containerStyle,
  labelStyle,
  inputStyle,
  changeTextHandler,
  icon,
  iconPressHandler,
  inputGroupStyle,
  ...inputProps
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={[styles.inputGroup, inputGroupStyle]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          onChangeText={changeTextHandler}
          {...inputProps}
        />
        {icon && (
          <Ionicons
            style={styles.icon}
            name={icon}
            size={23}
            color="black"
            onPress={iconPressHandler}
          />
        )}
      </View>
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
    width: "90%",
  },
  inputGroup: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font,
    paddingVertical: 5,
    borderRadius: SIZES.extraLarge,
    width: "100%",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 0,
    paddingRight: 10,
  },
});
