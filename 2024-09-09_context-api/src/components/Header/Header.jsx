import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function Header() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header className="border-b flex gap-x-5">
      <Link to="/">홈</Link>
      {isLoggedIn ? (
        <Link to="/my-page">마이 페이지</Link>
      ) : (
        <>
          <Link to="/sign-up">회원가입</Link>
          <Link to="/log-in">로그인</Link>
        </>
      )}
    </header>
  );
}

export default Header;
