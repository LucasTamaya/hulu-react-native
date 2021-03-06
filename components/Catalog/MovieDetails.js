import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ThumbUpIcon,
  HeartIcon as HeartIconSolid,
} from "react-native-heroicons/solid";
import { HeartIcon as HeartIconOutlined } from "react-native-heroicons/outline";
import { arrayRemove, arrayUnion, updateDoc } from "firebase/firestore";

const MovieDetails = ({ data, save, setSave, docRef }) => {
  // ajoute l'id du film dans la liste d'ids de films sauvegardés au niveau de firebase
  const saveFilm = async () => {
    await updateDoc(docRef, { moviesList: arrayUnion(data.id) });
  };

  // supprime l'id du film dans la liste d'ids de films sauvegardés au niveau de firebase
  const unsaveFilm = async () => {
    await updateDoc(docRef, { moviesList: arrayRemove(data.id) });
  };

  return (
    <View className="absolute top-0 left-0 bg-[#2e2e30]/90 w-full h-full p-4">
      <Text className="text-white text-2xl text-center font-bold mb-3">
        {data.original_title || data.original_name}
      </Text>
      <Text
        numberOfLines={12}
        className="text-white text-base mb-3 max-h-[310px]"
      >
        {data.overview || "Aucune description pour ce film."}
      </Text>

      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-sm text-white">
          {data.release_date || data.first_air_date}
        </Text>
        <View className="flex-row items-center gap-x-1">
          <ThumbUpIcon size={20} color="#fff" />
          <Text className="text-sm text-white">{data.vote_count}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (save) {
            setSave(!save);
            unsaveFilm();
          } else {
            setSave(!save);
            saveFilm();
          }
        }}
        className="w-[30px] h-[30px] flex-row justify-center items-center"
      >
        {/* si film sauvegardé, coeur plein, sinon coeur vide */}
        {save ? (
          <HeartIconSolid size={25} color="#fff" />
        ) : (
          <HeartIconOutlined size={25} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
