import { AiFillHeart } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      Made with
      <AiFillHeart className={styles.heart} />
    </div>
  );
}

export default Footer;
