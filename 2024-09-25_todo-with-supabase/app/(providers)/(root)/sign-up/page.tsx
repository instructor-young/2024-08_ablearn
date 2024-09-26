"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import supabase from "@/supabase/client";
import React, { ComponentProps } from "react";

type SignUpFormSubmitEvent = React.FormEvent<HTMLFormElement> & {
  target: React.FormEvent<HTMLFormElement>["target"] & {
    email: HTMLInputElement;
    password: HTMLInputElement;
    passwordConfirm: HTMLInputElement;
  };
};

function SignUpPage() {
  const handleSubmitSignUpForm: ComponentProps<"form">["onChange"] = async (
    e: SignUpFormSubmitEvent
  ) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if (!email) return alert("이메일을 입력해 주세요");
    if (!email.includes("@") || !email.includes("."))
      return alert("올바른 이메일을 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (password.length < 6)
      return alert("비밀번호는 6자 이상으로 입력해 주세요");
    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않아요");

    await supabase.auth.signUp({ email, password });
  };

  return (
    <div className="px-5 py-10">
      <form
        className="grid grid-cols-1 gap-y-4"
        onSubmit={handleSubmitSignUpForm}
      >
        <Input label="이메일" name="email" type="email" />
        <Input label="비밀번호" name="password" type="password" />
        <Input label="비밀번호 확인" name="passwordConfirm" type="password" />
        <Button className="w-full">가입하기</Button>
      </form>
    </div>
  );
}

export default SignUpPage;
