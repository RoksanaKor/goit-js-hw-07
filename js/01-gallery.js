import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
createGallery();
function createGallery() {
 let newGallery =[];
 for (let i=0; i<galleryItems.length; i++) {
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("gallery__item");
  const imageLink = document.createElement("a");
  imageLink.setAttribute("href", galleryItems[i].original);
  imageLink.classList.add("gallery__link");
  imageDiv.appendChild(imageLink);
  const imageElement = document.createElement("img");
  imageElement.classList.add("gallery__image");
  imageElement.setAttribute("src", galleryItems[i].preview);
  imageElement.setAttribute("data-source", galleryItems[i].original);
  imageElement.setAttribute("alt", galleryItems[i].description);
  imageLink.appendChild(imageElement);
  newGallery.push(imageDiv);
 }
 gallery.append(...newGallery);
}

gallery.addEventListener("click", (event) => {
 event.preventDefault();
 if (event.target.nodeName !== "IMG") {
  return;
 }
 const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}"></img>`
)

instance.show();

})



