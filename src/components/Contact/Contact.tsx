import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="contact" className={styles.main}>
      <div className={styles.form}>
        

        <div className={styles.inputs}>
        <h1 className={styles.h1}>Напишіть мені</h1>
          <div>
            <input type="text" placeholder="Ім'я" className={styles.input} />
            <input
              type="phone"
              placeholder="Телефон"
              className={styles.input}
            />
          </div>
          <input type="email" placeholder="Пошта" className={styles.input} />
          <input
            type="text"
            placeholder="Повідомлення"
            className={styles.input}
          />

          <button className={styles.send}>Надіслати</button>
        </div>
      </div>
    </div>
  );
}
