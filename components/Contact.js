import styles from "../styles/Contact.module.css";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.contactText}>
          Love to hear from you, <span className="block">Get in touch 👋.</span>
        </h1>
        <div className={styles.contactContainer}>
          <div className={styles.flex}>
            <div className={styles.inputContainer}>
              <label>Your name</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.inputContainer}>
              <label>Your name</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.inputContainer}>
              <label>Your name</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.inputContainer}>
              <label>Your name</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Your name</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className={styles.inputContainer}>
            <button className={styles.cta}>
              Send <ImArrowUpRight2 />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
