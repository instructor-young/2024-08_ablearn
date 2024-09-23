import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="px-5 py-4 container mx-auto max-w-screen-md border-b border-black">
      <Link href={"/"} className="font-2xl font-bold">
        My Blog
      </Link>
    </header>
  );
}

export default Header;
