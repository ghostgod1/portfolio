import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ankit</h1>
                <p className={styles.description}>Welcome to my portfolio! I'm an aspiring full-stack developer and AI enthusiast currently pursuing an Engineering degree with a focus on Artificial Intelligence.</p>
                <a href="mailto:ankit01.pandey02@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}