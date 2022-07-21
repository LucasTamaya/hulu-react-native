import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { ShieldExclamationIcon } from "react-native-heroicons/outline";

const ErrorMessage = ({ message }) => {
  return (
    <TouchableOpacity className="fixed top-10 w-fit flex-row items-center gap-x-2 bg-red-500 p-3 rounded transition ease animate-authTransitionInSm">
      <Text className="text-white font-bold">{message}</Text>
      <ShieldExclamationIcon size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default ErrorMessage;
