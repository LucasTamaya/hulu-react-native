import { Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDoc } from "firebase/firestore";

import MovieCard from "./MovieCard";

const SavedMoviesList = ({ docRef }) => {
  const [data, setData] = useState([]);

  // récupération de la liste d'IDS des films sauvegardés
  const getSavedFilmIds = () => {
    const docSnap = getDoc(docRef);
    console.log("je suis ici")
    docSnap.then((doc) => {
      if (doc.exists()) {
        console.log(doc.data().moviesList);
      }
      if (!doc.exists()) {
        console.log("aucun document reçu");
      }
    });
  };

  // useEffect(() => {
  //   getSavedFilmIds();
  // }, []);

  return (
    <ScrollView className="m-10">
      <Text className="text-white text-2xl font-bold">Saved films</Text>
      {/* {data.map((x) => (
        <MovieCard key={x.id} data={x} docRef={docRef} />
      ))} */}
    </ScrollView>
  );
};

export default SavedMoviesList;
