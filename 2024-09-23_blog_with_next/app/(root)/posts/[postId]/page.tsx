import Page from "@/components/Page";
import { Post } from "@/schemas/posts.schema";
import Link from "next/link";
import React from "react";

async function PostDetailPage(props: { params: { postId: string } }) {
  const { postId } = props.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = (await response.json()) as Post;

  let prevPost;
  if (+postId > 1 && +postId <= 100) {
    const prevPostId = Number(postId) - 1;
    const prevPostResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${prevPostId}`
    );
    prevPost = (await prevPostResponse.json()) as Post;
  }

  let nextPost;
  if (+postId >= 1 && +postId < 100) {
    const nextPostId = Number(postId) + 1;
    const nextPostResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${nextPostId}`
    );
    nextPost = (await nextPostResponse.json()) as Post;
  }

  return (
    <Page title={post.title}>
      <div className="mb-4">
        <span>Author Id : </span>
        <span>{post.userId}</span>
      </div>
      <p>{post.body}</p>

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
