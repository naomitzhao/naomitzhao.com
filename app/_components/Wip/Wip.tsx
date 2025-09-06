import styles from "./Wip.module.scss";
import Image from "next/image";

export default function Wip() {
  return (
    <>
      <div className={styles.backgroundImage}>
        <Image src="/light_clouds.jpg" alt="Background image of light sky with clouds" fill/>
      </div>
      <div className={styles.content}>
        <h2>currently under construction...</h2>
        <p>check back later! :{')'}</p>
      </div>
    </>
  );
}