import axios from "axios";
const API_KEY = "1a806e40fd47c3d6bcc5faec6691b7f7";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?language=pt-BR&api_key=${API_KEY}`;
console.log(withBaseUrl)

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}
