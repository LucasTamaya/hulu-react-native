import { ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Catalog/Header";
import Nav from "../components/Catalog/Nav";
import Footer from "../components/Catalog/Footer";

const CatalogScreen = () => {
  return (
    <SafeAreaView className="bg-[#151516] h-full">
      <ScrollView className="bg-[#151516]">
        <Header />
        <Nav />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default CatalogScreen;
