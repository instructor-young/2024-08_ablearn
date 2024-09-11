import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PostCreatePage from "./pages/PostCreatePage";
import PostDetailPage from "./pages/PostDetailPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "posts/:postId", element: <PostDetailPage /> },
      { path: "posts/create", element: <PostCreatePage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export function Router({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}
