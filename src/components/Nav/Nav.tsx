import styles from "./Nav.module.css";
import { contentList } from "@/assets/lib/texts";

export default function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <h2 className={styles.name}>
          <a href="/">Лілія Прусік</a>
        </h2>
        <div>
          <ul className={styles.links}>
            {contentList.map((content) => (
              <li key={content.key} className={styles.btn}>
                <a href={`#${content.idname}`}>{content.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
