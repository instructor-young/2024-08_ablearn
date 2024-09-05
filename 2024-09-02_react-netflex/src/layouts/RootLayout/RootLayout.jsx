import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./RootLayout.module.scss";

function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Header />

      <Outlet />
    </div>
  );
}

export default RootLayout;
