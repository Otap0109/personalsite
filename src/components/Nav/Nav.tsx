import React, { startTransition } from 'react'
import styles from "./Nav.module.css"

export default function Nav(){
  return (
    <nav className={styles.nav}>
        <h2 className={styles.name}><a href="/">Лілія Прусік</a></h2>
        <ul className={styles.links}>
            <li className={styles.btn}><a href='#posluhy'>ПОСЛУГИ</a></li>
            <li className={styles.btn}><a href='#contact'>КОНТАКТИ</a></li>
            <li className={styles.btn}><a href='#posluhy'>ВІДГУКИ</a></li>
        </ul>
    </nav>
  )
}