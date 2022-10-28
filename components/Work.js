import styles from "../styles/Work.module.css";

function Work() {
  return (
    <div className={styles.main}>
      <h1>Our satisfied customers</h1>
      <div className={styles.gridContainer}>
        <div className={styles.workContainer}>
          <div className={styles.workImg}>
            <img src="/testmockup.webp" alt="" />
          </div>
          <div className={styles.workContent}>
            <h4>Ciphers</h4>
            <p>E2E Encrypted chat platform</p>
          </div>
        </div>
        <div className={styles.workContainer}>
          <div className={styles.workImg}>
            <img src="/testmockup.webp" alt="" />
          </div>
          <div className={styles.workContent}>
            <h4>Ciphers</h4>
            <p>E2E Encrypted chat platform</p>
          </div>
        </div>
        <div className={styles.workContainer}>
          <div className={styles.workImg}>
            <img src="/testmockup.webp" alt="" />
          </div>
          <div className={styles.workContent}>
            <h4>Ciphers</h4>
            <p>E2E Encrypted chat platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
