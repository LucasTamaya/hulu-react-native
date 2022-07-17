import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Landing/Header";
import AllTheTvYouLove from "../components/Landing/AllTheTvYouLove";
import LiveTvMakesItBetter from "../components/Landing/LiveTvMakesItBetter";
import Events from "../components/Landing/Events";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <AllTheTvYouLove />
        <LiveTvMakesItBetter />
        <Events navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
