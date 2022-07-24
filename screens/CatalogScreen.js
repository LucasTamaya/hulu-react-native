import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { doc } from "firebase/firestore";

import { db } from "../firebase-config";
import { getAsyncData } from "../utils/asyncStorage";
import Header from "../components/Catalog/Header";
import Nav from "../components/Catalog/Nav";
import Footer from "../components/Catalog/Footer";
import MovieList from "../components/Catalog/MovieList";

const CatalogScreen = ({ navigation }) => {
  // index afin de changer de catégorie pour afficher différents types de films
  const [index, setIndex] = useState(0);

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
      <Header />
      <ScrollView className="bg-[#151516] mt-10">
        <Nav setIndex={setIndex} />
        <MovieList index={index} docRef={docRef} />
      </ScrollView>
      {/* <Footer navigation={navigation} /> */}
    </SafeAreaView>
  );
};

export default CatalogScreen;
