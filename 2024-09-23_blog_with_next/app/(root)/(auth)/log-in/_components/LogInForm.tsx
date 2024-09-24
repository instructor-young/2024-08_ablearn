"use client";

import { logIn } from "@/api/auth.api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { LogInData } from "@/schemas/auth.schema";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useEffect, useRef } from "react";

function LogInForm() {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!emailInputRef.current) return;
    if (!passwordInputRef.current) return;

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // 예외 처리
    if (!email) return alert("이메일 주소를 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (!email.includes("@")) return alert("올바른 이메일 주소를 적어 주세요");
    if (password.length < 8) return alert("비밀번호는 8글자 이상이어야 합니다");

    const data: LogInData = { email, password };
    const currentUser = await logIn(data);

    setCurrentUser(currentUser);
    alert("로그인 성공~!");

    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col items-center gap-y-4"
    >
      <Input
        ref={emailInputRef}
        label="이메일 주소"
        type="email"
        wrapperClassName="w-80"
      />
      <Input
        ref={passwordInputRef}
        label="비밀번호"
        type="password"
        wrapperClassName="w-80"
      />

      <Button className="w-80">로그인하기</Button>
    </form>
  );
}

export default LogInForm;
