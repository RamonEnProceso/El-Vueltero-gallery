import { texts } from "@/app/i18n/texts"
import { useLanguage } from "@/app/i18n/LanguageContext"

const LandingButtons = (
    {onGallery}:{onGallery : () => void}
) =>{
    
    const { language } = useLanguage()
    const t = texts[language]
    
    return <>
        <button onClick={onGallery}>{t.buttongallery}</button>
    </>
}

export default LandingButtons