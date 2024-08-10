import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import FirstScreen from "@/components/FirstScreen/FirstScreen";
import Posluhy from "@/components/Posluhy/Posluhy";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav/>
        <FirstScreen/>
        <Posluhy/>
        <Contact/>
    </main>
  );
}
