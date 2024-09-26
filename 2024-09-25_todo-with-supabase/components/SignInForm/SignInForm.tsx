"use client";

import Link from "next/link";
import React, { ComponentProps } from "react";
import Input from "../Input";
import Button from "../Button";
import supabase from "@/supabase/client";

type LogInFormSubmitEvent = React.FormEvent<HTMLFormElement> & {
  target: React.FormEvent<HTMLFormElement>["target"] & {
    email: HTMLInputElement;
    password: HTMLInputElement;
  };
};

function SignInForm() {
  const handleSubmitLogInForm: ComponentProps<"form">["onChange"] = async (
    e: LogInFormSubmitEvent
  ) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) return alert("이메일을 입력해 주세요");
    if (!email.includes("@") || !email.includes("."))
      return alert("올바른 이메일을 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (password.length < 6)
      return alert("비밀번호는 6자 이상으로 입력해 주세요");

    await supabase.auth.signInWithPassword({ email, password });
  };

  return (
    <div className="flex flex-col gap-y-3 px-5 py-10">
      <h2 className="text-center font-bold mb-10">로그인이 필요해요</h2>

      <section>
        <form
          className="grid grid-cols-1 gap-y-4"
          onSubmit={handleSubmitLogInForm}
        >
          <Input label="이메일" name="email" type="email" />
          <Input label="비밀번호" name="password" type="password" />
          <Button className="w-full">로그인하기</Button>
        </form>
      </section>

      <hr />

      <section className="text-xs flex gap-x-1">
        <span>혹시 아직 가입하지 않으셨나요?</span>
        <Link href={"/sign-up"} className="text-blue-500 underline">
          회원가입하러 가기
        </Link>
      </section>
    </div>
  );
}

export default SignInForm;
