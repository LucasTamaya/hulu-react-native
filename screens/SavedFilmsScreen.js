import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { doc, getDoc } from "firebase/firestore";
import axios from "axios";

import { db } from "../firebase-config";
import { getAsyncData } from "../utils/asyncStorage";
import Header from "../components/Catalog/Header";
import Footer from "../components/Catalog/Footer";
import { TMDB_API_KEY } from "@env";
import MovieCard from "../components/Catalog/MovieCard";
import DataLoader from "../components/Loaders/DataLoader";

const SavedFilmsScreen = ({ navigation }) => {
  const [docRef, setDocRef] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // récupère les films sauvegardés par l'utilisateur via la liste firebase
  const getData = async () => {
    setLoading(true);
    const uid = await getAsyncData();
    // référence au document dans firebase
    setDocRef(doc(db, "users", uid));
    const docSnap = await getDoc(doc(db, "users", uid));
    // si le document existe
    if (docSnap.exists()) {
      // on récupère la liste des ids des films sauvegardés
      const filmIds = docSnap.data().moviesList;
      // si liste vide, on affiche un message pour informer l'utilisateur
      if (filmIds.length === 0) {
        setError("Aucun films sauvegardés pour le moment");
        return;
      }
      // si liste non vide
      if (filmIds.length > 0) {
        // pour chaque id dans la liste, on va faire une requête vers l'API de TMDB pour récupérer les données correspondant aux films sauvegardés
        filmIds.map(async (id) => {
          const data = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR`
          );
          // on récupère la data dans un tableau
          setData((prev) => [...prev, data.data]);
          setLoading(false);
        });
      }
    }
    // si le document n'existe pas, on affiche un message d'erreur
    if (!docSnap.exists()) {
      console.log("erreur, aucun document reçu");
      setError("Une erreur inconnue est survenue");
    }
  };

  useEffect(() => {
    getData();
    // clean up funtion pour réinitialiser le tableau lorsqu'on démonte le composant
    return () => {
      setData([]);
    };
  }, []);

  return (
    <SafeAreaView className="bg-[#151516] h-full">
      <Header />
      <ScrollView className="bg-[#151516] mt-10">
        <Text className="text-white text-2xl font-bold ml-10">
          Films sauvegardés
        </Text>

        {loading && <DataLoader />}

        {data.map((x) => (
          <MovieCard key={x.id} data={x} docRef={docRef} />
        ))}

        {error ? (
          <Text className="text-white text-2xl mt-10">{error}</Text>
        ) : (
          <></>
        )}
      </ScrollView>
      {/* <Footer navigation={navigation} /> */}
    </SafeAreaView>
  );
};

export default SavedFilmsScreen;
