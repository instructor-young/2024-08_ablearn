"use client";

import { supabase } from "@/supabase/client.supabase";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const router = useRouter();

  const handleChangeEmail: ComponentProps<"input">["onChange"] = (e) =>
    setEmail(e.target.value);
  const handleChangePassword: ComponentProps<"input">["onChange"] = (e) =>
    setPassword(e.target.value);
  const handleChangePasswordConfirm: ComponentProps<"input">["onChange"] = (
    e
  ) => setPasswordConfirm(e.target.value);

  const handleSubmitForm: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    if (!email) return alert("이메일 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (!passwordConfirm) return alert("비밀번호 확인을 입력해 주세요");
    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다");

    const response = await supabase.auth.signUp({ email, password });
    if (response.error) return alert("회원가입에 실패하였습니다.");

    alert("회원가입에 성공하였습니다.");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        value={email}
        onChange={handleChangeEmail}
        placeholder="이메일"
        type="text"
      />
      <input
        value={password}
        onChange={handleChangePassword}
        placeholder="비밀번호"
        type="text"
      />
      <input
        value={passwordConfirm}
        onChange={handleChangePasswordConfirm}
        placeholder="비밀번호 확인"
        type="text"
      />
      <button>회원가입하기</button>
    </form>
  );
}

export default SignUpForm;
