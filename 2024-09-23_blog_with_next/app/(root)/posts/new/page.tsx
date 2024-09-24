import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import Textarea from "@/components/Textarea";
import React from "react";
import NewPostForm from "./_components/NewPostForm";

function NewPostPage() {
  return (
    <Page title="글 작성하기">
      <NewPostForm />
    </Page>
  );
}

export default NewPostPage;
