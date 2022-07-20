import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { doc } from "firebase/firestore";

import { db } from "../firebase-config";
import { getAsyncData } from "../utils/asyncStorage";
import Header from "../components/Catalog/Header";
import Footer from "../components/Catalog/Footer";
import SavedMoviesList from "../components/Catalog/SavedMoviesList";

const SavedFilmsScreen = ({ navigation }) => {
  const [docRef, setDocRef] = useState("");

  // création de la référence au document contenant la liste d'IDS des films sauvegardés dans firebase
  const getDocRef = async () => {
    const uid = await getAsyncData();
    setDocRef(doc(db, "users", uid));
  };

  useEffect(() => {
    getDocRef();
  }, []);

  return (
    <SafeAreaView className="bg-[#151516] h-full">
      <ScrollView className="bg-[#151516]">
        <Header />
        <SavedMoviesList docRef={docRef} />
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default SavedFilmsScreen;
