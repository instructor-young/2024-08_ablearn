import { useEffect, useState } from "react";
import { getMoviesOnCategory } from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

function MoviesList({ title, category }) {
  const [moviesOnCategory, setMoviesOnCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await getMoviesOnCategory(category);
      setMoviesOnCategory(movies);
    })();
  }, [category]);

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      <ul className={styles.moviesList}>
        {moviesOnCategory.map((movie) => (
          <li key={movie.id} className={styles.moviesListItem}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
