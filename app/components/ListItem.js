import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";

export default function ListItem({ username, userImage, listings }) {
  return (
    <View style={styles.user}>
      <Image style={styles.userImage} source={userImage} />
      <View style={styles.userDetails}>
        <AppText>{username}</AppText>
        <AppText style={{ color: "grey" }}>{listings} Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    margin: 20,
    flex: 1,
    flexDirection: "row",
  },
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  userDetails: {
    marginHorizontal: 10,
  },
});
