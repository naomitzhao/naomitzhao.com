import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.stickerWrapper}>
          <Image src="/naomi_sticker.png" fill alt="Sticker of Naomi Zhao"/>
        </div>
        <div className={styles.speech}>
          <Image src="/speech_bubble.svg" fill alt="Speech bubble"/>
          <div className={styles.speechText}>
            <h2>HEY! I&apos;m Naomi 🙀</h2>
            <p>Welcome to my corner of the internet!</p>
            <p>I&apos;m a software engineer who loves web dev, devouring yummy food, and living my best life (yippee!)</p>
          </div>
        </div>
      </div>
      <div className={styles.homeAbout}>
        <div className={styles.naomiIconWrapper}>
          <Image src="/naomi_linkedin.jpeg" alt="Naomi headshot photo" fill/>
        </div>
        <div className={styles.homeAboutText}>
          <h2>I am currently up to...</h2>
          <ul>
            <li>studying computer science and engineering (BS) and economics (BA) at UC Davis</li>
            <li>leading #include at Davis</li>
            <li>living my best life :D</li>
          </ul>
          <p>To see my full experiences, check out the <Link href="/about">about page</Link>!</p>
        </div>
      </div>
    </div>
  );
}
