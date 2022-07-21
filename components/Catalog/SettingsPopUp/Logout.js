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
        <Text className="text-lg text-center font-bold">
          Vous nous quittez déjà ?
        </Text>
        <View className="flex-row items-center gap-x-5 mt-5">
          <TouchableOpacity
            className="bg-[#00ed82] rounded-md flex-1 flex-row justify-center items-center"
            onPress={() => setLogOutPopUp(false)}
          >
            <Text className="font-bold p-3">Revenir à l'appli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#2e2e30] rounded-md flex-1 flex-row justify-center items-center"
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="text-white font-bold p-3">Me déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Logout;
