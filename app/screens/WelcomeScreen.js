import React from "react";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='login' />
        <AppButton title='register' color='secondary' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default WelcomeScreen;
