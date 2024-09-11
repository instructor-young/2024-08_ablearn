import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Page from "../components/Page";

function HomePage() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Page>
      <ul className="flex flex-col gap-y-2 list-inside list-disc">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              className="hover:text-blue-400 transition-colors"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default HomePage;
