import React from "react";
import { View, StyleSheet } from "react-native";
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

export default function App() {
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
    <Screen>
      <Icon name='email' size={100} backgroundColor='red' iconColor='white' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   padding: 20,
  //   paddingTop: 100,
  //   backgroundColor: "#f8f4f4",
  // },
});
