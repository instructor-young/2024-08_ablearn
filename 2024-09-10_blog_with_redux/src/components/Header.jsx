import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container max-w-5xl flex p-4 mx-auto align-bottom">
        <Link
          to="/"
          className="text-lg font-bold text-white bg-black py-1 px-2 leading-none"
        >
          Blog with Redux
        </Link>

        <nav className="ml-32">
          <ul className="underline">
            <li>
              <Link
                to="/posts/create"
                className="hover:text-blue-400 transition-all"
              >
                New Post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
