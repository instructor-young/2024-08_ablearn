import { createBrowserRouter } from "react-router-dom";
import PostsLayout from "./layouts/PostsLayout/PostsLayout";
import RootLayout from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import PostsListPage from "./pages/PostsListPage/PostsListPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "posts",
        element: <PostsLayout />,
        children: [
          { path: "", element: <PostsListPage /> },
          { path: ":postId", element: <PostDetailPage /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
