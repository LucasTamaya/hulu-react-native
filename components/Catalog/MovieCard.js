import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import MovieDetails from "./MovieDetails";

const MovieCard = ({ data }) => {
  const MDB_IMG_URL = "https://image.tmdb.org/t/p/original";

  const [showDetails, setShowDetails] = useState(false);

  return (
    <View className="mt-10 px-7">
      <TouchableOpacity
        className="flex-row justify-center"
        onPress={() => setShowDetails(!showDetails)}
      >
        <View className="w-[300px] h-[450px] relative">
          <Image
            source={{ uri: `${MDB_IMG_URL}${data.poster_path}` }}
            className="w-full h-full"
            alt="Movie image"
          />
          {showDetails && <MovieDetails data={data} />}
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default MovieCard;
