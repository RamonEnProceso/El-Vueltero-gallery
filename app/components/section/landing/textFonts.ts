import { Syne } from "next/font/google"
import { Bebas_Neue } from "next/font/google"
import { Archivo_Black } from "next/font/google"
import { Rubik_Dirt } from "next/font/google"
import { Special_Elite } from "next/font/google"
import { New_Rocker } from "next/font/google"
import { Inter } from "next/font/google"

const syne = Syne({
    weight: ["400", "700", "800"],
    subsets: ["latin"],
    variable: "--font-syne",
})

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable:"--font-bebas-neue",
})

const archivoBlack = Archivo_Black({
    weight: "400",
    subsets: ["latin"],
    variable:"--font-archivo-black"
})

const rubikDirt = Rubik_Dirt({
    weight: "400",
    subsets: ["latin"],
    variable:"--font-rubik-dirt"
})

const specialElite = Special_Elite({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-special-elite",
})

const newRocker = New_Rocker({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-new-rocker",
})

const inter = Inter({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-inter",
})


const fontsArray = [
    "syne",
    "specialelite",
    "rubikdirt",
    "rubikglitch",
    "tiltprism",
    "newrocker",
    "bebasneue",
    "archivoblack",
    "inter",
    "impact",
    "sansserif",
    "sansseriflower", 
]

const varArray = [
    syne.variable,
    specialElite.variable,
    rubikDirt.variable,
    bebasNeue.variable,
    archivoBlack.variable,
    newRocker.variable,
    inter.variable
]

export {fontsArray, varArray}