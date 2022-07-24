import {
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { auth } from "../firebase-config";
import { setAsyncData } from "../utils/asyncStorage";
import { loginValidationSchema } from "../utils/validationSchemas";
import SuccessMessage from "../components/StateMessages/SuccessMessage";
import ErrorMessage from "../components/StateMessages/ErrorMessage";
import { AnimatePresence } from "moti";

const LoginScreen = ({ navigation }) => {
  // tous les outils nécessaires afin de gérer mon formulaire
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (input) => {
    setError("");
    Keyboard.dismiss();
    // Tentative de connexion avec l'email et le mot de passe via l'api firebase
    signInWithEmailAndPassword(auth, input.email, input.password)
      // si aucune erreur
      .then((userCredential) => {
        const user = userCredential.user;
        setError("");
        setSuccess("Connexion réussie");
        // marque un temps d'arrêt pour afficher le message
        setTimeout(() => {
          // navigue vers la page UserLogged
          navigation.navigate("UserLogged");
        }, 2000);
        return user.uid;
      })
      // sauvegarde le user id dans async storage
      .then((uid) => {
        setAsyncData(uid);
      })
      // si erreur, on affiche un message d'erreur
      .catch((error) => {
        if (/user|password/.test(error.message)) {
          setError("Email ou mot de passe invalide");
        } else {
          console.log(error.message);
          setError("Une erreur inconnue est survenue");
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="w-full h-full flex flex-col justify-center items-center px-5 bg-[#151516]">
        <View className="bg-white w-full p-5 rounded-md">
          <Text className="text-black font-bold text-3xl mb-10">Connexion</Text>
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

          <KeyboardAvoidingView className="mb-10">
            <Text className="font-bold mb-2 uppercase">Mot de passe</Text>
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
                    keyboardType="web-search"
                    onSubmitEditing={handleSubmit(handleLogin)}
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
            onPress={handleSubmit(handleLogin)}
          >
            <Text className="uppercase text-black font-bold">Connexion</Text>
          </TouchableOpacity>

          <View className="flex-row items-center">
            <Text>Pas encore de compte? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-[#61AFFB] underline">Créer mon compte</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Si aucune erreur lors de la requête */}
        <AnimatePresence>
          {success ? <SuccessMessage message={success} /> : <></>}
        </AnimatePresence>

        {/* Si erreur lors de la requête */}
        <AnimatePresence>
          {error ? <ErrorMessage message={error} /> : <></>}
        </AnimatePresence>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
