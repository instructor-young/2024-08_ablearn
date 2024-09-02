import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <a className={styles.logoLink} href="/">
          NETFLEX
        </a>
      </h1>
    </header>
  );
}

export default Header;
