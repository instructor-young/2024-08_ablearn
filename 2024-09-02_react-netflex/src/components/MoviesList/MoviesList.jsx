import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

function MoviesList(props) {
  const { title } = props;

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      <ul className={styles.moviesList}>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
        <li className={styles.moviesListItem}>
          <MovieCard />
        </li>
      </ul>
    </section>
  );
}

export default MoviesList;
