import JudithCanvas from "../../models/judith"
import "./landing.modules.css"
import Image from "next/image"
import TitleLanding from "./title"

const Landing = () =>{
    return <section className="section_landing">
    <div className="landing">
        <h1>el vueltero&apos;s Gallery</h1>
        <TitleLanding title={"El vueltero"}></TitleLanding>
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
        <div className="esquinas top-left">
                <Image src={"/assets/landing/corner.webp"} 
                fill
                alt=""
                loading="eager"
                ></Image>
        </div>
        <div className="esquinas bottom-left">
                <Image src={"/assets/landing/corner.webp"} 
                fill
                alt=""
                loading="eager"
                ></Image>
        </div>
        <div className="esquinas top-right">
                <Image src={"/assets/landing/corner.webp"} 
                fill
                alt=""
                loading="eager"
                ></Image>
        </div>
        <div className="esquinas bottom-right">
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