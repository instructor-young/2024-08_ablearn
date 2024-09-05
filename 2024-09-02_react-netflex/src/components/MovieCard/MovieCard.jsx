import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className={styles.movie}>
      {/* 영화 이미지 */}
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className={styles.thumbnail}
      />

      {/* 영화 제목 */}
      <h6 className={styles.title}>{movie.title}</h6>
    </Link>
  );
}

export default MovieCard;
