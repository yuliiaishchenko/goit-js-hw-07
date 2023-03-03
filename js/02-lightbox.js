import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery') ;

function createGalleryMarkup (items) {
    return items.map(({preview, original, description}) => {
        return `<li>
    <a class = "gallery__item" href = "${original}">
    <img class = "gallery__image" 
    src = "${preview}"
    alt = "${description}"/>
    </a>
    </li>`}).join("");
};

const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', addGalleryMarkup);

const lightBox = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});