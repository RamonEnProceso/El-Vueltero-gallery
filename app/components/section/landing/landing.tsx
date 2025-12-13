"use client"
import JudithCanvas from "../../models/judith"
import "./landing.modules.css"
import Image from "next/image"
import TitleLanding from "./title"
import { useInView } from "react-intersection-observer"

const Landing = () =>{

        const { ref, inView } = useInView({
                triggerOnce: true,
                rootMargin: "200px",
        });

        return <section className="section_landing">
        <div ref={ref} className="landing">
                <h1>El Vueltero&apos;s Gallery</h1>
                {
                inView && (<>
                <TitleLanding title={"Ranuuki"}></TitleLanding>
                <div>

                </div>
                <div className="judithContainer">
                <JudithCanvas></JudithCanvas>
                </div>
                <div className="newspaper_back">
                        <Image src={"/assets/landing/newspaper_1.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className="newspaper_back second">
                        <Image src={"/assets/landing/tapes.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className="logo_sticker">
                        <Image src={"/assets/landing/el_vueltero_sticker.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className="logo_grafitti">
                        <Image src={"/assets/landing/el_vueltero_seal.webp"} 
                        fill
                        alt=""
                        loading="eager"
                        ></Image>
                </div>
                <div className="logo_pen left">
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
                <div className="logo_pen right">
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
                <div className="corner_container">
                        <div className="corner top-left">
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                        <div className="corner bottom-left">
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                        <div className="corner top-right">
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                        <div className="corner bottom-right">
                                <Image src={"/assets/landing/corner.webp"} 
                                fill
                                alt=""
                                loading="eager"
                                ></Image>
                        </div>
                </div>
                </>
                )
                }
        </div>
        </section>
}

export default Landing