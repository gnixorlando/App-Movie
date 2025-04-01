import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

export const MovieItem = ({ title, id, poster }) => (
    <div className={styles.MovieItem}>
      <img className={styles.MovieImage} src={poster && `https://image.tmdb.org/t/p/w200/${poster}`}></img>
      <Link className={styles.Link} to={`movie/${id}`}>{title}</Link>
    </div>
);
