import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Landing/Header";
import AllTheTvYouLove from "../components/Landing/AllTheTvYouLove";
import LiveTvMakesItBetter from "../components/Landing/LiveTvMakesItBetter";
import Events from "../components/Landing/Events";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView className="bg-[#151516]">
      <SafeAreaView className="h-full">
        <Header navigation={navigation} />
        <ScrollView>
          <AllTheTvYouLove />
          <LiveTvMakesItBetter />
          <Events navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
