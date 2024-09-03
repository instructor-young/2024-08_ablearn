import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const getMovies = async () => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs",
    };
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";

    const response = await axios.get(url, { headers });
    const movies = response.data.results;

    setNowPlayingMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.app}>
      <main>
        <Header />
        <MoviesList title="현재 상영작" movies={nowPlayingMovies} />
        <MoviesList title="평점이 높은 영화" movies={nowPlayingMovies} />
      </main>
    </div>
  );
}

export default App;
