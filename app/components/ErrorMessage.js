import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <View>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
