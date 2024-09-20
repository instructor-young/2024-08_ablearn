import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto container max-w-screen-lg flex items-center">
        <Link href="/">고양이나라</Link>

        <nav className="ml-20">
          <ul>
            <li>
              <Link href={"/movies"}>영화 목록</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
