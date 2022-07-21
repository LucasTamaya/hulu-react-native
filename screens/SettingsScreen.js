import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import {
  LogoutIcon,
  InformationCircleIcon,
  EyeOffIcon,
  IdentificationIcon,
} from "react-native-heroicons/outline";

import Header from "../components/Catalog/Header";
import Footer from "../components/Catalog/Footer";
import Logout from "../components/Catalog/SettingsPopUp/Logout";
import ChangePassword from "../components/Catalog/SettingsPopUp/ChangePassword";

const SettingsScreen = ({ navigation }) => {
  const [logOutPopUp, setLogOutPopUp] = useState(false);
  const [changePasswordPopUp, setChangePasswordPopUp] = useState(false);

  return (
    <SafeAreaView className="bg-[#151516] h-full">
      <ScrollView>
        <Header />
        <View className="border-t border-b border-white mt-28">
          <TouchableOpacity
            className="flex-row justify-between items-center p-5"
            onPress={() => setLogOutPopUp(true)}
          >
            <View className="flex-row items-center">
              <LogoutIcon size={20} color="#fff" />
              <Text className="text-white ml-2">Déconnexion</Text>
            </View>
            <ArrowRightIcon size={15} color="#fff" />
          </TouchableOpacity>
        </View>

        <View className="border-t border-b border-white">
          <TouchableOpacity
            className="flex-row justify-between items-center p-5"
            onPress={() => setChangePasswordPopUp(true)}
          >
            <View className="flex-row items-center">
              <EyeOffIcon size={20} color="#fff" />
              <Text className="text-white ml-2">Changer mon mot de passe</Text>
            </View>
            <ArrowRightIcon size={15} color="#fff" />
          </TouchableOpacity>
        </View>
        <View className="border-t border-b border-white">
          <TouchableOpacity
            className="flex-row justify-between items-center p-5"
            onPress={() => {}}
          >
            <View className="flex-row items-center">
              <InformationCircleIcon size={20} color="#fff" />
              <Text className="text-white ml-2">Mentions légales</Text>
            </View>
            <ArrowRightIcon size={15} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {logOutPopUp && (
        <Logout navigation={navigation} setLogOutPopUp={setLogOutPopUp} />
      )}

      {changePasswordPopUp && (
        <ChangePassword setChangePasswordPopUp={setChangePasswordPopUp} />
      )}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default SettingsScreen;
