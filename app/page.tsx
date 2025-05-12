import Image from "next/image";
import styles from "./page.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src="/naomi_pfp.jpg" fill alt="Selfie" className={styles.image}/>
        </div>
        <div className={styles.textContent}>
          <h1>hi, i&apos;m naomi!</h1>
          <div className={styles.subTexts}>
            <p>i&apos;m someone who&apos;s passionate about full-stack development, user experience, and learning as much as i can.</p>
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
            <li>
              <p>currently leading development for client project: uc davis aggie fiction...</p>
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
