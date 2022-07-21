import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CheckIcon } from "react-native-heroicons/solid";

const SuccessMessage = ({ message }) => {
  return (
    <View className="fixed w-[200px] top-10 flex-row items-center justify-center gap-x-2 bg-green-500 p-3 rounded transition ease animate-authTransitionInSm">
      <Text className="text-white font-bold">{message}</Text>
      <CheckIcon size={20} color="#fff" />
    </View>
  );
};

export default SuccessMessage;
