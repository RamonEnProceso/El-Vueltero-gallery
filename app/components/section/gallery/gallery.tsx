import gallery from "../../../data/gallery_render.json"
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
        <div className={`${styles.backgroundSide} ${styles.right}`}></div>
        <div className={`${styles.backgroundSide} ${styles.left}`}></div>
    </section>
}

export default Gallery