"use client";

import { createPost } from "@/api/posts.api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { NewPostData } from "@/schemas/posts.schema";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useState } from "react";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const currentUser = useAuthStore((state) => state.currentUser);

  const handleChangeTitle: ComponentProps<"input">["onChange"] = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 40) return;

    setTitle(inputValue);
  };
  const handleChangeAuthorName: ComponentProps<"input">["onChange"] = (e) => {
    const inputValue = e.target.value;
    if (inputValue.includes("바보")) {
      setAuthorName("");
      alert("미풍양속에 적절한 이름만 써 주세요~!");
      return;
    }

    setAuthorName(inputValue);
  };
  const handleChangeContent: ComponentProps<"textarea">["onChange"] = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 5000) return;

    setContent(inputValue);
  };
  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!title) return alert("제목을 입력해 주세요");
    if (!authorName) return alert("작성자 이름을 입력해 주세요");
    if (!content) return alert("글 내용을 입력해 주세요");

    // 이제 서버로 내용 보내면 끝 + 홈으로 이동하기
    const newPostData: NewPostData = { title, authorName, content };
    const newPost = await createPost(newPostData, currentUser);

    if (!newPost) return alert("포스트가 생성되지 않았습니다.");

    router.push(`/posts/${newPost.id}`);
  };

  return (
    <form
      className="flex flex-col gap-y-5 items-start"
      onSubmit={handleSubmitForm}
    >
      {/* 제목 */}
      <Input
        label="글 제목"
        type="text"
        helpText="글 제목은 최대 40자까지 입력할 수 있습니다"
        wrapperClassName="w-[600px]"
        value={title}
        onChange={handleChangeTitle}
      />

      {/* 작성자명 */}
      <Input
        label="작성자 이름"
        type="text"
        helpText="미풍양속에 맞지 않는 이름은 삭제 처리됩니다."
        value={authorName}
        onChange={handleChangeAuthorName}
      />

      {/* 내용 */}
      <Textarea
        label="글 내용"
        helpText="최대 5000자까지 작성할 수 있습니다."
        rows={12}
        value={content}
        onChange={handleChangeContent}
      />

      <Button type="submit">작성하기</Button>
    </form>
  );
}

export default NewPostForm;
