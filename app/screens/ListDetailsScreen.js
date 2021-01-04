import React from "react";
import { StyleSheet, View } from "react-native";

import Card from "../components/Card";
import ListItem from "../components/ListItem";

export default function ListDetailsScreen({
  title,
  subtitle,
  image,
  username,
  userImage,
  listings,
}) {
  return (
    <View>
      <Card title={title} subtitle={subtitle} image={image} />
      <ListItem title={username} image={userImage} subtitle={listings} />
    </View>
  );
}

const styles = StyleSheet.create({});
