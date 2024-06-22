import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// Gallery
galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
    listItem.innerHTML =
        `<a class="gallery__link" href="${item.original}">
         <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"/>
        </a>
        `;
  galleryEl.append(listItem);
});

// Escape key
const escapeButton = (event, imageGallery) => {
  if (event.key === "Escape") {
    imageGallery.close();
    document.removeEventListener("keydown", onKeydown);
  }
};

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedOn = event.target;
  if (clickedOn.nodeName !== "IMG") {
    return;
  }

  // basicLightbox
  const imageGallery = basicLightbox.create(
    `<img src="${clickedOn.dataset.source}">`
  );
  imageGallery.show();

// keydown function and eventListner pentru tasta Escape sa inchida lightboxul
    const onKeydown = (e) => escapeButton(e, imageGallery);
    document.addEventListener("keydown", onKeydown);
});
