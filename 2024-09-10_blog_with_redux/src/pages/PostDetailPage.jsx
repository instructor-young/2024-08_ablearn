import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Page from "../components/Page";

function PostDetailPage() {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(postId))
  );
  const { title, body } = post;

  return (
    <Page>
      <article>
        <h1 className="text-4xl font-bold">{title}</h1>
        <section className="mt-10">
          <p>{body}</p>
        </section>
      </article>
    </Page>
  );
}

export default PostDetailPage;
