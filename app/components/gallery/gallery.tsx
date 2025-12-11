import Image from "next/image"
import gallery from "../../data/gallery.json"
import "./gallery.modules.css"

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

const NameOverlay = ({text} : {text:string}) => {
    return <div className="overlay"><div className="overlay_icon"></div><div className="overlay_name"><p>{text}</p></div></div>
}

const Gallery = async () =>{

    const gallerySliced= chunkArray(gallery,6);

    return <section className="section_gallery">
        <div className="gallery">{
            gallerySliced.map((part, index) => {
                return <div className="gallery_row" key={index}>
                    {part.map((artwork, index)=>{
                        return <div className="gallery_pictures" key={index}>
                        <NameOverlay text={artwork.title}></NameOverlay>
                        <Image 
                        src={artwork.url} 
                        alt={artwork.title} 
                        style={{
                            objectFit: "cover",
                            ...(artwork.objectPosition && {objectPosition: artwork.objectPosition})
                        }}
                        fill
                        sizes="20vw"
                        /></div>
                        }
                    )}
                </div>
            })
        }
        </div>
    </section>
}

export default Gallery