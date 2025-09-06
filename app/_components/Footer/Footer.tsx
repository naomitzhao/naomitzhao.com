import React from "react";
import styles from './Footer.module.scss'

export function Footer() {
    return (
        <div className={styles.footer}>
            <p>
                made with ♡ by naomi zhao
                --
                image credit: <a href="https://pixabay.com/users/pexels-2286921/">Pexels</a>
            </p>
        </div>
    );
}