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
  // tous les outils nécessaires afin de gérer mon formulaire
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (input) => {
    setError("");
    Keyboard.dismiss();
    // Enregistrement du nouvel utilisateur via l'api de firebase
    createUserWithEmailAndPassword(auth, input.email, input.password)
      // si aucune erreur
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess("Compte crée avec succès");
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
        return uid;
      })
      // crée un document pour l'utilisateur dans firebase avec un tableau vide qui va contenir la liste d'IDS des films sauvegardés
      .then((uid) => {
        const userRef = doc(db, "users", uid);
        setDoc(userRef, { moviesList: [] });
      })
      // si erreur, on affiche un message d'erreur
      .catch((error) => {
        if (/email/.test(error.message)) {
          setError("Cette adresse email est déjà prise");
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
          <Text className="text-black font-bold text-3xl mb-10">
            Créer mon compte
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
                    keyboardType="web-search"
                    onSubmitEditing={handleSubmit(handleRegister)}
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
        {/* Si aucune erreur lors de la requête */}
        {success ? <SuccessMessage message={success} /> : <></>}

        {/* Si erreur lors de la requête */}
        {error ? <ErrorMessage message={error} /> : <></>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
