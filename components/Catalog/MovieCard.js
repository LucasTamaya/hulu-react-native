import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { ThumbUpIcon } from "react-native-heroicons/solid";

const MovieCard = ({ data }) => {
  const MDB_IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <View className="mt-10 px-7">
      <TouchableOpacity className="flex-row justify-center">
        <Image
          source={{ uri: `${MDB_IMG_URL}${data.poster_path}` }}
          className="w-[300px] h-[450px]"
          alt="Movie image"
        />
      </TouchableOpacity>

      {/* <Text className="text-white text-sm max-w-[500px] h-[20px] mt-2 overflow-hidden truncate">
        {data.overview}
      </Text> */}

      {/* <Text className="text-white text-xl font-bold  mt-2">
        {data.original_title || data.original_name}
      </Text> */}

      {/* <View className="flex items-center gap-x-4">
        <Text className="text-sm text-white">
          {data.release_date || data.first_air_date}
        </Text>
        <View className="flex items-center gap-x-1">
          <ThumbUpIcon size={25} color="#fff" />
          <Text className="text-sm text-white">{data.vote_count}</Text>
        </View>
      </View> */}
    </View>
  );
};

export default MovieCard;
