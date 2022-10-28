import styles from "../styles/Companies.module.css";

export default function Companies({ data }) {
  return (
    <main className={styles.main}>
      <p className={styles.text}>Companies we helped develop and grow</p>
      <div className={styles.companiesContainer}>
        {data.map((company, index) => {
          return (
            <div className={styles.company} key={index}>
              <img src={company} alt="" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
