import { View, TouchableOpacity } from "react-native";
import React from "react";
import {
  HomeIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/solid";

const Footer = () => {
  return (
    <View className="fixed bottom-0 left-0 w-full flex-row items-center justify-around bg-[#2e2e30]">
      <TouchableOpacity className="p-2">
        <HomeIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity className="p-2">
        <HeartIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity className="p-2">
        <SearchIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity className="p-2">
        <UserIcon size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
