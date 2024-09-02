import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

function MoviesList(props) {
  const { title } = props;

  const movies = Array(1000).fill(0);

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      <ul className={styles.moviesList}>
        {movies.map((_, index) => (
          <li key={index} className={styles.moviesListItem}>
            <MovieCard />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
