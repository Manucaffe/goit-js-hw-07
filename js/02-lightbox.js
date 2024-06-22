import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

//  Gallery
galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
    listItem.innerHTML = `
    <a class="gallery__link" href="${item.original}">
      <img 
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  `;
  galleryEl.append(listItem);
});

// SimpleLightbox for Gallery
const imageGallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// function for keydown
const onKeydown = (event) => {
  if (event.key === "Escape") {
    imageGallery.close();
    event.preventDefault();
  }
};
