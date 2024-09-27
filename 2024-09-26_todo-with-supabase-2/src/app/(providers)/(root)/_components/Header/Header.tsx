"use client";

import { useAuth } from "@/contexts/auth.context";
import supabase from "@/supabase/supabase.client";
import Link from "next/link";
import React from "react";

function Header() {
  const { isAuthInitialized, isLoggedIn } = useAuth();

  const handleClickLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="border-b h-16 flex items-center px-5">
      <Link href={"/"} className="text-2xl font-bold">
        투두2
      </Link>

      {isAuthInitialized &&
        (isLoggedIn ? (
          <button onClick={handleClickLogOut} className="ml-auto">
            로그아웃
          </button>
        ) : (
          <div className="ml-auto">
            <Link href="/log-in" className="mr-4">
              로그인
            </Link>
            <Link href="/sign-up">회원가입</Link>
          </div>
        ))}
    </header>
  );
}

export default Header;
