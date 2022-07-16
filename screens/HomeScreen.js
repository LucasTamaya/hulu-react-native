import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Landing/Header";
import AllTheTvYouLove from "../components/Landing/AllTheTvYouLove";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <ScrollView>
          <AllTheTvYouLove />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
