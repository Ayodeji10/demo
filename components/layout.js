import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
