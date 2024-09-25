"use client";

import supabase from "@/supabase/client";
import React, { useEffect, useState } from "react";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogIn = async () => {
    if (!email.includes("@") || !email.includes("."))
      return alert("올바른 이메일 주소를 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const result = await supabase.auth.signInWithPassword({ email, password });

    console.log(result);
  };

  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
    })();
  }, []);

  return (
    <div>
      <h1>로그인하기</h1>

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
      <button onClick={handleClickLogIn}>로그인하기</button>
    </div>
  );
}

export default LogInPage;
