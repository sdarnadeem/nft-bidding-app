import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = ({ props }) => {
  const isFocued = useIsFocused();

  return isFocued ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({});
