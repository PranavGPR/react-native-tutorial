import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <AppButton title='login' onPress={() => console.log("Button Tapped")} />
    // </View>
    // <View style={styles.container}>
    //   <Card
    //     title='Red jacket for sale!'
    //     subtitle='$100'
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <ListDetailsScreen
    //   title='Red jacket for sale!'
    //   subtitle='$100'
    //   image={require("./app/assets/jacket.jpg")}
    //   username='Mosh Hamedani'
    //   userImage={require("./app/assets/mosh.jpg")}
    //   listings='5 Listings'
    // />
    // <ViewImageScreen />
    // <MyAccountScreen />
    // <Screen>
    //   <ListItem
    //     title='My Title'
    //     // subtitle='My Subtitle'
    //     IconComponent={<Icon name='email' />}
    //   />
    // </Screen>
    // <ListingsScreen />
    // <Screen>
    //   <Text>{firstName}</Text>
    //   <TextInput
    //     secureTextEntry
    //     placeholder='First Name'
    //     style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
    //     onChangeText={(text) => setFirstName(text)}
    //   />
    // </Screen>
    <AppTextInput placeholder='Username' icon='email' />
  );
}

const styles = StyleSheet.create({});
