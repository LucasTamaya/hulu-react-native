import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import requests from "../../utils/movieRequests";
import MovieCard from "./MovieCard";

const MovieList = ({ index }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // récupère l'url dans la liste des requêtes à l'index correspondant, par défault index = 0
    const url = requests[index];

    try {
      const data = await axios.get(url);
      setData(data.data.results);
      console.log("nouvelle data reçu");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <ScrollView className="mb-10">
      {data.map((x) => (
        <MovieCard key={x.id} data={x} />
      ))}
    </ScrollView>
  );
};

export default MovieList;
