import { useId, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import { createPost } from "../redux/reducers/postsReducer";

function PostCreatePage() {
  const titleId = useId();
  const bodyId = useId();
  const titleDOMRef = useRef(null);
  const bodyDOMRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newPost = {
      title: titleDOMRef.current.value,
      body: bodyDOMRef.current.value,
    };

    dispatch(createPost(newPost));
    navigate("/");
  };

  return (
    <Page>
      <h1 className="text-4xl font-bold">새 글 작성하기</h1>

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
          작성하기
        </button>
      </form>
    </Page>
  );
}

export default PostCreatePage;
