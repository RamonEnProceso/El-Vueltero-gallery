"use client"
import Image from "next/image"
import Overlay from "./overlay"
import { useRef, useEffect, useState } from "react"
import styles from "./gallery.module.css"

interface artwork{
    title:string,
    date:string,
    url:string,
    description: string,
    tags: string[],
    objectPosition?: string
}

const Artwork = ({artwork} : {artwork : artwork}) =>{

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const [isHover, setHover] = useState(false)

    const handleEnter = () => {
        videoRef.current?.play();
        setHover(true)
    };

    const handleLeave = () => {
        if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        }
        if(photoRef.current){
            photoRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
        if(imageRef.current){
                    imageRef.current.style.background = ``;
        }
        setHover(false)
    };

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(isHover){
            const rect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const centerX = mouseX - rect.width/2;
            const centerY = mouseY - rect.height/2;

            const xPercent = mouseX / rect.width * 100;
            const yPercent = mouseY / rect.height * 100;

            if(photoRef.current){
                photoRef.current.style.transform = `rotateX(${centerY/9}deg) rotateY(${centerX/7}deg) translateY(-5%) scale(1.20)`;
                if(imageRef.current){
                    imageRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%,#ffffff46,transparent 70%)`;
                }
            }
        }
    }

    return <div ref={photoRef} className={styles.gallery_artwork_container} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove}>
    <div className={styles.gallery_artwork}>
                <Overlay text={artwork.title} videoRef={videoRef}></Overlay>
                <div ref={imageRef} className={styles.glare}>
                </div>
                <Image 
                    src={artwork.url} 
                    alt={artwork.title} 
                    style={{
                        objectFit: "cover",
                        ...(artwork.objectPosition && {objectPosition: artwork.objectPosition})
                    }}
                    fill
                    sizes="20vw"
                />
            </div>
    </div>
}

export default Artwork