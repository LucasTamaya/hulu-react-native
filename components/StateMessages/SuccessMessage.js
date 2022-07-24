import { View, Text, Dimensions } from "react-native";
import React from "react";
import { CheckIcon } from "react-native-heroicons/solid";
import { MotiView } from "moti";

const SuccessMessage = ({ message }) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <MotiView
      className="absolute top-10 p-2 flex-row justify-center"
      style={{ width: windowWidth }}
      from={{ opacity: 0, left: -200 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{
        opacity: 0,
      }}
    >
      <View className="w-fit flex-row items-center gap-x-2 bg-green-500 p-3 rounded">
        <Text className="text-white font-bold">{message}</Text>
        <CheckIcon size={20} color="#fff" />
      </View>
    </MotiView>
  );
};

export default SuccessMessage;
