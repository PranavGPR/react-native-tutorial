import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function ListItem({
  title,
  image,
  subtitle,
  onPress,
  renderRightActions,
  style,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={defaultStyles.colors.lightgrey}
      >
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.details}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  details: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  subtitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: "500",
    marginBottom: 5,
  },
});
