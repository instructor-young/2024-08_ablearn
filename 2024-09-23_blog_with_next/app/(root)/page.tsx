import { getPosts } from "@/api/posts.api";
import Page from "@/components/Page";
import Link from "next/link";

async function HomePage() {
  const posts = await getPosts();

  if (!posts) return <strong>포스트 목록을 불러오는 데 실패했습니다.</strong>;

  return (
    <Page title="All Posts">
      <ul className="grid grid-cols-1 gap-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="hover:text-orange-500 active:brightness-75 transition"
              href={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export const dynamic = "force-dynamic";

export default HomePage;
