"use client"
import { fontsArray, varArray } from "./textFonts"
import { useState, useEffect } from "react"
import styles from "./landing.module.css"

const WordTitle = ({word, fontsArray}:{word:string, fontsArray:string[]}) =>{
    const [font, setFont] = useState(fontsArray[0]);

    useEffect(() => {
    const interval = setInterval(() => {
      const num = Math.floor(Math.random() * fontsArray.length);
      setFont(fontsArray[num]);
    }, 800);

    return () => clearInterval(interval);
    }, [fontsArray]);

    return word === " "? <div className={styles.title_landing_space}></div> :
    <div className={`${styles.title_landing_word} ${varArray.join(" ")}`}>
        <p className={styles[font]}>{word}</p>
    </div>
}

const TitleLanding = ({title}:{title:string}) => {
    const wordsArray = title.split("")

    return <div className={styles.title_landing}>
        {wordsArray.map((word, index)=>{
            return <WordTitle word={word} key={index} fontsArray={fontsArray}></WordTitle>
        })}
    </div>
}

export default TitleLanding