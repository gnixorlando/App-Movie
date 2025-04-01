import { MovieItem } from "./MovieItem";
import styles from "./Movie.module.css"

export const MoviesList = ({ movies }) => (
  <div className={styles.MoviesList}>
    {movies.map((m) => (
      <li>
        <MovieItem id={m.id} title={m.title} poster={m.poster_path} />
      </li>
    ))}
  </div>
);