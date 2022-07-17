import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowDownIcon, ArrowRightIcon } from "react-native-heroicons/solid";

const LiveTvMakesItBetter = () => {
  return (
    <ScrollView className="bg-[#151516]">
      <View className="flex flex-col items-center gap-y-6 pb-5 px-5">
        <Text className="text-[#00ed82] text-sm uppercase">
          Hulu + live tv, now with disney+ and espn+
        </Text>
        <Text className="text-white text-3xl text-center font-bold">
          Live TV Makes It Better
        </Text>
        <Text className="text-white text-center max-w-[730px]">
          Make the switch from cable. Get 75+ top channels on Hulu with your
          favorite live sports, news, and events - plus the entire Hulu
          streaming library. With Unlimited DVR, store Live TV recordings for up
          to nine months and fast-forward through your DVR content. Access
          endless entertainment with Disney+ and live sports with ESPN+. All
          three for a new price of $69.99/month.
        </Text>
        <View>
          <Text className="text-[#cccccc] text-xs text-center">
            18+ only. Regional restrictions, blackouts and{" "}
            <Text className="underline">Live TV terms apply</Text>. Access
            content from each service separately and access ESPN+ content via
            Hulu.
          </Text>
          <Text className="text-[#cccccc] text-xs text-center">
            Location data required to watch certain content. Offer valid for
            eligible subscribers only.
          </Text>
          <Text className="text-[#cccccc] text-xs text-center">
            Unlimited DVR recording is not available for on-demand shows.
          </Text>
        </View>
        <View className="flex flex-row items-center cursor-pointer gap-x-2 mb-8">
          <Text className="text-white text-center uppercase font-bold">
            View channels in your area
          </Text>
          <ArrowRightIcon size={15} color="#fff" />
        </View>
        <ArrowDownIcon size={15} color="#fff"/>
      </View>
    </ScrollView>
  );
};

export default LiveTvMakesItBetter;
