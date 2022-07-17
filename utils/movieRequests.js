import { TMDB_API_KEY } from "@env";

const requests = [
  `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}`,
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10770`,
];

export default requests;
