import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingEdit' component={ListingEditScreen} />
    <Tab.Screen name='Account' component={MyAccountScreen} />
  </Tab.Navigator>
);
