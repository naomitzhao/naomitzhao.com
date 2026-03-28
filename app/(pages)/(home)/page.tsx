import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.stickerWrapper}>
          <Image src="/naomi_sticker.png" fill alt="Sticker of Naomi Zhao" />
        </div>
        <div className={styles.speech}>
          <div className={styles.speechText}>
            <h2>HEY! I&apos;m Naomi 🙀</h2>
            <p>Welcome to my corner of the internet!</p>
            <p>
              I&apos;m a software engineer who loves web dev, devouring yummy
              food, and living my best life (yippee!)
            </p>
          </div>
        </div>
        <div className={styles.naomiCrunchwrapWrapper}>
          <Image
            src="/naomi_crunchwrap.png"
            fill
            alt="Naomi with a Taco Bell crunchwrap"
          />
        </div>
      </div>
      <div className={styles.homeAbout}>
        <div className={styles.naomiIconWrapper}>
          <Image src="/naomi_linkedin.jpeg" alt="Naomi headshot photo" fill />
        </div>
        <div className={styles.homeAboutText}>
          <h2>I am currently up to...</h2>
          <ul>
            <li>
              studying computer science and engineering (BS) and economics (BA)
              at <a href="https://www.ucdavis.edu/">UC Davis</a>
            </li>
            <li>
              leading <a href="https://includedavis.com/">#include at Davis</a>
            </li>
            <li>living my best life :D</li>
          </ul>
          <p>
            To see my full experiences, check out the{" "}
            <Link href="/about">about page</Link>!
          </p>
        </div>
      </div>
      <div className={styles.pageEnd}>
        <div className={styles.beeWrapper}>
          <Image
            src="/bee_gif.gif"
            alt="Animation of Minecraft bee illustration"
            fill
          />
        </div>
        <p>Looks like you&apos;ve reached the end!</p>
      </div>
    </div>
  );
}
