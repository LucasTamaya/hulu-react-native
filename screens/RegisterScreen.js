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
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { auth, db } from "../firebase-config";
import { setAsyncData } from "../utils/asyncStorage";
import { registerValidationSchema } from "../utils/validationSchemas";
import SuccessMessage from "../components/StateMessages/SuccessMessage";
import ErrorMessage from "../components/StateMessages/ErrorMessage";

const RegisterScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;

  // tous les outils nécessaires afin de gérer mon formulaire
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const handleRegister = (input) => {
    // Enregistrement du nouvel utilisateur grâce l'api de firebase
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Catalog");
        console.log("Nouvel utilisateur crée: ", user.email);
        return user.uid;
      })
      .then((uid) => {
        // sauvegarde le user id dans async storage
        setAsyncData(uid);
        return uid;
      })
      .then((uid) => {
        // crée un document pour l'utilisateur dans firebase avec un tableau vide qui va contenir la liste d'IDS des films sauvegardés + son nom d'utilisateur
        const userRef = doc(db, "users", uid);
        setDoc(userRef, { moviesList: [] });
        console.log("uid enregistrer dans firebase");
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
            <Text className="text-black font-bold text-3xl mb-10">
              Register
            </Text>

            <Text className="font-bold mb-2 uppercase">Nom d'utilisateur</Text>
            <KeyboardAvoidingView className="mb-10">
              <Controller
                control={control}
                name="username"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <View>
                    <TextInput
                      value={value || ""}
                      className="border-2 border-black px-4 py-2 rounded"
                      onChangeText={onChange}
                      secureTextEntry={false}
                    />
                    {/* Message d'erreur, si erreur il y a */}
                    {!!error && (
                      <Text className="text-red-500 text-xs">
                        {error?.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </KeyboardAvoidingView>

            <Text className="font-bold mb-2 uppercase">Email</Text>
            <KeyboardAvoidingView className="mb-10">
              <Controller
                control={control}
                name="email"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <View>
                    <TextInput
                      value={value || ""}
                      className="border-2 border-black px-4 py-2 rounded"
                      onChangeText={onChange}
                      keyboardType="email-address"
                      secureTextEntry={false}
                    />
                    {/* Message d'erreur, si erreur il y a */}
                    {!!error && (
                      <Text className="text-red-500 text-xs">
                        {error?.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </KeyboardAvoidingView>

            <Text className="font-bold mb-2 uppercase">Mot de passe</Text>
            <KeyboardAvoidingView className="mb-10">
              <Controller
                control={control}
                name="password"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <View>
                    <TextInput
                      value={value || ""}
                      className="border-2 border-black px-4 py-2 rounded"
                      onChangeText={onChange}
                      secureTextEntry={true}
                    />
                    {/* Message d'erreur, si erreur il y a */}
                    {!!error && (
                      <Text className="text-red-500 text-xs">
                        {error?.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </KeyboardAvoidingView>

            <TouchableOpacity
              className="w-full py-4 flex flex-row justify-center items-center bg-[#01ED83] rounded-md mb-5"
              onPress={handleSubmit(handleRegister)}
            >
              <Text className="uppercase text-black font-bold">
                Créer mon compte
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text>Déjà un compte? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-[#61AFFB] underline">Me connecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
