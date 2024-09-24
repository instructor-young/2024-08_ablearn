import { NewPostData, Post } from "@/schemas/posts.schema";

export async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-cache",
    });
    const posts = (await response
      .json()
      .then((data) => JSON.parse(data))) as Post[];

    return posts;
  } catch (e) {
    console.error(e);
  }
}

export async function getPost(postId: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
    const post = (await response.json()) as Post;

    return post;
  } catch (e) {
    console.error(e);
  }
}

export async function createPost(newPostData: NewPostData) {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(newPostData),
    });
    const newPost = (await response.json()) as Post;

    return newPost;
  } catch (e) {
    console.error(e);
  }
}
