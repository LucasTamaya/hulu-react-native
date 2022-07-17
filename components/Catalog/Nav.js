import { ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";

const Nav = () => {
  return (
    <ScrollView horizontal={true} className="flex-row gap-x-10 mt-7">
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg pl-10">Trending</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Top Rated</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Action</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Comedy</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Horror</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Romance</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Mystery</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">SciFi</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Western</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-white font-bold text-lg">TV Movie</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Nav;
