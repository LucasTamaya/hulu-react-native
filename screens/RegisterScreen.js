import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Enregistrement du nouvel utilisateur grâce l'api de firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Nouvel utilisateur enregistré avec l'email: ", user.email);
        navigation.navigate("Catalog");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <ImageBackground
          source={require("../assets/images/header.jpg")}
          resizeMode="cover"
          style={{ height: windowHeight }}
          className="w-full"
        />
        <View
          className="absolute top-0 left-0 w-full flex flex-col justify-center items-center px-5"
          style={{ height: windowHeight }}
        >
          <View className="bg-white w-full p-5 rounded-md">
            <Text className="text-black font-bold text-3xl mb-10">
              Register
            </Text>
            <KeyboardAvoidingView className="mb-10">
              <Text className="font-bold mb-2 uppercase">Username</Text>
              <TextInput className="border-2 border-black px-4 py-2 rounded" />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView className="mb-10">
              <Text className="font-bold mb-2 uppercase">Email</Text>
              <TextInput
                className="border-2 border-black px-4 py-2 rounded"
                onChangeText={(text) => setEmail(text)}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView className="mb-10">
              <Text className="font-bold mb-2 uppercase">Password</Text>
              <TextInput
                className="border-2 border-black px-4 py-2 rounded"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              className="w-full py-4 flex flex-row justify-center items-center bg-[#01ED83] rounded-md mb-5"
              onPress={handleRegister}
            >
              <Text className="uppercase text-black font-bold">Register</Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-[#61AFFB]">Log in here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
