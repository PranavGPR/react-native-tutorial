import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY,
      Permissions.LOCATION
    );
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}

const styles = StyleSheet.create({});
