import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const makeTransactionRole = makeGalleryPicture(galleryItems);

galleryEl.innerHTML = makeTransactionRole;

function makeGalleryPicture(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li>
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src= ${preview} alt="${description}" />
    </a>
    </li>
    `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  animationSpeed: 250,
});
