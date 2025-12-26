"use client"
import JudithCanvas from "./models/judith"
import styles from "./landing.module.css"
import Image from "next/image"
import TitleLanding from "./title"
import { useInView } from "react-intersection-observer"
import { LandingButtons, LandingSocial } from "./landingbuttons"

const Landing = ({onGallery}:{onGallery : () => void}) =>{

        const { ref, inView } = useInView({
                triggerOnce: true,
                rootMargin: "200px",
        });

        return <section className={styles.section_landing}>
        <TitleLanding title={"el vueltero"}></TitleLanding>
        <LandingButtons onGallery={onGallery}></LandingButtons>
        <LandingSocial></LandingSocial>
        <div ref={ref} className={styles.landing}>
                <h1>El Vueltero&apos;s Gallery</h1>
                {
                inView && (<>
                <div className={styles.judithContainer}>
                <JudithCanvas></JudithCanvas>
                </div>
                <div className={styles.newspaper_back}>
                        <Image src={"/assets/landing/newspaper_1.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className={`${styles.newspaper_back} ${styles.second}`}>
                        <Image src={"/assets/landing/tapes.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className={styles.logo_sticker}>
                        <Image src={"/assets/landing/el_vueltero_sticker.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className={styles.logo_grafitti}>
                        <Image src={"/assets/landing/el_vueltero_seal.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className={`${styles.logo_pen} ${styles.left}`}>
                        <video
                        src={"/assets/landing/el_vueltero_pen.webm#t=0.5"}
                        muted
                        playsInline
                        loop
                        autoPlay
                        style={{
                        width: "100px",
                        height: "auto"
                        }}
                        ></video>
                </div>
                <div className={`${styles.logo_pen} ${styles.right}`}>
                        <video
                        src={"/assets/landing/el_vueltero_pen.webm"}
                        muted
                        playsInline
                        loop
                        autoPlay
                        style={{
                        width: "100px",
                        height: "auto"
                        }}
                        ></video>
                </div>
                </>
                )
                }
        </div>
        <div className={styles.corner_container}>
                        <div className={`${styles.corner} ${styles.top_left}`}>
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                        <div className={`${styles.corner} ${styles.bottom_left}`}>
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                        <div className={`${styles.corner} ${styles.top_right}`}>
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                        <div className={`${styles.corner} ${styles.bottom_right}`}>
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                </div>
        </section>
}

export default Landing