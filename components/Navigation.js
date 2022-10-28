import styles from "../styles/Nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const contentClassname = isNavExpanded
    ? `${styles["nav-open"]} ${styles.mobileMenu}`
    : styles.mobileMenu;
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.navMain}>
          <div className={styles.logo}>
            <img src="/tigerlogo.svg" className={styles.logo} alt="" />
          </div>
          <div className={styles.navMobile}>
            <GiHamburgerMenu
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              className={styles.hamburger}
            />
          </div>
        </div>

        <div className={styles.menu}>
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

            <div className={styles.cta}>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className={contentClassname}>
        <IoCloseSharp
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className={styles.close}
        />
        <div className={styles.mobilenavItems}>
          <div className={styles.navItem}>
            <a href="#">Home</a>
          </div>
          <div className={styles.navItem}>
            <a href="#">Services</a>
          </div>
          <div className={styles.navItem}>
            <a href="#">About us</a>
          </div>

          <div className={styles.cta}>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </main>
  );
}
