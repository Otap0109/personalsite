import React from "react";
import Image from "next/image";
import styles from "./Posluhy.module.css";
import { contentList } from "@/assets/lib/texts";
import Grid from "../Grid/Grid";

export default function Posluhy() {
  return (
    <main className={styles.wrapper} id="posluhy">
      {contentList.map((content, index) => (
        <div key={content.key}>
          <div className={styles.row} id={content.idname}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.imagediv}>
                  <Image
                    fill={true}
                    src={content.imageUrl}
                    alt=""
                    className={styles.image}
                  />
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
                <div className={styles.imagediv}>
                  <Image
                    fill={true}
                    src={content.imageUrl}
                    alt=""
                    className={styles.image}
                  />
                </div>
              </>
            )}
          </div>
          {index === 1 && <Grid />}
        </div>
      ))}
    </main>
  );
}
