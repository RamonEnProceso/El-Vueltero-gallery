"use client"
import Image from "next/image"
import Overlay from "./overlay"
import { useRef } from "react"
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

    const handleEnter = () => {
        videoRef.current?.play();
    };

    const handleLeave = () => {
        if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        }
    };

    return <div className={styles.gallery_pictures} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <Overlay text={artwork.title} videoRef={videoRef}></Overlay>
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
}

export default Artwork