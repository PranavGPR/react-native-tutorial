import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.chair}
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='white'
          size={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chair: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
