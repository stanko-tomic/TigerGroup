import styles from "../styles/Home.module.css";
import HomeHeader from "../components/HomeHeader";
import BecomePartner from "../components/BecomePartner";
import Contact from "../components/Contact";
import Companies from "../components/Companies";
import Work from "../components/Work";

const companies = ["/cipherslogo.png", "/belgusto.png", "shot.png"];

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <Companies data={companies} />
      <Work />
      <BecomePartner />
      <Contact />

      {/* <Footer /> */}
    </div>
  );
}
