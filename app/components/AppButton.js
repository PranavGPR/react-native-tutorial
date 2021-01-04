import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import defaultStyles from "../config/styles";

export default function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[
        styles.appButton,
        { backgroundColor: defaultStyles.colors[color] },
      ]}
      onPress={onPress}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButton: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: defaultStyles.colors.white,
  },
});
