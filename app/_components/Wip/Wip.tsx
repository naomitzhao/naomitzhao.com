import { BackgroundImage } from "../BackgroundImage/BackgroundImage";
import styles from "./Wip.module.scss";

export default function Wip() {
  return (
    <>
      <div className={styles.content}>
        <h2>currently under construction...</h2>
        <p>check back later! :{')'}</p>
      </div>
    </>
  );
}