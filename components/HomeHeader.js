import styles from "../styles/Home.module.css";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

export default function HomeHeader() {
  return (
    <main className={styles.main}>
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={styles.flex}
      >
        <div className={styles.mainContainer}>
          <div className={styles.mainText}>
            <h1>
              Think. Make. <span className="block">Solve.</span>
            </h1>
            <p>
              we offer various solutions for promoting your company and
              achieving its maximum potential.
            </p>
            <div className={styles.cta}>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src="/test.png" className={styles.mainImg} alt="" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
