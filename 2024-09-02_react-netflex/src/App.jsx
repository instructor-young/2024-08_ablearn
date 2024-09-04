import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  return (
    <div className={styles.app}>
      <main>
        <Header />
        <MoviesList title="현재 상영작" category="now_playing" />
        <MoviesList title="평점이 높은 영화" category="top_rated" />
        <MoviesList title="인기 있는" category="popular" />
        <MoviesList title="곧 개봉하는" category="upcoming" />
      </main>
    </div>
  );
}

export default App;
