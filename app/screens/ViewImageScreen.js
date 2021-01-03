import React from "react";
import { Image, StyleSheet, View } from "react-native";

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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  leftBox: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
  },
  rightBox: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
  },
});
