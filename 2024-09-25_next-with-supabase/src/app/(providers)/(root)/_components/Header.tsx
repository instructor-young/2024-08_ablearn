"use client";

import supabase from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";
import { useShallow } from "zustand/shallow";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);

  const handleClickLogOut = () => {
    supabase.auth.signOut();
  };

  console.log(isLoggedIn, isAuthInitialized);

  return (
    <header className="flex border-b border-black">
      <Link href={"/"}>홈</Link> |{" "}
      <Link href={"/students/new"}>학생 추가하기</Link>
      {isAuthInitialized ? (
        <div className="ml-auto">
          {isLoggedIn ? (
            <>
              <Link href={"/profile"}>프로필 관리</Link> |
              <button onClick={handleClickLogOut}>로그아웃</button>
            </>
          ) : (
            <>
              <Link href={"/log-in"}>로그인</Link> |{" "}
              <Link href={"/sign-up"}>회원가입</Link>
            </>
          )}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
