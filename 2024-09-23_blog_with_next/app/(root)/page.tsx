import Page from "@/components/Page";
import { Post } from "@/schemas/posts.schema";
import Link from "next/link";

async function HomePage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await response.json()) as Post[];

  return (
    <Page title="All Posts">
      <ul className="grid grid-cols-1 gap-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default HomePage;
