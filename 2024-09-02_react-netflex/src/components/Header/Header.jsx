import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        NETFLEX
      </Link>

      <Link to="/sign-up" className={styles.link}>
        회원가입
      </Link>
    </header>
  );
}

export default Header;
