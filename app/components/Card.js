import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
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
    backgroundColor: colors.white,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
});
