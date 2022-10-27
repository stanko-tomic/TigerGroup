import styles from "../styles/Nav.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navMain}>
      <div className={styles.navContainer}>
        <img src="/tigerlogo.svg" className={styles.logo} />

        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <a href="#">Home</a>
          </div>
          <div className={styles.navItem}>
            <a href="#">Services</a>
          </div>
          <div className={styles.navItem}>
            <a href="#">About us</a>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}
