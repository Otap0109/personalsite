import React from 'react'
import Image from 'next/image'
import styles from './FirstScreen.module.css'
import mum from '@/assets/images/mum.jpg'

export default function FirstScreen() {
  return (
    <header className={styles.main}>
        <div className={styles.right}><h1 className={styles.h1}>Lorem Ipsum</h1></div>
        <div><Image src={mum} alt='photo' className={styles.image}></Image></div>
    </header>
  )
}