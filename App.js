import React from "react";
import { Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          // fontFamily: "Courier",
          fontWeight: "bold",
          fontStyle: "italic",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 50,
        }}
      >
        I love React Native! This is my first React Native App! This is extra
        words
      </Text>
    </View>
  );
}
