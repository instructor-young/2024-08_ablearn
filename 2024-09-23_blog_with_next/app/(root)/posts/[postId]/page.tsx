import { getPost } from "@/api/posts.api";
import Page from "@/components/Page";
import Link from "next/link";
import React from "react";

async function PostDetailPage(props: { params: { postId: string } }) {
  const postId = Number(props.params.postId);
  const postPromise = getPost(postId);

  let prevPostPromise;
  if (postId > 1 && postId <= 100) {
    const prevPostId = postId - 1;
    prevPostPromise = getPost(prevPostId);
  }

  let nextPostPromise;
  if (postId >= 1 && postId < 100) {
    const nextPostId = postId + 1;
    nextPostPromise = getPost(nextPostId);
  }

  const [post, prevPost, nextPost] = await Promise.all([
    postPromise,
    prevPostPromise,
    nextPostPromise,
  ]);

  if (!post) return <strong>포스트를 불러오는 데 실패했습니다.</strong>;

  return (
    <Page title={post.title}>
      <div className="mb-4">
        <span>Author Id : </span>
        <span>{post.authorName}</span>
      </div>
      <p className="whitespace-pre-line">{post.content}</p>

      <section className="mt-10 border-t border-black py-5">
        <ul className="grid grid-cols-2">
          <li>
            <Link href={prevPost ? `/posts/${prevPost.id}` : "#"}>
              <strong>이전 포스트</strong>
              {prevPost ? (
                <h6>{prevPost.title}</h6>
              ) : (
                <div>이전 포스트가 없습니다</div>
              )}
            </Link>
          </li>
          <li>
            <Link href={nextPost ? `/posts/${nextPost.id}` : "#"}>
              <strong>다음 포스트</strong>
              {nextPost ? (
                <h6>{nextPost.title}</h6>
              ) : (
                <div>다음 포스트가 없습니다</div>
              )}
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  );
}

export default PostDetailPage;
