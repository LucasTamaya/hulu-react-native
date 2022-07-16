import { View, Text, ImageBackground } from "react-native";
import React from "react";

const Cover = ({ details, category, bgSrc }) => {
  return (
    <ImageBackground
      source={bgSrc}
      resizeMode="cover"
      className="w-full max-w-[294px] h-[450px] relative mb-7"
    >
      <View className="absolute top-0 left-0 w-full h-full flex flex-col justify-start p-7 bg-black/30">
        <Text className="text-white text-xl z-10">{details}</Text>
        <Text className="text-white text-2xl z-10 font-bold">{category}</Text>
      </View>
    </ImageBackground>
  );
};

export default Cover;
