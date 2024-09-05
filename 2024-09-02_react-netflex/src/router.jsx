import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import movieDetailPageLoader from "./pages/MovieDetailPage/MovieDetailPage.loader";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        path: "/movies/:movieId",
        element: <MovieDetailPage />,
        loader: movieDetailPageLoader,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
