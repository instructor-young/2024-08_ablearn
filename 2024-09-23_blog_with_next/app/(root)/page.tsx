import { getPosts } from "@/api/posts.api";
import Page from "@/components/Page";
import PostsList from "./_components/PostsList";

async function HomePage() {
  const posts = await getPosts();

  if (!posts) return <strong>포스트 목록을 불러오는 데 실패했습니다.</strong>;

  return (
    <Page title="전체 글">
      <PostsList posts={posts} />
    </Page>
  );
}

export const dynamic = "force-dynamic";

export default HomePage;
