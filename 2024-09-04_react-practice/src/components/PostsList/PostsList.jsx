import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostsList() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    const posts = response.data;

    return posts;
  };

  const deletePost = async (postId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    const newPosts = posts.filter((post) => post.id !== postId);
    setPosts(newPosts);
  };

  useEffect(() => {
    (async () => {
      const posts = await getPosts();
      setPosts(posts);
    })();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <span>{post.id}</span>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <small>작성자: {post.userId}</small>
          <div>
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </div>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
