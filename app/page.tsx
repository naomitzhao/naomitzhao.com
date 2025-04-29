import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>hi, i&apos;m naomi!</h1>
        <p>welcome to my personal site.</p>
        <p>currently a work in progres... maybe check back later?</p>
      </div>
    </div>
  );
}
