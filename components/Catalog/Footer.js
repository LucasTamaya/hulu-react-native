import { View, TouchableOpacity } from "react-native";
import React from "react";
import {
  HomeIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/solid";

const Footer = ({ navigation }) => {
  return (
    <View className="fixed bottom-0 left-0 w-full flex-row items-center justify-around bg-[#2e2e30]">
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate("Catalog")}
      >
        <HomeIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate("SavedFilms")}
      >
        <HeartIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate("Search")}
      >
        <SearchIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate("Settings")}
      >
        <UserIcon size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
