import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

export default function ListItem({ title, image, subtitle, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightgrey}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.details}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  details: {
    marginHorizontal: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
