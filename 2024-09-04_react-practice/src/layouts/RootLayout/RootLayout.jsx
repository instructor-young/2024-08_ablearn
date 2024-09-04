import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <Link to="/">홈</Link>|<Link to="/posts">전체 포스트</Link>
      </header>

      <hr />

      <Outlet />

      <hr />

      <footer>이곳은 푸터입니다</footer>
    </>
  );
}

export default RootLayout;
