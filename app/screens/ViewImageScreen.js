import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.chair}
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.leftBox} />
      <View style={styles.rightBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  chair: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  leftBox: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  rightBox: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
});
