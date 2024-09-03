import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

function MoviesList(props) {
  const { title, movies } = props;

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      <ul className={styles.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.moviesListItem}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
