"use client";

import { supabase } from "@/supabase/client.supabase";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function LogInForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClickLogInButton = async () => {
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!email) return alert("이메일 입력해 주세요");
    if (!password) return alert("비밀번호 입력해 주세요");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return alert("로그인에 실패하였습니다");

    alert("로그인에 성공하였습니다");
    router.push("/");
  };

  return (
    <div>
      <input ref={emailInputRef} placeholder="이메일" type="text" />
      <input ref={passwordInputRef} placeholder="비밀번호" type="password" />
      <button onClick={handleClickLogInButton}>로그인하기</button>
    </div>
  );
}

export default LogInForm;
