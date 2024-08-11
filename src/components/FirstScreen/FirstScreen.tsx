import React from "react";
import Image from "next/image";
import styles from "./FirstScreen.module.css";
import mum from "@/assets/images/mum.jpeg";

export default function FirstScreen() {
  return (
    <header className={styles.main}>
      <div className={styles.right}>
        <h1 className={styles.h1}>
          Привіт, я - Ліля, мені трохи більше 40, і всі ці роки я в дорозі,
          знайомлюся з новими людьми, вивчаю нові місця, історії та традиції, і
          я маю багато чого вам розказати і показати.
        </h1>
      </div>
      <div>
        <Image src={mum} alt="photo" className={styles.image}></Image>
      </div>
    </header>
  );
}
