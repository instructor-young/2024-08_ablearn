"use client";

import supabase from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";

function TodoHeader() {
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logOut = useAuthStore((state) => state.logOut);

  const handleClickLogOut = () => {
    logOut();
    supabase.auth.signOut();
  };

  return (
    <header className="border-b px-5 h-16 flex items-center justify-between">
      <Link href={"/"} className="text-xl font-bold">
        투두두📌
      </Link>

      {isAuthInitialized &&
        (isLoggedIn ? (
          <button onClick={handleClickLogOut}>로그아웃</button>
        ) : (
          <></>
        ))}
    </header>
  );
}

export default TodoHeader;
