import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function AppButton({ children }) {
  return (
    <View style={styles.appButton}>
      <Text style={styles.appButtonText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appButton: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white,
  },
});
