import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          elevation: 30,
        }}
      ></View>
    </View>
  );
}
