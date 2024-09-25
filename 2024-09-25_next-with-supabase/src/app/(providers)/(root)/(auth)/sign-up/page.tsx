"use client";

import supabase from "@/supabase/client";
import React, { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignUp = async () => {
    if (!email.includes("@") || !email.includes("."))
      return alert("올바른 이메일 주소를 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const result = await supabase.auth.signUp({ email, password });

    console.log(result);
  };

  return (
    <div>
      <h1>회원가입하기</h1>

      <input
        placeholder="이메일"
        type="email"
        className="border border-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="비밀번호"
        type="password"
        className="border border-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClickSignUp}>회원가입하기</button>
    </div>
  );
}

export default SignUpPage;
