import { View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { getDoc } from "firebase/firestore";

import MovieDetails from "./MovieDetails";

const MovieCard = ({ data, docRef }) => {
  const MDB_IMG_URL = "https://image.tmdb.org/t/p/original";

  const [showDetails, setShowDetails] = useState(false);
  const [save, setSave] = useState(false);

  // récupération de la liste d'IDS des films sauvegardés
  const getSavedFilmIds = async () => {
    const docSnap = await getDoc(docRef);
    // si le document existe
    if (docSnap.exists()) {
      const filmIds = docSnap.data().moviesList;
      // si le document est vide
      if (filmIds.length === 0) {
        return;
      }
      // comparaison de l'id du film qu'on observe avec celui de la liste dans firebase, afin de voir si il a été sauvegardé ou non, pour adapter l'icon dans les détails
      filmIds.map((id) => {
        if (id === data.id) {
          setSave((prev) => !prev);
          return;
        }
      });
    } else {
      console.log("erreur, aucun document reçu");
    }
  };

  useEffect(() => {
    getSavedFilmIds();
  }, []);

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
          {showDetails && (
            <MovieDetails
              data={data}
              save={save}
              setSave={setSave}
              docRef={docRef}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
