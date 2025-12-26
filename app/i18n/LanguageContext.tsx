"use client"
import { createContext, useState, useContext } from "react"
import type { Language } from "./texts"

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const useLanguage = () => {
    const ctx = useContext(LanguageContext)
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider")
    }
    return ctx
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>("es")

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

