import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main>
        <MoviesList title="현재 상영작" />
        <MoviesList title="평점이 높은 영화" />
      </main>
    </div>
  );
}

export default App;
