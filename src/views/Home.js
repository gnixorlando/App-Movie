import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesServices";
import {MoviesList} from "../components/MoviesList"

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
      <MoviesList movies={movies} />
  );
};