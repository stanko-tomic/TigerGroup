import styles from "../styles/Work.module.css";
import { motion } from "framer-motion";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={styles.main}
    >
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
    </motion.div>
  );
}

export default Work;
