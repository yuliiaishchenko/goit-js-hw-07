import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGalleryMarkup (items) {
    return items.map(({preview, original, description}) => {
        return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" 
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"/>
    </a>
    </div>`}).join("");
};

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImageClick);

function onImageClick (e) {
    blockStandardAction(e);
    if (e.target.nodeName !== "IMG") { return;}


    const instance = basicLightbox .create (`
    <img src = "${e.target.dataset.source}" width = "800" height = "600">`);
    instance.show();

divRef.addEventListener("keydown", (e) => {if (e.code === 'Escape'){
    instance.close();
}});

}

function blockStandardAction (e) {
    e.preventDefault();
}
