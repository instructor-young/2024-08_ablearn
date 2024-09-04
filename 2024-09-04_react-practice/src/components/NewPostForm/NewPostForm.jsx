import axios from "axios";
import React, { useState } from "react";

function NewPostForm() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeUserIdInput = (e) => {
    setUserId(e.target.value);
  };
  const handleChangeTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeBodyTextarea = (e) => {
    setBody(e.target.value);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newPost = { userId, title, body };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    const data = response.data;

    console.log("서버가 돌려준 데이터: ", data);
  };

  return (
    <div>
      <h2>새 포스트 만들기</h2>

      <form onSubmit={handleSubmitForm}>
        {/* UserId */}
        <label htmlFor="new-post-form-userId-input">작성자 ID</label>
        <input
          id="new-post-form-userId-input"
          type="text"
          value={userId}
          onChange={handleChangeUserIdInput}
        />
        <br />

        {/* Title */}
        <label htmlFor="new-post-form-title-input">제목</label>
        <input
          id="new-post-form-title-input"
          type="text"
          value={title}
          onChange={handleChangeTitleInput}
        />
        <br />

        {/* Body */}
        <label htmlFor="new-post-form-body-textarea">내용</label>
        <textarea
          id="new-post-form-body-textarea"
          value={body}
          onChange={handleChangeBodyTextarea}
        />
        <br />

        <button type="submit">만들기</button>
      </form>
    </div>
  );
}

export default NewPostForm;
