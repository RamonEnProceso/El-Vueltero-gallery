/// <reference lib="es2015" />

const gallery = document.getElementById("gallery") as HTMLElement;

//Load the Json file
async function loadImages(){

    interface Artwork{
        title: string,
        date: string,
        url:string,
        description:string,
        tags: string[],
        "object-position"?: string
    }

    const answer = await fetch("artwork.json");
    const images = await answer.json();

    //For each element in the array, create a new div with an image
    images.forEach((element: Artwork) => {
        const year = new Date(element["date"]).getFullYear();
        const objectPosition = element["object-position"] || "0% 0%"
        gallery.innerHTML += `<div class="gallery_item"><img class="gallery_img" loading="lazy" style="object-position:${objectPosition}" src="${element["url"]}">
        <p class="gallery_info"><span class="gallery_title">${element["title"]}</span><span class="gallery_year">${year}</span></p></div>`
        }
    );
}

const resetGallery = () =>{
    gallery.innerHTML = "";
}

loadImages()