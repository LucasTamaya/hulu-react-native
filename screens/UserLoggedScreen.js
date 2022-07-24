import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  HeartIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/solid";

import CatalogScreen from "./CatalogScreen";
import SavedFilmsScreen from "./SavedFilmsScreen";
import SearchScreen from "./SearchScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const UserLoggedScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Catalog") {
            return (
              <HomeIcon size={25} color={focused ? "#01ED83" : "#f1f1f1"} />
            );
          }
          if (route.name === "SavedFilms") {
            return (
              <HeartIcon size={25} color={focused ? "#01ED83" : "#f1f1f1"} />
            );
          }
          if (route.name === "Search") {
            return (
              <SearchIcon size={25} color={focused ? "#01ED83" : "#f1f1f1"} />
            );
          }
          if (route.name === "Settings") {
            return (
              <AdjustmentsIcon
                size={25}
                color={focused ? "#01ED83" : "#f1f1f1"}
              />
            );
          }
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#2e2e30",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name="SavedFilms"
        component={SavedFilmsScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default UserLoggedScreen;
