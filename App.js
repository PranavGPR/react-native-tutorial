import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermisson = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access");
  };

  useEffect(() => {
    requestPermisson();
  }, []);

  return <Screen></Screen>;
}

const styles = StyleSheet.create({});
