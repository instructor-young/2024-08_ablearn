import { useEffect, useId, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { editPost } from "../redux/slices/postsSlice";

function PostEditPage() {
  const params = useParams();
  const postId = Number(params.postId);
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  const titleId = useId();
  const bodyId = useId();
  const titleDOMRef = useRef(null);
  const bodyDOMRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: postId,
      title: titleDOMRef.current.value,
      body: bodyDOMRef.current.value,
    };

    dispatch(editPost(updatedPost));
    navigate("/");
  };

  useEffect(() => {
    titleDOMRef.current.value = post.title;
    bodyDOMRef.current.value = post.body;
  }, [post]);

  return (
    <Page>
      <h1 className="text-4xl font-bold">글 수정하기</h1>

      <form className="mt-20" onSubmit={handleSubmitForm}>
        <div className="flex items-start gap-x-5">
          <label
            htmlFor={titleId}
            className="mt-2 text-sm font-semibold text-gray-900"
          >
            제목
          </label>
          <input
            id={titleId}
            ref={titleDOMRef}
            type="text"
            className="border border-gray-700 px-4 py-2 w-full max-w-sm rounded-md"
          />
        </div>

        <div className="mt-10 flex items-start gap-x-5">
          <label
            htmlFor={bodyId}
            className="mt-2 text-sm font-semibold text-gray-900"
          >
            내용
          </label>
          <textarea
            id={bodyId}
            ref={bodyDOMRef}
            rows={10}
            className="border border-gray-700 px-4 py-2 w-full max-w-sm rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-10 bg-sky-500 text-white px-4 py-2 font-semibold rounded-md text-[15px] hover:brightness-90 active:brightness-75"
        >
          수정하기
        </button>
      </form>
    </Page>
  );
}

export default PostEditPage;
