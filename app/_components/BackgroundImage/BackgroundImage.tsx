import React from "react";
import Image from "next/image";
import styles from "./BackgroundImage.module.scss"

export function BackgroundImage() {
    return(
        <div className={styles.backgroundImage}>
            <Image src="/light_clouds.jpg" alt="Background image of light sky with clouds" fill/>
        </div>
    );
}