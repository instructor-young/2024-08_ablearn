import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { deletePost } from "../redux/slices/postsSlice";

function PostDetailPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(postId))
  );
  const { title, body } = post;

  const handleClickDelete = () => {
    const action = deletePost(Number(postId));
    dispatch(action);
    navigate("/");
  };

  return (
    <Page>
      <article>
        <h1 className="text-4xl font-bold">{title}</h1>
        <section className="mt-10">
          <p>{body}</p>
        </section>
      </article>
      <footer className="mt-14">
        <Link to={`/posts/${postId}/edit`} className="bg-blue-500 text-white">
          수정하기
        </Link>
        <button onClick={handleClickDelete} className="bg-red-500 text-white">
          삭제하기
        </button>
      </footer>
    </Page>
  );
}

export default PostDetailPage;
