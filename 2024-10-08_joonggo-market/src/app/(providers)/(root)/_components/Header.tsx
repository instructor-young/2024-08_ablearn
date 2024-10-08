"use client";

import { supabase } from "@/supabase/client.supabase";
import { useAuthStore } from "@/zustand/auth.store";
import Link from "next/link";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);

  const handleClickLogOut = () => supabase.auth.signOut();

  return (
    <header className="border-b border-black">
      <div className="container mx-auto max-w-screen-xl h-16 flex items-center px-5">
        <Link className="font-bold text-lg" href={"/"}>
          중고마켓
        </Link>

        {isAuthInitialized && isLoggedIn && (
          <nav className="ml-20">
            <ul className="flex gap-x-4">
              <li>
                <Link href="/deals/new">판매글 작성하기</Link>
              </li>
              <li>
                <Link href="/deals/mine">내 판매글 보기</Link>
              </li>
            </ul>
          </nav>
        )}

        {isAuthInitialized ? (
          <div className="ml-auto flex gap-x-4">
            {isLoggedIn ? (
              <button onClick={handleClickLogOut}>로그아웃</button>
            ) : (
              <>
                <Link href="/log-in">로그인</Link>
                <Link href="/sign-up">회원가입</Link>
              </>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
