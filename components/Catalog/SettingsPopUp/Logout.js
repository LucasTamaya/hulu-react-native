import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const Logout = ({ navigation, setLogOutPopUp }) => {
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      className="absolute w-full bg-black/70 flex-row justify-center items-center px-5"
      style={{ height: windowHeight }}
    >
      <View className="w-full bg-white rounded-md p-5">
        <Text className="text-lg text-center font-bold mb-8">
          Vous nous quittez déjà ?
        </Text>
        <TouchableOpacity
          className="w-full py-4 flex flex-row justify-center items-center bg-[#01ED83] rounded-md mb-5"
          onPress={() => setLogOutPopUp(false)}
        >
          <Text className="uppercase text-black font-bold">
            Revenir à l'appli
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full py-4 flex flex-row justify-center items-center bg-[#2e2e30] rounded-md"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="uppercase text-white font-bold">Me déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;
