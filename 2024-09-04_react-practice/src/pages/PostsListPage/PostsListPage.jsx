import NewPostForm from "../../components/NewPostForm/NewPostForm";
import PostsList from "../../components/PostsList/PostsList";

function PostsListPage() {
  return (
    <div>
      <section>
        <NewPostForm />
      </section>

      <hr />

      <section>
        <PostsList />
      </section>
    </div>
  );
}

export default PostsListPage;
