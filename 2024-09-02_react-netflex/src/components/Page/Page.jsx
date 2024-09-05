import styles from "./Page.module.scss";

function Page({ children }) {
  return <main className={styles.page}>{children}</main>;
}

export default Page;
