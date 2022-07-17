import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Landing/Header";
import AllTheTvYouLove from "../components/Landing/AllTheTvYouLove";
import LiveTvMakesItBetter from "../components/Landing/LiveTvMakesItBetter";
import Events from "../components/Landing/Events";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <AllTheTvYouLove />
        <LiveTvMakesItBetter />
        <Events />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
