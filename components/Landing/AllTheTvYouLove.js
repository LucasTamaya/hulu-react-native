import { View, Text } from "react-native";
import React from "react";

import Cover from "./Cover";
import coversData from "../../utils/coversData";

const AllTheTvYouLove = () => {
  return (
    <View className="bg-[#151516]">
      <View className="flex flex-col items-center gap-y-5 px-5 mt-7">
        <Text className="text-[#00ed82] text-sm uppercase font-bold">
          Included in all plans
        </Text>

        <Text className="text-white text-center font-bold text-3xl">
          All The TV You Love
        </Text>

        <Text className="text-white text-center max-w-[860px] mb-12">
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </Text>
      </View>

      <View className="w-full flex flex-col items-center mt-7">
        {coversData.map((cover, index) => (
          <Cover
            key={index}
            details={cover.details}
            category={cover.category}
            bgSrc={cover.bgSrc}
          />
        ))}
      </View>
    </View>
  );
};

export default AllTheTvYouLove;
