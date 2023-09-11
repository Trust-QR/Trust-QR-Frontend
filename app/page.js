import Image from "next/image";
import styles from "./page.module.css";
import Button from "./component/button";
import WhatIs from "./component/whatIs";
import HowItWorks from "./component/How";
import Trusted from "./component/trusted";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <WhatIs />
        <Trusted />
        <HowItWorks />
      </main>
    </>
  );
}
