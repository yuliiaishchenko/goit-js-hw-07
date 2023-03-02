import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGalleryMarkup (items) {
    return items.map((item) => `<div class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}"
    <img class = "gallery__image" 
    src = "${item.preview}"
    data-source = "${item.original}"
    alt = "${item.descriptions}"/>
    </a>
    </div>`).join("");
};

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup(galleryItems);

divRef.addEventListener("click", onImageClick);

function onImageClick (e) {
    blocStandardAction(e);
    if (e.target.nodeName !== "IMG") { return;}


    const instance = basicLightbox.create (`
    <img src = "${e.target.dataset.source} width = "800" height = "600">`);
    instance.show();

divRef.addEventListener("keydown", (e) => {if (e.code === "ESCAPE"){
    instance.close();
}});

}

function blockStandardAction (e) {
    e.preventDefault();
}
