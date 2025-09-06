import React from "react";
import styles from "./Navbar.module.scss"
import Link from "next/link";

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navLinkList}>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/portfolio">portfolio</Link>
                </li>
                <li>
                    <Link href="/blog">blog</Link>
                </li>
            </ul>
        </div>
    );
}