const nowShowingMoviesListDOM = document.querySelector(".now-showing");
const topRatedMoviesListDOM = document.querySelector(".top-rated");
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const method = "GET";
const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs",
};
const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";

const something = {
  method,
  headers,
};

fetch(url, something)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;

    movies.forEach((movie) => {
      const movieHTML = `
        <li>
          <article class="movies-section-movie">
            <img src="${IMAGE_BASE_URL}${movie.backdrop_path}" class="movies-section-movie-thumbnail" />
            <h5 class="movies-section-movie-title">${movie.title}</h5>
          </article>
        </li>
        `;

      nowShowingMoviesListDOM.innerHTML += movieHTML;
    });
  });
