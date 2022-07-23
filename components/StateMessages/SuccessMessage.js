import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CheckIcon } from "react-native-heroicons/solid";

const SuccessMessage = ({ message }) => {
  return (
    <View className="fixed top-10 w-fit flex-row items-center gap-x-2 bg-green-500 p-3 rounded transition ease animate-authTransitionInSm">
      <Text className="text-white font-bold">{message}</Text>
      <CheckIcon size={20} color="#fff" />
    </View>
  );
};

export default SuccessMessage;
