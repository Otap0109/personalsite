import React from "react";
import Image from "next/image";
import styles from "./Posluhy.module.css";
import { contentList } from "@/assets/lib/texts";

export default function Posluhy() {
  return (
    <main className={styles.wrapper} id="posluhy">
{contentList.map((content, index) => (
        <div key={content.key} className={styles.row} id={content.idname}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.image}>
                {content.imageUrl}
              </div>
              <div>
                <p>{content.description}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p>{content.description}</p>
              </div>
              <div className={styles.image}>
                {content.imageUrl}
              </div>
            </>
          )}
        </div>
      ))}
    </main>
  );
}