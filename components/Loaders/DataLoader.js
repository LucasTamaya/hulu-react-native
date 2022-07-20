import { StyleSheet } from "react-native";
import React from "react";
import AnimatedLoader from "react-native-animated-loader";

const DataLoader = () => {
  return (
    <AnimatedLoader
      visible={true}
      source={require("../../utils/lottieLoader.json")}
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default DataLoader;
