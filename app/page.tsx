import styles from "./page.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>hi, i&apos;m naomi!</h1>
          <div className={styles.subTexts}>
            <p>i&apos;m passionate about full-stack development, user experience, and constantly leveling up myself!</p>
          </div>
          <h2>some things i&apos;ve worked on...</h2>
          <ul>
            <li>
              <p>made <a href="https://naomitzhao.github.io/top-projects/">13 javascript mini projects</a> from <a href="https://www.theodinproject.com/">the odin project</a> in one summer</p>
            </li>
            <li>
              <p>developed homepage and various components for client project: <a href="https://ucdbestbuddies.org/">ucd best buddies</a></p>
            </li>
            <li>
              <p>tech lead for client project: <a href="https://www.joanviterimemorialclinic.com/">joan viteri memorial clinic</a></p>
            </li>
          </ul>
          <h2>what i&apos;m doing now</h2>
          <ul>
            <li>
              <p>web software engineering internship at <a href="https://robinhood.com/">robinhood</a></p>
            </li>
            <li>
              <p>web app client project for uc davis aggie fiction</p>
            </li>
            <li>
              <p>research at collaborative and social computing (csc) lab at uc davis</p>
            </li>
          </ul>
          <p>check out my github to see more of my work!</p>
        </div>
        <div className={styles.socialsIcons}>
          <a href="https://www.linkedin.com/in/naomitzhao/"><FaLinkedin className={styles.socialIcon}/></a>
          <a href="https://github.com/naomitzhao"><FaGithub className={styles.socialIcon}/></a>
        </div>
      </div>
    </div>
  );
}
