import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title='Mosh Hamedani'
            subtitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
