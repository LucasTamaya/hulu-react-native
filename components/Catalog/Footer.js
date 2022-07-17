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
    <View className="fixed bottom-0 left-0 w-full flex-row items-center justify-around bg-[#2e2e30] py-5">
      <TouchableOpacity>
        <HomeIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <HeartIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <SearchIcon size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <UserIcon size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
