import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const markup = galleryItems.map (({preview, original, description}) => {
    return `
    <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}"/>
    </a>`
}) .join("");
console.log(markup);

const gallaryList = document.querySelector('.gallery');
gallaryList.insertAdjacentHTML('beforeend', markup);

gallaryList.addEventListener ('click', onGalleryItemClick )

function onGalleryItemClick(evt){

    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
    return;
}
    
let galleryLightbox = new SimpleLightbox('.gallery a', 
{ captionsData: 'alt',
captionDelay: 250,
})
}

