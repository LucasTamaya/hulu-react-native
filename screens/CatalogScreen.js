import { ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Catalog/Header";
import Nav from "../components/Catalog/Nav";
import Footer from "../components/Catalog/Footer";
import MovieList from "../components/Catalog/MovieList";


const CatalogScreen = () => {
  // index afin de sélectionner une catégorie dans la liste des catégories dispo
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView className="bg-[#151516] h-full">
      <ScrollView className="bg-[#151516]">
        <Header />
        <Nav setIndex={setIndex} />
        <MovieList index={index} />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default CatalogScreen;
