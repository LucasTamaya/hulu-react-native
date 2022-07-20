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
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase-config";
import { getAsyncData, setAsyncData } from "../utils/asyncStorage";

const LoginScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Connexion au compte utilisateur grâce à l'api firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Catalog");
        console.log("Connecté avec l'UID: ", user.uid);
        return user.uid;
      })
      .then((uid) => {
        // sauvegarde le user id dans async storage
        setAsyncData(uid);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
            <Text className="text-black font-bold text-3xl mb-10">Log in</Text>
            <KeyboardAvoidingView className="mb-10">
              <Text className="font-bold mb-2 uppercase">Email</Text>
              <TextInput
                className="border-2 border-black px-4 py-2 rounded"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
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
              onPress={handleLogin}
            >
              <Text className="uppercase text-black font-bold">Log in</Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text>Don't have an account yet? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="text-[#61AFFB]">Register here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
