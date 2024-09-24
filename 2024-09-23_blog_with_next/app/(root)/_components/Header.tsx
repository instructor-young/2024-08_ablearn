import Link from "next/link";
import React from "react";
import HeaderAuthMenu from "./HeaderAuthMenu";

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
              글 쓰기
            </Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthMenu />
    </header>
  );
}

export default Header;
