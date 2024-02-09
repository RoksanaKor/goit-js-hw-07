import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

//ALTERNATIVE CODE
//
// createGallery();
// function createGallery() {
//   let newGallery = [];
//   for (let i = 0; i < galleryItems.length; i++) {
//     const listElement = document.createElement("li");
//     const imageLink = document.createElement("a");
//     imageLink.setAttribute("href", galleryItems[i].original);
//     imageLink.classList.add("gallery__item");
//     const imageElement = document.createElement("img");
//     imageElement.classList.add("gallery__image");
//     imageElement.setAttribute("src", galleryItems[i].preview);
//     imageElement.setAttribute("alt", galleryItems[i].description);
//     listElement.appendChild(imageLink);
//     imageLink.appendChild(imageElement);
//     newGallery.push(listElement);
//   }
//   gallery.append(...newGallery);
// }

const galleryHelp = galleryItems
  .map(
    (value) =>
      `<a href="${value.original}" class="gallery__item">
        <img
          class="gallery__image"
          src="${value.preview}"
          alt="${value.description}"
        ></img>
      </a>`
  )
  .join("");

gallery.innerHTML = galleryHelp;

const lightBox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
