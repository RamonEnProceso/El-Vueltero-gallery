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
                <Image src={"/assets/landing/1.png"} 
                fill
                alt=""
                ></Image>
        </div>
        <div className="newspaper_back">
                <Image src={"/assets/landing/2.png"} 
                fill
                alt=""
                ></Image>
        </div>
    </div>
    </section>
}

export default Landing