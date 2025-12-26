import gallery from "../../../data/gallery.json"
import styles from "./gallery.module.css"
import Artwork from "./artwork"
import GalleryTitle from "./galleryTitle"

const Gallery = ({galleryRef}:{galleryRef:React.RefObject<HTMLElement| null>}) =>{

    return <section className={styles.section_gallery} ref={galleryRef}>
        <GalleryTitle></GalleryTitle>
        <div className={styles.gallery}>{
            [...gallery].reverse().map((artwork, index) => {
                return <div key={index}>
                <Artwork artwork={artwork} key={index}></Artwork>
                </div>
            })
        }
        </div>
    </section>
}

export default Gallery