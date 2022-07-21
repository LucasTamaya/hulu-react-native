import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import { auth } from "../../../firebase-config";

const ChangePassword = ({ setChangePasswordPopUp }) => {
  const windowHeight = Dimensions.get("window").height;

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let user = auth.currentUser;

  const handleInput = () => {
    // si inputs vide on ne fait rien
    // if (password === "") {
    //   Keyboard.dismiss();
    //   return;
    // }
    // si inputs non vide, on récupère les credits de l'utilisateur = email + mot de passe actuel
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    // on réauthentifie l'utilisateur afin de réduire les problèmes de sécurité
    reauthenticateWithCredential(user, credential)
      // si la réauthentification est réussie
      .then(() => {
        console.log("reauthentifiacation réussi");
        // on met à jour le mot de passe
        updatePassword(user, newPassword)
          .then(() => {
            console.log("update du mot de passe réussi");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      // sinon, on affiche un message d'erreur
      .catch((error) => console.error(error.message));
  };

  return (
    <View
      className="absolute w-full bg-black/70 flex-row justify-center items-center px-5"
      style={{ height: windowHeight }}
    >
      <View className="w-full bg-white rounded-md p-5">
        <KeyboardAvoidingView>
          <Text className="font-bold mb-2 uppercase">Mot de passe actuel</Text>
          <TextInput
            className="border-2 border-black px-4 py-2 rounded"
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView>
          <Text className="font-bold mb-2 uppercase">Nouveau mot de passe</Text>
          <TextInput
            className="border-2 border-black px-4 py-2 rounded"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
        </KeyboardAvoidingView>
        <View className="flex-row items-center gap-x-5 mt-5">
          <TouchableOpacity
            className="bg-[#00ed82] rounded-md flex-[0.5] flex-row justify-center items-center"
            onPress={handleInput}
          >
            <Text className="font-bold p-3">Confirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#2e2e30] rounded-md flex-[0.5] flex-row justify-center items-center"
            onPress={() => setChangePasswordPopUp(false)}
          >
            <Text className="text-white font-bold p-3">Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
