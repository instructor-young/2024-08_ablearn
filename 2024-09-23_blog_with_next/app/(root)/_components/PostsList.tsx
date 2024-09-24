"use client";

import { getPosts } from "@/api/posts.api";
import { Post } from "@/schemas/posts.schema";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface PostsListProps {
  posts: Post[];
}

function PostsList({ posts: initialPosts }: PostsListProps) {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    getPosts().then((posts) => posts && setPosts(posts));
  }, []);

  return (
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
  );
}

export default PostsList;
