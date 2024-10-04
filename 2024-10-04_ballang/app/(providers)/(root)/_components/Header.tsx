import Link from "next/link";
import HeaderAuthMenus from "./HeaderAuthMenus";

function Header() {
  return (
    <header className="px-5 h-16 flex items-center border-b border-black">
      <Link href={"/"}>발랑</Link>

      <nav className="ml-20">
        <ul>
          <li>
            <Link href={"/brands"}>BRANDS</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthMenus />
    </header>
  );
}

export default Header;
