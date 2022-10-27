import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeHeader from "../components/HomeHeader";
import Navigation from "../components/Navigation";
import BecomePartner from "../components/BecomePartner";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader />
      <BecomePartner />
      <Contact />
    </div>
  );
}
