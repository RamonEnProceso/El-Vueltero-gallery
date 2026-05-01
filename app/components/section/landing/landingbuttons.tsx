import { texts } from "@/app/i18n/texts"
import { useLanguage } from "@/app/i18n/LanguageContext"
import styles from "./landing.module.css"
import Image from "next/image"

export const LandingButtons = (
    {onGallery}:{onGallery : () => void}
) =>{
    
    const { language } = useLanguage()
    const t = texts[language]
    
    return <div className={styles.button_container}>
        <button onClick={onGallery}>{t.buttongallery}</button>
    </div>
}

export const LandingSocial = () =>{
    return <div className={styles.social_container}>
        <a href="https://www.instagram.com/ranuuki_atr/" target="_blank"><Image
        src="./assets/landing/instagram.webp"
        alt="Instagram link"
        width={50}
        height={50}
        ></Image></a>
        
    </div>
}
