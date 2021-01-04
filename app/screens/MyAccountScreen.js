import React from "react";
import { StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function MyAccountScreen() {
  return (
    <Screen style={styles.container}>
      <ListItem
        title='Mosh Hamedani'
        subtitle='programmingwithmosh@gmail.com'
        image={require("../assets/mosh.jpg")}
        style={styles.user}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
  },
  user: {
    backgroundColor: colors.white,
  },
});
