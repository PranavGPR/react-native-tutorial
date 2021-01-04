import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";

export default function ListItem({ title, image, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText>{title}</AppText>
        <AppText style={{ color: "grey" }}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  details: {
    marginHorizontal: 10,
  },
});
