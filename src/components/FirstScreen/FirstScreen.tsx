import React from "react";
import Image from "next/image";
import styles from "./FirstScreen.module.css";

export default function FirstScreen() {
  return (
    <header>
      <div className={styles.main}>

      </div>
      <h1 className={styles.text}>
        Привіт! Я — Ліля, гід, екскурсовод, викладачка, перекладачка та
        організаторка подорожей
      </h1>
    </header>
  );
}
