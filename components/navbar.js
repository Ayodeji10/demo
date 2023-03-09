import styles from "../styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src="/favicon.ico" />
      <Link href={"/"}>Home</Link>
      <Link href={"/events"}>Events</Link>
      <Link href={"/coins"}>Coins</Link>
    </nav>
  );
};

export default Navbar;
