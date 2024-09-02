import styles from "./MovieCard.module.scss";

function MovieCard() {
  return (
    <div className={styles.movie}>
      {/* 영화 이미지 */}
      <img className={styles.thumbnail} />

      {/* 영화 제목 */}
      <h6 className={styles.title}>제목</h6>
    </div>
  );
}

export default MovieCard;
