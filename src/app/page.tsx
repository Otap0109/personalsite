import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import FirstScreen from "@/components/FirstScreen/FirstScreen";
import Posluhy from "@/components/Posluhy/Posluhy";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav/>
        <FirstScreen/>
        <Posluhy/>
        <Contact/>
        <Footer/>
    </main>
  );
}
