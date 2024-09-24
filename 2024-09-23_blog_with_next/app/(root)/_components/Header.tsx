import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center px-5 py-4 container mx-auto max-w-screen-md border-b border-black">
      <Link href={"/"} className="font-2xl font-bold" prefetch={false}>
        My Blog
      </Link>

      <nav className="ml-20 text-[15px] text-medium">
        <ul>
          <li>
            <Link className="transition" href={"/posts/new"}>
              글 작성하기
            </Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto">
        <ul className="flex gap-x-4">
          <li>
            <Link href={"/log-in"}>로그인</Link>
          </li>
          <li>
            <Link href={"/sign-up"}>회원가입</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
