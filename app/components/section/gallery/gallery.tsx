import gallery from "../../../data/gallery.json"
import styles from "./gallery.module.css"
import Artwork from "./artwork"
interface artwork{
    title:string,
    date:string,
    url:string,
    description: string,
    tags: string[],
    objectPosition?: string
}

const chunkArray = (arr: artwork[], size:number) => {
    const newArr = [];
    for(let i = 0; i<arr.length; i += size){
        newArr.push(arr.slice(i, i+size))
    }
    return newArr
}

const Gallery = () =>{

    return <section className={styles.section_gallery}>
        <div className={styles.gallery}>{
            gallery.reverse().map((artwork, index) => {
                return <div key={index}>
                <Artwork artwork={artwork} key={index}></Artwork>
                </div>
            })
        }
        </div>
    </section>
}

export default Gallery