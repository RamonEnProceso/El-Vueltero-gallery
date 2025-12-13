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

    const gallerySliced= chunkArray(gallery,6);

    return <section className={styles.section_gallery}>
        <div className={styles.gallery}>{
            gallerySliced.map((part, index) => {
                return <div className={styles.gallery_row} key={index}>
                    {part.map((artwork, index)=>{
                        return <Artwork artwork={artwork} key={index}></Artwork>
                        }
                    )}
                </div>
            })
        }
        </div>
    </section>
}

export default Gallery