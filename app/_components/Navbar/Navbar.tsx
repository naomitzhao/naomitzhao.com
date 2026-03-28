import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1>naomitzhao</h1>
      </Link>
      <ul className={styles.navLinkList}>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </div>
  );
}
