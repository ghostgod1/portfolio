import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage} 
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Cursor Icon" 
                        />
                        <div className={styles.aboutItemsText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                🚀I'm Frontend developer crafting seamless user
                                experiences with a passion for clean 
                                code! 💻✨#FrontendDev #CodeArtisan
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="Server Icon" 
                        />
                        <div className={styles.aboutItemsText}>
                            <h3>Backend Developer</h3>
                            <p>
                                💻Backend developer with a knack for architecting 
                                robust systems and a dash of experience in the 
                                server-side realm! Crafting code magic behind the 
                                scenes. 🚀 #BackendDev #CodeJourney
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="Android Icon" 
                        />
                        <div className={styles.aboutItemsText}> 
                            <h3>Android developer</h3>
                            <p>
                            📱 Android and Flutter developer navigating 
                            the mobile landscape, blending native and 
                            cross-platform wizardry. Crafting user-centric 
                            experiences with a touch of code artistry! 
                            🚀 #MobileDev #Flutter
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};