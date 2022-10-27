import styles from "../styles/Partner.module.css";
import Navigation from "./Navigation";

export default function BecomePartner() {
  return (
    <main className={styles.main}>
      <div className={styles.partnerText}>
        <h1>Become a Partner</h1>
        <p>Our mission is to help startups and businesses grow.</p>
      </div>

      <div className={styles.peopleImage}></div>
    </main>
  );
}
