import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function MyAccountScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.user}>
        <ListItem
          title='Mosh Hamedani'
          subtitle='programmingwithmosh@gmail.com'
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.activity}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title='Logout'
          IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightgrey,
  },
  user: {
    backgroundColor: defaultStyles.colors.white,
  },
  activity: {
    backgroundColor: defaultStyles.colors.white,
    marginTop: 20,
  },
  logout: {
    backgroundColor: defaultStyles.colors.white,
    marginTop: 20,
  },
});
