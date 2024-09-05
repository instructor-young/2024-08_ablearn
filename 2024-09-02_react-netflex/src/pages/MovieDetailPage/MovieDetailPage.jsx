import { useLoaderData } from "react-router-dom";
import Page from "../../components/Page/Page";

function MovieDetailPage() {
  const movie = useLoaderData();
  return (
    <Page>
      <h1>{movie.title}</h1>
    </Page>
  );
}

export default MovieDetailPage;
