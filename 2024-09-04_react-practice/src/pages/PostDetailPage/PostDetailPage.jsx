import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetailPage() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const post = response.data;
        setPost(post);
        setIsSuccess(true);
      } catch (e) {
        console.log("에러 남");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [postId]);

  if (isLoading) return "로딩중...";

  if (isError) return "에러 나서 보여줄 거 없음";

  return (
    <div>
      <h1>
        [{post.id}] {post.title}
      </h1>

      <div>
        <span>작성자ID: </span>
        <span>{post.userId}</span>
      </div>

      <p>{post.body}</p>

      <Link to={`/posts/${Number(postId) + 1}`}>다음 포스트</Link>
    </div>
  );
}

export default PostDetailPage;
