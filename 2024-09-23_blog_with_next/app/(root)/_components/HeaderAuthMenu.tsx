"use client";

import Button from "@/components/Button";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";
import React from "react";

function HeaderAuthMenu() {
  const { currentUser, setCurrentUser } = useAuthStore();

  const handleClickLogOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="ml-auto">
      {currentUser ? (
        <Button onClick={handleClickLogOut}>로그아웃</Button>
      ) : (
        <ul className="flex gap-x-4">
          <li>
            <Link href={"/log-in"}>로그인</Link>
          </li>
          <li>
            <Link href={"/sign-up"}>회원가입</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default HeaderAuthMenu;
