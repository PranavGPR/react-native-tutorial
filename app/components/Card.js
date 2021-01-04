import React from "react";
import { Image, StyleSheet, View } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    fontWeight: "bold",
    color: defaultStyles.colors.secondary,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
});
