import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

export default function Header() {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/header.jpg")}
        resizeMode="cover"
        style={{ height: windowHeight }}
        className="w-full"
      />

      <View className="absolute top-0 left-0 w-full flex flex-row justify-between items-center p-5">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[60px] h-[20px]"
        />
        <TouchableOpacity>
          <Text className="text-white text-lg font-bold">LOG IN</Text>
        </TouchableOpacity>
      </View>

      <View className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-y-5 px-4">
        <Text className="text-[#01ED83] text-lg text-center uppercase font-bold">
          Bundle with any hulu plan & save
        </Text>
        <Image
          source={require("../../assets/images/logos.png")}
          resizeMode="contain"
          className="w-[280px] h-[70px]"
        />
        <Text className="text-white font-bold text-xl text-center max-w-[670px]">
          Get endless entertainement, live sports, and the shows and movies you
          love.
        </Text>
        <TouchableOpacity className="bg-[#01ED83] py-4 w-72 flex flex-row justify-center items-center rounded-md">
          <Text className="text-black font-bold uppercase">
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
