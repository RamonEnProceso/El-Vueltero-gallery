"use client"
import { useRef, useEffect } from "react"
import styles from "./gallery.module.css"

const GalleryTitle = () =>{

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(()=>{
        const video = videoRef.current;
        if(!video) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    video.play();
                }else{
                    video.pause();
                }
            },
            {
                threshold: 0.6
            }
        );

        observer.observe(video);

        return () => observer.disconnect();
    })
    

    return <video
    className={styles.gallery_title}
    ref={videoRef}
    src={"./assets/gallery/title.webm"}
    muted
    playsInline
    ></video>
}

export default GalleryTitle