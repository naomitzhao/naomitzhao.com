import styles from "./page.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>hi, i&apos;m naomi!</h1>
          <div className={styles.subTexts}>
            <p>i'm someone who's passionate about full-stack development, user experience, and learning as much as i can.</p>
            <p>check out my github to see some of my work!</p>
          </div>
        </div>
        <div className={styles.socialsIcons}>
          <a href="https://www.linkedin.com/in/naomitzhao/"><FaLinkedin className={styles.socialIcon}/></a>
          <a href="https://github.com/naomitzhao"><FaGithub className={styles.socialIcon}/></a>
        </div>
      </div>
    </div>
  );
}
